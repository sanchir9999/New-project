"use client";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import Image from "next/image";
import VideoComponent from "@/app/components/VideoComponent"
export default function Home() {


  return (
    <>
      <div className='w-full lg:w-[1400px] m-auto h-[2000px] flex flex-col'>
        <Navbar />
        <div className='w-full lg:w-[1400px] m-auto flex-grow'>
          <Image src="/images/466.JPG" alt="466" width={1400} height={800} />
          <Image src="/images/418.JPG" alt="418" width={1400} height={800} />
          <Image src="/images/IMG_0697.JPG" id="targetImage" alt="IMG_0697" width={1400} height={980} />
          <Image src="/images/2299-59182.JPG" id="beleg" alt="2299-59182" width={1400} height={800} />
          <Image src="/images/Airpod.JPG" alt="Airpod" width={1400} height={800} />
          <Image src="/images/s-l1200.jpg" alt="s-l1200" width={1400} height={800} />
          <h1 className="text-4xl font-extrabold text-center text-gradient bg-clip-text" id="chanar">
            ЧАНАРЫН БАТАЛГАА
          </h1>
          <VideoComponent />
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
