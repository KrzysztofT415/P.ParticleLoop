export class Perlin {
    constructor() {
        this.gradients = {}
        this.memory = {}
    }

    rand_vector(){
        let theta = Math.random() * 2 * Math.PI
        return {x: Math.cos(theta), y: Math.sin(theta)}
    }

    dot(x, y, vx, vy){
        let g_vector
        let d_vector = {x: x - vx, y: y - vy}
        if (this.gradients[[vx, vy]]){
            g_vector = this.gradients[[vx, vy]]
        } else {
            g_vector = this.rand_vector()
            this.gradients[[vx, vy]] = g_vector
        }
        return d_vector.x * g_vector.x + d_vector.y * g_vector.y
    }

    smoother_step(x){
        return 6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3
    }

    interpolate(x, a, b){
        return a + this.smoother_step(x) * (b - a)
    }

    get(x, y) {
        let xf = Math.floor(x)
        let yf = Math.floor(y)
        let tl = this.dot(x, y, xf, yf)
        let tr = this.dot(x, y, xf + 1, yf)
        let bl = this.dot(x, y, xf, yf + 1)
        let br = this.dot(x, y, xf + 1, yf + 1)
        let xt = this.interpolate(x - xf, tl, tr)
        let xb = this.interpolate(x - xf, bl, br)
        let v = this.interpolate(y - yf, xt, xb)
        this.memory[[x, y]] = v
        return v
    }
}