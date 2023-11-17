import { cn } from "../utils/utils";

type HeaderProps = {
  children: string;
};

export function Header({ children }: HeaderProps) {
  return (
    <div
      className={cn(
        "h-12 p-6 text-center text-2xl font-semibold",
        "flex flex-row items-center justify-center linear-gradient bg-gradient-to-br from-gray-900 to-gray-800"
      )}
    >
      <h2 className="m-2 p-2 text-center text-white">{children}</h2>
    </div>
  );
}
