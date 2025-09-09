import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, FileText, MessageSquare, Search, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">LawerUp</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Connecting Citizens with Legal Professionals
          </Badge>
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">Your Legal Journey Starts Here</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Access legal expertise, manage cases, generate documents, and connect with the legal community - all in one
            powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/register?type=citizen">I Need Legal Help</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
              asChild
            >
              <Link href="/register?type=lawyer">I'm a Legal Professional</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Everything You Need for Legal Success</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From AI-powered document generation to professional networking, our platform revolutionizes how legal
              services are delivered and accessed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Social Legal Feed</CardTitle>
                <CardDescription>
                  Connect with the legal community, share experiences, and get insights from trending cases and legal
                  discussions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle>AI Document Generator</CardTitle>
                <CardDescription>
                  Generate FIRs, affidavits, contracts, and legal notices instantly with our AI-powered document
                  assistant.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Secure Messaging</CardTitle>
                <CardDescription>
                  Direct communication with lawyers, group consultations, and encrypted messaging for sensitive legal
                  matters.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Smart Lawyer Matching</CardTitle>
                <CardDescription>
                  Find the right legal professional based on specialization, location, and case requirements with AI
                  matching.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Scale className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Case Management</CardTitle>
                <CardDescription>
                  Professional dashboard for lawyers to track cases, manage documents, and collaborate with clients
                  efficiently.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>AI Legal Assistant</CardTitle>
                <CardDescription>
                  Get instant case analysis, precedent research, and legal recommendations powered by advanced AI
                  technology.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Legal Experience?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of citizens and legal professionals who are already using LawerUp to streamline their legal
            processes.
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Start Your Journey Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">LawerUp</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 LawerUp. Empowering legal access for everyone.</p>
        </div>
      </footer>
    </div>
  )
}
