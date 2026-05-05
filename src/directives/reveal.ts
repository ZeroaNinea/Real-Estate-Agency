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
  mounted(el: HTMLElement, binding: { value: 'top' | 'bottom' | 'left' | 'right' }) {
    const animationDirection = binding.value || 'top'

    el.style.opacity = '0'
    el.style.transform = directionToCss(animationDirection)
    el.style.transition = 'all 0.6s ease'

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        el.style.transform = 'translateX(0)'
        observer.unobserve(el)
      }
    })

    observer.observe(el)
  },
}
