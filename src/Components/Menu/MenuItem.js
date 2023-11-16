export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:bg-black-50 transition-all">
      <div className="text-center">
        <img
          src="/pizza.png"
          className="max-h-auto max-h-24 mx-auto block"
          alt="pizza"
        />
      </div>
      <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        It is a long established fact that a reader will be distracted by the
        readable
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Adicionar R$12
      </button>
    </div>
  );
}
