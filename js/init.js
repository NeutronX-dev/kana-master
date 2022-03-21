window.KaNa = {
    cookie_reader: null,
    settings: {},
    main: null,
    DOM: {
        display_symbol: null,
        answer_input: null
    }
}

window.addEventListener("load", (ev) => {
    // Main
    window.KaNa.DOM.display_symbol = document.getElementById("display_symbol");
    window.KaNa.DOM.answer_input = document.getElementById("answer_input");
    window.KaNa.DOM.score = document.getElementById("score");
    // Settings
    window.KaNa.DOM.hiragana_enabled = document.getElementById("hiragana_toggle");
    window.KaNa.DOM.katakana_enabled = document.getElementById("katakana_toggle");
    document.getElementById("settings").setAttribute("style", "display:none;")

    window.KaNa.DOM.hiragana_enabled.onchange = (ev) => {
        window.KaNa.settings.setting.hiragana = window.KaNa.DOM.hiragana_enabled.checked;
        window.KaNa.settings.save()
    };

    window.KaNa.DOM.katakana_enabled.onchange = (ev) => {
        window.KaNa.settings.setting.katakana = window.KaNa.DOM.katakana_enabled.checked;
        window.KaNa.settings.save()
    };
})