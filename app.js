// --- DONNÉES DES LEÇONS ---
const lessons = [
    {
        id: 1,
        title: "Les Bases 1",
        questions: [
            { type: "translate", q: "Bonjour", a: "Buongiorno", audio: "Buongiorno" },
            { type: "translate", q: "Merci", a: "Grazie", audio: "Grazie" },
            { type: "choice", q: "Comment dit-on 'S'il vous plaît' ?", options: ["Grazie", "Per favore", "Prego"], a: "Per favore" },
            { type: "speak", q: "Dis 'Ciao' !", a: "ciao" }
        ]
    },
    {
        id: 2,
        title: "La Nourriture",
        questions: [
            { type: "translate", q: "Le pain", a: "Il pane", audio: "Il pane" },
            { type: "choice", q: "Une pomme est...", options: ["Una mela", "Un pane", "Pizza"], a: "Una mela" }
        ]
    }
];

// --- ÉTAT DE L'APPLICATION ---
let currentState = {
    points: parseInt(localStorage.getItem('points')) || 0,
    streak: parseInt(localStorage.getItem('streak')) || 0,
    currentLesson: null,
    currentQuestionIdx: 0,
    progress: JSON.parse(localStorage.getItem('progress')) || {}
};

// --- INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    renderLevels();
    registerServiceWorker();
});

function updateUI() {
    document.getElementById('points').innerHTML = `<i class="fas fa-star"></i> ${currentState.points}`;
    document.getElementById('streak').innerHTML = `<i class="fas fa-fire"></i> ${currentState.streak}`;
    const totalProg = (Object.keys(currentState.progress).length / lessons.length) * 100;
    document.getElementById('main-progress').style.width = `${totalProg}%`;
}

function renderLevels() {
    const container = document.getElementById('levels-container');
    container.innerHTML = lessons.map(lesson => `
        <div onclick="startLesson(${lesson.id})" class="bg-white p-5 rounded-2xl shadow-md border-b-4 border-green-200 flex items-center justify-between cursor-pointer hover:bg-green-50 transition">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                    ${lesson.id}
                </div>
                <div>
                    <h3 class="font-bold text-lg">${lesson.title}</h3>
                    <p class="text-sm text-gray-500">${currentState.progress[lesson.id] ? 'Complété ✅' : 'À commencer'}</p>
                </div>
            </div>
            <i class="fas fa-chevron-right text-gray-300"></i>
        </div>
    `).join('');
}

// --- LOGIQUE DU QUIZ ---
function startLesson(id) {
    currentState.currentLesson = lessons.find(l => l.id === id);
    currentState.currentQuestionIdx = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const question = currentState.currentLesson.questions[currentState.currentQuestionIdx];
    const area = document.getElementById('question-area');
    const progress = (currentState.currentQuestionIdx / currentState.currentLesson.questions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;

    let html = `<h2 class="text-2xl font-bold mb-6">${getQuestionTitle(question)}</h2>`;

    if (question.type === "translate") {
        html += `
            <div class="text-4xl mb-8 p-6 bg-blue-50 rounded-2xl text-blue-800">${question.q}</div>
            <input type="text" id="user-input" class="w-full border-2 border-gray-200 p-4 rounded-xl text-center text-xl outline-none focus:border-green-500" placeholder="Traduisez en italien...">
        `;
    } else if (question.type === "choice") {
        html += `<div class="grid grid-cols-1 gap-3 w-full">
            ${question.options.map(opt => `<button onclick="checkChoice('${opt}')" class="choice-btn w-full border-2 border-gray-200 p-4 rounded-xl text-lg font-medium hover:bg-blue-50">${opt}</button>`).join('')}
        </div>`;
    } else if (question.type === "speak") {
        html += `
            <div class="text-3xl mb-4">${question.q}</div>
            <button onclick="startSpeech()" class="w-24 h-24 bg-red-100 text-red-600 rounded-full text-3xl animate-pulse"><i class="fas fa-microphone"></i></button>
            <p id="speech-result" class="mt-4 text-gray-500 italic">Cliquez et parlez...</p>
        `;
    }

    area.innerHTML = html;
    if(question.audio) playAudio(question.audio);
}

// --- FONCTIONS SYSTÈME ---

function playAudio(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = 'it-IT';
    window.speechSynthesis.speak(msg);
}

function startSpeech() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'it-IT';
    recognition.start();
    
    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript.toLowerCase();
        document.getElementById('speech-result').innerText = `Tu as dit : "${result}"`;
        checkAnswer(result);
    };
}

document.getElementById('next-btn').onclick = () => {
    const input = document.getElementById('user-input');
    if (input) checkAnswer(input.value);
    else if (currentState.currentLesson.questions[currentState.currentQuestionIdx].type === 'choice') {
        alert("Choisis une réponse !");
    }
};

function checkAnswer(val) {
    const q = currentState.currentLesson.questions[currentState.currentQuestionIdx];
    const isCorrect = val.toLowerCase().trim() === q.a.toLowerCase().trim();
    
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
    
    if (isCorrect) {
        feedback.innerText = "Excellent ! 🌟";
        feedback.classList.add('bg-green-100', 'text-green-700');
        currentState.points += 10;
    } else {
        feedback.innerText = `Dommage ! La réponse était : ${q.a}`;
        feedback.classList.add('bg-red-100', 'text-red-700');
    }
    
    feedback.classList.remove('hidden');
    
    setTimeout(() => {
        feedback.classList.add('hidden');
        currentState.currentQuestionIdx++;
        if (currentState.currentQuestionIdx < currentState.currentLesson.questions.length) {
            showQuestion();
        } else {
            finishLesson();
        }
    }, 2000);
}

function finishLesson() {
    currentState.progress[currentState.currentLesson.id] = true;
    currentState.streak += 1;
    saveData();
    exitQuiz();
    updateUI();
    renderLevels();
    alert("Leçon terminée ! Bravo ! 🇮🇹");
}

function exitQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
}

function saveData() {
    localStorage.setItem('points', currentState.points);
    localStorage.setItem('streak', currentState.streak);
    localStorage.setItem('progress', JSON.stringify(currentState.progress));
}

function getQuestionTitle(q) {
    if(q.type === 'translate') return "Traduisez cette phrase";
    if(q.type === 'choice') return "Choisissez la bonne réponse";
    if(q.type === 'speak') return "Prononciation";
    return "Question";
}

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
}
