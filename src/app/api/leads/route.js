import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();

    const leadObj = {
      id: crypto.randomUUID(),
      name: body.name,
      phone: body.phone,
      email: body.email || "",
      service: body.service || "",
      message: body.message || "",
      source_page: body.source_page || "",
      created_at: new Date().toISOString()
    };

    // 1. Save to MongoDB
    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB || "an_tour_and_travels");
      await db.collection("leads").insertOne(leadObj);
      console.log("✅ Saved to MongoDB");
    } catch (dbError) {
      console.error("❌ MongoDB Error:", dbError.message);
      // We still want to return 201 if the lead is at least processed, 
      // but you might want to throw error if DB is critical.
    }

    return NextResponse.json(leadObj, { status: 201 });
  } catch (error) {
    console.error("Error in Leads API:", error);
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "Ranchi_movers");
    const leads = await db.collection("leads").find({}).sort({ created_at: -1 }).toArray();
    
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
