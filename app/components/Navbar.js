"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 w-full p-4 sm:p-6 lg:p-8 flex items-center justify-between shadow-md z-50 ">
            <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
                <Image
                    src="/images/2-removebg-preview.png"
                    alt="Scroll to Top"
                    width={100}
                    height={75}
                    className="w-[150px] lg:w-[300px]"
                />
            </div>
            <button
                className="sm:hidden text-4xl focus:outline-none ml-8 h-[60px] w-[60px]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '✕' : '☰'}
            </button>
            <ul className={`fixed top-0 right-0 w-[50vw] h-[280px] flex flex-col items-start bg-[#03938e] gap-[20px] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:relative sm:flex sm:flex-row sm:space-x-10 sm:w-auto sm:h-auto sm:translate-x-0 sm:bg-transparent sm:shadow-none`}>
                {/* Close button only visible when drawer is open */}
                {isOpen && (
                    <button
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                )}
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="#" title="Чанар" className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Чанар</a>
                </div>
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="#beleg" title="Бэлэг" className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Бэлэг</a>
                </div>
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="#targetImage" title="Хэрэглээ" className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Хэрэглээ</a>
                </div>
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a href="#Utas" title="Утас" className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Утас</a>
                </div>

                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <Link
                        href="/Zahialah"
                        className='relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                    >
                        Захиалах
                    </Link>


                </div>
            </ul>
        </nav>
    );
}
