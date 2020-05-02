const Calendar = require('./calendar')
var argv = require('minimist')(process.argv.slice(2))

// 引数のエラー配列
const errors = []

// カレンダーの年の形式チェック
const validateYearFormat = (year) => {
  if (isNaN(year) || year < 1970 || year > 2100) {
    errors.push('-yに1970から2100までの年を指定してください')
  }
}

// カレンダーの月の形式チェック
const validateMonthFormat = (month) => {
  if (isNaN(month) || month < 1 || month > 12) {
    errors.push('-mに1から12までの月を指定してください')
  }
}

// 引数のバリデーション関数
const validateArgs = (argv) => {
  const yearArg = argv.y
  const monthArg = argv.m
  const year = parseInt(yearArg)
  const month = parseInt(monthArg)

  if (yearArg && monthArg) {
    validateYearFormat(year)
    validateMonthFormat(month)
  } else if (yearArg && !monthArg) {
    errors.push('-mで月を指定してください')
  } else if (!year && monthArg) {
    validateMonthFormat(month)
  }

  return errors.length === 0
}

// 引数のバリデーション処理
if (!validateArgs(argv)) {
  errors.forEach((error) => {
    console.log(error)
  })
  process.exit(0)
}

// カレンダーの年と月の数値パラメータを取得
const createParams = (argv) => {
  const year = (() => {
    const _year = argv.y
    // 引数なしの場合は、今年を返す
    if (!_year) {
      return 1900 + new Date().getYear()
    }

    // 引数ありの場合は、引数を整数に変換した値を返す
    return parseInt(_year)
  })()

  const month = (() => {
    const _month = argv.m
    // 引数なしの場合は、今月を返す
    if (!_month) {
      return new Date().getMonth() + 1
    }

    // 引数ありの場合は、引数を整数に変換した値を返す
    return parseInt(_month)
  })()

  return {
    year: year,
    month: month
  }
}

// カレンダーのパラメータ取得
const calendarParam = createParams(argv)

// カレンダーの表示処理
const cal = new Calendar(calendarParam.year, calendarParam.month)
console.log(cal.genOutput())
