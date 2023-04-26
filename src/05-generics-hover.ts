// Notice the difference between hovering:
// - The function declaration
// - The function call

// Example 1

const returnWhatIPassIn = <T>(arg: T) => {
  return arg;
};

returnWhatIPassIn(1);
returnWhatIPassIn("Hello!");

// Example 2

const wrapWithArg = <T>(arg: T) => {
  return {
    arg,
  };
};

wrapWithArg(1);
wrapWithArg("Hello!");
