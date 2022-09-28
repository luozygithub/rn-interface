//正则式替换，来自网友
const formatNumber = function (nStr) {
    nStr += '';  //数字转换为字符
    let x = nStr.split('.');  //按照小数点分隔
    let x1 = x[0];  //整数部分
    let x2 = x.length > 1 ? '.' + x[1] : '';  //小数部分
    var rgx = /(\d+)(\d{3})/;  //正则式定义
    while (rgx.test(x1)) {  //正则式匹配
        x1 = x1.replace(rgx, '$1' + ',' + '$2');  //正则式替换
    }
    return x1 + x2;
}
const formatNumberToB = function (nStr) {
    nStr = nStr/10**9
    nStr += '';  //数字转换为字符
    let x = nStr.split('.');  //按照小数点分隔
    let x1 = x[0];  //整数部分
    let x2 = x.length > 1 ? '.' + x[1] : '';  //小数部分
    var rgx = /(\d+)(\d{3})/;  //正则式定义
    while (rgx.test(x1)) {  //正则式匹配
        x1 = x1.replace(rgx, '$1' + ',' + '$2');   //正则式替换
    }
    return x1 + x2 + 'B';
}
const formatNumberToM = function (nStr) {
    nStr = nStr/10**6
    nStr += '';  //数字转换为字符
    let x = nStr.split('.');  //按照小数点分隔
    let x1 = x[0];  //整数部分
    let x2 = x.length > 1 ? '.' + x[1] : '';  //小数部分
    var rgx = /(\d+)(\d{3})/;  //正则式定义
    while (rgx.test(x1)) {  //正则式匹配
        x1 = x1.replace(rgx, '$1' + ',' + '$2');   //正则式替换
    }
    return x1 + x2 + 'M';
}
const formatNumberTo = function (nStr) {
    let sign = ''
    if(nStr/10**9 >= 1){
        nStr = nStr/10**9
        sign = 'B'
    }else if(nStr/10**6 >=1){
        nStr = nStr/10**6
        sign = 'M'
    }else if(nStr/10**3 >=1){
        nStr = nStr/10**3
        sign = 'K'
    }
    nStr += '';  //数字转换为字符
    let x = nStr.split('.');  //按照小数点分隔
    let x1 = x[0];  //整数部分
    let x2 = x.length > 1 ? '.' + x[1] : '';  //小数部分
    var rgx = /(\d+)(\d{3})/;  //正则式定义
    while (rgx.test(x1)) {  //正则式匹配
        x1 = x1.replace(rgx, '$1' + ',' + '$2');   //正则式替换
    }
    return x1 + x2.substr(0,3) + sign;
}
export {
    formatNumber,
    formatNumberToB,
    formatNumberToM,
    formatNumberTo
}
