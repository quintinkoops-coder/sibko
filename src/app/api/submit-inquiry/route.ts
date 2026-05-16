import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, string> = {};

    // 1. Safely handle both JSON and Form Data submissions without crashing
    if (contentType.includes('application/json')) {
      const body = await request.json();
      data = {
        name: body.name || '',
        email: body.email || '',
        division: body.division || '',
        specifications: body.specifications || '',
        budget: body.budget || ''
      };
    } else {
      const formData = await request.formData();
      data = {
        name: formData.get('name')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        division: formData.get('division')?.toString() || '',
        specifications: formData.get('specifications')?.toString() || '',
        budget: formData.get('budget')?.toString() || ''
      };
    }

    // 2. Locate the Database Binding safely
    const db = (globalThis as any).__cloudflare_env__?.DB || (process.env as any).DB;

    // Stop and report explicitly if the database binding is completely missing
    if (!db) {
      return NextResponse.json(
        { error: 'CRITICAL: Database binding "DB" was not found in the edge environment.' },
        { status: 500 }
      );
    }

    // 3. Execute the SQL Insert into D1
    await db.prepare(
      `INSERT INTO inquiries (name, email, division, specifications, budget) VALUES (?, ?, ?, ?, ?)`
    )
    .bind(data.name, data.email, data.division, data.specifications, data.budget)
    .run();

    // 4. Success Redirect
    return NextResponse.redirect(new URL('/', request.url), 303);
    
  } catch (error: any) {
    console.error('Submission Error:', error);
    // Expose the ACTUAL error on the screen so we know exactly what failed
    return NextResponse.json(
      { 
        error: 'Backend Processing Error', 
        details: error?.message || 'Unknown error occurred during submission' 
      }, 
      { status: 500 }
    );
  }
}
