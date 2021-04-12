



var currentQuestion = 2; //



function startQuiz() {
        document.getElementById("brief").className = "invisible";
        document.getElementById("question-1").className = "question";
        // var startBtn = document.getElementById('startQuizBtn');
         var introbox1 = document.getElementById('introbox1');
         introbox1.innerHTML =""
        // startBtn.parentNode.removeChild(startBtn);
        // brief.parentNode.removeChild(brief);
    }




function getNumberOfQuestions() {

        var totalQuestions = document.querySelectorAll('#quiz-questions .question').length;
        return totalQuestions;
    }




function nextQuestion() {
        hideQuestion(currentQuestion);
        hideAnswerButton();
        showQuestion(currentQuestion);
        currentQuestion++;
    }




function setAnswerButton() {
        document.getElementById("confirm_answer").className = "";
    }




function hideAnswerButton() {
        document.getElementById("confirm_answer").className = "invisible";
    }




function hideQuestion(id) {
        var totalQuestions = getNumberOfQuestions();
        for (var i = 1; i <= totalQuestions; i++) {
            if (i !== id) {
                document.getElementById("question-" + i).className = "question invisible";
            }
        }
    }




function showQuestion(id) {
        var totalQuestions = getNumberOfQuestions();
        if (id <= totalQuestions) {
            document.getElementById("question-" + id).className = "question";
        } else {
			setEndingSentence() //begins the end screen process if id is above total question
        }
    }




function getEndingSentence() {
    var quizRadio = document.getElementsByName("rq");
	var content = ''; //It's easier to handle if we simply merge all sentences into a string
    for (var i = 0; i < quizRadio.length; i++) {
        if (quizRadio[i].checked) {
            content += quizRadio[i].getAttribute("data-endingsentence"); //these are the attributes used to generate quiz answers
        }
    }
	return content;
}




function setEndingSentence() {
	var personalityResults = getEndingSentence();
    document.getElementById("results_screen").className = "";


}


function gohome()
{
    var modal = document.getElementById("modal")
    modal.style.display = "block"
       window.localStorage.setItem("smiles",Number(window.localStorage.getItem("smiles"))+1)
   console.log(window.localStorage.getItem("smiles"))
}

function closemodal()
{
    window.location.replace("http://127.0.0.1:5000/static/welcome.html")
}
