window.KaNa.settings = {
    toggled: true,
    toggle: () => {
        if (window.KaNa.settings.toggled) {
            window.KaNa.settings.update()
            window.KaNa.settings.updateDOM()
            window.KaNa.settings.toggled = false;
            document.getElementById("main").setAttribute("style", "display:none;");
            document.getElementById("settings").setAttribute("style", "");
            document.getElementById("settings_btn").innerText = "Practice";
        } else {
            document.getElementById("main").setAttribute("style", "");
            document.getElementById("settings").setAttribute("style", "display:none;");
            window.KaNa.settings.toggled = true;
            document.getElementById("settings_btn").innerText = "Settings";
        }
    },
    setting: {
        hiragana: true,
        katakana: true,
    },
    save: () => {
        console.log("[KaNa]: Saved Settings");
        window.KaNa.main.Next()
        window.KaNa.cookie_reader.SetCookie("settings", JSON.stringify(window.KaNa.settings.setting), 365);
    },
    update: () => {
        try {
            let stng = window.KaNa.cookie_reader.GetCookie("settings");
            if (stng == "") return
            window.KaNa.settings.setting = JSON.parse(stng)
            console.log("[KaNa]: Parsed Settings.");
        } catch (e) {
            console.log("[KaNa]: Error parsing settings from Cookies.", e);
        }
    },
    updateDOM: () => {
        window.KaNa.DOM.hiragana_enabled.checked = window.KaNa.settings.setting.hiragana;
        window.KaNa.DOM.katakana_enabled.checked = window.KaNa.settings.setting.katakana;
    }
};

window.KaNa.settings.update()