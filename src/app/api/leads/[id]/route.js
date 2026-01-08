import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'
import prisma from '@/lib/prisma'

// GET single lead
export async function GET(request, { params }) {
    const { id } = await params; // unwrap the promise

  try {
    const lead = await prisma.lead.findUnique({
      // where: { id: params.id },
      where: { id: id},
      include: {
        notes: { orderBy: { createdAt: 'desc' } },
        activities: { orderBy: { createdAt: 'desc' } }
      }
    })

    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
    }

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error fetching lead:', error)
    return NextResponse.json({ error: 'Failed to fetch lead' }, { status: 500 })
  }
}

// PATCH update lead
export async function PATCH(request, { params }) {
   console.log("Shahid :Params:",await params);
    const { id } = await params; // unwrap the promise
  
  try {
    const body = await request.json()
    const { updatedBy, ...updateData } = body

    const lead = await prisma.lead.update({
      // where: { id: params.id },
       where: { id },
      data: updateData
    })

    // Log activity if status changed
    if (updateData.status) {
      await prisma.leadActivity.create({
        data: {
          leadId: lead.id,
          activityType: 'status_change',
          description: `Status changed to ${updateData.status}`,
          createdBy: updatedBy || 'system'
        }
      })
    }

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 })
  }
}

// DELETE lead
export async function DELETE(request, { params }) {
    const { id } = await params; // unwrap the promise

  try {
    await prisma.lead.delete({
      where: { id: id}
    })

    return NextResponse.json({ message: 'Lead deleted successfully' })
  } catch (error) {
    console.error('Error deleting lead:', error)
    return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 })
  }
}