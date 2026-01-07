// import { NextResponse } from 'next/server'
// // import { prisma } from '@/lib/prisma'
// import prisma from '@/lib/prisma'

// // GET all leads (optional - for admin)
// export async function GET() {
//   try {
//     const leads = await prisma.lead.findMany({
//       orderBy: { createdAt: 'desc' }
//     })
//     return NextResponse.json(leads)
//   } catch (error) {
//     console.error('Error fetching leads:', error)
//     return NextResponse.json(
//       { error: 'Failed to fetch leads' },
//       { status: 500 }
//     )
//   }
// }


// POST - Create new lead
// export async function POST(request) {
//   try {
//     const body = await request.json()
    
//     // Validate required fields
//     if (!body.fullName || !body.phone) {
//       return NextResponse.json(
//         { error: 'Full name and phone are required' },
//         { status: 400 }
//       )
//     }

//     const lead = await prisma.lead.create({
//       data: {
//         fullName: body.fullName,
//         phone: body.phone,
//         email: body.email || null,
//         product: body.product || '',
//         projectDetails: body.projectDetails || null,
//       }
//     })

//     return NextResponse.json(
//       { message: 'Lead created successfully', lead },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.error('Error creating lead:', error)
//     return NextResponse.json(
//       { error: 'Failed to create lead' },
//       { status: 500 }
//     )
//   }
// }




import { NextResponse } from 'next/server';
// import { getAllPersons } from '@/app/lib/person';
import { getAllLeads  } from '@/lib/leads';
import { createLead } from '@/lib/leads';
// import { checkDbConnection } from '@/lib/db-check';
// import { checkDbConnection } from '@/app/lib/db-check';

export async function GET() {
  const data= await getAllLeads();
  console.log(data);
  
  return NextResponse.json(data);
}



// export async function POST(request) {
//   try {
//     const body = await request.json()
    
//     // Validate required fields
//     if (!body.fullName || !body.phone) {
//       return NextResponse.json(
//         { error: 'Full name and phone are required' },
//         { status: 400 }
//       )
//     }

//     const lead = await prisma.lead.create({
//       data: {
//         fullName: body.fullName,
//         phone: body.phone,
//         email: body.email || null,
//         product: body.product || '',
//         projectDetails: body.projectDetails || null,
//       }
//     })

//     return NextResponse.json(
//       { message: 'Lead created successfully', lead },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.error('Error creating lead:', error)
//     return NextResponse.json(
//       { error: 'Failed to create lead' },
//       { status: 500 }
//     )
//   }
// }





export async function POST(request) {
  try {
    const body = await request.json()

    // validation
    if (!body.fullName || !body.phone) {
      return NextResponse.json(
        { error: 'Full name and phone are required' },
        { status: 400 }
      )
    }

    const lead = await createLead(body)

    return NextResponse.json(
      { message: 'Lead created successfully', lead },
      { status: 201 }
    )
  } catch (error) {
    console.error('POST /api/leads error:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}
