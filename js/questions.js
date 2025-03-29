// Quiz Questions
const questions = [
    {
        question: "What is the output of `typeof null` in JavaScript?",
        answers: [
            { text: "null", correct: false },
            { text: "object", correct: true },
            { text: "undefined", correct: false },
            { text: "number", correct: false }
        ],
        explanation: "This is a long-standing bug in JavaScript where typeof null returns 'object'."
    },
    {
        question: "Which method creates a new array with the results of calling a function on every element?",
        answers: [
            { text: "forEach()", correct: false },
            { text: "map()", correct: true },
            { text: "reduce()", correct: false },
            { text: "filter()", correct: false }
        ],
        explanation: "The map() method creates a new array populated with the results of calling a provided function on every element."
    },
    {
        question: "What does the 'event loop' handle in JavaScript?",
        answers: [
            { text: "Memory allocation", correct: false },
            { text: "Garbage collection", correct: false },
            { text: "Execution of asynchronous callbacks", correct: true },
            { text: "Type coercion", correct: false }
        ],
        explanation: "The event loop is responsible for executing queued sub-tasks from the callback queue when the call stack is empty."
    },
    {
        question: "Which statement about 'let' and 'const' is FALSE?",
        answers: [
            { text: "Both are block-scoped", correct: false },
            { text: "const variables must be initialized", correct: false },
            { text: "let variables can be redeclared", correct: true },
            { text: "const variables cannot be reassigned", correct: false }
        ],
        explanation: "let variables cannot be redeclared in the same scope, though they can be reassigned."
    },
    {
        question: "What is the purpose of the Symbol data type in ES6?",
        answers: [
            { text: "To create private object properties", correct: true },
            { text: "To represent currency values", correct: false },
            { text: "To optimize mathematical operations", correct: false },
            { text: "To replace string keys in objects", correct: false }
        ],
        explanation: "Symbols create unique identifiers that can be used as property keys that won't collide with other properties."
    },
    {
        question: "Which Web API would you use to make HTTP requests in modern browsers?",
        answers: [
            { text: "XMLHttpRequest", correct: false },
            { text: "fetch()", correct: true },
            { text: "http.request()", correct: false },
            { text: "axios()", correct: false }
        ],
        explanation: "The fetch() API is the modern, promise-based replacement for XMLHttpRequest."
    },
    {
        question: "What does the following evaluate to: [] == ![] ?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "TypeError", correct: false }
        ],
        explanation: "Due to JavaScript's type coercion rules, this evaluates to true (empty array coerces to 0, ![] coerces to false then to 0)."
    },
    {
        question: "Which technique helps prevent layout thrashing?",
        answers: [
            { text: "Memoization", correct: false },
            { text: "Debouncing", correct: false },
            { text: "Batching DOM reads/writes", correct: true },
            { text: "Event delegation", correct: false }
        ],
        explanation: "Batching DOM operations prevents forced synchronous layouts that cause performance issues."
    },
    {
        question: "What is the main purpose of the Intersection Observer API?",
        answers: [
            { text: "To detect DOM mutations", correct: false },
            { text: "To track element visibility", correct: true },
            { text: "To measure rendering performance", correct: false },
            { text: "To observe CSS transitions", correct: false }
        ],
        explanation: "It asynchronously observes changes in the intersection of a target element with an ancestor or viewport."
    },
    {
        question: "Which of these is NOT a JavaScript runtime?",
        answers: [
            { text: "Node.js", correct: false },
            { text: "Deno", correct: false },
            { text: "Bun", correct: false },
            { text: "Python", correct: true }
        ],
        explanation: "Python is a completely different programming language and runtime environment."
    }
];