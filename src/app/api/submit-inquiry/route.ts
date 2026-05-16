import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(request: Request) {
  try {
    // Dynamically retrieve the active Cloudflare runtime environment bindings
    const cfContext = await getCloudflareContext();
    const db = cfContext.env.DB as any;

    if (!db) {
      console.error("Database binding 'DB' was not detected in Cloudflare Context.");
      return NextResponse.json(
        { error: "Database connection unavailable" },
        { status: 500 }
      );
    }

    // Flexible parsing for JSON payloads or standard HTML Form submissions
    let body: any;
    const contentType = request.headers.get("content-type") || "";
    
    if (contentType.includes("application/json")) {
      body = await request.json();
    } else {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    }

    const { name, email, division, specifications, budget } = body;

    // Direct execution on the Cloudflare D1 SQL binding instance
    await db
      .prepare(
        "INSERT INTO inquiries (name, email, division, specifications, budget) VALUES (?, ?, ?, ?, ?)"
      )
      .bind(
        name || null,
        email || null,
        division || null,
        specifications || null,
        budget || null
      )
      .run();

    // Smoothly redirect back to the homepage upon a successful save
    return NextResponse.redirect(new URL("/", request.url), 303);
  } catch (error: any) {
    console.error("Form processing failure:", error);
    return NextResponse.json(
      { error: "Internal processing error", details: error.message },
      { status: 500 }
    );
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
