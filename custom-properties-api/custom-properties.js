if (CSS.registerProperty) {
  CSS.registerProperty({
    name: "--box__color",
    syntax: "<color>",
    initialValue: "rgba(9,9,121,1)",
    inherits: false
  });

  CSS.registerProperty({
    name: "--box__gradient--position",
    syntax: "<percentage>",
    initialValue: "60%",
    inherits: false
  });
}
