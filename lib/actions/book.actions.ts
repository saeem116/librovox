import { connectToDatabase } from "@/database/mongoose";
import { CreateBook } from "@/types";
import { generateSlug } from "../utils";

export const createBook = async (data: CreateBook) => {
  try {
    await connectToDatabase();

    const slug = generateSlug(data.title);
  } catch (e) {
    console.error("Error creating book:", e);

    return { success: false, error: "Failed to create book" };
  }
};
