'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoModal } from "@/components/InfoModal";
import { Hand, Footprints, Bug } from "lucide-react";

const transmissionMethods = [
    {
        icon: <Hand className="h-16 w-16 text-primary" />,
        title: "Dari Tangan Kotor",
        modalTitle: "Tanganmu Penting!",
        modalContent: "Telur cacing yang kecil banget bisa menempel di tanganmu setelah main di tanah. Kalau tidak cuci tangan sebelum makan, telurnya bisa tertelan!"
    },
    {
        icon: <Footprints className="h-16 w-16 text-primary" />,
        title: "Dari Tanah",
        modalTitle: "Hati-hati di Tanah!",
        modalContent: "Beberapa jenis cacing (seperti cacing tambang) bisa masuk menembus kulit kakimu, lho! Makanya penting pakai sandal atau sepatu."
    },
    {
        icon: <Bug className="h-16 w-16 text-primary" />,
        title: "Dari Makanan/Minuman",
        modalTitle: "Jaga Jajananmu!",
        modalContent: "Makanan atau minuman yang tidak bersih atau dihinggapi lalat bisa mengandung telur cacing."
    }
];

export default function Scene3() {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-4 w-full max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-md" style={{ WebkitTextStroke: '2px #3A306E' }}>
                Bagaimana Cacing Masuk?
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white mb-4">Klik pada gambar untuk tahu caranya!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {transmissionMethods.map((method, index) => (
                    <InfoModal
                        key={index}
                        trigger={
                            <Card className="w-full cursor-pointer hover:bg-accent/50 hover:scale-105 transition-transform duration-300 border-4 border-white shadow-lg">
                                <CardContent className="p-6 flex flex-col items-center gap-4">
                                    {method.icon}
                                    <CardTitle className="text-xl font-bold text-foreground">{method.title}</CardTitle>
                                </CardContent>
                            </Card>
                        }
                        title={method.modalTitle}
                    >
                        <p>{method.modalContent}</p>
                    </InfoModal>
                ))}
            </div>
        </div>
    );
}
