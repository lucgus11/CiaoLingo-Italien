// --- DONNÉES DES LEÇONS ---
const lessons = [
    // Unité 1 : Salutations et pronoms personnels
    {
        id: 1,
        title: "Salutations et pronoms personnels",
        description: "Apprendre les bases des salutations et des pronoms personnels en italien.",
        questions: [
            { type: "translate", fr: "Bonjour", it: "Ciao" },
            { type: "translate", fr: "Au revoir", it: "Arrivederci" },
            { type: "translate", fr: "Comment ça va ?", it: "Come stai?" },
            { type: "translate", fr: "Je m'appelle Lucas", it: "Mi chiamo Lucas" },
            { type: "translate", fr: "Il s'appelle Marco", it: "Lui si chiama Marco" },
            { type: "translate", fr: "Nous sommes amis", it: "Noi siamo amici" },
            { type: "choice", question: "Quelle est la traduction de 'tu' en français ?", correct: "tu", options: ["je", "tu", "il"] },
            { type: "choice", question: "Comment dit-on 'bonsoir' en italien ?", correct: "Buonasera", options: ["Buongiorno", "Buonasera", "Buonanotte"] },
            { type: "speak", phrase: "Salut, comment tu t'appelles ?" },
            { type: "speak", phrase: "Enchanté de te rencontrer." },
            { type: "translate", fr: "Lui est mon frère", it: "Lui è mio fratello" },
            { type: "translate", fr: "Elles sont très gentilles", it: "Loro sono molto gentili" },
            { type: "translate", fr: "Tu es heureux ?", it: "Sei felice?" },
            { type: "choice", question: "Quelle est la traduction de 'voi' en français ?", correct: "vous", options: ["nous", "vous", "ils"] },
            { type: "choice", question: "Comment dit-on 'merci' en italien ?", correct: "Grazie", options: ["Prego", "Grazie", "Per favore"] }
        ]
    },

    // Unité 2 : Les verbes essere et avere + articles
    {
        id: 2,
        title: "Les verbes essere et avere + articles",
        description: "Maîtriser les verbes 'être' et 'avoir' au présent, ainsi que les articles définis et indéfinis.",
        questions: [
            { type: "translate", fr: "Je suis français", it: "Io sono francese" },
            { type: "translate", fr: "Tu as un livre", it: "Tu hai un libro" },
            { type: "translate", fr: "Il est grand", it: "Lui è alto" },
            { type: "translate", fr: "Nous avons une maison", it: "Noi abbiamo una casa" },
            { type: "translate", fr: "Les enfants sont heureux", it: "I bambini sono felici" },
            { type: "translate", fr: "J'ai une voiture", it: "Ho una macchina" },
            { type: "choice", question: "Quelle est la conjugaison de 'essere' pour 'voi' ?", correct: "siete", options: ["sono", "sei", "siete"] },
            { type: "choice", question: "Comment dit-on 'le livre' en italien ?", correct: "il libro", options: ["un libro", "il libro", "lo libro"] },
            { type: "speak", phrase: "Sono stanco, ho bisogno di riposare." },
            { type: "speak", phrase: "Abbiamo fame, andiamo a mangiare?" },
            { type: "translate", fr: "Tu es gentil", it: "Tu sei gentile" },
            { type: "translate", fr: "Ils ont un chien", it: "Loro hanno un cane" },
            { type: "translate", fr: "La ragazza è bella", it: "La fille est belle" },
            { type: "choice", question: "Quelle est la traduction de 'un' en italien ?", correct: "un", options: ["un", "una", "il"] },
            { type: "choice", question: "Comment dit-on 'nous avons' en italien ?", correct: "abbiamo", options: ["abbiamo", "avete", "hanno"] }
        ]
    },

    // Unité 3 : La nourriture, le café et commander au restaurant
    {
        id: 3,
        title: "La nourriture, le café et commander au restaurant",
        description: "Vocabulaire et phrases utiles pour commander de la nourriture et des boissons.",
        questions: [
            { type: "translate", fr: "Je voudrais un café", it: "Vorrei un caffè" },
            { type: "translate", fr: "Qu'est-ce que vous recommandez ?", it: "Cosa mi consiglia?" },
            { type: "translate", fr: "L'addition, s'il vous plaît", it: "Il conto, per favore" },
            { type: "translate", fr: "Je prends une pizza", it: "Prendo una pizza" },
            { type: "translate", fr: "C'est délicieux", it: "È delizioso" },
            { type: "translate", fr: "Un verre d'eau, s'il vous plaît", it: "Un bicchiere d'acqua, per favore" },
            { type: "choice", question: "Comment dit-on 'un sandwich' en italien ?", correct: "un panino", options: ["una pizza", "un panino", "un gelato"] },
            { type: "choice", question: "Quelle est la traduction de 'vorrei' en français ?", correct: "je voudrais", options: ["je prends", "je voudrais", "je mange"] },
            { type: "speak", phrase: "Vorrei un caffè macchiato, per favore." },
            { type: "speak", phrase: "Mi scusi, dov'è il bagno?" },
            { type: "translate", fr: "Je n'aime pas les épinards", it: "Non mi piacciono gli spinaci" },
            { type: "translate", fr: "Il dolce è molto buono", it: "Le dessert est très bon" },
            { type: "translate", fr: "Un caffè senza zucchero", it: "Un café sans sucre" },
            { type: "choice", question: "Comment dit-on 'je prends' en italien ?", correct: "prendo", options: ["prendo", "prendi", "prendiamo"] },
            { type: "choice", question: "Quelle est la traduction de 'l'addition' en italien ?", correct: "il conto", options: ["il piatto", "il conto", "il menu"] }
        ]
    },

    // Unité 4 : Les nombres, l'heure et la monnaie
    {
        id: 4,
        title: "Les nombres, l'heure et la monnaie",
        description: "Apprendre à compter, dire l'heure et utiliser la monnaie en italien.",
        questions: [
            { type: "translate", fr: "Il est trois heures", it: "Sono le tre" },
            { type: "translate", fr: "Il est midi", it: "È mezzogiorno" },
            { type: "translate", fr: "J'ai 25 euros", it: "Ho venticinque euro" },
            { type: "translate", fr: "C'est combien ?", it: "Quanto costa?" },
            { type: "translate", fr: "Je paie en espèces", it: "Pago in contanti" },
            { type: "translate", fr: "Il est une heure et demie", it: "È l'una e mezza" },
            { type: "choice", question: "Comment dit-on 'dix' en italien ?", correct: "dieci", options: ["otto", "dieci", "nove"] },
            { type: "choice", question: "Quelle est la traduction de 'mezzogiorno' en français ?", correct: "midi", options: ["minuit", "midi", "matin"] },
            { type: "speak", phrase: "Che ore sono?" },
            { type: "speak", phrase: "Vorrei pagare con carta." },
            { type: "translate", fr: "Il est neuf heures du soir", it: "Sono le nove di sera" },
            { type: "translate", fr: "Elle a trente ans", it: "Lei ha trent'anni" },
            { type: "translate", fr: "Je n'ai pas de monnaie", it: "Non ho spiccioli" },
            { type: "choice", question: "Comment dit-on 'vingt' en italien ?", correct: "venti", options: ["venti", "trenta", "quindici"] },
            { type: "choice", question: "Quelle est la traduction de 'pago' en français ?", correct: "je paie", options: ["je prends", "je paie", "j'achète"] }
        ]
    },

    // Unité 5 : Les verbes du 1er groupe (-ARE) au présent
    {
        id: 5,
        title: "Les verbes du 1er groupe (-ARE) au présent",
        description: "Conjuguer les verbes réguliers en -are au présent de l'indicatif.",
        questions: [
            { type: "conjugation", fr: "Parler (io)", it: "parlo" },
            { type: "conjugation", fr: "Manger (tu)", it: "mangi" },
            { type: "conjugation", fr: "Travailler (lui)", it: "lavora" },
            { type: "conjugation", fr: "Étudier (noi)", it: "studiamo" },
            { type: "conjugation", fr: "Voyager (voi)", it: "viaggiate" },
            { type: "conjugation", fr: "Habiter (loro)", it: "abitano" },
            { type: "choice", question: "Quelle est la terminaison correcte pour 'parl-' à la 1ère personne du singulier ?", correct: "o", options: ["o", "i", "a"] },
            { type: "choice", question: "Comment dit-on 'je travaille' en italien ?", correct: "lavoro", options: ["lavoro", "lavori", "lavora"] },
            { type: "speak", phrase: "Io studio l'italiano ogni giorno." },
            { type: "speak", phrase: "Tu mangi la pizza?" },
            { type: "conjugation", fr: "Chanter (noi)", it: "cantiamo" },
            { type: "conjugation", fr: "Acheter (loro)", it: "comprano" },
            { type: "conjugation", fr: "Regarder (tu)", it: "guardi" },
            { type: "choice", question: "Quelle est la traduction de 'parli' en français ?", correct: "tu parles", options: ["je parle", "tu parles", "il parle"] },
            { type: "choice", question: "Comment dit-on 'nous voyageons' en italien ?", correct: "viaggiamo", options: ["viaggiate", "viaggiamo", "viaggiano"] }
        ]
    },

    // Unité 6 : La famille et les adjectifs possessifs
    {
        id: 6,
        title: "La famille et les adjectifs possessifs",
        description: "Vocabulaire de la famille et utilisation des adjectifs possessifs.",
        questions: [
            { type: "translate", fr: "Ma mère est médecin", it: "Mia madre è medico" },
            { type: "translate", fr: "Ton frère est grand", it: "Tuo fratello è alto" },
            { type: "translate", fr: "Nos enfants sont joyeux", it: "I nostri figli sono allegri" },
            { type: "translate", fr: "Leur maison est belle", it: "La loro casa è bella" },
            { type: "translate", fr: "Son père travaille à Rome", it: "Suo padre lavora a Roma" },
            { type: "translate", fr: "Votre sœur est étudiante", it: "Vostra sorella è studentessa" },
            { type: "choice", question: "Comment dit-on 'ma' en italien ?", correct: "mia", options: ["mia", "mia", "loro"] },
            { type: "choice", question: "Quelle est la traduction de 'tuo' en français ?", correct: "ton", options: ["son", "ton", "notre"] },
            { type: "speak", phrase: "Mia sorella si chiama Anna." },
            { type: "speak", phrase: "Tuo fratello lavora qui?" },
            { type: "translate", fr: "Le nostre vacanze sono state fantastiche", it: "Nos vacances ont été fantastiques" },
            { type: "translate", fr: "Il suo cane è molto simpatico", it: "Son chien est très sympa" },
            { type: "translate", fr: "Vostro zio abita vicino?", it: "Votre oncle habite-t-il près d'ici ?" },
            { type: "choice", question: "Comment dit-on 'leur' en italien ?", correct: "loro", options: ["loro", "nostro", "vostro"] },
            { type: "choice", question: "Quelle est la traduction de 'nostro' en français ?", correct: "notre", options: ["mon", "ton", "notre"] }
        ]
    },

    // Unité 7 : Se déplacer en ville et les prépositions de lieu
    {
        id: 7,
        title: "Se déplacer en ville et les prépositions de lieu",
        description: "Vocabulaire pour se déplacer en ville et utiliser les prépositions de lieu.",
        questions: [
            { type: "translate", fr: "La gare est près de la place", it: "La stazione è vicino alla piazza" },
            { type: "translate", fr: "Le musée est loin de l'hôtel", it: "Il museo è lontano dall'albergo" },
            { type: "translate", fr: "Tourne à droite", it: "Gira a destra" },
            { type: "translate", fr: "L'arrêt de bus est à gauche", it: "La fermata dell'autobus è a sinistra" },
            { type: "translate", fr: "Le parc est derrière l'église", it: "Il parco è dietro alla chiesa" },
            { type: "translate", fr: "La pharmacie est entre la boulangerie et le supermarché", it: "La farmacia è tra la panetteria e il supermercato" },
            { type: "choice", question: "Comment dit-on 'à droite' en italien ?", correct: "a destra", options: ["a sinistra", "a destra", "davanti"] },
            { type: "choice", question: "Quelle est la traduction de 'vicino a' en français ?", correct: "près de", options: ["loin de", "près de", "derrière"] },
            { type: "speak", phrase: "Scusi, dov'è il bagno?" },
            { type: "speak", phrase: "Vada dritto per cento metri." },
            { type: "translate", fr: "Il ristorante è sopra il negozio", it: "Le restaurant est au-dessus du magasin" },
            { type: "translate", fr: "La stazione è davanti al parco", it: "La gare est devant le parc" },
            { type: "translate", fr: "L'autobus parte da qui", it: "Le bus part d'ici" },
            { type: "choice", question: "Comment dit-on 'à gauche' en italien ?", correct: "a sinistra", options: ["a sinistra", "a destra", "dietro"] },
            { type: "choice", question: "Quelle est la traduction de 'dietro a' en français ?", correct: "derrière", options: ["devant", "derrière", "entre"] }
        ]
    },

    // Unité 8 : Le Passato Prossimo (Passé composé)
    {
        id: 8,
        title: "Le Passato Prossimo (Passé composé)",
        description: "Construire le passé composé avec l'auxiliaire essere ou avere.",
        questions: [
            { type: "conjugation", fr: "J'ai mangé (mangiare)", it: "ho mangiato" },
            { type: "conjugation", fr: "Tu es allé (andare)", it: "sei andato" },
            { type: "conjugation", fr: "Il a parlé (parlare)", it: "ha parlato" },
            { type: "conjugation", fr: "Nous sommes partis (partire)", it: "siamo partiti" },
            { type: "conjugation", fr: "Vous avez fini (finire)", it: "avete finito" },
            { type: "conjugation", fr: "Elles sont arrivées (arrivare)", it: "sono arrivate" },
            { type: "choice", question: "Quel auxiliaire utilise-t-on pour 'mangiare' au passé composé ?", correct: "avere", options: ["avere", "essere", "stare"] },
            { type: "choice", question: "Comment dit-on 'je suis allé' en italien ?", correct: "sono andato", options: ["ho andato", "sono andato", "ho andato"] },
            { type: "speak", phrase: "Ieri ho visitato il Colosseo." },
            { type: "speak", phrase: "Dove sei stato ieri sera?" },
            { type: "conjugation", fr: "Nous avons vu (vedere)", it: "abbiamo visto" },
            { type: "conjugation", fr: "Ils sont montés (salire)", it: "sono saliti" },
            { type: "conjugation", fr: "Tu as écrit (scrivere)", it: "hai scritto" },
            { type: "choice", question: "Quel auxiliaire utilise-t-on pour 'partire' au passé composé ?", correct: "essere", options: ["avere", "essere", "stare"] },
            { type: "choice", question: "Comment dit-on 'ils ont fini' en italien ?", correct: "hanno finito", options: ["hanno finito", "sono finiti", "abbiamo finito"] }
        ]
    },

    // Unité 9 : Les vêtements et les couleurs
    {
        id: 9,
        title: "Les vêtements et les couleurs",
        description: "Vocabulaire des vêtements et des couleurs, ainsi que les accords.",
        questions: [
            { type: "translate", fr: "Je porte une chemise bleue", it: "Indosso una camicia blu" },
            { type: "translate", fr: "Elle a une robe rouge", it: "Lei ha un vestito rosso" },
            { type: "translate", fr: "Ces chaussures sont noires", it: "Queste scarpe sono nere" },
            { type: "translate", fr: "Un pull vert", it: "Una maglia verde" },
            { type: "translate", fr: "Des pantalons gris", it: "Un pantalone grigio" },
            { type: "translate", fr: "Une écharpe jaune", it: "Una sciarpa gialla" },
            { type: "choice", question: "Comment dit-on 'bleu' en italien ?", correct: "blu", options: ["rosso", "blu", "verde"] },
            { type: "choice", question: "Quelle est la traduction de 'camicia' en français ?", correct: "chemise", options: ["pantalon", "robe", "chemise"] },
            { type: "speak", phrase: "Mi piace la tua giacca nera." },
            { type: "speak", phrase: "Dove hai comprato questi pantaloni?" },
            { type: "translate", fr: "Ho comprato un cappotto marrone", it: "J'ai acheté un manteau marron" },
            { type: "translate", fr: "Le suo occhiali sono belli", it: "Ses lunettes sont belles" },
            { type: "translate", fr: "Questo vestito è troppo stretto", it: "Cette robe est trop serrée" },
            { type: "choice", question: "Comment dit-on 'rouge' en italien ?", correct: "rosso", options: ["giallo", "rosso", "blu"] },
            { type: "choice", question: "Quelle est la traduction de 'scarpa' en français ?", correct: "chaussure", options: ["chemise", "chaussure", "robe"] }
        ]
    },

    // Unité 10 : Expressions idiomatiques courantes
    {
        id: 10,
        title: "Expressions idiomatiques courantes",
        description: "Apprendre des expressions idiomatiques italiennes et leur traduction.",
        questions: [
            { type: "translate", fr: "Ça me va", it: "Mi va bene" },
            { type: "translate", fr: "Je n'en peux plus", it: "Non ne posso più" },
            { type: "translate", fr: "C'est parti !", it: "Si parte!" },
            { type: "translate", fr: "Ne t'en fais pas", it: "Non ti preoccupare" },
            { type: "translate", fr: "Ça alors !", it: "Ma dai!" },
            { type: "translate", fr: "Tiens-moi au courant", it: "Fammi sapere" },
            { type: "choice", question: "Comment dit-on 'je n'en peux plus' en italien ?", correct: "Non ne posso più", options: ["Non ce la faccio più", "Non ne posso più", "Non ci credo"] },
            { type: "choice", question: "Quelle est la traduction de 'in bocca al lupo' en français ?", correct: "bonne chance", options: ["bonne chance", "attention", "je t'aime"] },
            { type: "speak", phrase: "Dai, sbrigati!" },
            { type: "speak", phrase: "Che peccato!" },
            { type: "translate", fr: "A presto!", it: "À bientôt!" },
            { type: "translate", fr: "Mi raccomando!", it: "Fais attention !" },
            { type: "translate", fr: "Che fortuna!", it: "Quelle chance !" },
            { type: "choice", question: "Comment dit-on 'ça me va' en italien ?", correct: "Mi va bene", options: ["Mi dispiace", "Mi va bene", "Mi piace"] },
            { type: "choice", question: "Quelle est la traduction de 'non ti preoccupare' en français ?", correct: "ne t'en fais pas", options: ["ne te dépêche pas", "ne t'en fais pas", "ne t'en va pas"] }
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
