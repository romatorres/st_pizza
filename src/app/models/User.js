import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.leght || pass.leght < 5) {
          new Error("A senha tem que ter no minimo 5 caracteres");
        }
      },
    },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
