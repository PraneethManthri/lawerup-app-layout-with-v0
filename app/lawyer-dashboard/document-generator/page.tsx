import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function LawyerDocumentGeneratorPage() {
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
            <h1 className="text-3xl font-bold">AI Document Generator</h1>
            <p className="text-muted-foreground">Generate professional legal documents with AI assistance</p>
          </div>

          {/* Document Categories */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-2xl">📄</span>
                  Contracts & Agreements
                </CardTitle>
                <CardDescription>Employment contracts, NDAs, service agreements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Employment Contract
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Non-Disclosure Agreement
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Service Agreement
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Partnership Agreement
                  </Button>
                </div>
                <Button className="w-full mt-4">Generate Contract</Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                  Court Documents
                </CardTitle>
                <CardDescription>Petitions, motions, briefs, and filings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Motion to Dismiss
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Petition for Relief
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Legal Brief
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Discovery Request
                  </Button>
                </div>
                <Button className="w-full mt-4">Generate Filing</Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  Legal Notices
                </CardTitle>
                <CardDescription>Demand letters, cease & desist, notices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Demand Letter
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Cease & Desist
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Legal Notice
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    • Settlement Offer
                  </Button>
                </div>
                <Button className="w-full mt-4">Generate Notice</Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Documents */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Recent Documents</CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">📄</span>
                    <div>
                      <p className="font-medium">Employment Contract - Johnson Case</p>
                      <p className="text-sm text-muted-foreground">Generated 2 hours ago • PDF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <span>👁️</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <span>⬇️</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <span>✏️</span>
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <p className="font-medium">Motion to Dismiss - Smith Case</p>
                      <p className="text-sm text-muted-foreground">Generated yesterday • PDF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <span>👁️</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <span>⬇️</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <span>✏️</span>
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">📋</span>
                    <div>
                      <p className="font-medium">Demand Letter - Davis Case</p>
                      <p className="text-sm text-muted-foreground">Generated 3 days ago • PDF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <span>👁️</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <span>⬇️</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <span>✏️</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Features */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span>🤖</span>
                AI-Powered Features
              </CardTitle>
              <CardDescription>Advanced AI tools to enhance your document generation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Smart Templates</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI learns from your previous documents to suggest personalized templates
                  </p>
                  <Button variant="outline" size="sm">
                    Explore Templates
                  </Button>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Legal Research Integration</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Automatically cite relevant cases and statutes in your documents
                  </p>
                  <Button variant="outline" size="sm">
                    Enable Research
                  </Button>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Multi-language Support</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Generate documents in multiple languages with legal accuracy
                  </p>
                  <Button variant="outline" size="sm">
                    Select Language
                  </Button>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Compliance Checker</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI reviews documents for compliance with local and federal laws
                  </p>
                  <Button variant="outline" size="sm">
                    Run Check
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
