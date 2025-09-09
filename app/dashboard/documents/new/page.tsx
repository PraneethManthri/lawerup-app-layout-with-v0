import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Scale, Wand2, FileText, Sparkles } from "lucide-react"
import Link from "next/link"

export default function NewDocumentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/documents">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="font-bold text-foreground">AI Document Generator</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Document Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-primary" />
                  Generate Legal Document
                </CardTitle>
                <CardDescription>
                  Fill in the details below and our AI will generate a professional legal document for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basic" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="review">Review & Generate</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="documentType">Document Type</Label>
                      <Select>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fir">FIR (First Information Report)</SelectItem>
                          <SelectItem value="affidavit">Affidavit</SelectItem>
                          <SelectItem value="legal-notice">Legal Notice</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="petition">Petition</SelectItem>
                          <SelectItem value="power-of-attorney">Power of Attorney</SelectItem>
                          <SelectItem value="rental-agreement">Rental Agreement</SelectItem>
                          <SelectItem value="employment-contract">Employment Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Your First Name</Label>
                        <Input id="firstName" placeholder="John" className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Your Last Name</Label>
                        <Input id="lastName" placeholder="Doe" className="bg-background" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Your Address</Label>
                      <Textarea id="address" placeholder="Enter your complete address..." className="bg-background" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Document Subject/Title</Label>
                      <Input
                        id="subject"
                        placeholder="e.g., Employment Contract for Software Developer Position"
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Detailed Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide detailed information about the situation, parties involved, dates, amounts, and any other relevant details..."
                        className="bg-background min-h-32"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="otherParty">Other Party Name</Label>
                        <Input id="otherParty" placeholder="Company/Person name" className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Relevant Date</Label>
                        <Input id="date" type="date" className="bg-background" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount (if applicable)</Label>
                      <Input id="amount" placeholder="$0.00" className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Any additional details, special clauses, or requirements..."
                        className="bg-background"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="review" className="space-y-6">
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        AI Generation Preview
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Document Type:</span>
                          <span>Employment Contract</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Your Name:</span>
                          <span>John Doe</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subject:</span>
                          <span>Software Developer Position</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Other Party:</span>
                          <span>TechCorp Inc.</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                      <h4 className="font-medium text-primary mb-2">AI Features Included</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Legal language optimization</li>
                        <li>• Jurisdiction-specific clauses</li>
                        <li>• Standard legal protections</li>
                        <li>• Professional formatting</li>
                        <li>• Compliance verification</li>
                      </ul>
                    </div>

                    <Button className="w-full" size="lg">
                      <Wand2 className="h-4 w-4 mr-2" />
                      Generate Document with AI
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Document Templates */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">Popular Templates</CardTitle>
                  <CardDescription>Quick start with pre-built templates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Employment Contract
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Rental Agreement
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Service Agreement
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Non-Disclosure Agreement
                  </Button>
                </CardContent>
              </Card>

              {/* AI Tips */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">AI Generation Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p>Be specific with dates, amounts, and party names for accurate generation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p>Include all relevant details in the description field</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p>Review generated documents with a legal professional before use</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p>Save drafts to continue editing later</p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">Recent Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">Employment Contract</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">Legal Notice</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
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
