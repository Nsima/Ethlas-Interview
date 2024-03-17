import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & { className?: string }
export default function Container({ children, className }: Props) {
  return <div className={clsx("px-6 my-4", className)}>
    {children}
  </div>
}
