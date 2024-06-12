import React from 'react'

function Header() {
    return (
        <header className="sticky top-0 z-10 bg-black bg-opacity-30">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-pink-600" href="#">
                <svg fill="none" height="48" viewBox="0 0 174 48" width="174" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path clip-rule="evenodd" d="m40 24c0 11.0457-8.9543 20-20 20-9.808 0-17.96705-7.06-19.672375-16.3754-.00514-.028-.010224-.0561-.015247-.0843-.205259-1.1491-.312378-2.3322-.312378-3.5403 0-.9645.0682793-1.9131.200267-2.8412 1.247523-8.772 8.186563-15.71101 16.958533-16.95853.0147-.0021.0294-.00417.0442-.00624.914-.1279 1.8478-.19403 2.797-.19403 1.2377 0 2.4491.11243 3.6246.32763 9.3154 1.70532 16.3754 9.86437 16.3754 19.67237zm-5 0c0 8.2843-6.7157 15-15 15-6.2428 0-11.59493-3.8137-13.8536-9.2385.92781.1569 1.88117.2385 2.8536.2385 9.3888 0 17-7.6112 17-17 0-.9724-.0816-1.9258-.2385-2.8536 5.4248 2.2587 9.2385 7.6108 9.2385 13.8536zm-14.6817-14.99669c.4415 1.25019.6817 2.59539.6817 3.99669 0 6.6274-5.3726 12-12 12-1.4013 0-2.74651-.2402-3.99669-.6817-.0022-.1058-.00331-.2119-.00331-.3183 0-8.2843 6.7157-15 15-15 .1064 0 .2125.00111.3183.00331z" fill-rule="evenodd"/><path d="m50 32.9999v-21h13.71v3.09h-9.87v5.76h8.97v3h-8.97v6.06h9.87v3.09z"/><path d="m72.7437 33.3599c-1.52 0-2.86-.33-4.02-.99s-2.08-1.58-2.76-2.76c-.66-1.18-.9899-2.53-.9899-4.05s.3299-2.87.9899-4.05c.68-1.18 1.6-2.1 2.76-2.76s2.5-.99 4.02-.99c1.9 0 3.5001.5 4.8001 1.5 1.3.98 2.13 2.34 2.49 4.08h-4.0501c-.2-.72-.5999-1.28-1.1999-1.68-.58-.42-1.27-.63-2.07-.63-1.06 0-1.96.4-2.7 1.2s-1.1101 1.91-1.1101 3.33.3701 2.53 1.1101 3.33 1.64 1.2 2.7 1.2c.8 0 1.49-.2 2.07-.6.6-.4.9999-.97 1.1999-1.71h4.0501c-.36 1.68-1.19 3.03-2.49 4.05s-2.9001 1.53-4.8001 1.53z"/><path d="m81.642 32.9999v-21.6h3.84v21.6z"/><path d="m89.6757 15.8099c-.7 0-1.28-.21-1.74-.63-.44-.42-.66-.95-.66-1.59s.22-1.16.66-1.56c.46-.42 1.04-.63 1.74-.63s1.27.21 1.71.63c.46.4.69.92.69 1.56s-.23 1.17-.69 1.59c-.44.42-1.01.63-1.71.63zm-1.92 17.19v-14.88h3.84v14.88z"/><path d="m93.8037 39.5999v-21.48h3.4201l.4199 2.13c.48-.66 1.11-1.24 1.89-1.74.8003-.5 1.8303-.75 3.0903-.75 1.4 0 2.65.34 3.75 1.02s1.97 1.61 2.61 2.79.96 2.52.96 4.02-.32 2.84-.96 4.02c-.64 1.16-1.51 2.08-2.61 2.76-1.1.66-2.35.99-3.75.99-1.12 0-2.1-.21-2.9402-.63-.84-.42-1.5201-1.01-2.0401-1.77v8.64zm8.0103-9.6c1.22 0 2.23-.41 3.03-1.23s1.2-1.88 1.2-3.18-.4-2.37-1.2-3.21-1.81-1.26-3.03-1.26c-1.24 0-2.2603.42-3.0603 1.26-.7799.82-1.17 1.88-1.17 3.18s.3901 2.37 1.17 3.21c.8.82 1.8203 1.23 3.0603 1.23z"/><path d="m117.724 33.3599c-1.32 0-2.48-.21-3.48-.63-1-.44-1.8-1.04-2.4-1.8s-.96-1.64-1.08-2.64h3.87c.12.58.44 1.08.96 1.5.54.4 1.23.6 2.07.6s1.45-.17 1.83-.51c.4-.34.6-.73.6-1.17 0-.64-.28-1.07-.84-1.29-.56-.24-1.34-.47-2.34-.69-.64-.14-1.29-.31-1.95-.51s-1.27-.45-1.83-.75c-.54-.32-.98-.72-1.32-1.2-.34-.5-.51-1.11-.51-1.83 0-1.32.52-2.43 1.56-3.33 1.06-.9 2.54-1.35 4.44-1.35 1.76 0 3.16.41 4.2 1.23 1.06.82 1.69 1.95 1.89 3.39h-3.63c-.22-1.1-1.05-1.65-2.49-1.65-.72 0-1.28.14-1.68.42-.38.28-.57.63-.57 1.05 0 .44.29.79.87 1.05s1.35.5 2.31.72c1.04.24 1.99.51 2.85.81.88.28 1.58.71 2.1 1.29.52.56.78 1.37.78 2.43.02.92-.22 1.75-.72 2.49s-1.22 1.32-2.16 1.74-2.05.63-3.33.63z"/><path d="m132.766 33.3599c-1.5 0-2.83-.32-3.99-.96s-2.07-1.54-2.73-2.7-.99-2.5-.99-4.02c0-1.54.32-2.91.96-4.11.66-1.2 1.56-2.13 2.7-2.79 1.16-.68 2.52-1.02 4.08-1.02 1.46 0 2.75.32 3.87.96s1.99 1.52 2.61 2.64c.64 1.1.96 2.33.96 3.69 0 .22-.01.45-.03.69 0 .24-.01.49-.03.75h-11.31c.08 1.16.48 2.07 1.2 2.73.74.66 1.63.99 2.67.99.78 0 1.43-.17 1.95-.51.54-.36.94-.82 1.2-1.38h3.9c-.28.94-.75 1.8-1.41 2.58-.64.76-1.44 1.36-2.4 1.8-.94.44-2.01.66-3.21.66zm.03-12.48c-.94 0-1.77.27-2.49.81-.72.52-1.18 1.32-1.38 2.4h7.41c-.06-.98-.42-1.76-1.08-2.34s-1.48-.87-2.46-.87z"/><path d="m141.065 32.9999 2.04-11.67h-2.04l.57-3.21h2.04l.3-1.74c.32-1.8 1-3.08 2.04-3.84 1.06-.76 2.38-1.14 3.96-1.14h1.62l-.6 3.27h-1.02c-.66 0-1.16.13-1.5.39-.32.26-.54.7-.66 1.32l-.3 1.74h3.21l-.57 3.21h-3.21l-2.04 11.67z"/><path d="m154.965 33.3599c-1.56 0-2.76-.42-3.6-1.26-.84-.86-1.26-2.09-1.26-3.69 0-.56.06-1.19.18-1.89l1.5-8.4h3.81l-1.41 8.04c-.04.24-.07.47-.09.69-.02.2-.03.39-.03.57 0 1.8.88 2.7 2.64 2.7 1.08 0 2.03-.37 2.85-1.11.82-.76 1.35-1.79 1.59-3.09l1.35-7.8h3.84l-2.61 14.88h-3.39l.12-2.46c-.62.86-1.4 1.55-2.34 2.07-.94.5-1.99.75-3.15.75z"/><path d="m165.867 32.9999 3.84-21.6h3.84l-3.84 21.6z"/></g></svg>
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-gray-50 transition hover:text-pink-500" href="#"> Home </a>
                            </li>

                            <li>
                                <a className="text-gray-50 transition hover:text-pink-500" href="#"> About Us </a>
                            </li>

                            <li>
                                <a className="text-gray-50 transition hover:text-pink-500" href="#"> Courses </a>
                            </li>

                            <li>
                                <a className="text-gray-50 transition hover:text-pink-500" href="#"> Pages </a>
                            </li>

                            <li>
                                <a className="text-gray-50 transition hover:text-pink-500" href="#"> About </a>
                            </li>

                            <li>
                                <a className="text-gray-50 transition hover:text-pink-500" href="#"> Blog </a>
                            </li>

                            <li>
                                <a className="text-gray-50 transition hover:text-pink-500" href="#"> Contact </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="block rounded-md bg-pink-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-pink-400"
                                href="#"
                            >
                                Login
                            </a>

                            <a
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-pink-500 transition hover:text-pink-600/75 sm:block"
                                href="#"
                            >
                                Register
                            </a>
                        </div>

                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header