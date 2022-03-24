
function animateValue(obj, start, end, duration) {
    //         Code found on CodePen
    // https://codepen.io/chriscoyier/pen/xxVBqEg
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}


window.KaNa.main = new (class {
    constructor() {
        this.symbols = [
            ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'ゐ', 'ゑ', 'を', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ゔ', 'ん'],
            ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヰ', 'ヱ', 'ヲ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ジ', 'ズ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'v', 'ン'],
            ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wi', 'we', 'wo', 'ga', 'gi', 'gu', 'ge', 'go', 'za', 'ji', 'zu', 'ze', 'zo', 'da', 'ji', 'zu', 'de', 'do', 'ba', 'bi', 'bu', 'be', 'bo', 'pa', 'pi', 'pu', 'pe', 'po', 'v', 'n']
        ]
        // 0 = hiragana
        // 1 = katakana
        // 2 = romanji

        this.score = 0;
        this.displaying_answer = false;
        this.alphabet = 0;
        this.index = 0;

        setTimeout(() => {
            this.Next()
        }, 1000);

        try {
            this.audio = {
                correct: new Audio("/assets/audio/correct.mp3"),
                incorrect: new Audio("/assets/audio/wrong.mp3")
            }
        } catch (e) {
            console.log("[KaNa]: Unable to load Audio");
        }
    }
    DisplayCorrectAnswer(answer) {
        window.KaNa.DOM.answer_input.disabled = true;
        answer = (answer == undefined) ? this.symbols[2][this.index] : answer;
        try {
            window.KaNa.DOM.answer_holder.setAttribute("style", "");
            window.KaNa.DOM.correct_answer.innerText = answer;
            this.displaying_answer = true;
        } catch (e) {
            console.log("[KaNa]: Unable to display correct Answer", e);
        }
    }
    HideCorrectAnswer() {
        window.KaNa.DOM.answer_input.disabled = false;
        try {
            window.KaNa.DOM.answer_holder.setAttribute("style", "display:none;");
            this.displaying_answer = false;
        } catch (e) {
            console.log("[KaNa]: Unable to hide correct Answer", e);
        }
        window.KaNa.DOM.answer_input.focus();
    }
    Next() {
        window.KaNa.DOM.answer_input.focus();
        if (window.KaNa.settings.setting.hiragana && window.KaNa.settings.setting.katakana) {
            this.alphabet = Math.floor(Math.random() * 2);
        } else if (window.KaNa.settings.setting.hiragana) {
            this.alphabet = 0;
        } else {
            this.alphabet = 1;
        }
        this.index = Math.floor(Math.random() * this.symbols[this.alphabet].length);
        try {
            document.title = `「${this.symbols[this.alphabet][this.index]}」 KaNa Master`
            window.KaNa.DOM.display_symbol.innerText = this.symbols[this.alphabet][this.index];
        } catch (e) {
            console.log("[KaNa]: Unable to update Symbol", e);
        }
    }
    AddScore(score) {
        animateValue(window.KaNa.DOM.score, this.score, this.score + score, 750)
        this.score += score;
    }
    Correct() {
        this.audio.correct.play()
        this.AddScore(100);
        this.Next()
    }
    Verify(answer) {
        window.KaNa.DOM.answer_input.value = "";
        if (answer == this.symbols[2][this.index]) {
            this.Correct()
        } else {
            this.Incorrect()
        }
    }
    Incorrect() {
        if (this.score >= 50) {
            this.AddScore(-50);
        } else {
            this.AddScore(-this.score)
        }
        this.DisplayCorrectAnswer()
        this.audio.incorrect.play()
    }
})

document.addEventListener("keyup", (ev) => {
    // Make sure there are no spaces and it is
    // lowecase for easier comparison.
    var val = window.KaNa.DOM.answer_input.value;
    window.KaNa.DOM.answer_input.value = val.toLowerCase().split(" ").join("");
    switch (ev.key.toLowerCase()) {
        case "enter":
            if (!window.KaNa.main.displaying_answer) {
                window.KaNa.main.Verify(window.KaNa.DOM.answer_input.value);
            } else {
                window.KaNa.main.HideCorrectAnswer();
                window.KaNa.main.Next();
            }
            break;
        default:
            if (window.KaNa.DOM.answer_input.value == window.KaNa.main.symbols[2][window.KaNa.main.index]) {
                window.KaNa.main.Verify(window.KaNa.DOM.answer_input.value)
            }
            break;
    }
});

