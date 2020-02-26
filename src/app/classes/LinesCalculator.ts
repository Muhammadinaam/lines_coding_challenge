import { Point } from './Point';
import { Line } from './Line';

export class LinesCalculator {
    public static calculateLinesMoreThanTwoPoints(points: Array<Point>) : Array<Line> {
        const lines = new Array<Line>();

        if( points.length < 3 ) {
            throw new RangeError("Points count should not be less than 3");
        }

        if( ! LinesCalculator.arePointsValid(points) ) {
            throw new TypeError("Points are not valid. Identical points are not allowed");
        }

        for(let i = 0; i < points.length - 2; i++) {
            let point1 = points[i];
            let point2 = points[i+1];
            let lineOfPoint1And2 = LinesCalculator.calculateLineFromTwoPoints(point1, point2);

            if(lineOfPoint1And2 != null) {
                for(let j = i+2; j < points.length; j++) {
                    let point3 = points[j];
                    if(LinesCalculator.pointExistsOnLine(point3, lineOfPoint1And2)) {
                        lines.push(lineOfPoint1And2);
                        break;
                    }
                }
            }
        }

        return lines;
    }
    static pointExistsOnLine(point: Point, line: Line) : boolean {
        return line.b == point.y - (line.m * point.x);  // check if point satisfies line equation
    }

    private static calculateLineFromTwoPoints(point1: Point, point2: Point) : Line {
        let yDiff = point2.y - point1.y;
        let xDiff = point2.x - point1.x;

        if(xDiff == 0) {    // line not possible
            return null;
        }

        let m = yDiff / xDiff;
        let b = point1.y - (m * point1.x);
        let line = new Line(m, b);
        return line;
    }

    private static arePointsValid(points: Array<Point>) : boolean {
        let valid = true;

        for(let i = 0; i < points.length; i++) {
            let point1 = points[i];
            for(let j = i + 1; j < points.length; j++) {
                let point2 = points[j];
                if(point1.x == point2.x && point1.y == point2.y) {
                    valid = false;
                    break;
                }
            }
            if(valid == false) {
                break;
            }
        }

        return valid;
    }
}