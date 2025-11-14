'use client';

import { Button } from "@/components/ui/button";

interface Scene7Props {
    onRestart: () => void;
}

export default function Scene7({ onRestart }: Scene7Props) {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-8 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg" style={{ WebkitTextStroke: '2px #3A306E' }}>
                Kamu Hebat! ✨
            </h1>
            <p className="text-xl md:text-3xl font-semibold text-white bg-primary/80 px-6 py-4 rounded-2xl shadow-lg">
                Sekarang kamu sudah tahu cara jadi anak CERDAS bebas cacingan! Ingat, badan bersih bikin kita sehat dan ceria!
            </p>
            <Button onClick={onRestart} size="lg" className="text-2xl font-bold h-16 px-10 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Ulangi Lagi?
            </Button>
        </div>
    );
}
