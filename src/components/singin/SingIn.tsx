import { Icons } from "../icons/Icons";
import Link from "next/link";
import UserAuthForm from "../userauthform/UserAuthForm";

const SingIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="w-6 h-6 mx-auto" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continiung, you are setting a Nextdit and agree to our User
          Agreement and Privacy Policy.
        </p>
        <UserAuthForm />

        <p className="px-8 text-cente text-sm text-zinc-700">
            New to Nextdit?{" "}
            <Link href='/sing-up' className="hover:text-zinc-800 text-sm underline underline-offset-4">
                Sing Up
            </Link>
        </p>


      </div>
    </div>
  );
};

export default SingIn;
