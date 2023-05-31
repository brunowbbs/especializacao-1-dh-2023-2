export default function Form() {
  return (
    <div className="bg-red-500 justify-center m-10">
      <button className="flex sm:hidden bg-primary text-white">Novo</button>
      <div className="hidden sm:flex  max-w-[500px] min-w-[300px] ">
        <input type="text" className="border-2" />
        <input type="text" className="border-2" />
        <input type="text" className="border-2" />
        <input type="text" className="border-2" />
      </div>
    </div>
  );
}
