import Link from "next/link";
import Image from "next/image";
import { LikeIcon } from "./assets/icons";

type TCategory = {
  value: string;
  label: string;
};

const categories: TCategory[] = [
  {
    value: "all",
    label: "Barchasi",
  },
  {
    value: "monitor",
    label: "Monitor",
  },
  {
    value: "laptop",
    label: "Noutbuk",
  },
  {
    value: "accessories",
    label: "Aksesuarlar",
  },
];

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <Image src="/logo.svg" alt="Dev Shop logo" width="225" height="32" />
        </div>
        <div className="header__actions">
          <button className="header__action">
            <LikeIcon />
            <div>Saqlanganlar</div>
          </button>
        </div>
      </header>
      <menu className="categories">
        {categories.map(({ value, label }) => (
          <Link key={value} href={value} className="categories__link">
            {label}
          </Link>
        ))}
      </menu>
    </div>
  );
};

export default Header;
