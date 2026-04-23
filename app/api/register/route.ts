import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import SchoolRegistration from "@/lib/models/SchoolRegistration";

/**
 * POST /api/register
 * Handles school registration form submissions.
 * Stores data in MongoDB (Atkool database → schoolregistrations collection).
 */
export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB();

    // Parse request body
    const body = await req.json();

    const {
      schoolName,
      boardType,
      city,
      state,
      studentCount,
      adminName,
      email,
      phone,
      password,
    } = body;

    // Basic validation
    if (
      !schoolName ||
      !boardType ||
      !city ||
      !state ||
      !adminName ||
      !email ||
      !phone ||
      !password
    ) {
      return NextResponse.json(
        { success: false, message: "All required fields must be provided." },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters.",
        },
        { status: 400 }
      );
    }

    // Check if email already registered
    const existingSchool = await SchoolRegistration.findOne({ email });
    if (existingSchool) {
      return NextResponse.json(
        {
          success: false,
          message: "A school with this email is already registered.",
        },
        { status: 409 }
      );
    }

    // Create the registration record
    // NOTE: In production, you should hash the password with bcrypt
    const registration = await SchoolRegistration.create({
      schoolName,
      boardType,
      city,
      state,
      studentCount: studentCount || "",
      adminName,
      email,
      phone,
      password, // TODO: Hash with bcrypt before production
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Registration submitted successfully! Our team will review and activate your account within 24 hours.",
        data: {
          id: registration._id,
          schoolName: registration.schoolName,
          email: registration.email,
          status: registration.status,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("❌ Registration error:", error);

    // Handle Mongoose validation errors
    if (error instanceof Error && error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/register
 * Returns all registrations (for Super Admin use).
 * TODO: Add authentication middleware before production.
 */
export async function GET() {
  try {
    await connectDB();

    const registrations = await SchoolRegistration.find()
      .select("-password")
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: registrations.length,
      data: registrations,
    });
  } catch (error) {
    console.error("❌ Fetch registrations error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch registrations.",
      },
      { status: 500 }
    );
  }
}
