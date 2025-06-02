const dataGerman: IDataGerman[] = [
  {
    info: `<details class="word group">
<summary>Anforderungen erfüllen</summary>

<p class="text">Er erfüllt alle Anforderungen für den Job. <span>(Die Person kann alles, was nötig ist.) </span></p>

</details>`,
  },
  {
    info: `<details class="word group"> <summary>jemanden fest anstellen</summary><br> <p class="text">Die Firma möchte ihn fest anstellen. <span>(Jemand bekommt einen dauerhaften Arbeitsvertrag.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>sich an die Arbeit machen</summary><br> <p class="text">Nach dem Frühstück mache ich mich an die Arbeit. <span>(Ich beginne jetzt mit der Arbeit.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>eine Aufgabe übernehmen</summary><br> <p class="text">Ich übernehme die Aufgabe im Projekt. <span>(Ich mache eine bestimmte Arbeit.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>Druck ausüben</summary><br> <p class="text">Der Chef übt viel Druck auf uns aus. <span>(Jemand macht Stress wegen einer Sache.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>in Gefahr sein</summary><br> <p class="text">Das Tier ist in Gefahr. <span>(Es gibt ein Risiko für jemanden.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>Konflikte lösen</summary><br> <p class="text">Wir müssen die Konflikte im Team lösen. <span>(Probleme zwischen Menschen beenden.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>Kontakte knüpfen</summary><br> <p class="text">Auf der Messe kann man Kontakte knüpfen. <span>(Neue Leute kennenlernen und sprechen.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>Sinn und Zweck von etwas</summary><br> <p class="text">Was ist der Sinn und Zweck der Übung? <span>(Warum macht man diese Sache?) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>zwei linke Hände haben</summary><br> <p class="text">Er hat zwei linke Hände beim Basteln. <span>(Jemand ist ungeschickt bei Handarbeit.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>im Zusammenhang mit etwas stehen</summary><br> <p class="text">Die Probleme stehen im Zusammenhang mit dem Projekt. <span>(Zwei Dinge gehören irgendwie zusammen.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>genannten Voraussetzungen</summary><br> <p class="text">Sie haben die genannten Voraussetzungen erfüllt. <span>(Die Bedingungen, die vorher genannt wurden.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>beschäftigt</summary><br> <p class="text">Ich bin gerade beschäftigt und habe keine Zeit. <span>(Ich mache gerade etwas, bin nicht frei.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>beigefügten Unterlagen</summary><br> <p class="text">Die beigefügten Unterlagen finden Sie im Anhang. <span>(Die Papiere, die dabei sind.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>auf Ihr Stellenangebot</summary><br> <p class="text">Ich bewerbe mich auf Ihr Stellenangebot. <span>(Das Jobangebot, das Sie haben.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>hektisch werden</summary><br> <p class="text">Vor dem Termin werde ich hektisch. <span>(Ich werde plötzlich gestresst und schnell.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>in die Mitarbeiter investieren</summary><br> <p class="text">Die Firma investiert viel in die Mitarbeiter. <span>(Geld oder Zeit für Angestellte geben.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>Computerprogramme effektiv genutzt werden</summary><br> <p class="text">Computerprogramme müssen effektiv genutzt werden. <span>(Die Programme sollen gut benutzt werden.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>Probleme für sich behalten</summary><br> <p class="text">Er behält seine Probleme für sich. <span>(Er spricht nicht über seine Probleme.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>sparen an den Fortbildungskosten</summary><br> <p class="text">Die Firma spart an den Fortbildungskosten. <span>(Weniger Geld für Weiterbildung ausgeben.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>anspruchsvoll</summary><br> <p class="text">Die Aufgabe ist sehr anspruchsvoll. <span>(Es ist schwierig und braucht viel Können.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>Kündigungsfrist</summary><br> <p class="text">Meine Kündigungsfrist beträgt einen Monat. <span>(Zeit zwischen Kündigung und Arbeitsende.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>umfangreich</summary><br> <p class="text">Das Projekt ist sehr umfangreich. <span>(Es gibt viele Teile oder Aufgaben.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>übersichtlich</summary><br> <p class="text">Die Tabelle ist sehr übersichtlich. <span>(Man kann alles gut erkennen.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>vernünftig</summary><br> <p class="text">Das ist eine vernünftige Entscheidung. <span>(Es ist logisch und sinnvoll.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>einheitlich</summary><br> <p class="text">Die Kleidung ist einheitlich für alle. <span>(Alles sieht gleich oder ähnlich aus.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>zielorientiert</summary><br> <p class="text">Sie arbeitet sehr zielorientiert. <span>(Sie arbeitet immer auf ein Ziel hin.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>teamfähig</summary><br> <p class="text">Er ist sehr teamfähig. <span>(Er kann gut im Team arbeiten.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>sich durchkämpfen</summary><br> <p class="text">Sie muss sich durch das Studium durchkämpfen. <span>(Trotz Schwierigkeiten weitermachen und nicht aufgeben.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>klappen</summary><br> <p class="text">Hoffentlich klappt alles bei der Prüfung. <span>(Es funktioniert oder geht gut.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>lukrativ</summary><br> <p class="text">Der Job ist sehr lukrativ. <span>(Man verdient viel Geld dabei.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>ablenken von</summary><br> <p class="text">Das Handy lenkt mich von der Arbeit ab. <span>(Etwas bringt mich vom Ziel weg.) </span></p> </details>`,
  },
  {
    info: `<label for="story">Schreib deine eigene Sätze :</label>
    
    <textarea id="story" name="story" rows="5" cols="33" placeholder="Was hast du noch in deinem Kopf..." autocomplete="on" autocorrect="on" spellcheck="true" autofocus required   >
    
    </textarea>`,
  },
  {
    info: `<details class="word group"> <summary>mangeln an</summary><br> <p class="text">Es mangelt an guten Ideen. <span>(Etwas fehlt oder ist zu wenig.) </span></p> </details>`,
  },
  {
    info: `<details class="word group"> <summary>einbringen in</summary><br> <p class="text">Ich bringe meine Ideen ins Team ein. <span>(Ich gebe etwas zu einer Gruppe dazu.) </span></p> </details>`,
  },
];

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((reg) => console.log("Service Worker registered!", reg))
    .catch((err) => console.error("Service Worker registration failed:", err));
}

const btn: HTMLElement | any = document.querySelector("button");
const example: HTMLElement | any = document.querySelector("p");

const getDataGerman = () => {
  const dataGermanLength: number = dataGerman.length;
  const randomNum: number = Math.floor(Math.random() * dataGermanLength);
  example.innerHTML = dataGerman[randomNum].info;
};

const focusOnTextarea = () => {
  const textarea: HTMLTextAreaElement | any =
    document.querySelector("textarea");
  textarea.focus();
};

btn.addEventListener("click", getDataGerman);
btn.addEventListener("click", focusOnTextarea);
