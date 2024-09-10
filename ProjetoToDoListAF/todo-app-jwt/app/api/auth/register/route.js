import User from "@/model/User";
import connectMongo from "@/utils/dbConnect";

import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    await connectMongo();

    try {
       const user = await User.create(data);
      
        return NextResponse.json({succes: true, data:user});
        
    } catch (error) {
        return NextResponse.json({succes: false}, {status:400});
    }
  

}
