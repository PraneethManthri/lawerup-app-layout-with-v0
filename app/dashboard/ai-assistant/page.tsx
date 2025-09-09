"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AIAssistantPage() {
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI Legal Assistant. I can help you with case analysis, legal research, document review, and answer your legal questions. How can I assist you today?",
    },
  ])
  const [currentMessage, setCurrentMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [analysisText, setAnalysisText] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [isRecording, setIsRecording] = useState(false)
  const [isListening, setIsListening] = useState(false)

  const handleVoiceRecord = () => {
    if (isRecording) {
      setIsRecording(false)
      // Simulate voice message processing
      setTimeout(() => {
        setCurrentMessage("Voice message transcribed: How can I challenge this employment contract clause?")
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
      setCurrentMessage("What are my rights regarding workplace discrimination?")
      setIsListening(false)
    }, 2000)
  }

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return

    const newMessages = [...chatMessages, { role: "user", content: currentMessage }]
    setChatMessages(newMessages)
    setCurrentMessage("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      setChatMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Based on your question, I can provide the following legal guidance: [AI-generated response would appear here]. Please note this is general information and not a substitute for professional legal advice.",
        },
      ])
      setIsLoading(false)
    }, 1500)
  }

  const handleCaseAnalysis = async () => {
    if (!analysisText.trim()) return
    setIsLoading(true)

    // Simulate AI analysis
    setTimeout(() => {
      setIsLoading(false)
      // Analysis results would be displayed
    }, 2000)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Legal Assistant</h1>
          <p className="text-muted-foreground">Advanced AI-powered legal tools and analysis</p>
        </div>
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
          AI Powered
        </Badge>
      </div>

      <Tabs defaultValue="chat" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chat">Legal Chat</TabsTrigger>
          <TabsTrigger value="analysis">Case Analysis</TabsTrigger>
          <TabsTrigger value="research">Legal Research</TabsTrigger>
          <TabsTrigger value="translate">Document Translation</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Legal Chat</CardTitle>
              <CardDescription>Ask legal questions and get instant AI-powered guidance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-96 border rounded-lg p-4 overflow-y-auto bg-muted/20">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground ml-12"
                        : "bg-background border mr-12"
                    }`}
                  >
                    <div className="text-sm font-medium mb-1">{message.role === "user" ? "You" : "AI Assistant"}</div>
                    <div className="text-sm">{message.content}</div>
                  </div>
                ))}
                {isLoading && (
                  <div className="bg-background border mr-12 p-3 rounded-lg">
                    <div className="text-sm font-medium mb-1">AI Assistant</div>
                    <div className="text-sm text-muted-foreground">Thinking...</div>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Ask your legal question..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
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
                <Button onClick={handleSendMessage} disabled={isLoading}>
                  Send
                </Button>
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
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Case Analysis</CardTitle>
                <CardDescription>Upload case details for AI-powered analysis and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="caseType">Case Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="criminal">Criminal Law</SelectItem>
                      <SelectItem value="civil">Civil Law</SelectItem>
                      <SelectItem value="family">Family Law</SelectItem>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="property">Property Law</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="caseDetails">Case Details</Label>
                  <Textarea
                    id="caseDetails"
                    placeholder="Describe your case details, facts, and circumstances..."
                    className="min-h-32"
                    value={analysisText}
                    onChange={(e) => setAnalysisText(e.target.value)}
                  />
                </div>
                <Button onClick={handleCaseAnalysis} className="w-full" disabled={isLoading}>
                  {isLoading ? "Analyzing..." : "Analyze Case"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
                <CardDescription>AI-generated insights and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <h4 className="font-medium text-emerald-800 mb-1">Strength Assessment</h4>
                    <p className="text-sm text-emerald-700">
                      Based on the provided details, your case shows strong merit with supporting evidence.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-1">Recommended Actions</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Gather additional documentation</li>
                      <li>• Consult with a specialist lawyer</li>
                      <li>• Consider mediation options</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <h4 className="font-medium text-amber-800 mb-1">Potential Challenges</h4>
                    <p className="text-sm text-amber-700">
                      Timeline constraints and evidence collection may require immediate attention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="research" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Legal Research Assistant</CardTitle>
              <CardDescription>AI-powered legal research with case law, statutes, and precedents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Research Topic</Label>
                  <Input placeholder="e.g., Contract breach remedies" />
                </div>
                <div className="space-y-2">
                  <Label>Jurisdiction</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select jurisdiction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="federal">Federal</SelectItem>
                      <SelectItem value="state">State</SelectItem>
                      <SelectItem value="local">Local</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full">Start Research</Button>

              <div className="mt-6 space-y-4">
                <h4 className="font-medium">Recent Research Results</h4>
                <div className="space-y-3">
                  {[
                    { title: "Contract Law Precedents", cases: "15 relevant cases", date: "2024" },
                    { title: "Property Dispute Statutes", cases: "8 applicable statutes", date: "2024" },
                    { title: "Employment Law Updates", cases: "12 recent rulings", date: "2024" },
                  ].map((item, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium">{item.title}</h5>
                          <p className="text-sm text-muted-foreground">{item.cases}</p>
                        </div>
                        <Badge variant="outline">{item.date}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="translate" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Translation</CardTitle>
              <CardDescription>
                AI-powered legal document translation with legal terminology preservation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>From Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="mandarin">Mandarin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>To Language</Label>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="mandarin">Mandarin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Original Document</Label>
                  <Textarea placeholder="Paste your legal document text here..." className="min-h-48" />
                </div>
                <div className="space-y-2">
                  <Label>Translation</Label>
                  <div className="min-h-48 p-3 border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">Translation will appear here after processing...</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">Translate Document</Button>
                <Button variant="outline">Upload File</Button>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Legal Translation Notice:</strong> Our AI preserves legal terminology and context. For
                  official documents, please have translations reviewed by certified legal translators.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
