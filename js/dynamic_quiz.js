/* Quiz v 1.0 */

var correct = 0; //will hold the total number of correct answers
var incorrect = 0; //will hold the total number of incorrect answers
var answer; //will eventually hold the correct answer to return
var count = 1; //will count which question the user is on

//Create an array to hold the var names for each question
var surfacedQuestions = new Array();

//Create the Question Object
function Question(full, groupName, firstOption, secondOption, thirdOption, correctAnswer, fullAnswer, blurryImageLink, imageLink){
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
	this.blurryImageLink = blurryImageLink;
	this.imageLink = imageLink;
	this.getInfo = function getInfo(){
		var details = '<div class="'+this.firstValue+'"><p>' + this.full + '</p><ul>';
		details = details + '<li><input type="radio" id="' + this.firstValue + '" name="' + this.groupName + '" value="' + this.firstValue + '"><label for="' + this.firstValue + '">' + this.firstOption + '</label></li>';
		details = details + '<li><input type="radio" id="' + this.secondValue + '" name="' + this.groupName + '" value="' + this.secondValue + '"><label for="' + this.secondValue + '">' + this.secondOption + '</label></li>';
		details = details + '<li><input type="radio" id="' + this.thirdValue + '" name="' + this.groupName + '" value="' + this.thirdValue + '"><label for="' + this.thirdValue + '">' + this.thirdOption + '</label></li>';
		details = details + '</ul>';
		details = details + '<button type="button" class="radioSubmit btn btn-primary">Submit <i class="fa fa-chevron-circle-right"></i></button></div>';
		return details;
	}
}

//Question Objects

var questionExcitement = new Question(
	'Which of these accomplishments was I most excited about?',
	'excitement',
	'Having something I made appear on Buzzfeed',
	'Buying my first home',
	'Independently producing a 6 part news series for Canadian TV',
	'Having something I made appear on Buzzfeed', //correctAnswer
	'During last year\'s Oscars, I amused myself by photoshopping Benedict Cumberbatch into <a href="https://twitter.com/SallyPoulsen/status/440343866961444864" target="_blank">images from winning films</a>, and then tweeting them (another in my series of <a href="http://sallypoulsen.com/edited-for-tv-ifier/" target="_blank">highly intellectual personal projects</a>). <br /> Much to my delight, one of my images <a href="http://www.buzzfeed.com/tomphillips/pictures-of-benedict-cumberbatch-photobombing-things#3iyir20" target="_blank">wound up on Buzzfeed</a>(#7). ', //fullanswer
	'images/cumberbombed.png',
	'images/cumberbombed.png'
);

var questionMovie = new Question(
	'A friend of mine has a theory: your favorite movie isn\'t what you SAY it is, but whatever you have seen the most times. Using this logic, is my favorite movie:',
	'movie',
	'Weekend at Bernie\'s 2',
	'Police Academy 2',
	'Mannequin 2',
	'Police Academy 2', //correct answer
	'When I was 8, I decided I wanted to be able to say I had seen a movie 100 times. So I watched our VHS copy of Police Academy over and over and over again, making it my \'favorite\' movie to this day.', //fullAnswer
	'images/police_academy.jpg',
	'images/police_academy.jpg'
);

var questionBooks = new Question(
	'I\'m a serious book hoarder. What horrifying number of books have I accumulated in my to-be-read pile?',
	'books',
	'20 Books',
	'35 Books',
	'55 Books',
	'55 Books', //correct answer
	'Yes, I am the exact person the Amazon one-click purchase was made for. (And technically, it\'s now 56, since I just bought <a href="http://www.amazon.ca/How-Google-Works-Eric-Schmidt/dp/1455582344">How Google Works</a>.', //fullAnswer
	'images/books.jpg',
	'images/books.jpg'
);

var questionSallys = new Question(
	'Which 1980s icon shared both my name and my fearless sense of style?',
	'sallys',
	'Sally Field',
	'Sally Ride',
	'Sally Jessy Raphael',
	'Sally Jessy Raphael',//correct answer
	'The picture says it all. (If you\'re interested, here\'s <a href="https://www.youtube.com/watch?v=3xDWBM1N55E&list=UUm2cBYjTZlP9d1atOfdmtxw" target="_blank">the full holiday concert video of me looking, at age 9,  like a 40-something Divorcee with a night job as a Riverboat Blackjack dealer.</a>)', //fullAnswer
	'images/sallys.jpg',
	'images/sallys.jpg'
);

var questionBackpain = new Question(
	'I have a creaky lower back. What did I do that first caused this affliction, and at what age?',
	'backpain',
	'Karate high kicks in a Holiday Inn swimming pool, age 29',
	'A fall down a half-flight of stairs, age 20',
	'A belligerent refusal to accept help in carrying a guitar amp, age 25',
	'Karate high kicks in a Holiday Inn swimming pool, age 29',//correct answer
	'I can\'t even really explain this, except to say that I had the pool to myself and it just sort of made sense at the time.', //fullAnswer
	'images/karate-kyle.jpg',
	'images/karate-kyle.jpg'
);

var questionKindness = new Question(
	'On the street, I\'m often approached by people needing help - whether it\'s to know the time, get directions, or something else. <br />On one memorable occasion, a tiny elderly woman was getting off a city bus and gestured for me to help carry her walker to the street. How did this meeting end?',
	'kindness',
	'With milk and cookies at her apartment',
	'With an unexpected high-five',
	'With her yelling at me',
	'With her yelling at me',//correct answer
	'As I reached out to lower the woman\'s walker off the bus, she paused. Not wanting to yank her into the street, I also paused. This created a stalemate, which prompted her to shout "Well, COME ON! LET\'S GOOOOO!", Diddy-style.', //fullAnswer
	'images/angry-old-lady.jpg',
	'images/angry-old-lady.jpg'
);

var questionFavoritejob = new Question(
	'My career has had a lot of unexpected twists and turns. Of all my jobs to date, though, which one was my favorite?',
	'favoritejob',
	'The odd combination of web designer and eReader telephone support, Edmonton Public Library',
	'Clerk, Video Spot',
	'Night editor, A Channel Winnipeg',
	'The odd combination of web designer and eReader telephone support, Edmonton Public Library.',//correct answer
	'Move over, Samuel L. Jackson in the Negotiator. In the early days of EPL offering digital materials, I fielded all range of calls from patrons - furious, confused, desperate. I talked them in off ledges and developed a near encyclopedic knowledge of (now obsolete) eReaders in the process. Just call me the Sony PRS-T3 Whisperer.', //fullAnswer
	'images/whisperer.jpg',
	'images/whisperer.jpg'
);

var questionActress = new Question(
	'Lifetime TV Canada is casting a terrible Canadian TV movie version of my life. Who plays me?',
	'actress',
	'Angelina Jolie',
	'Bea Arthur',
	'Character actor Brian Dennehy',
	'Character actor Brian Dennehy',//correct answer
	'It\'s hard to get without actually meeting in person - but trust me. I have a lot of gravitas.', //fullAnswer
	'images/dennehy.jpg',
	'images/dennehy.jpg'
);

var questionVince = new Question(
	'There is a Vince Vaughn movie that brings a tear to my eye, every time, without fail. (Yes, seriously). Is it:',
	'vince',
	'The Internship',
	'Dodgeball',
	'Old School',
	'The Internship', //correct answer
	'The Internship. Gets me. Every. Time. (Fun fact: the <a href="https://www.youtube.com/watch?v=d3U_U_T5CRU" target="_blank">"I\'ve still got some stuff in the basement" speech from Rocky Balboa</a> has the same effect.)', //fullAnswer
	'images/the_internship.gif',
	'images/the_internship.gif'
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

//Create array of objects to go through
surfacedQuestions = [questionExcitement, questionMovie, questionBooks, questionSallys, questionBackpain, questionKindness, questionFavoritejob, questionActress, questionVince];
//Shuffle the objects
shuffle(surfacedQuestions);
//Pick the first 4 post-shuffle
surfacedQuestions = surfacedQuestions.slice(0, 4);

//Generate the actual questions/answers
function generator(){
	if (surfacedQuestions.length > 0){ //if there are questions
		var thisQuestion = surfacedQuestions.shift(); //get whatever turns up first in the array
		$('#question').append(thisQuestion.getInfo());
		//Submit answer
		$('.radioSubmit').click(function(){
			var groupName = $('input[type="radio"]:checked').val();
			if ($('input[type="radio"]:checked').length > 0){
				if (groupName == thisQuestion.correctAnswer){
					answer = '<div class="col-sm-6"><div class="feedback">';
					answer = answer + '<i class="right fa fa-check-circle-o fa-3x"></i><h3>You Got It!</h3></div>';
					answer = answer + '<img src="'+ thisQuestion.blurryImageLink +'"/></div>';
					answer = answer + '<div class="col-sm-6"><p>The Right Answer:<br/> <span class="titlecase right text-center">' + thisQuestion.correctAnswer.replace(/-/g, " ") + '</p>';
					answer = answer + '<p class="description">' + thisQuestion.fullAnswer + '</p>';
					correct++;
				} else {
					answer = '<div class="col-sm-6"><div class="feedback">';	
					answer = answer + '<i class="wrong fa fa-times-circle fa-3x"></i><h3>Ooh, so close!</h3></div>';
					answer = answer + '<img src="'+ thisQuestion.blurryImageLink +'"/></div>';
					answer = answer + '<div class="col-sm-6"><p>The Right Answer:<br /> <span class="titlecase right">' + thisQuestion.correctAnswer.replace(/-/g, " ") + '</span></p>';
					answer = answer + '<p class="description">' + thisQuestion.fullAnswer + '</p>';
					incorrect++;
				}
				clearDiv();

				//Print the appropariate answer
				$('#question').append(answer);

				//Create the "next" button, dependant on which question we're on
				var nextButton = '<button type="button" class="btn btn-primary nextOne">Next Question <i class="fa fa-chevron-circle-right"></i></button>';
				if (count == 4) {
					nextButton = '<button type="button" class="btn btn-primary nextOne">Beer me my results! <i class="fa fa-chevron-circle-right"></i></button>';
				}

				$('#question').append('<div class="row"><div class="basepadding col-sm-12 text-center"><em>So far, you have ' + correct + ' right and ' + incorrect + ' wrong.</em><br/>' + nextButton + '</div></div>');
					//Make way for the next question
					$('.nextOne').click(function(){
						if (count < 4){
							count++;
							$('.questionNumber').empty().append('Question ' + count + ' of 4' );
						} else {
							$('.questionNumber').empty().append('Your Results');
						}
						clearDiv();
						generator();
					});
			}else {
				if ($('.content-wrapper .wrong').length == 0){
					$('.content-wrapper').prepend('<span class="error wrong">You didn\'t pick an answer, silly!</span>');
				}
				
			}
		});
	}
	else {
		var reloadBtn = '<button type="button" class="btn btn-primary tryagain">Try again</button>';

		if (correct > 2){
			$('#question').append('<div class="results"><i class="fa right fa-thumbs-o-up fa-4x"></i><h3>You + Me = BFFs</h3><img src="images/bro-montana.gif"/><p>You got ' + correct + ' answers right!</p> <p>YOU GET ME!</p></div>' + reloadBtn);
		} else {
			$('#question').append('<div class="results"><i class="fa wrong fa-thumbs-o-down fa-4x"></i><h3>You Don\'t Get Me at All</h3><img src="images/double-facepalm.jpg"/><p>You only got ' + correct + ' answers right.</p> <p>...It\'s as though we\'re complete strangers.</p> </div>' + reloadBtn);
		}
		$('.tryagain').click(function(){
			document.location.reload();
		});

	}
}

//Change the header to show which question you're on

$(document).ready(function(){
	$('.start').click(function(){
		$('#question').empty();
		generator();
		$('.questionNumber').append('Question ' + count + ' of 4' );
		$('header h2').append('Get to Know Sally <span class="wrong">BETA</span>');
		$('body').css({
			'background-image': 'url(images/bg.jpg)',
			'background-repeat': 'repeat'
		});
		$('footer').css('background', 'none');
		
	});

});