import { Player } from './player'

const c = document.createElement('canvas')
const ctx = c.getContext('2d') as CanvasRenderingContext2D
const width = (c.width = 640)
const height = (c.height = 420)

document.body.appendChild(c)

const Main = (() => {
  const player = new Player(50, height)

  ctx?.fillRect(0, 0, width, height)
  player.render(ctx)
})()
