function string1(str) {
    var splitString = str.split('');
    var reverseString = splitString.reverse();
    var joinStr = reverseString.join('');
    return joinStr;
}

function isPalindrome(str) {
    var reverse = string1(str)
    return str = reverse;

}
//  console.log(isPalindrome('hello'))
//  console.log(isPalindrome('deepesh'))
//  console.log(isPalindrome('gotiya'))
//  console.log(isPalindrome('noob'))
//  console.log(isPalindrome('programmer'))


function dateToString(date) {
    var dateStr = {
        day: '',
        month: '',
        year: ''
    };
    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }
    if (date.day < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
}
function allDateFormats(){
    var dateStr = dateToString(date);
    var ddmmyyyy = dateStr.day  + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd  =dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month  + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day; 
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

var date = {
    day: 20,
    month: 12,
    year: 2020
}
console.log(allDateFormats(date))