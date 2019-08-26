/*
 * @Author: Siwen
 * @Date: 2019-08-08 15:20:52
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-26 10:27:24
 * @Description: utils 工具类
 */
export default {
  /**
   * 千分位格式化
   * @param {number | string} num 格式化数字
   */
  comdify(num: string | number) {
    return num.toString().replace(/\d+/, (n) => {
      return n.replace(/(\d)(?=(\d{3})+$)/g, (v) => {
        return `${v},`
      })
    })
  },
  /**
   * 倒计时
   * @param {string | number} times 剩余秒数
   * @param {function} callback 回调函数
   */
  countDown(times: number, callback: Function) {
    const timer: number = setInterval(() => {
      if (times > 0) {
        let day: number | string = Math.floor(times / (60 * 60 * 24))
        let hour: number | string = Math.floor(times / (60 * 60)) - (day * 24)
        let minute: number | string = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60)
        let second : number | string = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
        // let dayHour = (day * 24) + hour
        let hourMinute: number | string = (hour * 60) + minute
        // dayHour = `${dayHour < 10 ? '0' : ''}${dayHour}`
        hourMinute = `${hourMinute < 10 ? '0' : ''}${hourMinute}`
        day = `${day < 10 ? '0' : ''}${day}`
        hour = `${hour < 10 ? '0' : ''}${hour}`
        minute = `${minute < 10 ? '0' : ''}${minute}`
        second = `${second < 10 ? '0' : ''}${second}`
        callback(`${hourMinute}:${second}`)
        times--
      } else {
        clearInterval(timer)
        callback(false)
      }
    }, 1000)
    if (times <= 0) {
      clearInterval(timer)
      callback(false)
    }
  },
  /**
   * 将时间戳转换成格式化日期
   * @param {string | number} x 时间戳
   * @param {string} y 时间格式字符串
   */
  formatDate(x: any, y: string) {
    if (!(x instanceof Date)) {
      const date = new Date()
      date.setTime(x * 1000)
      x = date
    }
    const z: object = {
      y: x.getFullYear(),
      M: x.getMonth() + 1,
      d: x.getDate(),
      h: x.getHours(),
      m: x.getMinutes(),
      s: x.getSeconds()
    }
    console.log(z)
    return y.replace(/(y+|M+|d+|h+|m+|s+)/g, (v) => {
      return ((v.length > 1 ? '0' : '') + eval('z.' + v.slice(-1))).slice(
        -(v.length > 2 ? v.length : 2)
      )
    })
  },
  isPhone(num : any) {
    var reg = /^1[123456789]\d{9}$/
    return reg.test(num)
  },
  /**
   * 保留n位小数
   * @param {string | number} cnum 需要保留的数据
   * @param {string} cindex 保留的小数位数
   */
  toDecimal(cnum: string | number, cindex: number = 2) {
    const value = String(cnum)
    if (value.indexOf('.') > 0) {
      const left = value.substr(0, value.indexOf('.'))
      let right = value.substr(value.indexOf('.') + 1, value.length)
      if (right.length > cindex) {
        right = right.substr(0, cindex)
      }
      return `${left}.${right}`
    } else {
      return cnum
    }
  },
  /**加法运算 */
  accAdd(arg1: number | string, arg2: number | string) {
    let r1 = null
    let r2 = null
    let m = null
    try { r1 = arg1.toString().split('.')[1].length } catch (error) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (error) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return ((arg1 as any) * m + (arg2 as any) * m) / m
  },
  /**减法运算 */
  accSub(arg1: number | string, arg2: number | string) {
    let r1 = null
    let r2 = null
    let m = null
    let n = null
    try { r1 = arg1.toString().split('.')[1].length } catch (error) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (error) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    n = (r1 >= r2) ? r1 : r2
    return (((arg1 as any) * m - (arg2 as any) * m) / m).toFixed(n)
  },
  // 除法运算
  accDiv(arg1: number | string, arg2: number | string) {
    let t1 = 0
    let t2 = 0
    let r1 = null
    let r2 = null
    try { t1 = arg1.toString().split('.')[1].length } catch (e) { console.log() }
    try { t2 = arg2.toString().split('.')[1].length } catch (e) { console.log() }
    r1 = Number(arg1.toString().replace('.', ''))
    r2 = Number(arg2.toString().replace('.', ''))
    return (r1 / r2) * Math.pow(10, t2 - t1)
  },
  // 乘法运算
  accMul(arg1: number | string, arg2: number | string) {
    let m = 0
    const s1 = arg1.toString()
    const s2 = arg2.toString()
    try { m += s1.split('.')[1].length } catch (e) { console.log() }
    try { m += s2.split('.')[1].length } catch (e) { console.log() }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
  }
}
