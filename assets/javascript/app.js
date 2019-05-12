$(document).ready(function(){//I need jQuery to run!

    window.onload = function() {
        $('#lap').click(stopwatch.recordLap);
        $('#stop').click(stopwatch.stop);
        $('#reset').click(stopwatch.reset);
        $('#start').click(stopwatch.start);
    };

    var intervalId;

	var questions = [
	{
		question:"What kind of dog is this?",
		a:"red",
		b:"purple",
		c:"blue",
		d:"yellow",
		name:"q1",
		correct:"d",
	}];

	var second = [
		{
		question:"What kind of cat is this?",
		e:"1",
		f:"2",
		g:"3",
		h:"4",
		name:"q2",
		correct:"1",
	}];
	


    var clockRunning = true;

    var stopwatch = {
        
        time: 0,
        lap: 1,

        reset: function() {
            
            stopwatch.time= o;
            stopwatch.lap = 1;
            $('#display').text('00:00');
        },
    start: function() {
      if(!clockRunning) {
            intervalid = setInterval(stopwatch.count, 1000);
       		clockRunning = true;
            }
        },
        stop: function() {

        },
        count: function() {
            stopwatch.time++;
        }
    }
	


	var generateQuestion = function(obj){

		//We want to get here:
		// <form>
		// <h2>Question 1:</h2>
		// <div><input type="radio" name="gender" value="male" checked>Answer 1</div> 
		// <input type="radio" name="gender" value="female">Answer 2
		// <input type="radio" name="gender" value="other">Answer 3
		// </form> 

		var form = $("<form>");
		var question = $('<h2>').text(obj.question);
		var aDiv = $('<div>');
		var bDiv = $('<div>');
		var cDiv = $('<div>');
		var dDiv = $('<div>');
		var a = $('<input type="radio">').attr('name', obj.name);
		aDiv.append(a);
		aDiv.append(obj.a);
		var b = $('<input type="radio">').attr('name', obj.name);
		bDiv.append(b);
		bDiv.append(obj.b);
		var c = $('<input type="radio">').attr('name', obj.name);
		cDiv.append(c);
		cDiv.append(obj.c);
		var d = $('<input type="radio">').attr('name', obj.name);
		dDiv.append(d);
		dDiv.append(obj.d);

		if(obj.correct === "a"){
			a.attr('correct', "true");
		}else if(obj.correct === "b"){
			b.attr('correct', "true");
		}else if(obj.correct === "c"){
			c.attr('correct', "true");
		}else if(obj.correct === "d"){
			d.attr('correct', "true");
		}

		form.append(question);
		form.append(aDiv, bDiv, cDiv, dDiv);

		$('.questions').append(form);
		
	}

	var gradeQuestion = function(obj){
		//check if there are any radios that have been clicked
		//if it has been checked
		//find checked radio, check for correct="true" attr
		console.log("gradeQuestion()", obj);
		var output = 0;
		obj.find('input').each(function(){
		 	if($(this).is(':checked')) {
		 		console.log("FOUND CHECKED");
		  		if($(this).attr('correct') === "true"){
		  			console.log('returning + 1');
		  			output =  1;//you did it!
		  		} else{
		  			console.log('returning - 1');
		  			output= -1;//WRONG
		  		}
		  	}	
		});
		return output;
	}

	var gradePage = function(){
		console.log("gradePage");
		var score = 0;
		$('form').each(function(){
			console.log("adding ",parseInt(gradeQuestion($(this))), " to score");
			score += parseInt(gradeQuestion($(this)));
		})
		console.log(score);
		return score;
	}

	generateQuestion(questions[0]);
	$('.my-button').click(gradePage);


});