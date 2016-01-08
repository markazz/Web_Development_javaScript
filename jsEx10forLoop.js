/*
1.	Write a Javascript for loop to display the
 six different heading elements available in HTML, i.e. <h1>.........</h6>

*/

var headingsArray = ["<h1>  </h1>","<h2>  </h2>","<h3>  </h3>","<h4>  </h4>","<h5>  </h5>","<h6>  </h6>"];

//array size
var headingsArraySize = headingsArray.length;
var j;
var msg1 = "";

for(j=0; j<headingsArraySize; j++)
{
	msg1 += "heading  "+(j+1)+" : ";
	msg1 += "  "+headingsArray[j] +"  ";
}

	document.getElementById("theHeadings2").textContent = msg1;

// does not display line 17
//document.getElementById("theHeadings2").innerHTML = msg1;

//******************************************************************************

/*
2.	Modify the loop so that your HTML page actually displays
six different headings, all generated by the loop.
*/

var myArray = [11,20,82,33,554,74,12];
//size of array
var myArraySize = myArray.length;
// to display
var msg ="";
//counter
var i;

// to display the headings 
for(i=1; i<myArraySize; i++)
{
	msg += "<br>";
	// displaying the headings
	msg +=  "<h"+i+">"+"heading"+i+"</h"+i+">";
}

//to link the elements in html 
document.getElementById("theHeadings").innerHTML = msg;
