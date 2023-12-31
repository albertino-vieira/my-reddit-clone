"use client"
import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Button } from "../ui/Button";
import { signIn } from "next-auth/react";
import { Icons } from "../icons/Icons";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()

    const handleLogin = async() => {
        setIsLoading(true)
        try {
            await signIn('google')
        }catch(err){
            toast({
                title: 'There was a problem.',
                description: 'There was an error while trying to login.',
                variant: 'destructive'
            })
        }finally{
            setIsLoading(false)
        }
    }
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button onClick={handleLogin} isLoading={isLoading} size='sm' className='w-full'>{isLoading ? null : <Icons.google className="w-4 h-4 mr-2"/>}Google</Button>
    </div>
  );
};

export default UserAuthForm;
