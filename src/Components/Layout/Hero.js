import Image from "next/image";
import Right from "../Icons/Right";

export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Tudo fica melhor com uma <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza é a peça que faltava para completar cada dia, uma alegria de
          vida simples mas deliciosa!
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex gap-2 items-center bg-primary uppercase font-semibold px-4 py-2 rounded-full text-white">
            Peça agora
            <Right />
          </button>
          <button className="flex gap-2 py-2 font-semibold text-gray-600">
            Saiba mais <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"salada"}
        />
      </div>
    </section>
  );
}
