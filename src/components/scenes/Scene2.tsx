'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InfoModal } from "@/components/InfoModal";
import { AlertTriangle, Sparkles } from "lucide-react";

export default function Scene2() {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-6 w-full max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-md" style={{ WebkitTextStroke: '2px #3A306E' }}>
                Apa itu Cacingan?
            </h2>
            <Card className="bg-white/80 backdrop-blur-sm border-4 border-white">
                <CardContent className="p-6">
                    <p className="text-lg md:text-2xl font-medium text-foreground">
                        Cacingan adalah infeksi cacing parasit yang nakal dan suka tinggal di dalam usus manusia.
                    </p>
                </CardContent>
            </Card>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <InfoModal
                    trigger={
                        <Button variant="accent" size="lg" className="rounded-full font-bold text-xl h-16 px-8 shadow-md hover:scale-105 transition-transform">
                            <AlertTriangle className="mr-2 h-6 w-6" /> Kenapa Berbahaya?
                        </Button>
                    }
                    title="Bahaya Cacingan!"
                >
                    <p>
                        Bahaya, lho! Cacingan bisa bikin perut sakit, badan jadi lemas, susah konsentrasi belajar, dan berat badan susah naik.
                    </p>
                </InfoModal>

                <InfoModal
                    trigger={
                        <Button variant="accent" size="lg" className="rounded-full font-bold text-xl h-16 px-8 shadow-md hover:scale-105 transition-transform">
                            <Sparkles className="mr-2 h-6 w-6" /> Fakta Keren!
                        </Button>
                    }
                    title="Tahukah Kamu?"
                >
                    <p>
                        Sekitar <strong>1.5 MILIAR</strong> orang di dunia (itu banyak banget!) kena cacingan. Di Indonesia, lebih dari <strong>20%</strong> anak-anak berisiko kena infeksi ini.
                    </p>
                </InfoModal>
            </div>
        </div>
    );
}
