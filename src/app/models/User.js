import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: pass => {
        if (!pass?.length || pass.length < 5) {
          new Error("A senha tem que ter no minimo 5 caracteres");
          return false
        }
      },
    },
  },
  { timestamps: true }
);

export const User = models?.User || model('User', UserSchema);
