import "./options/resizeCanvas.js";

import { Ship } from "./entities/Ship.js";
import { Coordinates } from "./entities/Coordinates.js";
import { Bullet } from "./entities/Bullet.js";

import { drawBullets } from "./draw-functions/drawBullets.js";
import { drawShip } from "./draw-functions/drawShip.js";
import { drawClear } from "./draw-functions/drawClear.js";

import { mouseDragShip, mouseDropShip, mouseMoveShip } from "./ship/movement/mouse/moveShip.js";
import { touchDragShip, touchDropShip, touchMoveShip } from "./ship/movement/touch/moveShip.js";

import { startShipShootingInterval, stopShipShootingInterval } from "./ship/shooting/shoot.js";

import { moveBullets } from "./bullets/ship_bullets/movement/moveBullets.js";
import { removeOffscreenElements } from "./filter/filter.js";

let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const shipStartX = canvas.width / 2;
const shipStartY = (canvas.height * 7) / 8;

const ship_coordinates = new Coordinates(shipStartX, shipStartY);
//                                      w   h   he ar sp
const ship = new Ship(ship_coordinates, 40, 10, 5, 3, 0);


canvas.addEventListener('mousedown', () => mouseDragShip(ship));
canvas.addEventListener('mousemove', (event: MouseEvent) => mouseMoveShip(event, ship));
canvas.addEventListener('mouseup', () => mouseDropShip(ship));

canvas.addEventListener('touchstart', () => touchDragShip(ship));
canvas.addEventListener('touchmove', (event: TouchEvent) => touchMoveShip(event, ship));
canvas.addEventListener('touchend', () => touchDropShip(ship));


let lastTime: number = 0;

let bullets: Bullet[] = [];


function game(timestamp: number): void {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  drawClear(canvas, ctx);

  drawShip(ship, ctx);

  if (ship.isDragging) startShipShootingInterval(bullets, ship);
  else stopShipShootingInterval();
  
  moveBullets(bullets, deltaTime);
  drawBullets(bullets, ctx);

  removeOffscreenElements(bullets, canvas);
  
  requestAnimationFrame(game);
}

requestAnimationFrame(game);