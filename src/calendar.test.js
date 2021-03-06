const Calendar = require('./calendar')

test('show 2020/05 calendar', () => {
  const cal = new Calendar(2020, 5)
  const expectValue = `      5月 2020      
日 月 火 水 木 金 土
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
31                  `
  expect(cal.genOutput()).toBe(expectValue)
})

test('show 2020/04 calendar', () => {
  const cal = new Calendar(2020, 4)
  const expectValue = `      4月 2020      
日 月 火 水 木 金 土
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30      `
  expect(cal.genOutput()).toBe(expectValue)
})

test('show 2020/06 calendar', () => {
  const cal = new Calendar(2020, 6)
  const expectValue = `      6月 2020      
日 月 火 水 木 金 土
    1  2  3  4  5  6
 7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30            `
  expect(cal.genOutput()).toBe(expectValue)
})

test('show 1970/01 calendar', () => {
  const cal = new Calendar(1970, 1)
  const expectValue = `      1月 1970      
日 月 火 水 木 金 土
             1  2  3
 4  5  6  7  8  9 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28 29 30 31`
  expect(cal.genOutput()).toBe(expectValue)
})

test('show 2020/11 calendar', () => {
  const cal = new Calendar(2100, 12)
  const expectValue = `     12月 2100      
日 月 火 水 木 金 土
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31   `
  expect(cal.genOutput()).toBe(expectValue)
})
