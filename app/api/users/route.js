import { NextResponse } from "next/server";

export function GET(request) {
  const users = [
    {
      userId: "001",
      name: "Khaleel",
      phone: "0547307550",
      position: "Manager",
    },

    {
      userId: "002",
      name: "Jalal",
      phone: "0531692400",
      position: "Service Advisor",
    },

    {
      userId: "003",
      name: "Omar",
      phone: "0561234567",
      position: "Service Advisor",
    },

    {
      userId: "004",
      name: "Abdul Rehman",
      phone: "0561112223",
      position: "Warehouse Manager",
    },
  ];

  return NextResponse.json(users);
}

export function POST(request) {}

export function PUT(request) {}

export function DELETE(request) {}
