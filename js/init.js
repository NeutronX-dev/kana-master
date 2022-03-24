window.KaNa = {
    cookie_reader: null,
    settings: {},
    main: null,
    DOM: {}
}

window.addEventListener("load", (ev) => {
    // Main
    window.KaNa.DOM.display_symbol = document.getElementById("display_symbol");
    window.KaNa.DOM.answer_holder = document.getElementById("answer_holder");
    window.KaNa.DOM.correct_answer = document.getElementById("correct_answer");
    window.KaNa.DOM.answer_input = document.getElementById("answer_input");
    window.KaNa.DOM.score = document.getElementById("score");
    // Settings
    window.KaNa.DOM.hiragana_enabled = document.getElementById("hiragana_toggle");
    window.KaNa.DOM.katakana_enabled = document.getElementById("katakana_toggle");

    
    document.getElementById("settings").setAttribute("style", "display:none;")
    window.KaNa.DOM.answer_holder.setAttribute("style", "display:none;");



    window.KaNa.DOM.hiragana_enabled.onchange = (ev) => {
        window.KaNa.settings.setting.hiragana = window.KaNa.DOM.hiragana_enabled.checked;
        window.KaNa.settings.save();
    };

    window.KaNa.DOM.katakana_enabled.onchange = (ev) => {
        window.KaNa.settings.setting.katakana = window.KaNa.DOM.katakana_enabled.checked;
        window.KaNa.settings.save();
    };
})