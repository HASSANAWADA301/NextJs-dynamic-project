import { NavItem } from "../../atoms/NavItem/NavItem";

type NavMenuProps = {
  items: { label: string; href: string }[];
};

export const NavMenu: React.FC<NavMenuProps> = ({ items }) => (
  <ul
    className={`
      flex list-none items-center justify-center
      px-[200px] gap-[20px]
      max-[1335px]:px-[40px] max-[1335px]:gap-[12px]
      max-[1085px]:px-[20px] max-[1085px]:gap-[6px]
      max-[1024px]:flex-col max-[1024px]:px-[40px] max-[1024px]:gap-[12px]
      max-[768px]:px-[20px] max-[768px]:gap-[10px]
      max-[480px]:px-[15px] max-[480px]:gap-[8px]
      max-[320px]:px-[10px] max-[320px]:gap-[6px]
    `}
  >
    {items.map((item) => (
      <NavItem key={item.label} label={item.label} href={item.href} />
    ))}
  </ul>
);
