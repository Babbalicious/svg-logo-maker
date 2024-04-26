const Shapes = require("./shapes");

class Square extends Shapes {
  constructor(characters, textColor, color) {
    super(color);
    this.characters = characters;
    this.textColor = textColor;
  }

  render = function () {
    return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="150" height="150" fill="${this.color}" />

    <text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">
      ${this.characters}
    </text>
  </svg>`;
  };
}

module.exports = Square;
