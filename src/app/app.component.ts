import { Component } from '@angular/core';
import { Point } from './classes/Point';
import { LinesCalculator } from './classes/LinesCalculator';
import { Line } from './classes/Line';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  solutionCalculated:boolean = false;
  points:Array<Point> = [
    new Point(0, 0),
    new Point(1, 1),
    new Point(3, 5),
    new Point(2, 2),
  ];
  lines: Array<Line> = [];


  addPoint() : void {
    this.points.push(new Point(0, 0));
    this.solutionCalculated = false;
  }

  removePoint(index: number) : void {
    this.points.splice(index, 1);
    this.solutionCalculated = false;
  }

  inputChanged() {
    this.solutionCalculated = false;
  }

  calculateLinesSolutions() {
    try {
      this.lines = LinesCalculator.calculateLinesMoreThanTwoPoints(this.points);
    } catch (error) {
      switch (error.constructor) {
        case Error:      return alert('GenericError:' + error.message);
        case RangeError: return alert('RangeError:' + error.message);
        case TypeError: return alert('TypeError:' + error.message);
        default:         return alert('UnknownError' + error.message);
      }
    }
    this.solutionCalculated = true;
  }
}
