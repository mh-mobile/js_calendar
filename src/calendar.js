class Calendar {
  static WEEK_HEADER = '日 月 火 水 木 金 土'
  static DAY_LEFT_PADDING = 2

  constructor(year, month = new Date().getMonth() + 1) {
    this.year = year
    this.month = month
    this.firstMonthDate = new Date(this.year, this.month - 1, 1)
    this.lastMonthDate = new Date(this.year, this.month, 0)
    this.startOffsetDay = this.firstMonthDate.getDay()
    this.maxRowNum = this.calculateRowPosition(this.lastMonthDate) + 1
  }

  show() {
    const days = this.createDays()
    const dayContent = this.convertToContent(days)

    return `${this.yearMonthHeader}
${Calendar.WEEK_HEADER}
${dayContent}`
  }

  createDays() {
    // カレンダーの日付の二次元配列を準備する
    let days = [...Array(this.maxRowNum)].map((_) => {
      return [...Array(7)].map(() => {
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

  convertToContent(days) {
    return days
      .map((day) => {
        const week = day.join(' ')
        return week
      })
      .join('\n')
  }

  calculateColumnRowPosition(date) {
    return {
      column: date.getDay(),
      row: this.calculateRowPosition(date)
    }
  }

  calculateRowPosition(date) {
    return Math.floor((date.getDate() + (this.startOffsetDay - 1)) / 7)
  }

  get yearMonthHeader() {
    return `     ${String(this.month).padStart(
      Calendar.DAY_LEFT_PADDING,
      ' '
    )}月 ${this.year}      `
  }
}

module.exports = Calendar
