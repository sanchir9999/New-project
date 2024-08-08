"use client"
import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
export const Footer = () => {
    return (
        <div className="p-[16px]">
            <div className="m-auto w-full h-[336px] lg:w-[1231px] lg:flex justify-center items-center">
                <div className="w-[289px] flex justify-center items-center mt-5">
                    <div className="flex flex-col gap-[24px] pl-10">
                        <div className="flex flex-col gap-4 justify-center">
                            <div className="text-center">
                                <h2 className="font-bold text-2xl text-black">About</h2>
                            </div>
                            <div>
                                <p className="font-normal text-2xl text-[#696A75]">
                                    Зах зээлийн үнээс 1 дахин хямдхан чанартай ширээний багц санал болгоно. ✌🏻
                                </p>
                            </div>
                        </div>
                        <div >
                            <div className="flex">
                                <p className="text-[#181A2A] text-xl font-bold">Email: </p>
                                <p className="text-[#3B3C4A] text-xl "> Monhbatsanchir1@gmail.com</p>
                            </div>
                            <div className="flex" id="Utas">
                                <p className="text-[#181A2A] text-xl font-bold">Phone: </p>
                                <p className="text-[#3B3C4A] text-xl">+976 88175658</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex grid grid-cols-3 p-4 cols-3  gap-[24px] items-center mt-5">
                    <div className="relative inline-flex group">
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <a href="#Chanar" title="Чанар" className="relative inline-flex items-center justify-center px-4 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">Чанар</a>
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
                </div>
                <div className="flex w-full lg:flex-col gap-[30px] justify-center  items-center">
                    <Link href="https://www.facebook.com/profile.php?id=61550748899169/" passHref>
                        <FaFacebook className="w-16 h-16"></FaFacebook>
                    </Link>
                    <Link href="https://www.instagram.com/" passHref>
                        <BsInstagram className="w-16 h-16"></BsInstagram>
                    </Link>
                    <Link href="https://www.youtube.com/" passHref>
                        <BsYoutube className="w-16 h-16"></BsYoutube>
                    </Link>
                </div>
            </div>
            <div className="m-auto w-full lg:w-[1216px] mt-6 flex flex-col gap-[64px] lg:flex-row justify-between border-t-4 pt-8 pb-8">
                <div>
                    <Link href="/" passHref>



                    </Link>
                </div>
            </div>
        </div>
    );
};