"use client"

import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleFormSubmit(ev) {
    ev.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'appliclation/json'},
    });
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl">Register</h1>
      <form className="block max-w-md mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="e-mail" value={email} onChange={ev => setEmail(ev.target.value)}/>
        <input type="password" placeholder="senha" value={password} onChange={ev => setPassword(ev.target.value)} />
        <button type="submit">Registre-se</button>
        <div className="my-4 text-center text-gray-700">
          Ou faça com sua rede social
        </div>
        <button className="flex items-center justify-center gap-4 btn_secondary">
        <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login com o Google
        </button>
      </form>
    </section>
  );
}
