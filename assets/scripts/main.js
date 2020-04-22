let context = document.querySelector('canvas').getContext('2d');

let screen = {
    color: 'black',
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,

    draw: function() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
};

context.canvas.width = screen.width;
context.canvas.height = screen.height;

function loop() {
    screen.draw();

    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);