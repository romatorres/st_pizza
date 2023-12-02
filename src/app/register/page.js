"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "appliclation/json" },
      });
      if(response.ok){
        setUserCreated(true);
      } else{
        setError(true);  
        setCreatingUser(false);
      }      
    }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl">Register</h1>
      {userCreated && (
        <div className="my-4 text-center text-gray-700">
          Usuário criado, agora você pode fazer o{" "}
          <Link href={"/login"}>
            <strong>Login! &raquo;</strong>
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center text-gray-700">
          Algo deu errado, por favor, tente novamente!!
        </div>
      )}
      <form className="block max-w-md mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="e-mail"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Registre-se
        </button>
        <div className="my-4 text-center text-gray-700">
          Ou faça com sua rede social
        </div>
        <button className="flex items-center justify-center gap-4 btn_secondary">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login com o Google
        </button>
      </form>
    </section>
  );
}
