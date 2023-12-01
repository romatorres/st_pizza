import Hero from "./../Components/Layout/Hero";
import HomeMenu from "./../Components/Layout/HomeMenu";
import SectionHeaders from "./../Components/Layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeaders={"Sobre"} mainHeaders={"Sobre"} />
        <div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>
      </section>
      <section className="text-center my-16">
        <SectionHeaders subHeaders={"Não hesite"} mainHeaders={"Contato"} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="">
            75 99999-0000
          </a>
        </div>
      </section>
    </>
  );
}
