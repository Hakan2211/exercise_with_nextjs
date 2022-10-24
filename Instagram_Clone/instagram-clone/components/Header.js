import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      {/* Left */}
      <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
          layout="fill"
          className="object-contain"
          alt="logo"
        />
      </div>
      <div className="h-24 w-10 relative lg:hidden cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
          layout="fill"
          className="object-contain"
          alt="logo"
        />
      </div>
      {/* Middle */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>
      {/* Right */}
      <h1>Right</h1>
    </div>
  );
};
export default Header;
