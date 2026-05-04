export const vRipple = {
  mounted(el: HTMLElement, binding: { value: string }) {
    const color = binding.value || 'rgba(255,255,255,0.4)'

    el.style.position = 'relative'

    const container = document.createElement('span')
    container.style.position = 'absolute'
    container.style.inset = '0'
    container.style.overflow = 'hidden'
    container.style.borderRadius = 'inherit'
    container.style.pointerEvents = 'none'
    container.style.zIndex = '0'

    el.appendChild(container)

    el.addEventListener('pointerdown', (e: PointerEvent) => {
      const ripple = document.createElement('span')

      const rect = el.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)

      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.position = 'absolute'
      ripple.style.width = ripple.style.height = `${size}px`
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      ripple.style.borderRadius = '50%'
      ripple.style.background = color
      ripple.style.transform = 'scale(0)'
      ripple.style.animation = 'ripple 600ms ease-out'
      ripple.style.pointerEvents = 'none'

      container.appendChild(ripple)

      setTimeout(() => ripple.remove(), 600)
    })
  },
}
