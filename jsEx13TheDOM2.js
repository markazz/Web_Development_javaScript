/*
Author: mark rasheed
date: 12/01/2016
updated: 12/01/2016
*/



/*1.	Using getElementById(), assign a class to the first div
This should result in a 2px dashed blue border surrounding the div.
*/


// get the element
var firstDiv = document.getElementById("content");

// update or change
firstDiv.className = "myFirstDiv";




//************************************


//2.Using querySelector(), assign a class to the first abbr element here: div#content p abbr

//get the location
var qSelector1 = document.querySelector("div#content p abbr");


// update or change

qSelector1.className = "qSel1";


//************************************


//3.Using getElementsByTagName(), assign a class to all strong elements.


// get the nodeList
var strongNodeList = document.getElementsByTagName("strong");


// use for loop 
// check if there are elements 
if(strongNodeList.length > 0)
{

	for(var i=0; i< strongNodeList.length; i++)
		{

		//update or change
		strongNodeList[i].className = "stronger";

		}
}

//************************************

//4.Assuming that the h1 and h2 elements employ the same class, use getElementsByClassName() to change  that class.

// need to fix the bug here
var headingNodeList =document.getElementsByClassName("h1,h2.headingClass");

//if it contains items
if(headingNodeList.length > 0)
{

//loop through each item
for(var j=0; j<headingNodeList.length; j++)
	{
	//change value of class attribute
	headingNodeList[j].className = "headerColour";
	}
}
//************************************
//5.Using querySelectorAll(), 
//loop through all the li element 
//nodes: div#menu li.className  and change the name of the class in use.

var listItemsNodeList = document.querySelectorAll("div#menu li.listItems");

//check if there are items
if(listItemsNodeList.length > 0)
{

//loop through the items
for(var b=0; b < listItemsNodeList.length; b++)
{
	//update or change the value of class attribute
	listItemsNodeList[b].className = "listItemsColour";
}
}


//********************************************
//6.	Modify your code so that you can observe the difference between a live nodelist and a static nodelist.


//live node 
// first division
// need to complete 
var parent = document.getElementById("myFirstDivHtml");











