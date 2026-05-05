import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();

    const quoteObj = {
      id: crypto.randomUUID(),
      full_name: body.full_name,
      phone_number: body.phone_number,
      email: body.email,
      departure_city: body.departure_city,
      destination_city: body.destination_city,
      trip_type: body.trip_type,
      travel_date: body.travel_date,
      additional_details: body.additional_details || "",
      created_at: new Date().toISOString()
    };
b
    // 1. Save to MongoDB
    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB || "an_tour_and_travels");
      await db.collection("quotes").insertOne(quoteObj);
      console.log("✅ Saved to MongoDB");
    } catch (dbError) {
      console.error("❌ MongoDB Error:", dbError.message);
    }

    return NextResponse.json(quoteObj, { status: 201 });
  } catch (error) {
    console.error("Error in Quotes API:", error);
    return NextResponse.json({ error: "Failed to process quote" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "Ranchi_movers");
    const quotes = await db.collection("quotes").find({}).sort({ created_at: -1 }).toArray();
    
    return NextResponse.json(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 });
  }
}
