import Image from "next/image";
import { Hero } from "@/components";
export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white w-full h-80 lg:flex flex flex-col justify-between py-5 px-24">
        <div className="w-6/12 flex content-center bg-yellow-300">
          <div className="w-56 h-56 bg-gray-500 ">
            <Image
              src="/africa.svg"
              width={20}
              height={20}
              alt="image"
              className=" w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
