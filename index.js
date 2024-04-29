const inquirer = require("inquirer");
const Circle = require("./lib/circle");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const Triangle = require("./lib/triangle");
const Square = require("./lib/square");

inquirer
  .prompt([
    {
      type: "input",
      name: "characters",
      message: "What text should go inside of the SVG (at most 3 characters)?",
      validate: function (answer) {
        if (answer.length > 3) {
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message:
        "What color should the text be (must be a valid color or a hexadecimal number)?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape should the logo be?",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color should the svg be?",
    },
  ])
  .then((answers) => {
    const type = typeof answers;
    console.log(type, answers);
    if (answers.shape === "circle") {
      console.log("you chose circle");
      const circle = new Circle(answers.characters, answers.textColor);
      circle.setColor(answers.shapeColor);
      console.log(circle);
      return { render: circle.render(), shapeType: "circle" };
    } else if (answers.shape === "triangle") {
      console.log("you chose triangle");
      const triangle = new Triangle(answers.characters, answers.textColor);
      triangle.setColor(answers.shapeColor);
      console.log(triangle);
      return { render: triangle.render(), shapeType: "triangle" };
    } else if (answers.shape === "square") {
      console.log("you chose square");
      const square = new Square(answers.characters, answers.textColor);
      square.setColor(answers.shapeColor);
      console.log(square);
      return { render: square.render(), shapeType: "square" };
    }
  })
  .then((shape) => {
    return writeFile(`./examples/logo.svg`, shape.render);
  })
  .then(() => console.log(`Generated logo.svg`))
  .catch((err) => {
    console.log(err);
    console.log("Oops. Something went wrong.");
  });
