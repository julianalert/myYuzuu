'use client'

import { clsx } from 'clsx/lite'
import { useState, useRef, useEffect } from 'react'
import type { ComponentProps } from 'react'

interface ImagePair {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

interface BeforeAfterSliderProps extends Omit<ComponentProps<'div'>, 'children'> {
  examples: ImagePair[]
}

export function BeforeAfterSlider({ examples, className, ...props }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isVertical, setIsVertical] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const currentExample = examples[currentIndex]

  // Check if image is vertical (portrait)
  useEffect(() => {
    const checkImageOrientation = () => {
      if (imageRef.current) {
        const img = imageRef.current
        const isPortrait = img.naturalHeight > img.naturalWidth
        setIsVertical(isPortrait)
      }
    }

    const img = new Image()
    img.onload = () => {
      const isPortrait = img.height > img.width
      setIsVertical(isPortrait)
    }
    img.src = currentExample.afterImage
  }, [currentExample.afterImage])

  // Reset slider position when switching examples
  useEffect(() => {
    setSliderPosition(50)
  }, [currentIndex])

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current || !isDragging) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
    setSliderPosition(clampedPercentage)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'ew-resize'
      document.body.style.userSelect = 'none'

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
      }
    }
  }, [isDragging])

  const handleTouchMove = (e: TouchEvent) => {
    if (!containerRef.current || !isDragging) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
    setSliderPosition(clampedPercentage)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)

      return () => {
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isDragging])

  return (
    <div className={clsx('relative w-full', className)} {...props}>
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg pt-0"
      >
        {/* After Image (background) */}
        <div className="relative w-full">
          <img
            ref={imageRef}
            src={currentExample.afterImage}
            alt={currentExample.afterLabel || 'After'}
            className="block w-full h-auto"
            draggable={false}
            onLoad={() => {
              if (imageRef.current) {
                const img = imageRef.current
                const isPortrait = img.naturalHeight > img.naturalWidth
                setIsVertical(isPortrait)
              }
            }}
          />
        </div>

        {/* Before Image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div
            className={clsx(
              'w-full h-full',
              currentExample.beforeImage.includes('noomiBefore') && 'bg-white'
            )}
          >
            <img
              src={currentExample.beforeImage}
              alt={currentExample.beforeLabel || 'Before'}
              className="block w-full h-auto"
              draggable={false}
            />
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div
            className={clsx(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg border-2 border-mist-200 flex items-center justify-center cursor-ew-resize',
              isVertical ? 'w-8 h-8' : 'w-12 h-12'
            )}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="flex gap-1">
              <div className={clsx('w-0.5 bg-mist-400', isVertical ? 'h-3' : 'h-4')}></div>
              <div className={clsx('w-0.5 bg-mist-400', isVertical ? 'h-3' : 'h-4')}></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 text-white text-sm font-medium rounded backdrop-blur-sm">
          {currentExample.beforeLabel || 'Before'}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 text-white text-sm font-medium rounded backdrop-blur-sm">
          {currentExample.afterLabel || 'After'}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4 mb-4">
        {examples.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={clsx(
              'w-2.5 h-2.5 rounded-full transition-all duration-200',
              index === currentIndex
                ? 'bg-mist-950 dark:bg-white w-8'
                : 'bg-mist-400 hover:bg-mist-600 dark:bg-mist-600 dark:hover:bg-mist-400'
            )}
            aria-label={`View example ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
