const object = {
  name: "John",
  age: 30,
};

const onlyAcceptsJohn = (name: "John") => {};

// Why isn't this working?
onlyAcceptsJohn(object.name);

// Notice the difference between hovering:
// - object
// - object.name
// - function
// - primitives, like string and number
