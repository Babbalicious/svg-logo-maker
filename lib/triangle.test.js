const Triangle = require("./triangle");

describe("triangle", () => {
  it("should run a render() method that returns a string for the corresponding SVG file with the given shape color", () => {
    // arrange
    const characters = "ABC";
    const textColor = "red";
    const shapeColor = "green";
    const triangle = new Triangle(characters, textColor);
    triangle.setColor(shapeColor);

    // act
    const result = triangle.render();

    //assert
    expect(result).toEqual(`<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
  <polygon points="150, 18 244, 182 56, 182" fill="green" />

    <text x="150" y="155" font-size="60" text-anchor="middle" fill="red">
      ABC
    </text>
  </svg>`);
  });
});
