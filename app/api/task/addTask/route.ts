import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { title, body, authorId } = await req.json();

    if (
      !title ||
      (typeof title !== "string" && !body) ||
      typeof body !== "string"
    ) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }

    const newTask = await prisma.articles.create({
      data: {
        title,
        body,
        authoredBy: authorId,
      },
    });

    return NextResponse.json(newTask);
  } catch (error) {
    return NextResponse.json(error);
  }
};
