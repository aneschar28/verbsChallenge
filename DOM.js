const verb = document.getElementById("verb");
const tryagain = document.getElementById("tryagain");
const check = document.getElementById("check");
const pasado = document.getElementById("pasado"); 
const participio = document.getElementById("participio"); 
const rightpast = document.getElementById("rightpast");
const rightparticiple = document.getElementById("rightparticiple");
const score = document.getElementById("score");
let checkpoint = true;

let i = 0;
let j = 0;
let resultado = 0;


let numeroaleatorio;

const verbosPrincipales = [
    { presente: "be", pasado: "was/were", participio: "been" },
    { presente: "become", pasado: "became", participio: "become" },
    { presente: "begin", pasado: "began", participio: "begun" },
    { presente: "break", pasado: "broke", participio: "broken" },
    { presente: "bring", pasado: "brought", participio: "brought" },
    { presente: "build", pasado: "built", participio: "built" },
    { presente: "buy", pasado: "bought", participio: "bought" },
    { presente: "catch", pasado: "caught", participio: "caught" },
    { presente: "choose", pasado: "chose", participio: "chosen" },
    { presente: "come", pasado: "came", participio: "come" },
    { presente: "cut", pasado: "cut", participio: "cut" },
    { presente: "do", pasado: "did", participio: "done" },
    { presente: "draw", pasado: "drew", participio: "drawn" },
    { presente: "drink", pasado: "drank", participio: "drunk" },
    { presente: "drive", pasado: "drove", participio: "driven" },
    { presente: "eat", pasado: "ate", participio: "eaten" },
    { presente: "fall", pasado: "fell", participio: "fallen" },
    { presente: "feel", pasado: "felt", participio: "felt" },
    { presente: "find", pasado: "found", participio: "found" },
    { presente: "fly", pasado: "flew", participio: "flown" },
    { presente: "forget", pasado: "forgot", participio: "forgotten" },
    { presente: "get", pasado: "got", participio: "gotten" },
    { presente: "give", pasado: "gave", participio: "given" },
    { presente: "go", pasado: "went", participio: "gone" },
    { presente: "grow", pasado: "grew", participio: "grown" },
    { presente: "have", pasado: "had", participio: "had" },
    { presente: "hear", pasado: "heard", participio: "heard" },
    { presente: "hold", pasado: "held", participio: "held" },
    { presente: "keep", pasado: "kept", participio: "kept" },
    { presente: "know", pasado: "knew", participio: "known" },
    { presente: "leave", pasado: "left", participio: "left" },
    { presente: "lose", pasado: "lost", participio: "lost" },
    { presente: "make", pasado: "made", participio: "made" },
    { presente: "mean", pasado: "meant", participio: "meant" },
    { presente: "meet", pasado: "met", participio: "met" },
    { presente: "pay", pasado: "paid", participio: "paid" },
    { presente: "put", pasado: "put", participio: "put" },
    { presente: "read", pasado: "read", participio: "read" },
    { presente: "ride", pasado: "rode", participio: "ridden" },
    { presente: "ring", pasado: "rang", participio: "rung" },
    { presente: "run", pasado: "ran", participio: "run" },
    { presente: "say", pasado: "said", participio: "said" },
    { presente: "see", pasado: "saw", participio: "seen" },
    { presente: "sell", pasado: "sold", participio: "sold" },
    { presente: "send", pasado: "sent", participio: "sent" },
    { presente: "set", pasado: "set", participio: "set" },
    { presente: "shake", pasado: "shook", participio: "shaken" },
    { presente: "show", pasado: "showed", participio: "shown" },
    { presente: "sing", pasado: "sang", participio: "sung" },
    { presente: "sit", pasado: "sat", participio: "sat" },
    { presente: "sleep", pasado: "slept", participio: "slept" },
    { presente: "speak", pasado: "spoke", participio: "spoken" },
    { presente: "spend", pasado: "spent", participio: "spent" },
    { presente: "stand", pasado: "stood", participio: "stood" },
    { presente: "steal", pasado: "stole", participio: "stolen" },
    { presente: "swim", pasado: "swam", participio: "swum" },
    { presente: "take", pasado: "took", participio: "taken" },
    { presente: "teach", pasado: "taught", participio: "taught" },
    { presente: "tell", pasado: "told", participio: "told" },
    { presente: "think", pasado: "thought", participio: "thought" },
    { presente: "throw", pasado: "threw", participio: "thrown" },
    { presente: "understand", pasado: "understood", participio: "understood" },
    { presente: "wake", pasado: "woke", participio: "woken" },
    { presente: "wear", pasado: "wore", participio: "worn" },
    { presente: "win", pasado: "won", participio: "won" },
    { presente: "write", pasado: "wrote", participio: "written" },
    { presente: "beat", pasado: "beat", participio: "beaten" },
    { presente: "begin", pasado: "began", participio: "begun" },
    { presente: "blow", pasado: "blew", participio: "blown" },
    { presente: "bite", pasado: "bit", participio: "bitten" },
    { presente: "build", pasado: "built", participio: "built" },
    { presente: "burn", pasado: "burnt", participio: "burnt" },
    { presente: "burst", pasado: "burst", participio: "burst" },
    { presente: "deal", pasado: "dealt", participio: "dealt" },
    { presente: "feed", pasado: "fed", participio: "fed" },
    { presente: "fight", pasado: "fought", participio: "fought" },
    { presente: "hang", pasado: "hung", participio: "hung" },
    { presente: "hide", pasado: "hid", participio: "hidden" },
    { presente: "hit", pasado: "hit", participio: "hit" },
    { presente: "hurt", pasado: "hurt", participio: "hurt" },
    { presente: "lay", pasado: "laid", participio: "laid" },
    { presente: "lend", pasado: "lent", participio: "lent" },
    { presente: "lie", pasado: "lay", participio: "lain" },
    { presente: "light", pasado: "lit", participio: "lit" },
    { presente: "shake", pasado: "shook", participio: "shaken" },
    { presente: "shoot", pasado: "shot", participio: "shot" },
    { presente: "shut", pasado: "shut", participio: "shut" },
    { presente: "slide", pasado: "slid", participio: "slid" },
    { presente: "stick", pasado: "stuck", participio: "stuck" },
    { presente: "sting", pasado: "stung", participio: "stung" },
    { presente: "tear", pasado: "tore", participio: "torn" },
    { presente: "throw", pasado: "threw", participio: "thrown" }
];

function contador (){

    i++;
    return i

}

function contador2 (){

    j++;
    return j

}

function scoring () {

   resultado = Math.round(((j/2)/i)*100);
   score.innerText =  `${resultado}%`;
   score.style.color = score.style.color = `rgb(${(1275/2) - (51 / 8) * resultado}, ${(51 / 8) * resultado - (765/2)}, 0)`;
   
}

function aleatorio() {
    numeroaleatorio = Math.floor(Math.random() * verbosPrincipales.length); 
    return numeroaleatorio;
}

function newverb() {
    verb.innerText = verbosPrincipales[aleatorio()].presente;
    pasado.value = "";
    participio.value = "";
    pasado.style.borderColor = "black";
    participio.style.borderColor = "black";
    rightpast.innerText = "";
    rightparticiple.innerText = "";
    contador();
    console.log(verbosPrincipales[numeroaleatorio]);
    
}

function checkingpas() {
   
    if (pasado.value === verbosPrincipales[numeroaleatorio].pasado) {
        pasado.style.borderColor = "green"
        contador2();
        
    } else {
        pasado.style.borderColor = "red"
        rightpast.innerText = `${verbosPrincipales[numeroaleatorio].pasado}`
   
    }

    
}
 
function checkingpar() {
   
    if (participio.value === verbosPrincipales[numeroaleatorio].participio) {
        
        participio.style.borderColor = "green"
        contador2();
    } else {
        
        participio.style.borderColor = "red"
        rightparticiple.innerText = `${verbosPrincipales[numeroaleatorio].participio}`
    }

    
}

newverb();




check.addEventListener("click", () => {
    if (checkpoint) {
        checkingpas();
        checkingpar();
        scoring();
        checkpoint = false;
    }
});

tryagain.addEventListener("click", () => {
    newverb();
    checkpoint = true;
});


