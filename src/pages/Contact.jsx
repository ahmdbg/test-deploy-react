// File: client/src/pages/Contact.jsx
import { useState } from 'react';
import NavbarDemo from '../components/section/Navbar';
import { WavyBackgroundDemo } from '../components/section/wavy-bg';
import Footer from '../components/section/Footer';

function Contact() {
    const [nama, setNama] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [pesan, setPesan] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Halo, saya ${nama}.\nNomor: ${noTelp}\nPesan: ${pesan}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/6285640054840?text=${encodedText}`, '_blank');
    };

    return (
        <>
            <NavbarDemo />
            <WavyBackgroundDemo />
            <div className="relative min-h-screen flex items-center justify-center py-20">
                {/* Background with gradient overlay */}
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.3)"
                    }}
                />

                {/* Gradient Overlay */}
                <div 
                    className="absolute inset-0 z-1"
                    style={{
                        background: "linear-gradient(45deg, rgba(2,95,146,0.2), rgba(27,66,92,0.2), rgba(0,0,0,0.2))"
                    }}
                />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] via-white to-[#1b425c]">
                                Hubungi Kami
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                            Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut
                        </p>
                    </div>

                    <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-white/90">Nama Lengkap</label>
                                <input
                                    type="text"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    required
                                    className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/10 focus:ring-2 focus:ring-[#025f92] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-white/90">No Telepon / WhatsApp</label>
                                <input
                                    type="text"
                                    value={noTelp}
                                    onChange={(e) => setNoTelp(e.target.value)}
                                    required
                                    className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/10 focus:ring-2 focus:ring-[#025f92] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-white/90">Pesan</label>
                                <textarea
                                    value={pesan}
                                    onChange={(e) => setPesan(e.target.value)}
                                    required
                                    rows="5"
                                    className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/10 focus:ring-2 focus:ring-[#025f92] focus:outline-none resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-[#025f92] to-[#1b425c] hover:opacity-90 rounded-lg font-bold text-white transition"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    {/* Map Section */}
                    <div className="mt-32 backdrop-blur-sm bg-white/5 p-4 rounded-2xl">
                        <iframe
                            title="Lokasi Event"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.955978465073!2d110.55913567400408!3d-7.47011359254153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6fce68241dd9%3A0xbee67409fa88e874!2sPPTQ%20Abi-Ummi!5e0!3m2!1sen!2sid!4v1745765010087!5m2!1sen!2sid"
                            width="100%"
                            height="500"
                            style={{ 
                                border: 0, 
                                filter: "grayscale(100%) invert(92%) contrast(100%) brightness(40%)",
                                borderRadius: "1rem"
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl"
                        ></iframe>
                    </div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
            </div>
            <Footer />
        </>
    );
}

export default Contact;
