const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('24 hour clock', () => {
    const result = timeWord(23, 45);
    expect(result).toEqual("eleven fourty five PM");
  });

  test('AM', () => {
    const result = timeWord(10, 22);
    expect(result).toContain("AM");
  });

  test('PM', () => {
    const result = timeWord(20, 32);
    expect(result).toContain("PM");
  });

  test('midnight', () => {
    const result = timeWord(0, 0);
    expect(result).toEqual("midnight")
  });

  test('noon', () => {
    const result = timeWord(12, 0);
    expect(result).toEqual("noon")
  });

  test("o'clock", () => {
    const result = timeWord(2, 0);
    expect(result).toEqual("two o'clock AM")
  });

  test('oh', () => {
    const result = timeWord(12, 7);
    expect(result).toEqual("twelve oh seven PM")
  })

  test('invalid minutes', () => {
    const result = timeWord(13, 65)
    expect(result).toEqual("Invalid minute value");
  }); 
});


