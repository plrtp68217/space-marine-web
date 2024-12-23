import { Coordinates } from './Coordinates';

export class Enemy {
  coordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    this.coordinates = coordinates;
  }
}