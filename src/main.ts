import { Ship } from "./entities/Ship.js";
import { Coordinates } from "./entities/Coordinates.js";

let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const resizeCanvas = (): void => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const ship_coordinates = new Coordinates(100, 200);
const ship = new Ship(ship_coordinates);


function render(): void {
  ctx.fillStyle = 'white';
  ctx.fillRect(ship.coordinates.x, ship.coordinates.y, 10, 10);
  requestAnimationFrame(render)
}


render()


