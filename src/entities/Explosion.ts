import { Coordinates } from './Coordinates.js';

export class Explosion {
  constructor(public coordinates: Coordinates, public startTime: number, public duration: number) {}
}