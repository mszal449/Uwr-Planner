import {User} from "@/models/";
import { NextRequest } from "next/server";
import { getReq, postReq } from "../requests";

// Get users
export async function GET(req: NextRequest) {
  return getReq(req, User, ["name"])
}

// Create a new user
export async function POST(req: NextRequest) {
  return postReq(req, User)
}
