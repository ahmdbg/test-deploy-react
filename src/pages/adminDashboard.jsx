// File: client/src/pages/AdminDashboard.jsx
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AdminDashboard() {
    const navigate = useNavigate();
    const [pengunjung, setPengunjung] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/pengunjung')
            .then((res) => res.json())
            .then((data) => {
                setPengunjung(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard Admin - Data Pengunjung</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition"
                >
                    Logout
                </button>
            </div>

            {loading ? (
                <p className="text-center text-lg">Loading data...</p>
            ) : (
                <div className="overflow-x-auto rounded-lg shadow-md bg-[#0a192f]">
                    <table className="min-w-full table-auto text-sm">
                        <thead>
                            <tr className="bg-blue-800 text-white">
                                <th className="p-4">No</th>
                                <th className="p-4">Nama Ortu/Wali</th>
                                <th className="p-4">JK</th>
                                <th className="p-4">Kelas</th>
                                <th className="p-4">Murid</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">No WA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pengunjung.map((p, idx) => (
                                <tr key={p.id} className="hover:bg-blue-900 border-b border-blue-700">
                                    <td className="p-4">{idx + 1}</td>
                                    <td className="p-4">{p.nama}</td>
                                    <td className="p-4">{p.jk}</td>
                                    <td className="p-4">{p.kelas}</td>
                                    <td className="p-4">{p.nama_murid}</td>
                                    <td className="p-4">{p.status}</td>
                                    <td className="p-4">{p.no_wa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;
