import { Coordinates } from '../entities/Coordinates';

export class LinearMovement {
    coordinates: Coordinates;
  
    constructor(coordinates: Coordinates) {
      this.coordinates = coordinates;
    }
  
    moveRight(step: number = 1): void {
      this.coordinates.x += step;
    }
  
    moveLeft(step: number = 1): void {
      this.coordinates.x -= step;
    }
  
    moveUp(step: number = 1): void {
      this.coordinates.y -= step;
    }
  
    moveDown(step: number = 1): void {
      this.coordinates.y += step;
    }
  }