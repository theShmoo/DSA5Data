export const NamePrefix = [
  {
    p: 0.05,
    plural: false,
    name: ["Zum  goldenen", "Zur goldenen"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  almadinenen", "Zur almadinenen"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  tanzenden", "Zur tanzenden"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  lachenden", "Zur lachenden"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  betrunkenen", "Zur betrunkenen"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  fröhlichen", "Zur fröhlichen"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  glücklichen", "Zur glücklichen"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  springenden", "Zur springenden"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  schwarzen", "Zur schwarzen"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  weißen", "Zur weißen"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  tänzelnden", "Zur tänzelnden"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Zum  einsamen", "Zur einsamen"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    plural: false,
    name: ["Des Kaisers", "Des Kaisers"],
    reference: "moniker1"
  },
  {
    p: 0.05,
    name: ["Die zwei", "Die zwei"],
    plural: true,
    reference: "moniker1"
  },
  {
    p: 0.05,
    name: ["Die drei", "Die drei"],
    plural: true,
    reference: "moniker1"
  },
  {
    p: 0.05,
    name: ["Die vier", "Die vier"],
    plural: true,
    reference: "moniker1"
  },
  {
    p: 0.1,
    plural: false,
    name: ["", ""],
    reference: "moniker2"
  },
  {
    p: 0.1,
    plural: false,
    name: ["", ""],
    reference: "moniker3",
  }
];

export const Moniker = {
  moniker1: [
    {p: 0.05, name: ["Einhorn", "Einhörner"], male: true},
    {p: 0.05, name: ["Stier", "Stiere"], male: true},
    {p: 0.05, name: ["Hirsch", "Hirsche"], male: true},
    {p: 0.05, name: ["König", "Könige"], male: true},
    {p: 0.05, name: ["Prinzessin", "Prinzessinnen"], male: false},
    {p: 0.05, name: ["Keiler", "Keiler"], male: true},
    {p: 0.05, name: ["Adler", "Adler"], male: true},
    {p: 0.05, name: ["Krone", "Kronen"], male: false},
    {p: 0.05, name: ["Henker", "Henker"], male: true},
    {p: 0.05, name: ["Reisenden", "Reisenden"], male: true},
    {p: 0.05, name: ["Qualle", "Quellen"], male: true},
    {p: 0.05, name: ["Delphin", "Dephine"], male: true},
    {p: 0.05, name: ["Karpfen", "Karpfen"], male: true},
    {p: 0.05, name: ["Pony", "Ponys"], male: true},
    {p: 0.05, name: ["Stiefel", "Stiefel"], male: true},
    {p: 0.05, name: ["Vagabunden", "Vagabunden"], male: true},
    {p: 0.05, name: ["Stute", "Stuten"], male: false},
    {p: 0.05, name: ["Eimer", "Eimer"], male: true},
    {p: 0.05, name: ["Pilger", "Pilger"], male: true},
    {p: 0.05, name: ["Trommel", "Trommeln"], male: false},
  ],
moniker2: [
    {p: 0.17, name: ["Berghof", ""]},
    {p: 0.17, name: ["Waldhof", ""]},
    {p: 0.17, name: ["Lindenhof", ""]},
    {p: 0.17, name: ["Eichenhof", ""]},
    {p: 0.17, name: ["Kaiserhof", ""]},
    {p: 0.15, name: ["Reichshof", ""]}
  ],
  moniker3: [
    {p: 0.17, name: ["Valpostube", ""]},
    {p: 0.17, name: ["Bei Alrik", ""]},
    {p: 0.17, name: ["Ums Eck", ""]},
    {p: 0.17, name: ["Bierschwemme", ""]},
    {p: 0.17, name: ["Travias Einkehr", ""]},
    {p: 0.15, name: ["Zum Anker", ""]},
  ]
}

export const TavernTypes = {
  types: [
    {p: 0.15 , name: "Zelt"},
    {p: 0.2 , name: "Holzhaus"},
    {p: 0.3 , name: "Fachwerkhaus"},
    {p: 0.2 , name: "Steinhaus"},
    {p: 0.05 , name: "Turm"},
    {p: 0.1 , name: "Kellergewölbe"},
  ],
  modifications: [
    {p: -0.35, name: "Landstraße"},
    {p: 0, name: "Reichsstraße"},
    {p: 0.1, name: "Dorf"},
    {p: 0.2, name: "Stadt"},
  ]
};

export const TavernQS = [
  {p: 0.15, qs: 1, name: "jämmerliche Bruchbude"},
  {p: 0.15, qs: 2, name: "dreckige Spelunke"},
  {p: 0.3, qs: 3, name: "einfache Herberge"},
  {p: 0.25, qs: 4, name: "gutbürgerliches Gasthaus"},
  {p: 0.1, qs: 5, name: "exquisites Hotel"},
  {p: 0.05, qs: 6, name: "luxuriöse Unterkunft"},
];

export const TavernPrices = [
  {p: 0.1, qs: -2},
  {p: 0.2, qs: -1},
  {p: 0.4, qs: 0},
  {p: 0.2, qs: 1},
  {p: 0.1, qs: 2},
];

export const TavernSeats = [
  {p: 0.17, seats: {mod: 3, d: {type: 6, count: 1}}},
  {p: 0.17, seats: {mod: 9, d: {type: 6, count: 1}}},
  {p: 0.17, seats: {mod: 15, d: {type: 6, count: 1}}},
  {p: 0.17, seats: {mod: 21, d: {type: 6, count: 1}}},
  {p: 0.17, seats: {mod: 26, d: {type: 6, count: 2}}},
  {p: 0.15, seats: {mod: 37, d: {type: 6, count: 2}}},
];

export const TavernBeds = [
  {p: 0.17, beds: {mod: 0, d: {type: 0, count: 0}, description: "keine Zimmer (Der Wirt bietet gegen Bezahlung sein Zimmer an.)"}},
  {p: 0.17, beds: {mod: 0, d: {type: 0, count: 1}}},
  {p: 0.17, beds: {mod: 3, d: {type: 3, count: 1}}},
  {p: 0.17, beds: {mod: 6, d: {type: 3, count: 1}}},
  {p: 0.17, beds: {mod: 9, d: {type: 6, count: 1}}},
  {p: 0.15, beds: {mod: 15, d: {type: 6, count: 1}}},
];

export const TavernSpecial = [
  {p: 0.05, name: "hauseigene Brauerei"},
  {p: 0.05, name: "Rattenplage"},
  {p: 0.05, name: "Spielhölle im Hinterzimmer"},
  {p: 0.05, name: "nur vegetarische Kost"},
  {p: 0.05, name: "fungiert auch als Bordell"},
  {p: 0.05, name: "Schmugglerversteck"},
  {p: 0.05, name: "Räuberhöhle"},
  {p: 0.05, name: "Schrein"},
  {p: 0.05, name: "Sammelsurium (ausgestopfte Tiere, bemalte Teller, Heiligenfiguren, Waffen, Rüstungen, etc.)"},
  {p: 0.05, name: "Aushang mit Steckbriefen"},
  {p: 0.05, name: "auch Mobiliar für Zwerge vorhanden"},
  {p: 0.05, name: "kein Alkoholausschank"},
  {p: 0.05, name: "ungewöhnlicher Geruch (Lavendel, Rosenwasser)"},
  {p: 0.05, name: "Wechselstation für Botenreiter"},
  {p: 0.05, name: "ungewöhnlich schmutzig"},
  {p: 0.05, name: "großes Spinett oder eine Standharfe"},
  {p: 0.05, name: "Bühne"},
  {p: 0.05, name: "Wirtskatze reibt sich an Heldenbeinen oder springt ihnen unerwartet ins Genick"},
  {p: 0.05, name: "exotische Küche"},
  {p: 0.05, name: "Wirt ist Serienmörder und/oder Kannibale"},
];

export const Shrine = [
  {p: 0.25, name: "Travia"},
  {p: 0.2, name: "Rahja"},
  {p: 0.15, name: "Peraine"},
  {p: 0.15, name: "Aves"},
  {p: 0.15, name: "Lokalheiliger"},
  {p: 0.1, name: "andere Gotthe"},
];

export const GuestsNum = {
  guests: [
  {p: 0.1, name: "leer (abgesehen vom Wirt ist niemand da)"},
  {p: 0.15, name: "schwach besucht (nur einige Stammgäste)"},
  {p: 0.25, name: "mittelmäßig besucht (einige Tische sind leer)"},
  {p: 0.25, name: "stark besucht (Es gibt noch freie Plätze, aber einen freien Tisch zu finden wird schwierig.)"},
  {p: 0.15, name: "voll (Es ist richtig was los. Einen freien Platz zu finden wird schwierig.)"},
  {p: 0.1, name: "überfüllt (Es ist so voll, dass viele Gäste stehen müssen.)"},
  ],
  modifications: [
    {p: -0.15, name: "morgens"},
    {p: -0.25, name: "vormittags" },
    {p: 0.2, name: "mittags" },
    {p: 0, name: "nachmittags" },
    {p: 0.2, name: "abends" },
    {p: -0.35, name: "nachts" },
  ]
};

export const GuestQS = [
  {p: 0.1, qs: -2 },
  {p: 0.2, qs: -1 },
  {p: 0.4, qs: 0 },
  {p: 0.2, qs: 1 },
  {p: 0.1, qs: 2 }
];

export const GuestQSExamples = {
  city: [
    "Lumpenpack: Bettler, Halsabschneider, Straßendirnen, Zuhälter",
    "Gesindel: Tagelöhner, Schmuggler, Söldner",
    "einfaches Volk: Handwerksgesellen, Bauern",
    "Bürger: Schreiber, Büttel, Krämer",
    "Oberschicht: Handwerksmeister, Magier, Adlige",
    "die feine Gesellschaft: Patrizier, Handelsherren, Adlige",
  ],
  land: [
    "Lumpenpack: Strauchdiebe, Wilderer, Landstreicher",
    "Gesindel: Tagelöhner, Leibeigene, reisende Krämer",
    "einfaches Volk: Knechte, Mägde, Handwerksgesellen",
    "Bürger: Freibauern, Handwerker",
    "Oberschicht: Vögte, Händler, Großbauern",
    "die feine Gesellschaft: Adlige",
  ]
};

export const GuestFamous = [
  {p: 0.05, name:"Geldwechsler"},
  {p: 0.05, name:"kartenspielende Altherrenrunde"},
  {p: 0.05, name:"ein Trupp grimmiger Söldner"},
  {p: 0.05, name:"mysteriöser, taubstummer Mann"},
  {p: 0.05, name:"Anwerberin eines Söldnerbanners"},
  {p: 0.05, name:"Zahnreißer"},
  {p: 0.05, name:"Klasse einer Praiostagsschule"},
  {p: 0.05, name:"Schreiber"},
  {p: 0.05, name:"reisende Schwertgesellin"},
  {p: 0.05, name:"Trupp der Stadtwache"},
  {p: 0.05, name:"exotische Tänzerin"},
  {p: 0.05, name:"Handwerkerstammtisch"},
  {p: 0.05, name:"Botenreiter"},
  {p: 0.05, name:"neunfingriger Gast"},
  {p: 0.05, name:"flüchtiger Räuberhauptmann"},
  {p: 0.05, name:"inkognito reisender Operntenor aus Vinsalt"},
  {p: 0.05, name:"hochrangige Praiosgeweihte mit Gefolge"},
  {p: 0.05, name:"zwergischer Edelsteinhändler"},
  {p: 0.05, name:"Auelfe auf Reisen"},
  {p: 0.05, name:"halborkischer Vogelhändler"},
];

export const Staff = [
  {p: 0.05, name: "Wirt ist gerade alleine in der Gaststube"},
  {p: 0.05, name: "ein Zwillingspärchen aus Thorwal"},
  {p: 0.05, name: "ein achtjähriger Moha, der sich als Sohn des Wirts bezeichnet"},
  {p: 0.05, name: "ein schlaksiger Schankknecht drängt den Gästen ständig seine Gedichte auf"},
  {p: 0.05, name: "eine ausgesprochen ungeschickte, pummelige Schankmaid"},
  {p: 0.05, name: "ein junger Schankknecht mit Hasenscharte und aufgesetztem Akzent"},
  {p: 0.05, name: "eine uralte, zahnlose Schankmaid"},
  {p: 0.05, name: "ein dürrer Schankknecht mit wirren Haaren, der nervös Nägel kaut"},
  {p: 0.05, name: "ein alter Schankknecht mit Spitzbart, de einen der Helden mit einer Berühmtheit verwechselt"},
  {p: 0.05, name: "eine eigentlich freundliche Schankmaid mit finsterem Blick"},
  {p: 0.05, name: "ein junges Pärchen in einer Beziehungskrise"},
  {p: 0.05, name: "Bruder und Schwester, beide über und über mit Amuletten behängt"},
  {p: 0.05, name: "ein gesichtstätowierter Hüne mit buschigem Schnauzbart"},
  {p: 0.05, name: "eine sehr leise sprechende, hochschwangere Schankmaid"},
  {p: 0.05, name: "eine kräftige Schankmaid mit Kopftuch, die ein Haumesser am Gürtel trägt"},
  {p: 0.05, name: "ein gutmütiger Schankknecht mit blonden Locken, der einen Schrumpfkopf am Gürtel trägt"},
  {p: 0.05, name: "ein halbelfischer Schankknecht, der ständig schlechte Witze reißt"},
  {p: 0.05, name: "eine dralle Schankmaid, die Gäste zum Armdrücken auffordert"},
  {p: 0.05, name: "ein lispelnder Schankknecht, der unter der Hand gefälschte Reliquien verkauft"},
  {p: 0.05, name: "ein Geist, der tief in der Nacht die Tische zu putzen scheint"},
];

export const Chef = [
  {p: 0.05, name: "ein dicker, gemütlicher Wirt, der ständig das immer gleiche Glas putzt"},
  {p: 0.05, name: "ein älteres Wirtspaar, das ständig miteinander flirtet"},
  {p: 0.05, name: "ein jüngeres Wirtspaar, das sich ständig streitet"},
  {p: 0.05, name: "ein uralter, schwerhöriger Wirt mit Krückstock"},
  {p: 0.05, name: "zwei kräftig gebaute Schwestern mit lauten Stimmen"},
  {p: 0.05, name: "ein dürrer Wirt mit Fusselbart, der leise vor sich hin singt"},
  {p: 0.05, name: "eine schlanke, leicht reizbare Wirtin mit billiger Perücke"},
  {p: 0.05, name: "cholerischer Wirt und Ex-Preisringer"},
  {p: 0.05, name: "ein glatzköpfiger Wirt, der mit den Gästen gerne um die Getränke würfelt"},
  {p: 0.05, name: "ein bulliger Wirt mit heller Fistelstimme"},
  {p: 0.05, name: "ein glupschäugiger Wirt mit Rechenschwäche"},
  {p: 0.05, name: "eine streng traviagläubige Wirtin mit Missionierungsdrang"},
  {p: 0.05, name: "ein(e) dralle(r) Wirt(in) mit einer Vorliebe für fesche Helden"},
  {p: 0.05, name: "ein streng riechender Wirt mit dichtem Vollbart"},
  {p: 0.05, name: "eine alte Wirtin mit fröhlichem Lachen"},
  {p: 0.05, name: "eine einarmige Wirtin mit Augenklappe"},
  {p: 0.05, name: "die zwölfjährige Tochter des Wirts, die an ihrem Geburtstag Wirt spielen darf"},
  {p: 0.05, name: "ein Wirtspaar, er dick, sie dünn, die sich Flaschen etc. gegenseitig zuwerfen"},
  {p: 0.05, name: "ein kleinwüchsiger Wirt mit dicker, roter Knollennase"},
  {p: 0.05, name: "ein volltrunkener Wirt, der sich auf eine rostige Axt stützt"},
];

export const SpecialOccasion = [
  {p: 0.05, name: "ausgelassene Hochzeitsfeier"},
  {p: 0.05, name: "Leichenschmaus nach dem Begräbnis"},
  {p: 0.05, name: "perainegefälliger Pilgerzug"},
  {p: 0.05, name: "lokaler Feiertag"},
  {p: 0.05, name: "Gaukler oder Barden treten auf"},
  {p: 0.05, name: "Verkaufsveranstaltung eines reisenden Händlers"},
  {p: 0.05, name: "lautstarker Ehestreit"},
  {p: 0.05, name: "Boltanturnier"},
  {p: 0.05, name: "große Schlägerei"},
  {p: 0.05, name: "Brau- oder Weinfest"},
  {p: 0.05, name: "Schlachtfest"},
  {p: 0.05, name: "ein berühmter Held ist Gast im Haus"},
  {p: 0.05, name: "Messerwurfwettbewerb"},
  {p: 0.05, name: "Trinkspielwettbewerb"},
  {p: 0.05, name: "Auftritt eines Geschichtenerzählers"},
  {p: 0.05, name: "Neueröffnung"},
  {p: 0.05, name: "Anhängertreffen nach dem Sieg der hiesigen Immanmannschaft"},
  {p: 0.05, name: "Anhängertreffen nach der Niederlage der hiesigen Immanmannschaft"},
  {p: 0.05, name: "Missionsversuche eines radikalen Wanderpredigers"},
  {p: 0.05, name: "geschlossene Gesellschaft"},
]

export const ClosedCompany = [
  {p: 0.17, name: "Geburtstagsfeier"},
  {p: 0.17, name: "Zunftbesäufnis"},
  {p: 0.17, name: "konspiratives, politisches Treffen,"},
  {p: 0.17, name: "Möchtegerngeheimloge"},
  {p: 0.17, name: "Heldengruppe"},
  {p: 0.15, name: "Anhänger eines verbotenen Kultes"},
]
