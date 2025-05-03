import { useState } from 'react';

const SponsorCarousel = () => {
    const sponsors = [
        { id: 1, name: "Google", logo: "/path/to/google-logo.png" },
        { id: 2, name: "Microsoft", logo: "/path/to/microsoft-logo.png" },
        { id: 3, name: "Amazon", logo: "/path/to/amazon-logo.png" },
        { id: 4, name: "Facebook", logo: "/path/to/facebook-logo.png" },
        { id: 5, name: "Apple", logo: "/path/to/apple-logo.png" },
        { id: 6, name: "Samsung", logo: "/path/to/samsung-logo.png" },
        { id: 7, name: "Intel", logo: "/path/to/intel-logo.png" },
        { id: 8, name: "Adobe", logo: "/path/to/adobe-logo.png" },
        { id: 9, name: "Cisco", logo: "/path/to/cisco-logo.png" },
        { id: 10, name: "IBM", logo: "/path/to/ibm-logo.png" },
    ];

    // Duplicate sponsors untuk efek loop seamless
    const duplicatedSponsors = [...sponsors, ...sponsors];

    const [isPaused, setIsPaused] = useState(false);

    return (
        <div
            className="relative w-full overflow-hidden py-12 bg-[#1a202c00] text-white"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="flex">
                <div
                    className={`flex shrink-0 min-w-full items-center justify-around ${!isPaused ? 'animate-marquee' : ''
                        }`}
                    style={{ '--sponsor-gap': '4rem' }}
                >
                    {duplicatedSponsors.map((sponsor, index) => (
                        <div
                            key={`${sponsor.id}-${index}`}
                            className="flex items-center justify-center grayscale hover:grayscale-0 
                transition-all duration-300 opacity-70 hover:opacity-100"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-12 w-auto object-contain max-w-[140px] md:max-w-[180px]"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - var(--sponsor-gap))); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default SponsorCarousel;