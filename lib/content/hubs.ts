import type { Locale } from "@/i18n/routing";

export type HubI18n = {
  name: string;
  shortName: string;
  oneLiner: string;
  thesis: string;
};

export type Hub = HubI18n & {
  slug: string;
  i18n?: Partial<Record<Locale, HubI18n>>;
};

export const hubs: Hub[] = [
  {
    slug: "glp1-101",
    name: "GLP-1 101",
    shortName: "GLP-1 101",
    oneLiner:
      "Beginner education. What GLP-1s are, how they work, who they are for, and which drugs are on the market, in plain language.",
    thesis:
      "You heard about GLP-1s last week. You got a prescription yesterday. You are weighing whether to ask your doctor next month. This hub builds the foundation calmly, without the hype and without the lecture.",
    i18n: {
      de: {
        name: "GLP-1-Grundlagen",
        shortName: "GLP-1-Grundlagen",
        oneLiner:
          "Einstieg verständlich erklärt. Was GLP-1 sind, wie sie wirken, für wen sie gedacht sind und welche Wirkstoffe es gibt.",
        thesis:
          "Sie haben letzte Woche zum ersten Mal von GLP-1 gehört. Sie haben gestern ein Rezept bekommen. Sie überlegen, das Thema bei der nächsten Sprechstunde anzusprechen. Hier wird die Grundlage ruhig gelegt, ohne Hype und ohne Belehrung.",
      },
      fr: {
        name: "GLP-1, les bases",
        shortName: "GLP-1, les bases",
        oneLiner:
          "Pour commencer. Ce que sont les GLP-1, comment ils agissent, à qui ils s'adressent et le panorama des molécules disponibles, en langage clair.",
        thesis:
          "Vous avez entendu parler des GLP-1 la semaine dernière. Vous avez reçu une ordonnance hier. Vous hésitez à en parler à votre médecin le mois prochain. Cette rubrique pose les bases avec calme, sans excès ni leçons.",
      },
      it: {
        name: "GLP-1, le basi",
        shortName: "GLP-1, le basi",
        oneLiner:
          "Per iniziare. Che cosa sono i GLP-1, come funzionano, a chi sono rivolti e il panorama dei farmaci disponibili, in parole semplici.",
        thesis:
          "Ne ha sentito parlare la settimana scorsa. Ha ricevuto una prescrizione ieri. Sta valutando se chiedere al suo medico il mese prossimo. Qui costruiamo le basi con calma, senza enfasi e senza lezioni.",
      },
      es: {
        name: "GLP-1, fundamentos",
        shortName: "GLP-1, fundamentos",
        oneLiner:
          "Para empezar. Qué son los GLP-1, cómo actúan, a quién van dirigidos y el panorama de fármacos disponibles, en lenguaje claro.",
        thesis:
          "Oyó hablar de los GLP-1 la semana pasada. Recibió una receta ayer. Está pensando si preguntarle a su médico el mes que viene. Aquí construimos los cimientos con calma, sin sensacionalismo y sin sermones.",
      },
      nl: {
        name: "GLP-1, de basis",
        shortName: "GLP-1, de basis",
        oneLiner:
          "Om te beginnen. Wat GLP-1's zijn, hoe ze werken, voor wie ze bedoeld zijn en het landschap van de beschikbare middelen, in heldere taal.",
        thesis:
          "U hoorde vorige week voor het eerst van GLP-1's. U kreeg gisteren een recept. U overweegt het volgende maand bij uw arts ter sprake te brengen. Hier leggen we het fundament rustig, zonder hype en zonder belerende toon.",
      },
      pl: {
        name: "GLP-1, podstawy",
        shortName: "GLP-1, podstawy",
        oneLiner:
          "Edukacja od podstaw. Czym są GLP-1, jak działają, dla kogo są przeznaczone i jak wygląda krajobraz dostępnych leków, prostym językiem.",
        thesis:
          "Usłyszała Pani o GLP-1 w ubiegłym tygodniu. Wczoraj dostała Pani receptę. Zastanawia się Pani, czy zapytać o to lekarza w przyszłym miesiącu. Tutaj spokojnie budujemy podstawę, bez sensacji i bez moralizowania.",
      },
      sv: {
        name: "GLP-1, grunderna",
        shortName: "GLP-1, grunderna",
        oneLiner:
          "För nybörjaren. Vad GLP-1 är, hur de verkar, vilka de är till för och kartan över de tillgängliga läkemedlen, på vanlig svenska.",
        thesis:
          "Du hörde talas om GLP-1 förra veckan. Du fick ett recept i går. Du funderar på att ta upp det med din läkare nästa månad. Här bygger vi grunden lugnt, utan hype och utan pekpinnar.",
      },
    },
  },
  {
    slug: "side-effects-and-management",
    name: "Side effects & management",
    shortName: "Side effects",
    oneLiner:
      "Nausea, constipation, sulfur burps, hair thinning. Why they happen and what actually helps.",
    thesis:
      "Side effects are the number-one reason people quit GLP-1s in the first ninety days. Every side effect is its own search query, and every one deserves a calm, practical answer with real sources.",
    i18n: {
      de: {
        name: "Nebenwirkungen und Umgang",
        shortName: "Nebenwirkungen",
        oneLiner:
          "Übelkeit, Verstopfung, Schwefel-Aufstoßen, dünner werdendes Haar. Warum es passiert und was tatsächlich hilft.",
        thesis:
          "Nebenwirkungen sind der Grund Nummer eins, warum GLP-1 in den ersten neunzig Tagen abgesetzt werden. Jede Nebenwirkung ist eine eigene Suchanfrage, und jede verdient eine ruhige, praktische Antwort mit Quellen.",
      },
      fr: {
        name: "Effets secondaires et gestion",
        shortName: "Effets secondaires",
        oneLiner:
          "Nausées, constipation, éructations sulfureuses, perte de cheveux. Pourquoi ça arrive et ce qui aide vraiment.",
        thesis:
          "Les effets secondaires sont la première cause d'arrêt des GLP-1 dans les quatre-vingt-dix premiers jours. Chacun mérite une réponse posée, pratique et sourcée, pas une page de mise en garde générique.",
      },
      it: {
        name: "Effetti collaterali e gestione",
        shortName: "Effetti collaterali",
        oneLiner:
          "Nausea, stitichezza, eruttazioni sulfuree, capelli più sottili. Perché succede e cosa aiuta davvero.",
        thesis:
          "Gli effetti collaterali sono il motivo numero uno per cui le persone interrompono i GLP-1 nei primi novanta giorni. Ogni effetto è una ricerca a sé e merita una risposta sobria, pratica e con fonti.",
      },
      es: {
        name: "Efectos secundarios y manejo",
        shortName: "Efectos secundarios",
        oneLiner:
          "Náuseas, estreñimiento, eructos sulfúreos, caída de cabello. Por qué ocurre y qué ayuda de verdad.",
        thesis:
          "Los efectos secundarios son la razón número uno por la que se abandonan los GLP-1 en los primeros noventa días. Cada uno es su propia búsqueda y cada uno merece una respuesta serena, práctica y con fuentes.",
      },
      nl: {
        name: "Bijwerkingen en aanpak",
        shortName: "Bijwerkingen",
        oneLiner:
          "Misselijkheid, verstopping, zwavelboeren, dunner wordend haar. Waarom het gebeurt en wat echt helpt.",
        thesis:
          "Bijwerkingen zijn reden nummer één waarom mensen in de eerste negentig dagen met GLP-1's stoppen. Elke bijwerking is een eigen zoekvraag en verdient een rustig, praktisch antwoord met bronnen.",
      },
      pl: {
        name: "Działania niepożądane i radzenie sobie",
        shortName: "Działania niepożądane",
        oneLiner:
          "Nudności, zaparcia, siarkowe odbijania, przerzedzanie włosów. Dlaczego się pojawiają i co naprawdę pomaga.",
        thesis:
          "Działania niepożądane są głównym powodem, dla którego ludzie odstawiają GLP-1 w pierwszych dziewięćdziesięciu dniach. Każde z nich to osobne zapytanie i każde zasługuje na spokojną, praktyczną odpowiedź ze źródłami.",
      },
      sv: {
        name: "Biverkningar och hantering",
        shortName: "Biverkningar",
        oneLiner:
          "Illamående, förstoppning, svavelrapningar, glesare hår. Varför det händer och vad som faktiskt hjälper.",
        thesis:
          "Biverkningar är den främsta orsaken till att människor slutar med GLP-1 under de första nittio dagarna. Varje biverkning är en egen sökfråga och förtjänar ett lugnt, praktiskt svar med källor.",
      },
    },
  },
  {
    slug: "food-nutrition-and-muscle",
    name: "Food, nutrition & muscle",
    shortName: "Food & muscle",
    oneLiner:
      "Appetite drops 60-80% on a GLP-1, so every bite has to count. Protein targets, muscle preservation, what to plate.",
    thesis:
      "The hardest part of a GLP-1 is not losing weight. It is losing it well. This hub is the practical food companion for anyone trying to protect muscle and hit nutrition targets on a shrunken appetite.",
    i18n: {
      de: {
        name: "Ernährung und Muskelerhalt",
        shortName: "Ernährung",
        oneLiner:
          "Der Appetit sinkt unter GLP-1 um 60–80 %. Jeder Bissen muss zählen. Eiweißziele, Muskelerhalt, was auf den Teller kommt.",
        thesis:
          "Das Schwierigste an GLP-1 ist nicht das Abnehmen. Es ist das gute Abnehmen. Dieser Bereich ist der praktische Ernährungs­begleiter für alle, die Muskeln schützen und Nährstoff­ziele bei kleinem Appetit erreichen wollen.",
      },
      fr: {
        name: "Alimentation, nutrition et muscle",
        shortName: "Alimentation",
        oneLiner:
          "L'appétit chute de 60 à 80 % sous GLP-1, alors chaque bouchée compte. Apports en protéines, préservation musculaire, ce qu'il faut mettre dans l'assiette.",
        thesis:
          "Le plus dur avec un GLP-1 n'est pas de perdre du poids. C'est de bien le perdre. Cette rubrique est le compagnon alimentaire pratique de toute personne qui veut protéger ses muscles et atteindre ses objectifs nutritionnels avec un appétit réduit.",
      },
      it: {
        name: "Alimentazione, nutrizione e muscolo",
        shortName: "Alimentazione",
        oneLiner:
          "Con i GLP-1 l'appetito cala del 60-80 %, quindi ogni boccone deve contare. Obiettivi proteici, preservazione muscolare, cosa mettere nel piatto.",
        thesis:
          "La parte più difficile dei GLP-1 non è perdere peso. È perderlo bene. Questa è la compagna pratica per chi vuole proteggere la massa muscolare e raggiungere gli obiettivi nutrizionali con un appetito ridotto.",
      },
      es: {
        name: "Alimentación, nutrición y músculo",
        shortName: "Alimentación",
        oneLiner:
          "Con un GLP-1 el apetito baja un 60-80 %, así que cada bocado cuenta. Objetivos de proteína, preservación muscular y qué poner en el plato.",
        thesis:
          "Lo más difícil de un GLP-1 no es perder peso. Es perderlo bien. Esta sección es la compañera práctica para quien quiere proteger su músculo y cumplir objetivos nutricionales con un apetito reducido.",
      },
      nl: {
        name: "Voeding en spierbehoud",
        shortName: "Voeding",
        oneLiner:
          "Met een GLP-1 daalt de eetlust 60-80 %, dus elke hap moet kloppen. Eiwitdoelen, spierbehoud, wat op het bord komt.",
        thesis:
          "Het lastigste van een GLP-1 is niet afvallen. Het is goed afvallen. Deze rubriek is de praktische voedingsgids voor iedereen die spieren wil beschermen en voedingsdoelen wil halen met een kleinere eetlust.",
      },
      pl: {
        name: "Odżywianie i mięśnie",
        shortName: "Odżywianie",
        oneLiner:
          "Apetyt spada na GLP-1 o 60-80 %, więc każdy kęs musi się liczyć. Cele białkowe, ochrona mięśni, co kłaść na talerz.",
        thesis:
          "Najtrudniejszą częścią GLP-1 nie jest chudnięcie. Jest dobre chudnięcie. To praktyczny przewodnik żywieniowy dla każdego, kto chce chronić mięśnie i trafiać w cele żywieniowe przy mniejszym apetycie.",
      },
      sv: {
        name: "Mat, näring och muskel",
        shortName: "Mat och muskel",
        oneLiner:
          "Aptiten sjunker 60-80 % på en GLP-1, så varje tugga måste räknas. Proteinmål, muskelbevarande, vad som hamnar på tallriken.",
        thesis:
          "Det svåraste med en GLP-1 är inte att gå ner i vikt. Det är att gå ner väl. Det här är den praktiska matkompanjonen för dig som vill skydda musklerna och nå näringsmålen med mindre aptit.",
      },
    },
  },
  {
    slug: "lifestyle-on-glp1",
    name: "Lifestyle on GLP-1",
    shortName: "Lifestyle",
    oneLiner:
      "Alcohol hits differently. Exercise feels different. Travel needs planning. Social life gets a little weird.",
    thesis:
      "Beyond food and side effects, life shifts on a GLP-1. This hub is the lived-experience hub: alcohol, exercise, travel, dating, social events, and the identity shift of losing food noise.",
    i18n: {
      de: {
        name: "Alltag mit GLP-1",
        shortName: "Alltag",
        oneLiner:
          "Alkohol wirkt anders. Sport fühlt sich anders an. Reisen will geplant sein. Das gesellschaftliche Leben wird etwas seltsamer.",
        thesis:
          "Jenseits von Ernährung und Nebenwirkungen verändert sich das Leben unter GLP-1. Dieser Bereich ist der gelebte Alltag: Alkohol, Sport, Reisen, Verabredungen, gesellschaftliche Anlässe, und die Identitäts­verschiebung, wenn das ständige Essens­rauschen verstummt.",
      },
      fr: {
        name: "Mode de vie sous GLP-1",
        shortName: "Mode de vie",
        oneLiner:
          "L'alcool frappe différemment. Le sport se ressent différemment. Les voyages se préparent. La vie sociale devient un peu étrange.",
        thesis:
          "Au-delà de l'alimentation et des effets secondaires, la vie change sous GLP-1. Cette rubrique est celle du vécu : alcool, sport, voyages, sorties, repas en famille, et le déplacement identitaire qui suit la disparition du bruit alimentaire.",
      },
      it: {
        name: "Stile di vita con i GLP-1",
        shortName: "Stile di vita",
        oneLiner:
          "L'alcol colpisce in modo diverso. Lo sport si sente diverso. I viaggi vanno pianificati. La vita sociale si fa un po' strana.",
        thesis:
          "Oltre al cibo e agli effetti collaterali, la vita cambia con i GLP-1. Questa è la sezione del vissuto: alcol, sport, viaggi, appuntamenti, eventi sociali, e lo spostamento identitario che segue la scomparsa del rumore alimentare.",
      },
      es: {
        name: "Estilo de vida con GLP-1",
        shortName: "Estilo de vida",
        oneLiner:
          "El alcohol pega distinto. El ejercicio se siente distinto. Los viajes piden planificación. La vida social se vuelve un poco rara.",
        thesis:
          "Más allá de la comida y los efectos secundarios, la vida cambia con un GLP-1. Esta sección es la del día a día: alcohol, ejercicio, viajes, citas, eventos sociales, y el desplazamiento identitario que llega cuando se apaga el ruido de la comida.",
      },
      nl: {
        name: "Leven met een GLP-1",
        shortName: "Leefstijl",
        oneLiner:
          "Alcohol komt anders binnen. Sport voelt anders. Reizen vraagt planning. Het sociale leven wordt iets wonderlijker.",
        thesis:
          "Naast voeding en bijwerkingen verschuift het leven op een GLP-1. Deze rubriek gaat over geleefde ervaring: alcohol, sport, reizen, afspraakjes, sociale gelegenheden, en de identiteitsverschuiving die volgt als de voedselruis verdwijnt.",
      },
      pl: {
        name: "Życie z GLP-1",
        shortName: "Styl życia",
        oneLiner:
          "Alkohol działa inaczej. Sport czuje się inaczej. Podróże wymagają planowania. Życie towarzyskie staje się trochę dziwne.",
        thesis:
          "Poza jedzeniem i działaniami niepożądanymi życie z GLP-1 się przesuwa. To sekcja o doświadczeniu: alkohol, sport, podróże, randki, spotkania, i przesunięcie tożsamościowe, które przychodzi, gdy gaśnie szum jedzenia.",
      },
      sv: {
        name: "Livet på en GLP-1",
        shortName: "Livet",
        oneLiner:
          "Alkohol slår annorlunda. Träning känns annorlunda. Resor kräver planering. Det sociala livet blir lite märkligt.",
        thesis:
          "Bortom mat och biverkningar förskjuts livet på en GLP-1. Det här är den levda erfarenheten: alkohol, träning, resor, dejter, sociala tillställningar, och identitetsförskjutningen som kommer när matbruset tystnar.",
      },
    },
  },
  {
    slug: "plateaus-and-long-term",
    name: "Plateaus & long-term",
    shortName: "Long-term",
    oneLiner:
      "Plateaus, maintenance dosing, coming off, regain. The year-two questions nobody answers well yet.",
    thesis:
      "Year one is the honeymoon. Year two is where the hard questions live: plateaus, dose changes, maintenance, coming off, regain. This hub is the long-term companion most readers have not found anywhere else.",
    i18n: {
      de: {
        name: "Plateaus und Langzeit",
        shortName: "Langfristig",
        oneLiner:
          "Plateaus, Erhaltungs­dosis, Absetzen, Gewichts­zunahme. Die Fragen aus dem zweiten Jahr, die anderswo niemand gut beantwortet.",
        thesis:
          "Das erste Jahr ist die Honeymoon-Phase. Im zweiten Jahr leben die schweren Fragen: Plateaus, Dosis­änderungen, Erhaltung, Absetzen, Gewichts­zunahme. Dieser Bereich ist der Langzeit­begleiter, den die meisten Leser anderswo nicht finden.",
      },
      fr: {
        name: "Paliers et long terme",
        shortName: "Long terme",
        oneLiner:
          "Paliers, dose d'entretien, arrêt, reprise de poids. Les questions de la deuxième année auxquelles personne ne répond encore bien.",
        thesis:
          "La première année est la lune de miel. La deuxième est celle des questions difficiles : paliers, ajustements de dose, dose d'entretien, arrêt, reprise de poids. Cette rubrique est le compagnon de long terme que la plupart des lecteurs n'ont trouvé nulle part ailleurs.",
      },
      it: {
        name: "Plateau e lungo termine",
        shortName: "Lungo termine",
        oneLiner:
          "Plateau, dose di mantenimento, sospensione, riacquisto. Le domande del secondo anno a cui nessuno risponde ancora bene.",
        thesis:
          "Il primo anno è la luna di miele. Il secondo è dove vivono le domande difficili: plateau, modifiche di dose, mantenimento, sospensione, riacquisto. Questa è la compagna di lungo termine che la maggior parte dei lettori non ha trovato altrove.",
      },
      es: {
        name: "Mesetas y largo plazo",
        shortName: "Largo plazo",
        oneLiner:
          "Mesetas, dosis de mantenimiento, dejarlo, recuperar peso. Las preguntas del segundo año que nadie responde aún bien.",
        thesis:
          "El primer año es la luna de miel. El segundo es donde viven las preguntas difíciles: mesetas, cambios de dosis, mantenimiento, dejarlo, recuperar peso. Esta sección es el acompañante a largo plazo que la mayoría de los lectores no encontró en otro lugar.",
      },
      nl: {
        name: "Plateaus en lange termijn",
        shortName: "Lange termijn",
        oneLiner:
          "Plateaus, onderhoudsdosering, stoppen, teruggewinnen. De vragen van jaar twee waarop nog niemand goed antwoord geeft.",
        thesis:
          "Jaar één is de huwelijksreis. In jaar twee leven de moeilijke vragen: plateaus, dosisaanpassingen, onderhoud, stoppen, teruggewinnen. Deze rubriek is de langetermijnbegeleider die de meeste lezers nergens anders gevonden hebben.",
      },
      pl: {
        name: "Plateau i długi termin",
        shortName: "Długi termin",
        oneLiner:
          "Plateau, dawka podtrzymująca, odstawienie, ponowny przyrost. Pytania drugiego roku, na które nikt jeszcze dobrze nie odpowiada.",
        thesis:
          "Pierwszy rok to miesiąc miodowy. W drugim mieszkają trudne pytania: plateau, zmiany dawki, podtrzymanie, odstawienie, ponowny przyrost. To długoterminowy towarzysz, którego większość czytelników nie znalazła nigdzie indziej.",
      },
      sv: {
        name: "Platåer och långsiktigt",
        shortName: "Långsiktigt",
        oneLiner:
          "Platåer, underhållsdos, att sluta, viktåtergång. Andra årets frågor som ingen ännu svarar bra på.",
        thesis:
          "Första året är smekmånaden. Andra året bor de svåra frågorna: platåer, dosjusteringar, underhåll, att sluta, viktåtergång. Det här är den långsiktiga följeslagaren de flesta läsare inte hittat någon annanstans.",
      },
    },
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}

/**
 * Resolve hub display strings for a given locale, with English fallback.
 * Use this everywhere a hub.name / hub.oneLiner / hub.thesis is rendered
 * inside a localized page; pages that take `locale` from `[locale]` params
 * should call `localizeHub(hub, locale)` once and consume the returned
 * fields rather than reaching into `hub.i18n` directly.
 */
export function localizeHub(hub: Hub, locale: Locale): HubI18n {
  const tr = hub.i18n?.[locale];
  if (!tr) {
    return {
      name: hub.name,
      shortName: hub.shortName,
      oneLiner: hub.oneLiner,
      thesis: hub.thesis,
    };
  }
  return tr;
}
