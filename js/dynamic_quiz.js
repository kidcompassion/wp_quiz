	
	var correct = 0; //will hold the total number of correct answers
	var incorrect = 0; //will hold the total number of incorrect answers
	var answer;

//create an array to hold the var names for each question

var surfacedQuestions = new Array();



//Create the Question Object
function Question(full, groupName, firstOption, secondOption, thirdOption, correctAnswer, fullAnswer){
	this.full = full;
	this.groupName = groupName;
	this.firstOption = firstOption;
	this.firstValue = firstOption.replace(/\s/g, "-").toLowerCase();
	this.secondOption = secondOption;
	this.secondValue = secondOption.replace(/\s/g, "-").toLowerCase();
	this.thirdOption = thirdOption;
	this.thirdValue = thirdOption.replace(/\s/g, "-").toLowerCase();
	this.correctAnswer = correctAnswer.replace(/\s/g, "-").toLowerCase();
	this.fullAnswer = fullAnswer;
	this.getInfo = function getInfo(){
		var details = '<div class="'+this.firstValue+'"><p>' + this.full + '</p><ul>';
		details = details + '<li><input type="radio" name="' + this.groupName + '" value="' + this.firstValue + '"><label for="' + this.firstValue + '">' + this.firstOption + '</label></li>';
		details = details + '<li><input type="radio" name="' + this.groupName + '" value="' + this.secondValue + '"><label for="' + this.secondValue + '">' + this.secondOption + '</label></li>';
		details = details + '<li><input type="radio" name="' + this.groupName + '" value="' + this.thirdValue + '"><label for="' + this.thirdValue + '">' + this.thirdOption + '</label></li>';
		details = details + '</ul>';
		details = details + '<button type="button" class="btn btn-primary">Submit</submit></div>';
		return details;
	}
}





var questionHeadline = new Question(
	'I spent several years as a print journalist. Which of these is a real story that I really wrote?',
	'headline',
	'Man Arrested with 41 Turtles in his Pants',
	'Private Dancer seeks license to pursue career in taxidermy',
	'Shark Nearly Chokes to Death on Moose',
	'Private Dancer seeks license to pursue career in taxidermy',//correct answer
	'This was my first byline in a major market paper.' //fullAnswer

);

var questionExcitement = new Question(
	'Which of these accomplishments was I most excited about?',
	'excitement',
	'Having my work appear on Buzzfeed',
	'Buying my first home',
	'Independently producing a 6 part news series for Canadian TV',
	'Having my work appear on Buzzfeed', //correctAnswer
	'Another in a string of highly intellectual projects' //fullanswer
);

var questionMovie = new Question(
	'My friend has a theory: your favorite movie isn\'t what you would claim it is, but whatever you have seen the most times. Using this logic, is my favorite movie:',
	'movie',
	'Weekend at Bernie\'s 2',
	'Police Academy 2',
	'Mannequin 2',
	'Police Academy 2', //correct answer
	'We owned 2 VHS tapes as a kid' //fullAnswer
);

var questionBooks = new Question(
	'I\'m a serious book hoarder. What horrifying number of books have I accumulated in my to be read pile?',
	'books',
	'20',
	'35',
	'55',
	'55', //correct answer
	'I am the exact person the amazon one click purchase was made for.' //fullAnswer
);

var questionSallys = new Question(
	'Which 1980s icon shared both my name and my fearless sense of style?',
	'sallys',
	'Sally Field',
	'Sally Ride',
	'Sally Jessy Raphael',
	'Sally Jessy Raphael',//correct answer
	'The picture says it all.' //fullAnswer
);

var questionBackpain = new Question(
	'I have a creaky lower back. What did I do that first caused this affliction, and at what age?',
	'backpain',
	'Karate high kicks in a Holiday Inn swimming pool, age 29',
	'A fall down a half-flight of stairs, age 20',
	'A belligerent refusal to accept help in carrying a guitar amp, age 25',
	'Karate high kicks in a Holiday Inn swimming pool, age 29',//correct answer
	'I don\'t owe you an explanation.' //fullAnswer
);

var questionKindness = new Question(
	'I am frequently approached on the street by people needing help - whether it\'s to know the time, get directions, or something else (I think I just have that kind of a face). On one memorable occasion, a tiny elderly woman was getting off a city bus and gestured for me to help carry her walker to the street. How did this meeting end?',
	'kindness',
	'With milk and cookies at her apartment.',
	'With an unexpected high-five.',
	'With her yelling at me.',
	'With her yelling at me.',//correct answer
	'As I reached out to lower the woman\'s walker off the bus, she paused. Not wanting to jerk her forward, I also paused. This created a stalemate. Clearly having places to go, the woman shouted "Come ON, LET\'S GO!", Diddy-style.' //fullAnswer
);

var questionFavoritejob = new Question(
	'My career has had a lot of unexpected twists and turns. Of all my jobs to date, though, which one was my favorite?',
	'favoritejob',
	'The odd combination of web designer and eReader telephone support, Edmonton Public Library.',
	'Clerk, Video Spot.',
	'Night editor, A Channel Winnipeg',
	'The odd combination of web designer and eReader telephone support, Edmonton Public Library.',//correct answer
	'I was like Samuel L Jackson in the Negotiator. Furious patrons would call up, ready to light their device on fire. But I was the eReader whisperer.' //fullAnswer
);

var questionActress = new Question(
	'Lifetime TV Canada is casting a terrible Canadian TV movie version of my life. Who plays me?',
	'actress',
	'Angelina Jolie.',
	'Bea Arthur',
	'Character actor Brian Dennehy',
	'Character actor Brian Dennehy',//correct answer
	'It\'s hard to get without actually meeting in person - but trust me. I have a lot of gravitas.' //fullAnswer
);

//UTILITY FUNCTIONS

//Clear the containing div
function clearDiv(){
	$('#question').empty();
}

//Knuth Shuffle, to mix up the questions
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

	surfacedQuestions = [questionHeadline, questionExcitement, questionMovie, questionBooks, questionSallys, questionBackpain, questionKindness, questionFavoritejob, questionActress];
	shuffle(surfacedQuestions);
	surfacedQuestions = surfacedQuestions.slice(0, 4);
	console.log(surfacedQuestions.length);


//Making the actual questions/answers
function generator(){
	if (surfacedQuestions.length > 0){
		var thisQuestion = surfacedQuestions.shift(); //get whatever turns up first in the array
		$('#question').append(thisQuestion.getInfo());
		$('button').click(function(){
			var groupName = $('input[type="radio"]:checked').val();
			if (groupName == thisQuestion.correctAnswer){
				console.log('you got it');
				answer = '<h2>You Got It!</h2>';
				answer = answer + '<p>' + thisQuestion.fullAnswer + '</p>';
				correct++;
			} else {
				console.log('fail');		
				answer = '<h2>Sorry, Friend! Wrong Guess!!</h2>';
				answer = answer + '<p>' + thisQuestion.fullAnswer + '</p>';
				incorrect++;
			}
			clearDiv();
			$('#question').append(answer);
			$('#question').append('<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div><button type="button" class="btn btn-primary nextOne">Beer me my results!</button>');
				//Make way for the next question
				$('.nextOne').click(function(){
						clearDiv();
						generator();
				});
		});
	}
	else {
		if (correct > 2){
			$('#question').append('<div>You got ' + correct + ' answers right! You\'re a friggin\' genius!</div>');
		} else {
			$('#question').append('<div>You only got ' + correct + ' answers right... I feel like you don\'t know me at all.</div>');
		}
	}
}




generator();









//alert(question.getInfo());

//question/answer object
/*
var question_1 = {
	title: 'Question 1',
	full: 'I spent several years as a print journalist. Which of these is a real story that I really wrote?',
	optionOne: 'Man Arrested with 41 Turtles in his Pants',
	optionTwo: 'Private Dancer seeks license to pursue career in taxidermy',
	optionThree: 'Shark Nearly Chokes to Death on Moose',
	correctAnswer: optionTwo,
	correctMsg: 'Good job!',
	incorrectMsg: 'Sorry!',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}
var question_2 = {
	title: 'Question 2',
	full: 'Which of these accomplishments was I most excited about?',
	optionOne: 'Having my work appear on Buzzfeed',
	optionTwo: 'Buying my first home',
	optionThree: 'Independently producing a 6 part news series for Canadian TV',
	correctAnswer: optionOne,
	correctMsg: 'Good job',
	incorrectMsg: 'Fail',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}
var question_3 = {
	title: 'Question 3',
	full: 'My friend has a theory: your favorite movie is ACTUALLY whatever you have seen the most times, not what you say it is. Using this logic, is my favorite movie:',
	optionOne: 'Ski School 2',
	optionTwo: 'Weekend at Bernies 2',
	optionThree: 'Police Academy 2',
	correctAnswer: optionThree,
	correctMsg: 'Good job',
	incorrectMsg: 'Fail',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}
var question_4 = {
	title: 'Question 4',
	full: 'I\'m a serious book hoarder. How many titles do I have backed up as a result of Amazon\'s cursed one-click purchase?',
	optionOne: '18',
	optionTwo: '29',
	optionThree: '58',
	correctAnswer: optionThree,
	correctMsg: 'Good job',
	incorrectMsg: 'Fail',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}
var question_5 = {
	title: 'Question 5',
	full: 'Which popular 80s, and shared namesake, was I often compared to in my tween years?',
	optionOne: 'Sally Ride',
	optionTwo: 'Sally Jessy Raphael',
	optionThree: 'Sally Field',
	correctAnswer: optionTwo,
	correctMsg: 'Good job',
	incorrectMsg: 'Fail',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}
var question_6 = {
	title: 'Question 6',
	full: 'Which job is the one I call my all time favorite?',
	optionOne: 'Web Designer, Edmonton Public Library',
	optionTwo: 'Sandwich Artist, Subway',
	optionThree: 'Post-production Editor, CityTV Edmonton',
	correctAnswer: optionOne,
	correctMsg: 'Good job',
	incorrectMsg: 'Fail',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}/*
var question_7 = {
	title: 'Question 7',
	full: 'This is the question.',
	optionOne: 'Answer one',
	optionTwo: 'Answer Two',
	optionThree: 'Answer Three',
	correctAnswer: 'Good job!',
	correctMsg: 'Good job',
	incorrectMsg: 'Fail',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}
var question_8 = {
	title: 'Question 8',
	full: 'This is the question.',
	optionOne: 'Answer one',
	optionTwo: 'Answer Two',
	optionThree: 'Answer Three',
	correctAnswer: 'Good job!',
	correctMsg: 'Good job',
	incorrectMsg: 'Fail',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}
var question_9 = {
	title: 'Question 9',
	full: 'This is the question.',
	optionOne: 'Answer one',
	optionTwo: 'Answer Two',
	optionThree: 'Answer Three',
	correctAnswer: 'Good job!',
	correctMsg: 'Good job',
	incorrectMsg: 'Fail',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}
var question_10 = {
	title: 'Question 10',
	full: 'This is the question.',
	optionOne: 'Answer one',
	optionTwo: 'Answer Two',
	optionThree: 'Answer Three',
	correctAnswer: 'Good job!',
	correctMsg: 'Good job',
	incorrectMsg: 'Fail',
	currentTotal: '<div>So far you have ' + correct + ' answer right and ' + incorrect + ' answer wrong.</div>',
}
*/
