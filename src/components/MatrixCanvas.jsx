import { useEffect, useRef } from 'react'
import styles from './MatrixCanvas.module.css'

export default function MatrixCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const fontSize = 16
    const alphabet =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const colors = ['#a855f7', '#6366f1', '#c084fc', '#818cf8']
    let width = 0
    let height = 0
    let columns = 0
    let rainDrops = []
    let animationFrame = 0
    let frameTick = 0
    const MOVE_INTERVAL = 2

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      columns = Math.floor(width / fontSize)
      rainDrops = Array.from({ length: columns }, () => 1)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      frameTick++
      const moveDrops = frameTick % MOVE_INTERVAL === 0

      for (let i = 0; i < rainDrops.length; i += 1) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (moveDrops) {
          if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
            rainDrops[i] = 0
          }
          rainDrops[i] += 1
        }
      }

      animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas className={styles.canvas} ref={canvasRef} aria-hidden="true" />
}
