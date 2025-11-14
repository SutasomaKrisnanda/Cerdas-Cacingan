'use client';

import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { InfoModal } from "@/components/InfoModal";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const roundwormImage = PlaceHolderImages.find(img => img.id === 'roundworm');
const whipwormImage = PlaceHolderImages.find(img => img.id === 'whipworm');
const hookwormImage = PlaceHolderImages.find(img => img.id === 'hookworm');


const wormTypes = [
    {
        image: roundwormImage,
        name: "Cacing Gelang (Ascaris)",
        modalTitle: "Si Cacing Gelang",
        modalContent: "Ini cacing yang paling umum. Bentuknya seperti gelang dan bisa tumbuh besar di dalam usus."
    },
    {
        image: whipwormImage,
        name: "Cacing Cambuk (Trichuris)",
        modalTitle: "Si Cacing Cambuk",
        modalContent: "Bentuknya unik seperti cambuk. Cacing ini hidup di usus besar dan bisa bikin sakit perut hebat."
    },
    {
        image: hookwormImage,
        name: "Cacing Tambang (Ancylostoma)",
        modalTitle: "Si Cacing Tambang",
        modalContent: "Cacing ini yang bisa masuk lewat kulit kaki! Mereka 'mengait' di usus dan menyedot darah."
    }
];

export default function Scene4() {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-4 w-full max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-md" style={{ WebkitTextStroke: '2px #3A306E' }}>
                Kenali Musuh-Musuhnya!
            </h2>
            <p className="text-xl md:text-2xl font-bold text-white mb-4">Klik untuk melihat info cacing!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {wormTypes.map((worm, index) => (
                    <InfoModal
                        key={index}
                        trigger={
                            <Card className="w-full cursor-pointer hover:bg-accent/50 hover:scale-105 transition-transform duration-300 border-4 border-white shadow-lg h-full">
                                <CardContent className="p-6 flex flex-col items-center justify-start gap-4 h-full">
                                    {worm.image && (
                                        <Image
                                            src={worm.image.imageUrl}
                                            alt={worm.name}
                                            width={200}
                                            height={200}
                                            className="rounded-lg object-cover aspect-square"
                                            data-ai-hint={worm.image.imageHint}
                                        />
                                    )}
                                    <CardTitle className="text-xl font-bold text-foreground mt-auto">{worm.name}</CardTitle>
                                </CardContent>
                            </Card>
                        }
                        title={worm.modalTitle}
                    >
                        <p>{worm.modalContent}</p>
                    </InfoModal>
                ))}
            </div>
        </div>
    );
}
