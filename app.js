// ParticleJS
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded')
});

// Parralax
window.onload = function () {
    lax.setup() // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
});

