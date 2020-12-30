import {Perlin} from "./Perlin.js"
import {Particle} from "./Particle.js"

let canvas = document.getElementById('particles')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ctx = canvas.getContext('2d')

let particles = new Array(Math.floor(canvas.width * canvas.height * 0.0001))
let type = Math.floor(Math.random() * 2)
for (let i = 0; i < particles.length; i++) {
    particles[i] = new Particle(canvas.width, canvas.height, type)
}

let counter = 0
let totalFrames = 1500
let perlin = new Perlin()

let render = () => {
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    let percent = (counter % totalFrames) / totalFrames
    let a = percent * Math.PI * 2
    for (let p of particles) {
        let x = p.xNoise.value(a, perlin)
        let y = p.yNoise.value(a, perlin)
        let d = p.dNoise.value(a, perlin)
        let r = p.rNoise.value(a, perlin)
        let g = p.gNoise.value(a, perlin)
        let b = p.bNoise.value(a, perlin)
        ctx.beginPath()
        ctx.arc(x, y, d, 0, 2 * Math.PI, false)
        ctx.fillStyle = 'rgba('+r+','+g+','+b+', 50%)'
        ctx.fill()
    }
    counter ++
    window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)