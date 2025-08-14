import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { historyGallery } from "@/data/gallery";

export const HistoryGallery = () => {
  return (
    <section aria-labelledby="history-gallery-heading" className="w-full">
      <header className="mb-4">
        <h3 id="history-gallery-heading" className="text-2xl font-semibold">Galería histórica de Chile</h3>
        <p className="text-sm text-muted-foreground">Imágenes ilustrativas de lugares, símbolos y momentos clave.</p>
      </header>

      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {historyGallery.map((item) => (
            <CarouselItem key={item.id} className="basis-full sm:basis-3/4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <figure className="relative">
                  <img
                    src={item.imageUrl}
                    alt={`${item.title}${item.year ? ` (${item.year})` : ''}`}
                    loading="lazy"
                    className="w-full h-60 sm:h-72 md:h-64 object-cover"
                  />
                  <figcaption className="p-4">
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Fuente: <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{item.sourceName}</a>
                    </p>
                  </figcaption>
                </figure>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3 sm:-left-8" aria-label="Anterior" />
        <CarouselNext className="-right-3 sm:-right-8" aria-label="Siguiente" />
      </Carousel>
    </section>
  )
}

export default HistoryGallery;
