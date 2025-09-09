"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function AISchedulerPage() {
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [smartReminders, setSmartReminders] = useState(true)
  const [crossDeviceSync, setCrossDeviceSync] = useState(true)

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
              <div className="flex items-center gap-2">
                <span className="text-lg">🗓️</span>
                <h1 className="text-xl font-semibold">AI Schedule Assistant</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <span>🔔</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 px-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Account Switching</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-3 p-3 bg-muted/50">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">Attorney Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Lawyer Account (Current)</p>
                    </div>
                    <Badge variant="default" className="text-xs">
                      Active
                    </Badge>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Voice Commands */}
          <div className="lg:col-span-1">
            <Card className="border-border mb-6">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <span>🎤</span>
                  Voice Commands
                </CardTitle>
                <CardDescription>Control your schedule with voice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="voice-enabled">Voice Control</Label>
                  <Switch id="voice-enabled" checked={voiceEnabled} onCheckedChange={setVoiceEnabled} />
                </div>

                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-primary">"Schedule meeting with John"</p>
                    <p className="text-muted-foreground">Creates new appointment</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-primary">"What's my schedule today?"</p>
                    <p className="text-muted-foreground">Reads daily agenda</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-primary">"Find contract for Smith case"</p>
                    <p className="text-muted-foreground">Searches documents</p>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  <span className="mr-2">🎤</span>
                  Start Voice Session
                </Button>
              </CardContent>
            </Card>

            {/* Device Integration */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <span>📱</span>
                  Connected Devices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>🏠</span>
                    <span className="text-sm">Amazon Alexa</span>
                  </div>
                  <Badge variant="default" className="text-xs">
                    Connected
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>📱</span>
                    <span className="text-sm">iPhone Siri</span>
                  </div>
                  <Badge variant="default" className="text-xs">
                    Connected
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>🔍</span>
                    <span className="text-sm">Google Assistant</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Setup
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <span className="mr-2">➕</span>
                  Add Device
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="schedule" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="schedule">Smart Schedule</TabsTrigger>
                <TabsTrigger value="documents">Document AI</TabsTrigger>
                <TabsTrigger value="reminders">Smart Reminders</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Smart Schedule Tab */}
              <TabsContent value="schedule" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">AI-Powered Schedule Management</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <span className="mr-2">🎤</span>
                      Voice Add
                    </Button>
                    <Button size="sm">
                      <span className="mr-2">➕</span>
                      New Event
                    </Button>
                  </div>
                </div>

                {/* Today's Schedule */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base">Today's Schedule - March 12, 2024</CardTitle>
                    <CardDescription>AI-optimized for maximum productivity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                      <div className="text-center">
                        <p className="text-sm font-medium">9:00 AM</p>
                        <p className="text-xs text-muted-foreground">1h</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Client Meeting - John Davis</p>
                        <p className="text-sm text-muted-foreground">Employment case discussion</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            High Priority
                          </Badge>
                          <span className="text-xs text-muted-foreground">📍 Conference Room A</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <span>📞</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <span>📹</span>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <p className="text-sm font-medium">11:00 AM</p>
                        <p className="text-xs text-muted-foreground">2h</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Document Review - Smith Case</p>
                        <p className="text-sm text-muted-foreground">AI suggests: Focus on contract clauses 3-7</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            AI Optimized
                          </Badge>
                          <span className="text-xs text-muted-foreground">📄 15 documents</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <span>📄</span>
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="text-center">
                        <p className="text-sm font-medium">2:00 PM</p>
                        <p className="text-xs text-muted-foreground">1h</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Court Hearing Preparation</p>
                        <p className="text-sm text-muted-foreground">Johnson vs. TechCorp - Final prep</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="destructive" className="text-xs">
                            Critical
                          </Badge>
                          <span className="text-xs text-muted-foreground">⚖️ Courtroom 3</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <span>⚖️</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Suggestions */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <span>🤖</span>
                      AI Schedule Suggestions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                        💡 Optimal time for deep work: 10:00 AM - 12:00 PM
                      </p>
                      <p className="text-xs text-blue-700 dark:text-blue-300">
                        Based on your productivity patterns, schedule complex tasks during this window.
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-sm font-medium text-green-900 dark:text-green-100">
                        📅 Suggested: Block 30 min before court hearings
                      </p>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        AI recommends buffer time for final preparation and travel.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Document AI Tab */}
              <TabsContent value="documents" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">AI Document Organization</h3>
                  <Button size="sm">
                    <span className="mr-2">🤖</span>
                    Auto-Organize
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <span>📊</span>
                        Document Analytics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Total Documents</span>
                        <span className="font-semibold">1,247</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Auto-Categorized</span>
                        <span className="font-semibold text-primary">98%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Needs Review</span>
                        <span className="font-semibold text-orange-600">23</span>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        View All Documents
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <span>🔍</span>
                        Smart Search
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="Ask AI: 'Find all contracts from 2024'" />
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Recent AI Searches:</p>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <p>• "Employment contracts with termination clauses"</p>
                          <p>• "Documents mentioning TechCorp settlement"</p>
                          <p>• "All evidence photos from Smith case"</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        <span className="mr-2">🎤</span>
                        Voice Search
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent AI Actions */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base">Recent AI Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="text-primary">🤖</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Auto-categorized 15 new documents</p>
                          <p className="text-xs text-muted-foreground">
                            Sorted into Employment Law, Contracts, Evidence
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">2h ago</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="text-primary">📝</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Generated case summary for Johnson vs. TechCorp</p>
                          <p className="text-xs text-muted-foreground">Key points extracted from 47 documents</p>
                        </div>
                        <span className="text-xs text-muted-foreground">4h ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Smart Reminders Tab */}
              <TabsContent value="reminders" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">AI-Powered Reminders</h3>
                  <div className="flex items-center gap-2">
                    <Switch checked={smartReminders} onCheckedChange={setSmartReminders} />
                    <Label>Smart Reminders</Label>
                  </div>
                </div>

                <div className="grid gap-4">
                  <Card className="border-border border-l-4 border-l-red-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-red-700 dark:text-red-400">🚨 Critical Deadline</p>
                          <p className="text-sm">Johnson case filing deadline - Tomorrow 5:00 PM</p>
                          <p className="text-xs text-muted-foreground">AI detected: High priority, court deadline</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Snooze
                          </Button>
                          <Button size="sm">Complete</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border border-l-4 border-l-orange-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-orange-700 dark:text-orange-400">⏰ Upcoming Meeting</p>
                          <p className="text-sm">Client call with Sarah Miller in 30 minutes</p>
                          <p className="text-xs text-muted-foreground">AI suggests: Review case notes beforehand</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Prepare
                          </Button>
                          <Button size="sm">Join</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-blue-700 dark:text-blue-400">📄 Document Review</p>
                          <p className="text-sm">15 new documents need categorization</p>
                          <p className="text-xs text-muted-foreground">AI can auto-sort with 98% accuracy</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Auto-Sort
                          </Button>
                          <Button size="sm">Review</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <h3 className="text-lg font-semibold">AI Assistant Settings</h3>

                <div className="grid gap-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base">Cross-Device Synchronization</CardTitle>
                      <CardDescription>Keep your schedule and documents synced across all devices</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="cross-device">Enable Cross-Device Sync</Label>
                        <Switch id="cross-device" checked={crossDeviceSync} onCheckedChange={setCrossDeviceSync} />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span>💻</span>
                          <span>Desktop App</span>
                          <Badge variant="default" className="text-xs ml-auto">
                            Synced
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📱</span>
                          <span>Mobile App</span>
                          <Badge variant="default" className="text-xs ml-auto">
                            Synced
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>🌐</span>
                          <span>Web Browser</span>
                          <Badge variant="default" className="text-xs ml-auto">
                            Synced
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base">Voice Assistant Integration</CardTitle>
                      <CardDescription>Configure home assistant connections</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <span>🏠</span>
                            <div>
                              <p className="font-medium">Amazon Alexa</p>
                              <p className="text-xs text-muted-foreground">Echo devices in home and office</p>
                            </div>
                          </div>
                          <Badge variant="default">Connected</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <span>📱</span>
                            <div>
                              <p className="font-medium">Apple Siri</p>
                              <p className="text-xs text-muted-foreground">iPhone, iPad, Mac integration</p>
                            </div>
                          </div>
                          <Badge variant="default">Connected</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <span>🔍</span>
                            <div>
                              <p className="font-medium">Google Assistant</p>
                              <p className="text-xs text-muted-foreground">Google Home and Android devices</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Connect
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base">AI Preferences</CardTitle>
                      <CardDescription>Customize how AI assists with your legal practice</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label>Auto-categorize documents</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>Smart meeting preparation</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>Proactive deadline reminders</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>AI case analysis suggestions</Label>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
