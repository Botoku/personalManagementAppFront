import { NextResponse } from "next/server";
import { dbConnect } from "@/app/utils/db.js";

import Todo from "./model";

export async function GET(request) {
  await dbConnect();

  try {
    const authorID = request.nextUrl.searchParams.get("id");
    const todos = await Todo.find({ authorID: authorID });
    return NextResponse.json({ numberOfTodos: todos.length, todos });
  } catch (error) {
    return NextResponse.json(error)
  }
}
