import { FC } from "react";
import { User } from "next-auth";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import Image from "next/image";
import { Icons } from "../icons/Icons";


interface UserAvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
  return (
    <Avatar>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt={user.name}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <Icons.user className='h-4 w-4'/>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
