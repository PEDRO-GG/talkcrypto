import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}
const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className="flex items-center justify-center w-24 h-full text-xs font-medium text-white uppercase border-l-2 border-white hover:bg-white hover:text-black">
        {label}
      </a>
    </Link>
  );
};

export default NavLink;
