import { updateTask , deleteTask } from "@/controllers/TaskController";
import { NextResponse } from "next/server";

//PUT
export async function PUT(request, { params }) {
    try {
      const data = await request.json();
      const task = await updateTask(params.id, data);
      if (!task) {
        return NextResponse.json({ success: false }, { status: 400 });
      }
      return NextResponse.json({ success: true, data: task });
    } catch (error) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  }
  

//DELETE
export async function DELETE(req, { params }) {
    try {
      const deletedTask = await deleteTask(params.id);
      if (!deletedTask) {
        return NextResponse.json({ success: false }, { status: 400 });
      }
      return NextResponse.json({ success: true, message: "Deletado com Sucesso" });
    } catch (error) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  }
  