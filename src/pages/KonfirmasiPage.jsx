// File: client/src/pages/KonfirmasiPage.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function KonfirmasiPage() {
    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/pengunjung/${id}`)
            .then(res => res.json())
            .then(setData)
            .catch(err => console.error(err));
            
    }, [id]);

    if (!data) return <p className="text-center text-white">Loading...</p>;

    const urlKonfirmasi = `${window.location.origin}/konfirmasi/${id}`;

    const handleDownload = async () => {
        const ticketEl = document.getElementById('tiket-pdf');
        if (!ticketEl) {
            console.error('Element with id "tiket-pdf" not found');
            return;
        }
        try {
            const canvas = await html2canvas(ticketEl);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`tiket_${data.nama}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white px-4 py-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">Konfirmasi Tiket</h2>
            <div id="tiket-pdf" className="bg-[#0a192f] p-6 rounded-lg shadow-md w-full max-w-md space-y-3">
                <p><strong>Nama:</strong> {data.nama}</p>
                <p><strong>Kelas:</strong> {data.kelas}</p>
                <p><strong>Status:</strong> {data.status}</p>
                <p><strong>WhatsApp:</strong> {data.no_wa}</p>
                <p><strong>Nomor Kursi:</strong> {data.nomor_kursi}</p>

                <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
                    <QRCodeCanvas value={urlKonfirmasi} size={128} />
                    <p className="text-black mt-2 text-sm text-center">Scan untuk validasi tiket</p>
                </div>
            </div>

            <button
                onClick={handleDownload}
                className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg"
            >
                Unduh Tiket
            </button>
        </div>
    );
}

export default KonfirmasiPage;

