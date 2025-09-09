import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Scale, Search, Filter, MapPin, Star, Clock, MessageSquare, Phone, Zap } from "lucide-react"
import Link from "next/link"

export default function FindLawyersPage() {
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
              <span className="font-bold text-foreground">Find Legal Professionals</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Search Filters */}
          <div className="lg:col-span-1">
            <Card className="border-border sticky top-4">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Search Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* AI Smart Match */}
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-primary" />
                    <h4 className="font-medium text-primary">AI Smart Match</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Let our AI find the perfect lawyer for your specific case
                  </p>
                  <Button className="w-full" size="sm">
                    Get AI Recommendations
                  </Button>
                </div>

                {/* Search Input */}
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="search" placeholder="Lawyer name, firm, or keyword..." className="pl-10 bg-background" />
                  </div>
                </div>

                {/* Legal Area */}
                <div className="space-y-2">
                  <Label>Legal Specialization</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="All areas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Legal Areas</SelectItem>
                      <SelectItem value="employment">Employment Law</SelectItem>
                      <SelectItem value="consumer">Consumer Rights</SelectItem>
                      <SelectItem value="family">Family Law</SelectItem>
                      <SelectItem value="criminal">Criminal Law</SelectItem>
                      <SelectItem value="property">Property Law</SelectItem>
                      <SelectItem value="contract">Contract Law</SelectItem>
                      <SelectItem value="personal-injury">Personal Injury</SelectItem>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="location" placeholder="City, state, or zip code..." className="pl-10 bg-background" />
                  </div>
                </div>

                {/* Experience Range */}
                <div className="space-y-3">
                  <Label>Years of Experience</Label>
                  <div className="px-2">
                    <Slider defaultValue={[5]} max={30} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0 years</span>
                      <span>5+ years</span>
                      <span>30+ years</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <Label>Minimum Rating</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Rating</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="4.0">4.0+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Availability */}
                <div className="space-y-3">
                  <Label>Availability</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="available-now" />
                      <Label htmlFor="available-now" className="text-sm">
                        Available now
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="accepting-cases" />
                      <Label htmlFor="accepting-cases" className="text-sm">
                        Accepting new cases
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="emergency" />
                      <Label htmlFor="emergency" className="text-sm">
                        Emergency consultation
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <Label>Consultation Fee Range</Label>
                  <div className="px-2">
                    <Slider defaultValue={[200]} max={500} step={25} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Free</span>
                      <span>$200</span>
                      <span>$500+</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Results Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">Legal Professionals</h2>
                  <p className="text-muted-foreground">Found 24 lawyers matching your criteria</p>
                </div>
                <Select>
                  <SelectTrigger className="w-48 bg-background">
                    <SelectValue placeholder="Sort by relevance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Sort by Relevance</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="experience">Most Experienced</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="availability">Available Now</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Featured/Recommended */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <Badge variant="default">AI Recommended</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">Attorney Sarah Johnson</h3>
                          <p className="text-muted-foreground">Employment Law Specialist</p>
                          <p className="text-sm text-muted-foreground">Johnson & Associates Law Firm</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-medium">4.9</span>
                            <span className="text-sm text-muted-foreground">(127 reviews)</span>
                          </div>
                          <p className="text-sm text-muted-foreground">15+ years experience</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="h-3 w-3" />
                          <span>Usually responds in 2 hours</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Available Now
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        Specializes in workplace discrimination, wrongful termination, and employment contracts.
                        Successfully handled 200+ employment cases with a 94% success rate.
                      </p>

                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary">Employment Law</Badge>
                        <Badge variant="secondary">Workplace Rights</Badge>
                        <Badge variant="secondary">Contract Negotiation</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="font-medium">$150/hour consultation</span>
                          <span className="text-sm text-muted-foreground">Free initial 15-min call</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4 mr-2" />
                            Call Now
                          </Button>
                          <Button size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Regular Results */}
              <div className="space-y-4">
                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">Michael Johnson</h3>
                            <p className="text-muted-foreground">Corporate Law Expert</p>
                            <p className="text-sm text-muted-foreground">Johnson Legal Group</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <span className="font-medium">4.8</span>
                              <span className="text-sm text-muted-foreground">(89 reviews)</span>
                            </div>
                            <p className="text-sm text-muted-foreground">12+ years experience</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1 text-sm">
                            <MapPin className="h-3 w-3" />
                            <span>New York, NY</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-3 w-3" />
                            <span>Usually responds in 4 hours</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Accepting Cases
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">
                          Expert in business formation, mergers & acquisitions, and corporate compliance. Helped 150+
                          businesses with legal structuring and growth strategies.
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="font-medium">$200/hour consultation</span>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">Corporate Law</Badge>
                              <Badge variant="secondary">Business Formation</Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>RL</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">Rachel Lee</h3>
                            <p className="text-muted-foreground">Family Law Specialist</p>
                            <p className="text-sm text-muted-foreground">Lee Family Law Practice</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <span className="font-medium">4.7</span>
                              <span className="text-sm text-muted-foreground">(156 reviews)</span>
                            </div>
                            <p className="text-sm text-muted-foreground">10+ years experience</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1 text-sm">
                            <MapPin className="h-3 w-3" />
                            <span>Los Angeles, CA</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-3 w-3" />
                            <span>Usually responds in 6 hours</span>
                          </div>
                          <Badge variant="outline" className="text-xs text-amber-600 border-amber-600">
                            Busy
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">
                          Compassionate family law attorney specializing in divorce, child custody, and adoption. Known
                          for achieving favorable outcomes while minimizing family conflict.
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="font-medium">$175/hour consultation</span>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">Family Law</Badge>
                              <Badge variant="secondary">Child Custody</Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>DW</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">Dr. David Wilson</h3>
                            <p className="text-muted-foreground">Criminal Defense Attorney</p>
                            <p className="text-sm text-muted-foreground">Wilson Defense Law</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <span className="font-medium">4.9</span>
                              <span className="text-sm text-muted-foreground">(203 reviews)</span>
                            </div>
                            <p className="text-sm text-muted-foreground">20+ years experience</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1 text-sm">
                            <MapPin className="h-3 w-3" />
                            <span>Chicago, IL</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-3 w-3" />
                            <span>24/7 emergency response</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Emergency Available
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">
                          Experienced criminal defense attorney with expertise in white-collar crimes, DUI, and federal
                          cases. Former prosecutor with deep understanding of both sides of the law.
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="font-medium">$250/hour consultation</span>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">Criminal Defense</Badge>
                              <Badge variant="secondary">Federal Cases</Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                            <Button size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline">Load More Results</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
