'use client';

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Frown, BatteryLow, Annoyed, Apple, Ban } from "lucide-react";
import type { ReactNode } from "react";

const symptoms: { icon: ReactNode; text: string }[] = [
    { icon: <Frown className="h-12 w-12 text-primary" />, text: "Perut Sering Sakit / Kembung" },
    { icon: <BatteryLow className="h-12 w-12 text-primary" />, text: "Badan Lemas & Gampang Capek" },
    { icon: <Annoyed className="h-12 w-12 text-primary" />, text: "Gatal di Bagian Pantat" },
    { icon: <div className="relative h-12 w-12"><Apple className="h-12 w-12 text-primary/50" /><Ban className="h-16 w-16 text-destructive absolute -top-2 -left-2" /></div>, text: "Tidak Nafsu Makan" },
];

export default function Scene5() {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-4 w-full max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-md" style={{ WebkitTextStroke: '2px #3A306E' }}>
                Apa yang Kamu Rasakan?
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white mb-4">Kalau kamu cacingan, kamu mungkin merasa...</p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                {symptoms.map((symptom, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm border-4 border-white shadow-lg">
                        <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center gap-3 h-full">
                            {symptom.icon}
                            <p className="text-base md:text-xl font-bold text-foreground">{symptom.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
