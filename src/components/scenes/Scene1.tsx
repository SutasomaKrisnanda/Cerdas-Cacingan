'use client';

import { Button } from "@/components/ui/button";

interface Scene1Props {
    onStart: () => void;
}

export default function Scene1({ onStart }: Scene1Props) {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-8">
            <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg" style={{ WebkitTextStroke: '2px #3A306E' }}>
                Cegah Cacingan Dengan <span className="text-primary">CERDAS</span>!
            </h1>
            <div className="text-8xl md:text-9xl animate-bounce">
                🐛🚫✨
            </div>
            <Button onClick={onStart} size="lg" className="text-3xl font-bold h-16 px-10 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Mulai!
            </Button>
        </div>
    );
}
