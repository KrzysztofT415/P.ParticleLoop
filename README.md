# ParticleLoop
Simple JavaScript website with generated animation of particles on continuous random loop.

It's purpose could be to be displayed in the background of website or just generating some nice-looking giphs.

As mine target I will expand this project in the future and use it on my website.

Test it yourself here https://krzysztoft415.github.io/P.ParticleLoop/

Project was inspired by youtuber The Coding Train and his many great videos.

# How it works
Code is entirely written in JavaScript language.
Firstly it is creating canvas and then array of particles, that afterwards are displayed on the canvas.
Each particle has own unique path, color shift, and change of diameter, all determined by random 2d perlin noise generated each time website is loaded.
