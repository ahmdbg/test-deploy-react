import { useState, useEffect } from 'react';

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
        }, 5000); // Ganti slide setiap 5 detik

        return () => clearInterval(interval);
    }, [isPaused, testimonials.length]);

    // Navigation dots
    const goToIndex = (index) => {
        setActiveIndex(index);
    };

    return (
        <div
            className="relative w-full overflow-hidden h-96"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="w-full flex-shrink-0 p-8"
                    >
                        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                            <p className="text-gray-600 text-lg italic mb-6">"{testimonial.text}"</p>
                            <div className="text-right">
                                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                                <p className="text-gray-600">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;