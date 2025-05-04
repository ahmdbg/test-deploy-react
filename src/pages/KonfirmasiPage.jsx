// File: client/src/pages/KonfirmasiPage.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function KonfirmasiPage() {
    const [clickCount, setClickCount] = useState(0);

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

            // Menggunakan format PDF A4 portrait
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            // Mendapatkan aspek rasio gambar
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = imgWidth / imgHeight;

            // Menghitung ukuran yang sesuai dengan margin
            const margin = 10; // margin 10mm
            const availableWidth = pageWidth - (2 * margin);
            const availableHeight = pageHeight - (2 * margin);

            // Menghitung ukuran akhir dengan mempertahankan aspek rasio
            let finalWidth = availableWidth;
            let finalHeight = finalWidth / ratio;

            // Jika tinggi melebihi halaman, sesuaikan berdasarkan tinggi
            if (finalHeight > availableHeight) {
                finalHeight = availableHeight;
                finalWidth = finalHeight * ratio;
            }

            // Menghitung posisi untuk centering
            const x = (pageWidth - finalWidth) / 2;
            const y = (pageHeight - finalHeight) / 2;

            pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
            pdf.save(`tiket_${data.nama}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    const updateStatusPakai = async () => {
        try {
            await fetch(`http://localhost:5000/api/pengunjung/${id}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status_pakai: 'sudah_dipakai' })
            });

            setData(prev => ({ ...prev, status_pakai: 'sudah_dipakai' }));
            alert('Status tiket berhasil diubah ke "sudah dipakai".');
        } catch (error) {
            console.error(error);
            alert('Gagal mengubah status tiket.');
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white px-4 py-10 flex flex-col items-center">
            <div
                onClick={() => {
                    const newCount = clickCount + 1;
                    setClickCount(newCount);
                    if (newCount >= 3 && data.status_pakai === 'belum_dipakai') {
                        updateStatusPakai();
                        setClickCount(0);
                    }
                }}
                style={{
                    backgroundColor: data.status_pakai === 'sudah_dipakai' ? '#22c55e' : '#f59e0b',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    marginBottom: '1rem',
                    transition: 'background-color 0.3s ease'
                }}
            >
                Status Tiket: {data.status_pakai === 'sudah_dipakai' ? '✅ Sudah Dipakai' : '⏳ Belum Dipakai'}
            </div>

            <h2 className="text-3xl font-bold mb-4">Konfirmasi Tiket</h2>
            <div id="tiket-pdf" style={{
                background: 'linear-gradient(to right, #1a1f35, #2a3652)',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                width: '100%',
                maxWidth: '28rem',
                position: 'relative',
                overflow: 'hidden',
                color: 'white'
            }}>
                {/* Ornamental elements */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '128px',
                    height: '128px',
                    background: '#fbbf24',
                    opacity: '0.1',
                    borderRadius: '50%',
                    transform: 'translate(-64px, -64px)'
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '96px',
                    height: '96px',
                    background: '#60a5fa',
                    opacity: '0.1',
                    borderRadius: '50%',
                    transform: 'translate(48px, -48px)'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '160px',
                    height: '160px',
                    background: '#34d399',
                    opacity: '0.1',
                    borderRadius: '50%',
                    transform: 'translate(80px, 80px)'
                }}></div>
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '20%',
                    width: '40px',
                    height: '40px',
                    background: '#f472b6',
                    opacity: '0.1',
                    borderRadius: '50%',
                }}></div>

                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    borderBottom: '1px solid #4B5563',
                    paddingBottom: '16px',
                    marginBottom: '24px'
                }}>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#fbbf24',
                        marginBottom: '8px'
                    }}>TICKET EVENT</h1>
                    <p style={{
                        fontSize: '14px',
                        color: '#9CA3AF'
                    }}>#{data.nomor_kursi}</p>
                </div>

                {/* Main Content */}
                <div style={{
                    position: 'relative',
                    zIndex: '10'
                }}>
                    <div style={{
                        background: '#0c1526',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            color: '#fbbf24',
                            width: '96px',
                            fontSize: '14px'
                        }}>Nama ortu</span>
                        <span style={{ flex: '1' }}>{data.nama}</span>
                    </div>

                    {/* Repeat similar styling for other fields */}
                    <div style={{
                        background: '#0c1526',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            color: '#fbbf24',
                            width: '96px',
                            fontSize: '14px'
                        }}>Nama Santri</span>
                        <span style={{ flex: '1' }}>{data.nama_murid}</span>
                    </div>


                    <div style={{
                        background: '#0c1526',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            color: '#fbbf24',
                            width: '96px',
                            fontSize: '14px'
                        }}>Kelas</span>
                        <span style={{ flex: '1' }}>{data.kelas}</span>
                    </div>


                    <div style={{
                        background: '#0c1526',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            color: '#fbbf24',
                            width: '96px',
                            fontSize: '14px'
                        }}>Status</span>
                        <span style={{ flex: '1' }}>{data.status}</span>
                    </div>
                    <div style={{
                        background: '#0c1526',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            color: '#fbbf24',
                            width: '96px',
                            fontSize: '14px'
                        }}>No WA</span>
                        <span style={{ flex: '1' }}>{data.no_wa}</span>
                    </div>

                </div>

                {/* Separator */}
                <div style={{
                    margin: '24px 0',
                    borderTop: '2px dashed #4B5563',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '-40px',
                        top: '-10px',
                        width: '20px',
                        height: '20px',
                        background: '#0a192f',
                        borderRadius: '50%'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        right: '-40px',
                        top: '-10px',
                        width: '20px',
                        height: '20px',
                        background: '#0a192f',
                        borderRadius: '50%'
                    }}></div>
                </div>

                {/* QR Code Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        background: 'white',
                        padding: '16px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}>
                        <QRCodeCanvas value={urlKonfirmasi} size={128} />
                        <p style={{
                            color: 'black',
                            marginTop: '8px',
                            fontSize: '12px',
                            textAlign: 'center',
                            fontWeight: '500'
                        }}>Scan untuk validasi tiket</p>
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    marginTop: '24px',
                    textAlign: 'center',
                    fontSize: '12px',
                    color: '#9CA3AF'
                }}>
                    <p>Tiket ini adalah tiket digital yang sah</p>
                    <p style={{ marginTop: '4px' }}>Mohon tunjukkan saat memasuki venue</p>
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

