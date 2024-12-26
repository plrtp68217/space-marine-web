import { Coordinates } from './Coordinates.js';

export class Ship {
  constructor
  (
    public coordinates: Coordinates,
    public width: number, 
    public height: number, 
    public health: number, 
    public armor: number, 
    public type: string, 
    public speed?: number,
    public isDragging: boolean = false,
  ) {}
}