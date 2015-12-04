alert('HELLO WORLD');

function change (){
	document.getTlementById('result').innerHTML = "heyyyy";
}

var foo = ["james", "barns", "sara"];

var toyota = ['prius', 'camry'];
var porsches = ['ceyanne', 'boxer',];
var cars = [toyota, porsches];

var user = {
	name: 'Sara',
	last: 'Lands',
	age: 23,
	address: '2122 Christian St.',
	phoneNumber: '609-338-8361'

};

var num1 = 10;
var num2 = 5;
var total = num1 + num2;
console.log(total);

var fname = 'Steve';
var lname = 'Marks';
alert ();

if( 5 > 10){
	console.log('You will never see this');
} else {
	console.log ('the above was false, so you are here');

}


var myString = 'bar';

if(myString === 'foo'){
	console.log('The strings are equal');
} else {
	console.log ('The strings are NOT equal');
	}



if (5 > 10){
	console.log ('You will never see this!');
} else if (5 < 10) {
	console.log ('You will see this');
} else {
	console.log ('You will never end up here');
}


function someName (numberOne, numberTwo){
	console.log (numberOne + numberTwo);
	return numberOne + numberTwo;

}

var newNumber = someName (20,3);


function pickDoor (door){
	if (door === 'door1'){
	console.log ('You selected door 1 and win a car!');
} else if (door === 'door2') {
	console.log ('You selected door 2 and win a bike!');
} else {
	console.log ('You selected door 3 and win a hotdog!');
	}
}




for( var i = 0; i < 10; i++){
	console.log (i);
}




var beers = ['lager', 'amstel', 'again', 'chief'];
for(var i = 0; i < beers.length; i++){
	console.log (beers[i]);
}




var friends = [ 'Sara', 'Jackie', 'Chelsea'];
for (var i = 0; i < friends.length; i++){
	console.log(friends[i] + ' is my friend');
}


var friends = [ 'Sara', 'Jackie', 'Chelsea'];
for (var i = 0; i < friends.length; i++){
	console.log(friends[i] + ' is my friend');
}

//99 bottle of beer on the wall

y = 99;
while(y > 0) {
	console.log( y + 'bottles of beer on the wall');
	y--;
}
}
