export class Player {
  width = 20
  height = 20
  color = 'red'
  
  constructor(public x = 0, public y = 0) {}

  render(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.fillStyle = this.color
    ctx.translate(this.x, this.y)
    ctx.fillRect(0, -this.height, this.width, this.height)
    ctx.restore()
  }
}