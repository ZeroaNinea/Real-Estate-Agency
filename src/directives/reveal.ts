import { type RevealOptions } from '@/types/reveal-options.alias'

function directionToCss(direction: 'top' | 'bottom' | 'left' | 'right') {
  switch (direction) {
    case 'top':
      return 'translateY(-20px)'
    case 'bottom':
      return 'translateY(20px)'
    case 'left':
      return 'translateX(-20px)'
    case 'right':
      return 'translateX(20px)'
  }
}

export const vReveal = {
  mounted(el: HTMLElement, binding: { value: RevealOptions }) {
    const { direction = 'top', delay = 0 } = binding.value || {}

    el.style.opacity = '0.1'
    el.style.filter = 'blur(2px)'
    el.style.transform = directionToCss(direction)
    el.style.transition = 'all 0.6s ease'

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = '1'
          el.style.filter = 'blur(0)'
          el.style.transform = 'translate(0, 0)'
        }, delay)

        observer.unobserve(el)
      }
    })

    observer.observe(el)
  },
}
