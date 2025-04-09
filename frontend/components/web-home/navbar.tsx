"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (menuOpen && !target.closest('.mobile-menu-container')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    return (
        <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out
            ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className="text-gray-900 font-bold text-2xl md:text-3xl flex items-center hover:text-blue-600 transition-all duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="text-blue-600 font-extrabold">Solusi</span> &nbsp;
                            <span className="font-extrabold text-center">IT</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#home"
                            className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium py-2 group relative"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="relative">
                                Home
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${scrolled ? 'opacity-100' : 'opacity-90'}`}></span>
                            </span>
                        </Link>
                        <Link
                            href="#product"
                            className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium py-2 group relative"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="relative">
                                Product
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${scrolled ? 'opacity-100' : 'opacity-90'}`}></span>
                            </span>
                        </Link>
                        <Link
                            href="#layanan"
                            className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium py-2 group relative"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="relative">
                                Layanan
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${scrolled ? 'opacity-100' : 'opacity-90'}`}></span>
                            </span>
                        </Link>
                        <Link
                            href="#contact"
                            className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium py-2 group relative"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="relative">
                                Kontak kami
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${scrolled ? 'opacity-100' : 'opacity-90'}`}></span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/gabung"
                            className={`
                                px-8 py-3 rounded-xl font-semibold text-lg 
                                transition-all duration-300 ease-in-out 
                                ${scrolled ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700'}
                                transform hover:scale-105 hover:shadow-md
                            `}
                        >
                            Gabung dengan Kami
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu-container md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 transition-all duration-300`}>
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="#home"
                            className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-blue-50"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="#product"
                            className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-blue-50"
                            onClick={() => setMenuOpen(false)}
                        >
                            Product
                        </Link>
                        <Link
                            href="#layanan"
                            className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-blue-50"
                            onClick={() => setMenuOpen(false)}
                        >
                            Layanan
                        </Link>
                        <Link
                            href="#contact"
                            className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium py-3 px-4 rounded-lg hover:bg-blue-50"
                            onClick={() => setMenuOpen(false)}
                        >
                            Kontak kami
                        </Link>
                        <Link
                            href="/gabung"
                            className="mt-4 px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-center transform hover:scale-105 hover:shadow-md"
                            onClick={() => setMenuOpen(false)}
                        >
                            Gabung dengan Kami
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;