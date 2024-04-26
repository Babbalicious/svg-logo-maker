const Square = require("./square");

describe("square", () => {
  it("should run a render() method that returns a string for the corresponding SVG file with the given shape color", () => {
    // arrange
    const characters = "ABC";
    const textColor = "red";
    const shapeColor = "green";
    const square = new Square(characters, textColor);
    square.setColor(shapeColor);

    // act
    const result = square.render();

    //assert
    expect(result).toEqual(`<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" fill="green" />

    <text x="75" y="100" font-size="60" text-anchor="middle" fill="red">
      ABC
    </text>
  </svg>`);
  });
});
