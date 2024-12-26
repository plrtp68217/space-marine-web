import { Ship } from "../../entities/Ship";
import { Coordinates } from "../../entities/Coordinates";

export function addStars(enemys: Ship[], canvas: HTMLCanvasElement) {
    const enemy_coordinates = new Coordinates()
    const enemy = new Ship(ship_coordinates, 40, 10, 5, 3, 0);

    enemys.push({
        x: Math.floor(Math.random() * (canvas.width - star_parameter)),
        y: - star_parameter,
        speed: getRandomRange(0.2, 0.4),
    });
}