import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="300"
          height="100"
          objectFit="cover"
          alt="google logo"
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="btn">Google Search</button>
          <button className="btn">I&#39;m feeling lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
