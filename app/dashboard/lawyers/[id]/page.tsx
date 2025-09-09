import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Scale,
  Star,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Calendar,
  Award,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function LawyerProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/lawyers">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="font-bold text-foreground">Lawyer Profile</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2">
            <Card className="border-border mb-6">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-2xl font-bold text-foreground mb-1">Attorney Sarah Johnson</h1>
                        <p className="text-lg text-muted-foreground mb-2">Employment Law Specialist</p>
                        <p className="text-muted-foreground">Johnson & Associates Law Firm</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 fill-primary text-primary" />
                            <span className="text-xl font-bold">4.9</span>
                          </div>
                          <span className="text-muted-foreground">(127 reviews)</span>
                        </div>
                        <Badge variant="outline" className="mb-2">
                          Available Now
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">San Francisco, CA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">15+ years experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">200+ cases handled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">94% success rate</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <Badge variant="secondary">Employment Law</Badge>
                      <Badge variant="secondary">Workplace Rights</Badge>
                      <Badge variant="secondary">Contract Negotiation</Badge>
                      <Badge variant="secondary">Discrimination Cases</Badge>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button size="lg">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button variant="outline" size="lg">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                      <Button variant="outline" size="lg">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="cases">Case Studies</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base">About Attorney Johnson</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sarah Johnson is a dedicated employment law attorney with over 15 years of experience fighting for
                      workers' rights. She specializes in workplace discrimination, wrongful termination, wage and hour
                      disputes, and employment contract negotiations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sarah has successfully represented hundreds of employees against some of the largest corporations
                      in the Bay Area, securing millions of dollars in settlements and verdicts for her clients. She is
                      known for her compassionate approach and aggressive advocacy in the courtroom.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      When not practicing law, Sarah volunteers with local worker advocacy groups and frequently speaks
                      at employment law seminars. She is committed to educating workers about their rights and ensuring
                      fair treatment in the workplace.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base">Education & Credentials</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Juris Doctor (J.D.)</p>
                        <p className="text-sm text-muted-foreground">Stanford Law School, 2008</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Bachelor of Arts in Political Science</p>
                        <p className="text-sm text-muted-foreground">UC Berkeley, 2005</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">California State Bar</p>
                        <p className="text-sm text-muted-foreground">Licensed since 2008 • Bar #285749</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base">Professional Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold">Senior Partner</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Johnson & Associates Law Firm • 2015 - Present
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Lead employment law practice, managing complex discrimination and wrongful termination cases.
                        Built firm's employment law division from ground up.
                      </p>
                    </div>
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-semibold">Associate Attorney</h4>
                      <p className="text-sm text-muted-foreground mb-2">Morrison & Associates • 2010 - 2015</p>
                      <p className="text-sm text-muted-foreground">
                        Specialized in employment litigation, handling cases from initial filing through trial and
                        appeal.
                      </p>
                    </div>
                    <div className="border-l-2 border-muted pl-4">
                      <h4 className="font-semibold">Junior Associate</h4>
                      <p className="text-sm text-muted-foreground mb-2">Bay Area Legal Aid • 2008 - 2010</p>
                      <p className="text-sm text-muted-foreground">
                        Provided legal services to low-income workers, focusing on wage theft and workplace safety
                        issues.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base">Notable Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-sm">Super Lawyers Rising Star</p>
                        <p className="text-xs text-muted-foreground">2018, 2019, 2020</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-sm">$2.3M Settlement - Class Action Wage Theft Case</p>
                        <p className="text-xs text-muted-foreground">2021</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-sm">California Employment Lawyers Association Member</p>
                        <p className="text-xs text-muted-foreground">2015 - Present</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">4.9</div>
                        <div className="flex items-center justify-center gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Based on 127 reviews</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">5 stars</span>
                        <Progress value={85} className="flex-1 h-2" />
                        <span className="text-sm text-muted-foreground">108</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">4 stars</span>
                        <Progress value={12} className="flex-1 h-2" />
                        <span className="text-sm text-muted-foreground">15</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">3 stars</span>
                        <Progress value={2} className="flex-1 h-2" />
                        <span className="text-sm text-muted-foreground">3</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">2 stars</span>
                        <Progress value={1} className="flex-1 h-2" />
                        <span className="text-sm text-muted-foreground">1</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">1 star</span>
                        <Progress value={0} className="flex-1 h-2" />
                        <span className="text-sm text-muted-foreground">0</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">John D.</span>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-3 w-3 fill-primary text-primary" />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">2 weeks ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Sarah was incredible throughout my wrongful termination case. She was professional,
                            knowledgeable, and fought hard for me. We achieved a settlement that exceeded my
                            expectations. I highly recommend her to anyone facing workplace issues.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">Maria R.</span>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-3 w-3 fill-primary text-primary" />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">1 month ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Excellent attorney! Sarah helped me with a discrimination case and was always available to
                            answer my questions. Her expertise in employment law is evident, and she genuinely cares
                            about her clients. Thank you, Sarah!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="cases" className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base">Recent Case Studies</CardTitle>
                    <CardDescription>Notable cases and outcomes (client names anonymized)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Wrongful Termination - Tech Company</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Outcome:</strong> $450,000 settlement
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Successfully represented a software engineer who was terminated after reporting safety
                        violations. Case involved whistleblower protection laws and resulted in policy changes at the
                        company.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Class Action Wage Theft</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Outcome:</strong> $2.3M settlement for 150+ workers
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Led class action against restaurant chain for unpaid overtime and meal break violations. Secured
                        compensation for affected workers and mandatory compliance training.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Discrimination Case - Healthcare</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Outcome:</strong> $275,000 jury verdict
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Represented nurse who faced discrimination based on pregnancy. Case went to trial and resulted
                        in favorable jury verdict plus injunctive relief requiring policy changes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-4">
              {/* Contact Info */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Consultation Fee</p>
                    <p className="text-lg font-bold text-primary">$150/hour</p>
                    <p className="text-xs text-muted-foreground">Free initial 15-minute consultation</p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 2 hours</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Languages</p>
                    <p className="text-sm text-muted-foreground">English, Spanish</p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Button className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      (415) 555-0123
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Verification */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Verification Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Bar License Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Identity Confirmed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Background Checked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Insurance Verified</span>
                  </div>
                </CardContent>
              </Card>

              {/* Firm Info */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">Law Firm</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium">Johnson & Associates Law Firm</p>
                    <p className="text-sm text-muted-foreground">123 Market Street, Suite 500</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA 94105</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Firm Website
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
