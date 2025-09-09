import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Scale } from "lucide-react"
import Link from "next/link"

export default function AskCommunityPage() {
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
              <span className="font-bold text-foreground">Ask the Community</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Share Your Legal Question</CardTitle>
            <CardDescription>
              Get help from our community of legal professionals and experienced citizens
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="category">Legal Category</Label>
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employment">Employment Law</SelectItem>
                  <SelectItem value="consumer">Consumer Rights</SelectItem>
                  <SelectItem value="family">Family Law</SelectItem>
                  <SelectItem value="criminal">Criminal Law</SelectItem>
                  <SelectItem value="property">Property Law</SelectItem>
                  <SelectItem value="contract">Contract Law</SelectItem>
                  <SelectItem value="personal-injury">Personal Injury</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Question Title</Label>
              <Input id="title" placeholder="Briefly describe your legal question..." className="bg-background" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Detailed Description</Label>
              <Textarea
                id="description"
                placeholder="Provide more details about your situation. Include relevant facts, timeline, and what kind of help you're looking for..."
                className="bg-background min-h-32"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency Level</Label>
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="How urgent is this?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - General advice needed</SelectItem>
                  <SelectItem value="medium">Medium - Need help within a week</SelectItem>
                  <SelectItem value="high">High - Need immediate guidance</SelectItem>
                  <SelectItem value="emergency">Emergency - Urgent legal matter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tags (Optional)</Label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="cursor-pointer">
                  workplace
                </Badge>
                <Badge variant="secondary" className="cursor-pointer">
                  contract
                </Badge>
                <Badge variant="secondary" className="cursor-pointer">
                  discrimination
                </Badge>
                <Badge variant="secondary" className="cursor-pointer">
                  harassment
                </Badge>
                <Badge variant="secondary" className="cursor-pointer">
                  termination
                </Badge>
              </div>
              <Input placeholder="Add custom tags..." className="bg-background" />
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Community Guidelines</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Be respectful and professional in your communication</li>
                <li>• Provide accurate and relevant information</li>
                <li>• Avoid sharing sensitive personal details publicly</li>
                <li>• Remember that community advice is not a substitute for professional legal counsel</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">Post Question</Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard">Cancel</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
