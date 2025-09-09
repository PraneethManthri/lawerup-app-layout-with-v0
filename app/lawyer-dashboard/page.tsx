import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import Link from "next/link"
import { ChevronDown, Users, Plus } from "lucide-react"

const caseData = [
  { month: "Jan", cases: 12 },
  { month: "Feb", cases: 15 },
  { month: "Mar", cases: 18 },
  { month: "Apr", cases: 22 },
  { month: "May", cases: 19 },
  { month: "Jun", cases: 25 },
]

const caseTypeData = [
  { name: "Employment", value: 35, color: "#059669" },
  { name: "Consumer", value: 25, color: "#10b981" },
  { name: "Family", value: 20, color: "#34d399" },
  { name: "Criminal", value: 20, color: "#6ee7b7" },
]

export default function LawyerDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">⚖️</span>
                <span className="font-bold text-foreground">LawerUp Pro</span>
              </Link>
              <div className="relative max-w-md">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">🔍</span>
                <Input placeholder="Search cases, clients, documents..." className="pl-10 bg-background" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <span>🔔</span>
              </Button>
              {/* Account Switch Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 px-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AS</AvatarFallback>
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
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">Attorney Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Lawyer Account (Current)</p>
                    </div>
                    <Badge variant="default" className="text-xs">
                      Active
                    </Badge>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-3 p-3" asChild>
                    <Link href="/dashboard">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">Citizen Account</p>
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
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Attorney Sarah Johnson</CardTitle>
                    <CardDescription>Employment Law Specialist</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard">
                      <span className="mr-2">📈</span>
                      Dashboard
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/feed">
                      <span className="mr-2">📰</span>
                      Professional Feed
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/cases">
                      <span className="mr-2">💼</span>
                      My Cases
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/clients">
                      <span className="mr-2">👥</span>
                      Clients
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/find-clients">
                      <span className="mr-2">🔍</span>
                      Find Clients
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/messages">
                      <span className="mr-2">💬</span>
                      Messages
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/documents">
                      <span className="mr-2">📄</span>
                      Document Vault
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/document-generator">
                      <span className="mr-2">📝</span>
                      Document Generator
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/calendar">
                      <span className="mr-2">📅</span>
                      Calendar
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/network">
                      <span className="mr-2">🌐</span>
                      Professional Network
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/ai-assistant">
                      <span className="mr-2">🤖</span>
                      AI Assistant
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/ai-scheduler">
                      <span className="mr-2">🗓️</span>
                      AI Schedule Assistant
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/profile">
                      <span className="mr-2">👤</span>
                      Profile
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link href="/lawyer-dashboard/law-book">
                      <span className="mr-2">⚖️</span>
                      Global Law Book
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Cases</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">This Month</span>
                  <span className="font-semibold">8 New</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                  <span className="font-semibold text-primary">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Client Rating</span>
                  <div className="flex items-center gap-1">
                    <span className="text-primary">⭐</span>
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="cases">Cases</TabsTrigger>
                <TabsTrigger value="clients">Clients</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="ai">AI Tools</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Active Cases</p>
                          <p className="text-2xl font-bold">23</p>
                        </div>
                        <span className="text-2xl text-primary">💼</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Clients</p>
                          <p className="text-2xl font-bold">156</p>
                        </div>
                        <span className="text-2xl text-primary">👥</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Documents</p>
                          <p className="text-2xl font-bold">1,247</p>
                        </div>
                        <span className="text-2xl text-primary">📄</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">This Month</p>
                          <p className="text-2xl font-bold">$24.5k</p>
                        </div>
                        <span className="text-2xl text-primary">📈</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base">Cases Over Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={caseData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Bar dataKey="cases" fill="hsl(var(--primary))" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base">Case Types Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie data={caseTypeData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} dataKey="value">
                            {caseTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {caseTypeData.map((item, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-sm">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-base">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">New case assigned: Johnson vs. TechCorp</p>
                          <p className="text-xs text-muted-foreground">Employment discrimination case</p>
                        </div>
                        <span className="text-xs text-muted-foreground">2h ago</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Document uploaded: Settlement Agreement</p>
                          <p className="text-xs text-muted-foreground">Case #2024-156</p>
                        </div>
                        <span className="text-xs text-muted-foreground">4h ago</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-chart-3 rounded-full" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Court hearing scheduled</p>
                          <p className="text-xs text-muted-foreground">Smith vs. Landlord Corp - March 15</p>
                        </div>
                        <span className="text-xs text-muted-foreground">6h ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Cases Tab */}
              <TabsContent value="cases" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Case Management</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <span className="mr-2">🔽</span>
                      Filter
                    </Button>
                    <Button size="sm">
                      <span className="mr-2">➕</span>
                      New Case
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {/* Active Cases */}
                  <Card className="border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-base">Johnson vs. TechCorp Inc.</CardTitle>
                          <CardDescription>Employment discrimination case</CardDescription>
                        </div>
                        <Badge variant="default">Active</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span>Case Progress</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Next hearing: March 15, 2024</span>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <span>👁️</span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <span>📄</span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <span>💬</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-base">Smith vs. Landlord Corp</CardTitle>
                          <CardDescription>Tenant rights violation</CardDescription>
                        </div>
                        <Badge variant="secondary">Discovery</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span>Case Progress</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Deadline: March 20, 2024</span>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <span>👁️</span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <span>📄</span>
                            </Button>
                            <Button variant="ghost" size="sm">
                              <span>💬</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Document Vault</h3>
                  <Button size="sm">
                    <span className="mr-2">➕</span>
                    Upload Document
                  </Button>
                </div>

                <div className="grid gap-4">
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl text-primary">📄</span>
                          <div>
                            <p className="font-medium">Settlement Agreement - Johnson Case</p>
                            <p className="text-sm text-muted-foreground">PDF • 2.4 MB • Modified 2h ago</p>
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
                            <span>🔗</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl text-primary">📄</span>
                          <div>
                            <p className="font-medium">Evidence Photos - Smith Case</p>
                            <p className="text-sm text-muted-foreground">ZIP • 15.2 MB • Modified 1d ago</p>
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
                            <span>🔗</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Network Tab */}
              <TabsContent value="network" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Professional Network</h3>
                  <Button size="sm">
                    <span className="mr-2">➕</span>
                    Connect
                  </Button>
                </div>

                <div className="space-y-4">
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/placeholder.svg?height=48&width=48" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">Michael Johnson</p>
                          <p className="text-sm text-muted-foreground">
                            Corporate Law Specialist • 15 years experience
                          </p>
                          <p className="text-xs text-muted-foreground">Johnson & Associates Law Firm</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Connect
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="/placeholder.svg?height=48&width=48" />
                          <AvatarFallback>RL</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">Rachel Lee</p>
                          <p className="text-sm text-muted-foreground">Family Law Expert • 12 years experience</p>
                          <p className="text-xs text-muted-foreground">Lee Family Law Practice</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Connect
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Professional Feed Tab */}
              <TabsContent value="feed" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Professional Feed</h3>
                  <Button size="sm">
                    <span className="mr-2">➕</span>
                    Create Post
                  </Button>
                </div>

                <div className="space-y-4">
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/professional-lawyer.png" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <p className="font-medium">Michael Johnson</p>
                            <Badge variant="secondary">Corporate Law</Badge>
                            <span className="text-xs text-muted-foreground">2h ago</span>
                          </div>
                          <p className="text-sm mb-3">
                            Just won a major corporate restructuring case! Key takeaway: Always review the fine print in
                            merger agreements. The devil is truly in the details. 📚⚖️
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Button variant="ghost" size="sm">
                              👍 24 Likes
                            </Button>
                            <Button variant="ghost" size="sm">
                              💬 8 Comments
                            </Button>
                            <Button variant="ghost" size="sm">
                              🔄 Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/professional-woman-lawyer.png" />
                          <AvatarFallback>RL</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <p className="font-medium">Rachel Lee</p>
                            <Badge variant="secondary">Family Law</Badge>
                            <span className="text-xs text-muted-foreground">4h ago</span>
                          </div>
                          <p className="text-sm mb-3">
                            New Supreme Court ruling on custody cases changes everything. Here's what family law
                            practitioners need to know... 🏛️
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Button variant="ghost" size="sm">
                              👍 45 Likes
                            </Button>
                            <Button variant="ghost" size="sm">
                              💬 12 Comments
                            </Button>
                            <Button variant="ghost" size="sm">
                              🔄 Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Clients Tab */}
              <TabsContent value="clients" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Client Management</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <span className="mr-2">🔍</span>
                      Find Clients
                    </Button>
                    <Button size="sm">
                      <span className="mr-2">➕</span>
                      Add Client
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src="/placeholder.svg?height=48&width=48" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">John Davis</p>
                            <p className="text-sm text-muted-foreground">Employment Case • Active since Jan 2024</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                High Priority
                              </Badge>
                              <span className="text-xs text-green-600">● Online</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <span className="mr-1">💬</span>
                            Chat
                          </Button>
                          <Button variant="outline" size="sm">
                            <span className="mr-1">📞</span>
                            Call
                          </Button>
                          <Button variant="outline" size="sm">
                            <span className="mr-1">📹</span>
                            Video
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src="/placeholder.svg?height=48&width=48" />
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Sarah Miller</p>
                            <p className="text-sm text-muted-foreground">Family Law • Active since Feb 2024</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                Medium Priority
                              </Badge>
                              <span className="text-xs text-gray-500">● Last seen 2h ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <span className="mr-1">💬</span>
                            Chat
                          </Button>
                          <Button variant="outline" size="sm">
                            <span className="mr-1">📞</span>
                            Call
                          </Button>
                          <Button variant="outline" size="sm">
                            <span className="mr-1">📹</span>
                            Video
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* AI Tools Tab */}
              <TabsContent value="ai" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">AI Legal Tools</h3>
                  <Button size="sm">
                    <span className="mr-2">🤖</span>
                    Open AI Assistant
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <span>🔍</span>
                        Case Research
                      </CardTitle>
                      <CardDescription>AI-powered legal research and precedent finder</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-transparent" variant="outline">
                        Start Research
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <span>📝</span>
                        Document Generator
                      </CardTitle>
                      <CardDescription>Generate contracts, petitions, and legal documents</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <Link href="/lawyer-dashboard/document-generator">Generate Documents</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <span>⚖️</span>
                        Case Analyzer
                      </CardTitle>
                      <CardDescription>AI analysis of case strength and recommendations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-transparent" variant="outline">
                        Analyze Case
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <span>🌐</span>
                        Translation
                      </CardTitle>
                      <CardDescription>Multilingual document translation and support</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-transparent" variant="outline">
                        Translate Documents
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <span>🗓️</span>
                        AI Schedule Assistant
                      </CardTitle>
                      <CardDescription>AI-powered scheduling for your cases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <Link href="/lawyer-dashboard/ai-scheduler">Schedule Cases</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
