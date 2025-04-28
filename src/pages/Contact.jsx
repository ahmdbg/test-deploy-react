// File: client/src/pages/Contact.jsx
import { useState } from 'react';
import { NavbarDemo } from '../components/section/Navbar';
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
            <div className="min-h-screen flex items-center justify-center  text-white px-4 py-10">
                <div className="w-full max-w-2xl bg-[#11224042] rounded-xl shadow-lg p-8 space-y-6">
                    <h2 className="text-3xl font-bold text-center mb-6">Hubungi Kami</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                required
                                className="w-full p-3 rounded-lg bg-[#11224042] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">No Telepon / WhatsApp</label>
                            <input
                                type="text"
                                value={noTelp}
                                onChange={(e) => setNoTelp(e.target.value)}
                                required
                                className="w-full p-3 rounded-lg bg-[#11224042] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">Pesan</label>
                            <textarea
                                value={pesan}
                                onChange={(e) => setPesan(e.target.value)}
                                required
                                rows="5"
                                className="w-full p-3 rounded-lg bg-[#0a192f95] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition"
                        >
                            Kirim Pesan
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full max-w-5xl mx-auto mt-16 rounded-xl overflow-hidden shadow-lg">
                <iframe
                    title="Lokasi Event"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.955978465073!2d110.55913567400408!3d-7.47011359254153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6fce68241dd9%3A0xbee67409fa88e874!2sPPTQ%20Abi-Ummi!5e0!3m2!1sen!2sid!4v1745765010087!5m2!1sen!2sid"
                    width="1500"
                    height="500"
                    style={{ border: 0, filter: "grayscale(100%) contrast(120%) brightness(90%)" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='mb-32 rounded-xl'
                ></iframe>
            </div>

            <Footer />
        </>

    );
}

export default Contact;
