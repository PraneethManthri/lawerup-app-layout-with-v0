import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Scale, Download, Edit, Share2, Printer as Print, Save, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DocumentPreviewPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/dashboard/documents/new">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">Document Preview</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Print className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Document Info */}
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-xl font-bold text-foreground">Employment Contract - Software Developer</h1>
                  <p className="text-muted-foreground">Generated on March 10, 2024</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Contract</Badge>
                  <Badge variant="outline" className="text-primary border-primary">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    AI Generated
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Document Type:</span>
                  <p className="font-medium">Employment Contract</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Parties:</span>
                  <p className="font-medium">John Doe & TechCorp Inc.</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Status:</span>
                  <p className="font-medium text-primary">Ready for Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Document Content */}
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="prose prose-sm max-w-none">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">EMPLOYMENT CONTRACT</h1>
                  <p className="text-muted-foreground">Software Developer Position</p>
                </div>

                <Separator className="my-6" />

                <div className="space-y-6">
                  <section>
                    <h2 className="text-lg font-semibold mb-3">1. PARTIES</h2>
                    <p className="text-sm leading-relaxed">
                      This Employment Contract ("Agreement") is entered into on March 10, 2024, between:
                    </p>
                    <div className="ml-4 mt-2 space-y-1 text-sm">
                      <p>
                        <strong>Employee:</strong> John Doe, residing at 123 Main Street, Anytown, ST 12345
                      </p>
                      <p>
                        <strong>Employer:</strong> TechCorp Inc., a corporation organized under the laws of Delaware,
                        with its principal place of business at 456 Business Ave, Tech City, CA 90210
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold mb-3">2. POSITION AND DUTIES</h2>
                    <p className="text-sm leading-relaxed">
                      The Employee is hereby employed as a Software Developer. The Employee's duties shall include, but
                      are not limited to:
                    </p>
                    <ul className="ml-4 mt-2 space-y-1 text-sm list-disc">
                      <li>Developing and maintaining software applications</li>
                      <li>Collaborating with cross-functional teams</li>
                      <li>Writing clean, maintainable code</li>
                      <li>Participating in code reviews and technical discussions</li>
                      <li>Other duties as assigned by the supervisor</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold mb-3">3. COMPENSATION</h2>
                    <p className="text-sm leading-relaxed">
                      The Employee shall receive an annual salary of $85,000, payable in accordance with the Employer's
                      standard payroll practices. The Employee may also be eligible for performance-based bonuses at the
                      discretion of the Employer.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold mb-3">4. BENEFITS</h2>
                    <p className="text-sm leading-relaxed">
                      The Employee shall be entitled to participate in the Employer's benefit programs, including but
                      not limited to:
                    </p>
                    <ul className="ml-4 mt-2 space-y-1 text-sm list-disc">
                      <li>Health insurance coverage</li>
                      <li>Dental and vision insurance</li>
                      <li>401(k) retirement plan with company matching</li>
                      <li>Paid time off and holidays</li>
                      <li>Professional development opportunities</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold mb-3">5. TERM OF EMPLOYMENT</h2>
                    <p className="text-sm leading-relaxed">
                      This is an at-will employment agreement. Either party may terminate this agreement at any time,
                      with or without cause, upon two (2) weeks written notice.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold mb-3">6. CONFIDENTIALITY</h2>
                    <p className="text-sm leading-relaxed">
                      The Employee acknowledges that during employment, they may have access to confidential and
                      proprietary information. The Employee agrees to maintain the confidentiality of such information
                      both during and after employment.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-lg font-semibold mb-3">7. GOVERNING LAW</h2>
                    <p className="text-sm leading-relaxed">
                      This Agreement shall be governed by and construed in accordance with the laws of the State of
                      California.
                    </p>
                  </section>
                </div>

                <Separator className="my-8" />

                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div>
                    <p className="text-sm font-medium mb-2">EMPLOYEE:</p>
                    <div className="border-b border-muted-foreground w-48 mb-2"></div>
                    <p className="text-sm">John Doe</p>
                    <p className="text-sm text-muted-foreground">Date: ___________</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">EMPLOYER:</p>
                    <div className="border-b border-muted-foreground w-48 mb-2"></div>
                    <p className="text-sm">TechCorp Inc.</p>
                    <p className="text-sm text-muted-foreground">Date: ___________</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link href="/dashboard/documents/new">
                  <Edit className="h-4 w-4 mr-2" />
                  Make Changes
                </Link>
              </Button>
              <Button variant="outline">
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share with Lawyer
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Download Final PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
