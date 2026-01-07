
import prisma from './prisma';


// Fetch all persons from the database
export async function getAllLeads() {
  try {
    return await prisma.lead.findMany();  // Fetch all persons
  } catch (err) {
    console.error('Error fetching persons:', err);
    throw new Error('Failed to fetch data from the database');
  }
}



export async function createLead(data) {
  try {
    return await prisma.lead.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,
        product: data.product || '',
        projectDetails: data.projectDetails || null,
      }
    })
  } catch (err) {
    console.error('Error creating lead:', err)
    throw new Error('Failed to create lead')
  }
}