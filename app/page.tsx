"use client";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import Image from "next/image";

export default function Home() {


  return (
    <>
      <div className='w-full lg:w-[1400px] m-auto h-[2000px] flex flex-col'>
        <Navbar />
        <div className='w-full lg:w-[1400px] m-auto flex-grow'>
          <img src="/images/466.JPG" alt="466" width={1400} height={800} />
          <Image src="/images/418.jpg" alt="418" width={1400} height={800} />
          <Image src="/images/IMG_0697.jpg" id="targetImage" alt="IMG_0697" width={1400} height={980} />
          <Image src="/images/2299-59182.jpg" id="beleg" alt="2299-59182" width={1400} height={800} />
          <Image src="/images/Airpod.jpg" alt="Airpod" width={1400} height={800} />
          <Image src="/images/s-l1200.jpg" alt="s-l1200" width={1400} height={800} />
        </div>
        <Footer />
        <a href="#">
          <div className="flex justify-center mb-4" >
            <Image
              src="/images/2-removebg-preview.png"
              alt="Scroll to Top"
              width={400}
              height={350}
              className="w-[300px] lg:w-[350px]"
            />
          </div>
        </a>
      </div>
    </>
  );
}
