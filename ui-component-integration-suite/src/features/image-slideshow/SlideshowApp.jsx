import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  "https://picsum.photos/id/10/800/400",
  "https://picsum.photos/id/20/800/400",
  "https://picsum.photos/id/30/800/400",
];

export default function SlideshowApp() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % IMAGES.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <Card className="overflow-hidden group relative max-w-2xl mx-auto border-none shadow-2xl">
      <CardContent className="p-0">
        <img
          src={IMAGES[index]}
          alt="Slideshow"
          className="w-full h-64 object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="secondary" size="icon" onClick={prev}>
            <ChevronLeft />
          </Button>
          <Button variant="secondary" size="icon" onClick={next}>
            <ChevronRight />
          </Button>
        </div>
        <div className="p-4 flex justify-center gap-2">
          {IMAGES.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-8 rounded-full transition-colors ${
                i === index ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
