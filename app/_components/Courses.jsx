import React from 'react'

function Courses() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-50 sm:text-4xl">Popular Courses</h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        Your domain control panel is designed for ease-of-use and
                        allows for all aspects of your domains.
                    </p>
                </div>

                <div className="mt-8 sm:flex sm:items-center sm:justify-between">
                    <div className="block sm:hidden">
                        <button
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-50 pb-1 text-gray-50 transition hover:border-gray-50"
                        >
                            <span className="text-sm font-medium"> Filters & Sorting </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4 rtl:rotate-180"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden sm:flex sm:gap-4">
                        <div className="relative">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex cursor-pointer items-center gap-2 border-b border-gray-50 pb-1 text-gray-50 transition hover:border-gray-50"
                                >
                                    <span className="text-sm font-medium"> Cateogory </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <div
                                    className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
                                >
                                    <div className="w-96 rounded border border-gray-200 bg-purple-100">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> 0 Selected </span>

                                            <button type="button" className="text-sm text-gray-50 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterInStock"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700"> Tech (10+) </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPreOrder"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700"> Business (3+) </span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOutOfStock"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700"> Desgin (5+) </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOutOfStock"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700"> Markiting (7+) </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="relative">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex cursor-pointer items-center gap-2 border-b border-gray-50 pb-1 text-gray-50 transition hover:border-gray-50"
                                >
                                    <span className="text-sm font-medium"> Price </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <div
                                    className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
                                >
                                    <div className="w-96 rounded border border-gray-200 bg-purple-100">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> The highest price is $600 </span>

                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>

                                        <div className="border-t border-gray-200 p-4">
                                            <div className="flex justify-between gap-4">
                                                <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>

                                                    <input
                                                        type="number"
                                                        id="FilterPriceFrom"
                                                        placeholder="From"
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>

                                                <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>

                                                    <input
                                                        type="number"
                                                        id="FilterPriceTo"
                                                        placeholder="To"
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    <div className="hidden sm:block">
                        <label htmlFor="SortBy" className="sr-only">SortBy</label>

                        <select id="SortBy" className="h-10 rounded border-gray-300 text-sm bg-purple-100">
                            <option>Sort By</option>
                            <option value="Title, DESC">Title, DESC</option>
                            <option value="Title, ASC">Title, ASC</option>
                            <option value="Price, DESC">Price, DESC</option>
                            <option value="Price, ASC">Price, ASC</option>
                        </select>
                    </div>
                </div>

                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <li>
                        <a href="#" className="group relative block overflow-hidden rounded-md shadow-md">
                            <button
                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="absolute start-4 top-4 z-10 bg-pink-400 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Category</span>

                                <span className="whitespace-nowrap bg-pink-400 px-3 py-1.5 text-xs font-medium"> Tech </span>
                            </button>

                            <img
                                src="/html&css.webp"
                                alt=""
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
                            />

                            <div className="relative border border-gray-100 bg-purple-100 p-2">

                                <h3 className="mt-4 text-lg font-medium text-gray-900">Html,Css</h3>

                                <p>for build the strcture for the website and design it</p>

                                <p className="mt-1.5 text-sm text-gray-700">$19.99</p>

                                <form className="mt-4">
                                    <button
                                        className="block w-full rounded bg-pink-500 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="group relative block overflow-hidden rounded-md shadow-md">
                            <button
                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="absolute start-4 top-4 z-10 bg-pink-400 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Category</span>

                                <span className="whitespace-nowrap bg-pink-400 px-3 py-1.5 text-xs font-medium"> Design </span>
                            </button>

                            <img
                                src="/adobePhoto.jfif"
                                alt=""
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
                            />

                            <div className="relative border border-gray-100 bg-purple-100 p-2">

                                <h3 className="mt-4 text-lg font-medium text-gray-900">AdobePhoto 2024</h3>

                                <p>Photo shop from zero to hero in 2024</p>

                                <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

                                <form className="mt-4">
                                    <button
                                        className="block w-full rounded bg-pink-500 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="group relative block overflow-hidden rounded-md shadow-md">
                            <button
                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="absolute start-4 top-4 z-10 bg-pink-400 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Category</span>

                                <span className="whitespace-nowrap bg-pink-400 px-3 py-1.5 text-xs font-medium"> Business </span>
                            </button>

                            <img
                                src="/7.webp"
                                alt=""
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
                            />

                            <div className="relative border border-gray-100 bg-purple-100 p-2">

                                <h3 className="mt-4 text-lg font-medium text-gray-900">Data Analysis</h3>

                                <p>for Analysis the data and combain the business with the code</p>

                                <p className="mt-1.5 text-sm text-gray-700">$24.99</p>

                                <form className="mt-4">
                                    <button
                                        className="block w-full rounded bg-pink-500 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="group relative block overflow-hidden rounded-md shadow-md">
                            <button
                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="absolute start-4 top-4 z-10 bg-pink-400 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Category</span>

                                <span className="whitespace-nowrap bg-pink-400 px-3 py-1.5 text-xs font-medium"> Markiting </span>
                            </button>

                            <img
                                src="/markiting.jfif"
                                alt=""
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
                            />

                            <div className="relative border border-gray-100 bg-purple-100 p-2">

                                <h3 className="mt-4 text-lg font-medium text-gray-900">Digital Markiting</h3>

                                <p>All you want to know about digital markiting course 2024</p>

                                <p className="mt-1.5 text-sm text-gray-700">$29.99</p>

                                <form className="mt-4">
                                    <button
                                        className="block w-full rounded bg-pink-500 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <li>
                        <a href="#" className="group relative block overflow-hidden rounded-md shadow-md">
                            <button
                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="absolute start-4 top-4 z-10 bg-pink-400 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Category</span>

                                <span className="whitespace-nowrap bg-pink-400 px-3 py-1.5 text-xs font-medium"> Design </span>
                            </button>

                            <img
                                src="/images.jfif"
                                alt=""
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
                            />

                            <div className="relative border border-gray-100 bg-purple-100 p-2">

                                <h3 className="mt-4 text-lg font-medium text-gray-900">Video Editing</h3>

                                <p>Edit video and know the basic of video editing course in 2024</p>

                                <p className="mt-1.5 text-sm text-gray-700">$24.99</p>

                                <form className="mt-4">
                                    <button
                                        className="block w-full rounded bg-pink-500 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="group relative block overflow-hidden rounded-md shadow-md">
                            <button
                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="absolute start-4 top-4 z-10 bg-pink-400 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Category</span>

                                <span className="whitespace-nowrap bg-pink-400 px-3 py-1.5 text-xs font-medium"> Tech </span>
                            </button>

                            <img
                                src="/next 14.webp"
                                alt=""
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
                            />

                            <div className="relative border border-gray-100 bg-purple-100 p-2">

                                <h3 className="mt-4 text-lg font-medium text-gray-900">Next 14</h3>

                                <p>the famous fram work for react js appliction in 2024</p>

                                <p className="mt-1.5 text-sm text-gray-700">$34.99</p>

                                <form className="mt-4">
                                    <button
                                        className="block w-full rounded bg-pink-500 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="group relative block overflow-hidden rounded-md shadow-md">
                            <button
                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="absolute start-4 top-4 z-10 bg-pink-400 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Category</span>

                                <span className="whitespace-nowrap bg-pink-400 px-3 py-1.5 text-xs font-medium"> Desgin </span>
                            </button>

                            <img
                                src="/Graphic-Design-BCG-Banner.png"
                                alt=""
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
                            />

                            <div className="relative border border-gray-100 bg-purple-100 p-2">

                                <h3 className="mt-4 text-lg font-medium text-gray-900">Graphic-Design</h3>

                                <p>All you must to know to be a graphic designar in one course</p>

                                <p className="mt-1.5 text-sm text-gray-700">$19.99</p>

                                <form className="mt-4">
                                    <button
                                        className="block w-full rounded bg-pink-500 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="group relative block overflow-hidden rounded-md shadow-md">
                            <button
                                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Wishlist</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="absolute start-4 top-4 z-10 bg-pink-400 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                            >
                                <span className="sr-only">Category</span>

                                <span className="whitespace-nowrap bg-pink-400 px-3 py-1.5 text-xs font-medium"> Business </span>
                            </button>

                            <img
                                src="/a.jfif"
                                alt=""
                                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-50"
                            />

                            <div className="relative border border-gray-100 bg-purple-100 p-2">

                                <h3 className="mt-4 text-lg font-medium text-gray-900">Business Adminstrator</h3>

                                <p>All you should to know about the Business Adminstrator in 2024</p>

                                <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

                                <form className="mt-4">
                                    <button
                                        className="block w-full rounded bg-pink-500 p-4 text-sm font-medium transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>
                                </form>
                            </div>
                        </a>
                    </li>
                </ul>

                <div className="mt-8 flex flex-wrap  text-center">
                    <a
                        href="#"
                        className="block w-full rounded bg-pink-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    >
                        More Courses
                    </a>
                </div>
                <div>
                    <ol className="flex justify-center gap-1 text-xl font-large">
                        <li>
                            <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                            >
                                <span className="sr-only">Prev Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-pink-600 bg-pink-600 text-center leading-8 text-gray-900"
                            >
                                1
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                                2
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                                3
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                                4
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                            >
                                <span className="sr-only">Next Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Courses