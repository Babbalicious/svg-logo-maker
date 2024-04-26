const Circle = require("./circle");

describe("circle", () => {
  it("should run a render() method that returns a string for the corresponding SVG file with the given shape color", () => {
    // arrange
    const characters = "ABC";
    const textColor = "red";
    const shapeColor = "green";
    const circle = new Circle(characters, textColor);
    circle.setColor(shapeColor);

    // act
    const result = circle.render();

    //assert
    expect(result).toEqual(`<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">
      ABC
    </text>
  </svg>`);
  });
});
