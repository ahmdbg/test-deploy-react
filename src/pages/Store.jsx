// File: client/src/pages/Store.jsx
import { useEffect, useState } from 'react';
import NavbarDemo from '../components/section/Navbar';
import Footer from '../components/section/Footer';
import { AuroraBackgroundDemo } from '../components/section/AuroraBg';
import { BackgroundGradient } from '../components/ui/background-gradien';
// import { IconAppWindow } from '@tabler/icons-react';

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Dummy data produk sementara
    setProducts([
      { id: 1, name: 'Kaos Event', price: 120000, image: '/images/kaos.jpg', description: 'Kaos event untuk semua acara.' },
      { id: 2, name: 'Topi Eksklusif', price: 80000, image: '/images/topi.jpg', description: 'Topi yang menawan untuk acara.' },
      { id: 3, name: 'Tumbler Limited', price: 100000, image: '/images/tumbler.jpg', description: 'Tumbler yang menawan untuk acara.'  },
      { id: 4, name: 'Goodie Bag', price: 50000, image: '/images/goodie.jpg' , description: 'Goodie bag untuk acara.'  },
      { id: 5, name: 'Goodie Bag', price: 50000, image: '/images/goodie.jpg' , description: 'Goodie bag untuk acara.'  },
    ]);
  }, []);

  return (
    <>
      <NavbarDemo />
      <div className="min-h-screen bg-gradient-to-br bg-black text-white">
        {/* Hero Section */}
        <AuroraBackgroundDemo />
        {/* Pernak-pernik tambahan */}
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Spesial Untuk Kamu</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Produk eksklusif yang hanya tersedia selama event berlangsung! Dapatkan segera dan rasakan semangat Nusantara!
          </p>
        </section>

        {/* Produk List */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <img
                  src={product.image}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {product.name}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {product.description}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    {product.price}
                  </span>
                </button>
              </BackgroundGradient>))}
          </div>
        </section>

      </div>
      <Footer />
    </>

  );
}

export default Store;
