// Your code here
class Polygon {
    constructor(sidelengths) {
        this.sidelengths = sidelengths
    }

    get countSides() {
        return this.sidelengths.length
    }

    get perimeter() {
        return this.sidelengths.reduce((value, newValue) => value + newValue)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [a, b, c] = this.sidelengths
        if (a + b > c && b + c > a && c + a > b) {
            return true
        } else {
            return false
        }
        
    }
}

class Square extends Polygon {
    get isValid() {
        let [a, b, c, d] = this.sidelengths
        if (a === b && b === c && c === d) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sidelengths[0] * this.sidelengths[1]
    }
}