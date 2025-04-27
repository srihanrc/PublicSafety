import { NextResponse } from 'next/server';

const darkSpots = [
    { x: 20, y: 30 },
    { x: 55, y: 50 },
    { x: 75, y: 70 },
];

export async function GET() {
    return NextResponse.json(darkSpots);
}