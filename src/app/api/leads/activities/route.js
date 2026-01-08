import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'
import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    const body = await request.json()

    const activity = await prisma.leadActivity.create({
      data: {
        leadId: body.leadId,
        activityType: body.activityType,
        description: body.description,
        createdBy: body.createdBy || 'system'
      }
    })

    // Update lastContacted if it's a communication
    if (['call', 'email', 'whatsapp'].includes(body.activityType)) {
      await prisma.lead.update({
        where: { id: body.leadId },
        data: { lastContacted: new Date() }
      })
    }

    return NextResponse.json(activity, { status: 201 })
  } catch (error) {
    console.error('Error creating activity:', error)
    return NextResponse.json({ error: 'Failed to create activity' }, { status: 500 })
  }
}

// GET activities for a lead
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const leadId = searchParams.get('leadId')

    if (!leadId) {
      return NextResponse.json({ error: 'leadId required' }, { status: 400 })
    }

    const activities = await prisma.leadActivity.findMany({
      where: { leadId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(activities)
  } catch (error) {
    console.error('Error fetching activities:', error)
    return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 })
  }
}