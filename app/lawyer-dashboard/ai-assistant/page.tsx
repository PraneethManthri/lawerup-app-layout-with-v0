"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function LawyerAIAssistantPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [currentMessage, setCurrentMessage] = useState("")

  const handleVoiceRecord = () => {
    if (isRecording) {
      setIsRecording(false)
      // Simulate voice message processing
      setTimeout(() => {
        setCurrentMessage("Voice message transcribed: I need precedent cases for contract breach in corporate law")
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
      setCurrentMessage("Find cases related to intellectual property disputes in tech industry")
      setIsListening(false)
    }, 2000)
  }

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
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">AI Legal Assistant</h1>
            <p className="text-muted-foreground">Your intelligent legal research and analysis companion</p>
          </div>

          {/* AI Chat Interface */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span>🤖</span>
                Legal AI Chat
              </CardTitle>
              <CardDescription>Ask questions, get legal research, and analyze cases with AI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Chat Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>🤖</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 bg-muted p-3 rounded-lg">
                    <p className="text-sm">
                      Hello! I'm your AI Legal Assistant. I can help you with legal research, case analysis, document
                      review, and more. What would you like to work on today?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 bg-primary text-primary-foreground p-3 rounded-lg max-w-md ml-auto">
                    <p className="text-sm">
                      I need help researching employment law cases related to wrongful termination in New York.
                    </p>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>🤖</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 bg-muted p-3 rounded-lg">
                    <p className="text-sm mb-2">
                      I found several relevant cases for wrongful termination in New York. Here are the key precedents:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-background rounded border">
                        <p className="font-medium">Murphy v. American Home Products Corp. (1983)</p>
                        <p className="text-muted-foreground">Established at-will employment exceptions in NY</p>
                      </div>
                      <div className="p-2 bg-background rounded border">
                        <p className="font-medium">Wieder v. Skala (1992)</p>
                        <p className="text-muted-foreground">Public policy exception for attorney whistleblowing</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2">Would you like me to analyze any specific aspect of these cases?</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Ask about legal research, case analysis, document review..."
                    className="flex-1 min-h-[60px]"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                  />
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleVoiceRecord}
                      className={isRecording ? "bg-red-100 text-red-600" : ""}
                    >
                      {isRecording ? "🔴" : "🎤"}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleVoiceToText}
                      className={isListening ? "bg-blue-100 text-blue-600" : ""}
                    >
                      {isListening ? "👂" : "🗣️"}
                    </Button>
                    <Button className="self-end">
                      <span>📤</span>
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
            </CardContent>
          </Card>

          {/* AI Tools Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span>🔍</span>
                  Legal Research
                </CardTitle>
                <CardDescription>AI-powered case law and statute research</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Enter legal topic or question..." className="flex-1" />
                  <Button variant="outline" size="icon">
                    <span>🎤</span>
                  </Button>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">📚</span>
                    Search Case Law
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">📜</span>
                    Find Statutes
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">🏛️</span>
                    Court Rules
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span>⚖️</span>
                  Case Analyzer
                </CardTitle>
                <CardDescription>AI analysis of case strength and strategy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Textarea placeholder="Describe your case details..." className="min-h-[100px]" />
                  <Button variant="outline" size="icon" className="absolute top-2 right-2 bg-transparent">
                    <span>🎤</span>
                  </Button>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">📊</span>
                    Analyze Strength
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">🎯</span>
                    Strategy Suggestions
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">⚠️</span>
                    Risk Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span>📄</span>
                  Document Review
                </CardTitle>
                <CardDescription>AI-powered contract and document analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <span className="text-2xl mb-2 block">📁</span>
                  <p className="text-sm text-muted-foreground">Drop documents here or click to upload</p>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">🔍</span>
                    Review Contract
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">⚠️</span>
                    Find Issues
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">✅</span>
                    Compliance Check
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span>🌐</span>
                  Translation Services
                </CardTitle>
                <CardDescription>Multilingual legal document translation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="From language" />
                  <Input placeholder="To language" />
                </div>
                <div className="relative">
                  <Textarea placeholder="Enter text to translate..." className="min-h-[80px]" />
                  <Button variant="outline" size="icon" className="absolute top-2 right-2 bg-transparent">
                    <span>🎤</span>
                  </Button>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">🔄</span>
                    Translate Document
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <span className="mr-2">✅</span>
                    Legal Accuracy Check
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent AI Activities */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Recent AI Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 border border-border rounded-lg">
                  <span className="text-xl">🔍</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Legal Research: Employment Law Cases</p>
                    <p className="text-xs text-muted-foreground">Found 15 relevant cases • 2 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Results
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-3 border border-border rounded-lg">
                  <span className="text-xl">⚖️</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Case Analysis: Johnson vs. TechCorp</p>
                    <p className="text-xs text-muted-foreground">
                      Strength: 85% • Strategy recommendations provided • 4 hours ago
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Analysis
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-3 border border-border rounded-lg">
                  <span className="text-xl">📄</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Document Review: Settlement Agreement</p>
                    <p className="text-xs text-muted-foreground">
                      3 issues identified • Compliance verified • Yesterday
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
