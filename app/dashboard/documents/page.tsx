import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Scale, Search, Plus, FileText, Download, Eye, Clock, Filter } from "lucide-react"
import Link from "next/link"

export default function DocumentsPage() {
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
              <span className="font-bold text-foreground">My Documents</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Document Center</h1>
            <p className="text-muted-foreground">Generate, manage, and organize your legal documents</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/documents/new">
              <Plus className="h-4 w-4 mr-2" />
              Generate New Document
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Document Categories */}
          <div className="lg:col-span-1">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Document Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard/documents/new?type=fir">
                    <FileText className="h-4 w-4 mr-2" />
                    FIR (First Information Report)
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard/documents/new?type=affidavit">
                    <FileText className="h-4 w-4 mr-2" />
                    Affidavit
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard/documents/new?type=legal-notice">
                    <FileText className="h-4 w-4 mr-2" />
                    Legal Notice
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard/documents/new?type=contract">
                    <FileText className="h-4 w-4 mr-2" />
                    Contract
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard/documents/new?type=petition">
                    <FileText className="h-4 w-4 mr-2" />
                    Petition
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard/documents/new?type=power-of-attorney">
                    <FileText className="h-4 w-4 mr-2" />
                    Power of Attorney
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Document List */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search documents..." className="pl-10 bg-background" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="space-y-4">
              {/* Recent Documents */}
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Employment Contract - TechCorp</h3>
                        <p className="text-sm text-muted-foreground">Contract • Generated 2 hours ago</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">Contract</Badge>
                          <Badge variant="outline">Ready</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Legal Notice - Landlord Dispute</h3>
                        <p className="text-sm text-muted-foreground">Legal Notice • Generated 1 day ago</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">Legal Notice</Badge>
                          <Badge variant="outline">Sent</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Affidavit - Identity Verification</h3>
                        <p className="text-sm text-muted-foreground">Affidavit • Generated 3 days ago</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">Affidavit</Badge>
                          <Badge variant="outline">Notarized</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium">FIR Draft - Vehicle Theft</h3>
                        <p className="text-sm text-muted-foreground">FIR • In Progress</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">FIR</Badge>
                          <Badge variant="outline">Draft</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Continue Editing
                      </Button>
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
