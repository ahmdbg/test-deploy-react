import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black text-white pt-12 pb-6"
        >
            <div className="container mx-auto px-6">
                {/* Bagian atas */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Amerta</h3>
                        <p className="text-gray-400">
                            Amerta adalah platform yang berkomitmen untuk memperkuat identitas nasional generasi muda, menuju Indonesia emas 2045.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-cyan-400 transition-colors duration-300">Home</a></li>
                            <li><a href="/about" className="hover:text-cyan-400 transition-colors duration-300">About</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Events</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Contact Us</h3>
                        <p className="text-gray-400 mb-2">Email: info@amerta.id</p>
                        <p className="text-gray-400 mb-2">Phone: +62 812 3456 7890</p>
                        <p className="text-gray-400">Location: Jakarta, Indonesia</p>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-2 space-y-1">
                        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Social Media</h3>
                        <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Instagram</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors duration-300">YouTube</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Facebook</a>
                    </div>

                </div>

                {/* Garis */}
                <div className="border-t border-gray-700 mb-6"></div>

                {/* Bagian bawah */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p className="mb-4 md:mb-0">&copy; 2025 Amerta. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Instagram</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors duration-300">YouTube</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Facebook</a>
                    </div>
                </div>

            </div>
        </motion.footer>
    );
};

export default Footer;
