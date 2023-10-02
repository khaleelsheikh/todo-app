import { NextResponse } from "next/server";

export function GET(request) {
  const users = [
    {
      name: "Khaleel",
      phone: "0547307550",
      position: "Manager",
      userId: "001",
    },

    {
      name: "Jalal",
      phone: "0531692400",
      position: "Service Advisor",
      userId: "002",
    },

    {
      name: "Omar",
      phone: "0561234567",
      position: "Service Advisor",
      userId: "003",
    },

    {
      name: "Abdul Rehman",
      phone: "0561112223",
      position: "Warehouse Manager",
      userId: "004",
    },
  ];

  return NextResponse.json(users);
}
