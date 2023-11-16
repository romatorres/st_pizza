import Image from "next/image";
import MenuItem from "../Menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute max-w-[870px] mx-auto left-0 right-0 justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={"/sallad1.png"} width={109} height={189} alt={"salada"} />
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt={"salada"} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeaders={"Confira"} mainHeaders={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
