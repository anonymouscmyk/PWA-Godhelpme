let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "What is the Capital of Iraq?",
	"a": "Baghdad",
	"b": "Tehran",
	"c": "Kabul",
	"d": "Santo Domingo",
	"image":"quizimages/q1.png",
	"answer": "a"
   },
   {
	"question": "What country has only one border?",
	"a": "Lesotho",
	"b": "Russia",
	"c": "Canada",
	"d": "Mexico",
	"image":"quizimages/q2.png",
	"answer": "a"
   },
    {
	"question": "What is the calling code for India?",
	"a": "1",
	"b": "57",
	"c": "91",
	"d": "672",
	"image":"quizimages/q3.png",
	"answer": "c"
   },
   {
	"question": "What is the GINI Index for the USA?",
	"a": "40",
	"b": "48",
	"c": "35",
	"d": "20",
	"image":"quizimages/q4.svg",
	"answer": "b"
   },
    {
	"question": "What is the capital of India?",
	"a": "Dhaka",
	"b": "Islamabad",
	"c": "Bangkok",
	"d": "Delhi",
	"image":"quizimages/q5.jpg",
	"answer": "d"
   },
    {
	"question": "What country is the flag being displayed from?",
	"a": "Brazil",
	"b": "Mexico",
	"c": "Panama",
	"d": "Colombia",
	"image":"quizimages/q6.png",
	"answer": "c"
   },
    {
	"question": "Where is the famous monument in the picture located?",
	"a": "Lyon, France",
	"b": "Paris, France",
	"c": "Versailles, France",
	"d": "Venice, Italy",
	"image":"quizimages/q7.jpg",
	"answer": "b"
   },
    {
	"question": "what is the approxamite population of The United Kingdom?",
	"a": "100 million",
	"b": "65 million",
	"c": "800 thousand",
	"d": "50 million",
	"image":"quizimages/q8.jpg",
	"answer": "b"
   },
    {
	"question": "How many member states are in the UN?",
	"a": "200",
	"b": "150",
	"c": "69",
	"d": "193",
	"image":"quizimages/q9.svg",
	"answer": "d"
   },
    {
	"question": "What country has the longest coastline overall?",
	"a": "Indonesia",
	"b": "Greenland",
	"c": "Canada",
	"d": "Russia",
	"image":"quizimages/q10.jpg",
	"answer": "c"
   },
   {
	"question": "What country has its Capital as 'Kiev'?",
	"a": "Russia",
	"b": "Belarus",
	"c": "Ukraine",
	"d": "Estonia",
	"image":"quizimages/q11.jpg",
	"answer": "c"
   },
   {
	"question": "Which Country, out of the 4 listed below, does not have the Queen of England as its Head of State?",
	"a": "India",
	"b": "United Kindgom",
	"c": "Austrailia",
	"d": "New Zealand",
	"image":"quizimages/q12.png",
	"answer": "a"
   },
   {
	"question": "Which one of the following Countries does not have a standing Military?",
	"a": "Egypt",
	"b": "Iceland",
	"c": "Belarus",
	"d": "Sudan",
	"image":"quizimages/q13.jpg",
	"answer": "b"
   },
    {
	"question": "Which one of the following countries has limited recognition at the UN?",
	"a": "Thailand",
	"b": "Bhutan",
	"c": "Taiwan",
	"d": "Lithuania",
	"image":"quizimages/q14.png",
	"answer": "c"
   },
    {
	"question": "What is the oldest country in the world?",
	"a": "San Marino",
	"b": "Vatican City",
	"c": "Egypt",
	"d": "Iran",
	"image":"quizimages/q15.jpg",
	"answer": "a"
   }
 ];
 
 
 function loadQuestion() {
	if(currentQuestion == 0){
		closeLightBox();
	}
	//load the image
	let img = document.getElementById("image");
	let preLoadImg = new Image();
	preLoadImg.src =questions[currentQuestion].image;

	preLoadImg.onload = function (){
		img.width = this.width;
	};
	img.style.maxWidth= "80%";
	img.style.margin= "5px";
	img.src = preLoadImg.src;
    //load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
	document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
	document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
	document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	document.getElementById("score").innerHTML = score + "/" + questions.length;
 } // loadQuestion
 
 
 function markIt(ans) {

	// if answer is correct
	if (ans ==questions[currentQuestion].answer) {
		//add one to score
		score++;
		//display score on webpage
		document.getElementById("score").innerHTML = score  + "/" + questions.length;

		message= "Correct!!! your score is " + score + "/" + questions.length;
	}//if
	else{
		message = "Incorrect :( your score is still " + score + "/" + questions.length;


	}//else

	

	//move to next question
	currentQuestion++;
	if (currentQuestion >= questions.length){
		//create a special message
		if(score <= 7){
			message = score  + "/" + questions.length + ". Nice Try, but your score can be better. Click Anywhere on the Page to Try Again.";
			replay();
		}
		else if(score <= 14){
			message =  score  + "/" + questions.length + ". Good Score, but can you get all of them correct? Click Anywhere on the Page to Try Again.";
			replay();
		}
		else{
			message= score  + "/" + questions.length + ". Great Job! You have a great knowledge of Geography. Click Anywhere on the Page to Try Again.";
			replay();
		}
	}
	else{
		loadQuestion();
	}

	//show lightbox
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").innerHTML = message;
 } // markIt
 //skip question


 function closeLightBox(){
	document.getElementById("lightbox").style.display = "none";
 }//close lightbox
 //replay
 function replay(){
	score = 0;
	currentQuestion = 0;
	loadQuestion();
	closeLightBox();
	document.getElementById("score").innerHTML = "0"  + "/" + questions.length;
 }

 
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}       
 
 
 
 
 
 
 
 
 
 

