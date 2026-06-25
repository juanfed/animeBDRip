// Anima la entrada de los elementos con la clase `.reveal` cuando entran en
// el viewport. Un único IntersectionObserver + MutationObserver cubre también
// el contenido que se monta de forma diferida (lazy routes), sin tener que
// añadir lógica en cada página.

export function initReveal() {
  if (typeof window === 'undefined') return

  const show = (el) => el.classList.add('reveal--visible')
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Sin soporte o con movimiento reducido: mostramos todo directamente.
  if (prefersReduced || !('IntersectionObserver' in window)) {
    const reveal = () => document.querySelectorAll('.reveal').forEach(show)
    reveal()
    new MutationObserver(reveal).observe(document.body, { childList: true, subtree: true })
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target)
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
  )

  const observeWithin = (root) => {
    if (root.nodeType !== 1) return
    if (root.matches?.('.reveal:not(.reveal--visible)')) io.observe(root)
    root.querySelectorAll?.('.reveal:not(.reveal--visible)').forEach((el) => io.observe(el))
  }

  observeWithin(document.documentElement)

  new MutationObserver((mutations) => {
    mutations.forEach((m) => m.addedNodes.forEach(observeWithin))
  }).observe(document.body, { childList: true, subtree: true })
}
