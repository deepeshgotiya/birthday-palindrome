//Problem(1)
function string1(str) {
    var splitString = str.split('');
    var reverseString = splitString.reverse();
    var joinStr = reverseString.join('');
    return joinStr;
}
//problem(2)

function isPalindrome(str) {
    var reverse = string1(str)
    return str == reverse;

}
function isLeapYear(year){
    if(year%400===0){
        return true;
    }if(year%100===0){
        return false;
    }if(year%4===0){
        return true;
    }
    return false;
}
function nextPelindromeDate(date){
    var day= date.day + 1;
    var month = date.month;
    var year = date.year;

var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if(month==2){
    if(isLeapYear(year)){
        if(day>29){
            day=1;
            month++;
        }
    }
}
else {
    if(day  > daysInMonth [month-1]){
        day = 1;
        month++;
    }
}
if(month>12){
    month=1;
    year++;
}
return {
    day:day,
    month:month,
    year:year
};
}


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
function allDateFormats(date){
    var dateStr = dateToString(date);
    var ddmmyyyy = dateStr.day  + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd  =dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month  + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day; 
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}
function checkingPalindromeForAllDates (date){
    var palindromeList = allDateFormats(date);
    var isPalindromeDate =  false;
    for(var i=0;i<palindromeList.length;i++){
        if(isPalindrome(palindromeList[i])){
        isPalindromeDate = true;
        break;
        }
    }
    return isPalindromeDate;
}
function getNextPalindromeDate(date) {
    var ctr = 0 ;
    var nextDate = nextPelindromeDate(date);
    while(1){
        ctr++;
        var isPalindrome = checkingPalindromeForAllDates(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate = nextPelindromeDate(nextDate)
    }
    return [ctr,nextDate]; 
}


var checkButton = document.querySelector("#check-button");
var dateInput = document.querySelector("#date-input");
var output = document.querySelector("#output");

function clickHandler(e){
    var bdayStr = dateInput.value;
    if(bdayStr !== 0 ){
        var listOfDate = bdayStr.split('-');
        var date = {
            day : Number(listOfDate[2]),
            month :Number(listOfDate[1]),
            year:Number(listOfDate[0])
        }
        var isPalindrome = checkingPalindromeForAllDates(date);
        if(isPalindrome){
            output.innerText = "Your Birthday is A palindrome"
        }else{
            var [ctr,nextDate] = getNextPalindromeDate(date)
            output.innerText = `Next Palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year} you missed it by ${ctr}`
        }
    }
}
 
checkButton.addEventListener('click',clickHandler)