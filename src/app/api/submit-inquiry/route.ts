import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const division = formData.get('division');
    const specifications = formData.get('specifications');
    const budget = formData.get('budget');

    // Access your D1 database connection directly from Cloudflare environment global variables
    const db = (process.env as any).DB;

    if (!db) {
      return NextResponse.json({ error: 'Database context binding DB not found' }, { status: 500 });
    }

    // Safely insert data rows straight into your D1 inquiries table
    await db.prepare(
      `INSERT INTO inquiries (name, email, division, specifications, budget) 
       VALUES (?, ?, ?, ?, ?)`
    )
    .bind(name, email, division, specifications, budget)
    .run();

    // After successful database save, gracefully redirect your user back to the homepage
    return NextResponse.redirect(new URL('/', request.url), 303);
  } catch (error) {
    console.error('Submission Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
