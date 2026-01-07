import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'
import prisma from '@/lib/prisma'


export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request) {
  const body = await request.json()
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  })
  return NextResponse.json(user)
}