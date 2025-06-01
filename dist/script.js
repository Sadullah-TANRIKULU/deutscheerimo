"use strict";
const dataGerman = [
    {
        info: `<details class="word group">
<summary>Anforderungen erfüllen</summary>

<p class="text">Ich muss die Anforderungen für den Job erfüllen. <span>(Die Bedingungen passen zu mir.)</span></p>

</details>`,
    },
    {
        info: `<details class="word group"> <summary>jemand fest anstellen</summary><br> <p class="text">Die Firma möchte ihn fest anstellen. <span>(Jemand bekommt einen festen Job.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>sich an die Arbeit machen</summary><br> <p class="text">Nach dem Frühstück mache ich mich an die Arbeit. <span>(Ich beginne jetzt zu arbeiten.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>eine Aufgabe übernehmen</summary><br> <p class="text">Ich kann diese Aufgabe übernehmen. <span>(Ich mache diese Arbeit jetzt.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Druck ausüben</summary><br> <p class="text">Mein Chef übt viel Druck aus. <span>(Jemand zwingt mich zu handeln.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>in Gefahr sein</summary><br> <p class="text">Das Kind war in Gefahr. <span>(Es könnte etwas Schlimmes passieren.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Konflikte lösen</summary><br> <p class="text">Wir müssen die Konflikte lösen. <span>(Probleme werden gemeinsam beendet.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Kontakte knüpfen</summary><br> <p class="text">Auf der Messe kann man viele Kontakte knüpfen. <span>(Neue Leute kennenlernen und sprechen.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>Sinn und Zweck von etwas</summary><br> <p class="text">Der Sinn und Zweck der Übung ist Lernen. <span>(Das Ziel oder der Grund.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>zwei linke Hände haben</summary><br> <p class="text">Er hat zwei linke Hände beim Basteln. <span>(Er ist sehr ungeschickt.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>im Zusammenhang mit etwas stehen</summary><br> <p class="text">Die E-Mail steht im Zusammenhang mit dem Projekt. <span>(Es gehört zu diesem Thema.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>genannten Voraussetzungen</summary><br> <p class="text">Ich erfülle die genannten Voraussetzungen. <span>(Die Bedingungen wurden schon genannt.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>beschäftigt</summary><br> <p class="text">Ich bin heute sehr beschäftigt. <span>(Ich habe viel zu tun.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>beigefügten Unterlagen</summary><br> <p class="text">Sie finden die beigefügten Unterlagen im Anhang. <span>(Die Dokumente sind dabei.)</span></p> </details>`,
    },
    {
        info: `<label for="story">Schreib deine eigene Sätze :</label>

<textarea id="story" name="story" rows="5" cols="33" placeholder="Was hast du noch in deinem Kopf..." autocomplete="on" autocorrect="on" spellcheck="true" autofocus required   >

</textarea>`,
    },
    {
        info: `<details class="word group"> <summary>auf Ihr Stellenangebot</summary><br> <p class="text">Ich bewerbe mich auf Ihr Stellenangebot. <span>(Ich antworte auf Ihren Job.)</span></p> </details>`,
    },
    {
        info: `<details class="word group"> <summary>hektisch werden</summary><br> <p class="text">Bei viel Arbeit kann ich hektisch werden. <span>(Ich werde sehr unruhig.)</span></p> </details>`,
    },
];
const btn = document.querySelector("button");
const example = document.querySelector("p");
const getDataGerman = () => {
    const dataGermanLength = dataGerman.length;
    const randomNum = Math.floor(Math.random() * dataGermanLength);
    example.innerHTML = dataGerman[randomNum].info;
};
const focusOnTextarea = () => {
    const textarea = document.querySelector("textarea");
    textarea.focus();
};
btn.addEventListener("click", getDataGerman);
btn.addEventListener("click", focusOnTextarea);
