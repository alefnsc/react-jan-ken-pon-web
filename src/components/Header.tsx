import { cn } from "../utils/utils";

type HeaderProps = {
  children: string;
};

export function Header({ children }: HeaderProps) {
  return (
    <div
      className={cn(
        "h-12 p-2 bg-cyan-100 text-center text-xl font-semibold",
        "flex flex-row items-center justify-center"
      )}
    >
      <h2 className="m-2 p-2 text-center">{children}</h2>
    </div>
  );
}
