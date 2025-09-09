import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function LawyerFeedPage() {
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
              <div className="relative max-w-md">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">🔍</span>
                <Input placeholder="Search posts, lawyers, topics..." className="pl-10 bg-background" />
              </div>
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
            <h1 className="text-3xl font-bold">Professional Feed</h1>
            <p className="text-muted-foreground">Connect with legal professionals and share insights</p>
          </div>

          {/* Create Post */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Share with the Legal Community</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <Textarea
                    placeholder="Share legal insights, case updates, or professional thoughts..."
                    className="min-h-[100px]"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <span className="mr-1">📷</span>
                        Photo
                      </Button>
                      <Button variant="ghost" size="sm">
                        <span className="mr-1">📄</span>
                        Document
                      </Button>
                      <Button variant="ghost" size="sm">
                        <span className="mr-1">🏷️</span>
                        Tag
                      </Button>
                    </div>
                    <Button>
                      <span className="mr-1">📤</span>
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feed Posts */}
          <div className="space-y-6">
            {/* Post 1 */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/professional-lawyer.png" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold">Michael Johnson</p>
                      <Badge variant="secondary">Corporate Law</Badge>
                      <span className="text-xs text-muted-foreground">• 2 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Senior Partner at Johnson & Associates</p>

                    <div className="space-y-3">
                      <p className="text-sm">
                        🎉 Just secured a major victory in a complex corporate restructuring case! After 18 months of
                        negotiations, we successfully protected our client's interests while ensuring fair treatment for
                        all stakeholders.
                      </p>

                      <p className="text-sm">
                        Key takeaway for fellow corporate lawyers: Always review the fine print in merger agreements.
                        The devil is truly in the details, and a thorough due diligence process can save millions. 📚⚖️
                      </p>

                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm font-medium mb-1">💡 Pro Tip:</p>
                        <p className="text-sm">
                          When dealing with cross-border M&A, pay special attention to regulatory compliance in each
                          jurisdiction. What's standard in one country might be prohibited in another.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mt-4 pt-3 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">👍</span>
                        24 Likes
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">💬</span>8 Comments
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">🔄</span>
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">🔖</span>
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Post 2 */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/professional-woman-lawyer.png" />
                    <AvatarFallback>RL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold">Rachel Lee</p>
                      <Badge variant="secondary">Family Law</Badge>
                      <span className="text-xs text-muted-foreground">• 4 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Family Law Specialist at Lee Family Practice</p>

                    <div className="space-y-3">
                      <p className="text-sm">
                        🏛️ BREAKING: New Supreme Court ruling on custody cases changes everything for family law
                        practitioners. The court's decision in Johnson v. State significantly expands parental rights
                        protections.
                      </p>

                      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm font-medium mb-2">📋 Key Changes:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>Enhanced due process requirements for custody modifications</li>
                          <li>Stronger presumption in favor of joint custody arrangements</li>
                          <li>New standards for evaluating parental fitness</li>
                        </ul>
                      </div>

                      <p className="text-sm">
                        I'll be hosting a webinar next week to discuss the implications. Link in comments! What are your
                        thoughts on how this will impact your practice?
                      </p>
                    </div>

                    <div className="flex items-center gap-6 mt-4 pt-3 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">👍</span>
                        45 Likes
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">💬</span>
                        12 Comments
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">🔄</span>
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">🔖</span>
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Post 3 */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/professional-woman-attorney.png" />
                    <AvatarFallback>DW</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold">Dr. Diana Williams</p>
                      <Badge variant="secondary">Employment Law</Badge>
                      <span className="text-xs text-muted-foreground">• 6 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Employment Rights Advocate & Legal Scholar</p>

                    <div className="space-y-3">
                      <p className="text-sm">
                        📊 Interesting trend I'm seeing: 40% increase in workplace discrimination cases involving remote
                        work policies. As we navigate the post-pandemic workplace, new legal challenges are emerging.
                      </p>

                      <p className="text-sm">
                        Key areas to watch: • Disability accommodations in hybrid work • Gender discrimination in
                        promotion decisions • Age bias in tech adoption requirements
                      </p>

                      <p className="text-sm">
                        How is your firm adapting to these evolving employment law challenges? Would love to hear your
                        experiences! 💼
                      </p>
                    </div>

                    <div className="flex items-center gap-6 mt-4 pt-3 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">👍</span>
                        32 Likes
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">💬</span>
                        18 Comments
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">🔄</span>
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">🔖</span>
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Post 4 - Legal Tech Discussion */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/professional-attorney.png" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold">James Smith</p>
                      <Badge variant="secondary">Legal Tech</Badge>
                      <span className="text-xs text-muted-foreground">• 8 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Legal Innovation Consultant</p>

                    <div className="space-y-3">
                      <p className="text-sm">
                        🤖 AI in legal practice: Game-changer or overhyped? After implementing AI tools in our firm for
                        6 months, here's what I've learned:
                      </p>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded border border-green-200 dark:border-green-800">
                          <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-1">✅ What Works:</p>
                          <ul className="text-xs space-y-1 list-disc list-inside text-green-700 dark:text-green-300">
                            <li>Document review (80% faster)</li>
                            <li>Legal research automation</li>
                            <li>Contract analysis</li>
                          </ul>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded border border-amber-200 dark:border-amber-800">
                          <p className="text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">⚠️ Challenges:</p>
                          <ul className="text-xs space-y-1 list-disc list-inside text-amber-700 dark:text-amber-300">
                            <li>Client trust concerns</li>
                            <li>Ethical considerations</li>
                            <li>Training requirements</li>
                          </ul>
                        </div>
                      </div>

                      <p className="text-sm">
                        The key is finding the right balance. AI enhances our capabilities but doesn't replace human
                        judgment. What's your experience with legal tech?
                      </p>
                    </div>

                    <div className="flex items-center gap-6 mt-4 pt-3 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">👍</span>
                        67 Likes
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">💬</span>
                        25 Comments
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">🔄</span>
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <span className="mr-1">🔖</span>
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline">Load More Posts</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
