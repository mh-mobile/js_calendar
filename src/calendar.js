class Calendar {
  static WEEK_HEADER = '日 月 火 水 木 金 土'
  show() {
    const year = 2020
    const month = 5
    return `     ${String(month).padStart(2, ' ')}月 ${year}      
${Calendar.WEEK_HEADER}
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
31                  `
  }
}

module.exports = Calendar
