"use client";
import Image from 'next/image';

export default function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <a onClick={scrollToTop} className="cursor-pointer">
            <Image
                src="/images/466.JPG"
                alt="Scroll to Top"
                width={2000}
                height={1500}
                className="w-full rounded-md"
            />
        </a>
    );
}
