
// question 1
// answer 1
var str1= 'Today is';
var str2= '       a beautiful day    ';
var str3=' In Hawaii.   ';
var result=str1.trim()+" "+str2.trim()+" "+str3.trim()

console.log("Result",result)



// question 2
// answer 2
var enterAlphabet='d' 
if(enterAlphabet >='a' && enterAlphabet <='d'){
    switch(enterAlphabet)
    {
        case'a':
        console.log("vowel");
        break;
        case'e':
        console.log('vowel');
        break;
        case'i':
        console.log('vowel');
        break;
        case'o':
        console.log('vowel');
        break;
        case'u':
        console.log('vowel');
        break;
        default:
            console.log('constant');
            break;

    }
}
else {
    console.log('non-alphabet');
}

// question 3
// answer 3

var number_1 = parseInt(prompt("Enter the first value"));
var operator = parseInt(prompt("Enter the operation to perform [+, -, *, /]"));
var number_2 = parseInt(prompt("Enter the second value"));

switch(operator)
{
	case '+':
		console.log(number_1 + " " + operator + " " + number_2 + " = " + (number_1 + number_2));
		break;
	case '-':
		console.log(number_1 + " " + operator + " " + number_2 + " = " + (number_1 - number_2));
		break;
	case '*':
		console.log(number_1 + " " + operator + " " + number_2 + " = " + (number_1 * number_2));
		break;
	case '/':
		console.log(number_1 + " " + operator + " " + number_2 + " = " + (number_1 / number_2));
		break;
	default:
		console.log("Invalid operation entered");
		break;
}

// question 4
// answer 4

var a=parseInt(prompt('enter the first side'))
var b=parseInt(prompt('enter the two side'))
var c=parseInt(prompt('enter the three side'))
 if( a==b==c){
    console.log("triangle is equilateral traingle")
 }
 else if( a==b || b==c || c==a){
    console.log('isosceles triangle')
    
 }
 else {
    console.log('scalene triangle')
 }


// question 5
// answer 5

var units = parseFloat(prompt("Enter number of electricity units"));
var bill = 0;

// For first 50 units Rs. 0.50/unit
if(units <= 50 && units > 0)
{
	bill = bill + (units * 0.50);
	units = 0;
}
else if(units > 0)
{
	bill = bill + (50 * 0.50);
	units = units - 50;
}

// For next 100 units Rs. 0.75/unit
if(units <= 100 && units > 0)
{
	bill = bill + (units * 0.75);
	units = 0;
}
else if(units > 0)
{
	bill = bill + (100 * 0.75);
	units = units - 100;
}

// For next 100 units Rs. 1.20/unit
if(units <= 100)
{
	bill = bill + (units * 1.20);
	units = 0;
}
else if(units > 0)
{
	bill = bill + (100 * 1.20);
	units = units - 100;
}

// For unit above 250 Rs. 1.50/unit
if(units > 0)
{
	bill = bill + (units * 1.50);
}

// An additional surcharge of 20% is added to the bill.
bill = bill + (bill * 0.2);

console.log("Total Bill: ", bill); 
