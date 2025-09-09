"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NetworkPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const connections = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Corporate Law Partner",
      firm: "Johnson & Associates",
      location: "New York, NY",
      specialties: ["Corporate Law", "M&A", "Securities"],
      mutualConnections: 12,
      avatar: "/professional-woman-lawyer.png",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Criminal Defense Attorney",
      firm: "Chen Legal Group",
      location: "Los Angeles, CA",
      specialties: ["Criminal Defense", "DUI", "White Collar"],
      mutualConnections: 8,
      avatar: "/professional-lawyer.png",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Family Law Specialist",
      firm: "Rodriguez Family Law",
      location: "Chicago, IL",
      specialties: ["Family Law", "Divorce", "Child Custody"],
      mutualConnections: 15,
      avatar: "/professional-woman-attorney.png",
    },
  ]

  const suggestedConnections = [
    {
      id: 4,
      name: "David Thompson",
      title: "IP Attorney",
      firm: "Thompson IP Law",
      location: "San Francisco, CA",
      specialties: ["Intellectual Property", "Patents", "Trademarks"],
      mutualConnections: 5,
      avatar: "/professional-attorney.png",
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Employment Law Partner",
      firm: "Wang Employment Solutions",
      location: "Seattle, WA",
      specialties: ["Employment Law", "HR Compliance", "Labor Relations"],
      mutualConnections: 3,
      avatar: "/professional-woman-lawyer.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="flex h-16 items-center px-6">
          <Link href="/lawyer-dashboard" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Dashboard
          </Link>
          <div className="ml-6">
            <h1 className="text-2xl font-bold">Professional Network</h1>
            <p className="text-sm text-muted-foreground">Connect with legal professionals</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Search */}
        <Card>
          <CardHeader>
            <CardTitle>Find Legal Professionals</CardTitle>
            <CardDescription>Search by name, firm, or specialization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Search lawyers, firms, or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button>🔍 Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">Total Connections</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">New This Month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Referrals Sent</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Referrals Received</p>
            </CardContent>
          </Card>
        </div>

        {/* My Connections */}
        <Card>
          <CardHeader>
            <CardTitle>My Connections</CardTitle>
            <CardDescription>Your professional network</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {connections.map((connection) => (
              <div key={connection.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={connection.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {connection.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{connection.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {connection.title} at {connection.firm}
                    </p>
                    <p className="text-xs text-muted-foreground">📍 {connection.location}</p>
                    <div className="flex gap-1 mt-2">
                      {connection.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{connection.mutualConnections} mutual</p>
                  <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                    💬 Message
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Suggested Connections */}
        <Card>
          <CardHeader>
            <CardTitle>Suggested Connections</CardTitle>
            <CardDescription>Legal professionals you might know</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {suggestedConnections.map((connection) => (
              <div key={connection.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={connection.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {connection.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{connection.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {connection.title} at {connection.firm}
                    </p>
                    <p className="text-xs text-muted-foreground">📍 {connection.location}</p>
                    <div className="flex gap-1 mt-2">
                      {connection.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{connection.mutualConnections} mutual</p>
                  <Button size="sm" className="mt-2">
                    ➕ Connect
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
