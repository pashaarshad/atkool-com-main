import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * SchoolRegistration Model
 * Stores new school registration requests from the ATKool main website.
 * Once approved by the Super Admin, these become full School entries
 * in the atkool-website system.
 */

export interface ISchoolRegistration extends Document {
  schoolName: string;
  boardType: string;
  city: string;
  state: string;
  studentCount: string;
  adminName: string;
  email: string;
  phone: string;
  password: string; // Will be hashed before saving
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

const SchoolRegistrationSchema = new Schema<ISchoolRegistration>(
  {
    schoolName: {
      type: String,
      required: [true, "School name is required"],
      trim: true,
    },
    boardType: {
      type: String,
      required: [true, "Board type is required"],
      enum: ["CBSE", "ICSE", "State Board", "IB", "Cambridge", "Other"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
    },
    studentCount: {
      type: String,
      default: "",
    },
    adminName: {
      type: String,
      required: [true, "Admin name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// Prevent model recompilation in dev (hot reload)
const SchoolRegistration: Model<ISchoolRegistration> =
  mongoose.models.SchoolRegistration ||
  mongoose.model<ISchoolRegistration>(
    "SchoolRegistration",
    SchoolRegistrationSchema
  );

export default SchoolRegistration;
