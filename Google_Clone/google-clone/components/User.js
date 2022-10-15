import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const User = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button className="rounded-full hover:bg-gray-200 cursor-pointer p-1">
          <Image
            onClick={signOut}
            src={session?.user?.image}
            alt="User Logo"
            width="40px"
            height="40px"
            className="rounded-full"
          />
        </button>
      </>
    );
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
};
export default User;
