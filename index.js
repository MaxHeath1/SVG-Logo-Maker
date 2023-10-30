const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => {
            return input.length <= 3 ? true : "Please enter up to three characters.";
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',
    }
])
.then(answers => {
    let shapeSVG = '';
    switch (answers.shape) {
        case 'circle':
            shapeSVG = new Circle(answers.shapeColor).render();
            break;
        case 'triangle':
            shapeSVG = new Triangle(answers.shapeColor).render();
            break;
        case 'square':
            shapeSVG = new Square(answers.shapeColor).render();
            break;
    }

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="150" y="115" font-family="Arial" font-size="45" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
});

