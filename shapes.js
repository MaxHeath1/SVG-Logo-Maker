class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="180" height="180" x="60" y="10" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };
