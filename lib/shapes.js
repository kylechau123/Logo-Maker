class SVG {
    constructor(shape, text, textColor) {
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
    }

    generate() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.shape.render()}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

class Circle {
    constructor() {
        this.color = ""
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="50" y="0" width="200" height="200" style="fill:${this.color}" />`
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150,0 0,200 300,200" style="fill:${this.color}" />`
    }
}

module.exports = {SVG, Circle, Square, Triangle}