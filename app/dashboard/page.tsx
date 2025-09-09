import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Search,
  Bell,
  FileText,
  Users,
  TrendingUp,
  Scale,
  Plus,
  Bot,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">LawerUp</span>
              </Link>
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search cases, lawyers, topics..." className="pl-10 bg-background" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              {/* Account Switch Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 px-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Account Switching</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-3 p-3 bg-muted/50">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">Citizen Account (Current)</p>
                    </div>
                    <Badge variant="default" className="text-xs">
                      Active
                    </Badge>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 p-3" asChild>
                    <Link href="/lawyer-dashboard">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">John Doe, Esq.</p>
                        <p className="text-xs text-muted-foreground">Lawyer Account</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-3 p-3">
                    <Plus className="h-4 w-4" />
                    <span>Add Another Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 p-3" asChild>
                    <Link href="/register">
                      <Users className="h-4 w-4" />
                      <span>Create New Account</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-border mb-6">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">John Doe</CardTitle>
                    <CardDescription>Citizen Member</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard">
                      <Users className="h-4 w-4 mr-2" />
                      Feed
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/ai-assistant">
                      <Bot className="h-4 w-4 mr-2" />
                      AI Assistant
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/documents">
                      <FileText className="h-4 w-4 mr-2" />
                      My Documents
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/lawyers">
                      <Search className="h-4 w-4 mr-2" />
                      Find Lawyers
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/profile">
                      <Users className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/law-book">
                      <Scale className="h-4 w-4 mr-2" />
                      Global Law Book
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/dashboard/saved">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Saved Posts
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/dashboard/ai-assistant">
                    <Bot className="h-4 w-4 mr-2" />
                    AI Legal Help
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/dashboard/documents/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Generate Document
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/dashboard/ask">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask Community
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Create Post */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Input placeholder="Share your legal experience or ask a question..." className="bg-muted/50" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Question</Badge>
                      <Badge variant="secondary">Experience</Badge>
                      <Badge variant="secondary">News</Badge>
                    </div>
                    <Button size="sm">Post</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Feed Posts */}
              <div className="space-y-4">
                {/* Post 1 */}
                <Card className="border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Sarah Attorney</p>
                          <p className="text-sm text-muted-foreground">Legal Professional • 2h ago</p>
                        </div>
                      </div>
                      <Badge variant="outline">Consumer Rights</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      Important update: New consumer protection laws now require companies to provide clearer refund
                      policies. If you've been denied a refund recently, you may have stronger legal grounds to
                      challenge it. Here's what you need to know... 📚
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          24
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />8
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Post 2 */}
                <Card className="border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Mike Johnson</p>
                          <p className="text-sm text-muted-foreground">Citizen • 4h ago</p>
                        </div>
                      </div>
                      <Badge variant="outline">Employment Law</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      Question: My employer is asking me to work overtime without pay. They say it's "part of the job"
                      but I'm not sure if this is legal. Has anyone dealt with something similar? Looking for advice
                      before I approach HR.
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          12
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          15
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Post 3 */}
                <Card className="border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>LC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Legal Community</p>
                          <p className="text-sm text-muted-foreground">Official • 6h ago</p>
                        </div>
                      </div>
                      <Badge variant="outline">Breaking News</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">
                      🚨 Supreme Court ruling: Landmark decision on digital privacy rights affects how companies can
                      collect and use personal data. This could impact millions of ongoing cases. Read the full analysis
                      in our legal brief.
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          89
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          32
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending Topics */}
            <Card className="border-border mb-6">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">#ConsumerRights</span>
                  <span className="text-xs text-muted-foreground">1.2k posts</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">#EmploymentLaw</span>
                  <span className="text-xs text-muted-foreground">856 posts</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">#DigitalPrivacy</span>
                  <span className="text-xs text-muted-foreground">743 posts</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">#TenantRights</span>
                  <span className="text-xs text-muted-foreground">621 posts</span>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Lawyers */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Suggested Lawyers</CardTitle>
                <CardDescription>Based on your interests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Dr. Rachel Smith</p>
                      <p className="text-xs text-muted-foreground">Employment Law</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Follow
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">James Wilson</p>
                      <p className="text-xs text-muted-foreground">Consumer Rights</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Follow
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Anna Lee</p>
                      <p className="text-xs text-muted-foreground">Family Law</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
