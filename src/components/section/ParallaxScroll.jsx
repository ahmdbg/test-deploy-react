"use client";
import { ParallaxScroll } from "../ui/ParallaxScroll";

export function ParallaxScrollDemo() {
    // Mengambil semua file gambar dari folder gallery
    const imageFiles = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,webp}', {
        eager: true,
        import: 'default'
    });

    // Mengkonversi object menjadi array URL gambar
    const images = Object.values(imageFiles);

    return <ParallaxScroll images={images} />;
}
