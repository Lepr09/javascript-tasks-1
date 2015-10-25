'use struct';
var hours=process.argv[2];
var minutes=process.argv[3];
if (checkInput(hours, minutes)) {console.log(toRomanDigits(hours)+':'+toRomanDigits(minutes))}
else console.log('Wrong input!');

function checkInput(hours,minutes){
    if ((Number(hours)>=0)&&(Number(hours)<=23)&&(Number(minutes)>=0)&&(Number(minutes)<=59)) return true;
    return false;
}

function toRomanDigits(arabicNumber){
    var arabicNumbers=[1,4,5,9,10,40,50];
    var romanNumbers=["I","IV","V","IX","X","XL","L"];
    var rdResult='';
    var n=arabicNumbers.length-1;
    while (arabicNumber>0){
        if (arabicNumber>=arabicNumbers[n]){
            rdResult+=romanNumbers[n];
            arabicNumber-=arabicNumbers[n];
        }
        else n--;
    }
return rdResult;
}
