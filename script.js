(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    const messages = TEXT.home.noButtonMessages;

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}







/*
 * EDIT THE WEBSITE TEXT HERE.
 *
 * All text that visitors see is kept in this one object. Change only the text
 * inside the quotation marks; the page layout and button behavior will keep
 * working automatically.
 */
const TEXT = {
    home: {
        pageTitle: "דייט?",
        heading: "אפשר לקחת אותך לדייט?",
        yesButton: "כן",
        noButton: "לא",
        imageAlt: "איור חמוד של דמות שמחזיקה לב",
        noButtonMessages: [
            "את בטוחה?",
            "בטוחה בטוחה?",
            "תשקלי את זה לפחות...",
            "נו בבקשההה",
            "רק תחשבי על זה",
            "אם תגידי לא אני אהיה עצוב מאוד",
            "ממש עצוב",
            "ממש ממש עצוב",
            "טוב, אני אפסיק לשאול",
            "סתם, בבקשה תגידי כן ❤️"
        ]
    },
    yes: {
        pageTitle: "ידעתי שתגידי כן!",
        heading: "ידעתי שתגידי כן!",
        imageAlt: "איור חמוד של דמויות חוגגות"
    }
};

function applyPageText() {
    const pageText = TEXT[document.body.dataset.page];

    if (!pageText) {
        return;
    }

    document.title = pageText.pageTitle;

    document.querySelectorAll("[data-text]").forEach((element) => {
        element.textContent = pageText[element.dataset.text] ?? "";
    });

    document.querySelectorAll("[data-text-alt]").forEach((image) => {
        image.alt = pageText[image.dataset.textAlt] ?? "";
    });
}

applyPageText();

