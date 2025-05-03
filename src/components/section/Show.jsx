import { useState } from 'react';
import { motion } from 'framer-motion';

const ShowGrid = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const shows = [
        {
            id: 1,
            title: "Hadrah dan Nasyid",
            image: "public/show/image-14.webp",
            description: "Pertunjukan religi yang memadukan tabuhan hadrah dengan nyanyian islami, menghadirkan nuansa spiritual dalam setiap irama dan lantunan indahnya."
        },
        {
            id: 2,
            title: "Medley Tari Tradisional",
            image: "public/show/image-1.webp",
            description: "Rangkaian tarian daerah yang dipentaskan secara berurutan, menampilkan keberagaman budaya nusantara dalam satu pertunjukan yang memukau."
        },
        {
            id: 3,
            title: "Pantomim",
            image: "public/show/image-2.webp",
            description: "Seni pertunjukan tanpa dialog yang mengandalkan bahasa tubuh dan ekspresi wajah untuk menyampaikan cerita dengan cara unik."
        },
        {
            id: 4,
            title: "Drama dan Teater",
            image: "public/show/image-3.webp",
            description: "Pertunjukan seni peran yang menghadirkan cerita kehidupan melalui dialog dan akting, mengajak penonton menyelami berbagai emosi."
        },
        {
            id: 5,
            title: "Tari Perang",
            image: "public/show/image-4.webp",
            description: "Tarian yang menggambarkan semangat perjuangan dan keberanian para prajurit dalam medan perang melalui gerakan dinamis."
        },
        {
            id: 6,
            title: "Variasi PBB",
            image: "public/show/image-5.webp",
            description: "Demonstrasi baris-berbaris yang dikemas dengan formasi unik dan gerakan terkoordinasi, menunjukkan kedisiplinan dan kekompakan tim."
        },
        {
            id: 7,
            title: "Syarhil",
            image: "public/show/image-6.webp",
            description: "Penampilan dakwah yang memadukan tilawah dengan penjelasan ayat Al-Quran, disampaikan dengan gaya yang menarik dan inspiratif."
        },
        {
            id: 8,
            title: "Tari Randai",
            image: "public/show/image-7.webp",
            description: "Tarian tradisional Minangkabau yang menggabungkan unsur silat dan cerita rakyat dalam pertunjukan yang energik dan menghibur."
        },
        {
            id: 9,
            title: "Tari Pabat Pibui",
            image: "public/show/image-8.webp",
            description: "Tarian etnik yang menceritakan keindahan budaya lokal melalui gerakan dan kostum warna-warni yang memukau penonton."
        },
        {
            id: 10,
            title: "Beauty of Java",
            image: "public/show/image-9.webp",
            description: "Tarian yang menampilkan keanggunan budaya Jawa melalui gerakan lemah gemulai dan filosofi mendalam tentang kehidupan."
        },
        {
            id: 11,
            title: "Tari Pakarena Organza",
            image: "public/show/image-10.webp",
            description: "Perpaduan tarian klasik Sulawesi dengan sentuhan modern, menghadirkan keindahan gerak yang anggun dan memesona."
        },
        {
            id: 12,
            title: "Spirit of Papua",
            image: "public/show/image-11.webp",
            description: "Pertunjukan yang mengangkat kekayaan budaya Papua melalui tarian dinamis dan musik tradisional yang penuh semangat."
        },
        {
            id: 13,
            title: "Drama Musikal",
            image: "public/show/image-12.webp",
            description: "Pertunjukan yang memadukan cerita, musik, dan tarian dalam satu kesatuan, menciptakan pengalaman teater yang mengesankan."
        },
        {
            id: 14,
            title: "Puncak Gelora",
            image: "public/show/image-13.webp",
            description: "Penampilan spektakuler yang menyatukan berbagai elemen seni pertunjukan dalam sebuah klimaks yang memukau dan berkesan."
        }
    ];
    const handleCardClick = (id) => {
        setFlippedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="container mx-auto px-4 py-12 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {shows.map((show) => (
                    <motion.div
                        key={show.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-4xl"
                    >
                        <div
                            className="relative h-96 cursor-pointer perspective-1000 bg-black rounded-4xl"
                            onClick={() => handleCardClick(show.id)}
                        >
                            {/* Card Container */}
                            <div className={`
                relative w-full h-full duration-300 preserve-3d
                ${flippedCards[show.id] ? 'rotate-y-180' : ''}
              `}>
                                {/* Front Card */}
                                <div className="absolute inset-0 bg-black rounded-4xl shadow-xl overflow-hidden backface-hidden">
                                    <img
                                        src={show.image}
                                        alt={show.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                            {show.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Back Card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-4xl shadow-xl p-6 rotate-y-180 backface-hidden">
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">{show.title}</h3>
                                            <p className="text-gray-200 mb-4">{show.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .duration-300 {
          transition-duration: 0.3s;
        }
      `}</style>
        </div>
    );
};

export default ShowGrid;