"use client";

import Image from "next/image";
import CatLogo from "../../../public/assets/images/cat-logo.png";
import { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showItems, setShowItems] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setShowItems(true), 300);
        } else {
            setShowItems(false);
        }
    }, [isOpen]);

    const toggleMenu = () => {
        if (isOpen) {
            setShowItems(false);
            setTimeout(() => setIsOpen(false), 300);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <header className="bg-header fixed w-full top-0 left-0 z-50 shadow-md">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
                <div className="flex items-center">
                    <a className="block text-teal-600" href="#">
                        <span className="sr-only">Home</span>
                        <Image
                            className="rounded-full ring-ring ring-2 h-16 w-16"
                            src={CatLogo}
                            alt="Cat Logo"
                            width={60}
                        />
                    </a>
                </div>
                
                <nav className="hidden md:flex gap-6 text-sm">
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">About Me</a>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">Career</a>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">Projects</a>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">Contact</a>
                </nav>

                <button onClick={toggleMenu} className="md:hidden text-ring p-2">
                    {isOpen ? (
                        <LuX size={32} />
                    ) : (
                        <LuMenu size={32} />
                    )}
                </button>
            </div>

            {/* Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={toggleMenu}></div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>  
                <button onClick={toggleMenu} className="absolute top-7 right-4 text-burguer p-2">
                    <LuX size={32} />
                </button>
                {showItems && (
                    <nav className="flex flex-col items-center gap-6 transition-opacity duration-300 delay-150 opacity-100">
                        <a className="text-gray-700 transition hover:text-gray-500/75" href="#">About Me</a>
                        <a className="text-gray-700 transition hover:text-gray-500/75" href="#">Career</a>
                        <a className="text-gray-700 transition hover:text-gray-500/75" href="#">Projects</a>
                        <a className="text-gray-700 transition hover:text-gray-500/75" href="#">Contact</a>
                    </nav>
                )}
            </div>
        </header>
    );
}
