import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Scale, Search, MessageSquare, Users, Star, Shield } from "lucide-react"
import Link from "next/link"

export default function NewMessagePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/messages">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="font-bold text-foreground">New Conversation</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Message Composition */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Start a New Conversation</CardTitle>
                <CardDescription>Connect with legal professionals or start a group consultation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="conversationType">Conversation Type</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select conversation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="direct">Direct Message with Lawyer</SelectItem>
                      <SelectItem value="group">Group Consultation</SelectItem>
                      <SelectItem value="emergency">Emergency Legal Help</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recipient">Select Recipient</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="recipient"
                      placeholder="Search lawyers by name or specialization..."
                      className="pl-10 bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="legalArea">Legal Area</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select legal area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employment">Employment Law</SelectItem>
                      <SelectItem value="consumer">Consumer Rights</SelectItem>
                      <SelectItem value="family">Family Law</SelectItem>
                      <SelectItem value="criminal">Criminal Law</SelectItem>
                      <SelectItem value="property">Property Law</SelectItem>
                      <SelectItem value="contract">Contract Law</SelectItem>
                      <SelectItem value="personal-injury">Personal Injury</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your legal matter..."
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your legal situation in detail. Include relevant facts, timeline, and what kind of help you're looking for..."
                    className="bg-background min-h-32"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="How urgent is this matter?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - General consultation</SelectItem>
                      <SelectItem value="medium">Medium - Need response within 24 hours</SelectItem>
                      <SelectItem value="high">High - Need response within 4 hours</SelectItem>
                      <SelectItem value="emergency">Emergency - Immediate assistance needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="confidential" />
                  <Label htmlFor="confidential" className="text-sm">
                    This conversation contains confidential information
                  </Label>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Privacy & Security</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All messages are end-to-end encrypted</li>
                    <li>• Conversations are protected by attorney-client privilege</li>
                    <li>• Your personal information is kept confidential</li>
                    <li>• Messages are stored securely and can be deleted anytime</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Conversation
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/messages">Cancel</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lawyer Suggestions */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Recommended Lawyers */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">Recommended Lawyers</CardTitle>
                  <CardDescription>Based on your legal area</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Attorney Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">Employment Law Specialist</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span className="text-xs">4.9</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        15+ years
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Available
                      </Badge>
                    </div>
                  </div>

                  <div className="p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Michael Johnson</p>
                        <p className="text-xs text-muted-foreground">Corporate Law Expert</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span className="text-xs">4.8</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        12+ years
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Available
                      </Badge>
                    </div>
                  </div>

                  <div className="p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>RL</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Rachel Lee</p>
                        <p className="text-xs text-muted-foreground">Family Law Specialist</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span className="text-xs">4.7</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        10+ years
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Busy
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Group Consultations */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">Active Group Consultations</CardTitle>
                  <CardDescription>Join ongoing discussions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <p className="font-medium text-sm">Employment Rights Discussion</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Discussing workplace discrimination and employee rights
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">8 members</span>
                      <Button size="sm" variant="outline">
                        Join
                      </Button>
                    </div>
                  </div>

                  <div className="p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <p className="font-medium text-sm">Tenant Rights Support</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Help with landlord disputes and rental agreements
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">12 members</span>
                      <Button size="sm" variant="outline">
                        Join
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Help */}
              <Card className="border-border border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-base text-destructive">Emergency Legal Help</CardTitle>
                  <CardDescription>24/7 support for urgent legal matters</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're facing an immediate legal emergency, our on-call lawyers are available to help.
                  </p>
                  <Button variant="destructive" className="w-full">
                    Request Emergency Help
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
