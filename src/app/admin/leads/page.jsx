

"use client"
import { useEffect, useState } from "react"
import { Loader2, Search, Phone, Mail, Calendar, Package, FileText, Filter, Download, RefreshCw, Clock, CheckCircle, AlertCircle, MessageSquare, User, Plus, X, Edit2, Trash2, Save } from "lucide-react"

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([])
  const [filteredLeads, setFilteredLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterProduct, setFilterProduct] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterSource, setFilterSource] = useState("all")
  const [activeTab, setActiveTab] = useState("new-today")
  const [sortBy, setSortBy] = useState("priority")
  
  // Modal states
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showNotesModal, setShowNotesModal] = useState(false)
  const [showActivitiesModal, setShowActivitiesModal] = useState(false)
  const [selectedLead, setSelectedLead] = useState(null)
  
  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    product: "",
    projectDetails: "",
    status: "new",
    priority: "medium",
    source: "website",
    dealValue: ""
  })
  
  const [noteText, setNoteText] = useState("")
  const [currentEmployee] = useState("admin@company.com") // Replace with actual auth

  // Get relative time
  const getRelativeTime = (date) => {
    const now = new Date()
    const past = new Date(date)
    const diffMs = now - past
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`
    if (diffHours < 24) {
      const hours = past.getHours()
      const mins = past.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const displayHours = hours % 12 || 12
      return `Today at ${displayHours}:${mins.toString().padStart(2, '0')} ${ampm}`
    }
    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) return `${diffDays} days ago`
    return past.toLocaleDateString()
  }

  const isNewLead = (date) => {
    const diffMs = new Date() - new Date(date)
    return diffMs < 1800000 // 30 minutes
  }

  // Fetch leads
  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads")
      if (!res.ok) throw new Error("Failed to load leads")
      const data = await res.json()
      setLeads(data)
      setFilteredLeads(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
    const interval = setInterval(fetchLeads, 30000)
    return () => clearInterval(interval)
  }, [])

  // Filtering and sorting
  useEffect(() => {
    let filtered = leads

    // Tab filtering
    if (activeTab === "new-today") {
      const today = new Date().toDateString()
      filtered = filtered.filter(lead => new Date(lead.createdAt).toDateString() === today)
    } else if (activeTab === "new-leads") {
      filtered = filtered.filter(lead => lead.status === 'new')
    } else if (activeTab === "contacted") {
      filtered = filtered.filter(lead => lead.status === 'contacted')
    }

    // Search
    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone?.includes(searchTerm)
      )
    }

    // Filters
    if (filterProduct !== "all") {
      filtered = filtered.filter(lead => lead.product === filterProduct)
    }
    if (filterStatus !== "all") {
      filtered = filtered.filter(lead => lead.status === filterStatus)
    }
    if (filterSource !== "all") {
      filtered = filtered.filter(lead => lead.source === filterSource)
    }

    // Sorting
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "newest") return new Date(b.createdAt) - new Date(a.createdAt)
      if (sortBy === "oldest") return new Date(a.createdAt) - new Date(b.createdAt)
      if (sortBy === "priority") {
        const aIsNew = isNewLead(a.createdAt)
        const bIsNew = isNewLead(b.createdAt)
        if (aIsNew && !bIsNew) return -1
        if (!aIsNew && bIsNew) return 1
        return new Date(b.createdAt) - new Date(a.createdAt)
      }
      return 0
    })

    setFilteredLeads(filtered)
  }, [searchTerm, filterProduct, filterStatus, filterSource, activeTab, sortBy, leads])

  // CREATE Lead
  const handleCreateLead = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          // dealValue: formData.dealValue ? parseFloat(formData.dealValue) : null,
          dealValue: formData.dealValue ? parseFloat(formData.dealValue) || 0 : 0,
          createdBy: currentEmployee
        })
      })
      if (!res.ok) throw new Error("Failed to create lead")
      await fetchLeads()
      setShowAddModal(false)
      resetForm()
    } catch (err) {
      alert("Error creating lead: " + err.message)
    }
  }

  // UPDATE Lead
  const handleUpdateLead = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/leads/${selectedLead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          dealValue: formData.dealValue ? parseFloat(formData.dealValue) : null,
          updatedBy: currentEmployee
        })
      })
      if (!res.ok) throw new Error("Failed to update lead")
      await fetchLeads()
      setShowEditModal(false)
      setSelectedLead(null)
      resetForm()
    } catch (err) {
      alert("Error updating lead: " + err.message)
    }
  }

  // DELETE Lead
  const handleDeleteLead = async (leadId) => {
    if (!confirm("Are you sure you want to delete this lead?")) return
    try {
      const res = await fetch(`/api/leads/${leadId}`, { method: "DELETE" })
      if (!res.ok) throw new Error("Failed to delete lead")
      await fetchLeads()
    } catch (err) {
      alert("Error deleting lead: " + err.message)
    }
  }

  // UPDATE Status
  const handleStatusChange = async (leadId, newStatus) => {
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus, updatedBy: currentEmployee })
      })
      if (!res.ok) throw new Error("Failed to update status")
      
      // Log activity
      await fetch("/api/leads/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          activityType: "status_change",
          description: `Status changed to ${newStatus}`,
          createdBy: currentEmployee
        })
      })
      
      await fetchLeads()
    } catch (err) {
      alert("Error updating status: " + err.message)
    }
  }

  // ADD Note
  const handleAddNote = async () => {
    if (!noteText.trim()) return
    try {
      const res = await fetch("/api/leads/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId: selectedLead.id,
          note: noteText,
          createdBy: currentEmployee
        })
      })
      if (!res.ok) throw new Error("Failed to add note")
      setNoteText("")
      await fetchLeads()
    } catch (err) {
      alert("Error adding note: " + err.message)
    }
  }

  // LOG Activity
  const logActivity = async (leadId, activityType, description) => {
    try {
      await fetch("/api/leads/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          activityType,
          description,
          createdBy: currentEmployee
        })
      })
      await fetchLeads()
    } catch (err) {
      console.error("Error logging activity:", err)
    }
  }

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      product: "",
      projectDetails: "",
      status: "new",
      priority: "medium",
      source: "website",
      dealValue: ""
    })
  }

  const openEditModal = (lead) => {
    setSelectedLead(lead)
    setFormData({
      fullName: lead.fullName || "",
      phone: lead.phone || "",
      email: lead.email || "",
      product: lead.product || "",
      projectDetails: lead.projectDetails || "",
      status: lead.status || "new",
      priority: lead.priority || "medium",
      source: lead.source || "website",
      dealValue: lead.dealValue || ""
    })
    setShowEditModal(true)
  }

  const products = [...new Set(leads.map(lead => lead.product).filter(Boolean))]
  const sources = [...new Set(leads.map(lead => lead.source).filter(Boolean))]

  const stats = {
    total: leads.length,
    newToday: leads.filter(lead => {
      const today = new Date().toDateString()
      return new Date(lead.createdAt).toDateString() === today
    }).length,
    pending: leads.filter(lead => lead.status === 'new').length,
    contacted: leads.filter(lead => lead.status === 'contacted').length,
    hot: leads.filter(lead => isNewLead(lead.createdAt) && lead.status === 'new').length
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-red-100 text-red-700 border-red-200'
      case 'contacted': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'qualified': return 'bg-green-100 text-green-700 border-green-200'
      case 'lost': return 'bg-gray-100 text-gray-700 border-gray-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'hot': return 'bg-red-500'
      case 'warm': return 'bg-orange-500'
      case 'cold': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <Loader2 className="animate-spin w-12 h-12 mx-auto text-blue-600" />
          <p className="mt-4 text-gray-600 font-medium">Loading leads...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-600 text-center">
            <p className="text-xl font-semibold mb-2">Error Loading Leads</p>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Lead Dashboard</h1>
              <p className="text-gray-500 text-sm mt-1">Real-time lead management</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                Add Lead
              </button>
              <button
                onClick={fetchLeads}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-500 text-xs font-medium">HOT LEADS</p>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-red-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.hot}</p>
            <p className="text-xs text-red-600 mt-1">Action needed!</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-500 text-xs font-medium">NEW TODAY</p>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.newToday}</p>
            <p className="text-xs text-gray-500 mt-1">Fresh leads</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-500 text-xs font-medium">PENDING</p>
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
            <p className="text-xs text-gray-500 mt-1">Not contacted</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-500 text-xs font-medium">CONTACTED</p>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.contacted}</p>
            <p className="text-xs text-gray-500 mt-1">In progress</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-500 text-xs font-medium">TOTAL</p>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            <p className="text-xs text-gray-500 mt-1">All time</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6 border border-gray-100 overflow-x-auto">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("new-today")}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "new-today"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              New Today ({stats.newToday})
            </button>
            <button
              onClick={() => setActiveTab("new-leads")}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "new-leads"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Pending ({stats.pending})
            </button>
            <button
              onClick={() => setActiveTab("contacted")}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "contacted"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Contacted ({stats.contacted})
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "all"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              All Leads ({stats.total})
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm"
            >
              <option value="priority">Sort: Priority</option>
              <option value="newest">Sort: Newest First</option>
              <option value="oldest">Sort: Oldest First</option>
            </select>
            <select
              value={filterProduct}
              onChange={(e) => setFilterProduct(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm"
            >
              <option value="all">All Products</option>
              {products.map(product => (
                <option key={product} value={product}>{product}</option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="lost">Lost</option>
            </select>
            <select
              value={filterSource}
              onChange={(e) => setFilterSource(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm"
            >
              <option value="all">All Sources</option>
              {sources.map(source => (
                <option key={source} value={source}>{source}</option>
              ))}
            </select>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Showing {filteredLeads.length} of {leads.length} leads
          </p>
        </div>

        {/* Leads Grid */}
        {filteredLeads.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-100">
            <FileText className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No leads found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredLeads.map((lead) => {
              const isHot = isNewLead(lead.createdAt) && lead.status === 'new'
              
              return (
                <div
                  key={lead.id}
                  className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all border ${
                    isHot ? 'border-red-300 ring-2 ring-red-100' : 'border-gray-100'
                  } overflow-hidden`}
                >
                  {isHot && (
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 text-xs font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      HOT LEAD - Action Required!
                    </div>
                  )}
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-base font-semibold text-gray-900">{lead.fullName}</h3>
                          <div className={`w-2 h-2 rounded-full ${getPriorityColor(lead.priority)}`} title={lead.priority}></div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 border text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                            {lead.status.toUpperCase()}
                          </span>
                          {lead.source && (
                            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                              {lead.source}
                            </span>
                          )}
                          {/* <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            ID: {lead.id.slice(0, 8)}
                          </span> */}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => openEditModal(lead)}
                          className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="w-8 h-8 flex items-center justify-center bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 mb-3">
                      {lead.phone && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          <a href={`tel:${lead.phone}`} className="text-sm hover:text-blue-600 hover:underline">
                            {lead.phone}
                          </a>
                        </div>
                      )}
                      {lead.email && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          <a href={`mailto:${lead.email}`} className="text-sm truncate hover:text-blue-600 hover:underline">
                            {lead.email}
                          </a>
                        </div>
                      )}
                      {lead.product && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Package className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-sm font-medium">{lead.product}</span>
                        </div>
                      )}
                      {lead.dealValue && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="text-sm font-bold text-green-600">₹{lead.dealValue.toLocaleString()}</span>
                        </div>
                      )}
                      {lead.projectDetails && (
                        <div className="flex items-start gap-2 text-gray-600 bg-gray-50 p-2 rounded">
                          <FileText className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs line-clamp-2">{lead.projectDetails}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                          <Clock className="w-3.5 h-3.5" />
                          {getRelativeTime(lead.createdAt)}
                        </div>
                        <div className="flex gap-1">
                          <button
                            onClick={() => {
                              setSelectedLead(lead)
                              setShowNotesModal(true)
                            }}
                            className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                          >
                            <FileText className="w-3 h-3" />
                            Notes ({lead.notes?.length || 0})
                          </button>
                          <button
                            onClick={() => {
                              setSelectedLead(lead)
                              setShowActivitiesModal(true)
                            }}
                            className="text-xs text-purple-600 hover:underline flex items-center gap-1"
                          >
                            <Clock className="w-3 h-3" />
                            Activity ({lead.activities?.length || 0})
                          </button>
                        </div>
                      </div>

                      {lead.status === 'new' ? (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <a
                              href={`tel:${lead.phone}`}
                              onClick={() => logActivity(lead.id, 'call', 'Called lead')}
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              Call Now
                            </a>
                            {lead.phone && (
                              <a
                                href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => logActivity(lead.id, 'whatsapp', 'Sent WhatsApp message')}
                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                WhatsApp
                              </a>
                            )}
                          </div>
                          <button
                            onClick={() => handleStatusChange(lead.id, 'contacted')}
                            className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            <CheckCircle className="w-3.5 h-3.5" />
                            Mark as Contacted
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <a
                              href={`tel:${lead.phone}`}
                              onClick={() => logActivity(lead.id, 'call', 'Called lead')}
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              Call
                            </a>
                            {lead.email && (
                              <a
                                href={`mailto:${lead.email}`}
                                onClick={() => logActivity(lead.id, 'email', 'Sent email')}
                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                Email
                              </a>
                            )}
                          </div>
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-sm"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="lost">Lost</option>
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Add Lead Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Add New Lead</h2>
                <button onClick={() => { setShowAddModal(false); resetForm(); }} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleCreateLead} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                    <input
                      type="text"
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="lost">Lost</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({...formData, priority: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="hot">Hot</option>
                      <option value="warm">Warm</option>
                      <option value="cold">Cold</option>
                      <option value="medium">Medium</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                    <select
                      value={formData.source}
                      onChange={(e) => setFormData({...formData, source: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="website">Website</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="phone">Phone</option>
                      <option value="referral">Referral</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deal Value (₹)</label>
                    <input
                      type="number"
                      value={formData.dealValue}
                      onChange={(e) => setFormData({...formData, dealValue: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea
                    rows={3}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  ></textarea>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => { setShowAddModal(false); resetForm(); }}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Add Lead
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Lead Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Edit Lead</h2>
                <button onClick={() => { setShowEditModal(false); setSelectedLead(null); resetForm(); }} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleUpdateLead} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                    <input
                      type="text"
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="lost">Lost</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({...formData, priority: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="hot">Hot</option>
                      <option value="warm">Warm</option>
                      <option value="cold">Cold</option>
                      <option value="medium">Medium</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                    <select
                      value={formData.source}
                      onChange={(e) => setFormData({...formData, source: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="website">Website</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="phone">Phone</option>
                      <option value="referral">Referral</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deal Value (₹)</label>
                    <input
                      type="number"
                      value={formData.dealValue}
                      onChange={(e) => setFormData({...formData, dealValue: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea
                    rows={3}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  ></textarea>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => { setShowEditModal(false); setSelectedLead(null); resetForm(); }}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Update Lead
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Notes Modal */}
      {showNotesModal && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Notes - {selectedLead.fullName}</h2>
                <button onClick={() => { setShowNotesModal(false); setSelectedLead(null); }} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="mb-4">
                <textarea
                  rows={3}
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Add a note..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                ></textarea>
                <button
                  onClick={handleAddNote}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Add Note
                </button>
              </div>

              <div className="space-y-3">
                {selectedLead.notes && selectedLead.notes.length > 0 ? (
                  selectedLead.notes.map((note) => (
                    <div key={note.id} className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">{note.note}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        {note.createdBy} • {getRelativeTime(note.createdAt)}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">No notes yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Activities Modal */}
      {showActivitiesModal && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Activity Log - {selectedLead.fullName}</h2>
                <button onClick={() => { setShowActivitiesModal(false); setSelectedLead(null); }} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-3">
                {selectedLead.activities && selectedLead.activities.length > 0 ? (
                  selectedLead.activities.map((activity) => (
                    <div key={activity.id} className="flex gap-3 pb-3 border-b border-gray-200 last:border-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.activityType} • {activity.createdBy} • {getRelativeTime(activity.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">No activities yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}