import { MoveRight } from "lucide-react";
import Menu from "./header-menu";

function Header() {
  return (
    <header className="h-15 bg-(--secondary) flex items-center justify-between  px-6">
      <p className="uppercase text-white font-mono font-bold text-sm ">h.nematjonov</p>
      <Menu />
      <button className="flex items-center gap-2 text-(#231B00) font-mono font-bold text-sm bg-(--accent) h-full px-4 uppercase cursor-pointer">
        hire me <MoveRight />
      </button>
    </header>
  );
}

export default Header;