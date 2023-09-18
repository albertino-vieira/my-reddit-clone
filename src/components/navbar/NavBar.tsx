import Link from "next/link";
import { Icons } from "../icons/Icons";
import { buttonVariants } from "../ui/Button";

const NavBar = () => {
  return (
    <div className="fixed top-o inset-x-0 h-fit bg-zinc-100 border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
            <Icons.logo className="w-8 h-8 sm:h-6 sm:w-6" />
            <p className="hidden text-zinc-700 text-sm font-medium md:block">
                Nextdit
            </p>
        </Link>
        <Link href="/sing-in" className={buttonVariants()}>
            Sing In 
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
