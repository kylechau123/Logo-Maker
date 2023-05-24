const inquirer = require('inquirer');
const fs = require('fs');

const {SVG, Circle, Square, Triangle} = require("./lib/shapes.js");

inquirer.prompt([
    {
        type: "list",
        name: "shape",
        message: "What shape is your logo?",
        choices: ["Square", "Circle", "Triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color is the logo background?"
    },
    {
        type: "input",
        name: "text",
        message: "What is the name of the logo?"
    },
    {
        type: "input",
        name: "textColor",
        message: "What color is the text?"
    }
]).then(answers => {
    let shape = {}
    if (answers.shape == 'Square') {
        shape = new Square()
    } if (answers.shape == 'Triangle') {
        shape = new Triangle()
    } if (answers.shape == 'Circle') {
        shape = new Circle()
    }

    shape.setColor(answers.shapeColor)

    const svg = new SVG(shape, answers.text, answers.textColor)

    const output = svg.generate()
    console.log(output)

    fs.writeFile('./examples/output.svg', output, () => {
        console.log('Logo Created!')
    })
})