export default function SectionHeaders({ subHeaders, mainHeaders }) {
  return (
    <div>
      <h3 className="uppercase text-gray-600 font-semibold leading-3">
        {subHeaders}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeaders}</h2>
    </div>
  );
}
