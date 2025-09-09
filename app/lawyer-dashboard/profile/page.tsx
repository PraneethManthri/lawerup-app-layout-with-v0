import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Camera, Edit, Save, ArrowLeft, MapPin, Calendar, Mail, Award, Briefcase } from "lucide-react"
import Link from "next/link"

export default function LawyerProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/lawyer-dashboard">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <h1 className="text-xl font-semibold">Professional Profile</h1>
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
                    <AvatarFallback className="text-2xl">AS</AvatarFallback>
                  </Avatar>
                  <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-blue-600 hover:bg-blue-700">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="mt-4">Attorney Sarah Johnson</CardTitle>
                <CardDescription>Employment Law Specialist</CardDescription>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge variant="default" className="bg-blue-600">
                    Verified Lawyer
                  </Badge>
                  <Badge variant="secondary">15 Years Experience</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  New York, USA
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Licensed since 2009
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  94% Success Rate
                </div>
                <Separator />
                <div className="space-y-2">
                  <p className="text-sm font-medium">Profile Completion</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                  </div>
                  <p className="text-xs text-muted-foreground">85% Complete</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Professional Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Professional Information
                  </CardTitle>
                  <CardDescription>Update your professional details and credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Sarah" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Johnson" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input id="title" defaultValue="Employment Law Specialist" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firm">Law Firm</Label>
                    <Input id="firm" defaultValue="Johnson & Associates Law Firm" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="barNumber">Bar Number</Label>
                      <Input id="barNumber" defaultValue="NY-123456789" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input id="experience" defaultValue="15" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Describe your legal expertise, achievements, and approach..."
                      defaultValue="Experienced employment law attorney with 15+ years of practice. Specializing in workplace discrimination, wrongful termination, and labor disputes. Successfully represented over 500 clients with a 94% success rate."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                  <CardDescription>Professional contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="sarah.johnson@lawfirm.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="office">Office Address</Label>
                    <Input id="office" defaultValue="123 Legal Street, New York, NY 10001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="www.johnsonlawfirm.com" />
                  </div>
                </CardContent>
              </Card>

              {/* Legal Specializations */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Legal Specializations</CardTitle>
                  <CardDescription>Areas of law you practice</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                      Employment Law
                    </Badge>
                    <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                      Labor Disputes
                    </Badge>
                    <Badge variant="outline">Civil Rights</Badge>
                    <Badge variant="outline">Contract Law</Badge>
                    <Badge variant="outline">Corporate Law</Badge>
                    <Badge variant="outline">Litigation</Badge>
                    <Badge variant="outline">Mediation</Badge>
                    <Badge variant="outline">Appeals</Badge>
                  </div>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Specializations
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Settings */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Professional Settings</CardTitle>
                  <CardDescription>Control your professional visibility and availability</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-muted-foreground">Who can see your professional profile</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Public
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Accept New Clients</p>
                      <p className="text-sm text-muted-foreground">Allow new client inquiries</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Consultation Availability</p>
                      <p className="text-sm text-muted-foreground">Show availability for consultations</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Available
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Hourly Rate Display</p>
                      <p className="text-sm text-muted-foreground">Show your consultation rates</p>
                    </div>
                    <Button variant="outline" size="sm">
                      $350/hour
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
