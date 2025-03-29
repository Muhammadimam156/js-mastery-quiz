// DOM Elements
const questionElement = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const nextButton = document.getElementById('next-btn');
const timerDisplay = document.getElementById('timer-display');
const progressBar = document.getElementById('progress-bar');
const scoreValue = document.getElementById('score-value');
const questionCounter = document.getElementById('question-counter');
const quizBody = document.getElementById('quiz-body');
const timerElement = document.getElementById('timer');
const nextBtnText = document.getElementById('next-btn-text');
const finalScore = document.getElementById('final-score');
const resultsDescription = document.getElementById('results-description');
const resultsModal = document.getElementById('results-modal');
const retakeBtn = document.getElementById('retake-btn');
const dashboardBtn = document.getElementById('dashboard-btn');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;
let selectedAnswer = null;

// Initialize Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreValue.textContent = '0';
    showQuestion();
}

// Display Question
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update UI
    questionElement.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    // Set next button text
    nextBtnText.textContent = currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question';

    // Create Answer Options
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.innerHTML = `
            <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
            <span>${answer.text}</span>
        `;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answerOptions.appendChild(button);
    });

    // Start timer
    startTimer();
}

// Reset Question State
function resetState() {
    // Clear previous answers
    while (answerOptions.firstChild) {
        answerOptions.removeChild(answerOptions.firstChild);
    }
    
    // Reset timer and UI
    clearInterval(timer);
    timeLeft = 15;
    timerDisplay.textContent = timeLeft;
    timerElement.classList.remove('timer-warning');
    nextButton.disabled = true;
    selectedAnswer = null;
}

// Start Timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        // Visual warning when time is running low
        if (timeLeft <= 5) {
            timerElement.classList.add('timer-warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeExpired();
        }
    }, 1000);
}

// Handle Answer Selection
function selectAnswer(button, isCorrect) {
    clearInterval(timer);
    selectedAnswer = button;
    
    // Disable all buttons
    Array.from(answerOptions.children).forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
    });

    // Mark correct/incorrect
    if (isCorrect) {
        score++;
        scoreValue.textContent = score;
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
        // Show correct answer
        Array.from(answerOptions.children).forEach(btn => {
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            }
        });
    }

    // Enable next button
    nextButton.disabled = false;
}

// Handle Time Expiration
function handleTimeExpired() {
    Array.from(answerOptions.children).forEach(button => {
        button.disabled = true;
        button.classList.add('disabled');
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });
    
    nextButton.disabled = false;
}

// Move to Next Question or Show Results
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show Final Results
function showResults() {
    finalScore.textContent = `${score}/${questions.length}`;
    
    // Generate result description based on score
    let description;
    const percentage = (score / questions.length) * 100;
    
    if (percentage >= 90) {
        description = "Excellent work! You have a strong understanding of JavaScript fundamentals.";
    } else if (percentage >= 70) {
        description = "Good job! You have a solid foundation but could review some concepts.";
    } else if (percentage >= 50) {
        description = "Not bad! Consider reviewing JavaScript fundamentals to strengthen your knowledge.";
    } else {
        description = "Keep practicing! JavaScript can be tricky, but you'll improve with more study.";
    }
    
    resultsDescription.textContent = description;
    resultsModal.style.display = 'flex';
}

// Modal Functions
function openModal(modal) {
    modal.style.display = 'flex';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

// Event Listeners
nextButton.addEventListener('click', nextQuestion);

retakeBtn.addEventListener('click', function() {
    closeModal(resultsModal);
    startQuiz();
});

dashboardBtn.addEventListener('click', function() {
    // In a real app, this would redirect to the dashboard
    alert('Redirecting to dashboard...');
    closeModal(resultsModal);
});

loginBtn.addEventListener('click', function() {
    openModal(loginModal);
});

signupBtn.addEventListener('click', function() {
    openModal(signupModal);
});

mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === resultsModal) {
        closeModal(resultsModal);
    }
    if (event.target === loginModal) {
        closeModal(loginModal);
    }
    if (event.target === signupModal) {
        closeModal(signupModal);
    }
});

// Form submissions (simulated)
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login functionality would be implemented here');
    closeModal(loginModal);
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Signup functionality would be implemented here');
    closeModal(signupModal);
});

// Start the quiz when page loads
startQuiz();