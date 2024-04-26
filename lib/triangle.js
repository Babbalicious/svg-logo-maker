const Shapes = require("./shapes");

class Triangle extends Shapes {
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
  <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />

    <text x="150" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">
      ${this.characters}
    </text>
  </svg>`;
  };
}

module.exports = Triangle;
