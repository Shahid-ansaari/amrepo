"use client"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch("/api/leads")
        if (!res.ok) throw new Error("Failed to load leads")

        const data = await res.json()
        setLeads(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchLeads()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="animate-spin w-8 h-8" />
        <span className="ml-2">Loading leads…</span>
      </div>
    )
  }

  if (error) {
    return <p className="text-red-600 text-center mt-10">{error}</p>
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Leads</h1>

      {leads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Full Name</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Product</th>
                <th className="p-3 border">Project Details</th>
                <th className="p-3 border">Created</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="border p-2">{lead.id}</td>
                  <td className="border p-2">{lead.fullName}</td>
                  <td className="border p-2">{lead.phone}</td>
                  <td className="border p-2">{lead.email || "-"}</td>
                  <td className="border p-2">{lead.product || "-"}</td>
                  <td className="border p-2">{lead.projectDetails || "-"}</td>
                  <td className="border p-2">
                    {new Date(lead.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
