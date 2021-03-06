// カレンダー表示クラス
class Calendar {
  // 曜日ヘッダーの文字列
  static WEEK_HEADER = ['日', '月', '火', '水', '木', '金', '土'].join(' ')

  // 日付のパディング
  static DAY_LEFT_PADDING = 2

  // 週の曜日の数
  static WEEK_DAY_COUNT = 7

  // 年月をもとに初期化する。
  constructor(year, month) {
    // 年
    this.year = year

    // 月
    this.month = month

    // 月の最初の日
    this.firstMonthDate = new Date(this.year, this.month - 1, 1)

    // 月の最後の日
    this.lastMonthDate = new Date(this.year, this.month, 0)

    // 月の最初の日の曜日オフセット
    this.startOffsetDay = this.firstMonthDate.getDay()

    // 最大の週の数
    this.maxRowNum = this.calculateRowPosition(this.lastMonthDate) + 1
  }

  // 標準出力に表示する文字列を生成する
  genOutput() {
    // 日付の配列を作成
    const days = this.createDays()

    // 日付の配列から文字列を作成
    const dayContent = this.convertToContent(days)

    // 表示内容を返す
    return `${this.yearMonthHeader}
${Calendar.WEEK_HEADER}
${dayContent}`
  }

  // 日付の配列を作成する
  createDays() {
    // カレンダーの日付の二次元配列を準備する
    let days = [...Array(this.maxRowNum)].map((_) => {
      return [...Array(Calendar.WEEK_DAY_COUNT)].map(() => {
        return '  '
      })
    })

    // 二次元配列に日付を埋め込む
    ;[...Array(this.lastMonthDate.getDate())].forEach((_, index) => {
      const date = new Date(this.year, this.month - 1, index + 1)
      const position = this.calculateColumnRowPosition(date)
      days[position.row][position.column] = String(index + 1).padStart(
        Calendar.DAY_LEFT_PADDING,
        '  '
      )
    })
    return days
  }

  // 日付配列から文字列に変換する
  convertToContent(days) {
    return days
      .map((day) => {
        const week = day.join(' ')
        return week
      })
      .join('\n')
  }

  // 日付を埋め込む配列の行番号と列番号を計算する
  calculateColumnRowPosition(date) {
    return {
      column: date.getDay(),
      row: this.calculateRowPosition(date)
    }
  }

  // 日付を埋め込む配列の行番号を計算する
  calculateRowPosition(date) {
    return Math.floor(
      (date.getDate() + (this.startOffsetDay - 1)) / Calendar.WEEK_DAY_COUNT
    )
  }

  // カレンダーの年月用の文字列を返す。
  // 例)       5月 2020
  get yearMonthHeader() {
    return `     ${String(this.month).padStart(
      Calendar.DAY_LEFT_PADDING,
      ' '
    )}月 ${this.year}      `
  }
}

module.exports = Calendar
