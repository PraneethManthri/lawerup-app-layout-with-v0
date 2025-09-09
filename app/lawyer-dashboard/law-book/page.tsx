import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ArrowLeft, BookOpen, Scale, Filter, Languages, Compass as Compare, Briefcase } from "lucide-react"
import Link from "next/link"

export default function LawyerLawBookPage() {
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
              <div className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-blue-600" />
                <h1 className="text-xl font-semibold">Global Law Book - Professional</h1>
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
              <Button variant="outline" size="sm">
                <Briefcase className="h-4 w-4 mr-2" />
                Case Research
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Professional Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Professional Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Jurisdiction</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select jurisdiction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="federal">Federal (USA)</SelectItem>
                      <SelectItem value="ny">New York State</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Practice Area</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select practice area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employment">Employment Law</SelectItem>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="criminal">Criminal Law</SelectItem>
                      <SelectItem value="civil">Civil Litigation</SelectItem>
                      <SelectItem value="family">Family Law</SelectItem>
                      <SelectItem value="ip">Intellectual Property</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Court Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select court level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="supreme">Supreme Court</SelectItem>
                      <SelectItem value="appellate">Appellate Court</SelectItem>
                      <SelectItem value="district">District Court</SelectItem>
                      <SelectItem value="state">State Court</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2020-2024">2020-2024</SelectItem>
                      <SelectItem value="all">All Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
              </CardContent>
            </Card>

            {/* Professional Tools */}
            <Card className="border-border mt-6">
              <CardHeader>
                <CardTitle className="text-base">Professional Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Case Law Research
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Scale className="h-4 w-4 mr-2" />
                  Precedent Finder
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Statute Analysis
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Compare className="h-4 w-4 mr-2" />
                  Jurisdiction Compare
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Professional Search Bar */}
            <Card className="border-border mb-6">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Professional search: 'Title VII employment discrimination precedents 2024'"
                      className="pl-10"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Research</Button>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-sm text-muted-foreground">Quick research:</span>
                  <Badge variant="outline" className="cursor-pointer">
                    42 USC 1983
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    FLSA Overtime
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    ADA Compliance
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    NLRA Section 7
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="research" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="research">Case Research</TabsTrigger>
                <TabsTrigger value="statutes">Statutes</TabsTrigger>
                <TabsTrigger value="precedents">Precedents</TabsTrigger>
                <TabsTrigger value="analysis">Legal Analysis</TabsTrigger>
              </TabsList>

              <TabsContent value="research" className="space-y-4">
                {/* Recent Cases */}
                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">McDonnell Douglas Corp. v. Green (1973)</CardTitle>
                      <Badge variant="outline">Employment Law - Precedent</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Legal Holding:</h4>
                      <p className="text-sm">
                        Established the burden-shifting framework for employment discrimination cases under Title VII.
                        Creates presumption of discrimination when plaintiff establishes prima facie case.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Citations:</h4>
                      <p className="text-sm text-muted-foreground">
                        411 U.S. 792 (1973) • Cited in 15,000+ cases • Still good law
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="outline" size="sm">
                        View Full Opinion
                      </Button>
                      <Button variant="outline" size="sm">
                        Citing Cases
                      </Button>
                      <Button variant="outline" size="sm">
                        Download PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        Add to Brief
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Bostock v. Clayton County (2020)</CardTitle>
                      <Badge variant="outline">Employment Law - Recent</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Legal Holding:</h4>
                      <p className="text-sm">
                        Title VII's prohibition on sex discrimination extends to discrimination based on sexual
                        orientation and gender identity. Landmark LGBTQ+ employment rights decision.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Citations:</h4>
                      <p className="text-sm text-muted-foreground">
                        590 U.S. ___ (2020) • Cited in 2,500+ cases • Expanding precedent
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="outline" size="sm">
                        View Full Opinion
                      </Button>
                      <Button variant="outline" size="sm">
                        Citing Cases
                      </Button>
                      <Button variant="outline" size="sm">
                        Download PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        Add to Brief
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="statutes" className="space-y-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Title VII of the Civil Rights Act of 1964</CardTitle>
                    <CardDescription>42 U.S.C. § 2000e et seq.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Section 703(a) - Unlawful Employment Practices:</h4>
                      <p className="text-sm">
                        It shall be an unlawful employment practice for an employer to fail or refuse to hire or to
                        discharge any individual, or otherwise to discriminate against any individual with respect to
                        his compensation, terms, conditions, or privileges of employment, because of such individual's
                        race, color, religion, sex, or national origin.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="outline" size="sm">
                        Full Text
                      </Button>
                      <Button variant="outline" size="sm">
                        Recent Amendments
                      </Button>
                      <Button variant="outline" size="sm">
                        Regulations
                      </Button>
                      <Button variant="outline" size="sm">
                        Case Law
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="precedents" className="space-y-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Employment Discrimination Precedents</CardTitle>
                    <CardDescription>Key precedential cases by circuit and jurisdiction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Supreme Court</h4>
                        <div className="space-y-1 text-sm">
                          <p>• McDonnell Douglas (1973) - Burden shifting</p>
                          <p>• Griggs v. Duke Power (1971) - Disparate impact</p>
                          <p>• Bostock v. Clayton County (2020) - LGBTQ+ rights</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Circuit Courts</h4>
                        <div className="space-y-1 text-sm">
                          <p>• 2nd Circuit: Vega v. Hempstead (2020)</p>
                          <p>• 9th Circuit: Rizo v. Yovino (2018)</p>
                          <p>• 5th Circuit: Bauer v. Lynch (2016)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analysis" className="space-y-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>AI Legal Analysis Tools</CardTitle>
                    <CardDescription>Professional AI-powered legal research and analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                        <Scale className="h-6 w-6 text-blue-600" />
                        <span className="text-sm">Case Strength Analysis</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                        <span className="text-sm">Precedent Finder</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                        <Briefcase className="h-6 w-6 text-blue-600" />
                        <span className="text-sm">Brief Generator</span>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                        <Compare className="h-6 w-6 text-blue-600" />
                        <span className="text-sm">Jurisdiction Compare</span>
                      </Button>
                    </div>
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
