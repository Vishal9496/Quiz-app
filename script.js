// Quiz Data
const questions =[
    {
        id: '1',
        question: 'What does HTML stand for?',
        options: ['HyperText Markup Language', 'Hyperlinks Text Markup Language', 'Home Tool Markup Language', 'Hyperlink Transfer Markup Language'],
        answer: 'HyperText Markup Language',
        category: 'HTML'
    },
    {
        id: '2',
        question: 'Which tag is used to define the title of a webpage?',
        options: ['<head>', '<title>', '<body>', '<meta>'],
        answer: '<title>',
        category: 'HTML'
    },
    {
        id: '3',
        question: 'Which attribute is used to provide an alternative text for an image?',
        options: ['src', 'alt', 'title', 'href'],
        answer: 'alt',
        category: 'HTML'
    },
    {
        id: '4',
        question: 'Which tag is used to create a hyperlink in HTML?',
        options: ['<link>', '<a>', '<href>', '<anchor>'],
        answer: '<a>',
        category: 'HTML'
    },
    {
        id: '5',
        question: 'What is the correct syntax for creating an ordered list in HTML?',
        options: ['<ul>', '<ol>', '<li>', '<list>'],
        answer: '<ol>',
        category: 'HTML'
    },
    {
        id: '6',
        question: 'Which tag is used to define a table in HTML?',
        options: ['<table>', '<tbl>', '<tr>', '<td>'],
        answer: '<table>',
        category: 'HTML'
    },
    {
        id: '7',
        question: 'Which HTML element is used to define important text?',
        options: ['<strong>', '<b>', '<i>', '<mark>'],
        answer: '<strong>',
        category: 'HTML'
    },
    {
        id: '8',
        question: 'What is the correct HTML for creating a checkbox?',
        options: ['<input type="checkbox">', '<checkbox>', '<check>', '<box>'],
        answer: '<input type="checkbox">',
        category: 'HTML'
    },
    {
        id: '9',
        question: 'Which attribute specifies the URL of a linked resource in a hyperlink?',
        options: ['src', 'alt', 'href', 'target'],
        answer: 'href',
        category: 'HTML'
    },
    {
        id: '10',
        question: 'What does the <br> tag do in HTML?',
        options: ['Creates a horizontal line', 'Breaks a line', 'Adds a paragraph', 'Inserts a blank space'],
        answer: 'Breaks a line',
        category: 'HTML'
    },
    {
        id: '1',
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Creative Style System', 'Computer Style Sheets', 'Colorful Style Sheets'],
        answer: 'Cascading Style Sheets',
        category: 'CSS'
    },
    {
        id: '2',
        question: 'Which property is used to change the background color of an element?',
        options: ['background-color', 'color', 'bg-color', 'background'],
        answer: 'background-color',
        category: 'CSS'
    },
    {
        id: '3',
        question: 'What is the correct syntax for making all paragraphs bold in CSS?',
        options: ['p { font-weight: bold; }', '<p style="font-weight: bold;">', 'p[bold]', 'bold-p'],
        answer: 'p { font-weight: bold; }',
        category: 'CSS'
    },
    {
        id: '4',
        question: 'Which property is used to add space inside an element’s border?',
        options: ['padding', 'margin', 'border-spacing', 'spacing'],
        answer: 'padding',
        category: 'CSS'
    },
    {
        id: '5',
        question: 'How do you select an element with an id of "header" in CSS?',
        options: ['#header', '.header', 'header', 'id("header")'],
        answer: '#header',
        category: 'CSS'
    },
    {
        id: '6',
        question: 'Which property is used to change the font of an element?',
        options: ['font-family', 'font', 'font-weight', 'font-style'],
        answer: 'font-family',
        category: 'CSS'
    },
    {
        id: '7',
        question: 'What does the "z-index" property control?',
        options: ['Stack order', 'Visibility', 'Horizontal alignment', 'Transparency'],
        answer: 'Stack order',
        category: 'CSS'
    },
    {
        id: '8',
        question: 'Which property is used to make the text italic?',
        options: ['font-style', 'text-decoration', 'font-weight', 'font-variant'],
        answer: 'font-style',
        category: 'CSS'
    },
    {
        id: '9',
        question: 'Which value is not a valid position property?',
        options: ['fixed', 'static', 'sticky', 'move'],
        answer: 'move',
        category: 'CSS'
    },
    {
        id: '10',
        question: 'How do you make a list without bullets?',
        options: ['list-style: none;', 'list-type: none;', 'bullet: none;', 'text-style: no-bullets;'],
        answer: 'list-style: none;',
        category: 'CSS'
    },
    {
        id: '1',
        question: 'What does JavaScript primarily run on?',
        options: ['Client-side', 'Server-side', 'Both client-side and server-side', 'None of the above'],
        answer: 'Both client-side and server-side',
        category: 'Javascript'
    },
    {
        id: '2',
        question: 'Which data type is NOT supported in Javascript?',
        options: ['Undefined', 'Boolean', 'Float', 'Number'],
        answer: 'Float',
        category: 'Javascript'
    },
    {
        id: '3',
        question: 'Which keyword is used to declare a variable in Javascript?',
        options: ['let', 'var', 'const', 'All of the above'],
        answer: 'All of the above',
        category: 'Javascript'
    },
    {
        id: '4',
        question: 'What does the "typeof" operator do in Javascript?',
        options: ['Determines the data type', 'Checks equality', 'Creates a variable', 'Converts data type'],
        answer: 'Determines the data type',
        category: 'Javascript'
    },
    {
        id: '5',
        question: 'How do you write a function in Javascript?',
        options: ['function myFunction()', 'def myFunction()', 'func myFunction()', 'function:myFunction()'],
        answer: 'function myFunction()',
        category: 'Javascript'
    },
    {
        id: '6',
        question: 'What is the output of 2 + "2" in Javascript?',
        options: ['4', '22', 'Error', 'Undefined'],
        answer: '22',
        category: 'Javascript'
    },
    {
        id: '7',
        question: 'Which method is used to select an element by its ID?',
        options: ['getElementById', 'querySelector', 'getElementsByClassName', 'getById'],
        answer: 'getElementById',
        category: 'Javascript'
    },
    {
        id: '8',
        question: 'What does "null" represent in Javascript?',
        options: ['An empty value', 'A non-existent object', 'A zero value', 'None of the above'],
        answer: 'A non-existent object',
        category: 'Javascript'
    },
    {
        id: '9',
        question: 'Which event is triggered when a user clicks on an HTML element?',
        options: ['onclick', 'onhover', 'onpress', 'onchange'],
        answer: 'onclick',
        category: 'Javascript'
    },
    {
        id: '10',
        question: 'How do you write a conditional statement in Javascript?',
        options: ['if (condition) { }', 'if condition: { }', 'if (condition): { }', 'if condition then { }'],
        answer: 'if (condition) { }',
        category: 'Javascript'
    },
    {
        id: '1',
        question: 'What is React primarily used for?',
        options: ['Building user interfaces', 'Creating databases', 'Managing server-side code', 'Compiling JavaScript'],
        answer: 'Building user interfaces',
        category: 'React'
    },
    {
        id: '2',
        question: 'What does JSX stand for?',
        options: ['JavaScript XML', 'JavaScript XHTML', 'JSON XML', 'JavaScript eXtension'],
        answer: 'JavaScript XML',
        category: 'React'
    },
    {
        id: '3',
        question: 'What is a React component?',
        options: ['A reusable piece of UI', 'A database entry', 'A server-side script', 'A styling element'],
        answer: 'A reusable piece of UI',
        category: 'React'
    },
    {
        id: '4',
        question: 'Which function is used to render a React component to the DOM?',
        options: ['ReactDOM.render()', 'React.render()', 'renderReact()', 'React.renderDOM()'],
        answer: 'ReactDOM.render()',
        category: 'React'
    },
    {
        id: '5',
        question: 'What is the use of the "useState" hook?',
        options: ['Manage state in a functional component', 'Fetch API data', 'Render a component', 'Manage CSS styles'],
        answer: 'Manage state in a functional component',
        category: 'React'
    },
    {
        id: '6',
        question: 'What is the purpose of "props" in React?',
        options: ['Pass data between components', 'Manage state', 'Style components', 'Compile JSX'],
        answer: 'Pass data between components',
        category: 'React'
    },
    {
        id: '7',
        question: 'What does "useEffect" hook do in React?',
        options: ['Handle side effects', 'Update the DOM', 'Compile JSX', 'Optimize performance'],
        answer: 'Handle side effects',
        category: 'React'
    },
    {
        id: '8',
        question: 'Which statement is true about React keys?',
        options: ['They help identify elements uniquely', 'They are optional', 'They are used for styling', 'They must be strings'],
        answer: 'They help identify elements uniquely',
        category: 'React'
    },
    {
        id: '9',
        question: 'What is the Virtual DOM in React?',
        options: ['A lightweight copy of the real DOM', 'A new browser feature', 'A server-side library', 'An alternative to HTML'],
        answer: 'A lightweight copy of the real DOM',
        category: 'React'
    },
    {
        id: '10',
        question: 'What is the default port for React development server?',
        options: ['3000', '8000', '8080', '5000'],
        answer: '3000',
        category: 'React'
    },
];

// Quiz Variables
let username = '';
let category = '';
let currentQuestionIndex = 0;
let timer;
let timeLeft = 15; // Time per question
let totalQuestions = 10; // Total number of questions
let attempted = 0; // Number of questions attempted
let correct = 0; // Number of correct answers
let wrong = 0; // Number of wrong answers
let totalTimeTaken = 0; // Total time taken in seconds

// Function to handle name input
function getname(event) {
    event.preventDefault();
    username = document.getElementById('name-input').value.trim();
    if (username === "") {
        alert("Please enter your name");
        return;
    }
    // Display welcome message
    document.getElementById('welcome-note').innerHTML = `Welcome ${username} to the quiz:`;
    document.getElementById('name-input').value = "";
}

// Function to start the quiz
function startQuiz(event) {
    if (username === "") {
        alert("Please enter your name first.");
        return;
    }
    category = event.target.value;
    document.getElementById('container').innerHTML = `
        <h1>${category}</h1>
        <div class="container">
            <div id="timer-display">Time Left: 15 secs</div>
            <div>Score: ${correct}</div>
        </div>
        <div id="question-count">QC</div>
        <div id="question-container">Question 1</div>
        <div id="option-container">Options</div>
        <button id="nextQuestion">Next</button>
    `;

    // Add event listener for the Next button
    document.getElementById('nextQuestion').addEventListener('click', handleNextQuestion);

    displayQuestion();
}

// Function to start the timer
function startTimer() {
    timeLeft = 15; // Reset time for each question
    document.getElementById('timer-display').innerText = `Time Left: ${timeLeft} seconds`;

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('timer-display').innerText = `Time Left: ${timeLeft} seconds`;
        } else {
            clearInterval(timer); // Stop the timer
            totalTimeTaken += 15; // Add 15 seconds for unanswered questions
            handleNextQuestion(); // Move to the next question
        }
    }, 1000); // Update every second
}

// Function to display the current question
function displayQuestion() {
    let questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = ""; // Clear previous question

    // Filter questions by category
    let categoryQuestions = questions.filter(question => category === question.category);

    // Display the current question
    document.getElementById('question-count').innerHTML = `${currentQuestionIndex + 1}/${totalQuestions}`;
    let questionTag = document.createElement('p');
    questionTag.textContent = categoryQuestions[currentQuestionIndex].question;
    questionContainer.appendChild(questionTag);

    // Display options for the current question
    displayOptions(categoryQuestions[currentQuestionIndex]);

    // Start the timer for the current question
    startTimer();
}

// Function to display options for the current question
function displayOptions(question) {
    let optionContainer = document.getElementById('option-container');
    optionContainer.innerHTML = ""; // Clear previous options

    question.options.forEach((option) => {
        let optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.className = 'option-button'; // Add class for styling

        // Add event listener to handle option click
        optionButton.addEventListener('click', () => {
            attempted++; // Increment attempted questions

            // Check if the selected option is correct
            if (option === question.answer) {
                correct++; // Increment correct answers
                document.querySelector('.container div:last-child').textContent = `Score: ${correct}`; // Update score
            } else {
                wrong++; // Increment wrong answers
            }

            // Automatically move to the next question
            handleNextQuestion();
        });

        optionContainer.appendChild(optionButton);
    });

    // Disable the Next button until an option is selected
    document.getElementById('nextQuestion').disabled = false;
}

// Function to handle moving to the next question
function handleNextQuestion() {
    clearInterval(timer); // Stop the timer

    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++; // Move to the next question
        displayQuestion(); // Display the next question
    } else {
        displayResults(); // Display results if all questions are attempted
    }
}

// Function to display results
function displayResults() {
    // Calculate total percentage
    let totalPercentage = (correct / totalQuestions) * 100;
    totalTimeTaken += timeLeft; // Add remaining time to total time taken

    // Display results
    document.getElementById('container').innerHTML = `
    <div id = 'results'>
        <h3>Quiz Results</h3>
        <p> ${username} your result is: </p>
        <p>Your score: ${correct} out of ${totalQuestions}</p>
        <p>Wrong answers: ${wrong}</p>
        <p>Total percentage: ${totalPercentage.toFixed(2)}%</p>
        <p>Total time taken: ${totalTimeTaken} seconds</p>
        <button id="homeButton">HOME</button>
        <button id="playAgainButton">Play Again</button>
        </div>
    `;

    // Add event listeners for buttons
    document.getElementById('homeButton').addEventListener('click', goHome);
    document.getElementById('playAgainButton').addEventListener('click', playAgain);
}

// Add event listener for name input form

// Function to go back to home
function goHome() {
    // Reset variables
    currentQuestionIndex = 0;
    correct = 0;
    wrong = 0;
    totalTimeTaken = 0;
    username = '';

    // Reload the page to navigate back to the home screen
    location.reload();
}

// Function to play the quiz again
function playAgain() {
    // Reset variables
    currentQuestionIndex = 0;
    correct = 0;
    wrong = 0;
    totalTimeTaken = 0;
    username = '';

    // Reload the page to navigate back to the home screen
    location.reload();
}

document.getElementById('homeButton').addEventListener('click', goHome);
document.getElementById('playAgainButton').addEventListener('click', playAgain);