import { menu } from "../shared/data/menu.data";

function Menu() {
  return (
    <nav className="flex items-center gap-5">
      {
        menu.map((item, i) => (
          <a className="uppercase font-mono font-light text-sm text-white" key={i} href={`#${item.id}`}>
            {item.title}/
          </a>
        ))
      }
    </nav>
  );
}

export default Menu