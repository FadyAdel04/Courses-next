'use client'
import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';


const Landing = () => {
    const totalSalesRef = useRef(null);
    const coursesRef = useRef(null);
    const enrolledRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1, // Trigger when 10% of the section is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const countUpOptions = {
                        startVal: 0,
                        duration: 2.5, // Duration of the count up animation
                        useEasing: true,
                    };

                    if (entry.target === totalSalesRef.current) {
                        const countUp = new CountUp(totalSalesRef.current, 4800000, countUpOptions);
                        if (!countUp.error) {
                            countUp.start();
                        }
                    }

                    if (entry.target === coursesRef.current) {
                        const countUp = new CountUp(coursesRef.current, 20, countUpOptions);
                        if (!countUp.error) {
                            countUp.start();
                        }
                    }

                    if (entry.target === enrolledRef.current) {
                        const countUp = new CountUp(enrolledRef.current, 7864, countUpOptions);
                        if (!countUp.error) {
                            countUp.start();
                        }
                    }

                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (totalSalesRef.current) observer.observe(totalSalesRef.current);
        if (coursesRef.current) observer.observe(coursesRef.current);
        if (enrolledRef.current) observer.observe(enrolledRef.current);

        return () => {
            if (totalSalesRef.current) observer.unobserve(totalSalesRef.current);
            if (coursesRef.current) observer.unobserve(coursesRef.current);
            if (enrolledRef.current) observer.unobserve(enrolledRef.current);
        };
    }, []);

    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const distanceFromTop = window.scrollY + window.innerHeight;
                const elementOffset = ref.current.offsetTop;

                // Adjust the threshold as needed
                if (distanceFromTop > elementOffset + 100) {
                    ref.current.classList.add('animate');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section
                ref={ref}
                className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-gray-900 text-white pb-14"
            >
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white md:text-3xl">
                            About US
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            Many programming specializations
                            Eclipseful Academy offers many programming specializations, and you can browse the academy and choose the appropriate specialization for you, for free.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-pink-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-400 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src="/about.webp"
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>
            <section className="relative bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-gray-50 sm:text-4xl">Over +7000 Tutorials from 20 Courses</h2>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col rounded-lg bg-purple-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>
                                <dd className="text-4xl font-extrabold text-pink-500 md:text-5xl" ref={totalSalesRef}>$0</dd>
                            </div>
                            <div className="flex flex-col rounded-lg bg-purple-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Courses</dt>
                                <dd className="text-4xl font-extrabold text-pink-500 md:text-5xl" ref={coursesRef}>+0</dd>
                            </div>
                            <div className="flex flex-col rounded-lg bg-purple-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium text-gray-500">Enrolled</dt>
                                <dd className="text-4xl font-extrabold text-pink-500 md:text-5xl" ref={enrolledRef}>+0</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;
