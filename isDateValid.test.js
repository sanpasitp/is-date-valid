const isDateValid = require('./isDateValid');

/*
test('case 1', () => {
    expect(isDateValid("abcde")).toBeNull();
});*/

test('RegularDateTest_Valid', () => {
    expect(isDateValid(1986, 1, 1)).toBe(true);
    expect(isDateValid(2019, 10, 31)).toBe(true);
});

test('FebruaryDateTest_Invalid', () => {
    expect(isDateValid(2018, 2, 29)).toBe(false);
});

test('FebruaryDateTest2_Valid', () => {
    expect(isDateValid(2016, 2, 29)).toBe(true);
    expect(isDateValid(2019, 2, 28)).toBe(true);
    expect(isDateValid(2000, 2, 29)).toBe(true);
});

test('OctoberDateTest_Invalid', () => {
    expect(isDateValid(2019, 10, 32)).toBe(false);
});

test('AprilDateTest_Invalid', () => {
    expect(isDateValid(2018, 4, 31)).toBe(false);
});