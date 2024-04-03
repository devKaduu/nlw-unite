import { ComponentProps } from "react";

interface INavLinksProps extends ComponentProps<"a"> {
  children: React.ReactNode;
}

export function NavLink(props: INavLinksProps) {
  return (
    <a {...props} className="font-medium text-sm  first:text-zinc-400">
      {props.children}
    </a>
  );
}
