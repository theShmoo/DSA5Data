export const TreasureProbabilities = [{
  "description": "Münzen",
  "types": ["coins"],
  "p": 0.2},
{
  "description": "Schmuck",
  "types": ["jewellery"],
  "p": 0.25
},
{
  "description": "Edelsteine",
  "types": ["gems"],
  "p": 0.25
},
{
  "description": "Münzen und Schmuck",
  "types": ["coins", "jewellery"],
  "p": 0.1
},
{
  "description": "Münzen und Edelsteine",
  "types": ["coins", "gems"],
  "p": 0.1
},
{
  "description": "Schmuck und Edelsteine",
  "types": ["jewellery", "gems"],
  "p": 0.05
},
{
  "description": "Münzen, Schmuck und Edelsteine",
  "types": ["coins", "jewellery", "gems"],
  "p": 0.05
}
];

export const TreasureTypes = {
  "coins": [
    {p: 0.1, description: "2W20 Kreuzer"},
    {p: 0.1, description: "2W20 Heller"},
    {p: 0.1, description: "2W20 Silbertaler"},
    {p: 0.1, description: "2W20 Dukaten"},
    {p: 0.1, description: "Je 1W20 Kreuzer und Heller"},
    {p: 0.1, description: "Je 1W20 Kreuzer, Heller und Silbertaler"},
    {p: 0.1, description: "Je 1W20 Kreuzer, Heller, Silbertaler und Dukaten"},
    {p: 0.1, description: "Je 2W20 Silbertaler und Dukaten"},
    {p: 0.1, description: "Je 2W20 Kreuzer, Heller, Silbertaler und Dukaten"},
    {p: 0.1, description: "3W20 Dukaten"},
  ],
  "jewellery": [
    {p: 0.1, description: "Amulett"},
    {p: 0.1, description: "Armreif"},
    {p: 0.1, description: "Brosche"},
    {p: 0.1, description: "Diadem"},
    {p: 0.1, description: "Kette"},
    {p: 0.1, description: "Ohrring"},
    {p: 0.1, description: "Ring"},
    {p: 0.05, description: "Armreif mit eingearbeitetem Juwel"},
    {p: 0.05, description: "Brosche besetzt mit 1W6 Juwelen"},
    {p: 0.05, description: "Diadem besetzt mit 1W6 Juwelen"},
    {p: 0.05, description: "Kette mit Anhänger mit einem Juwel"},
    {p: 0.05, description: "Ohrring mit einem Juwel"},
    {p: 0.05, description: "Ring mit einem Juwel"},
  ],
  "gems": [
    {p: 0.1, description: "Speckstein (weiß, braun, rot)"},
    {p: 0.1, description: "Obsidian (schwarz)"},
    {p: 0.1, description: "Malachit (dunkelgrün)"},
    {p: 0.1, description: "Achat (rot, braun, grün)"},
    {p: 0.05, description: "Türkis (grün-blau)"},
    {p: 0.05, description: "Aventurin (grünlich)"},
    {p: 0.05, description: "Turmalin (farblos)"},
    {p: 0.05, description: "Roter Obsidian (rot)"},
    {p: 0.05, description: "Grüne Jade (grün)"},
    {p: 0.05, description: "Topas (farblos)"},
    {p: 0.05, description: "Opal (milchig)"},
    {p: 0.05, description: "Feueropal (rot schillernd)"},
    {p: 0.05, description: "Smaragd (grün)"},
    {p: 0.05, description: "Saphir (blau)"},
    {p: 0.05, description: "Rubin (rot)"},
    {p: 0.05, description: "Diamant (durchsichtig)"},
  ]
};

export const JewelleryMaterial = [
  {p: 0.05, description: "rostiges Eisen"},
  {p: 0.05, description: "Eisen"},
  {p: 0.05, description: "Zinn"},
  {p: 0.1, description: "Messing"},
  {p: 0.1, description: "Bronze"},
  {p: 0.1, description: "Kupfer"},
  {p: 0.25, description: "Silber"},
  {p: 0.15, description: "Gold"},
  {p: 0.1, description: "Elektrum"},
  {p: 0.05, description: "Mondsilber (noch mal 1W6 würfeln – bei einer 6:Mindorium)"},
];

export const GemKarat = [
  {p: 0.028, amount: "2W20"},
  {p: 0.139, amount: "2W6"},
  {p: 0.25, amount: "1W6"},
  {p: 0.417, amount: "1W6/2"},
  {p: 0.083, amount: "3W6+3"},
  {p: 0.056, amount: "5W6"},
  {p: 0.028, amount: "1W20+10"},
];

export const TreasureMisc = [
  {p: 0.15, description: "Gabel"},
  {p: 0.1, description: "Kelch"},
  {p: 0.1, description: "Kerzenständer"},
  {p: 0.15, description: "Löffel"},
  {p: 0.15, description: "Messer"},
  {p: 0.05, description: "Pokal"},
  {p: 0.05, description: "Tablett"},
  {p: 0.05, description: "Teller"},
  {p: 0.05, description: "Statue"},
  {p: 0.05, description: "Statue mit 1W6 Juwelen"},
  {p: 0.05, description: "Pokal mit 1W6 Juwelen"},
  {p: 0.05, description: "Teller mit 1W6 Juwelen"},
];
