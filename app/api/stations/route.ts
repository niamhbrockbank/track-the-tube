import getStations from "@/lib/api/getStations";
import { NextResponse } from "next/server";

export async function GET(){
     const stations  = getStations();

     return NextResponse.json({message : 'OK', stations})
}