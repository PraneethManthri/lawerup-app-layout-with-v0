"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function LawyerClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const clients = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
      activeCases: 2,
      joinDate: "2023-06-15",
      lastContact: "2024-01-10",
    },
    {
      id: 2,
      name: "TechCorp Inc.",
      email: "legal@techcorp.com",
      phone: "+1 (555) 987-6543",
      status: "Active",
      activeCases: 1,
      joinDate: "2023-08-20",
      lastContact: "2024-01-08",
    },
    {
      id: 3,
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+1 (555) 456-7890",
      status: "Inactive",
      activeCases: 0,
      joinDate: "2023-03-10",
      lastContact: "2023-12-15",
    },
  ]

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()),
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
            <h1 className="text-2xl font-bold text-gray-900 mt-1">My Clients</h1>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">👤 Add Client</Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Search */}
        <div className="mb-6">
          <Input
            placeholder="Search clients by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Clients Grid */}
        <div className="grid gap-6">
          {filteredClients.map((client) => (
            <Card key={client.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{client.name}</CardTitle>
                    <p className="text-gray-600 mt-1">{client.email}</p>
                    <p className="text-gray-600">{client.phone}</p>
                  </div>
                  <Badge variant={client.status === "Active" ? "default" : "secondary"}>{client.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Active Cases</p>
                    <p className="font-medium text-lg">{client.activeCases}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Client Since</p>
                    <p className="font-medium">{client.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Contact</p>
                    <p className="font-medium">{client.lastContact}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    👁️ View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    💬 Message
                  </Button>
                  <Button variant="outline" size="sm">
                    📄 Cases
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
