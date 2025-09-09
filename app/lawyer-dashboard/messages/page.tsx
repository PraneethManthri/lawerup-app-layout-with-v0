"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function LawyerMessagesPage() {
  const [selectedChat, setSelectedChat] = useState("john-davis")
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: "john-davis",
      name: "John Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thank you for the update on my case. When is the next hearing?",
      time: "2m ago",
      unread: 2,
      status: "online",
      caseType: "Employment Law",
    },
    {
      id: "sarah-miller",
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've uploaded the documents you requested.",
      time: "1h ago",
      unread: 0,
      status: "offline",
      caseType: "Family Law",
    },
    {
      id: "michael-johnson",
      name: "Michael Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Can we schedule a video call for tomorrow?",
      time: "3h ago",
      unread: 1,
      status: "online",
      caseType: "Corporate Law",
    },
    {
      id: "emma-wilson",
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The settlement offer looks good. Should we proceed?",
      time: "1d ago",
      unread: 0,
      status: "offline",
      caseType: "Personal Injury",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "john-davis",
      content: "Hi Attorney Johnson, I hope you're doing well.",
      time: "10:30 AM",
      isClient: true,
    },
    {
      id: 2,
      sender: "me",
      content: "Hello John! I'm doing well, thank you. How can I help you today?",
      time: "10:32 AM",
      isClient: false,
    },
    {
      id: 3,
      sender: "john-davis",
      content: "I wanted to get an update on my employment case. Has there been any progress with the negotiations?",
      time: "10:33 AM",
      isClient: true,
    },
    {
      id: 4,
      sender: "me",
      content:
        "Yes, there has been significant progress. The opposing counsel has responded to our initial settlement proposal. I'll send you the details via secure email shortly.",
      time: "10:35 AM",
      isClient: false,
    },
    {
      id: 5,
      sender: "john-davis",
      content: "Thank you for the update on my case. When is the next hearing?",
      time: "10:37 AM",
      isClient: true,
    },
  ]

  const selectedConversation = conversations.find((conv) => conv.id === selectedChat)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/lawyer-dashboard" className="flex items-center gap-2">
                <span className="text-2xl">⚖️</span>
                <span className="font-bold text-foreground">LawerUp Pro</span>
              </Link>
              <h1 className="text-xl font-semibold">Messages</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <span>🔔</span>
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="border-border h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Conversations</CardTitle>
                  <Button size="sm" variant="outline">
                    <span className="mr-1">➕</span>
                    New
                  </Button>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">🔍</span>
                  <Input placeholder="Search conversations..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-3 cursor-pointer hover:bg-muted/50 transition-colors ${
                        selectedChat === conversation.id ? "bg-muted" : ""
                      }`}
                      onClick={() => setSelectedChat(conversation.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {conversation.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.status === "online" && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm truncate">{conversation.name}</p>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <Badge variant="outline" className="text-xs mb-1">
                            {conversation.caseType}
                          </Badge>
                          <p className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</p>
                          {conversation.unread > 0 && (
                            <div className="flex justify-end mt-1">
                              <Badge variant="default" className="text-xs">
                                {conversation.unread}
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="border-border h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="pb-3 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={selectedConversation?.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {selectedConversation?.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedConversation?.name}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {selectedConversation?.caseType}
                        </Badge>
                        <span
                          className={`text-xs ${
                            selectedConversation?.status === "online" ? "text-green-600" : "text-muted-foreground"
                          }`}
                        >
                          {selectedConversation?.status === "online" ? "● Online" : "● Offline"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <span className="mr-1">📞</span>
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <span className="mr-1">📹</span>
                      Video
                    </Button>
                    <Button variant="outline" size="sm">
                      <span className="mr-1">📄</span>
                      Files
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isClient ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`max-w-[70%] ${
                          message.isClient ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                        } rounded-lg p-3`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.isClient ? "text-muted-foreground" : "text-primary-foreground/70"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-end gap-2">
                  <div className="flex-1">
                    <Textarea
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="min-h-[60px] resize-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      <span>📎</span>
                    </Button>
                    <Button size="sm" disabled={!newMessage.trim()}>
                      <span>📤</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>All messages are encrypted and secure</span>
                  <span>Press Enter to send</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
