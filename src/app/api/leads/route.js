// // import { NextResponse } from 'next/server'
// // // import { prisma } from '@/lib/prisma'
// // import prisma from '@/lib/prisma'

// // // GET all leads (optional - for admin)
// // export async function GET() {
// //   try {
// //     const leads = await prisma.lead.findMany({
// //       orderBy: { createdAt: 'desc' }
// //     })
// //     return NextResponse.json(leads)
// //   } catch (error) {
// //     console.error('Error fetching leads:', error)
// //     return NextResponse.json(
// //       { error: 'Failed to fetch leads' },
// //       { status: 500 }
// //     )
// //   }
// // }


// // POST - Create new lead
// // export async function POST(request) {
// //   try {
// //     const body = await request.json()
    
// //     // Validate required fields
// //     if (!body.fullName || !body.phone) {
// //       return NextResponse.json(
// //         { error: 'Full name and phone are required' },
// //         { status: 400 }
// //       )
// //     }

// //     const lead = await prisma.lead.create({
// //       data: {
// //         fullName: body.fullName,
// //         phone: body.phone,
// //         email: body.email || null,
// //         product: body.product || '',
// //         projectDetails: body.projectDetails || null,
// //       }
// //     })

// //     return NextResponse.json(
// //       { message: 'Lead created successfully', lead },
// //       { status: 201 }
// //     )
// //   } catch (error) {
// //     console.error('Error creating lead:', error)
// //     return NextResponse.json(
// //       { error: 'Failed to create lead' },
// //       { status: 500 }
// //     )
// //   }
// // }




// import { NextResponse } from 'next/server';
// // import { getAllPersons } from '@/app/lib/person';
// import { getAllLeads  } from '@/lib/leads';
// import { createLead } from '@/lib/leads';
// // import { checkDbConnection } from '@/lib/db-check';
// // import { checkDbConnection } from '@/app/lib/db-check';

// export async function GET() {
//   const data= await getAllLeads();
//   console.log(data);
  
//   return NextResponse.json(data);
// }



// // export async function POST(request) {
// //   try {
// //     const body = await request.json()
    
// //     // Validate required fields
// //     if (!body.fullName || !body.phone) {
// //       return NextResponse.json(
// //         { error: 'Full name and phone are required' },
// //         { status: 400 }
// //       )
// //     }

// //     const lead = await prisma.lead.create({
// //       data: {
// //         fullName: body.fullName,
// //         phone: body.phone,
// //         email: body.email || null,
// //         product: body.product || '',
// //         projectDetails: body.projectDetails || null,
// //       }
// //     })

// //     return NextResponse.json(
// //       { message: 'Lead created successfully', lead },
// //       { status: 201 }
// //     )
// //   } catch (error) {
// //     console.error('Error creating lead:', error)
// //     return NextResponse.json(
// //       { error: 'Failed to create lead' },
// //       { status: 500 }
// //     )
// //   }
// // }





// export async function POST(request) {
//   try {
//     const body = await request.json()

//     // validation
//     if (!body.fullName || !body.phone) {
//       return NextResponse.json(
//         { error: 'Full name and phone are required' },
//         { status: 400 }
//       )
//     }

//     const lead = await createLead(body)

//     return NextResponse.json(
//       { message: 'Lead created successfully', lead },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.error('POST /api/leads error:', error)
//     return NextResponse.json(
//       { error: 'Failed to create lead' },
//       { status: 500 }
//     )
//   }
// }




import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'
import prisma from '@/lib/prisma'

// GET all leads
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const assignedTo = searchParams.get('assignedTo')
    const source = searchParams.get('source')

    const where = {}
    if (status && status !== 'all') where.status = status
    if (assignedTo && assignedTo !== 'all') where.assignedTo = assignedTo
    if (source && source !== 'all') where.source = source

    const leads = await prisma.lead.findMany({
      where,
      include: {
        notes: {
          orderBy: { createdAt: 'desc' },
          take: 5
        },
        activities: {
          orderBy: { createdAt: 'desc' },
          take: 5
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(leads)
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

// POST new lead
export async function POST(request) {
  try {
    const body = await request.json()
    
    const lead = await prisma.lead.create({
      data: {
        fullName: body.fullName,
        phone: body.phone,
        email: body.email,
        product: body.product,
        projectDetails: body.projectDetails,
        status: body.status || 'new',
        priority: body.priority || 'medium',
        source: body.source,
        assignedTo: body.assignedTo,
        dealValue: body.dealValue
      }
    })

    // Create activity log
    await prisma.leadActivity.create({
      data: {
        leadId: lead.id,
        activityType: 'created',
        description: 'Lead created',
        createdBy: body.createdBy || 'system'
      }
    })

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
  }
}