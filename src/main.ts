import "./options/resizeCanvas.js";

import { Ship } from "./entities/Ship.js";
import { Coordinates } from "./entities/Coordinates.js";
import { drawBullets } from "./draw-functions/drawBullets.js";
import { drawEnemys } from "./draw-functions/drawEnemys.js"; 
import { drawShip } from "./draw-functions/drawShip.js";

let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const ship_coordinates = new Coordinates(100, 200);
const ship = new Ship(ship_coordinates);

const button_right = document.querySelector('.right') as HTMLButtonElement;
const button_left = document.querySelector('.left') as HTMLButtonElement;

button_right.addEventListener('mousedown', () => ship.moveRight());
button_left.addEventListener('mousedown', () => ship.moveLeft());


function render(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawShip(ship, ctx);
  requestAnimationFrame(render)
}


render()