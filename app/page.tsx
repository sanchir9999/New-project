"use client";
import Image from 'next/image'; // next/image импортлох
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import VideoPlayer from "@/app/components/VideoPlayer";


export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='w-full lg:w-[1400px] m-auto h-[2000px]'>
        <Navbar />
        <Image src="/images/466.JPG" id='home' alt="Image 466" width={2000} height={1480} className="w-full rounded-md" />
        <Image src="/images/418.JPG" alt="Image 418" width={2000} height={1480} className="w-full rounded-md" />
        <Image src="/images/IMG_0697.JPG" id="targetImage" alt="Image IMG_0697" width={2000} height={980} className="w-full h-auto max-h-[980px] rounded-md" />
        <Image src="/images/2299-59182.JPG" id='beleg' alt="Image 2299-59182" width={2000} height={1480} className="w-full rounded-md" />
        <Image src="/images/Airpod.JPG" alt="Image Airpod" width={2000} height={1480} className="w-full rounded-md" />
        <Image src="/images/s-l1200.jpg" alt="Image s-l1200" width={2000} height={1480} className="w-full rounded-md" />
        <div id='Chanar' className='flex flex-col lg:justify-center lg:items-center bg-slate-300'>
          <h1 className='lg:text-7xl text-3xl font-bold font-serif text-blue-600/100 dark:text-blue-500/100 mt-8 text-center mb-6 lg:m-7'>
            ЧАНАРЫН БАТАЛГАА
          </h1>
          <VideoPlayer src="/Videos/0724.mp4" />
        </div>
        <Footer />
        <div className="flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
          <Image
            src="/images/2-removebg-preview.png"
            alt="Scroll to Top"
            width={3000}
            height={4100}
            className="w-[400px] lg:w-[350px] mt-4"
          />
        </div>
      </div>
    </>
  );
}
