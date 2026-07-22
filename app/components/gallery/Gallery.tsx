import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GallerySection = {
  type?: string;
  images: GalleryImage[];
};

const Gallery = ({ sections }: { sections: GallerySection[] }) => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl font-heading">
            <span className="relative z-1">
              Explore our
              <span
                className="bg-brand absolute bottom-1 left-0 -z-1 h-px w-full"
                aria-hidden="true"
              ></span>
            </span>{" "}
            Gallery
          </h1>
          <p className="text-muted-foreground text-xl">
            See VR-powered learning in action at VRFuture.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={cn({
                "grid grid-cols-2 gap-6": section.type === "grid",
              })}
            >
              {section.images.map((image, imageIndex) => (
                <Image
                  key={imageIndex}
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
