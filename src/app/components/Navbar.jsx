import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import menu from "@/assets/menu.svg";

const Navbar = () => {
  return (
    <div>
      <div className="bg-transparent flex items-center w-full justify-between px-20 py-2">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={200} height={200} />
          </Link>
        </div>
        <div>Search</div>
        <div className="flex  items-center gap-5">
          <span className="text-white">
            <Link href="/">Sign In</Link>
          </span>
          <Image src={menu} alt="menu" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
