import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'
import prisma from '@/lib/prisma'

export async function POST(request) {
  try {
    const body = await request.json()

    const note = await prisma.leadNote.create({
      data: {
        leadId: body.leadId,
        note: body.note,
        createdBy: body.createdBy || 'system'
      }
    })

    // Create activity
    await prisma.leadActivity.create({
      data: {
        leadId: body.leadId,
        activityType: 'note',
        description: 'Note added',
        createdBy: body.createdBy || 'system'
      }
    })

    return NextResponse.json(note, { status: 201 })
  } catch (error) {
    console.error('Error creating note:', error)
    return NextResponse.json({ error: 'Failed to create note' }, { status: 500 })
  }
}

// GET notes for a lead
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const leadId = searchParams.get('leadId')

    if (!leadId) {
      return NextResponse.json({ error: 'leadId required' }, { status: 400 })
    }

    const notes = await prisma.leadNote.findMany({
      where: { leadId },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(notes)
  } catch (error) {
    console.error('Error fetching notes:', error)
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 })
  }
}