import "./options/resizeCanvas.js";

import { Ship } from "./entities/Ship.js";
import { Coordinates } from "./entities/Coordinates.js";
import { Bullet } from "./entities/Bullet.js";
import { Explosion } from "./entities/Explosion.js";

import { drawBullets } from "./draw-functions/drawBullets.js";
import { drawShip } from "./draw-functions/drawShip.js";
import { drawClear } from "./draw-functions/drawClear.js";
import { drawEnemys } from "./draw-functions/drawEnemys.js";

import { mouseDragShip, mouseDropShip, mouseMoveShip } from "./ship/movement/mouse/moveShip.js";
import { touchDragShip, touchDropShip, touchMoveShip } from "./ship/movement/touch/moveShip.js";

import { startShipShootingInterval, stopShipShootingInterval } from "./ship/shooting/shoot.js";
import { startSpawnEnemyInterval, stopSpawnEnemysInterval } from "./enemys/spawn/spawn.js";

import { moveBullets } from "./bullets/ship_bullets/movement/moveBullets.js";
import { moveEnemys } from "./enemys/movement/move.js";

import { removeOffscreenElements } from "./filter/filterScreen.js";

import { hitRegistration } from "./bullets/hitRegistration.js";

import { startExplosion, updateExplosions, drawExplosions } from "./animations/explosion/explosion.js";

let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const shipStartX = canvas.width / 2;
const shipStartY = (canvas.height * 7) / 8;

const ship_coordinates = new Coordinates(shipStartX, shipStartY);
//                                      w   h   he ar sp
const ship = new Ship(ship_coordinates, 50, 50, 5, 3, 0);


canvas.addEventListener('mousedown', () => mouseDragShip(ship));
canvas.addEventListener('mousemove', (event: MouseEvent) => mouseMoveShip(event, ship));
canvas.addEventListener('mouseup', () => mouseDropShip(ship));

canvas.addEventListener('touchstart', () => touchDragShip(ship));
canvas.addEventListener('touchmove', (event: TouchEvent) => touchMoveShip(event, ship));
canvas.addEventListener('touchend', () => touchDropShip(ship));



let bullets: Bullet[] = [];
let enemys: Ship[] = [];
let explosions: Explosion[] = [];

let lastTime: number = 0;

function game(timestamp: number): void {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  explosions = updateExplosions(explosions);

  if (ship.isDragging) startShipShootingInterval(bullets, ship);
  else stopShipShootingInterval();

  drawClear(canvas, ctx);

  
  drawBullets(bullets, ctx);
  moveBullets(bullets, deltaTime);
  
  const hit =  hitRegistration(bullets, [ship, ...enemys])
  if(hit) {
    
    bullets.splice(hit.bulletIndex, 1);
    hit.hittedShip.health -= 1;
    
    startExplosion(explosions, hit.coordinates, 100);
    
    if (hit.hittedShip.health === 0) {
      const hittedShipIndex = enemys.findIndex(enemy => enemy.coordinates.x === hit.hittedShip.coordinates.x &&
        enemy.coordinates.y === hit.hittedShip.coordinates.y
      )
      enemys.splice(hittedShipIndex, 1)
    }

  }
  
  drawExplosions(ctx, explosions)
  
  drawEnemys(enemys, ctx);
  moveEnemys(enemys, deltaTime)
  
  drawShip(ship, ctx);
  removeOffscreenElements(bullets, canvas);
  removeOffscreenElements(enemys, canvas);
  
  requestAnimationFrame(game);
}

startSpawnEnemyInterval(enemys, canvas);
requestAnimationFrame(game);