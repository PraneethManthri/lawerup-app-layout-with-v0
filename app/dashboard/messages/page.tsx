"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Scale,
  Search,
  Plus,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Send,
  Shield,
  Clock,
  CheckCheck,
} from "lucide-react"
import Link from "next/link"

export default function MessagesPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [currentMessage, setCurrentMessage] = useState("")

  const handleVoiceRecord = () => {
    if (isRecording) {
      setIsRecording(false)
      // Simulate voice message processing
      setTimeout(() => {
        setCurrentMessage("Voice message transcribed: I have some questions about the contract terms we discussed")
      }, 1000)
    } else {
      setIsRecording(true)
      setTimeout(() => {
        setIsRecording(false)
      }, 3000) // Auto-stop after 3 seconds for demo
    }
  }

  const handleVoiceToText = () => {
    setIsListening(true)
    // Simulate voice-to-text
    setTimeout(() => {
      setCurrentMessage("Can we schedule a call to discuss the employment contract details?")
      setIsListening(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="font-bold text-foreground">Messages</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-12rem)]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="border-border h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Conversations</CardTitle>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    New Chat
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search conversations..." className="pl-10 bg-background" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {/* Active Conversation */}
                  <div className="p-3 bg-primary/5 border-r-2 border-primary cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm truncate">Attorney Sarah Johnson</p>
                          <span className="text-xs text-muted-foreground">2m</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs">🎤</span>
                          <p className="text-xs text-muted-foreground truncate">
                            Voice message: Contract review complete...
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            Employment Law
                          </Badge>
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Conversations */}
                  <div className="p-3 hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm truncate">Michael Johnson</p>
                          <span className="text-xs text-muted-foreground">1h</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          Thank you for the legal advice regarding...
                        </p>
                        <Badge variant="secondary" className="text-xs mt-1">
                          Corporate Law
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>LC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm truncate">Legal Consultation Group</p>
                          <span className="text-xs text-muted-foreground">3h</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          Dr. Rachel: The precedent case you mentioned...
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            Group Chat
                          </Badge>
                          <span className="text-xs text-muted-foreground">4 members</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>RL</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm truncate">Rachel Lee</p>
                          <span className="text-xs text-muted-foreground">1d</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          The documents look good. I'll send the...
                        </p>
                        <Badge variant="secondary" className="text-xs mt-1">
                          Family Law
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="border-border h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                    </div>
                    <div>
                      <p className="font-medium">Attorney Sarah Johnson</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">Employment Law Specialist</p>
                        <Badge variant="outline" className="text-xs">
                          <Shield className="h-3 w-3 mr-1" />
                          Encrypted
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <Separator />

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {/* Received Voice Message */}
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 max-w-md">
                    <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                      <div className="flex items-center gap-3 mb-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full bg-primary/10">
                          <span className="text-sm">▶️</span>
                        </Button>
                        <div className="flex-1 h-2 bg-primary/20 rounded-full">
                          <div className="h-full w-1/3 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-xs text-muted-foreground">0:15</span>
                      </div>
                      <p className="text-sm">
                        Hello John! I've reviewed the employment contract you sent. Overall, it looks fairly standard,
                        but there are a few clauses I'd recommend we discuss.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">10:30 AM</span>
                      <Badge variant="outline" className="text-xs">
                        Voice Message
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Sent Message */}
                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 max-w-md">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none ml-auto">
                      <p className="text-sm">
                        Thank you for the quick review! Which clauses specifically should we focus on? I'm particularly
                        concerned about the termination clause.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1 justify-end">
                      <CheckCheck className="h-3 w-3 text-primary" />
                      <span className="text-xs text-muted-foreground">10:32 AM</span>
                    </div>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>

                {/* File Attachment */}
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 max-w-md">
                    <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                      <p className="text-sm mb-3">
                        Great question! I've highlighted the key areas in the attached document. The termination clause
                        is indeed something we should negotiate.
                      </p>
                      <div className="bg-background border border-border rounded p-3 flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                          <Paperclip className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Contract_Review_Notes.pdf</p>
                          <p className="text-xs text-muted-foreground">245 KB • PDF Document</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">10:35 AM</span>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Message Input */}
              <div className="p-4">
                <div className="space-y-2">
                  <div className="flex items-end gap-3">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Type your message... (End-to-end encrypted)"
                        className="min-h-[60px] resize-none bg-background"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleVoiceRecord}
                        className={isRecording ? "bg-red-100 text-red-600" : ""}
                      >
                        {isRecording ? "🔴" : "🎤"}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleVoiceToText}
                        className={isListening ? "bg-blue-100 text-blue-600" : ""}
                      >
                        {isListening ? "👂" : "🗣️"}
                      </Button>
                      <Button size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {isRecording && (
                    <div className="flex items-center gap-2 text-sm text-red-600">
                      <span className="animate-pulse">🔴</span>
                      Recording voice message... Tap to stop
                    </div>
                  )}
                  {isListening && (
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <span className="animate-pulse">👂</span>
                      Listening for voice input...
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3" />
                    <span>Messages are encrypted and secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Response time: Usually within 2 hours</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
