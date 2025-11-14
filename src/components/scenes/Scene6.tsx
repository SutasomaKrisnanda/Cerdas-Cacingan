'use client';

import { Button } from "@/components/ui/button";
import { InfoModal } from "@/components/InfoModal";

const cerdasTips = [
    { letter: 'C', detail: "Cuci tangan pakai sabun sebelum makan dan setelah main." },
    { letter: 'E', detail: "Enyahkan kotoran. Selalu BAB di jamban/WC yang sehat. Jaga kebersihan air minum." },
    { letter: 'R', detail: "Rajin potong kuku (biar telur cacing tidak sembunyi!) dan mandi teratur." },
    { letter: 'D', detail: "Dukung gizi sehat. Makan makanan bergizi (sayur, buah, lauk) agar badan kuat melawan penyakit." },
    { letter: 'A', detail: "Ajak keluarga rutin minum obat cacing setiap 6 bulan sekali." },
    { letter: 'S', detail: "Selalu pakai alas kaki (sandal/sepatu) jika main di luar rumah, terutama di tanah." },
];

export default function Scene6() {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-4 w-full max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-md" style={{ WebkitTextStroke: '2px #3A306E' }}>
                Ayo Jadi Anak <span className="text-primary">CERDAS</span>!
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white mb-4">Klik setiap huruf untuk tahu caranya!</p>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                {cerdasTips.map((tip) => (
                    <InfoModal
                        key={tip.letter}
                        trigger={
                            <Button variant="accent" className="w-24 h-24 md:w-32 md:h-32 rounded-3xl text-5xl md:text-7xl font-black shadow-lg hover:scale-105 transition-transform">
                                {tip.letter}
                            </Button>
                        }
                        title={`Huruf '${tip.letter}' itu...`}
                    >
                        <p>{tip.detail}</p>
                    </InfoModal>
                ))}
            </div>
        </div>
    );
}
