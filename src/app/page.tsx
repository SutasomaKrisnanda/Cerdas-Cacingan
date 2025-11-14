'use client';

import { useState, useTransition, Key } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import Scene1 from '@/components/scenes/Scene1';
import Scene2 from '@/components/scenes/Scene2';
import Scene3 from '@/components/scenes/Scene3';
import Scene4 from '@/components/scenes/Scene4';
import Scene5 from '@/components/scenes/Scene5';
import Scene6 from '@/components/scenes/Scene6';
import Scene7 from '@/components/scenes/Scene7';

export default function Home() {
  const [scene, setScene] = useState(1);
  const totalScenes = 7;
  const [isPending, startTransition] = useTransition();

  const setSceneWithTransition = (newScene: number | ((prev: number) => number)) => {
    startTransition(() => {
      setScene(newScene);
    });
  };

  const handleNext = () => {
    setSceneWithTransition((prev) => Math.min(prev + 1, totalScenes));
  };

  const handlePrev = () => {
    setSceneWithTransition((prev) => Math.max(prev - 1, 1));
  };

  const handleStart = () => setSceneWithTransition(2);
  const handleRestart = () => setSceneWithTransition(1);

  const renderScene = (scene: number) => {
    switch (scene) {
      case 1:
        return <Scene1 onStart={handleStart} />;
      case 2:
        return <Scene2 />;
      case 3:
        return <Scene3 />;
      case 4:
        return <Scene4 />;
      case 5:
        return <Scene5 />;
      case 6:
        return <Scene6 />;
      case 7:
        return <Scene7 onRestart={handleRestart} />;
      default:
        return <Scene1 onStart={handleStart} />;
    }
  };

  return (
    <main className="flex h-[100svh] w-screen flex-col items-center justify-center overflow-hidden bg-background p-4 md:p-8 relative">
      <div key={scene} className="w-full h-full flex items-center justify-center animate-fade-in">
        {renderScene(scene)}
      </div>

      {scene > 1 && scene < totalScenes && (
        <>
          <Button
            onClick={handlePrev}
            variant="ghost"
            size="icon"
            aria-label="Kembali"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full h-14 w-14 md:h-16 md:w-16 text-white bg-primary/80 hover:bg-primary shadow-lg"
          >
            <ArrowLeftCircle className="h-10 w-10 md:h-12 md:w-12" />
          </Button>
          <Button
            onClick={handleNext}
            variant="ghost"
            size="icon"
            aria-label="Lanjut"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full h-14 w-14 md:h-16 md:w-16 text-white bg-primary/80 hover:bg-primary shadow-lg"
          >
            <ArrowRightCircle className="h-10 w-10 md:h-12 md:w-12" />
          </Button>
        </>
      )}
    </main>
  );
}
