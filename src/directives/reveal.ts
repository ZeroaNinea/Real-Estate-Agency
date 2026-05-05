export const vReveal = {
  mounted(el: HTMLElement) {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'all 0.6s ease'

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
        observer.unobserve(el)
      }
    })

    observer.observe(el)
  },
}
