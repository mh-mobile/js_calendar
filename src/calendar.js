class Calendar {
  static WEEK_HEADER = '日 月 火 水 木 金 土'
  static DAY_LEFT_PADDING = 2

  constructor(year, month) {
    this.year = year
    this.month = month
  }

  show() {
    const days = this.createDays()
    const dayContent = this.convertToContent(days)

    return `     ${String(this.month).padStart(
      Calendar.DAY_LEFT_PADDING,
      ' '
    )}月 ${this.year}      
${Calendar.WEEK_HEADER}
${dayContent}`
  }

  createDays() {
    return [
      ['  ', '  ', '  ', '  ', '  ', ' 1', ' 2'],
      [' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9'],
      ['10', '11', '12', '13', '14', '15', '16'],
      ['17', '18', '19', '20', '21', '22', '23'],
      ['24', '25', '26', '27', '28', '29', '30'],
      ['31', '  ', '  ', '  ', '  ', '  ', '  ']
    ]
  }

  convertToContent(days) {
    return days
      .map((day) => {
        const week = day.join(' ')
        return week
      })
      .join('\n')
  }
}

module.exports = Calendar
