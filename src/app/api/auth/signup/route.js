import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export const POST = async (req) => {
    try {
        await connectDB();

        const { email, password } = await req.json();
        console.log({ email, password });

        if (!email || !password) {
            return NextResponse.json({ success: false, message: 'Please enter all field' }, { status: 422 });
        }

        const existingUser = await User.findOne({ email });
        console.log(existingUser);

        if (existingUser) {
            return NextResponse.json({ success: false, message: 'Email already exist!' }, { status: 422 });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            email: email,
            password: hashedPassword
        });
        console.log(newUser);

        return NextResponse.json({ success: true, message: 'New User Created!' }, { status: 201 });

    } catch (err) {
        console.log(err);
        return NextResponse.json({ success: false, message: err }, { status: 500 });
    }
}

export const GET = async (req) => {
    const users = await User.find();
    return NextResponse.json({ success: true, data: users }, { status: 200 })
}