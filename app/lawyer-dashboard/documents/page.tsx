"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function LawyerDocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const documents = [
    {
      id: 1,
      name: "Property Dispute Contract.pdf",
      type: "Contract",
      client: "John Smith",
      size: "2.4 MB",
      modified: "2024-01-10",
      status: "Final",
    },
    {
      id: 2,
      name: "TechCorp Merger Agreement.docx",
      type: "Agreement",
      client: "TechCorp Inc.",
      size: "1.8 MB",
      modified: "2024-01-08",
      status: "Draft",
    },
    {
      id: 3,
      name: "Employment Contract Template.pdf",
      type: "Template",
      client: "General",
      size: "856 KB",
      modified: "2024-01-05",
      status: "Template",
    },
  ]

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.client.toLowerCase().includes(searchTerm.toLowerCase()),
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
            <h1 className="text-2xl font-bold text-gray-900 mt-1">Document Vault</h1>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">📄 Upload Document</Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Search */}
        <div className="mb-6">
          <Input
            placeholder="Search documents by name or client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Documents Grid */}
        <div className="grid gap-4">
          {filteredDocuments.map((document) => (
            <Card key={document.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">📄</div>
                    <div>
                      <h3 className="font-medium">{document.name}</h3>
                      <p className="text-sm text-gray-600">
                        Client: {document.client} • {document.size}
                      </p>
                      <p className="text-sm text-gray-500">Modified: {document.modified}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        document.status === "Final" ? "default" : document.status === "Draft" ? "secondary" : "outline"
                      }
                    >
                      {document.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      👁️ View
                    </Button>
                    <Button variant="outline" size="sm">
                      ⬇️ Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
