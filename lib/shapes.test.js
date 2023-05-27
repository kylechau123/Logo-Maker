const {SVG, Triangle, Circle, Square} = require("./shapes")

describe("tests for a triangle", () => {
    const testColor = "blue";
    const testText = "SVG";
    const testTextColor = "white"
    const newShape = new Triangle();
    newShape.setColor(testColor)

    const newSVG = new SVG(newShape, testText, testTextColor);

    it("should be a triangle", () => {
        expect(newShape.constructor.name).toBe("Triangle")
    })

    it("should be the correct shape color", () => {
        expect(newShape.color).toBe(testColor)
    })

    it("should contain the correct text", () => {
        expect(newSVG.text).toBe(testText)
    })

    it("should be the correct text color", () => {
        expect(newSVG.textColor).toBe(testTextColor)
    })

})

describe("tests for a circle", () => {
    const testColor = "blue";
    const testText = "SVG";
    const testTextColor = "white"
    const newShape = new Circle();
    newShape.setColor(testColor)

    const newSVG = new SVG(newShape, testText, testTextColor);

    it("should be a circle", () => {
        expect(newShape.constructor.name).toBe("Circle")
    })

    it("should be the correct shape color", () => {
        expect(newShape.color).toBe(testColor)
    })

    it("should contain the correct text", () => {
        expect(newSVG.text).toBe(testText)
    })

    it("should be the correct text color", () => {
        expect(newSVG.textColor).toBe(testTextColor)
    })

})

describe("tests for a square", () => {
    const testColor = "blue";
    const testText = "SVG";
    const testTextColor = "white"
    const newShape = new Square();
    newShape.setColor(testColor)

    const newSVG = new SVG(newShape, testText, testTextColor);

    it("should be a square", () => {
        expect(newShape.constructor.name).toBe("Square")
    })

    it("should be the correct shape color", () => {
        expect(newShape.color).toBe(testColor)
    })

    it("should contain the correct text", () => {
        expect(newSVG.text).toBe(testText)
    })

    it("should be the correct text color", () => {
        expect(newSVG.textColor).toBe(testTextColor)
    })

})