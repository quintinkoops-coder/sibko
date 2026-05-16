import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, string> = {};

    if (contentType.includes('application/json')) {
      const body = await request.json() as any;
      data = {
        name: body?.name || '',
        email: body?.email || '',
        division: body?.division || '',
        specifications: body?.specifications || '',
        budget: body?.budget || ''
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

    const db = (globalThis as any).__cloudflare_env__?.DB || (process.env as any).DB;
    
    if (!db) {
      return NextResponse.json({ error: 'CRITICAL: Database binding "DB" was not found.' }, { status: 500 });
    }

    await db.prepare(`INSERT INTO inquiries (name, email, division, specifications, budget) VALUES (?, ?, ?, ?, ?)` )
      .bind(data.name, data.email, data.division, data.specifications, data.budget)
      .run();

    return NextResponse.redirect(new URL('/', request.url), 303);
  } catch (error) {
    console.error('Submission Error:', error);
    return NextResponse.json({error: 'Backend Processing Error', details: error instanceof Error ? error.message : 'Unknown error occurred' }, { status: 500 });
  }
}
// =====================================================================
// ORIGINAL ROUTE.TS WORKING ARCHIVE PRESERVED BELOW
// =====================================================================
// import { NextResponse } from 'next/server';
// export const runtime = 'edge';
// export async function POST(request: Request) {
//   try {
//     const contentType = request.headers.get('content-type') || '';
//     let data: Record<string, string> = {};
//     if (contentType.includes('application/json')) {
//       const body = await request.json() as any;
//       data = {
//         name: body?.name || '',
//         email: body?.email || '',
//         division: body?.division || '',
//         specifications: body?.specifications || '',
//         budget: body?.budget || ''
//       };
//     } else {
//       const formData = await request.formData();
//       data = {
//         name: formData.get('name')?.toString() || '',
//         email: formData.get('email')?.toString() || '',
//         division: formData.get('division')?.toString() || '',
//         specifications: formData.get('specifications')?.toString() || '',
//         budget: formData.get('budget')?.toString() || ''
//       };
//     }
//     const db = (globalThis as any).__cloudflare_env__?.DB || (process.env as any).DB;
//     if (!db) {
//       return NextResponse.json({ error: 'CRITICAL: Database binding "DB" was not found.' }, { status: 500 });
//     }
//     await db.prepare(`INSERT INTO inquiries (name, email, division, specifications, budget) VALUES (?, ?, ?, ?, ?)` )
//       .bind(data.name, data.email, data.division, data.specifications, data.budget)
//       .run();
//     return NextResponse.redirect(new URL('/', request.url), 303);
//   } catch (error) {
//     console.error('Submission Error:', error);
//     return NextResponse.json({error: 'Backend Processing Error', details: error instanceof Error ? error.message : 'Unknown error occurred' }, { status: 500 });
//   }
// }
