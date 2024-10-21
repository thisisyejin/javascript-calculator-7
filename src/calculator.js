const customizeSeparator = (customSeparator, string) => {
    if ( string.startsWith('//') ) {
        if ( string.slice(3, 5) == '\\n' ) {
        customSeparator = string[2]
        } else {
        throw Error('[ERROR] 커스텀 구분자 지정에 실패했습니다.')
        }
    }
    return customSeparator
}  

const readString = (customSeparator, string, startIndex) => {
    let number = '0'; // 숫자를 인식할 변수
    let sum = 0;      // 덧셈을 계산할 변수
    for (let i = startIndex; i < string.length; i++) {
      if (!isNaN( parseInt(string[i]) ) && string[i] != customSeparator) {
        number += string[i]
      } else if (string[i] == ',' || string[i] == ':'|| string[i] == customSeparator) { 
        sum += parseInt(number)
        number = '0'
      } else {
        throw Error(`[ERROR] '${string[i]}'는 구분자 또는 양수가 아닙니다.`)
      }
    }
    sum += parseInt(number);
    return sum
}

export { customizeSeparator, readString };