"use strict";
const dataGerman = [
    {
        info: '<details class="word group"> <summary>eingefallen</summary><br> <p class="text">Mir ist plötzlich eine gute Idee eingefallen. <span>(Etwas kommt einem in den Sinn.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Sport treiben</summary><br> <p class="text">Viele Menschen treiben regelmäßig Sport, um gesund zu bleiben. <span>(Sport machen; sich körperlich betätigen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>sich fit fühlen</summary><br> <p class="text">Nach dem Joggen fühle ich mich richtig fit. <span>(Gesund und voller Energie sein.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Erfolg im Beruf haben</summary><br> <p class="text">Sie möchte später viel Erfolg im Beruf haben. <span>(Im Job gute Leistungen bringen und anerkannt werden.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>viel Geld verdienen</summary><br> <p class="text">Er möchte später viel Geld verdienen. <span>(Ein hohes Einkommen haben.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Graffiti sprühen</summary><br> <p class="text">Manche Jugendliche sprühen Graffiti an Wände. <span>(Mit Spraydosen Bilder oder Schriftzüge auf Wände malen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>sich beziehen auf</summary><br> <p class="text">Ich beziehe mich auf Ihren Brief vom 10. Juni. <span>(Etwas erwähnen oder darauf verweisen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>zur Diskussion stehen</summary><br> <p class="text">Das neue Gesetz steht zur Diskussion. <span>(Etwas wird besprochen oder überlegt.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>etwas beantragen</summary><br> <p class="text">Er möchte ein Visum beantragen. <span>(Offiziell um etwas bitten oder es verlangen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Kritik üben an</summary><br> <p class="text">Viele Menschen üben Kritik an der Regierung. <span>(Etwas/jemanden negativ bewerten.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>diskutiert werden</summary><br> <p class="text">Das Thema wird im Parlament diskutiert. <span>(Über etwas sprechen und Meinungen austauschen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>zur Anwendung kommen</summary><br> <p class="text">Die neuen Regeln kommen ab sofort zur Anwendung. <span>(Etwas wird benutzt oder umgesetzt.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>jemanden beeindrucken</summary><br> <p class="text">Seine Rede hat alle beeindruckt. <span>(Einen starken Eindruck auf jemanden machen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>jemanden kritisieren</summary><br> <p class="text">Der Chef hat ihn für seine Arbeit kritisiert. <span>(Negativ über jemanden sprechen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>angewendet werden</summary><br> <p class="text">Die Methode wird in vielen Schulen angewendet. <span>(Etwas wird benutzt oder eingesetzt.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>etwas ausdrücken</summary><br> <p class="text">Mit diesem Bild möchte sie ihre Gefühle ausdrücken. <span>(Etwas zeigen oder mitteilen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>etwas zum Ausdruck bringen</summary><br> <p class="text">Er bringt seine Meinung klar zum Ausdruck. <span>(Etwas deutlich sagen oder zeigen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>einen Antrag stellen auf</summary><br> <p class="text">Sie hat einen Antrag auf Kindergeld gestellt. <span>(Offiziell um etwas bitten.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>in Schutz nehmen vor</summary><br> <p class="text">Das war nicht in Ordnung, aber du nimmst ihn wieder vor mir in Schutz! <span>((be)schützen, verteidigen)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Eindruck machen auf</summary><br> <p class="text">Das große Haus macht Eindruck auf mich. <span>(Etwas/jemand wirkt stark auf jemanden.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>sich Gedanken machen über</summary><br> <p class="text">Ich mache mir viele Gedanken über Internetsucht. <span>(nachdenken)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>interesse wecken für</summary><br> <p class="text">Das interesse an der Wissenschaft sollte bei Kindern schon früh geweckt werden <span>(jemand interessieren für)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Bezug nehmen auf</summary><br> <p class="text">Ich nehme Bezug auf Ihre letzte E-Mail. <span>(Etwas erwähnen oder darauf verweisen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>sich Mühe geben</summary><br> <p class="text">Er gibt sich viel Mühe in der Schule. <span>(Sich anstrengen; viel tun, um etwas zu schaffen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>eine Verabredung treffen zu/mit</summary><br> <p class="text">Welche internen Verabredungen zum Vertrag wurden denn mit Ihnen getroffen? <span>(etwas vereinbaren)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>den Entschluss fassen</summary><br> <p class="text">Sie hat den Entschluss gefasst, ins Ausland zu gehen. <span>(Sich entscheiden, etwas zu tun.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Anerkennung finden</summary><br> <p class="text">Seine Arbeit findet viel Anerkennung. <span>(Etwas wird gelobt oder geschätzt.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>außer Zweifel stehen</summary><br> <p class="text">Es steht außer Zweifel, dass er die Wahrheit sagt. <span>(Etwas ist sicher und klar.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>in Erfüllung gehen</summary><br> <p class="text">Ihr Wunsch ist in Erfüllung gegangen. <span>(Etwas wird wahr.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Einfluss nehmen auf</summary><br> <p class="text">Eltern nehmen Einfluss auf ihre Kinder. <span>(Jemanden oder etwas beeinflussen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Rücksicht nehmen auf</summary><br> <p class="text">Bitte nehmen Sie Rücksicht auf andere Fahrgäste. <span>(Auf andere achten; respektvoll sein.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>auf der linken Seite</summary><br> <p class="text">Die Apotheke ist auf der linken Seite der Straße. <span>(Links von etwas.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>auf der rechten Seite</summary><br> <p class="text">Das Café ist auf der rechten Seite. <span>(Rechts von etwas.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>computerspielsüchtig</summary><br> <p class="text">Er ist computerspielsüchtig und spielt den ganzen Tag. <span>(Abhängig vom Computerspielen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Alkoholabhängigkeit</summary><br> <p class="text">Alkoholabhängigkeit ist eine schwere Krankheit. <span>(Sucht nach Alkohol.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>Untersuchungen anstellen</summary><br> <p class="text">Die Polizei stellt Untersuchungen zum Unfall an. <span>(Etwas genau prüfen oder erforschen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>in Aufregung versetzen</summary><br> <p class="text">Die Nachricht hat sie in Aufregung versetzt. <span>(Jemanden sehr nervös oder gespannt machen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>die Flucht ergreifen</summary><br> <p class="text">Der Dieb hat die Flucht ergriffen. <span>(Weglaufen; fliehen.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>sehr relevant sein</summary><br> <p class="text">Das Thema ist für die Prüfung sehr relevant. <span>(Sehr wichtig sein.)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>sich in Acht nehmen vor</summary><br> <p class="text">Vor manchen Menschen sollte man sich in Acht nehmen. <span>(aufpassen, vorsichtig sein)</span></p> </details>',
    },
    {
        info: '<details class="word group"> <summary>in Betracht kommen</summary><br> <p class="text">Für die Stelle kommen viele Bewerber in Betracht. <span>(Etwas/jemand ist möglich oder geeignet.)</span></p> </details>',
    },
    {
        info: `<details class="word group"> <summary>Anforderungen erfüllen</summary><br> <p class="text">Er erfüllt alle Anforderungen für den Job. <span>(Die Person kann alles, was nötig ist.) </span></p> </details>`,
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
        info: `<details class="word group"> <summary>in der Lage sein zu</summary><br> <p class="text">Wir sind alle in der Lage, etwas für die Gesellschaft zu tun. <span>(können, fähig sein) </span></p> </details>`,
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
        info: `<details class="word group"> <summary>in Schwierigkeiten geraten</summary><br> <p class="text">Durch die plötzlichen Ausgaben ist das Unternehmen in Schwierigkeiten geraten. <span>(Probleme bekommen) </span></p> </details>`,
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
        info: `<details class="word group"> <summary>einen Kompromiss schliessen</summary><br> <p class="text">Nach langen Verhandlungen konnten die Parteien endlich einen Kompromiss schließen. <span>(Zwei oder mehr Personen haben unterschiedliche Meinungen oder Wünsche. Sie sprechen miteinander und einigen sich am Ende. ) </span></p> </details>`,
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
    {
        info: `<details class="word group"> <summary>Stellung nehmen zu</summary><br> <p class="text">Ich möchte dazu kurz Stellung nehmen <span>(seine Meinung äussern) </span></p> </details>`,
    },
];
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then((reg) => console.log("Service Worker registered!", reg))
        .catch((err) => console.error("Service Worker registration failed:", err));
}
const btn = document.querySelector("button");
const example = document.querySelector("p");
const beispielanzahl = document.querySelector(".beispielanzahl");
beispielanzahl.innerHTML = `die Anzahl der Beispiele : ${dataGerman.length}`;
const getDataGerman = () => {
    const dataGermanLength = dataGerman.length;
    const randomNum = Math.floor(Math.random() * dataGermanLength);
    example.innerHTML = dataGerman[randomNum].info;
};
btn.addEventListener("click", getDataGerman);
