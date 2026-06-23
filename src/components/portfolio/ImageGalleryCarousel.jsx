import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageGalleryCarousel({ images, title }) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % images.length)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)

  return (
    <div>
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === index ? 'w-6 h-1.5 bg-[#7c5cff]' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
