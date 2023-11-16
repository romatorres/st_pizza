export default function RegisterPage() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl">Register</h1>
      <form className="block max-w-md mx-auto">
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="senha" />
        <button type="submit">Registre-se</button>
        <div className="my-4 text-center text-gray-700">
          Ou faça com sua rede social
        </div>
        <button>Login com Google</button>
      </form>
    </section>
  );
}
