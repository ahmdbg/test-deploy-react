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
      const res = await fetch('http://localhost:5000/api/pengunjung', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nama, jk, kelas, nama_murid: namaMurid, status, no_wa: noWa }),
      });
      const data = await res.json();
      if (data.success) {
        navigate(`/konfirmasi/${data.id}`); // pakai ID hasil insert
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] to-[#112240] text-white px-4 py-10">
      <div className="max-w-xl w-full bg-[#112240] rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Form Pemesanan Tiket</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} required
              className="w-full p-3 rounded-lg bg-[#0a192f] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Jenis Kelamin</label>
            <select value={jk} onChange={(e) => setJk(e.target.value)} required
              className="w-full p-3 rounded-lg bg-[#0a192f] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Pilih</option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Kelas</label>
            <select value={kelas} onChange={(e) => setKelas(e.target.value)} required
              className="w-full p-3 rounded-lg bg-[#0a192f] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Pilih Kelas</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          {kelas && (
            <div>
              <label className="block text-sm font-semibold mb-2">Nama Murid</label>
              <select value={namaMurid} onChange={(e) => setNamaMurid(e.target.value)} required
                className="w-full p-3 rounded-lg bg-[#0a192f] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Pilih Murid</option>
                {muridList.map((murid) => (
                  <option key={murid.id} value={murid.nama}>{murid.nama}</option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold mb-2">Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} required
              className="w-full p-3 rounded-lg bg-[#0a192f] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Pilih Status</option>
              <option value="menginap">Menginap</option>
              <option value="tidak menginap">Tidak Menginap</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Nomor WhatsApp</label>
            <input type="text" value={noWa} onChange={(e) => setNoWa(e.target.value)} required
              className="w-full p-3 rounded-lg bg-[#0a192f] text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold text-white transition"
            onClick={() => Navigate('/konfirmasi/:id')}
          >
            Submit Tiket
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
