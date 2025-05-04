import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-black to-[#1b425c]/20 text-white pt-12 pb-6"
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] to-[#1b425c]">
                            Amerta
                        </h3>
                        <p className="text-white/70">
                            Amerta adalah platform yang berkomitmen untuk memperkuat identitas nasional generasi muda, menuju Indonesia emas 2045.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] to-[#1b425c]">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-white/70 hover:text-[#025f92] transition-colors duration-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-white/70 hover:text-[#025f92] transition-colors duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/70 hover:text-[#025f92] transition-colors duration-300">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/70 hover:text-[#025f92] transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] to-[#1b425c]">
                            Contact Us
                        </h3>
                        <p className="text-white/70 mb-2">Email: info@amerta.id</p>
                        <p className="text-white/70 mb-2">Phone: +62 812 3456 7890</p>
                        <p className="text-white/70">Location: Jakarta, Indonesia</p>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col gap-2 space-y-1">
                        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] to-[#1b425c]">
                            Social Media
                        </h3>
                        <a href="https://www.instagram.com/amerta_ns/" 
                           className="text-white/70 hover:text-[#025f92] transition-colors duration-300">
                            Instagram
                        </a>
                        <a href="https://www.youtube.com/@PPTQABI-UMMIAMPEL" 
                           className="text-white/70 hover:text-[#025f92] transition-colors duration-300">
                            YouTube
                        </a>
                        <a href="https://www.tiktok.com/@amerta.ns" 
                           className="text-white/70 hover:text-[#025f92] transition-colors duration-300">
                            TikTok
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#025f92]/20 mb-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
                    <p className="mb-4 md:mb-0">&copy; 2025 Amerta. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <p>made by ahmad hasan</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
