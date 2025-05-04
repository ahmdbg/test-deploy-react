import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialCarousel = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO Company A",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "CTO Tech Corp",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: 3,
            name: "Bob Johnson",
            role: "Design Lead",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 4,
            name: "Bob Johnson",
            role: "Design Lead",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, testimonials.length]);

    return (
        <div
            className="relative w-full overflow-hidden min-h-[400px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {testimonials.map((testimonial) => (
                    <motion.div
                        key={testimonial.id}
                        className="w-full flex-shrink-0 p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="max-w-2xl mx-auto backdrop-blur-sm bg-white/10 rounded-xl 
                            border border-white/20 p-8 shadow-lg hover:shadow-xl 
                            transition-all duration-300">
                            <p className="text-white/80 text-lg italic mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            <div className="text-right">
                                <h3 className="text-xl font-semibold bg-clip-text text-transparent 
                                    bg-gradient-to-r from-[#025f92] to-[#1b425c]">
                                    {testimonial.name}
                                </h3>
                                <p className="text-white/60">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 
                            ${index === activeIndex 
                                ? 'bg-gradient-to-r from-[#025f92] to-[#1b425c] scale-125' 
                                : 'bg-white/20 hover:bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;