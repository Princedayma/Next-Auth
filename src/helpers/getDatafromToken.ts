import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export const getDataFromToken = (request: NextRequest) => {
    try {

        const token = request.cookies.get('token')?.value || '';
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken.id;
    } catch (error) {
        console.error("Error in getDataFromToken:", error);
        throw new Error("Failed to decode token");
    }
};
  