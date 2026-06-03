import type { Locale } from "@/i18n/routing";

/**
 * Translated metadata (title + h1 + description) per post.
 *
 * Phase one ships English copy plus native-register translations for the
 * other eleven supported locales. Body content (faq, products, items,
 * sources) stays in English; non-English locales render the
 * `TranslationPendingBanner` above the article body to signal that the
 * full body translation is in progress.
 *
 * Slugs stay in English. Translated slugs are a later phase.
 *
 * Voice target across every locale: warm nurse-friend, calm and cited,
 * never selling anything, written as if a native medical journalist at a
 * respected publication wrote it. Em-dashes are kept where they read as
 * legitimate appositives in the target register; mechanical AI-style
 * em-dashes have been edited out.
 */
export type LocalePost = {
  title?: string;
  h1?: string;
  description?: string;
};

export type PostI18n = Partial<Record<Locale, LocalePost>>;

export const POST_I18N: Record<string, PostI18n> = {
  "ozempic-week-by-week": {
    de: {
      title: "Ozempic Woche für Woche: was zu erwarten ist",
      h1: "Ozempic Woche für Woche: was zu erwarten ist",
      description:
        "Ein wöchentlicher Verlauf des ersten Jahres unter Semaglutid. Was normal ist. Was nicht. Und wann der Anruf in der Praxis ansteht.",
    },
    fr: {
      title: "Ozempic, semaine par semaine : ce à quoi s'attendre",
      h1: "Ozempic, semaine par semaine : ce à quoi s'attendre",
      description:
        "La chronologie semaine par semaine de la première année sous sémaglutide. Ce qui est normal, ce qui ne l'est pas, et le moment où il faut appeler son médecin.",
    },
    it: {
      title: "Ozempic settimana per settimana: cosa aspettarsi",
      h1: "Ozempic settimana per settimana: cosa aspettarsi",
      description:
        "Una cronologia settimana per settimana del primo anno con semaglutide. Cosa è normale. Cosa non lo è. E quando chiamare il medico.",
    },
    es: {
      title: "Ozempic semana a semana: qué esperar",
      h1: "Ozempic semana a semana: qué esperar",
      description:
        "Una línea de tiempo semana a semana del primer año con semaglutida. Qué es normal. Qué no lo es. Y cuándo llamar a su médico.",
    },
    nl: {
      title: "Ozempic week voor week: wat u kunt verwachten",
      h1: "Ozempic week voor week: wat u kunt verwachten",
      description:
        "Een tijdlijn van week tot week van het eerste jaar met semaglutide. Wat normaal is. Wat niet. En wanneer u uw arts belt.",
    },
    pl: {
      title: "Ozempic tydzień po tygodniu: czego się spodziewać",
      h1: "Ozempic tydzień po tygodniu: czego się spodziewać",
      description:
        "Tygodniowy przebieg pierwszego roku z semaglutydem. Co jest normalne, co nie i kiedy trzeba zadzwonić do lekarza.",
    },
    sv: {
      title: "Ozempic vecka för vecka: vad du kan vänta dig",
      h1: "Ozempic vecka för vecka: vad du kan vänta dig",
      description:
        "En tidslinje vecka för vecka av det första året på semaglutid. Vad som är normalt. Vad som inte är det. Och när du ringer läkaren.",
    },
  },
  "glp1-guide-for-beginners": {
    de: {
      title: "Der vollständige GLP-1-Leitfaden für Einsteiger",
      h1: "Der vollständige GLP-1-Leitfaden für Einsteiger",
      description:
        "Was GLP-1 sind. Wie sie im Körper wirken. Für wen sie zugelassen sind. Die vier Wirkstoffe auf dem Markt. Ohne Hype erklärt.",
    },
    fr: {
      title: "Le guide complet des GLP-1 pour débuter",
      h1: "Le guide complet des GLP-1 pour débuter",
      description:
        "Ce que sont les GLP-1. Comment ils agissent dans le corps. Pour qui ils sont approuvés. Les quatre molécules disponibles. Expliqué sans excès.",
    },
    it: {
      title: "La guida completa ai GLP-1 per chi inizia",
      h1: "La guida completa ai GLP-1 per chi inizia",
      description:
        "Che cosa sono i GLP-1. Come agiscono nel corpo. A chi sono approvati. I quattro farmaci sul mercato. Spiegato senza enfasi.",
    },
    es: {
      title: "La guía completa de GLP-1 para empezar",
      h1: "La guía completa de GLP-1 para empezar",
      description:
        "Qué son los GLP-1. Cómo actúan en el cuerpo. A quién están aprobados. Los cuatro fármacos del mercado. Explicado sin sensacionalismo.",
    },
    nl: {
      title: "De complete GLP-1-gids voor beginners",
      h1: "De complete GLP-1-gids voor beginners",
      description:
        "Wat GLP-1's zijn. Hoe ze in het lichaam werken. Voor wie ze zijn goedgekeurd. De vier middelen op de markt. Uitgelegd zonder hype.",
    },
    pl: {
      title: "Kompletny przewodnik po GLP-1 dla początkujących",
      h1: "Kompletny przewodnik po GLP-1 dla początkujących",
      description:
        "Czym są GLP-1. Jak działają w organizmie. Dla kogo zostały zatwierdzone. Cztery leki dostępne na rynku. Wyjaśnione bez sensacji.",
    },
    sv: {
      title: "Den kompletta GLP-1-guiden för nybörjare",
      h1: "Den kompletta GLP-1-guiden för nybörjare",
      description:
        "Vad GLP-1 är. Hur de verkar i kroppen. För vem de är godkända. De fyra läkemedlen på marknaden. Förklarat utan hype.",
    },
  },
  "glp1-side-effect-guide": {
    de: {
      title: "Der vollständige GLP-1-Nebenwirkungs-Leitfaden: Woche für Woche",
      h1: "Der vollständige GLP-1-Nebenwirkungs-Leitfaden: Woche für Woche",
      description:
        "Jede gängige GLP-1-Nebenwirkung, in welcher Woche sie typischerweise auftritt, warum sie auftritt und was tatsächlich hilft. Mit Belegen aus Studiendaten und Fachinformationen.",
    },
    fr: {
      title: "Le guide complet des effets secondaires des GLP-1, semaine par semaine",
      h1: "Le guide complet des effets secondaires des GLP-1, semaine par semaine",
      description:
        "Chaque effet secondaire courant des GLP-1, la semaine où il apparaît habituellement, pourquoi il survient et ce qui aide vraiment. Avec citations issues des essais et des notices.",
    },
    it: {
      title: "La guida completa agli effetti collaterali dei GLP-1, settimana per settimana",
      h1: "La guida completa agli effetti collaterali dei GLP-1, settimana per settimana",
      description:
        "Ogni effetto collaterale comune dei GLP-1, la settimana in cui di solito compare, perché succede e cosa aiuta davvero. Con riferimenti ai dati degli studi e alle schede tecniche.",
    },
    es: {
      title: "La guía completa de efectos secundarios de los GLP-1, semana a semana",
      h1: "La guía completa de efectos secundarios de los GLP-1, semana a semana",
      description:
        "Cada efecto secundario habitual de los GLP-1, la semana en que suele aparecer, por qué ocurre y qué ayuda de verdad. Con referencias a los ensayos y las fichas técnicas.",
    },
    nl: {
      title: "De complete GLP-1-bijwerkingengids: week voor week",
      h1: "De complete GLP-1-bijwerkingengids: week voor week",
      description:
        "Elke veelvoorkomende GLP-1-bijwerking, de week waarin ze meestal opduikt, waarom ze gebeurt en wat echt helpt. Met verwijzingen naar studiegegevens en bijsluiters.",
    },
    pl: {
      title: "Kompletny przewodnik po działaniach niepożądanych GLP-1, tydzień po tygodniu",
      h1: "Kompletny przewodnik po działaniach niepożądanych GLP-1, tydzień po tygodniu",
      description:
        "Każde częste działanie niepożądane GLP-1, tydzień, w którym zwykle się pojawia, dlaczego do tego dochodzi i co naprawdę pomaga. Z odniesieniami do danych z badań i charakterystyk produktu.",
    },
    sv: {
      title: "Den kompletta GLP-1-biverkningsguiden, vecka för vecka",
      h1: "Den kompletta GLP-1-biverkningsguiden, vecka för vecka",
      description:
        "Varje vanlig GLP-1-biverkning, veckan då den oftast dyker upp, varför den uppstår och vad som faktiskt hjälper. Med hänvisningar till studiedata och produktresuméer.",
    },
  },
  "glp1-nutrition-guide": {
    de: {
      title: "Der vollständige GLP-1-Ernährungs-Leitfaden: Eiweiß, Muskeln und was auf den Teller kommt",
      h1: "Der vollständige GLP-1-Ernährungs-Leitfaden",
      description:
        "Eiweißziele, Muskelerhalt, Elektrolyte, Mikronährstoffe und Beispieltage. Der praktische Ernährungs­begleiter für das Leben mit GLP-1.",
    },
    fr: {
      title: "Le guide nutritionnel complet sous GLP-1 : protéines, muscle et que mettre dans l'assiette",
      h1: "Le guide nutritionnel complet sous GLP-1",
      description:
        "Apports en protéines, préservation musculaire, électrolytes, micronutriments et journées-types. Le compagnon alimentaire pratique pour vivre avec un GLP-1.",
    },
    it: {
      title: "La guida nutrizionale completa con i GLP-1: proteine, massa muscolare e cosa mettere nel piatto",
      h1: "La guida nutrizionale completa con i GLP-1",
      description:
        "Obiettivi proteici, preservazione muscolare, elettroliti, micronutrienti e giornate-tipo. Il compagno alimentare pratico per la vita con un GLP-1.",
    },
    es: {
      title: "La guía nutricional completa con GLP-1: proteína, músculo y qué poner en el plato",
      h1: "La guía nutricional completa con GLP-1",
      description:
        "Objetivos de proteína, preservación muscular, electrolitos, micronutrientes y días tipo. La compañera alimentaria práctica para la vida con un GLP-1.",
    },
    nl: {
      title: "De complete GLP-1-voedingsgids: eiwit, spieren en wat op het bord komt",
      h1: "De complete GLP-1-voedingsgids",
      description:
        "Eiwitdoelen, spierbehoud, elektrolyten, micronutriënten en voorbeelddagen. De praktische voedingsbegeleider voor het leven met een GLP-1.",
    },
    pl: {
      title: "Kompletny przewodnik żywieniowy GLP-1: białko, mięśnie i co kłaść na talerz",
      h1: "Kompletny przewodnik żywieniowy GLP-1",
      description:
        "Cele białkowe, ochrona mięśni, elektrolity, mikroskładniki i przykładowe dni. Praktyczny towarzysz żywieniowy w życiu z GLP-1.",
    },
    sv: {
      title: "Den kompletta GLP-1-näringsguiden: protein, muskel och vad som hamnar på tallriken",
      h1: "Den kompletta GLP-1-näringsguiden",
      description:
        "Proteinmål, muskelbevarande, elektrolyter, mikronäring och exempeldagar. Den praktiska matkompanjonen för livet på en GLP-1.",
    },
  },
  "mounjaro-vs-ozempic-vs-wegovy-vs-zepbound": {
    de: {
      title: "Mounjaro vs. Ozempic vs. Wegovy vs. Zepbound: ein ruhiger Vergleich",
      h1: "Mounjaro vs. Ozempic vs. Wegovy vs. Zepbound",
      description:
        "Die vier großen GLP-1-Medikamente im Vergleich: Wirkmechanismus, Wirksamkeit, Nebenwirkungen, Kosten. Was die Studien tatsächlich zeigten, Seite an Seite.",
    },
    fr: {
      title: "Mounjaro, Ozempic, Wegovy, Zepbound : une comparaison posée",
      h1: "Mounjaro, Ozempic, Wegovy, Zepbound",
      description:
        "Les quatre grandes molécules GLP-1 comparées sur le mécanisme, l'efficacité, les effets secondaires et le coût. Ce que les essais ont réellement montré, côte à côte.",
    },
    it: {
      title: "Mounjaro vs Ozempic vs Wegovy vs Zepbound: un confronto sobrio",
      h1: "Mounjaro vs Ozempic vs Wegovy vs Zepbound",
      description:
        "I quattro grandi farmaci GLP-1 a confronto su meccanismo, efficacia, effetti collaterali e costo. Cosa hanno davvero mostrato gli studi, fianco a fianco.",
    },
    es: {
      title: "Mounjaro vs. Ozempic vs. Wegovy vs. Zepbound: una comparación serena",
      h1: "Mounjaro vs. Ozempic vs. Wegovy vs. Zepbound",
      description:
        "Los cuatro grandes fármacos GLP-1 comparados en mecanismo, eficacia, efectos secundarios y coste. Lo que los ensayos mostraron realmente, lado a lado.",
    },
    nl: {
      title: "Mounjaro vs. Ozempic vs. Wegovy vs. Zepbound: een rustige vergelijking",
      h1: "Mounjaro vs. Ozempic vs. Wegovy vs. Zepbound",
      description:
        "De vier grote GLP-1-middelen vergeleken op werkingsmechanisme, effectiviteit, bijwerkingen en kosten. Wat de studies werkelijk lieten zien, naast elkaar.",
    },
    pl: {
      title: "Mounjaro vs Ozempic vs Wegovy vs Zepbound: spokojne porównanie",
      h1: "Mounjaro vs Ozempic vs Wegovy vs Zepbound",
      description:
        "Cztery duże leki GLP-1 porównane pod kątem mechanizmu, skuteczności, działań niepożądanych i kosztu. Co naprawdę pokazały badania, obok siebie.",
    },
    sv: {
      title: "Mounjaro mot Ozempic mot Wegovy mot Zepbound: en lugn jämförelse",
      h1: "Mounjaro mot Ozempic mot Wegovy mot Zepbound",
      description:
        "De fyra stora GLP-1-läkemedlen jämförda på verkningsmekanism, effekt, biverkningar och kostnad. Vad studierna faktiskt visade, sida vid sida.",
    },
  },
  "best-protein-powders-for-glp1": {
    de: {
      title: "Die besten Eiweißpulver für GLP-1-Anwender",
      h1: "Die besten Eiweißpulver für GLP-1-Anwender",
      description:
        "Eiweißpulver, die ein Ziel von 30 g pro Portion treffen, auf einem langsamer entleerenden Magen gut sitzen und ohne künstliche Süßstoffe auskommen, die Leser nicht möchten.",
    },
    fr: {
      title: "Les meilleures protéines en poudre pour les utilisateurs de GLP-1",
      h1: "Les meilleures protéines en poudre pour les utilisateurs de GLP-1",
      description:
        "Les protéines en poudre qui atteignent un objectif de 30 g par dose, passent bien sur un estomac à vidange ralentie, et qui se passent des édulcorants artificiels que beaucoup de lecteurs veulent éviter.",
    },
    it: {
      title: "Le migliori proteine in polvere per chi usa i GLP-1",
      h1: "Le migliori proteine in polvere per chi usa i GLP-1",
      description:
        "Le proteine in polvere che centrano l'obiettivo di 30 g per misurino, si tollerano bene su uno stomaco a svuotamento lento e fanno a meno dei dolcificanti artificiali che molti lettori non vogliono.",
    },
    es: {
      title: "Las mejores proteínas en polvo para usuarios de GLP-1",
      h1: "Las mejores proteínas en polvo para usuarios de GLP-1",
      description:
        "Las proteínas en polvo que alcanzan los 30 g por cacito, se asientan bien en un estómago de vaciado lento y prescinden de los edulcorantes artificiales que muchos lectores no quieren.",
    },
    nl: {
      title: "De beste eiwitpoeders voor GLP-1-gebruikers",
      h1: "De beste eiwitpoeders voor GLP-1-gebruikers",
      description:
        "De eiwitpoeders die 30 g per schepje halen, goed vallen op een langzamer ledigende maag, en zonder kunstmatige zoetstoffen werken die lezers niet willen.",
    },
    pl: {
      title: "Najlepsze odżywki białkowe dla osób na GLP-1",
      h1: "Najlepsze odżywki białkowe dla osób na GLP-1",
      description:
        "Odżywki białkowe, które trafiają w cel 30 g na miarkę, dobrze leżą na wolniej opróżniającym się żołądku i obywają się bez sztucznych słodzików, których czytelnicy nie chcą.",
    },
    sv: {
      title: "Bästa proteinpulver för GLP-1-användare",
      h1: "Bästa proteinpulver för GLP-1-användare",
      description:
        "Proteinpulvren som når 30 g per skopa, sitter bra på en magsäck som tömmer sig långsammare och klarar sig utan de konstgjorda sötningsmedel många läsare vill undvika.",
    },
  },
  "best-electrolytes-for-glp1": {
    de: {
      title: "Die besten Elektrolyt-Produkte für GLP-1-Anwender",
      h1: "Die besten Elektrolyt-Produkte für GLP-1-Anwender",
      description:
        "Wenn der Appetit sinkt, sinkt die Elektrolyt­zufuhr mit. Hier steht, was den Kauf wert ist, was nicht und welche Mischungen den Magen ruhig lassen.",
    },
    fr: {
      title: "Les meilleurs produits d'électrolytes pour les utilisateurs de GLP-1",
      h1: "Les meilleurs produits d'électrolytes pour les utilisateurs de GLP-1",
      description:
        "Quand l'appétit baisse, l'apport en électrolytes baisse aussi. Voici ce qui mérite l'achat, ce qui ne le mérite pas, et les formules les plus douces pour l'estomac.",
    },
    it: {
      title: "I migliori prodotti di elettroliti per chi usa i GLP-1",
      h1: "I migliori prodotti di elettroliti per chi usa i GLP-1",
      description:
        "Quando l'appetito scende, scende anche l'apporto di elettroliti. Ecco cosa vale la pena comprare, cosa lasciare e quali formule restano sobrie sullo stomaco.",
    },
    es: {
      title: "Los mejores productos de electrolitos para usuarios de GLP-1",
      h1: "Los mejores productos de electrolitos para usuarios de GLP-1",
      description:
        "Cuando baja el apetito, baja el aporte de electrolitos. Aquí, qué merece la pena, qué dejar pasar y qué fórmulas son tranquilas para el estómago.",
    },
    nl: {
      title: "De beste elektrolytproducten voor GLP-1-gebruikers",
      h1: "De beste elektrolytproducten voor GLP-1-gebruikers",
      description:
        "Als de eetlust daalt, daalt ook de inname van elektrolyten. Hier wat de moeite waard is, wat niet, en welke formules rustig op de maag liggen.",
    },
    pl: {
      title: "Najlepsze produkty elektrolitowe dla osób na GLP-1",
      h1: "Najlepsze produkty elektrolitowe dla osób na GLP-1",
      description:
        "Gdy apetyt spada, spada też podaż elektrolitów. Tutaj: co warto kupić, co odpuścić i które formuły są łagodne dla żołądka.",
    },
    sv: {
      title: "Bästa elektrolytprodukter för GLP-1-användare",
      h1: "Bästa elektrolytprodukter för GLP-1-användare",
      description:
        "När aptiten sjunker sjunker också elektrolytintaget. Här är vad som är värt att köpa, vad du kan hoppa över och vilka formler som ligger lugnt på magen.",
    },
  },
  "why-does-ozempic-make-you-nauseous": {
    de: {
      title: "Warum macht Ozempic übel?",
      h1: "Warum macht Ozempic übel?",
      description:
        "Der Mechanismus der verzögerten Magen­entleerung hinter der Semaglutid-Übelkeit, wie lange sie typischerweise anhält, elf Dinge, die tatsächlich helfen, und der Punkt, an dem ein Anruf in der Praxis fällig ist.",
    },
    fr: {
      title: "Pourquoi l'Ozempic donne-t-il la nausée ?",
      h1: "Pourquoi l'Ozempic donne-t-il la nausée ?",
      description:
        "Le mécanisme de vidange gastrique ralentie derrière les nausées sous sémaglutide, leur durée habituelle, onze choses qui aident vraiment, et le moment où il faut appeler le médecin.",
    },
    it: {
      title: "Perché Ozempic dà nausea?",
      h1: "Perché Ozempic dà nausea?",
      description:
        "Il meccanismo dello svuotamento gastrico rallentato dietro la nausea da semaglutide, quanto dura di solito, undici cose che aiutano davvero e il punto in cui chiamare il medico.",
    },
    es: {
      title: "¿Por qué Ozempic da náuseas?",
      h1: "¿Por qué Ozempic da náuseas?",
      description:
        "El mecanismo de vaciado gástrico retardado tras la náusea de la semaglutida, cuánto suele durar, once cosas que ayudan de verdad y el punto en que toca llamar al médico.",
    },
    nl: {
      title: "Waarom maakt Ozempic misselijk?",
      h1: "Waarom maakt Ozempic misselijk?",
      description:
        "Het mechanisme van vertraagde maagontlediging achter de misselijkheid bij semaglutide, hoe lang het meestal duurt, elf dingen die echt helpen, en het punt waarop u uw arts belt.",
    },
    pl: {
      title: "Dlaczego Ozempic powoduje mdłości?",
      h1: "Dlaczego Ozempic powoduje mdłości?",
      description:
        "Mechanizm spowolnionego opróżniania żołądka za mdłościami po semaglutydzie, jak długo zwykle trwają, jedenaście rzeczy, które naprawdę pomagają, i moment, w którym trzeba zadzwonić do lekarza.",
    },
    sv: {
      title: "Varför ger Ozempic illamående?",
      h1: "Varför ger Ozempic illamående?",
      description:
        "Mekanismen med fördröjd magsäckstömning bakom illamåendet på semaglutid, hur länge det brukar vara, elva saker som faktiskt hjälper och punkten där du ringer läkaren.",
    },
  },
  "how-much-protein-on-a-glp1": {
    de: {
      title: "Wie viel Eiweiß brauchen Sie unter GLP-1 wirklich?",
      h1: "Wie viel Eiweiß brauchen Sie unter GLP-1 wirklich?",
      description:
        "Der Zielbereich (1,2-1,6 g pro kg Körpergewicht), warum er für den Muskel­erhalt zählt und wie er sich bei kleinem Appetit erreichen lässt, mit konkreten Beispielen.",
    },
    fr: {
      title: "Quel apport en protéines vous faut-il vraiment sous GLP-1 ?",
      h1: "Quel apport en protéines vous faut-il vraiment sous GLP-1 ?",
      description:
        "La fourchette cible (1,2 à 1,6 g par kg de poids), pourquoi elle compte pour préserver le muscle, et comment l'atteindre avec un appétit réduit, avec des exemples concrets.",
    },
    it: {
      title: "Di quante proteine ha davvero bisogno con un GLP-1?",
      h1: "Di quante proteine ha davvero bisogno con un GLP-1?",
      description:
        "L'intervallo obiettivo (1,2-1,6 g per kg di peso corporeo), perché conta per la preservazione muscolare e come raggiungerlo con l'appetito ridotto, con esempi concreti.",
    },
    es: {
      title: "¿Cuánta proteína necesita realmente con un GLP-1?",
      h1: "¿Cuánta proteína necesita realmente con un GLP-1?",
      description:
        "El rango objetivo (1,2-1,6 g por kg de peso corporal), por qué importa para preservar músculo y cómo alcanzarlo con un apetito reducido, con ejemplos resueltos.",
    },
    nl: {
      title: "Hoeveel eiwit heeft u eigenlijk nodig op een GLP-1?",
      h1: "Hoeveel eiwit heeft u eigenlijk nodig op een GLP-1?",
      description:
        "Het richtbereik (1,2-1,6 g per kg lichaamsgewicht), waarom het telt voor spierbehoud, en hoe u het haalt met een kleinere eetlust, met uitgewerkte voorbeelden.",
    },
    pl: {
      title: "Ile białka faktycznie potrzebujesz na GLP-1?",
      h1: "Ile białka faktycznie potrzebujesz na GLP-1?",
      description:
        "Zakres docelowy (1,2-1,6 g na kg masy ciała), dlaczego ma znaczenie dla ochrony mięśni i jak go osiągnąć przy mniejszym apetycie, z policzonymi przykładami.",
    },
    sv: {
      title: "Hur mycket protein behöver du egentligen på en GLP-1?",
      h1: "Hur mycket protein behöver du egentligen på en GLP-1?",
      description:
        "Målintervallet (1,2-1,6 g per kg kroppsvikt), varför det spelar roll för muskelbevarandet och hur du når det med mindre aptit, med uträknade exempel.",
    },
  },
  "12-questions-to-ask-your-doctor-before-glp1": {
    de: {
      title: "12 Fragen, die Sie vor dem GLP-1-Start mit Ihrem Arzt klären sollten",
      h1: "12 Fragen, die Sie vor dem GLP-1-Start mit Ihrem Arzt klären sollten",
      description:
        "Vorbereitung auf den ersten GLP-1-Termin: zwölf Fragen, die sich lohnen, warum jede zählt, und wie eine gute Antwort aussieht.",
    },
    fr: {
      title: "12 questions à poser à votre médecin avant de commencer un GLP-1",
      h1: "12 questions à poser à votre médecin avant de commencer un GLP-1",
      description:
        "Préparer votre première consultation GLP-1 : douze questions qui valent la peine, pourquoi chacune compte, et à quoi ressemble une bonne réponse.",
    },
    it: {
      title: "12 domande da porre al medico prima di iniziare un GLP-1",
      h1: "12 domande da porre al medico prima di iniziare un GLP-1",
      description:
        "Per preparare la prima visita: dodici domande che vale la pena fare, perché ognuna conta e come si riconosce una buona risposta.",
    },
    es: {
      title: "12 preguntas para hacerle a su médico antes de empezar un GLP-1",
      h1: "12 preguntas para hacerle a su médico antes de empezar un GLP-1",
      description:
        "Para preparar su primera consulta de GLP-1: doce preguntas que merecen plantearse, por qué importan y cómo se reconoce una buena respuesta.",
    },
    nl: {
      title: "12 vragen om aan uw arts te stellen voor u met een GLP-1 begint",
      h1: "12 vragen om aan uw arts te stellen voor u met een GLP-1 begint",
      description:
        "Voorbereiding voor uw eerste GLP-1-consult: twaalf vragen die de moeite waard zijn, waarom elke ertoe doet, en hoe een goed antwoord eruitziet.",
    },
    pl: {
      title: "12 pytań do lekarza przed rozpoczęciem leczenia GLP-1",
      h1: "12 pytań do lekarza przed rozpoczęciem leczenia GLP-1",
      description:
        "Przygotowanie do pierwszej wizyty: dwanaście pytań, które warto zadać, dlaczego każde ma znaczenie i jak wygląda dobra odpowiedź.",
    },
    sv: {
      title: "12 frågor att ställa till din läkare innan du börjar med en GLP-1",
      h1: "12 frågor att ställa till din läkare innan du börjar med en GLP-1",
      description:
        "Förberedelser inför ditt första GLP-1-besök: tolv frågor som är värda att ställa, varför var och en spelar roll och hur ett bra svar låter.",
    },
  },
};

/**
 * Resolve a per-locale title/h1/description with English fallback. Always
 * returns a non-undefined title/description; the page calls this once per
 * post + locale and consumes the result.
 */
export function localizePost(
  slug: string,
  locale: Locale,
  fallback: { title: string; h1: string; description: string }
): { title: string; h1: string; description: string } {
  const tr = POST_I18N[slug]?.[locale];
  if (!tr) return fallback;
  return {
    title: tr.title ?? fallback.title,
    h1: tr.h1 ?? fallback.h1,
    description: tr.description ?? fallback.description,
  };
}
