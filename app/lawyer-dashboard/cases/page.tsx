"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function LawyerCasesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const cases = [
    {
      id: 1,
      title: "Smith vs. Johnson Property Dispute",
      client: "John Smith",
      status: "Active",
      priority: "High",
      nextHearing: "2024-01-15",
      progress: 65,
    },
    {
      id: 2,
      title: "Corporate Merger - TechCorp",
      client: "TechCorp Inc.",
      status: "In Review",
      priority: "Medium",
      nextHearing: "2024-01-20",
      progress: 40,
    },
    {
      id: 3,
      title: "Employment Contract Dispute",
      client: "Sarah Wilson",
      status: "Active",
      priority: "Low",
      nextHearing: "2024-01-25",
      progress: 80,
    },
  ]

  const filteredCases = cases.filter(
    (case_) =>
      case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.client.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/lawyer-dashboard" className="text-emerald-600 hover:text-emerald-700 text-sm">
              ← Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">My Cases</h1>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">📁 New Case</Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Search and Filters */}
        <div className="mb-6">
          <Input
            placeholder="Search cases by title or client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Cases Grid */}
        <div className="grid gap-6">
          {filteredCases.map((case_) => (
            <Card key={case_.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{case_.title}</CardTitle>
                    <p className="text-gray-600 mt-1">Client: {case_.client}</p>
                  </div>
                  <Badge variant={case_.status === "Active" ? "default" : "secondary"}>{case_.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Priority</p>
                    <Badge
                      variant={
                        case_.priority === "High"
                          ? "destructive"
                          : case_.priority === "Medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {case_.priority}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Next Hearing</p>
                    <p className="font-medium">{case_.nextHearing}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Progress</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${case_.progress}%` }} />
                      </div>
                      <span className="text-sm font-medium">{case_.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    👁️ View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    📝 Add Note
                  </Button>
                  <Button variant="outline" size="sm">
                    📄 Documents
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
