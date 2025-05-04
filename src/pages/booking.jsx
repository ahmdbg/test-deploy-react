// File: client/src/pages/Booking.jsx
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Booking() {
  const navigate = useNavigate();

  const [nama, setNama] = useState('');
  const [jk, setJk] = useState('');
  const [kelas, setKelas] = useState('');
  const [namaMurid, setNamaMurid] = useState('');
  const [muridList, setMuridList] = useState([]);
  const [status, setStatus] = useState('');
  const [noWa, setNoWa] = useState('');

  useEffect(() => {
    if (kelas) {
      fetch(`http://localhost:5000/api/murid/${kelas}`)
        .then((res) => res.json())
        .then((data) => setMuridList(data))
        .catch((err) => console.error(err));
    }
  }, [kelas]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        nama,
        jk,
        kelas: kelas.toLowerCase(), // Pastikan kelas dalam format lowercase
        nama_murid: namaMurid,
        status,
        no_wa: noWa
      };

      console.log('Sending data:', formData); // Untuk debugging

      const res = await fetch('http://localhost:5000/api/pengunjung', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      console.log('Response:', data); // Untuk debugging
      
      if (data.success) {
        navigate(`/konfirmasi/${data.id}`);
      } else {
        alert('Gagal menyimpan data: ' + (data.message || 'Unknown error'));
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Terjadi kesalahan saat mengirim data');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] to-[#112240] text-white px-4 py-10">
      <div className="max-w-2xl w-full bg-[#112240]/80 backdrop-blur rounded-2xl shadow-2xl p-8 border border-gray-700">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Form Pemesanan Tiket
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Nama Lengkap</label>
              <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} required
                className="w-full p-3 rounded-lg bg-[#0a192f]/80 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Jenis Kelamin</label>
              <select value={jk} onChange={(e) => setJk(e.target.value)} required
                className="w-full p-3 rounded-lg bg-[#0a192f]/80 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                <option value="">Pilih</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Kelas</label>
              <select value={kelas} onChange={(e) => setKelas(e.target.value)} required
                className="w-full p-3 rounded-lg bg-[#0a192f]/80 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                <option value="">Pilih Kelas</option>
                {['7a', '7b', '7c', '7d', '7e', '7f', '7g', '7h', '8a', '8b', '8c', '8d', '8e', '8f', '9a', '9b', '9c', '9d', '9e', '10a', '10b', '10c', '10d', '11a', '11b', '11c', '11d', '12a', '12b', '12c', '12d']
                  .map((kls) => (
                    <option key={kls} value={kls}>{kls.toUpperCase()}</option>
                  ))}
              </select>
            </div>
            {kelas && (
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Nama Murid</label>
                <select value={namaMurid} onChange={(e) => setNamaMurid(e.target.value)} required
                  className="w-full p-3 rounded-lg bg-[#0a192f]/80 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  <option value="">Pilih Murid</option>
                  {muridList.map((murid) => (
                    <option key={murid.id} value={murid.nama}>{murid.nama}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} required
                className="w-full p-3 rounded-lg bg-[#0a192f]/80 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                <option value="">Pilih Status</option>
                <option value="menginap">Menginap</option>
                <option value="tidak menginap">Tidak Menginap</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Nomor WhatsApp</label>
              <input type="text" value={noWa} onChange={(e) => setNoWa(e.target.value)} required
                className="w-full p-3 rounded-lg bg-[#0a192f]/80 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            Submit Tiket
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
