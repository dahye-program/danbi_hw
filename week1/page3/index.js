/* -- MAIN FUNCTION -- */
window.onload = function (){
	var size = 100;
	setAnalogClockStyles( size );
  var fontSize = getFontSize();
	makeClockFace( size );
	setInterval( function(){ makeClockHands( size, fontSize ) }, 1000);
};
/* -- END MAIN -- */

//convenience functions
function cout( string ){ console.log( string ); }
function id( string ){ return document.getElementById( string ); }

//gets the pixel size of the font. Used
//to change the amount of dot divs created
//depending on the size of the font/clock
function getFontSize(){
  var analogClockID = id( "analog_clock" );
  var fontSize = window.getComputedStyle( analogClockID, null ).getPropertyValue( "font-size" );
  return parseFloat( fontSize );
}

//sets common styles for the clock
function setAnalogClockStyles( _size ){
	id( "analog_clock" ).style.cssText =
		"position: relative;" +
		"top: " + _size * 1.2 + "px;" +
		"left: " + _size * 1.2 + "px;" +
		"font-weight: bold;" +
     "font-size: " + _size * 1.5 + "%;";
}

//create and move clock face divs into a circle
//empty string in third arg tells createDivs to use
//counter as innerHTML
function makeClockFace( _size ){
	createDivs(12, "num", "", "gray" );
	moveDivs(12, "num", 30, _size );
}

//create the hands of the clock and
//set the date object to degrees
function makeClockHands( _size, _fontSize ){
	let Hour = document.getElementById('hour');
  let Minute = document.getElementById('minute');
  let Second = document.getElementById('second');
  let AmPm = document.getElementById('amOrpm');

  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  Hour.innerText =  hours < 10 ? `0${hours}` : hours +` :`;
  Minute.innerText = minutes < 10 ? `0${minutes}` : minutes;
  Second.innerText = seconds < 10 ? `0${seconds}`: seconds;
  AmPm.innerText = hours >= 12 ? `PM` : 'AM';

	var dot = "&#149";
  var fontSize = _fontSize / 4;
  cout( fontSize );
  
	//create the second hand
  var size = Math.floor( _size * 0.8 );
	var secondHand = Math.floor( size / fontSize );
	var secondID = "second";
	var secondDegree = date.getSeconds() * 6;
	createDivs( secondHand, secondID, "&#149", "green" );
	moveDivs( secondHand, secondID, secondDegree, size );

	//create the minute hand
  var size = Math.floor( _size * 0.6 );
	var minuteHand = Math.floor( size / fontSize );
	var minuteID = "minute";
	
	var minuteDegree = ( date.getMinutes() * 6 ) + ( date.getSeconds() * 0.1 );
	createDivs( minuteHand, minuteID, dot, "yellow" );
	moveDivs( minuteHand, minuteID, minuteDegree, size );

	//create the hour hand
	var size = Math.floor( _size * 0.5 );
  var hourHand = Math.floor( size / fontSize );
	var hourID = "hour";
	
	var hourDegree = ( date.getHours() * 30 ) + ( date.getMinutes() * .5 );
	createDivs( hourHand, hourID, dot, "#e91e63" );
	moveDivs( hourHand, hourID, hourDegree, size );
}

//add divs for the numbers of the clock face to the DOM
function createDivs( _numberOfDivs, _idName, _innerHTML, _color ){
	if( id( _idName + 1 ) ){//exit function if divs exist
		return;
	}else{
		for( var i=0; i < _numberOfDivs; i++ ){
			var div = document.createElement( "div" );
			div.id = _idName + ( i + 1 );

			//choose between the clock and the hands
			div.innerHTML = ( _innerHTML === "" ? ( i + 1 ) : _innerHTML );
			div.style.position = "absolute";
       div.style.color = _color;
			id( "analog_clock" ).appendChild( div );	
		}//end for
	}//end if
}//end function

//puts clock face number divs in a circle or hands in a line
function moveDivs( _numberOfDivs, _idName, _degree, _size ){
	var degrees = 360;
	var degree = _degree;
	var convertToRadian = Math.PI / 180;
	var degreeOffset = 90;
  var positionOffset = 0;
	var clockRadius = _size;
	var incrementValue;

	//checks if creating clock face or hands
	//if clock face, the for loop will increase degrees
	//if clock hands, the for loop will increase the radius
	if( _idName === "num" ){
		incrementValue = degrees / _numberOfDivs;
	}else{
		incrementValue = clockRadius / _numberOfDivs;
		clockRadius = 0;
	}//endif

	//loop iterates through the set of divs and
	//either moves the numbers around in a circle
	//or places the dot divs in a line
	for( var i = 0; i < _numberOfDivs; i++ ){
		var top = clockRadius * Math.sin( ( degree - degreeOffset ) * convertToRadian );
		var left = clockRadius * Math.cos( ( degree - degreeOffset ) * convertToRadian );
		id( _idName + ( i + 1 ) ).style.position = "absolute";
		id( _idName + ( i + 1 ) ).style.top = top + "px";

		//if creating the clock face and the numbers are 10 or larger
		//create an offset to position them a bit to the left
		if( _idName === "num" && i > 8 ){
			id( _idName + ( i + 1 ) ).style.left = ( left - 5 - positionOffset ) + "px";
		}else if( _idName === "num" ){
			id( _idName + ( i + 1 ) ).style.left = ( left - positionOffset ) + "px";
		}else{
      id( _idName + ( i + 1 ) ).style.left = left + "px";
    }//endif

		//if creating the clock face,
		//increment by degrees, otherwise icrement by the radius
		if( _idName === "num" ){
			degree += incrementValue;
		}else{
			clockRadius += incrementValue;
		}//end if
	}//end for
}//end function
