import "./options/resizeCanvas.js";

import { Ship } from "./entities/Ship.js";
import { Coordinates } from "./entities/Coordinates.js";
import { Bullet } from "./entities/Bullet.js";

import { drawBullets } from "./draw-functions/drawBullets.js";
import { drawEnemys } from "./draw-functions/drawEnemys.js"; 
import { drawShip } from "./draw-functions/drawShip.js";
import { drawClear } from "./draw-functions/drawClear.js";

import { mouseDragShip, mouseDropShip, mouseMoveShip } from "./ship/movement/mouse/moveShip.js";
import { touchDragShip, touchDropShip, touchMoveShip } from "./ship/movement/touch/moveShip.js";

import { startShipShootingInterval, stopShipShootingInterval } from "./ship/shooting/shoot.js";

import { moveBullets } from "./bullets/ship_bullets/movement/moveBullets.js";
import { removeOffscreenBullets } from "./bullets/filtering.js";


let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const shipStartX = canvas.width / 2;
const shipStartY = (canvas.height * 7) / 8;

const ship_coordinates = new Coordinates(shipStartX, shipStartY);
const ship = new Ship(ship_coordinates, 40, 10);


canvas.addEventListener('mousedown', () => mouseDragShip(ship));
canvas.addEventListener('mousemove', (event: MouseEvent) => mouseMoveShip(event, ship));
canvas.addEventListener('mouseup', () => mouseDropShip(ship));

canvas.addEventListener('touchstart', () => touchDragShip(ship));
canvas.addEventListener('touchmove', (event: TouchEvent) => touchMoveShip(event, ship));
canvas.addEventListener('touchend', () => touchDropShip(ship));


let bullets: Bullet[] = [];


function game(): void {
  drawClear(canvas, ctx);
  
  drawShip(ship, ctx);
  
  moveBullets(bullets);
  drawBullets(bullets, ctx);

  removeOffscreenBullets(bullets, canvas);
  
  requestAnimationFrame(game);
}

startShipShootingInterval(bullets, ship);
game();