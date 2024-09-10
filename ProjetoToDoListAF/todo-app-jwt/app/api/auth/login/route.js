import User from "@/model/User";
import connectMongo from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
    const {username, password} = await request.json();
    await connectMongo();

    //verificar se o user existe
    try {
        const user = await User.findOne({username});
        if (!user && !(await user.comparePassword(password))) {
            return NextResponse.json({sucess:false}, {status:400})
        }

        //Criar Minha Token de Autorização
        const token = jwt.sign({userId: user._id},
            process.env.JWT_SECRET, {expiresIn: '1h'});
            return NextResponse.json({token});
    } catch (error) {
        return NextResponse.json({succes:false}, {status:400})
    }
}