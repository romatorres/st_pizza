import mongoose from "mongoose";

export function POST(req) {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json("OK");
}
