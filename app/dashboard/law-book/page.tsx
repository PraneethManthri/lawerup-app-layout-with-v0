import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ArrowLeft, Globe, BookOpen, Scale, Filter, Languages, Compass as Compare } from "lucide-react"
import Link from "next/link"

export default function LawBookPage() {
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
              <div className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-blue-600" />
                <h1 className="text-xl font-semibold">Global Law Book</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Languages className="h-4 w-4 mr-2" />
                English
              </Button>
              <Button variant="outline" size="sm">
                <Compare className="h-4 w-4 mr-2" />
                Compare Laws
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Country</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Law Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="criminal">Criminal Law</SelectItem>
                      <SelectItem value="civil">Civil Law</SelectItem>
                      <SelectItem value="constitutional">Constitutional Law</SelectItem>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="labor">Labor Law</SelectItem>
                      <SelectItem value="family">Family Law</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Language</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
              </CardContent>
            </Card>

            {/* Popular Searches */}
            <Card className="border-border mt-6">
              <CardHeader>
                <CardTitle className="text-base">Popular Searches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Murder laws by country
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Employment rights USA
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Consumer protection India
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Immigration laws Canada
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <Card className="border-border mb-6">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search laws in plain language: 'What's the punishment for theft in India?'"
                      className="pl-10"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-sm text-muted-foreground">Quick search:</span>
                  <Badge variant="outline" className="cursor-pointer">
                    IPC 302
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Employment Act
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Consumer Rights
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="browse" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="browse">Browse Laws</TabsTrigger>
                <TabsTrigger value="search">Search Results</TabsTrigger>
                <TabsTrigger value="compare">Compare Countries</TabsTrigger>
              </TabsList>

              <TabsContent value="browse" className="space-y-4">
                {/* Country Selection */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Card className="border-border cursor-pointer hover:bg-muted/50">
                    <CardContent className="pt-6 text-center">
                      <div className="text-2xl mb-2">🇺🇸</div>
                      <h3 className="font-medium">United States</h3>
                      <p className="text-sm text-muted-foreground">Federal & State Laws</p>
                    </CardContent>
                  </Card>
                  <Card className="border-border cursor-pointer hover:bg-muted/50">
                    <CardContent className="pt-6 text-center">
                      <div className="text-2xl mb-2">🇮🇳</div>
                      <h3 className="font-medium">India</h3>
                      <p className="text-sm text-muted-foreground">IPC, CrPC, Constitution</p>
                    </CardContent>
                  </Card>
                  <Card className="border-border cursor-pointer hover:bg-muted/50">
                    <CardContent className="pt-6 text-center">
                      <div className="text-2xl mb-2">🇬🇧</div>
                      <h3 className="font-medium">United Kingdom</h3>
                      <p className="text-sm text-muted-foreground">Common Law System</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Law Categories */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Law Categories</CardTitle>
                    <CardDescription>Browse laws by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                        <Scale className="h-6 w-6 text-blue-600" />
                        <span className="text-sm">Criminal Law</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                        <span className="text-sm">Civil Law</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                        <Globe className="h-6 w-6 text-blue-600" />
                        <span className="text-sm">Constitutional</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                        <Scale className="h-6 w-6 text-blue-600" />
                        <span className="text-sm">Corporate Law</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="search" className="space-y-4">
                {/* Search Results */}
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Section 302 IPC - Murder</CardTitle>
                      <Badge variant="outline">India - Criminal Law</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Plain Language Summary:</h4>
                      <p className="text-sm">
                        Murder is the intentional killing of another person. Under Section 302 of the Indian Penal Code,
                        murder is punishable by death or life imprisonment, and may also include a fine.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Legal Text:</h4>
                      <p className="text-sm text-muted-foreground">
                        Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be
                        liable to fine.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="outline" size="sm">
                        View Precedents
                      </Button>
                      <Button variant="outline" size="sm">
                        Compare Countries
                      </Button>
                      <Button variant="outline" size="sm">
                        Translate
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Employment Rights - Overtime Pay</CardTitle>
                      <Badge variant="outline">USA - Labor Law</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Plain Language Summary:</h4>
                      <p className="text-sm">
                        In the US, non-exempt employees must receive overtime pay of 1.5 times their regular rate for
                        hours worked over 40 in a workweek. Some states have additional overtime requirements.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Legal Text:</h4>
                      <p className="text-sm text-muted-foreground">
                        Fair Labor Standards Act (FLSA) Section 207 - Maximum hours; overtime compensation.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="outline" size="sm">
                        State Variations
                      </Button>
                      <Button variant="outline" size="sm">
                        Exemptions
                      </Button>
                      <Button variant="outline" size="sm">
                        File Complaint
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="compare" className="space-y-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Compare Laws Across Countries</CardTitle>
                    <CardDescription>See how different countries handle the same legal issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Country 1</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usa">🇺🇸 United States</SelectItem>
                            <SelectItem value="india">🇮🇳 India</SelectItem>
                            <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Country 2</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usa">🇺🇸 United States</SelectItem>
                            <SelectItem value="india">🇮🇳 India</SelectItem>
                            <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Legal Topic</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="murder">Murder Laws</SelectItem>
                            <SelectItem value="theft">Theft Laws</SelectItem>
                            <SelectItem value="employment">Employment Rights</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Compare Laws</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
