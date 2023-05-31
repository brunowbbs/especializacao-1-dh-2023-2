import { useState } from "react";
import menu_icon from "../../assets/icons/menu.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary h-[70px] text-white flex justify-between items-center">
      <h1 className="ml-3">DigiWallet</h1>

      <ul className="hidden gap-5 sm:flex bg-red-500">
        <li>Home</li>
        <li>Sobre</li>
      </ul>

      <img
        onClick={() => setIsOpen(!isOpen)}
        className="flex sm:hidden"
        src={menu_icon}
        width={30}
        height={30}
      />

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-2 absolute bg-primary w-full mt-[110px] sidebar`}
      >
        <li>Home</li>
        <li>Sobre</li>
      </ul>
    </nav>
  );
}
