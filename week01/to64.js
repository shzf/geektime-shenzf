/**
 *
 * Created by shenzaifang on 2021-07-21
 */
// 作业要求的进制转换不如说是压缩算法或者是对称加密
// 转换方法设计成整数位直接转64进制，小数位reverse之后再转成64进制（考虑1.00111这样的情况），简单起见就不考虑容错、负数或者1.10000等情况
// 浮点数存在精度问题，直接转string有可能丢失精度，简单起见也不考虑处理

function generateNumberToStringMap() {
    const numberToStringMap = new Map()
    for (let i = 0; i < 10; i++) {
        numberToStringMap.set(i, i.toString())
    }
    const aCharCode = 'a'.charCodeAt()
    const ACharCode = 'A'.charCodeAt()
    for (let i = 0; i < 26; i++) {
        numberToStringMap.set(i + 10, String.fromCharCode(aCharCode + i))
        numberToStringMap.set(i + 36, String.fromCharCode(ACharCode + i))
    }
    numberToStringMap.set(62, '(')
    numberToStringMap.set(63, ')')
    return numberToStringMap
}

function generateStringToNumberMap(
    numberToStringMap = generateNumberToStringMap()
) {
    const stringToNumberMap = new Map()
    for (let [key, value] of numberToStringMap.entries()) {
        stringToNumberMap.set(value, key)
    }
    return stringToNumberMap
}

const numberToStringMap = generateNumberToStringMap()
const stringToNumberMap = generateStringToNumberMap(numberToStringMap)

function stringToNumber(string, radix = 64) {
    let arr = string.split('').map((item) => stringToNumberMap.get(item))
    const len = arr.length
    let number = 0
    for (let i = 0; i < len; i++) {
        const num = arr[i] * radix ** (len - i - 1)
        number += num
    }
    return number
}

function numberToString(number, radix = 64) {
    let string = ''
    while (number !== 0) {
        let remainder = number % radix
        number = (number - remainder) / radix
        string = numberToStringMap.get(remainder) + string
    }
    return string || '0'
}

function encode64(number) {
    let string = number.toString()
    if (string.includes('.')) {
        let arr = string.split('.')
        let integer = numberToString(Number(arr[0]))
        let decimal = numberToString(Number(arr[1].split('').reverse().join('')))
        return integer + '.' + decimal
    }
    return numberToString(number)
}

function decode64(string) {
    if (string.includes('.')) {
        let arr = string.split('.')
        let integer = stringToNumber(arr[0])
        let decimal = stringToNumber(arr[1]).toString().split('').reverse().join('')
        // 浮点数可能丢失精度
        // return Number(integer + '.' + decimal)
        return integer + '.' + decimal
    }
    return stringToNumber(string)
}
