import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function FindClientsPage() {
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
            <h1 className="text-3xl font-bold">Find New Clients</h1>
            <p className="text-muted-foreground">Connect with people who need your legal expertise</p>
          </div>

          {/* Search and Filters */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Search Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Legal Area</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select practice area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employment">Employment Law</SelectItem>
                      <SelectItem value="family">Family Law</SelectItem>
                      <SelectItem value="criminal">Criminal Defense</SelectItem>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="personal-injury">Personal Injury</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input placeholder="City, State or ZIP" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Case Urgency</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (Within 24h)</SelectItem>
                      <SelectItem value="soon">Soon (Within 1 week)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full">
                <span className="mr-2">🔍</span>
                Search for Clients
              </Button>
            </CardContent>
          </Card>

          {/* Potential Clients */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Potential Clients</h2>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-semibold">John Davis</h3>
                        <p className="text-sm text-muted-foreground">Posted 2 hours ago</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Employment Law</Badge>
                        <Badge variant="secondary">Urgent</Badge>
                        <span className="text-sm text-muted-foreground">📍 New York, NY</span>
                      </div>
                      <p className="text-sm max-w-md">
                        "I was wrongfully terminated from my job after reporting safety violations. I need an
                        experienced employment lawyer who can help me understand my rights and options for legal
                        action."
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>💰 Budget: $5,000 - $15,000</span>
                        <span>⏰ Needs response within 24h</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm">
                      <span className="mr-1">💬</span>
                      Contact Client
                    </Button>
                    <Button variant="outline" size="sm">
                      <span className="mr-1">👁️</span>
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-semibold">Sarah Miller</h3>
                        <p className="text-sm text-muted-foreground">Posted 5 hours ago</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Family Law</Badge>
                        <Badge variant="secondary">Soon</Badge>
                        <span className="text-sm text-muted-foreground">📍 Los Angeles, CA</span>
                      </div>
                      <p className="text-sm max-w-md">
                        "Going through a difficult divorce and need help with child custody arrangements. Looking for a
                        compassionate family law attorney who specializes in custody cases."
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>💰 Budget: $3,000 - $8,000</span>
                        <span>⏰ Needs response within 1 week</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm">
                      <span className="mr-1">💬</span>
                      Contact Client
                    </Button>
                    <Button variant="outline" size="sm">
                      <span className="mr-1">👁️</span>
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-semibold">Robert Johnson</h3>
                        <p className="text-sm text-muted-foreground">Posted 1 day ago</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Personal Injury</Badge>
                        <Badge variant="secondary">Flexible</Badge>
                        <span className="text-sm text-muted-foreground">📍 Chicago, IL</span>
                      </div>
                      <p className="text-sm max-w-md">
                        "Injured in a car accident caused by a distracted driver. Medical bills are piling up and
                        insurance company is not cooperating. Need a personal injury lawyer."
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>💰 Contingency fee preferred</span>
                        <span>⏰ Flexible timeline</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm">
                      <span className="mr-1">💬</span>
                      Contact Client
                    </Button>
                    <Button variant="outline" size="sm">
                      <span className="mr-1">👁️</span>
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Matching */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span>🤖</span>
                AI-Powered Client Matching
              </CardTitle>
              <CardDescription>
                Our AI analyzes your expertise, success rate, and availability to match you with ideal clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Based on your profile, we've identified 12 potential clients that match your expertise in Employment
                  Law
                </p>
                <Button>
                  <span className="mr-2">✨</span>
                  View AI Recommendations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
