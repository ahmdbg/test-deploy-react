import { useState } from 'react';
import { motion } from 'framer-motion';

const ShowGrid = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const shows = [
        {
            id: 1,
            title: "Magic Symphony",
            image: "https://unsplash.com/photos/a-person-works-on-a-laptop-by-a-window-TbSfPIhtfbg",
            description: "Orchestra klasik dengan sentuhan modern...",
            date: "25 Agustus 2024",
            venue: "Grand Concert Hall",
            duration: "2 Jam"
        },
        {
            id: 2,
            title: "Magic Symphony",
            image: "https://via.placeholder.com/400x300",
            description: "Orchestra klasik dengan sentuhan modern...",
            date: "25 Agustus 2024",
            venue: "Grand Concert Hall",
            duration: "2 Jam"
        },
        {
            id: 3,
            title: "Magic Symphony",
            image: "https://via.placeholder.com/400x300",
            description: "Orchestra klasik dengan sentuhan modern...",
            date: "25 Agustus 2024",
            venue: "Grand Concert Hall",
            duration: "2 Jam"
        },
        {
            id: 4,
            title: "Magic Symphony",
            image: "https://via.placeholder.com/400x300",
            description: "Orchestra klasik dengan sentuhan modern...",
            date: "25 Agustus 2024",
            venue: "Grand Concert Hall",
            duration: "2 Jam"
        },
        // Tambahkan data show lainnya
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
                                        <div className="flex items-center text-gray-600">
                                            <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-2.5 py-0.5 rounded">
                                                {show.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Back Card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-4xl shadow-xl p-6 rotate-y-180 backface-hidden">
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">{show.title}</h3>
                                            <p className="text-gray-200 mb-4">{show.description}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <span className="material-icons-outlined mr-2">calendar_today</span>
                                                <span>{show.date}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="material-icons-outlined mr-2">location_on</span>
                                                <span>{show.venue}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="material-icons-outlined mr-2">schedule</span>
                                                <span>{show.duration}</span>
                                            </div>
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