// triangle svg uses polygon with 3 sides (google it)

const inquirer = require("inquirer");
// const Shape = require("./lib/shapes");
const Circle = require("./lib/circle");
const { join } = require("path");
const { writeFile } = require("fs/promises");

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
    }
  })
  .then((shape) => {
    return writeFile(`./examples/${shape.shapeType}.html`, shape.render);
  })
  .then(() => console.log(`Created the file`))
  .catch((err) => {
    console.log(err);
    console.log("Oops. Something went wrong.");
  });
