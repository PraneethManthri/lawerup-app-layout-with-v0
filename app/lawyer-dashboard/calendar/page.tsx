"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LawyerCalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const appointments = [
    {
      id: 1,
      title: "Client Consultation - John Smith",
      time: "09:00 AM",
      duration: "1 hour",
      type: "Consultation",
      location: "Office",
    },
    {
      id: 2,
      title: "Court Hearing - Property Dispute",
      time: "02:00 PM",
      duration: "2 hours",
      type: "Court",
      location: "District Court",
    },
    {
      id: 3,
      title: "Document Review - TechCorp",
      time: "04:30 PM",
      duration: "30 minutes",
      type: "Review",
      location: "Office",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/lawyer-dashboard" className="text-emerald-600 hover:text-emerald-700 text-sm">
              ← Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">Calendar & Schedule</h1>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">📅 New Appointment</Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>January 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => (
                    <button
                      key={i + 1}
                      className={`p-2 hover:bg-emerald-100 rounded ${i + 1 === 15 ? "bg-emerald-600 text-white" : ""}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule - January 15, 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium">{appointment.title}</h3>
                        <p className="text-sm text-gray-600">
                          {appointment.time} • {appointment.duration}
                        </p>
                        <p className="text-sm text-gray-500">📍 {appointment.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={appointment.type === "Court" ? "destructive" : "default"}>
                          {appointment.type}
                        </Badge>
                        <Button variant="outline" size="sm">
                          ✏️ Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
