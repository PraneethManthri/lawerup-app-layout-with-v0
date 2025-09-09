import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Camera, Edit, Save, ArrowLeft, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/dashboard">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <h1 className="text-xl font-semibold">Profile Settings</h1>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Picture & Basic Info */}
          <div className="lg:col-span-1">
            <Card className="border-border">
              <CardHeader className="text-center">
                <div className="relative mx-auto">
                  <Avatar className="h-32 w-32 mx-auto">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" />
                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-blue-600 hover:bg-blue-700">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="mt-4">John Doe</CardTitle>
                <CardDescription>Citizen Member since 2024</CardDescription>
                <Badge variant="secondary" className="mt-2">
                  Verified Account
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  New York, USA
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Joined January 2024
                </div>
                <Separator />
                <div className="space-y-2">
                  <p className="text-sm font-medium">Profile Completion</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-xs text-muted-foreground">75% Complete</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Personal Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Update your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="New York, USA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself, your legal interests, or experiences..."
                      defaultValue="I'm interested in consumer rights and employment law. Looking to connect with legal professionals and learn more about my rights."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Legal Interests */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Legal Interests</CardTitle>
                  <CardDescription>Select areas of law you're interested in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                      Consumer Rights
                    </Badge>
                    <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                      Employment Law
                    </Badge>
                    <Badge variant="outline">Family Law</Badge>
                    <Badge variant="outline">Criminal Law</Badge>
                    <Badge variant="outline">Real Estate</Badge>
                    <Badge variant="outline">Immigration</Badge>
                    <Badge variant="outline">Intellectual Property</Badge>
                    <Badge variant="outline">Tax Law</Badge>
                  </div>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Interests
                  </Button>
                </CardContent>
              </Card>

              {/* Privacy Settings */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control who can see your information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-muted-foreground">Who can see your profile</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Public
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Contact Information</p>
                      <p className="text-sm text-muted-foreground">Who can see your email and phone</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Lawyers Only
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Activity Status</p>
                      <p className="text-sm text-muted-foreground">Show when you're online</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
