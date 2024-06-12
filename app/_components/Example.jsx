'use client'

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
    return (
        <div className="bg-gray-900">
            <div className="flex items-center justify-center">
                <div className="max-w-xl pt-12">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                        Our Latest Blog
                    </h2>
                </div>
            </div>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-gray-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[380px] w-[400px] overflow-hidden bg-neutral-200 "
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black uppercase text-pink-500 backdrop-blur-sm">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default Example;

const cards = [
    {
        url: "/web.png",
        title: "What is responsive",
        id: 1,
    },
    {
        url: "/7.webp",
        title: "Data Analysis",
        id: 2,
    },
    {
        url: "/adobePhoto.jfif",
        title: "PhotoShop with AI Tools",
        id: 3,
    },
    {
        url: "/images.jfif",
        title: "video editing with ai",
        id: 4,
    },
    {
        url: "/about.webp",
        title: "Graghic desginer tips",
        id: 5,
    },
    {
        url: "/markiting.jfif",
        title: "markiting logic in 2024",
        id: 6,
    },
    {
        url: "/security.jpg",
        title: "what cyber scurity do?",
        id: 7,
    },
];