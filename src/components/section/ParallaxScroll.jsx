"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ParallaxScrollDemo() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Preload images and create optimized URLs
        const loadImages = async () => {
            const imageFiles = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,webp}', {
                eager: true,
                import: 'default'
            });

            // Convert to array and optimize
            const imageUrls = Object.values(imageFiles);
            
            // Create Image objects to preload
            const imagePromises = imageUrls.map(url => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = () => resolve(url);
                    img.onerror = reject;
                });
            });

            try {
                // Load images in parallel
                const loadedImages = await Promise.all(imagePromises);
                setImages(loadedImages);
                setLoading(false);
            } catch (error) {
                console.error('Error loading images:', error);
                setLoading(false);
            }
        };

        loadImages();
    }, []);

    return (
        <section className="relative min-h-screen w-full py-20 overflow-hidden">
            {/* Background with gradient overlay */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&w=1000&q=75')",
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#025f92] via-white to-[#1b425c]">
                            Gallery Performance
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                        Jelajahi momen-momen tak terlupakan dari pertunjukan kami melalui galeri foto yang menampilkan keindahan seni dan budaya Indonesia.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl"
                >
                    {loading ? (
                        <div className="flex items-center justify-center min-h-[300px]">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {images.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative aspect-[4/3] overflow-hidden rounded-lg"
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
}
