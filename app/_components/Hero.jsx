"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';


function Hero() {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.classList.add('animate');
        }
    }, []);

    return (
        <>
            <section
                ref={ref}
                className="relative bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
                </div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Learn Your
                            Favorite Course


                            <strong className="block font-extrabold text-pink-700"> From Home. </strong>
                        </h1>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-pink-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-pink-500 transition hover:text-pink-600/75 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <Image src="/edu.png" width={800} height={500} alt="img" />
                </div>
            </section>
        </>
    );
}

export default Hero;
