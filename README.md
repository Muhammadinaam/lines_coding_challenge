# Lines Coding Challenge

## Demo
![Demo](demo/demo.gif)

## Lines Calculation Code
Lines calculation code is in this file:
https://github.com/Muhammadinaam/lines_coding_challenge/blob/master/src/app/classes/LinesCalculator.ts

## Time Complexity of Lines Calculation Code
Code is using two nested loops. In Outer loop, code takes first two points (from current loop index of outer loop) and calculate Line from these two points. Then it is checked (in inner loop) that whether point 3, 4, ... exist on this line or not. Time complexity of code is Big O(n^2).

## How to Setup and Run this project
This is angular project created with angular-cli. Clone the repo. then in repo folder run command "npm install" and then run "ng serve". Then open http://localhost:4200



