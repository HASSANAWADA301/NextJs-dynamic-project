import Link from "next/link";
import React from "react";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  console.log("href in NavItem:", href);
  return (
    <li className="cursor-pointer py-2 px-3 text-[#868585]">
      <Link href={href}>{label}</Link>
    </li>
  );
};
