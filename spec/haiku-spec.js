import { getSyllables } from './../src/main.js';

describe("getSyllables", function() {
  it("will ignore non-alphabetical characters", function() {
    expect(getSyllables("$4*+")).toEqual(0);
  });
  it("will remove non-alphabetical characters from words", function() {
    expect(getSyllables("3L337")).toEqual(1);
  });
  it("will output 1 if the word length is 1", function() {
    expect(getSyllables("I")).toEqual(1);
  });
  // it("will ....", function() {
  //   expect(getSyllables("book")).toEqual(1);
  // });
});
