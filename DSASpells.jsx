export const DSASpells = [
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Ablativum.html",
    "name": "Ablativum",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Antimagie",
      "Probe": "MU/KL/CH",
      "Publikation": "Aventurische Magie 114",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "D",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Spruch erschafft eine unsichtbare Kuppel um den Magier herum, die sich mit ihm bewegt und darin Befindliches vor Zaubern schützt. Die Kuppel ist eigentlich eine Kugel, da jedoch der Magier meistens auf dem Boden steht, ist die Kugelform nur selten relevant. Die Kuppel verfügt über einen Radius von 3 Schritt und eine Schildstärke in Höhe von QS x 3. Wird ein freundlicher oder feindlicher Zauber gegen ein unter der Kuppel befindliches Ziel gerichtet, vermindert die Schildstärke dessen QS. Sinkt diese dadurch auf 0, tritt kein Effekt ein. Die Schildstärke wird jedoch im Rahmen dieses Prozesses verbraucht (–1 QS je aufgehaltener QS), und der Ablativum endet vorzeitig, sobald seine QS unter 1 fällt. Sollte ein Flächenzauber, beispielsweise der Ignisphaero, teilweise den Schild des Ablativum berühren, wird die Schildstärke um die QS des Flächenzaubers vermindert. Wirkt ein Zauber über mehrere KR, so wird die Schildstärke jede KR um die QS vermindert. Sollte ein Zauber mehr QS aufweisen als der Ablativum, dringt der Zauber mit den überzähligen QS durch den Schild. Die gesamten QS des Zaubers werden aber wie üblich von der Schildstärke abgezogen.",
      "Wirkungsdauer": "5 Minuten",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Stärkerer Schild ",
        "(FW 8, 4 AP): Die Schildstärke beträgt QS x 4."
      ],
      "1": [
        "Großer Radius ",
        "(FW 12, 8 AP): Der Radius beträgt 5 Schritt. Es entstehen zusätzliche Kosten in Höhe von 4 AsP, die jedoch nicht die Schildstärke erhöhen."
      ],
      "2": [
        "Reichweite Berührung ",
        "(FW 16, 12 AP): Als Reichweite gilt Berührung. Die Schildstärke beträgt nur QS x 2. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Blindheit.html",
    "name": "Blindheit",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/CH (modifiziert um SK)",
      "Publikation": "Aventurische Magie 122",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Hexen, Scharlatane",
      "Wirkung": "Das Ziel verliert schlagartig die Fähigkeit, seine Umgebung optisch wahrzunehmen, und es erhält dadurch den Status <em>Blind</em>.",
      "Wirkungsdauer": "QS x 5 Minuten",
      "Zauberdauer": "16 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Lebewesen ",
        "(FW 8, 3 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen."
      ],
      "1": [
        "Sehschwierigkeiten ",
        "(FW 12, 6 AP): Das Ziel hat auch noch QS Stunden nach dem Ende der Wirkungsdauer des Zaubers Sehschwierigkeiten. Alle Proben, die Augenlicht erfordern, sind um 1 erschwert."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 9 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Es entstehen zusätzliche Kosten in Höhe von 8 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Zwingtanz.html",
    "name": "Zwingtanz",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/KL/CH (modifiziert um SK)",
      "Publikation": "Die Streitenden Königreiche Seite 168",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden",
      "Wirkung": "Durch den Zauberspruch ist das Opfer dazu gezwungen, unkontrolliert zu tanzen. Es bewegt sich dabei nicht weiter als QS Schritt vom Ort seiner Verzauberung weg. Dabei vermeidet es Stürze in Spalten, Abgründe oder ähnliche Gefahren. Während des Tanzeserhält es den Status Handlungsunfähig. Allerdings gilt das Opfer nicht als Liegend und es verfügt noch über seine normale GS, die allerdings ausschließlich beim Tanzen zum Einsatz kommt. Alle Attacken und Fernkampfangriffe gegen das Opfer sind aufgrund der unvorhersehbaren Bewegungen um 4 Punkte erschwert.",
      "Wirkungsdauer": "QS in KR",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Zauberklinge.html",
    "name": "Zauberklinge Geisterspeer",
    "properties": {
      "AsP-Kosten": "abhängig von der Waffe (nicht modifizierbar)",
      "Merkmal": "Objekt",
      "Probe": "KL/IN/FF",
      "Publikation": "Regelwerk Seite 301",
      "Reichweite": "8 Schritt",
      "Ritualdauer": "8 Stunden",
      "Steigerungsfaktor": "C",
      "Verbreitung": "allgemein",
      "Wirkung": "Mit diesem Ritual lassen sich arkane Kräfte in eine Waffe binden. Diese gilt dann als magische Waffe. Die Kosten des Rituals sind abhängig von der Größe der Waffe. Die Wirkungsdauer lässt sich auf QS x 30 Jahre erhöhen. In diesem Falle verfünffachen sich die AsP-Kosten, wobei 1/20 hiervon permanent verloren gehen.",
      "Wirkungsdauer": "FP in Tage",
      "Zielkategorie": "Objekt"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Verkürzte Ritualdauer ",
        "(FW 8, 3 AP): Die Ritualdauer beträgt 4 Stunden."
      ],
      "1": [
        "Trägerwahl ",
        "(FW 12, 6 AP): Die Waffe gilt nur dann als magisch, wenn sie von Personen geführt wird, die der Zauberer bestimmt hat."
      ],
      "2": [
        "Hass auf … ",
        "(FW 16, 9 AP): Gegen eine bestimmte Art von Wesen richtet die Waffe +1 TP an. Der Typus des Wesens muss vor der Verzauberung ausgewählt werden (Dämonen, Untote, Menschen usw.). Die Kosten des Rituals steigen dadurch um 4 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_BlickaufsWesen.html",
    "name": "Blick aufs Wesen",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Hellsicht",
      "Probe": "KL/IN/CH (modifiziert um SK)",
      "Publikation": "Aventurische Magie 121",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Elfen, Scharlatane",
      "Wirkung": "Dem Zauberer werden die Werte des Ziels offenbart. Er kann pro erreichter QS eine Kategorie auswählen, die für ihn offengelegt wird: Körperliche Eigenschaften, LE und ZK, Kampftechniken, Körperliche Vor- und Nachteile, Körperliche Sonderfertigkeiten, Kampfsonderfertigkeiten, aktuell vorhandene Zustände und Status, Körpertalente.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Geistige Eigenschaften ",
        "(FW 8, 1 AP): Als weitere Kategorien stehen Geistige Eigenschaften, AE und SK, Zauber, Geistige Vor- und Nachteile, Geistige Sonderfertigkeiten und Magische Sonderfertigkeiten sowie Wissenstalente zur Auswahl."
      ],
      "1": [
        "Zwei Ziele ",
        "(FW 12, 2 AP): Der Zauberer kann bis zu 2 Ziele gleichzeitig einschätzen. Das zweite Ziel kostet 2 AsP extra."
      ],
      "2": [
        "Vier Ziele ",
        "(FW 16, 3 AP): Der Zauberer kann bis zu 4 Ziele gleichzeitig einschätzen. Jedes Ziel nach dem ersten kostet 2 AsP extra. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ESF_Zaubermelodie.html",
    "name": "Zaubermelodie",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Heilung",
      "Probe": "MU/IN/CH",
      "Publikation": "Regelwerk Seite 284",
      "Steigerungsfaktor": "B",
      "Talent": "Musizieren oder Singen",
      "Verbreitung": "Elfen",
      "Wirkung": "Spielt der Elf ungestört eine Stunde lang diese Melodie, kann er sich in einen tranceartigen Zustand versetzen, in dem er sich in Einklang mit den astralen Strömungen der Umgebung bringen kann. Er erwacht nach einer halben Stunde aus der Trance. Wenn er aus der Trance erwacht, sind für ihn alle Proben auf Zaubersprüche und Rituale bis zum nächsten Sonnenaufgang erleichtert. Bei QS 1-3 um 1, bei QS 4-6 um 2"
    },
    "spellclass": "Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/fgregregreg.html",
    "name": "Bann- und Schutzkreis gegen niedere Dämonen",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP",
      "Bannkreis": "Der erste niedere Dämon, der sich dem Kreis auf 7 Schritt nähert, wird in ihn hineingezogen und kann ihn während der Wirkungsdauer nicht mehr verlassen.",
      "Merkmal": "Keines",
      "Publikation": "Regelwerk Seite 266",
      "Schutzkreis": "Niedere Dämonen können den Kreis nicht betreten.",
      "Verbreitung": "Gildenmagier"
    },
    "spellclass": "Bann und Schutzkreis",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/HSF_Zungelaehmen.html",
    "name": "Zunge lähmen",
    "properties": {
      "AsP-Kosten": "14 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/CH (modifiziert durch ZK)",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Zunge und Lippen des Opfers sind gelähmt. Es kann daher nicht mehr artikuliert sprechen. Dies beeinflusst auch Zaubersprüche. Außerdem neigen so Verfluchte zu Speichelfluss. Der Verfluchte erhält den Status Stumm.",
      "Wirkungsdauer": "QS x 3 in Stunden"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_BandundFessel.html",
    "name": "Band und Fessel",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/CH/KK (modifiziert um SK)",
      "Publikation": "Aventurische Magie 121",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Elfen, Hexen",
      "Wirkung": "Das Ziel ist während der Wirkungsdauer nicht dazu in der Lage, sich weiter als 7 Schritt von dem Ort zu entfernen, an dem es sich am Ende der Zauberdauer aufhält. Wird es mit Gewalt herausgedrängt, erhält es solange 1 Stufe des Zustands <em>Schmerz </em>pro KR, bis es wieder in den Wirkungsbereich zurückkehrt.",
      "Wirkungsdauer": "QS x 2 Stunden",
      "Zauberdauer": "16 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zwei Personen ",
        "(FW 8, 2 AP): Der Zauber betrifft bis zu 2 Personen gleichzeitig. Für die zweite Person entstehen nach der ersten entstehen zusätzliche Kosten in Höhe von 2 AsP."
      ],
      "1": [
        "Vier Personen ",
        "(FW 12, 4 AP): Der Zauber betrifft bis zu 4 Personen gleichzeitig. Pro weiterer Person nach der ersten entstehen zusätzliche Kosten in Höhe von 2 AsP. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Acht Personen ",
        "(FW 16, 6 AP): Der Zauber betrifft bis zu 8 Personen gleichzeitig. Pro weiterer Person nach der ersten entstehen zusätzliche Kosten in Höhe von 2 AsP. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Zauberfeder.html",
    "name": "Zauberfeder",
    "properties": {
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie 114",
      "Reichweite": "1 Schritt",
      "Verbreitung": "Gildenmagier (Punin)",
      "Wirkung": "Dieser Trick verzaubert einen Federkiel, sodass dieser alles wortgetreu auf einem bereitgelegten Papier oder in ein Buch notiert, was der Zauberer sagt. Der Federkiel kann die Seiten des Buches umschlagen und taucht sich selbst in ein Tintenfäßchen ein, solange es maximal einen Schritt weit entfernt ist.",
      "Wirkungsdauer": "10 Minuten",
      "Zielkategorie": "Objekte (Federkiele)"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/zeichenderangst.html",
    "name": "Zeichen der Angst",
    "properties": {
      "AP-Wert": "8 Abenteuerpunkte",
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Keines",
      "Publikation": "Die Streitenden Königreiche Seite 172",
      "Verbreitung": "Nostria",
      "Wirkung": "Das Zeichen der Angst kann an einen Baum oder einen Felsen aufgetragen werden. Man muss nicht wissen, was das Zeichen ist, man muss es lediglich sehen können, damit es seine Wirkung entfaltet. Mit Ausnahme des Erschaffers des Zeichens haben alle Personen, die das Zeichen sehen und sich in einem Radius von 8 Schritt aufhalten, ein mulmiges Gefühl und wollen den Ort so schnell wie möglich verlassen. Jeder Betroffene muss eine Probe auf <em>Willenskraft (Bedrohungen standhalten)</em> ablegen, bei deren Misslingen er 1 Stufe <em>Furcht </em>erleidet. Das Zeichen ist aber nicht stark genug, um jemanden direkt davon abzuhalten, sich dem Zeichen zu nähern."
    },
    "spellclass": "Ahnenzeichen",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Blick_in_die_Gedanken.html",
    "name": "Blick in die Gedanken",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers), 4 AsP pro 30 Sekunden",
      "Merkmal": "Hellsicht",
      "Probe": "MU/KL/IN (modifiziert um SK)",
      "Publikation": "Regelwerk Seite 289",
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Zaubernde kann die Gedanken des Verzauberten lesen. Er kann nur erkennen, was der Verzauberte gerade denkt, nicht jedoch gezielt in seinen Erinnerungen forschen. Der Verzauberte kann mit einer Erfolgsprobe auf Sinnesschärfe erschwert um QS des Zaubers entdecken, dass etwas Fremdes in seine Gedanken blickt. Mit einer um QS der Zauberprobe erschwerte Probe auf Willenskraft kann er gezielt Gedanken mit irreführenden Informationen aussenden oder seine Gedanken mit nutzlosem Durcheinander, inneren Monologen oder Gesang füllen.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende, übernatürliche Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Kampfhandlung vorhersehen ",
        "(FW 8, 3 AP): Im Kampf kann der Zauberer Handlungen des verzauberten Gegners vorausahnen. Die Verteidigung des Zauberers ist gegen diesen Gegner um 1 erhöht. Dabei gelten 5 Sekunden der Wirkungsdauer als 1 KR."
      ],
      "1": [
        "Unbemerkt ",
        "(FW 12, 6 AP): Die "
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 9 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Tiersinne.html",
    "name": "Tiersinne",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP pro 5 Minuten",
      "Merkmal": "Hellsicht",
      "Publikation": "Regelwerk Seite 280",
      "Tierarten": "alle",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute leiht seiner Hexe eine spezielle Art der Wahrnehmung, abhängig von der Tierart des Vertrauten. Katzen können so eine Stufe Dunkelsicht und Herausragender Sinn (Gehör) verleihen, Raben  Herausragender Sinn (Sicht), Kröten Herausragender Sinn (Geruch). Die Tiersinne funktionieren wie die  entsprechenden Vorteile. Der Vertraute muss während der gesamten Wirkungsdauer Körperkontakt zur Hexe halten.",
      "Wirkungsdauer": "aufrechterhaltend"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_UngesehenerBeobachter.html",
    "name": "Ungesehener Beobachter",
    "properties": {
      "AP-Wert": "35 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP pro 10 Minuten",
      "Merkmal": "Einfluss",
      "Publikation": "Regelwerk Seite 280",
      "Tierarten": "alle",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute wird Auge und Ohr der Hexe. Sie kann wahrnehmen, was er wahrnimmt. Um den Kontakt aufrechtzuerhalten, muss die Hexe mit geschlossenen Augen verweilen und sich auf ihren Vertrauten konzentrieren. Die Verbindung wirkt nur in eine Richtung, die Hexe kann ihrem Vertrauten daher keine Aufträge erteilen. Die Reichweite der Verbindung beträgt sieben Meilen. Sollte der Vertraute verletzt werden, erleidet die Hexe den gleichen Schaden wie der Vertraute. Der so miterlebte Tod eines Vertrauten kann eine Hexe stark traumatisieren.",
      "Wirkungsdauer": "aufrechterhaltend"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Zwiegespraech.html",
    "name": "Zwiegespräch",
    "properties": {
      "AP-Wert": "beherrschen Vertrautentiere von Anfang an",
      "AsP-Kosten": "1 AsP pro 10 Minuten",
      "Merkmal": "Einfluss",
      "Publikation": "Regelwerk Seite 280",
      "Tierarten": "alle",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute übermittelt Bilder, Gefühle und Erfahrungen telepathisch an die Hexe, so lange beide Körperkontakt aufrechterhalten. Da Vertrautentiere die menschliche Sprache begrenzt verstehen, kann sich so ein Zwiegespräch entwickeln, bei dem die Hexe spricht und der Vertraute telepathisch antwortet.",
      "Wirkungsdauer": "aufrechterhaltend"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_ZauberspeicherdesAdepten.html",
    "name": "Zauberspeicher des Adepten",
    "properties": {
      "AP-Wert": "20 Abenteuerpunkte",
      "AsP-Kosten": "keine (außer die des gespeicherten Zauberspruchs)",
      "Merkmal": "Objekt",
      "Publikation": "Aventurische Magie Seite 25",
      "Verbreitung": "Gildenmagier",
      "Volumen": "7 Punkte",
      "Voraussetzungen": "Merkmalsfokus für den zu speichernden Zauber",
      "Wirkung": "Der Zauberer kann einen Zauberspruch wirken, der maximal 8 AsP kosten darf, und ihn in seinen Stab fließen lassen. Der Zauberer kann den Zauberspruch dann mittels 1 Aktion aus dem Stab heraus wirken, vorausgesetzt, dass ein gültiges Ziel vorhanden ist. Er muss dabei weder Formel noch Geste des Zauberspruchs einsetzen und erleidet für deren Weglassen auch keinerlei Erschwernisse. Wird der gespeicherte Zauber eingesetzt, wird auf die Eigenschaften 14/14/14 gewürfelt. Der FW entspricht dabei den FP des gespeicherten Zaubers. Der Zauberspeicher des Adepten kann keine Rituale speichern, und er kann immer nur einen einzigen Zauberspruch beinhalten."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/FluchderSchlaflosigkeit.html",
    "name": "Fluch der Schlaflosigkeit",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/CH (modifiziert durch SK)",
      "Publikation": "Die Streitenden Königreiche Seite 170",
      "Verbreitung": "Druiden",
      "Wirkung": "Das Opfer kann nicht schlafen. Wenn es doch für einige Sekunden einnickt, wird es von Alpträumen wieder aufgeschreckt. Regeneration ist in diesem Zustand nicht möglich. Der Schlafentzug macht das Opfer  zudem  fahrig,  reizbar  und  es  erleidet  nach  einigen Tagen Sinnestäuschungen. Pro zwei Tagen ohne Schlaf erhält das Opfer eine Stufe <em>Verwirrung</em>, die erst abklingt, wenn es wieder schlafen kann.",
      "Wirkungsdauer": "QS x 2 in Tagen"
    },
    "spellclass": "Herrschaftsritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/MachtueberSchlafwandler.html",
    "name": "Macht über Schlafwandler",
    "properties": {
      "AsP-Kosten": "32 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/KL/IN (modifiziert durch SK)",
      "Publikation": "Die Streitenden Königreiche Seite 170",
      "Verbreitung": "Druiden",
      "Wirkung": "Der Druide verbrennt einen Haufen Misteln, die  er  selbst  gepflückt  hat  und  gibt  die  körperliche Komponente des Opfers in das Feuer. Das nächste Mal, wenn es schläft, kann er es schlafwandeln lassen. Der Druide  kann  durch  seine  Augen  sehen  und  hat vollständige  Kontrolle  über  den  Körper  des  Opfers.  Der Schlafwandler ist jedoch weder besonders schnell (GS halbiert) noch geschickt (alle Fertigkeitsproben –1, –2 AT, –1 PA, –1 AW). Für Körper Talente/körperliche Eigenschaften wird der FW/Wert des Opfers benutzt, ebenso alle seine Kampfwerte. Bei anderen Talenten/geistigen Eigenschaften kommt der FW/Wert des Druiden zu  tragen.  Zauber/Liturgien  kann  der  Druide  nicht durch das Opfer wirken. Sollte das Opfer TP oder SP erleiden,  so  bricht  die  Kontrolle  ab.  Soll  das  Opfer sich  selbst  schaden  oder  soll  es  gezwungen  werden, gegen seine Prinzipien zu handeln, so steht ihm eine Probe auf <em>Willenskraft</em> zu, um den Befehl zu verweigern. Diese  Probe  kann  nach Meisterentscheid  modifiziert  werden.  Während der  Druide  die  mentale Kontrolle  ausübt,  ist  er selbst  in  Meditation  erstarrt  und  erleidet  den Status <em>Bewegungsunfähig</em>.",
      "Wirkungsdauer": "QS Stunden"
    },
    "spellclass": "Herrschaftsritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/wegsweiser.html",
    "name": "Wegweiser",
    "properties": {
      "AP-Wert": "5 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "Telekinese",
      "Publikation": "Die Streitenden Königreiche Seite 159",
      "Verbreitung": "Druiden",
      "Volumen": "3 Punkte",
      "Voraussetzungen": "Bindung des Dolches",
      "Wirkung": "Wird der Dolch aufgehängt oder auf eine ebene Fläche gelegt, zeigt er nach einem kurzen Augenblick in die Richtung des Ortes, an dem die Bindung des Dolches durchgeführt wurde. Dadurch sind Proben auf <em>Orientierung</em> für den Druiden um 3 erleichtert."
    },
    "spellclass": "Dolchritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Kraftdererde.html",
    "name": "Kraft der Erde",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Heilung",
      "Publikation": "Die Streitenden Königreiche Seite 159",
      "Verbreitung": "Druiden",
      "Volumen": "5 Punkte",
      "Voraussetzungen": "Bindung des Dolches",
      "Wirkung": "Der Druide steckt den Dolch 5 Minuten lang in die Erde. Wenn er ihn danach wieder herauszieht, kann er  zwischen  den  beiden  folgenden  Vorteilen  wählen: Entweder fließt Lebenskraft aus der Erde über den Dolch, und der Druide erlangt auf der Stelle 1W6 LeP zurück. Er kann alternativ aber auch entscheiden, eine Stufe eines beliebigen Zustands (außer Belastung) aufzuheben."
    },
    "spellclass": "Dolchritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/FluchderPestilenz.html",
    "name": "Fluch der Pestilenz",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/KL/CH (modifiziert durch SK)",
      "Publikation": "Die Streitenden Königreiche Seite 170",
      "Verbreitung": "Druiden",
      "Wirkung": "Das Opfer wird vom Druiden mit einer ihm bekannten  Krankheit  infiziert.  Die Stufe  der  Krankheit darf maximal dem Fertigkeitswert des Rituals entsprechen. Ab der Infektion verläuft die Krankheit normal, ist allerdings nicht ansteckend. Nicht wählbar sind magische Erkrankungen wie Duglumspest.",
      "Wirkungsdauer": "bis zum Ende der Krankheit, maximal aber QS x 3 Tage"
    },
    "spellclass": "Herrschaftsritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Dolch-Apport.html",
    "name": "Dolch-Apport",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "Telekinese",
      "Publikation": "Die Streitenden Königreiche Seite 159",
      "Verbreitung": "Druiden",
      "Volumen": "3 Punkte",
      "Voraussetzungen": "Bindung des Dolches",
      "Wirkung": "Der Dolch kann vom Druiden zu sich gerufen werden. Er fliegt auf dem kürzesten Weg mit Geschwindigkeit 15 zum Druiden und umfliegt selbstständig Hindernisse. Fenster durchschlägt der Dolch, Wände aus Holz oder Stein halten ihn jedoch auf. Der Druide muss für den Einsatz des Dolch-Apports seinen Dolch nicht sehen."
    },
    "spellclass": "Dolchritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Bindungdolch.html",
    "name": "Bindung des Dolches",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "Bindungskosten": "2 permanente AsP",
      "Merkmal": "Objekt",
      "Publikation": "Die Streitenden Königreiche Seite 158",
      "Verbreitung": "Druiden",
      "Volumen": "0 Punkte",
      "Voraussetzungen": "Druide (Tradition)",
      "Wirkung": "Die Bindung des Dolches ist stets das erste Ritual, das auf einen Druidendolch gewirkt wird. Mit ihm wird die Klinge an den Druiden gebunden und dadurch unzerbrechlich. Einzig elementares Feuer, das heißer brennt als ein Drachenodem oder ein Ignifaxius, oder aber gezielte Antimagie können ihn fortan zerstören. Der Dolch gilt von nun an als magische Waffe und kann nicht auf anderem Weg, wie etwa dem ARCANOVI, mit weiteren Zaubern belegt werden. Ein Druide kann immer nur einen Vulkanglasdolch besitzen. Das Binden eines Dolches kostet ihn einmalig 2 permanente AsP. Der Druide kann sich entscheiden, seine Verbindung zum Dolch zu lösen, beispielsweise um einen neuen Dolch an sich zu binden. Nach dem Tod eines Druidenverliert der Dolch nach 24 Stunden die permanent gespeicherten AsP und jegliche Magie."
    },
    "spellclass": "Dolchritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Ausbruchunterdr.html",
    "name": "Ausbruch unterdrückter Gefühle",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert durch SK)",
      "Publikation": "Die Streitenden Königreiche Seite 170",
      "Verbreitung": "Druiden",
      "Wirkung": "Durch dieses Ritual kann der Druide dem Opfer eine Persönlichkeitsschwäche oder eine Schlechte Eigenschaft anhexen. Das Opfer enthält den entsprechenden Nachteil bis zum Ablauf der Wirkungsdauer.",
      "Wirkungsdauer": "QS Tage"
    },
    "spellclass": "Herrschaftsritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/sichtdunke.html",
    "name": "Sicht im Dunkeln",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP (Aktivierung) +2 AsP pro 5 Minuten",
      "Merkmal": "Verwandlung",
      "Publikation": "Die Streitenden Königreiche Seite 159",
      "Verbreitung": "Druiden",
      "Volumen": "4 Punkte",
      "Voraussetzungen": "Bindung des Dolches",
      "Wirkung": "Der Druide fügt sich eine kleine Schnittwunde zu, vorzugsweise an der Stirn, was 1 LeP kostet. Danach kann er in der Dunkelheit so gut sehen, wie am  helllichten  Tag. Sichtmodifikatoren  durch  Dunkelheit können ignoriert werden. Andere Sichtmodifikatoren, etwa  aufgrund  von  Nebel,  bleiben  allerdings bestehen. Das Ritual wirkt auch gegen magische Dunkelheit, nicht jedoch gegen Dunkelheit, die durch Liturgien oder Zeremonien verursacht wurde."
    },
    "spellclass": "Dolchritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/FigurderSchmerzen.html",
    "name": "Figur der Schmerzen",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert durch SK)",
      "Publikation": "Die Streitenden Königreiche Seite 170",
      "Verbreitung": "Druiden",
      "Wirkung": "Der Druide erschafft eine Figur aus Wachs, Holz oder einem anderen Material (nicht jedoch aus Metall)  und  bindet  dabei  die  körperliche  Komponente des Opfers ein, das er verzaubern will. Am Ende der Ritualdauer kann er die Figur mit seinem Dolch stechen, über Feuer halten oder sie auf andere Weise beschädigen, um dem Opfer Schmerzen zu zufügen. Das Opfer erleidet für die Dauer von 24 Stunden 1 Stufe <em>Schmerz</em>, wenn der Druide die Figur pro Tag für mindestens 5 Minuten foltert. Mehr als 1 Stufe <em>Schmerz</em> lässt sich durch dieses Ritual nicht verursachen. Nutzt der Druide den Tag nicht für die Folter der Figur, geschieht zwar nichts, aber das magische Band zwischen Figur und Opfer besteht fort, sofern die Wirkungsdauer noch nicht abgelaufen ist. Der Schmerz vergeht spätestens 1 Stunde nach dem Ende der Wirkungsdauer.",
      "Wirkungsdauer": "QS/2 Tage"
    },
    "spellclass": "Herrschaftsritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_VolumenerweiterungdesZauberstabsI-V.html",
    "name": "Volumenerweiterung des Zauberstabs I-V",
    "properties": {
      "AP-Wert": "5 Abenteuerpunkte pro Stufe",
      "AsP-Kosten": "1 permanenter AsP pro Stufe",
      "Merkmal": "Objekt",
      "Publikation": "Aventurische Magie Seite 25",
      "Verbreitung": "Gildenmagier",
      "Volumen": "0 Punkte",
      "Voraussetzungen": "keine, bei höheren Stufen die jeweils vorige Stufe der SF",
      "Wirkung": "Das Volumen des Zauberstabs steigt permanent um 1 Punkt. Dieser Stabzauber kann mehrfach gewählt werden, um die jeweils nächsthöhere Stufe zu erhalten."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Telekineseschlag.html",
    "name": "Telekineseschlag",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "2 AsP pro AT",
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie Seite 24",
      "Verbreitung": "Gildenmagier",
      "Volumen": "4 Punkte",
      "Voraussetzungen": "Hammer des Magus",
      "Wirkung": "Der Zauberer kann einen Gegner in einer Entfernung von bis zu 8 Schritt mit einem telekinetischen Schlag angreifen. Dem Zauberer muss eine AT mit seinem Traditionsartefakt gelingen. Der Gegner kann nur ausweichen, eine Schilde-PA einsetzen oder mit seinem Traditionsartefakt parieren. Die Reichweite der Waffen spielt hierbei keine Rolle. Gelingt der Angriff und wird nicht verteidigt, erhält der Gegner 1W6+1 TP und muss eine Probe auf <em>Körperbeherrschung (Balance) </em>bestehen, um nicht den Status <em>Liegend </em>zu erhalten."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Stabfixierung.html",
    "name": "Stabfixierung",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP pro 5 Minuten",
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie Seite 23",
      "Verbreitung": "Gildenmagier",
      "Volumen": "2 Punkte",
      "Voraussetzungen": "Stab-Apport",
      "Wirkung": "Dieser Stabzauber wirkt wie ein Objectofixo, nur, dass der Stab an einer beliebigen Oberfläche fixiert werden kann."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Stabexplosion.html",
    "name": "Stabexplosion",
    "properties": {
      "AP-Wert": "20 Abenteuerpunkte",
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie Seite 23",
      "Verbreitung": "Gildenmagier",
      "Volumen": "6 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Der Stab explodiert 4 Aktionen nach Aktivierung des Stabzaubers in winzige Splitter und trifft alle Lebewesen im Radius von 4 Schritt mit 2W6+2 magischen TP. Der Schaden ist magischen Ursprungs. Man kann sich nur mittels einer Schilde-PA dagegen verteidigen. 4 KR nach der Explosion setzt sich der Stab wieder an dem Ort zusammen, an dem er explodiert ist. Der Stab darf nach Aktivierung nicht wesentlich bewegt oder berührt werden, sonst wird der Stabzauber abgebrochen."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Stabbohrer.html",
    "name": "Stabbohrer",
    "properties": {
      "AP-Wert": "8 Abenteuerpunkte",
      "AsP-Kosten": "keine",
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie Seite 23",
      "Verbreitung": "Gildenmagier",
      "Volumen": "2 Punkte",
      "Voraussetzungen": "Stab-Apport",
      "Wirkung": "Der Stab bohrt sich durch jedes beliebige Material, das nicht härter als Diamant ist. Der Stab dreht sich dabei und bohrt pro KR 1 Halbfinger tief. Der Stab kann sich vertikal oder horizontal durch das Material bohren, allerdings nur durch leblose Objekte."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Tierwandlung.html",
    "name": "Tierwandlung",
    "properties": {
      "AP-Wert": "10/15/20 Abenteuerpunkte für eine kleine/mittlere/große Tierverwandlung",
      "AsP-Kosten": "2 AsP pro Tag",
      "Merkmal": "Verwandlung",
      "Publikation": "Aventurische Magie Seite 24",
      "Tiere": "Chamäleon (mittlere Tierverwandlung, Echsenpfad)</strong></li><li><strong>FF</strong> 13 <strong>GE</strong> 14 <strong>KO</strong> 5 <strong>KK</strong> 8 (k)</li><li>LeP wie Zauberer <strong>AsP</strong> – <strong>KaP</strong> – <strong>INI</strong> 10+1W6</li><li><strong>VW</strong> 7 <strong>SK</strong> wie Zauberer <strong>ZK</strong> –2 <strong>GS</strong> 8</li><li><strong>Zunge:</strong> <strong>AT</strong> 16 <strong>TP</strong> 1W3–2 <strong>RW</strong> kurz</li><li><strong>RS/BE:</strong> 0/0</li><li><strong>Aktionen:</strong> 1</li><li><strong>Sonderfertigkeiten:</strong> keine</li><li><strong>Talente:</strong> wie Zauberer</li><li><strong>Anzahl:</strong> 1</li><li><strong>Größenkategorie:</strong> winzig</li><li><strong>Typus:</strong> Tier, nicht humanoid</li><li><strong>Zusätzliche Vorteile:</strong> Proben auf <em>Verbergen (sich Verstecken) </em>sind um 3 erleichtert.</li><li><strong>Biber (mittlere Tierverwandlung, Nagerpfad)</strong></li><li><strong>FF</strong> 11 <strong>GE </strong>10 <strong>KO</strong> 8 <strong>KK</strong> 11 (k)</li><li><strong>LeP</strong> wie Zauberer <strong>AsP</strong> – <strong>KaP</strong> – <strong>INI</strong> 11+1W6</li><li><strong>VW</strong> 5 <strong>SK</strong> wie Zauberer <strong>ZK</strong> 0 <strong>GS </strong>7</li><li><strong>Biss:</strong> <strong>AT</strong> 13 <strong>TP</strong> 1W6+1 <strong>RW</strong> kurz</li><li><strong>RS/BE:</strong> 0/0</li><li><strong>Aktionen:</strong> 1</li><li><strong>Sonderfertigkeiten: </strong>keine</li><li><strong>Talente:</strong> wie Zauberer</li><li><strong>Anzahl:</strong> 1</li><li><strong>Größenkategorie:</strong> winzig</li><li><strong>Typus:</strong> Tier, nicht humanoid</li><li>Zusätzliche Vorteile: kann bis zu 20 Minuten tauchen, ohne Luft zu holen</li><li><strong>Taube (mittlere Tierverwandlung, Vogelpfad)</strong></li><li><strong>FF </strong>12 <strong>GE </strong>12 <strong>KO</strong> 5 <strong>KK</strong> 8 (k)</li><li><strong>LeP</strong> wie Zauberer <strong>AsP</strong> – <strong>KaP</strong> – <strong>INI </strong>12+1W6</li><li><strong>VW</strong> 6 <strong>SK</strong> wie Zauberer <strong>ZK</strong> –2 <strong>GS</strong> 4/16 (am Boden/in der Luft)</li><li><strong>Schnabel:</strong> <strong>AT</strong> 12 <strong>TP</strong> 1W2–1 <strong>RW</strong> kurz</li><li><strong>RS/BE:</strong> 0/0</li><li><strong>Aktionen:</strong> 1</li><li><strong>Sonderfertigkeiten:</strong> keine</li><li><strong>Talente:</strong> wie Zauberer</li><li><strong>Anzahl:</strong> 1</li><li><strong>Größenkategorie:</strong> winzig</li><li><strong>Typus:</strong> Tier, nicht humanoid</li><li><strong>Zusätzliche Vorteile:</strong> Unscheinbar (vor allem in Städten)</li><li><strong>Rabe (große Tierverwandlung, Vogelpfad)</strong></li><li><strong>FF</strong> 12 <strong>GE</strong> 10 <strong>KO</strong> 6 <strong>KK</strong> 9 (k)</li><li><strong>LeP</strong> wie Zauberer <strong>AsP</strong> – <strong>KaP</strong> – <strong>INI</strong> 11+1W6</li><li><strong>VW </strong>5 <strong>SK</strong> wie Zauberer <strong>ZK</strong> –2 <strong>GS </strong>2/16 (am Boden/in der Luft)</li><li><strong>Schnabel:</strong> <strong>AT</strong> 14 <strong>TP </strong>1W3–1 <strong>RW </strong>kurz</li><li><strong>RS/BE:</strong> 0/0</li><li><strong>Aktionen:</strong> 1</li><li><strong>Sonderfertigkeiten:</strong> keine</li><li><strong>Talente:</strong> wie Zauberer</li><li><strong>Anzahl:</strong> 1</li><li><strong>Größenkategorie:</strong> winzig</li><li><strong>Typus:</strong> Tier, nicht humanoid</li><li><strong>Zusätzliche Vorteile:</strong> Herausragender Sinn (Sicht)</li><li><strong>Speikobra (große Tierverwandlung, Echsenpfad)</strong></li><li><strong>FF</strong> 8 <strong>GE</strong> 9 <strong>KO</strong> 12 <strong>KK</strong> 10 (k)</li><li><strong>LeP</strong> wie Zauberer <strong>AsP</strong> – <strong>KaP</strong> – <strong>INI</strong> 12+1W6</li><li><strong>VW </strong>5 <strong>SK </strong>wie Zauberer <strong>ZK</strong> 0 <strong>GS</strong> 3</li><li><strong>Biss:</strong> <strong>AT</strong> 12 <strong>TP</strong> 1W3+1(+Gift)* <strong>RW</strong> kurz</li><li><strong>Speiangriff:</strong> <strong>FK</strong> 17 <strong>LZ</strong> 2 <strong>TP</strong> Gift* <strong>RW</strong> 2/4/6</li><li><strong>RS/BE:</strong> 0/0</li><li><strong>Aktionen:</strong> 1</li><li><strong>Sonderfertigkeiten:</strong> keine</li><li><strong>Talente:</strong> wie Zauberer</li><li><strong>Anzahl:</strong> 1</li><li><strong>Größenkategorie:</strong> winzig</li><li><strong>Typus:</strong> Tier, nicht humanoid</li><li><strong>Zusätzliche Vorteile:</strong> Giftspucken</li><li><strong>Sonderregeln:</strong></li><li><em>*) </em><em>Speikobragift</em></li><li>Das Gift der Speikobra kann mehrmalig gegen den gleichen Gegner wirken. Der Speiangriff wird wie ein Fernkampfangriff mit einer Schusswaffe behandelt.</li><li><strong>Stufe:</strong> 7</li><li><strong>Art:</strong> Kontaktgift, tierisch",
      "Verbreitung": "Gildenmagier",
      "Volumen": "5/6/7 Punkte für eine kleine/mittlere/große Tierverwandlung <strong>Wirkung:</strong> im Blutkreislauf durch Biss: 2 SP pro KR / 1 SP pro KR; auf der Haut durch Spucken: 1W6 SP / 1W3 SP</li><li><strong>Beginn:</strong> sofort</li><li><strong>Dauer:</strong> im Blutkreislauf: 2W6 KR / 1W6 KR<!-- Zusätzlich zu Gifte und Krankheiten / GifteZusätzlich zu Gifte und Krankheiten / GifteSonderfertigkeiten / Stabzauber --></li><li><strong>Eichhörnchen (kleine Tierverwandlung, Nagerpfad)</strong></li><li><strong>FF</strong> 13 <strong>GE </strong>13 <strong>KO</strong> 5 <strong>KK</strong> 9 (k)</li><li><strong>LeP</strong> wie Zauberer <strong>AsP</strong> – <strong>KaP </strong>– <strong>INI</strong> 14+1W6</li><li><strong>VW</strong> 6 <strong>SK</strong> wie Zauberer <strong>ZK</strong> –3 <strong>GS</strong> 13</li><li><strong>Biss:</strong> <strong>AT</strong> 14 <strong>TP </strong>1W3–1 <strong>RW</strong> kurz</li><li><strong>RS/BE:</strong> 0/0</li><li><strong>Aktionen:</strong> 1</li><li><strong>Sonderfertigkeiten:</strong> keine</li><li><strong>Talente:</strong> wie Zauberer</li><li><strong>Anzahl:</strong> 1</li><li><strong>Größenkategorie:</strong> winzig</li><li><strong>Typus:</strong> Tier, nicht humanoid</li><li><strong>Zusätzliche Vorteile:</strong> Herausragender Sinn (Gehör), Proben auf <em>Klettern (Baumklettern </em>oder <em>Fassadenklettern) </em>sind um 3 erleichtert",
      "Voraussetzungen": "Tierkunde 10",
      "Wirkung": "Mit diesem Stabzauber kann der Zauberer seinen Stab in ein Tier verwandeln und seinen Geist in dieses einfließen lassen. Der Stabzauber existiert in mehreren Verwandlungsgraden und Pfaden, meist aber nicht ausschließlich beginnend mit einer kleinen Tierverwandlung. Die Voraussetzung für die nächstgrößere Verwandlung ist jeweils die vorhergehend kleinere Verwandlung des Pfades. Beim Erlernen des Stabzaubers muss der Zauberer sich für einen der folgenden Pfade entscheiden. Das erforderliche Stabvolumen und die AP-Kosten sind je nach Mächtigkeit der Tierverwandlung unterschiedlich.<ul><li>#Echsenpfad: Chamäleon (5 Volumen, 15 AP) und Speikobra (7 Volumen, 20 AP)</li><li>#Nagerpfad: Eichhörnchen (5 Volumen, 10 AP) und Biber (6 Volumen, 15 AP)</li><li>#Vogelpfad: Taube (6 Volumen, 15 AP) und Rabe (7 Volumen, 20 AP)</li></ul>Die Verwandlung dauert hin und zurück je 4 Aktionen. Der Zauberer behält seine geistigen Eigenschaften in Tiergestalt, die restlichen Werte werden durch die des Tieres ersetzt. In Tiergestalt verfügt der Zauberer außerdem über die Fähigkeiten des Tieres, also beispielsweise Farbwechsel beim Chamäleon oder Giftspucken bei der Speikobra. Zauber kann er während der Zeit der Verwandlung nicht einsetzen und er regeneriert keine AsP durch Regenerationsphasen. Sein eigener Körper erhält während der Verwandlung 4 Stufen Paralyse wie unter dem Zauber Paralysis und gilt als versteinert. Der Zauberer kann den Stabzauber nur beenden, wenn er wieder Körperkontakt mit seinem Ursprungskörper hat oder ihm die AsP ausgehen. Wird das Tier getötet, wird der Geist des Zauberers wieder in seinen Körper zurückgeschleudert und er erleidet 4W6 SP. Gleiches gilt, wenn dem Zauberer einfach die AsP ausgehen und so die Verbindung plötzlich getrennt wird."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Stab-Apport.html",
    "name": "Stab-Apport",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "Telekinese",
      "Publikation": "Regelwerk Seite 278",
      "Verbreitung": "Gildenmagier",
      "Volumen": "3 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Der Stab kann vom Magier zu sich gerufen werden. Er fliegt auf dem kürzesten Weg mit Geschwindigkeit 15 zum Magier und umfliegt selbstständig Hindernisse. Fenster durchschlägt der Stab, Wände aus Holz oder Stein halten ihn jedoch auf. Der Magier muss für den Einsatz des Stab-Apports seinen Magierstab nicht sehen."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Siegelbrecher.html",
    "name": "Siegelbrecher",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "5 AsP pro Schutz- oder Bannkreis",
      "Merkmal": "Antimagie",
      "Publikation": "Aventurische Magie Seite 23",
      "Verbreitung": "Gildenmagier",
      "Volumen": "6 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Der Stab zerstört im Radius von 8 Schritt beliebige Bann- oder Schutzkreise. Dies funktioniert aber nur bei Materialien, die eine weiche Komponente haben, also beispielsweise Wachs, Kreide oder Farbe. Steinerne Kreise sind davon nicht betroffen."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Seilschlange.html",
    "name": "Seilschlange",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "5 AsP für 5 Minuten",
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie Seite 23",
      "Seilschlange": "<ul><li><strong>MU</strong> 12 <strong>KL</strong> 12 (t) <strong>IN</strong> 13 <strong>CH</strong> 13</li><li><strong>FF</strong> 12 <strong>GE</strong> 14 <strong>KO</strong> 12 <strong>KK</strong> 10</li><li><strong>LeP</strong> 18 <strong>AsP</strong> – <strong>KaP</strong> – <strong>INI </strong>12+1W6</li><li><strong>VW</strong> 3 <strong>SK</strong> 1 <strong>ZK</strong> 0 <strong>GS</strong> 3</li><li><strong>Biss:</strong> <strong>AT</strong> 12 <strong>TP</strong> 1W6(+Gift)* <strong>RW</strong> kurz</li><li><strong>RS/BE</strong> 0/0</li><li><strong>Aktionen:</strong> 1</li><li><strong>Sonderfertigkeiten:</strong> Finte I (Biss)</li><li><strong>Talente:</strong> Einschüchtern 6, Klettern 4, Körperbeherrschung 8, Kraftakt 3, Schwimmen 15, Selbstbeherrschung 7, Sinnesschärfe 7, Verbergen 9, Willenskraft 7</li><li><strong>Größenkategorie:</strong> klein</li><li><strong>Typus:</strong> Tier (magisch), nicht humanoid</li><li><strong>Kampfverhalten:</strong> Die Schlange verteidigt den Magier bis zum Tod.</li><li><strong>Flucht:</strong> siehe Kampfverhalten</li><li><strong>Sonderregeln:</strong></li><li><em>*) </em><em>Seilschlangengift</em><em></em>Die Wirkung durch mehrere Bisse ist kumulativ.</li><li><strong>Stufe:</strong> 3</li><li><strong>Art:</strong> Waffengift, tierisch</li><li><strong>Widerstand:</strong> Zähigkeit <strong>Wirkung</strong>: einmalig 1W6 SP / 1W3 SP</li><li><strong>Beginn:</strong> 2 KR</li><li><strong>Dauer:</strong> sofort</li><li><strong>Kosten:</strong> keine, Gift kann nicht extrahiert werden</li></ul>",
      "Verbreitung": "Gildenmagier",
      "Volumen": "5 Punkte",
      "Voraussetzungen": "Seilpeitsche",
      "Wirkung": "Der Stab verwandelt sich in eine Seilschlange. Sie beschützt den Zauberer mit den ihr zur Verfügung stehenden Mitteln und folgt ihm. „Stirbt“ die Schlange, verwandelt sie sich wieder zurück in den Stab. Die Schlange gilt als magisch."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_SeildesMagus.html",
    "name": "Seil des Magus",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP pro Attacke / Einsatz",
      "Merkmal": "Objekt",
      "Publikation": "Aventurische Magie Seite 22",
      "Verbreitung": "Gildenmagier",
      "Volumen": "4 Punkte",
      "Voraussetzungen": "Seil des Adepten",
      "Wirkung": "Der Stab kann in ein unzerstörbares Seil von 25 Schritt Länge verwandelt werden. Es kann sich um Objekte schlingen, wenn es geworfen wird. Knoten können so willentlich gebunden oder gelöst werden, solange der Magier das Seil berührt. Das Knoten und Entknoten zählt jeweils als 1 Aktion. Mit dem Seil lässt sich auch ein Wesen in Reichweite von bis zu 20 Schritt treffen und behindern. Das Seil hat einen AT-Wert von 14 und kann jede KR eine Attacke ablegen. Seine Initiative entspricht der des Zauberers. Bei einer gelungenen AT muss dem Ziel eine Raufen-PA oder Ausweichen gelingen, ansonsten gilt es als <em>Eingeengt </em>oder <em>Fixiert</em>: <em>Eingeengt </em>dann, wenn vor dem Angriff auf den Oberkörper gezielt wurde, <em>Fixiert</em> bei den Beinen. Diese Entscheidung muss vor dem Angriff angesagt werden. Das Wesen kann sich mit einer Probe auf <em>Körperbeherrschung (Entwinden) </em>wieder befreien. Das Seil kann nur eine Person und nur eine bis zur Größenkategorie groß attackieren. Verliert der Magier den Kontakt zum Seil, verwandelt es sich zurück in seine ursprüngliche Stabform."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Seilpeitsche.html",
    "name": "Seilpeitsche",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP pro Attacke",
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie Seite 22",
      "Verbreitung": "Gildenmagier",
      "Volumen": "5 Punkte",
      "Voraussetzungen": "Seil des Magus",
      "Wirkung": "Der Stab verwandelt sich in eine Peitsche, die als magische Waffe gilt. Nun hat der Magier zwei Möglichkeiten:<ul><li>#Entweder er lässt die Peitsche selbst mit AT 14 und 1W6+2 TP angreifen. Da sie wegen der nur schwer kontrollierbaren Bewegungen kaum abzuwehren ist, ist eine Parade gegen sie um 2 erschwert. Schilde können darüber hinaus nur ihren einfachen Bonus auf die Verteidigung nutzen. Die Reichweite der Peitsche ist <em>lang</em>, man kann mit ihr keine Paraden ausführen.</li><li>Die Peitsche kann wahlweise statt TP den Status <em>Liegend </em>verursachen. Dies muss vor der Attacke angekündigt werden. Ein Gegner kann dies verhindern, indem ihm eine Probe auf <em>Körperbeherrschung</em> <em>(Kampfmanöver) </em>erschwert um 3 gelingt.</li><ul>"
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Modifikationsfokus.html",
    "name": "Modifikationsfokus",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "keine",
      "Merkmal": "Objekt",
      "Publikation": "Aventurische Magie Seite 22",
      "Verbreitung": "Gildenmagier",
      "Volumen": "3 Punkte",
      "Voraussetzungen": "Kraftfokus",
      "Wirkung": "Solange der Zauberer in Körperkontakt mit dem Stab ist, kann er 1 zusätzliche Zaubermodifikation vornehmen (bis zu einem Maximum von 6)."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Merkmalsfokus.html",
    "name": "Merkmalsfokus",
    "properties": {
      "AP-Wert": "35 Abenteuerpunkte",
      "AsP-Kosten": "keine",
      "Merkmal": "je nach Merkmal",
      "Publikation": "Regelwerk Seite 277",
      "Verbreitung": "Gildenmagier",
      "Volumen": "8 Punkte",
      "Voraussetzungen": "Kraftfokus, passende Merkmalskenntnis",
      "Wirkung": "Bei diesem Stabzauber muss ein Merkmal gewählt werden, das der Fokus unterstützen soll. Proben auf Zauber mit dem so unterstützten Merkmal sind um 1 erleichtert. Der Merkmalsfokus kann mehrfach mit unterschiedlichen Merkmalen auf den Stab gewirkt werden. Solange der Stab in ein Flammenschwert, eine Fackel oder etwas anderes verwandelt ist, gilt dieser Vorteil nicht. Der Magier muss den Stab in der Hand halten, wenn er von dem Stabzauber profitieren will."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_SeildesAdepten.html",
    "name": "Seil des Adepten",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "Objekt",
      "Publikation": "Regelwerk Seite 277",
      "Verbreitung": "Gildenmagier",
      "Volumen": "2 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Der Stab kann in ein unzerstörbares Seil von 10 Metern Länge verwandelt werden. Es kann sich um Objekte schlingen, wenn es geworfen wird. Knoten können so willentlich gebunden oder gelöst werden, solange der Magier das Seil berührt. Das Knoten und Entknoten zählt jeweils als 1 Aktion. Personen lassen sich damit nicht fesseln, außer sie haben den Status <em>Bewegungsunfähig</em>. Verliert der Magier den Kontakt zum Seil, verwandelt es sich zurück in seine ursprüngliche Stabform."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SF_Kraftfokus.html",
    "name": "Kraftfokus",
    "properties": {
      "AP-Wert": "30 Abenteuerpunkte",
      "AsP-Kosten": "keine",
      "Merkmal": "Objekt",
      "Publikation": "Regelwerk Seite 277",
      "Verbreitung": "Gildenmagier",
      "Volumen": "6 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Solange der Magier den Stab berührt, spart er bei jedem Zauber 1 AsP ein. Dieser Abzug wird nach Berechnung aller anderen Modifikationen eingerechnet. Die Ersparnis kann nicht dazu führen, dass die Kosten unter 1 AsP fallen. Solange der Stab in ein Flammenschwert, eine Fackel oder etwas anderes verwandelt ist, gilt die Ersparnis nicht. Der Magier muss den Stab in der Hand halten, wenn er von dem Stabzauber profitieren will."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_MachvolleStabzauberI-IV.html",
    "name": "Machvolle Stabzauber I-IV",
    "properties": {
      "AP-Wert": "3 Abenteuerpunkte pro Stufe",
      "AsP-Kosten": "keine",
      "Merkmal": "Objekt",
      "Publikation": "Aventurische Magie Seite 22",
      "Verbreitung": "Gildenmagier",
      "Volumen": "1 pro Stufe ",
      "Voraussetzungen": "keine, bei höheren Stufen die jeweils vorige Stufe der SF",
      "Wirkung": "Die QS von Stabzaubern gilt pro Stufe als um 1 höher. Dieser Stabzauber kann mehrfach gewählt werden, um die jeweils nächsthöhere Stufe zu erhalten."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_HammerdesMagus.html",
    "name": "Hammer des Magus",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "2 AsP pro Treffer",
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie Seite 22",
      "Verbreitung": "Gildenmagier",
      "Volumen": "4 Punkte",
      "Voraussetzungen": "Hammer des Adepten",
      "Wirkung": "Gegenstände bis zu 50 Strukturpunkten werden bei einer Berührung durch den Stab zerstört."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Heilschlaf.html",
    "name": "Heilschlaf",
    "properties": {
      "AP-Wert": "8 Abenteuerpunkte",
      "AsP-Kosten": "3 AsP pro Wesen",
      "Merkmal": "Heilung",
      "Publikation": null,
      "Verbreitung": "Gildenmagier",
      "Volumen": "4 Punkte",
      "Voraussetzungen": "Heilkunde Wunden 10",
      "Wirkung": "Der Zauberer kann ein Wesen berühren, sodass es bei seiner nächsten Regenerationsphase 1 zusätzlichen LeP, AsP und KaP durch erholsamen Schlaf heilt."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_HalbesMass.html",
    "name": "Halbes Maß",
    "properties": {
      "AP-Wert": "3 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "Objekt",
      "Publikation": "Aventurische Magie Seite 21",
      "Verbreitung": "Gildenmagier",
      "Volumen": "1 Punkt",
      "Voraussetzungen": "keine",
      "Wirkung": "Der Stab kann auf die Hälfte seiner Länge verkleinert werden, ohne dass er merklich an Dicke einbüßt. Die Wirkung hält solange an, wie der Magier Körperkontakt mit dem Stab hält. Ein langer Stab wird regeltechnisch zu einem mittleren Stab, ein mittlerer Stab zu einem kurzen Stab und ein kurzer Stab wird so klein, dass er sich nicht mehr als Waffe eignet."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_HammerdesAdepten.html",
    "name": "Hammer des Adepten",
    "properties": {
      "AP-Wert": "5 Abenteuerpunkte",
      "AsP-Kosten": "keine",
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie Seite 22",
      "Verbreitung": "Gildenmagier",
      "Volumen": "2 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Gegenstände mit bis zu 25 Strukturpunkten werden bei einer Berührung durch den Stab zerstört."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Energiestrahl.html",
    "name": "Energiestrahl",
    "properties": {
      "AP-Wert": "<strong>:</strong> 15 Abenteuerpunkte",
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Verwandlung",
      "Publikation": "Aventurische Magie Seite 21",
      "Verbreitung": "Gildenmagier",
      "Volumen": "5 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Aus dem Stab schießt ein Strahl aus gebündelter astraler Kraft, der in gerader Linie sein Ziel trifft. Das getroffene Ziel erleidet 1W6+4 Trefferpunkte Schaden. Der Energiestrahl zählt als Fernkampfangriff mit einer Schusswaffe und kann entsprechend geblockt werden, und auch ein Ausweichen ist möglich. An Schilden erzeugt er Strukturschaden, wenn er auf sie trifft. Der Strahl trifft automatisch, wenn man sich nicht verteidigt. Trifft der Energiestrahl sein Ziel, werden die TP durch den RS des Ziels vermindert."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_EwigeFlamme.html",
    "name": "Ewige Flamme",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "Elementar",
      "Publikation": "Regelwerk Seite 277",
      "Verbreitung": "Gildenmagier",
      "Volumen": "2 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Das Ende des Stabes kann nun willentlich entzündet werden und brennt wie eine Fackel. Das Feuer hat die natürliche Helligkeit und Hitze einer solchen Flamme, zehrt den Stab jedoch nicht auf. Im Kampf eingesetzt bietet die ewige Flamme keinen besonderen Vorteil. Die Wirkung des Stabzaubers endet automatisch, wenn der Magier schläft, den Status <em>Bewusstlos </em>erleidet oder spätestens nach 1 Stunde."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Flammenschwert.html",
    "name": "Flammenschwert",
    "properties": {
      "AP-Wert": "35 Abenteuerpunkte",
      "AsP-Kosten": "3 AsP, danach 1 bzw. 2 AsP pro Kampfrunde",
      "Merkmal": "Elementar",
      "Publikation": "Regelwerk Seite 277",
      "Verbreitung": "Gildenmagier",
      "Volumen": "7 Punkte",
      "Voraussetzungen": "Ewige Flamme und Kraftfokus",
      "Wirkung": "Mit diesem Stabzauber kann der Magier seinen Stab in ein heiß brennendes Flammenschwert oder, je nach Region, in einen Flammensäbel verwandeln. Dieses Flammenschwert gilt als magische Waffe und richtet wie jedes Feuer zusätzlichen Schaden an Wesen an, die feuerempfindlich sind. Es verursacht 1W6+7 Trefferpunkte. Der Stab muss eine Mindestlänge von einem Schritt besitzen, um in ein Flammenschwert verzaubert werden zu können. Die übrigen Werte entsprechen denen eines Langschwertes. Der Magier kann das Schwert auf zwei Varianten einsetzen: <ol><li>Er kann es wie ein normales Schwert mit der Kampftechnik Schwerter führen. Bei einem Patzer verwandelt sich das Flammenschwert zurück in den Stab. Pro Kampfrunde kostet diese Variante nach der Aktivierung 1 AsP.</li><li>Er kann es per Telekinese fliegen und kämpfen lassen. Hierbei werden die Kampftechnik Schwerter und der entsprechende Attackewert des Magiers für Attacken verwendet. Es bewegt sich mit Geschwindigkeit 8. Der Magier muss sich zur Kontrolle des Schwertes konzentrieren. Das Flammenschwert kontrolliert fliegen zu lassen, ist eine länger dauernde Handlung.</li></ol>Wenn sich das Schwert weiter als 32 Schritt weg vom Magier bewegt, bricht der Stabzauber ab und das Schwert verwandelt sich wieder zurück. Pro Kampfrunde kostet diese Variante nach der Aktivierung 2 AsP.<br/>Um ein fliegendes Flammenschwert festzuhalten, ist ein erfolgreicher Angriff mit Raufen und der Sonderfertigkeit Haltegriff nötig. Für diese Zwecke verfügt das Schwert über eine PA in Höhe der Hälfte der AT und einen Wert in <em>Kraftakt </em>von 10 Punkten mit Eigenschaften von 14 für die Probe."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_BannstabdesMagus.html",
    "name": "Bannstab des Magus",
    "properties": {
      "AP-Wert": "20 Abenteuerpunkte",
      "AsP-Kosten": "keine",
      "Merkmal": "Objekt",
      "Publikation": "Aventurische Magie Seite 21",
      "Verbreitung": "Gildenmagier",
      "Volumen": "5 Punkte",
      "Voraussetzungen": "Bannstab des Adepten",
      "Wirkung": "Der Stab richtet gegen beschwörbare Wesen wie Dämonen, Elementare, Feen und Geister +1 TP an. Dieser Bonus ist kumulativ mit dem aus Bannstab des Adepten, damit richtet ein mit beiden Stabzaubern verzauberter Stab sogar +2 TP an."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_BannstabdesAdepten.html",
    "name": "Bannstab des Adepten",
    "properties": {
      "AP-Wert": "12 Abenteuerpunkte",
      "AsP-Kosten": "keine",
      "Merkmal": "Objekt",
      "Publikation": "Aventurische Magie Seite 21",
      "Verbreitung": "Gildenmagier",
      "Volumen": "3 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Der Stab richtet gegen beschwörbare Wesen wie Dämonen, Elementare, Feen und Geister +1 TP an."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Druckwelle.html",
    "name": "Druckwelle",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie Seite 21",
      "Verbreitung": "Gildenmagier",
      "Volumen": "5 Punkte",
      "Voraussetzungen": "Telekineseschlag",
      "Wirkung": "Der Zauberer kann den Stab mit 2 Aktionen in den Boden rammen und so eine Druckwelle mit einem Radius von 8 Schritt auslösen. Alle Wesen der Größenkategorie mittel und kleiner müssen eine Probe auf <em>Körperbeherrschung (Balance) </em>erleichtert um 1 bestehen um nicht den Status <em>Liegend </em>zu erhalten. Der Zauberer ist von der Wirkung ausgenommen."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_DoppeltesMa%C3%9F.html",
    "name": "Doppeltes Maß",
    "properties": {
      "AP-Wert": "5 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "Objekt",
      "Publikation": "Regelwerk Seite 276",
      "Verbreitung": "Gildenmagier",
      "Volumen": "2 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Der Stab kann auf seine doppelte Länge verlängert werden, ohne dass er merklich an Dicke einbüßt. Die Wirkung hält an, solange der Magier Körperkontakt mit dem Stab hält. Ein mittlerer Stab wird so lang, dass er unter Stangenwaffen fällt und die Reichweite lang erhält, der lange Stab wird so lang, dass er als Waffe nicht mehr zu benutzen ist. Ein kurzer Stab erhält die Reichweite mittel."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_BindungdesStabes.html",
    "name": "Bindung des Stabes",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "Bindungskosten": "2 permanente AsP",
      "Merkmal": "Objekt",
      "Publikation": "Regelwerk Seite 276",
      "Verbreitung": "Gildenmagier",
      "Volumen": "0 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Die Bindung des Stabes ist der erste Stabzauber, der auf einen Magierstab gewirkt wird. Mit ihm wird der Stab an den Magier gebunden. Zudem wird er unzerbrechlich, auch wenn er die Flexibilität des Holzes bewahrt. Einzig elementares Feuer, das heißer brennt als ein Drachenodem oder ein IGNIFAXIUS, oder aber gezielte Antimagie können ihn zerstören. Der Stab gilt von nun an als magische Waffe und kann nicht durch andere Mittel wie den ARCANOVI mit weiteren Zaubern belegt werden. Ein Magier kann immer nur einen Magierstab besitzen.<br/>Das Binden eines Stabes kostet den Magier einmalig 2 permanente AsP. Der Magier kann sich entscheiden, seine Verbindung zum Stab zu lösen, beispielsweise um einen neuen Stab an sich zu binden. Nach dem Tod eines Magiers verliert der Stab nach 24 Stunden die permanent gespeicherten AsP und jegliche Magie."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Astraltransfer.html",
    "name": "Astraltransfer",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP + 3 AsP pro übertragenem Punkt",
      "Merkmal": "Heilung",
      "Publikation": "Aventurische Magie Seite 20",
      "Verbreitung": "Gildenmagier",
      "Volumen": "3 Punkte",
      "Voraussetzungen": "keine",
      "Wirkung": "Der Zauberer kann einen anderen Zauberkundigen mit dem Stab berühren und ihm pro 5 KR 1 AsP übertragen. Die Übertragung erfolgt aus dem eigenen Vorrat des Zauberers im Verhältnis 3 zu 1."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/sturmlied.html",
    "name": "Sturmlied",
    "properties": {
      "AsP-Kosten": "2 AsP pro Minute",
      "Merkmal": "Elementar",
      "Probe": "MU/IN/KO",
      "Publikation": "Klingen der Nacht Seite 106",
      "Steigerungsfaktor": "B",
      "Talent": "Musizieren oder Singen",
      "Verbreitung": "Elfen",
      "Windgeschwindigkeit": "<ul><li>Stufe 1: Windstill</li><li>Stufe 2: Brise</li><li>Stufe 3: Sturm</li><li>Stufe 4: Orkan, jede KR 1 Aktion aufwenden und Probe auf <em>Körperbeherrschung (Balance)</em>, um nichts den Status <em>Liegend</em> zu erhalten.</li></ul>",
      "Wirkung": "Solange das Lied gespielt wird, steigt die Windgeschwindigkeit innerhalb eines Radius’ von QS x 10 Schritt um QS/2 Stufen (maximal ist Stufe 4 möglich). Der Spielende ist selbst nicht von den Auswirkungen betroffen."
    },
    "spellclass": "Verzerrtes Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Astralentzug.html",
    "name": "Astralentzug",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "2 AsP + 3 AsP pro entzogenem Punkt",
      "Merkmal": "Heilung",
      "Publikation": "Aventurische Magie Seite 21",
      "Verbreitung": "Gildenmagier",
      "Volumen": "4 Punkte",
      "Voraussetzungen": "Astraltransfer",
      "Wirkung": "Der Zauberer kann einen anderen Zauberkundigen mit dem Stab berühren und ihm pro 5 KR 1 AsP entziehen, die dieser in die Umgebung verströmt. Hierfür fallen pro entzogenem AsP für den Zaubernden Kosten in Höhe von 3 AsP an. Das Opfer bemerkt den Verlust ab 10 AsP automatisch."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SSF_Astralraub.html",
    "name": "Astralraub",
    "properties": {
      "AP-Wert": "20 Abenteuerpunkte",
      "AsP-Kosten": "3 AsP",
      "Merkmal": "Heilung",
      "Publikation": "Aventurische Magie Seite 21",
      "Verbreitung": "Gildenmagier",
      "Volumen": "6 Punkte",
      "Voraussetzungen": "Astralentzug",
      "Wirkung": "Der Zauberer kann einen anderen Zauberkundigen mit dem Stab berühren und ihm pro 5 KR 3 AsP rauben. Pro 3 geraubte AsP darf sich der Zauberer selbst 1 AsP gutschreiben, darf dabei jedoch seinen eigenen Maximalwert nicht überschreiten. Das Opferbemerkt den Verlust ab 5 AsP automatisch."
    },
    "spellclass": "Stabzauber",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Sklavenlied.html",
    "name": "Sklavenlied",
    "properties": {
      "AsP-Kosten": "4 AsP pro Minute",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH",
      "Publikation": "Klingen der Nacht Seite 106",
      "Steigerungsfaktor": "D",
      "Talent": "Musizieren",
      "Verbreitung": "Elfen",
      "Wirkung": "Innerhalb von QS Schritt befindliche Personen sind von dem Lied betroffen und folgen den gedanklichen Befehlen des Musizierenden, solange es gespielt wird. Betroffene werden diesen nachkommen, solange die Anweisungen dem Selbsterhaltungstrieb nicht im groben Maße widersprechen. Sie werden also einen Diebstahl begehen, Fragen beantworten und dem Zauberer im Kampf beistehen, nicht aber etwa von einer Klippe springen oder ihre eigenen Hände verspeisen. Sie vermögen zudem nichts Anderes zu tun, als das, was explizit befohlen wurde oder zur Erfüllung des Befehls notwendig ist. Betroffen sind nur solche Wesen, deren aufsummierte SK die QS des Lieds nicht übersteigen, beginnend bei den Wesen mit der niedrigsten SK (bei Gleichstand nach der Wahl des Shakagra). Negative SK zählt bei der Aufsummeriung als 0. Wer droht, von der Wirkung betroffen zu sein, kann eine Probe auf Willenskraft –3 ablegen, gelingt die Probe, so zählt die SK dennoch zur Gesamtsumme. Nachtalben sind gegen die Auswirkungen immun."
    },
    "spellclass": "Verzerrtes Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Schlachtlied.html",
    "name": "Schlachtlied",
    "properties": {
      "AsP-Kosten": "1 AsP pro Kampfrunde",
      "Merkmal": "Heilung",
      "Probe": "MU/IN/CH",
      "Publikation": "Klingen der Nacht Seite 105",
      "Steigerungsfaktor": "B",
      "Talent": "Musizieren oder Singen",
      "Verbreitung": "Elfen",
      "Wirkung": "Alle Personen innerhalb von QS x 3 Schritt, die auf der Seite des Musizierenden streiten, erhalten eine Erleichterung von 1 Punkt auf alle Attacken und Paraden. Der Spielende selbst ist nicht davon betroffen und kann, wie bei den Verzerrten Elfenliedern üblich, nur eine Bewegungshandlung durchführen."
    },
    "spellclass": "Verzerrtes Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/lieddesschmerz.html",
    "name": "Lied des Schmerzes",
    "properties": {
      "AsP-Kosten": "8 AsP pro 5 Minuten",
      "Merkmal": "Einfluss",
      "Probe": "MU/KL/IN",
      "Publikation": "Klingen der Nacht Seite 106",
      "Steigerungsfaktor": "D",
      "Talent": "Singen",
      "Verbreitung": "Elfen",
      "Wirkung": "Alle Lebewesen innerhalb von QS x 3 Schritt erhalten während des Spielens 2 Stufen des Zustands <em>Schmerz</em>. Betroffen sind nur solche Wesen, deren SK die QS des Lieds nicht übersteigen. Nachtalben sind gegen die Auswirkungen immun."
    },
    "spellclass": "Verzerrtes Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Kroetenschlag.html",
    "name": "Krötenschlag",
    "properties": {
      "AP-Wert": "25 Abenteuerpunkte",
      "AsP-Kosten": "alle AsP, mindestens aber 8 AsP",
      "Merkmal": "Verwandlung",
      "Publikation": "Regelwerk Seite 280",
      "Tierarten": "Kröten",
      "Verbreitung": "Hexen",
      "Wirkung": "Die Kröte wandelt auf einen Schlag ihre gesamten AsP in einen magischen Angriff um, der an seinem Ziel viele kleinste Verletzungen bewirkt. Die Kröte fügt dem nächststehenden Ziel 2W6+2 Trefferpunkte. Rüstungen schützen nicht vor diesem Vertrautentrick.",
      "Wirkungsdauer": "sofort"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Tarnung.html",
    "name": "Tarnung",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP pro 5 Minuten",
      "Merkmal": "Verwandlung",
      "Publikation": "Regelwerk Seite 280",
      "Tierarten": "Kröte",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute nimmt die Farbe der Umgebung an und verschmilzt so mit dem Hintergrund. Proben auf <em>Verbergen (sich Verstecken) </em>sind für ihn um 2 erleichtert. Die Tarnung wirkt nur, solange sich das Tier nicht bewegt.",
      "Wirkungsdauer": "aufrechterhaltend"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/kako.html",
    "name": "Kakophonie des Wahnsinns",
    "properties": {
      "AsP-Kosten": "8 AsP pro 5 Minuten",
      "Merkmal": "Einfluss",
      "Probe": "MU/KL/CH",
      "Publikation": "Klingen der Nacht Seite 105",
      "Steigerungsfaktor": "C",
      "Talent": "Musizieren",
      "Verbreitung": "Elfen",
      "Wirkung": "Solange das Lied gespielt wird, erhalten alle Lebewesen im Radius von QS x 3 Schritt 2 Stufen des Zustands <em>Verwirrung</em>. Betroffen sind nur solche Wesen, deren SK die QS des Liedes nicht übersteigen. Nachtalben sind gegen die Auswirkungen immun."
    },
    "spellclass": "Verzerrtes Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Stimmungssinn.html",
    "name": "Stimmungssinn",
    "properties": {
      "AP-Wert": "20 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP pro 5 Minuten",
      "Merkmal": "Hellsicht",
      "Publikation": "Regelwerk Seite 280",
      "Tierarten": "alle",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute erkennt die Gefühle und Stimmungen einer Person und übermittelt sie der Hexe. Zwei Hexen können so in begrenztem Rahmen stille Zwiesprache halten, indem ihre Vertrautentiere ihnen gegenseitig die Gefühle schildern. Gegebenenfalls kann der Spielleiter eine Erleichterung von 1 bei Proben auf <em>Menschenkenntnis </em>zugestehen, um die betroffene Person zu durchschauen.",
      "Wirkungsdauer": "aufrechterhaltend"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Kraftraub.html",
    "name": "Kraftraub",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "3 AsP",
      "Merkmal": "Heilung",
      "Publikation": "Regelwerk Seite 280",
      "Tierarten": "alle",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute kann einer Person während einer Ruhephase deren Regeneration entziehen, wenn er sie beim Schlafen beobachtet. Das Tier muss das Opfer die ganze Schlafphase beobachten und entzieht ihm dafür die ganze Regeneration der Regenerationsphase. Die entzogene Lebensenergie kann er seiner eigenen hinzufügen, wenn ihm noch Lebenspunkte fehlen. Ansonsten verfällt sie. Die Person hat während der Beobachtungsphase Alpträume von dem Vertrautentier. Es wird keine AE oder KE gestohlen.",
      "Wirkungsdauer": "aufrechterhaltend"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Kroetengift.html",
    "name": "Krötengift",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "3 AsP",
      "Merkmal": "Verwandlung",
      "Publikation": "Regelwerk Seite 280",
      "Tierarten": "Kröten",
      "Verbreitung": "Hexen",
      "Wirkung": "Die Kröte sondert statt des sonst bei Kröten üblichen Gifts ein magisches Hautgift ab, das jeden, der sie berührt, mit dem Fluch Warzen Sprießen schlägt. Der Warzen-Fluch wirkt in diesem Fall drei Tage.",
      "Wirkungsdauer": "5 Kampfrunden"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Hexensinn.html",
    "name": "Hexensinn",
    "properties": {
      "AP-Wert": "beherrschen Vertrautentiere von Anfang an",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "Hellsicht",
      "Publikation": "Regelwerk Seite 279",
      "Tierarten": "alle",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute kann über eine beliebige Distanz hinweg die Richtung ausmachen, in der sich die Hexe befindet. Nur göttliches Wirken und Antimagie gegen Hellsicht können diese Verbindung stören.",
      "Wirkungsdauer": "eine halbe Stunde"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Fluchbote.html",
    "name": "Fluchbote",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "je nach Fluch",
      "Publikation": "Regelwerk Seite 279",
      "Tierarten": "alle",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute überbringt einen Fluch an ein von der Hexe ausgewähltes Opfer. Er muss hierzu bis zu 7 Schritt an sein Ziel herankommen und es anstarren. Sobald er den Fluch auf das Opfer gewirkt hat, übermittelt er  telepathisch die mit dem Fluch verbundenen Worte der Hexe, die die Bedingungen erklären, ob und wie der Fluch gelöst werden kann.",
      "Wirkungsdauer": "sofort"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/schutzpfeil.html",
    "name": "Schutz wider Pfeilhagel",
    "properties": {
      "AP-Wert": "8 Abenteuerpunkte",
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Keines",
      "Publikation": "Die Streitenden Königreiche Seite 172",
      "Verbreitung": "Nostria",
      "Wirkung": "Auf Kleidung gemalt, oder besser noch in den Stoff gewebt, vermag dieses Ahnenzeichen den Träger vor Fernkampfangriffen zu schützen. Alle Proben auf Fernkampfangriffe gegen ihn sind um 1 erschwert."
    },
    "spellclass": "Ahnenzeichen",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/namensbogen.html",
    "name": "Namensbogen",
    "properties": {
      "AP-Wert": "8 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Keines",
      "Publikation": "Die Streitenden Königreiche Seite 172",
      "Verbreitung": "Nostria",
      "Wirkung": "Zunächst muss auf einen Bogen ein Ahnenzeichen mit dem Namen des Schützen versehen werden. Dieser Schütze kann eine Erschwernis von 1 bei Schüssen mit diesem Bogen ignorieren. Darüber hinausgehende Erschwernisse gelten jedoch weiterhin."
    },
    "spellclass": "Ahnenzeichen",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/windfang.html",
    "name": "Windfang",
    "properties": {
      "AP-Wert": "8 Abenteuerpunkte",
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Keines",
      "Publikation": "Die Streitenden Königreiche Seite 172",
      "Verbreitung": "Nostria",
      "Wirkung": "Dieses Ahnenzeichen kann auf Segeltuch eingewebt oder aufgemalt werden. Es lockt freie Elementarwesen des Windes an, die dem Schiff zu größerer Geschwindigkeit verhelfen. Die GS des Schiffes wird dadurch um 10 % erhöht."
    },
    "spellclass": "Ahnenzeichen",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_Dingeerspueren.html",
    "name": "Dinge erspüren",
    "properties": {
      "AP-Wert": "10 Abenteuerpunkte",
      "AsP-Kosten": "1 AsP",
      "Merkmal": "Hellsicht",
      "Publikation": "Regelwerk Seite 279",
      "Tierarten": "alle",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute kann ein Objekt ausfindig machen, das längere Zeit im Besitz der Hexe war und zu dem sie eine emotionale Bindung hat. Üblicherweise übermittelt die Hexe ihrem Vertrauten durch Zwiegespräch, welches Objekt er suchen soll. Befindet sich das Objekt im Umkreis von sieben Meilen, kann der Vertraute die Richtung ausmachen, in der sich das Objekt befindet, jedoch nicht zwingend den exakten Weg, über den man zu dem Objekt gelangt.",
      "Wirkungsdauer": "eine halbe Stunde"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/VSF_ErsterunterGleichen.html",
    "name": "Erster unter Gleichen",
    "properties": {
      "AP-Wert": "5 Abenteuerpunkte",
      "AsP-Kosten": "3 AsP",
      "Merkmal": "Einfluss",
      "Publikation": "Regelwerk Seite 279",
      "Tierarten": "alle",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Vertraute kann Tiere seiner Art einschüchtern und vertreiben, solange sie nicht größer sind als er selbst.",
      "Wirkungsdauer": "eine halbe Stunde"
    },
    "spellclass": "Vertrautentrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/harterkern.html",
    "name": "Harter Kern",
    "properties": {
      "AP-Wert": "2 Abenteuerpunkte",
      "AsP-Kosten": "2 AsP",
      "Merkmal": "Keines",
      "Publikation": "Die Streitenden Königreiche Seite 172",
      "Verbreitung": "Nostria",
      "Wirkung": "Ein Gegenstand von maximal 5 Stein Gewicht erhält die doppelte Anzahl seiner üblichen Strukturpunkte."
    },
    "spellclass": "Ahnenzeichen",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/leichtwieeine.html",
    "name": "Leicht wie eine Feder",
    "properties": {
      "AP-Wert": "3 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Keines",
      "Publikation": "Die Streitenden Königreiche Seite 172",
      "Verbreitung": "Nostria",
      "Wirkung": "Wer auf einem Truhe, einer Kiste oder einem Korb dieses Ahnenzeichen anbringt, hat weniger zu tragen. Maximal darf ein solches Behältnis 4 Raumschritt bemessen. Das Gewicht von Gegenständen, die in diesen Behältern transportiert werden, ist 20 % leichter als üblich."
    },
    "spellclass": "Ahnenzeichen",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/feinstesleder.html",
    "name": "Feinstes Leder",
    "properties": {
      "AP-Wert": "4 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Keines",
      "Publikation": "Die Streitenden Königreiche Seite 172",
      "Verbreitung": "Nostria",
      "Wirkung": "Wird eine Lederrüstung mit diesem Ahnenzeichen versehen, können die zusätzlichen Abzüge auf GS und INI ignoriert werden."
    },
    "spellclass": "Ahnenzeichen",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/fischreichtum.html",
    "name": "Fischreichtum",
    "properties": {
      "AP-Wert": "3 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Keines",
      "Publikation": "Die Streitenden Königreiche Seite 172",
      "Verbreitung": "Nostria",
      "Wirkung": "Dieses Ahnenzeichen kann auf eine Angel, ein Netz oder eine Reuse gezeichnet oder geschnitzt werden. Zu Beginn muss dabei der Fluss oder See benannt werden, in dem gefischt wird. Wird das mit dem Ahnenzeichen versehene Gerät in dem benannten Gewässer benutzt, erhöht sich bei einer gelungenen Probe auf <em>Fischen &amp; Angeln (Süßwassertiere)</em> die Anzahl der erbeuteten Rationen pro Tag um 1 QS."
    },
    "spellclass": "Ahnenzeichen",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/diebesschreck.html",
    "name": "Diebesschreck",
    "properties": {
      "AP-Wert": "4 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Keines",
      "Publikation": "Die Streitenden Königreiche Seite 172",
      "Verbreitung": "Nostria",
      "Wirkung": "Ein Schloss, das mit diesem Ahnenzeichen versehen ist, sorgt zum einen dafür, dass die Teilproben auf FF beim <em>Schlösserknacken</em> um 1 erschwert sind, zum anderen verletzt sich der Dieb bei einer misslungenen Probe und erleidet 1W3 SP."
    },
    "spellclass": "Ahnenzeichen",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_W%C3%BCrze.html",
    "name": "Würze",
    "properties": {
      "Merkmal": "Illusion",
      "Publikation": "Die Streitenden Königreiche Seite 161",
      "Reichweite": "1 Schritt",
      "Verbreitung": "Hexen",
      "Wirkung": "Die Hexe kann mit diesem Zaubertrick eine einfache Speise, etwa eine Suppe, würzen, auch ohne über passende Gewürze wie Salz und Pfeffer zu verfügen. Ob die Speise gut gewürzt ist oder z. B. versalzen, hängt weiterhin von den Kochkünsten der Hexe ab. Die Hexe kann nur den Geschmack von Gewürzen erzeugen, die sie selbst schon einmal gekostet hat.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Objekte (Essen)"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Wasserhoehe.html",
    "name": "Wasserhöhe",
    "properties": {
      "Merkmal": "Hellsicht",
      "Publikation": "Aventurische Magie 114",
      "Reichweite": "4 Schritt",
      "Verbreitung": "Gildenmagier (Thorwaler)",
      "Wirkung": "Der Zauberer kann sagen, ob ein Gewässer vor ihm tiefer ist, als er selbst groß ist.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Trocken.html",
    "name": "Trocken",
    "properties": {
      "Merkmal": "Elementar",
      "Publikation": "Regelwerk Seite 287",
      "Reichweite": "selbst",
      "Verbreitung": "Allgemein",
      "Wirkung": "Der Zaubernde und seine Kleidung sind etwa 5 Minuten vor Nässe, beispielsweise durch Regen oder Schnee, geschützt. Nasse Kleidung wird durch den Trick nicht wieder trocken.",
      "Wirkungsdauer": "5 Minuten",
      "Zielkategorie": "Objekt und Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_WeisheitdesLeytfadens.html",
    "name": "Weisheit des Leytfadens",
    "properties": {
      "Merkmal": "Illusion",
      "Publikation": "Aventurische Magie 114",
      "Reichweite": "selbst",
      "Verbreitung": "Gildenmagier (Alrik Dagabor)",
      "Wirkung": "Die Hörer innerhalb einer Reichweite von 8 Schritt Radius um den Zauberer vernehmen eine Stimme, die ihnen eine Passage aus einem Zauberbuch vorliest. Der Text muss dem Zaubernden bekannt sein. Die Passage kann er selbst auswählen, sie muss aber innerhalb von 10 Sekunden vorlesbar sein. Nur die Personen, die die Passage hören sollen, hören sie auch, alle übrigen bekommen von der Belehrung nichts mit.",
      "Wirkungsdauer": "max. 10 Sekunden",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Signatur.html",
    "name": "Signatur",
    "properties": {
      "Merkmal": "Objekt",
      "Publikation": "Regelwerk Seite 287",
      "Reichweite": "Berührung",
      "Verbreitung": "Allgemein",
      "Wirkung": "Auf einem leblosen Objekt nach Wahl des Zaubernden erscheint eine Glyphe oder ein Symbol und verbleibt dauerhaft. Der Zaubernde muss das Objekt berühren. Das Symbol wirkt wie gemalt und kann weggeputzt werden. Mittels dieses Tricks kann man jeweils nur eine Art von Zeichen auftauchen lassen (z. B. ein Piktogramm).",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Objekt"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_UnheimlichesLachen.html",
    "name": "Unheimliches Lachen",
    "properties": {
      "Merkmal": "Einfluss",
      "Publikation": "Aventurische Magie 114",
      "Reichweite": "selbst",
      "Verbreitung": "Gildenmagier (Demirion Ophenos), Hexen",
      "Wirkung": "Das Lachen des Zauberers hört sich bedrohlich und unheimlich an. Weitere regeltechnische Auswirkungen hat das Lachen jedoch nicht.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Waffens%C3%A4uberung.html",
    "name": "Waffensäuberung",
    "properties": {
      "Merkmal": "Objekt",
      "Publikation": "Die Streitenden Königreiche Seite 161",
      "Reichweite": "Berührung",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Dieser Zaubertrick reinigt eine beliebige Waffe, die der Zauberer berührt, vollständig von Flugrost, Blut und anderen Verschmutzungen.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Objekte (Waffen)"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Schminken.html",
    "name": "Schminken",
    "properties": {
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie 113",
      "Reichweite": "selbst",
      "Verbreitung": "Gildenmagier, Hexen, Scharlatane, Zaubertänzer",
      "Wirkung": "Durch diesen Zaubertrick tragen Schminkutensilien die Schminke so wie gewünscht auf, ohne dass der Zauberer seine Hände benutzen muss. Das Ziel muss in einem ruhigen Zustand verharren, bis der Schminkvorgang vollendet ist.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Schnipsen.html",
    "name": "Schnipsen",
    "properties": {
      "Merkmal": "Telekinese",
      "Publikation": "Regelwerk Seite 287",
      "Reichweite": "4 Schritt",
      "Verbreitung": "Allgemein",
      "Wirkung": "Eine kurze telekinetische Entladung mit einer Reichweite von 4 Schritt, die beispielsweise eine Münze von einem Tisch fegen kann. Sie ist nicht stark genug, um eine Glasflasche zu zerbrechen, genügt aber für eine Ohrfeige.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Objekt und Wesen"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_T%C3%A4towierung.html",
    "name": "Tätowierung",
    "properties": {
      "Merkmal": "Verwandlung",
      "Publikation": "Aventurische Magie 113",
      "Reichweite": "Berührung",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Auf dem Körper des Verzauberten entsteht eine maximal 10 Halbfinger auf 10 Halbfinger große Tätowierung nach Wunsch des Zauberers. Bei den Tätowierungen muss es sich um einfache Runen oder einfache Muster handeln.",
      "Wirkungsdauer": "1 Stunde",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Schlangenh%C3%A4nde.html",
    "name": "Schlangenhände",
    "properties": {
      "Merkmal": "Verwandlung",
      "Publikation": "Regelwerk Seite 287",
      "Reichweite": "selbst",
      "Verbreitung": "Allgemein",
      "Wirkung": "Die Hand- und Fingerknochen des Zaubernden werden sehr flexibel, sodass sie durch enge Öffnungen gezwängt werden können. Die Wirkung hält 5 Minuten an.",
      "Wirkungsdauer": "5 Minuten",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Regenbogenaugen.html",
    "name": "Regenbogenaugen",
    "properties": {
      "Merkmal": "Illusion",
      "Publikation": "Regelwerk Seite 287",
      "Reichweite": "selbst",
      "Verbreitung": "Allgemein",
      "Wirkung": "Die Augenfarbe des Zaubernden ändert sich für 5 Minuten. Es sind unnatürliche Farben möglich.",
      "Wirkungsdauer": "5 Minuten",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Sandfigur.html",
    "name": "Sandfigur",
    "properties": {
      "Merkmal": "Elementar",
      "Publikation": "Aventurische Magie 113",
      "Reichweite": "1 Schritt",
      "Verbreitung": "Gildenmagier (Vadif)",
      "Wirkung": "Eine Handvoll Sand beginnt sich zu einer ca. 10 Halbfinger großen Figur zu formen, die nach dem Willen des Zauberers kleine Tricks zur Unterhaltung aufführt. Die Sandfigur muss in einem Radius von 10 Halbfingern verbleiben.",
      "Wirkungsdauer": "1 Minute",
      "Zielkategorie": "Objekte (Sand)"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SF_Ordentlich.html",
    "name": "Ordentlich",
    "properties": {
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie 113",
      "Reichweite": "selbst",
      "Verbreitung": "Gildenmagier (Halle der Antimagie zu Kuslik)",
      "Wirkung": "Dieser Zaubertrick sorgt dafür, dass die Kleidung einer Person ordentlich sitzt.",
      "Wirkungsdauer": "6 Stunden",
      "Zielkategorie": "Objekte (Kleidung)"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Pflanzenempathie.html",
    "name": "Pflanzenempathie",
    "properties": {
      "Merkmal": "Hellsicht",
      "Publikation": "Die Streitenden Königreiche Seite 161",
      "Reichweite": "Berührung",
      "Verbreitung": "Druiden",
      "Wirkung": "Berührt der Druide eine Pflanze, kann er sich ein Bild von ihrem Gesundheitszustand machen und herausfinden, ob sie von Schädlingen befallen, vergiftet wurde oder Ähnliches.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Pflanzen"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Selbstarchivierung.html",
    "name": "Selbstarchivierung",
    "properties": {
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie 113",
      "Reichweite": "16 Schritt",
      "Verbreitung": "Gildenmagier (Lowangen Verwandlung)",
      "Wirkung": "Ein aus einer Bibliothek geliehenes Buch fliegt wieder dorthin, woher es der Zauberer aus dem Regal entnommen hat. Dieser Zaubertrick funktioniert nur bei Büchern, die der Zauberer selbst ausgeliehen und aus der Bibliothek entnommen hat.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Objekte (Bücher)"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Rohrstock.html",
    "name": "Rohrstock",
    "properties": {
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie 113",
      "Reichweite": "4 Schritt",
      "Verbreitung": "Gildenmagier (Akademie Schwert &amp; Stab zu Gareth)",
      "Wirkung": "Dieser Zaubertrick sorgt dafür, dass jemand einen kleinen Schlag auf die Finger abbekommt, ganz so, als ob ihn jemand mit einem Rohrstock geschlagen hat. Schaden erleidet das Ziel dadurch nicht.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Lockruf.html",
    "name": "Lockruf",
    "properties": {
      "Merkmal": "Einfluss",
      "Publikation": "Regelwerk Seite 287",
      "Reichweite": "4 Schritt",
      "Verbreitung": "Allgemein",
      "Wirkung": "Ein kleines Tier (Eichhörnchen, Taube) kommt neugierig auf den Zaubernden zu. Die Wirkung hält 5 Minuten an.",
      "Wirkungsdauer": "5 Minuten",
      "Zielkategorie": "Tiere"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Luftsto%C3%9F.html",
    "name": "Luftstoß",
    "properties": {
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie 113",
      "Reichweite": "selbst",
      "Verbreitung": "Elfen, Gildenmagier",
      "Wirkung": "Ein kleiner Lufthauch bläst Kerzen und ähnlich große Flammen innerhalb eines Radius von 8 Schritt um den Zauberer aus.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Objekte (kleine Flammen)"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Leselampe.html",
    "name": "Leselampe",
    "properties": {
      "Merkmal": "Elementar",
      "Publikation": "Die Streitenden Königreiche Seite 160",
      "Reichweite": "1 Schritt",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Aus dem rechten Zeigefinger des Magiers leuchtet ein schwaches Licht. Das Licht ist nicht hell genug, um Sichtmodifikatoren zu ändern, aber es reicht aus, um in der Dunkelheit ein Buch zu lesen.",
      "Wirkungsdauer": "30 Minuten",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Nagellack.html",
    "name": "Nagellack",
    "properties": {
      "Merkmal": "Verwandlung",
      "Publikation": "Aventurische Magie 113",
      "Reichweite": "selbst",
      "Verbreitung": "Gildenmagier (Al’Anfa), Hexen",
      "Wirkung": "Durch diesen Trick kann der Zauberer beliebig viele seiner Finger- oder Fußnägel in einer beliebigen Farbe lackieren.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Hintergrundmusik.html",
    "name": "Hintergrundmusik",
    "properties": {
      "Merkmal": "Illusion",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "selbst",
      "Verbreitung": "Gildenmagier (Zorgan), Zauberbarden",
      "Wirkung": "In einem Radius von 16 Schritt um den Zauberer ist eine angenehme, zum Ort passende, Hintergrundmusik zu hören. Das Stück kann der Zauberer selbst bestimmten, es muss aber zum Ambiente passen.",
      "Wirkungsdauer": "5 Minuten",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Kehrbesen.html",
    "name": "Kehrbesen",
    "properties": {
      "Merkmal": "Telekinese",
      "Publikation": "Die Streitenden Königreiche Seite 160",
      "Reichweite": "8 Schritt",
      "Verbreitung": "Hexen",
      "Wirkung": "Die Hexe kann einem beliebigen Besen innerhalb der Reichweite befehlen, den Boden in einem Radius von 8 Schritt zu kehren. Der Besen weicht dabei Hindernissen aus und versucht Lebewesen der Größenkategorie klein und größer aus dem Weg zu gehen. Wird der Besen berührt, endet der Zaubertrick augenblicklich.",
      "Wirkungsdauer": "30 Minuten",
      "Zielkategorie": "Objekte (Besen)"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Handw%C3%A4rmer.html",
    "name": "Handwärmer",
    "properties": {
      "Merkmal": "Elementar",
      "Publikation": "Regelwerk Seite 286",
      "Reichweite": "Berührung",
      "Verbreitung": "Allgemein",
      "Wirkung": "Dieser Zaubertrick hält die Temperatur eines maximal faustgroßen Objektes konstant, so lange es in der Hand gehalten wird, maximal jedoch 5 Minuten.",
      "Wirkungsdauer": "5 Minuten",
      "Zielkategorie": "Objekt"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Haarpracht.html",
    "name": "Haarpracht",
    "properties": {
      "Merkmal": "Verwandlung",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "selbst",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Zauberer kann die Farbe seines Haupthaars nach Belieben bestimmen. Gleiches gilt für die Länge, solange sie 1 Schritt nicht überschreitet. Schneidet der Zauberer die durch den Zaubertrick gewachsenen Haare ab, lösen sich diese sofort auf. Nachwachsende Haare sind von der Veränderung nicht betroffen.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Insektenbann.html",
    "name": "Insektenbann",
    "properties": {
      "Merkmal": "Verwandlung",
      "Publikation": "Aventurische Magie 113",
      "Reichweite": "selbst",
      "Verbreitung": "Hexen, Gildenmagier (Sinoda)",
      "Wirkung": "Die Zauberin wird nicht von einfachen Insekten wie Fliegen oder Mücken belästigt. Der Zaubertrick schützt nicht vor Moskitos oder anderen Insekten, die bei Helden Schaden verursachen, Krankheiten übertragen oder ihnen gefährlich werden können. Die Insekten müssen der Größenkategorie winzig angehören.",
      "Wirkungsdauer": "6 Stunden",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_HellerStern.html",
    "name": "Heller Stern",
    "properties": {
      "Merkmal": "Hellsicht",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "8 Schritt",
      "Verbreitung": "Gildenmagier (Töchter Niobaras)",
      "Wirkung": "Der Zauberer zeigt auf einen Stern oder ein Sternzeichen am Himmel, der daraufhin kurz für den Zauberer und das Ziel aufleuchtet.",
      "Wirkungsdauer": "5 Sekunden",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_GutenMorgen.html",
    "name": "Guten Morgen",
    "properties": {
      "Merkmal": "Einfluss",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "4 Schritt",
      "Verbreitung": "Gildenmagier (Hesindius Lichtblick)",
      "Wirkung": "Das Ziel des Zaubertricks erwidert freundlich den Gruß des Zauberers. Der Trick funktioniert nur bei Personen, die dem Zauberer zumindest neutral gegenüber eingestellt sind.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Gru%C3%9Fworte.html",
    "name": "Grußworte",
    "properties": {
      "Merkmal": "Einfluss",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "8 Schritt",
      "Verbreitung": "Elfen, Gildenmagier (Donnerbach)",
      "Wirkung": "Mit diesem Zaubertrick kann der Zauberer telepathisch jemandem einige Grußworte übermitteln.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Hexenblick.html",
    "name": "Hexenblick",
    "properties": {
      "Merkmal": "Hellsicht",
      "Publikation": "Die Streitenden Königreiche Seite 160",
      "Reichweite": "8 Schritt",
      "Verbreitung": "ausschließlich Hexen",
      "Wirkung": "Mittels Hexenblick kann eine Hexe herausfinden, ob eine andere Person ebenfalls die hexische Tradition beherrscht. Sollte das ausgewählte Ziel die Tradition besitzen, so leuchten ihre Augen kurz Purpur auf, was aber nur für die zaubernde Hexe sichtbar ist.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Feuerfinger.html",
    "name": "Feuerfinger",
    "properties": {
      "Merkmal": "Elementar",
      "Publikation": "Regelwerk Seite 286",
      "Reichweite": "selbst",
      "Verbreitung": "Allgemein",
      "Wirkung": "Eine kleine Flamme entsteht etwa einen Zentimeter über einem Finger des Zaubernden. Sie brennt bis zu 5 Minuten. Der Zaubertrick schützt die Hand nicht vor der Hitze der Flamme.",
      "Wirkungsdauer": "5 Minuten",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Gl%C3%BCcksgriff.html",
    "name": "Glücksgriff",
    "properties": {
      "Merkmal": "Hellsicht",
      "Publikation": "Regelwerk Seite 286",
      "Reichweite": "selbst",
      "Verbreitung": "Allgemein",
      "Wirkung": "Der Zaubernde kann aus einer überschaubaren Menge Objekte gezielt das gewünschte herausgreifen. Er kann aus einem Kartenstapel eine bestimmte Karte ziehen, aus einem Beutel eine gewünschte Münze oder von einem Schlüsselbund den richtigen Schlüssel. Er muss dazu das gewünschte Objekt kennen und dieses muss auch wirklich an dem Ort vorhanden sein.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Objekt"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Duft.html",
    "name": "Duft",
    "properties": {
      "Merkmal": "Illusion",
      "Publikation": "Regelwerk Seite 286",
      "Reichweite": "selbst",
      "Verbreitung": "Allgemein",
      "Wirkung": "Der Zauberer riecht für etwa 5 Minuten nach einem Parfüm oder einem anderen für ihn angenehmen Geruch.",
      "Wirkungsdauer": "5 Minuten",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Feenfuesse.html",
    "name": "Feenfüße",
    "properties": {
      "Merkmal": "Telekinese",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "16 Schritt",
      "Verbreitung": "keine",
      "Wirkung": "Einem maximal 1 Stein wiegenden Objekt wachsen ein oder mehrere Paar kurze Beine, die es auf Befehl des Zauberers umhertragen.",
      "Wirkungsdauer": "5 Minuten",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Bl%C3%BCtenduft.html",
    "name": "Blütenduft",
    "properties": {
      "Merkmal": "Illusion",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "selbst",
      "Verbreitung": "Elfen, Gildenmagier (Gerasim)",
      "Wirkung": "In einem Radius von 16 Schritt um den Magier verströmt die Umgebung einen angenehmen Geruch nach Blüten und Waldesgrün.",
      "Wirkungsdauer": "1 Minute",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Ehrf%C3%BCrchtigesVerhalten.html",
    "name": "Ehrfürchtiges Verhalten",
    "properties": {
      "Merkmal": "Einfluss",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "8 Schritt",
      "Verbreitung": "Gildenmagier (Fasar Beherrschung)",
      "Wirkung": "Ein Diener, Bauer oder eine andere, gegenüber dem Zauberer mit Ehrfurcht erfüllte Person weicht ihm sich verneigend aus. Personen, auf die dies nicht zutrifft, sind von dem Zaubertrick nicht betroffen.",
      "Wirkungsdauer": "30 Sekunden",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Bauchreden.html",
    "name": "Bauchreden",
    "properties": {
      "Merkmal": "Illusion",
      "Publikation": "Regelwerk Seite 286",
      "Reichweite": "8 Schritt",
      "Verbreitung": "Allgemein",
      "Wirkung": "Ein einzelnes Wort oder ein anderes kurzes, nicht allzu lautes Geräusch nach Wahl erklingt bis zu 8 Schritt entfernt vom Zaubernden.",
      "Wirkungsdauer": "1 Aktion",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_BeerenundN%C3%BCsse.html",
    "name": "Beeren & Nüsse",
    "properties": {
      "Merkmal": "Einfluss",
      "Publikation": "Die Streitenden Königreiche Seite 159",
      "Reichweite": "64 Schritt",
      "Verbreitung": "Druiden",
      "Wirkung": "Mit Hilfe dieses Zaubertricks sendet der Druide einen Befehl an ein nahes, kleines Tier (z. B. Eichhörnchen, Amsel), das ihm eine Nuss oder einige Beeren bringt. Zum Sattwerden reicht dies jedoch nicht aus, erst 30 Anwendungen des Zaubertricks ergeben eine Ration Nahrung.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Tiere"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Bartwuchs.html",
    "name": "Bartwuchs",
    "properties": {
      "Merkmal": "Verwandlung",
      "Publikation": "Die Streitenden Königreiche Seite 159",
      "Reichweite": "selbst",
      "Verbreitung": "Druiden",
      "Wirkung": "Der Druide kann seinen Bart augenblicklich auf bis zu 1 Schritt Länge wachsen lassen. Normales und magisches Haar unterscheidet sich optisch nicht voneinander. Schneidet der Druide den durch den Zaubertrick gewachsenen Bart ab, lösen sich die abgeschnittenen Haare sofort auf.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Beruhigung.html",
    "name": "Beruhigung",
    "properties": {
      "Merkmal": "Heilung",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "Berührung",
      "Verbreitung": "Gildenmagier (Perricum)",
      "Wirkung": "Ein schreiender Patient wird für kurze Zeit still, seine Angst verschwindet in dieser Zeit aber nicht. Das Ziel muss vorher den Status <em>Fixiert </em>erlitten haben, damit der Zaubertrick funktioniert.",
      "Wirkungsdauer": "1 Stunde",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/HSF_Warzensprie%C3%9Fen.html",
    "name": "Warzen sprießen",
    "properties": {
      "AsP-Kosten": "7 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "IN/FF/KO (modifiziert durch ZK)",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Dem Opfer wachsen innerhalb einiger Minuten dicke Warzen im Gesicht und an den Händen und verleihen ihm so eine Stufe des Nachteils Hässlich. Der Vorteil Gutaussehend wird hierdurch zeitweise Hässlich.",
      "Wirkungsdauer": "QS x 3 in Tagen"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_AranischeRasur.html",
    "name": "Aranische Rasur",
    "properties": {
      "Merkmal": "Verwandlung",
      "Publikation": "Aventurische Magie 112",
      "Reichweite": "Berührung",
      "Verbreitung": "Gildenmagier (Khelbara ay Baburia)",
      "Wirkung": "Körperhaare werden durch diesen Zaubertrick entfernt. Der Zauberer kann festlegen, dass bestimmte Körperstellen nicht enthaart werden (beispielsweise, damit Augenbrauen oder ein Bart nicht entfernt werden).",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/1178.html",
    "name": "Unfruchtbarkeit",
    "properties": {
      "AsP-Kosten": "14 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "IN/FF/KO (modifiziert durch ZK)",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Das Opfer, Person oder Tier, ist nicht mehr in der Lage, Nachkommen zu zeugen oder zu gebären. Schwangere Wesen erleiden oft eine Miss- oder Totgeburt.",
      "Wirkungsdauer": "QS x 3 in Wochen"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/HSF_Pestilenz.html",
    "name": "Pestilenz",
    "properties": {
      "AsP-Kosten": "Stufe der Krankheit in AsP",
      "Merkmal": "Dämonisch",
      "Probe": "MU/CH/GE (modifiziert durch ZK)",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Das Opfer wird von der Hexe mit einer ihr bekannten Krankheit infiziert, maximal jedoch mit einer Krankheitsstufe gleich dem Fertigkeitswert des Fluches. Ab der Infektion verläuft die Krankheit wie normal, ist allerdings nicht ansteckend. Nicht wählbar sind magische Erkrankungen wie Duglumspest.",
      "Wirkungsdauer": "bis zum Ende der Krankheit, maximal aber QS x 3 in Tagen"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZT_Abk%C3%BChlung.html",
    "name": "Abkühlung",
    "properties": {
      "Merkmal": "Elementar",
      "Publikation": "Regelwerk Seite 286",
      "Reichweite": "Berührung",
      "Verbreitung": "Allgemein",
      "Wirkung": "Der Zauberer senkt die Temperatur einer kleinen Menge Flüssigkeit (maximal ein Becher voll) um bis zu 10 Grad.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Objekt"
    },
    "spellclass": "Zaubertrick",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/HSF_Schlafrauben.html",
    "name": "Schlaf rauben",
    "properties": {
      "AsP-Kosten": "14 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/CH (modifiziert durch SK)",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Das Opfer kann nicht schlafen. Wenn es doch für einige Sekunden einschläft, wird es von Alpträumen wieder aufgeschreckt. Regeneration ist in diesem Zustand nicht möglich. Es reagiert genauso wie andere Menschen, die lange Zeit wach gehalten werden, wird also fahrig, reizbar und erleidet nach einigen Tagen Sinnestäuschungen. Pro zwei Tagen ohne Schlaf erhält das Opfer eine Stufe <em>Verwirrung</em>, die erst abklingt, wenn es wieder schlafen kann.",
      "Wirkungsdauer": "QS x 3 in Tagen"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/HSF_PechandenHalswuenschen.html",
    "name": "Pech an den Hals wünschen",
    "properties": {
      "AsP-Kosten": "7 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/CH (modifiziert durch SK)",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Neben der 20 gilt nun auch die 19 als Patzer. Für Patzer bei Fertigkeitsproben reicht es so, wenn zwei Würfel eine 19 oder mehr zeigen. Außerdem zerbricht das Opfer aus Versehen Gegenstände, stolpert über Hindernisse, vergisst Verabredungen oder tritt bei Gesprächen in Fettnäpfchen. Details entscheidet der Meister.",
      "Wirkungsdauer": "QS x 3 in Tagen"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/HSF_Hexenschuss.html",
    "name": "Hexenschuss",
    "properties": {
      "AsP-Kosten": "14 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "IN/FF/KO (modifiziert durch ZK)",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Das Opfer erleidet plötzlich einen starken Schmerz im Rücken oder im Kopf, je nach Wahl der Hexe. Durch den Hexenschuss erleidet das Opfer eine Stufe des Zustands <em>Schmerz</em>.",
      "Wirkungsdauer": "QS x 3 in Stunden"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/HSF_Hagelschlag.html",
    "name": "Hagelschlag",
    "properties": {
      "AsP-Kosten": "21 AsP",
      "Merkmal": "Elementar",
      "Probe": "MU/IN/CH",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Auf einer Fläche von bis zu (QS x 20.000) Rechtschritt geht ein schwerer Hagelsturm nieder. Je nach Region kann auch ein Schnee- oder Sandsturm die Fläche verheeren. Solche Stürme können Ernten zerstören, Dächer abdecken und bei ungeschützten Tieren und Personen 2W6 TP Schaden pro 5 Minuten verursachen.",
      "Wirkungsdauer": "QS x 15 Minuten"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/reegregre.html",
    "name": "Bann- und Schutzkreis gegen Elementargeister",
    "properties": {
      "AP-Wert": "5 Abenteuerpunkte",
      "AsP-Kosten": "4 AsP",
      "Bannkreis": "Der erste Elementargeist, der sich dem Kreis auf 7 Schritt nähert, wird in ihn hineingezogen und kann ihn während der Wirkungsdauer nicht mehr verlassen.",
      "Merkmal": "Keines",
      "Publikation": "Regelwerk Seite 266",
      "Schutzkreis": "Elementar- und Mindergeister können den Kreis nicht betreten.",
      "Verbreitung": "Gildenmagier"
    },
    "spellclass": "Bann und Schutzkreis",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/dsfdsfdsfdf.html",
    "name": "Bann- und Schutzkreis gegen Dschinne",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "8 AsP",
      "Bannkreis": "Der erste Dschinn, der sich dem Kreis auf 7 Schritt nähert, wird in ihn hineingezogen und kann ihn während der Wirkungsdauer nicht mehr verlassen.",
      "Merkmal": "Keines",
      "Publikation": "Regelwerk Seite 266",
      "Schutzkreis": "Dschinne können den Kreis nicht betreten.",
      "Verbreitung": "Gildenmagier"
    },
    "spellclass": "Bann und Schutzkreis",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/refregrefer.html",
    "name": "Bann- und Schutzkreis gegen gehörnte Dämonen",
    "properties": {
      "AP-Wert": "15 Abenteuerpunkte",
      "AsP-Kosten": "8 AsP",
      "Bannkreis": "Der erste gehörnte Dämon mit bis zu 5 Hörnern, der sich dem Kreis auf 7 Schritt nähert, wird in ihn hineingezogen und kann ihn nicht mehr verlassen.",
      "Merkmal": "Keines",
      "Publikation": "Regelwerk Seite 266",
      "Schutzkreis": "Gehörnte Dämonen mit bis zu 5 Hörnern können den Kreis nicht betreten.",
      "Verbreitung": "Gildenmagier"
    },
    "spellclass": "Bann und Schutzkreis",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/HSF_Bei%C3%9FaufGranit.html",
    "name": "Beiß auf Granit!",
    "properties": {
      "AsP-Kosten": "14 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/IN/FF (modifiziert durch ZK)",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Feste Nahrungsmittel, die das Opfer berührt, werden zu Stein oder einer anderen Substanz, die die Hexe im Fluch benannt hat. Üblich sind neben Stein auch Holz, Mist oder Schleim. Edelmetalle oder Ähnliches sind nicht möglich. Die Lebensmittel verwandeln sich nach fünf Minuten wieder zurück, insofern das Opfer sie nicht berührt. Der Versuch, Lebensmittel mit Zangen oder Trichtern in den Mund zu führen, kann dazu führen, dass das Opfer an einem Stein im Hals erstickt. Für Suppen, Milch und andere Flüssigkeiten gilt der Fluch nicht.",
      "Wirkungsdauer": "QS x 3 in Tagen"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ESF_Sorgenlied.html",
    "name": "Sorgenlied",
    "properties": {
      "AsP-Kosten": "2 AsP pro 5 Minuten",
      "Merkmal": "Hellsicht",
      "Probe": "MU/IN/IN",
      "Publikation": "Regelwerk Seite 284",
      "Steigerungsfaktor": "A",
      "Talent": "Singen",
      "Verbreitung": "Elfen",
      "Wirkung": "Der Elf flicht Fragen in das Lied ein, die er an einen guten Freund stellen möchte. Hierdurch kann er erfahren, ob sein Freund gesund, krank oder gar tot ist, ob er um sein Leben fürchtet oder ob er zufrieden und glücklich ist. Mit dem Lied sind nur allgemeine Eindrücke zu erzielen. Klar formulierte Gedankenbilder lassen sich so nicht übertragen. Je weiter der gesuchte Freund vom Sänger entfernt ist, desto länger dauert das Lied. Pro 100 Meilen muss er 5 Minuten singen, um ihn zu erreichen."
    },
    "spellclass": "Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ESF_MelodiederKunstfertigkeit.html",
    "name": "Melodie der Kunstfertigkeit",
    "properties": {
      "AsP-Kosten": "4 AsP pro Stunde",
      "Merkmal": "Heilung",
      "Probe": "IN/IN/CH",
      "Publikation": "Regelwerk Seite 284",
      "Steigerungsfaktor": "B",
      "Talent": "Singen",
      "Verbreitung": "Elfen",
      "Wirkung": "Proben auf Handwerkstalente, die der Elf während der Melodie der Kunstfertigkeit nutzt, sind um QS des Rituals erleichtert."
    },
    "spellclass": "Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/HSF_Beute.html",
    "name": "Beute!",
    "properties": {
      "AsP-Kosten": "14 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/CH (modifiziert durch SK)",
      "Publikation": "Regelwerk Seite 282",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Geruch des Opfers lockt alle Arten von fleischfressenden Wirbeltieren an. Diese sehen das Opfer als leichte Beute an. Während domestizierte Tiere mit einer um die Fertigkeitspunkte des Fluches erschwerten Tierkundeprobe beruhigt werden können, lassen sich wilde Tiere hiervon nicht abbringen. Der nur für die Tiere wahrnehmbare Geruch ist so stark, dass Wildtiere das Opfer bereits aus mehreren Meilen Entfernung wahrnehmen können.",
      "Wirkungsdauer": "QS x 3 in Tagen"
    },
    "spellclass": "Fluch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ESF_Freundschaftslied.html",
    "name": "Freundschaftslied",
    "properties": {
      "AsP-Kosten": "4 AsP pro Stunde, 1 permanenter AsP bei der letzten Strophe",
      "Merkmal": "Einfluss",
      "Probe": "IN/CH/CH",
      "Publikation": "Regelwerk Seite 284",
      "Steigerungsfaktor": "A",
      "Talent": "Musizieren",
      "Verbreitung": "Elfen",
      "Wirkung": "Mit dem Freundschaftslied können zwei Elfen, die es gemeinsam spielen, ein festes Band der Freundschaft zwischeneinander weben. Dies ist nur einmal im Leben eines Elfen möglich. Es besteht aus drei einstündigen Strophen, die an drei aufeinanderfolgenden Tagen von beiden gemeinsam gespielt werden müssen. So miteinander verbundene Elfen spüren die Anwesenheit des anderen und können starke Emotionen des anderen auch auf größere Entfernungen wahrnehmen. Sie können gegenseitig den Zauberspruch BALSAM aufeinander wirken, selbst wenn sie keine AsP zur Verfügung haben. In solchen Fällen können sie mit dem Zauberspruch ihre Lebensenergie direkt auf den anderen übertragen."
    },
    "spellclass": "Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ESF_Erinnerungsmelodie.html",
    "name": "Erinnerungsmelodie",
    "properties": {
      "AsP-Kosten": "1 AsP pro 5 Minuten",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/IN",
      "Publikation": "Regelwerk Seite 283",
      "Steigerungsfaktor": "A",
      "Talent": "Musizieren",
      "Verbreitung": "Elfen",
      "Wirkung": "Mit dem Lied ruft sich der Elf eine Erinnerung aus lang vergangener Zeit zurück. Für je ein Jahr, das das Ereignis zurückliegt, muss er 5 Minuten spielen. Zusätzlich spielt er so lange, wie die Situation dauert, an die er sich zurückentsinnen will."
    },
    "spellclass": "Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Wirbelform.html",
    "name": "Wirbelform",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Elementar",
      "Probe": "KL/FF/KK",
      "Publikation": null,
      "Reichweite": "selbst",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Innerhalb eines Radius von QS Schritt vermag der Zauberer alle Materie des Elements Luft zu verformen, solange sie nicht Teil eines Wesens ist. Auf diesem Weg kann eine Zone erschaffen werden, in der ein Sturm nicht wütet, aber auch die Formung von Rauch und Dampf ist möglich. Der Prozess geht dabei nur langsam vonstatten. Soll die Luft in eine bestimmte Richtung geformt werden, dauert dies 1 KR pro Schritt Fortbewegung. Am Ende der Wirkungsdauer ist das Verformte wieder den normalen Gesetzen der Natur ausgeliefert.",
      "Wirkungsdauer": "QS x 10 Minuten",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Längere Wirkungsdauer 1 ",
        "(FW 8, 2 AP): Die Wirkungsdauer beträgt QS Stunden."
      ],
      "1": [
        "Größerer Radius ",
        "(FW 12, 4 AP): Der Radius beträgt QS x 2 Schritt."
      ],
      "2": [
        "Längere Wirkungsdauer 2 ",
        "(FW 16, 6 AP): Die Wirkungsdauer beträgt QS x 2 Stunden. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Xenographus.html",
    "name": "Xenographus",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Hellsicht",
      "Probe": "MU/KL/IN",
      "Publikation": null,
      "Reichweite": "selbst",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Gildenmagier, Scharlatane",
      "Wirkung": "Liest der Zauberer einen Text, erhält er ein Gefühl für die Bedeutung des Niedergelegten, selbst wenn er die Schrift oder Sprache nicht beherrscht. Damit ist es ihm möglich, jeden Text zu verstehen, jedoch lediglich auf dem Niveau einer Person, die die entsprechende Sprache auf Stufe II beherrscht. Die Wirkung umfasst lediglich das geschriebene Wort, nicht jedoch das gesprochene. Ebenso bietet das Ritual keine Hilfestellung bei Schwierigkeiten, die nicht sprachlicher Natur sind, etwa wenn der Text verschlüsselt, in Rätseln verfasst, unleserlich oder unzusammenhängend geschrieben wurde. Das Erlernen einer Sprache oder einer Schrift ist auf diesem Wege nicht möglich, da lediglich die Gesamtbedeutung eines Textes erfasst werden kann, nicht jedoch die Bedeutung einzelner Elemente.",
      "Wirkungsdauer": "QS x 5 Minuten",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Längere Wirkungsdauer 1 ",
        "(FW 8, 1 AP): Die Wirkungsdauer beträgt QS x 30 Minuten."
      ],
      "1": [
        "Längere Wirkungsdauer 2 ",
        "(FW 12, 2 AP): Die Wirkungsdauer beträgt QS Stunden. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Besseres Sprachverständnis ",
        "(FW 16, 3 AP): Man kann den Text so verstehen, wie eine Person, welche die Sprache auf Stufe III beherrscht."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Widerwille.html",
    "name": "Widerwille",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "IN/CH/GE",
      "Publikation": null,
      "Reichweite": "16 Schritt",
      "Ritualdauer": "30 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Scharlatane",
      "Wirkung": "Personen mit SK 2 oder schlechter ignorieren ein vom Zauberer bestimmtes Objekt, selbst wenn es sich direkt vor ihnen befindet. Kommt es zu einer Interaktion mit dem Opfer, etwa wenn dieses mit einem bislang ignorierten Schwert angegriffen wird, endet die Wirkung jedoch. Ein einfaches Berühren oder Ertasten reicht hierfür aber nicht aus. Der Zauberer selbst nimmt das Objekt immer wahr, auch wenn der Zauber wirkt. Es können lediglich kleinere Gegenstände bis zur Größe einer Zweihandwaffe oder eines Seils verzaubert werden, nicht jedoch Truhen, Türen oder gar ganze Gebäude.",
      "Wirkungsdauer": "QS Stunden",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Nicht alle ",
        "(FW 8, 2 AP): Der Zauberer kann beliebig viele Leute benennen, die nicht von der Wirkung betroffen sind."
      ],
      "1": [
        "Größere Objekte ",
        "(FW 12, 4 AP): Der Zauberer kann auch Objekte bis zur Größe einer Tür verzaubern."
      ],
      "2": [
        "Längere Wirkungsdauer ",
        "(FW 16, 6 AP): Die Wirkungsdauer beträgt QS Tage."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ESF_Friedenslied.html",
    "name": "Friedenslied",
    "properties": {
      "AsP-Kosten": "2 AsP pro 5 Minuten",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH",
      "Publikation": "Regelwerk Seite 283",
      "Steigerungsfaktor": "A",
      "Talent": "Musizieren",
      "Verbreitung": "Elfen",
      "Wirkung": "Nach 5 Minuten des Spielens erzeugt dieses Lied eine Zone des Friedens um den Elfen herum (QS x 3 Schritt Radius). So lange er weiterspielt, verlieren Tiere und kulturschaffende Wesen das Interesse daran, mit Gewalt gegeneinander oder gegen den Elfen vorzugehen. Um trotzdem aktiv zu kämpfen, ist eine Fertigkeitsprobe auf <em>Willenskraft</em>, erschwert durch die QS x 2 in der Probe auf das Friedenslied fällig. Die Möglichkeit, sich zu verteidigen, ist durch das Friedenslied nicht eingeschränkt. Nicht betroffen sind widernatürliche Wesenheiten wie Untote, Dämonen, Elementare oder Golems."
    },
    "spellclass": "Elfenlied",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Traumgestalt.html",
    "name": "Traumgestalt",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Der schwarze Forst Seite 33",
      "Reichweite": "32 Schritt*",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden, Elfen, Hexen",
      "Wirkung": "Der Zauberer dringt in die Träume des Ziels ein und kann diese manipulieren. Der Zauberer kann QS einsetzen, um seine Werte im Traum zu verbessern oder sich andere Vorteile zu verschaffen. Dazu muss er die angegebene Menge an QS investieren. Die Boni sind kumulativ.<ul><li>für 1 QS: +2 TP oder + 1 AW oder +2 GS oder +1 auf MU, KL, IN oder CH oder +1 ZK</li><li>für 2 QS: +1 RS oder SK oder +1 auf alle AT oder +1 auf alle PA, oder der Zauberer hat nach Wunsch eine andere Gestalt im Traum des Opfers</li><li>#für 3 QS: Der Zauberer ist im Traum getarnt und kann nicht entdeckt werden. Er kann aber diese Tarnung jederzeit selbst aufgeben.</li></ul>",
      "Wirkungsdauer": "QS x 10 Minuten",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Ritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_OrvaiKurimsKriegstrommel.html",
    "name": "Orvai Kurims Kriegstrommel",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Objekt",
      "Probe": "IN/FF/KO",
      "Publikation": "Der weiße See Seite 9",
      "Reichweite": "Berührung",
      "Ritualdauer": "30 Minuten",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Goblinzauberinnen",
      "Wirkung": "Der Klang der Trommel versetzt Angehörige der Spezies in Raserei, aus deren Haut das Trommelfell gefertigt wurde. Wenn ihnen keine Probe auf <em>Willenskraft (Bedrohungen</em> <em>standhalten) </em>erschwert um die QS des Rituals gelingt, erhalten alle Kulturschaffenden oder Tiere den Status <em>Blutrausch </em>(siehe Regelwerk Seite 35). Der Wirkungsradius beträgt 16 Schritt. Zum Schlagen der Trommel benötigt man 1 Aktion, der Blutrausch dauert für 2W20+QS KR an.",
      "Wirkungsdauer": "QS x 3 in Tagen",
      "Zielkategorie": "profane Objekte (Trommeln)"
    },
    "spellclass": "Ritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_RufdesBienenstocks.html",
    "name": "Ruf des Bienenstocks",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/IN/FF",
      "Publikation": "Der weiße See Seite 5",
      "Reichweite": "FW x 50 Meilen",
      "Ritualdauer": "30 Minuten",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Zibilja",
      "Wirkung": "Durch Berührung einer Münze oder Ware, die gegen das gesuchte Objekt getauscht wurde, erfährt man Richtung und Entfernung des Objekts in Tagesreisen. Jedes angefangene Jahr, in dem die Zibilja (oder ihre Sippe) das Objekt vorher besaß, erleichtert die Probe um 1, jedes angefangene Jahr nach dem Verkauf erschwert sie um 1 (insgesamt maximal +/–5).",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "profane Objekte"
    },
    "spellclass": "Ritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_UnberuehrtvonSatinav.html",
    "name": "Unberührt von Satinav",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Zeit",
      "Probe": "KL/IN/FF",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Ritualdauer": "30 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Kristallomanten",
      "Wirkung": "Ein maximal 5 Stein wiegendes Objekt ist während der Wirkungsdauer vor Verfall geschützt. Die Zeit kann ihm nichts anhaben und es wird also weder verrotten, verrosten noch verfallen. Dies gilt auch in widrigen Umgebungen, etwa überdurchschnittlich feuchten oder heißen Gegenden. Vor gewaltsamen Einflüssen wie Waffenschaden, Feuer oder Säure bietet die Verzauberung jedoch keinen Schutz.",
      "Wirkungsdauer": "QS x 3 Wochen",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Höheres Gewicht (",
        "FW 8, 2 AP): Das Gewicht darf bis zu 10 Stein betragen."
      ],
      "1": [
        "Längere Wirkungsdauer ",
        "1 (FW 12, 4 AP): Die Wirkungsdauer erhöht sich auf QS x 3 Monate."
      ],
      "2": [
        "Längere Wirkungsdauer ",
        "2 (FW 16, 6 AP): Die Wirkungsdauer erhöht sich auf QS x 3 Jahre. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_RuheKoerper.html",
    "name": "Ruhe Körper",
    "properties": {
      "AsP-Kosten": "4 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Heilung",
      "Probe": "KL/CH/KO",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Elfen, Gildenmagier",
      "Wirkung": "Die während der nächsten Regenerationsphase zurückgewonnenen LeP erhöhen sich um die doppelte QS. Zudem verläuft der Schlaf ruhig und traumlos, solange äußere Einflüsse dem nicht entgegenwirken. Der Zauber kann nicht verhindern, dass Gifte und Krankheiten in der Regenerationsphase wirken.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Kosten modifizierbar ",
        "(FW 8, 2 AP): Die Kosten sind modifizierbar."
      ],
      "1": [
        "Kurze Regenerationsphase ",
        "(FW 12, 4 AP): Unter der Wirkung des Zaubers dauert eine Regenerationsphase nur 4 Stunden statt der üblichen 6."
      ],
      "2": [
        "Längerfristige Wirkung ",
        "(FW 16, 6 AP): Bei der übernächsten Regenerationsphase nach dem Zauber bekommt das Ziel QS LeP dazu. Die ursprüngliche Zauberwirkung kommt ebenfalls zum Tragen."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Nihilogravo.html",
    "name": "Nihilogravo",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Telekinese",
      "Probe": "KL/IN/KO",
      "Publikation": "Die Streitenden Königreiche Seite 168",
      "Reichweite": "8 Schritt",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Zauberspruch sorgt für eine zylinderförmige Zone, in der die Schwerkraft aufgehoben ist. Der Zauberer muss einen Punkt innerhalb der Reichweite des Zauberspruchs benennen. Von dort aus wirkt der Zauber in einem Radius von QS in Schritt. Die Höhe der schwerelosen Zone beträgt QS x 5 Schritt. Durch die ungewohnte Umgebung sind alle Proben innerhalb dieser Zone um 1 erschwert. Um sich gezielt in der Schwerelosigkeit bewegen zu können, ist eine Probe auf Schwimmen (Tauchen) notwendig. Pro erreichter QS schafft man 1 Schritt. Unfälle, Patzer oder Einwirkungen nach Meisterentscheid können dazu führen, dass eine Person unbeabsichtigt aus der Zone gerät und stürzt. Sollten sich am Ende der Wirkungsdauer noch Wesen in der Zone der Schwerelosigkeit befinden, stürzen diese herunter und erleiden Sturzschaden (siehe Regelwerk Seite 340). Über die Sturzhöhe entscheidet der Meister.",
      "Wirkungsdauer": "QS x 5 Minuten",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Ritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Movimento.html",
    "name": "Movimento",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Heilung",
      "Probe": "MU/IN/KO",
      "Publikation": null,
      "Reichweite": "selbst",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Elfen",
      "Wirkung": "Während der Wirkungsdauer kann sich der Zauberer beliebig lange im Dauerlauf fortbewegen, ohne dass ihn dies erschöpft. Die Reisestrecke erhöht sich um QS x 10 % für eine Tagesleistung Fußmarsch (siehe <strong>Strategische Bewegung </strong>im <strong>Regelwerk </strong>auf Seite <strong>248</strong>).",
      "Wirkungsdauer": "8 Stunden (Wirkungsdauer nicht modifizierbar)",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Mehr Ziele ",
        "(FW 8, 1 AP): Durch eine Berührung können bis zu QS weitere Ziele von der Wirkung des Zaubers profitieren. Jedes weitere Ziel kostet zusätzlich 2 AsP."
      ],
      "1": [
        "Geänderte Zielkategorie 1 ",
        "(FW 12, 2 AP): Als Ziel des Zaubers dürfen auch Lebewesen der Größenkategorie winzig, klein und mittel gewählt werden."
      ],
      "2": [
        "Geänderte Zielkategorie 2 ",
        "(FW 16, 3 AP): Als Ziel des Zaubers dürfen auch Lebewesen"
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_MagischerRaub.html",
    "name": "Magischer Raub",
    "properties": {
      "AsP-Kosten": "4 AsP (Kosten nicht modifizierbar)",
      "Merkmal": "Einfluss",
      "Probe": "MU/KL/KO (modifiziert um SK)",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Ritualdauer": "30 Minuten",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Während der Wirkungsdauer kann der Zauberer auf die AsP des Ziels zugreifen. Das Opfer kann sich nach Ende der Zauberdauer beliebig weit vom Zauberer entfernt haben. Die Verbindung endet nur dann automatisch, wenn das Opfer sich nicht mehr in der gleichen Sphäre wie der Zauberer aufhält. Wirkt der Zauberer Magie, während die Verbindung besteht, werden die benötigten AsP auf seinen Wunsch hin aus dem Vorrat des Opfers verbraucht. Sind alle AsP des Opfers aufgebraucht, muss der Zauberer alle weiteren Kosten selbst aufbringen. Der Verbrauch von pAsP kann jedoch nicht auf das Ziel übertragen werden. Maximal kann durch den Zauber 1 Ziel beraubt werden.",
      "Wirkungsdauer": "QS x 30 Minuten",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Sofortraub ",
        "(FW 8, 3 AP): Der Zauberer entzieht dem Opfer zum Ende der Ritualdauer sofort AsP und fügt sie seinem eigenen Vorrat hinzu. Er kann bis zu QS x 4 AsP rauben, dabei jedoch seinen eigenen Maximalwert nicht überschreiten."
      ],
      "1": [
        "Längere Wirkungsdauer ",
        "(FW 12, 6 AP): Die Wirkungsdauer beträgt QS Stunden."
      ],
      "2": [
        "Zwei Opfer ",
        "(FW 16, 9 AP): Der Zauberer kann bis zu 2 Opfer gleichzeitig mit dem Zauber belegen."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Leidensbund.html",
    "name": "Leidensbund",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Heilung",
      "Probe": "MU/IN/KO",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Zauberer kann den erlittenen LeP-Verlust von einer anderen Person auf sich selbst übertragen. Dadurch werden die Wunden des Ziels geheilt und entstehen dafür beim Zaubernden. Maximal können auf diesem Wege QS x 3 verlorene LeP übertragen werden, wobei sich der Zauberer auch für weniger entscheiden kann. Auch ist keine Übertragung möglich, die beim Zauberer zu einem LeP-Stand führen würde, der bei 0 oder darunter liegt. Die Wirkung des Zaubers setzt erst nach Ende der Ritualdauer ein, es ist daher mit diesem Ritual nicht möglich, Sterbende von der Schwelle des Todes zu retten.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Krankheitsübertragung ",
        "(FW 8, 1 AP): Anstelle der verlorenen LeP kann eine Krankheit auf den Zauberer übertragen werden. Die Krankheitsstufe darf maximal QS Punkte betragen."
      ],
      "1": [
        "Giftübertragung ",
        "(FW 12, 2 AP): Anstelle der verlorenen LeP kann ein Gift auf den Zauberer übertragen werden. Die Giftstufe darf maximal QS Punkte betragen."
      ],
      "2": [
        "Freiwilliger ",
        "(FW 16, 3 AP): Die verlorenen LeP können statt auf den Zauberer auf einen Freiwilligen übertragen werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_MemorabiaFalsifir.html",
    "name": "Memorabia Falsifir",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/CH (modifiziert um SK)",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Ritualdauer": "2 Stunden",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden",
      "Wirkung": "Der Zauberer entfernt Erinnerungen aus dem Gedächtnis des Ziels. Dabei kann er jedoch keine bestimmte Erinnerung festlegen, sondern lediglich einen Zeitraum von maximal QS x 3 Tagen ab einem von ihm gewünschten Anfangszeitpunkt.",
      "Wirkungsdauer": "1 Jahr",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Ohne Erinnerung ",
        "(FW 8, 3 AP): Das Opfer kann sich an den Moment der Verzauberung nicht erinnern."
      ],
      "1": [
        "Phasen ",
        "(FW 12, 6 AP): Der gelöschte Zeitraum muss nicht zusammenhängend sein, sondern darf auf bis zu drei Phasen aufgeteilt werden. "
      ],
      "2": [
        "Andere Erinnerung ",
        "(FW 16, 9 AP): Das Opfer erhält eine andere Erinnerung an den gelöschten Zeitraum, deren Qualität abhängig von den QS ist."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Hartesschmelze.html",
    "name": "Hartes schmelze",
    "properties": {
      "AsP-Kosten": "2/4/8/16 AsP für einen Gegenstand von der Größe einer Tasse/Truhe/Tür/Burgtor (Kosten nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "MU/IN/KO",
      "Publikation": null,
      "Reichweite": "4 Schritt",
      "Ritualdauer": "30 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Das Ritual raubt einem Objekt seine Festigkeit und macht einen harten Gegenstand weich und formbar. Dies erlaubt sowohl künstlerische Gestaltungen, ermöglicht aber auch das Erschaffen von Löchern oder das Abtrennen einzelner Teile. Der Zauberer kann z. B. Türen wie Knetmasse zusammenrollen oder ein Schloss aus der Tür entfernen. Dabei ist zu beachten, dass der Meister entscheidet, welche Gegenstände miteinander verbunden sind. Ein Schloss gehört zu einer Tür, eine Tür aber nicht zu einer Wand. Der Zauber ist kein Ersatz für Handwerkstalente, man kann damit beispielsweise nicht Metall verformen, um eine scharfe Schwertklinge zu erhalten. Am Ende der Wirkungsdauer wird der Gegenstand augenblicklich wieder hart.",
      "Wirkungsdauer": "QS x 2 Minuten",
      "Zielkategorie": "Objekt (profane Objekte bis zur Größe einer Truhe)"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Größere Objekte 1 ",
        "(FW 8, 2 AP): Objekte bis zur Größe einer Tür können verformt werden."
      ],
      "1": [
        "Längere Wirkungsdauer ",
        "(FW 12, 4 AP): Die Wirkungsdauer beträgt QS x 5 Minuten."
      ],
      "2": [
        "Größere Objekte 2 ",
        "(FW 16, 6 AP): Objekte bis zur Größe eines Burgtors können verformt werden. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Invomaior.html",
    "name": "Invovatio maior",
    "properties": {
      "AsP-Kosten": "32 AsP",
      "Merkmal": "Sphären",
      "Probe": "MU/CH/KO",
      "Publikation": "Regelwerk Seite 300",
      "Reichweite": "8 Schritt",
      "Ritualdauer": "8 Stunden",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Ein zuvor ausgewählter gehörnter Dämon mit maximal fünf Hörnern erscheint. Die Ritualprobe ist um die Beschwörungsschwierigkeit des Dämons erschwert. Details zur Beschwörung und dem Umgang mit Dämonen finden sich im Abschnitt Die Kunst der<br/>Dämonenbeschwörung im Regelwerk ab Seite 262.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Dämonen"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Mehr Dienste ",
        "(FW 8, 3 AP): Der Zauberer kann QS +2 Dienste von dem Wesen verlangen."
      ],
      "1": [
        "Längerer Dienst ",
        "(FW 12, 6 AP): Das Wesen verliert erst am Ende einer Woche (statt am Ende eines Tages) automatisch einen Dienst."
      ],
      "2": [
        "Mächtiges Wesen ",
        "(FW 16, 9 AP): Dem Wesen können zweimal die gleichen Verbesserungen beim Beschwören gegeben werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Invominor.html",
    "name": "Invocatio Minor",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Sphären",
      "Probe": "MU/CH/KO",
      "Publikation": "Regelwerk Seite 300",
      "Reichweite": "8 Schritt",
      "Ritualdauer": "30 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Ein zuvor ausgewählter niederer Dämon erscheint. Die Ritualprobe ist um die Anrufungsschwierigkeit des Dämons erschwert. Details zur Beschwörung und dem Umgang mit Dämonen finden sich im Abschnitt Die Kunst der Dämonenbeschwörung im Regelwerk ab Seite 262.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Dämonen"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Mehr Dienste ",
        "(FW 8, 2 AP): Der Zauberer kann QS +2 Dienste von dem Wesen verlangen."
      ],
      "1": [
        "Längerer Dienst ",
        "(FW 12, 4 AP): Das Wesen verliert erst am Ende einer Woche (statt am Ende eines Tages) automatisch einen Dienst."
      ],
      "2": [
        "Mächtiges Wesen ",
        "(FW 16, 6 AP): Dem Wesen können zweimal die gleichen Verbesserungen beim Beschwören gegeben werden. "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Dschinnenruf.html",
    "name": "Dschinnenruf",
    "properties": {
      "AsP-Kosten": "32 AsP",
      "Merkmal": "Sphären",
      "Probe": "MU/CH/KO",
      "Publikation": "Regelwerk Seite 300",
      "Reichweite": "8 Schritt",
      "Ritualdauer": "8 Stunden",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Ein Dschinn des gewünschten Elements erscheint. Details zur Herbeirufung und dem Umgang mit Dschinnen finden sich im Abschnitt Die Kunst der Elementarherbeirufung im Regelwerk ab Seite 262.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Elementare"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Mehr Dienste ",
        "(FW 8, 3 AP): Der Zauberer kann QS +2 Dienste von dem Wesen verlangen."
      ],
      "1": [
        "Längerer Dienst ",
        "(FW 12, 6 AP): Das Wesen verliert erst am Ende einer Woche (statt am Ende eines Tages) automatisch einen Dienst."
      ],
      "2": [
        "Mächtiges Wesen ",
        "(FW 16, 9 AP): Dem Wesen können zweimal die gleichen Verbesserungen beim Beschwören gegeben werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Diener.html",
    "name": "Elementarer Diener",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Sphären",
      "Probe": "MU/CH/KO",
      "Publikation": "Regelwerk Seite 300",
      "Reichweite": "8 Schritt",
      "Ritualdauer": "30 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Ein Elementargeist des gewünschten Elements erscheint. Details zur Herbeirufung und dem Umgang mit Elementargeistern finden sich im Abschnitt Die Kunst der Elementarherbeirufung im Regelwerk ab Seite 262.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "Elementare"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Mehr Dienste ",
        "(FW 8, 2 AP): Der Zauberer kann QS +2 Dienste von dem Wesen verlangen."
      ],
      "1": [
        "Längerer Dienst ",
        "(FW 12, 4 AP): Das Wesen verliert erst am Ende einer Woche (statt am Ende eines Tages) automatisch einen Dienst."
      ],
      "2": [
        "Mächtiges Wesen ",
        "(FW 16, 6 AP): Dem Wesen können zweimal die gleichen Verbesserungen beim Beschwören gegeben werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Caldofrigo.html",
    "name": "Caldofrigo",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Elementar",
      "Probe": "IN/CH/KO",
      "Publikation": "Die Streitenden Königreiche Seite 168",
      "Reichweite": "4 Schritt",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Mittels Caldofrigo kann die Temperatur eines maximal truhengroßen Objekts verändert werden. Es kann abgekühlt oder erwärmt werden und zwar in einem Spielraum von +/–100 Grad Celsius der Ausgangstemperatur. Der Zauberer muss hierzu die gewünschte Gradzahl festlegen und kann nicht beliebig während der Wirkungsdauer die Temperatur ändern. Die Temperaturveränderung funktioniert außerdem immer nur in eine Richtung. Sollte ein Held mit einem Gegenstand in Berührung kommen, der extrem heiß ist (oder kalt; dabei einfach analog dieselben Regeln verwenden), gelten die Regeln für Brennende Personen (siehe Regelwerk Seite 341). Nach dem Ende der Wirkungsdauer nimmt das Objekt wieder seine ursprüngliche Temperatur an. Durch große Temperaturänderungen entsteht bei den meisten Objekten ein Schaden von 1W6 Strukturpunkten. Bei welchen Temperaturen dies der Fall ist, entscheidet der Meister.",
      "Wirkungsdauer": "QS x 2 Minuten",
      "Zielkategorie": "Objekt (profane Objekte bis zur Größe einer Truhe)"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Höhere/Niedrigere Temperatur 1 ",
        "(FW 8, 2 AP): Die Temperatur kann um bis zu 200 Grad verändert werden. Der Schaden für Gegenstände steigt auf 2W6 Strukturpunkte."
      ],
      "1": [
        "Höhere/Niedrigere Temperatur 2 ",
        "(FW 12, 4 AP): Die Temperatur kann um bis zu 500 Grad verändert werden. Der Schaden für Gegenstände steigt auf 3W6 Strukturpunkte. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Höhere/Niedrigere Temperatur 3 ",
        "(FW 16, 6 AP): Die Temperatur kann um bis zu 1.000 Grad geändert werden. Der Schaden für Gegenstände steigt auf 4W6 Strukturpunkte. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_AufmerksamerWaechter.html",
    "name": "Aufmerksamer Wächter",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Objekt",
      "Probe": "IN/CH/FF",
      "Publikation": "Der Weiße See Seite 61",
      "Reichweite": "Sichtweite des Tieres",
      "Ritualdauer": "30 Minuten",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Goblinzauberinnen",
      "Wirkung": "Der Tiergeist stößt einen Warnruf aus, wenn sich etwas nähert, das er als Gefahr betrachtet. Seine <em>Sinnesschärfe</em> entspricht QS x 3, seine Eigenschaften denen eines typischen Exemplars der Tierart.",
      "Wirkungsdauer": "QS x 3 Stunden",
      "Zielkategorie": "profane Objekte (Tierbild)"
    },
    "spellclass": "Ritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Accuratum.html",
    "name": "Accuratum",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/CH/FF",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Ein Satz Kleidung wird nach Wünschen des Zauberers abgeändert. Dies betrifft Schnitt und Farbe, nicht jedoch Menge und Art des Materials. Auf diesem Wege sind sowohl das simple Flicken zerrissener Hosen wie auch die Umwandlung eines Stoffballens oder einer schlichten Kutte in eine deutlich prächtigere Robe möglich. Die Kleidung kann nach Meisterentscheid Erschwernisse bei Gesellschaftstalenten ausgleichen, beispielsweise bei <em>Etikette (Benehmen) </em>oder <em>Betören (Aufhübschen)</em>.",
      "Wirkungsdauer": "QS x 3 Stunden",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Gaukelei-Vorteil ",
        "(FW 8, 1 AP): Der Zauberer bekommt durch zum Anlass passende Kleidung eine Erleichterung von 1 auf "
      ],
      "1": [
        "Etikette-Vorteil ",
        "(FW 12, 2 AP): Der Zauberer bekommt durch zum Anlass passende Kleidung eine Erleichterung von 1 auf "
      ],
      "2": [
        "Gassenwissen-Vorteil ",
        "(FW 16, 3 AP): Der Zauberer bekommt durch zum Anlass passende Kleidung eine Erleichterung von 1 auf "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_HagelschlagundSturmgebruell.html",
    "name": "Hagelschlag und Sturmgebrüll",
    "properties": {
      "AsP-Kosten": "32 AsP",
      "Bewölkung": "<ul><li><strong>Stufe 1 </strong>klar</li><li><strong>Stufe 2 </strong>wolkig</li><li><strong>Stufe 3 </strong>bedeckt</li><li><strong>Stufe 4 </strong>verhangen, Sichtstufe sinkt um 1</li></ul>",
      "Merkmal": "Elementar",
      "Niederschlag": "<strong>Stufe 1 </strong>kein Niederschlag<ul><li><strong>Stufe 2 </strong>Nieselregen</li><li><strong>Stufe 3 </strong>Dauerregen</li><li><strong>Stufe 4 </strong>Wolkenbruch</li></ul>",
      "Probe": "MU/CH/KO",
      "Publikation": null,
      "Reichweite": "selbst",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "D",
      "Verbreitung": "Druiden",
      "Windgeschwindigkeit": "<ul><li><strong>Stufe 1 </strong>Windstille</li><li><strong>Stufe 2 </strong>Brise</li><li><strong>Stufe 3 </strong>Sturm</li><li><strong>Stufe 4 </strong>Orkan, jede KR 1 Aktion aufwenden und Probe auf <em>Kraftakt </em>(<em>Drücken &amp;</em> <em>Verbiegen</em>) bestehen, um nicht den Status <em>Liegend </em>zu erhalten</li></ul>",
      "Wirkung": "Der Zauberer erschafft um sich herum eine Zone von QS x 50 Schritt Radius, innerhalb der er Bewölkung, Niederschlag und Windgeschwindigkeit um insgesamt QS Stufen senken oder anheben kann. Mit einer QS von 5 ist es beispielsweise möglich, die Windgeschwindigkeit um 2 Stufen zu verändern und den Niederschlag um 3. Bei Temperaturen unter dem Gefrierpunkt fällt der Niederschlag als Schnee oder Hagel zu Boden. Die Stufe des Niederschlags darf die Stufe der Bewölkung nicht überschreiten.",
      "Wirkungsdauer": "QS Stunden",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Längere Wirkungsdauer ",
        "(FW 8, 4 AP): Die Wirkungsdauer beträgt QS x 2 Stunden."
      ],
      "1": [
        "Größerer Radius ",
        "(FW 12, 8 AP): Der Wirkungsradius beträgt QS x 100 Schritt."
      ],
      "2": [
        "Höhere Reichweite ",
        "(FW 16, 12 AP): Die Reichweite beträgt 512 Schritt, ist aber nicht mehr modifizierbar."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Wolfstatze.html",
    "name": "Wolfstatze",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers) + 4 AsP pro Stunde",
      "Merkmal": "Verwandlung",
      "Probe": "MU/IN/GE",
      "Publikation": null,
      "Reichweite": "selbst",
      "Steigerungsfaktor": "C",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Zauberer verwandelt sich in ein Landtier seiner Wahl, das jedoch weder fliegen, noch im Wasser leben darf (also keine Vögel, Fische usw.) und maximal die Größenkategorie klein aufweist. Während der Wirkungsdauer verwendet der Zauberer die körperlichen Werte des Tieres, einschließlich seiner Eigenschaften, Talente und Kampfwerte. Eine niedrige LE wird bei der Verwandlung anteilsmäßig angerechnet, gleiches geschieht bei der Rückverwandlung. Die geistigen Werte des Zauberers bleiben ebenso wie sein Bewusstsein erhalten. Die Verwandlung betrifft nur den Zauberer selbst, nicht seine Kleidung oder Ausrüstung. Es ist keine Verwandlung in ein kulturschaffendes Wesen möglich.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Mittlere Tiere ",
        "(FW 8, 3 AP): Der Zauberer kann sich auch in Landtiere der Größenkategorie mittel verwandeln. Es entstehen zusätzliche Kosten in Höhe von 5 AsP."
      ],
      "1": [
        "Keine Aufrechterhaltung ",
        "(FW 12, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ],
      "2": [
        "Große Tiere ",
        "(FW 16, 9 AP): Der Zauberer kann sich auch in Landtiere der Größenkategorie groß verwandeln. Es entstehen zusätzliche Kosten in Höhe von 6 AsP. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Wasseratem.html",
    "name": "Wasseratem",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO",
      "Publikation": "Regelwerk Seite 300",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Elfen",
      "Wirkung": "Der Verzauberte kann sowohl normale Luft als auch Wasser atmen. Er kann grundsätzlich 1 Minute pro QS unter Wasser atmen + je nach AsP-Einsatz.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Andere Kosten ",
        "(FW 8, 2 AP): Die AsP-Kosten, um den Zauber aufrechtzuerhalten, betragen 4 AsP pro 30 Minuten."
      ],
      "1": [
        "Keine Aufrechterhaltung ",
        "(FW 12, 4 AP): Der Zaubergilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ],
      "2": [
        "Mehrere Ziele ",
        "(FW 16, 6 AP): Der Zauberer kann weitere QS Ziele berühren, die unter Wasser atmen können. Nach dem Wirken des Zauberspruchs muss er sie nicht mehr berühren. Sie können sich dann unabhängig von ihm wegbewegen. Die Grundkosten steigen auf 8 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Vogelzwitschern.html",
    "name": "Vogelzwitschern",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Illusion",
      "Probe": "MU/IN/GE",
      "Publikation": null,
      "Reichweite": "selbst",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Innerhalb von QS x 2 Schritt um sich herum kann der Zauberer jedes beliebige Geräusch durch ein anderes ersetzen. Die Lautstärke bleibt dabei jedoch unverändert. Eine Stimme kann so etwa deutlich höher oder das Auftreten mit dem Fuß wie leiser Donner oder Fanfarenschall klingen. Details zum Thema Illusionen finden sich im <strong>Regelwerk</strong> auf Seite <strong>259</strong>.",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 2 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 4 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 6 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Zunge_bet%C3%A4uben.html",
    "name": "Zunge betäuben",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/CH (modifiziert um ZK)",
      "Publikation": "Die Streitenden Königreiche Seite 168",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden",
      "Wirkung": "Zunge und Lippen des Opfers sind gelähmt. Seine Fähigkeit, verständlich zu sprechen ist daher stark beeinträchtigt. Der Verzauberte erhält den Status Stumm.",
      "Wirkungsdauer": "QS x 5 Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Verwandlungsbann.html",
    "name": "Verwandlungsbann",
    "properties": {
      "AsP-Kosten": "8 AsP bzw. 16 AsP für Zauber mit Zielkategorie Zone",
      "Merkmal": "Antimagie",
      "Probe": "KL/CH/FF",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Ein Zauber des Merkmals Verwandlung wird aufgehoben, solange dessen QS nicht höher ist als die QS des Verwandlungsbanns. Der Bann entfaltet keine Wirkung gegen Zauber, deren Wirkung sofort eintritt. Auch gegen Zauber, deren Wirkung bereits vollendet ist oder permanent wirkende Sprüche hilft er nicht. Wird der Verwandlungsbann gegen einen Zauber der Zielkategorie Zone eingesetzt, genügt es, wenn sich ein Teil von dieser innerhalb der Reichweite befindet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite erhöhen ",
        "(FW 8, 2 AP): Die Zaubermodifikation Reichweite erhöhen ist nicht erschwert."
      ],
      "1": [
        "Zauberdauer senken ",
        "(FW 12, 4 AP): Die Zaubermodifikation Zauberdauer senken ist nicht erschwert."
      ],
      "2": [
        "Kosten senken ",
        "(FW 16, 6 AP): Die Zaubermodifikation Kosten senken ist nicht erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/Rit_Arcanovi.html",
    "name": "Arcanovi",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/IN/FF",
      "Publikation": "Regelwerk Seite 300",
      "Reichweite": "8 Schritt",
      "Ritualdauer": "8 Stunden",
      "Steigerungsfaktor": "D",
      "Verbreitung": "allgemein",
      "Wirkung": "Details zur Verzauberung stehen im Abschnitt Die Artefakte im Detail im Regelwerk ab Seite 266.",
      "Wirkungsdauer": "sofort",
      "Zielkategorie": "geweihte Objekte, profane Objekte"
    },
    "spellclass": "Ritual",
    "spellextensions": {
      "0": [
        "Geringere Ritualdauer ",
        "(FW 8, 4 AP): Die Ritualdauer beträgt 4 Stunden."
      ],
      "1": [
        "Weniger Erschwernis 1 ",
        "(FW 12, 8 AP): Die Erschwernisse bei zusätzlichen Aufladungen bei Zauberspeicher-Artfakten sinken beim Arcanovi um 1 (bis zu einem Minimum von 0)."
      ],
      "2": [
        "Weniger Erschwernis 2 ",
        "(FW 16, 12 AP): Die Erschwernisse bei zusätzlichen Aufladungen bei Zauberspeicher-Artfakten sinken beim Arcanovi und den auf dem Artefakt gespeicherten Zauber um 1 (bis zu einem Minimum von 0). Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Visibili.html",
    "name": "Visibili",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers) + 4 AsP pro 5 Minuten",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO",
      "Publikation": "Regelwerk Seite 299",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Elfen",
      "Wirkung": "Der Verzauberte wird innerhalb von 20 – (QS x 3) Kampfrunden unsichtbar.<br/>Während dieser Zeit wird er immer durchscheinender, bis er schließlich nicht mehr zu sehen ist. Die Unsichtbarkeit gilt nur für ihn selbst, nicht für Kleidung oder Ausrüstungsgegenstände. Substanzen, die länger als 20 Sekunden im Körper verbleiben, werden auch unsichtbar. Substanzen, die den Körper verlassen, werden entsprechend nach 20 Sekunden wieder sichtbar. Während der Wirkungsdauer erhält der Verzauberte den Status Unsichtbar.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Andere Kosten ",
        "(FW 8, 2 AP): Die AsP-Kosten, um den Zauber aufrechtzuerhalten, betragen 8 AsP für 30 Minuten."
      ],
      "1": [
        "Keine Aufrechterhaltung ",
        "(FW 12, 4 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ],
      "2": [
        "Unsichtbare Kleidung ",
        "(FW 16, 6 AP): Auch die Kleidung des Zauberers wird unsichtbar. Dies gilt nicht für Waffen, Rüstungen (alles, was einen RS von 1 oder mehr aufweist) und größere Gegenstände."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Transversalis.html",
    "name": "Transversalis",
    "properties": {
      "AsP-Kosten": "8 AsP + 1 AsP pro Meile (nicht modifizierbar)",
      "Merkmal": "Sphären",
      "Probe": "MU/CH/KO",
      "Publikation": "Regelwerk Seite 299",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Mittels dieses Zaubers kann ein Held sich und maximal QS x 5 Stein Gegenstände (Kleidung, Waffen usw.) an einen anderen Ort teleportieren. Je näher Gegenstände am Körper liegen (meist die Kleidung), desto eher reisen sie mit dem Zaubernden mit. Sie reisen entweder am Stück mit oder bleiben zurück, werden jedoch nicht zerteilt. Die exakte Auswahl trifft der Meister. Der Held muss schon einmal an dem Zielort des Zaubers gewesen sein oder ihn sehen können. Der Ort darf maximal QS x 3 Meilen vom Zaubernden entfernt sein. Wenn er ihn nur sieht, ist die Probe um 2 erschwert.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Objekt, Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Mehr Gewicht ",
        "(FW 8, 3 AP): Der Zauberer kann QS x 10 Stein an Gegenständen mitnehmen."
      ],
      "1": [
        "Größere Teleportationsmöglichkeit ",
        "(FW 12, 6 AP): Die Teleportation reicht bis zu QS x 10 Meilen weit und kostet 1 AsP pro 3 Meilen."
      ],
      "2": [
        "Transport ",
        "(FW 16, 9 AP): Der Zauberer kann einen zweiten Kulturschaffenden seiner Größenkategorie oder einer kleineren mitteleportieren. Das zulässige Maximalgewicht für Ausrüstung gilt jedoch unverändert – und zwar für beide Teilnehmer zusammen. Die Grundkosten betragen 16 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Telekinesebann.html",
    "name": "Telekinesebann",
    "properties": {
      "AsP-Kosten": "8 AsP bzw. 16 AsP für Zauber mit Zielkategorie Zone",
      "Merkmal": "Antimagie",
      "Probe": "KL/IN/FF",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Scharlatane",
      "Wirkung": "Ein Zauber des Merkmals Telekinese wird aufgehoben, wenn dessen QS nicht höher ist als die QS des Bewegungsbanns. Der Bann entfaltet keine Wirkung gegen Zauber, deren Wirkung sofort eintritt. Auch gegen Zauber, deren Wirkung bereits vollendet ist, oder permanent wirkende Sprüche hilft er nicht. Wird der Telekinesebann gegen einen Zauber der Zielkategorie Zone eingesetzt, genügt es, wenn sich ein Teil von dieser innerhalb der Reichweite befindet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite erhöhen ",
        "(FW 8, 2 AP): Die Zaubermodifikation Reichweite erhöhen ist nicht erschwert."
      ],
      "1": [
        "Zauberdauer senken ",
        "(FW 12, 4 AP): Die Zaubermodifikation Zauberdauer senken ist nicht erschwert."
      ],
      "2": [
        "Kosten senken ",
        "(FW 16, 6 AP): Die Zaubermodifikation Kosten senken ist nicht erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Sumus_Elixiere.html",
    "name": "Sumus Elixiere",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/IN/IN",
      "Publikation": "Die Streitenden Königreiche Seite 167",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Druiden",
      "Wirkung": "Durch diesen Zauberspruch kann der Druide Astralkraft in Zutaten für Alchimica einfließen lassen. Zum einen erhöht er die Haltbarkeit von Zutaten und/oder Alchimica um die Wirkungsdauer des Zauberspruchs, zum anderen hat erhält der Druide eine Erleichterung von 1 bei der Probe auf Alchimie, um das Elixier herzustellen.",
      "Wirkungsdauer": "QS in Jahren",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Objekte (Zutaten für Alchimica)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Tiergedanken.html",
    "name": "Tiergedanken",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers), + 2 AsP pro 30 Sekunden",
      "Merkmal": "Hellsicht",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": null,
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Elfen, Hexen",
      "Wirkung": "Der Zaubernde kann in den Gedanken und Erinnerungen eines Tieres lesen. Dabei erhält er Zugriff auf Erinnerungen, die maximal QS Tage zurückliegen dürfen. Je nach Intelligenz, Erinnerungsvermögen und Lebenswandel des Tieres wird er z. B. bei einem Goldfisch nur wenig erfahren, bei einem Affen hingegen verhältnismäßig viel. Um die Gedankenwelt des Tieres zu verstehen, ist eine Probe auf <em>Tierkunde </em>erforderlich. Der Meister kann je nach erreichter QS der <em>Tierkunde</em>-Probe detaillierter berichten, was der Zaubernde gesehen und richtig interpretiert hat.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Tiere"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Erleichterte Verteidigung ",
        "(FW 8, 1 AP): Verteidigungen gegen das Ziel des Zaubers sind um QS/2 erleichtert."
      ],
      "1": [
        "Höhere Reichweite ",
        "(FW 12, 2 AP): Die Reichweite des Zaubers beträgt 16 Schritt."
      ],
      "2": [
        "Mehr Ziele ",
        "(FW 16, 3 AP): Der Zauber kann QS Ziele der gleichen Art verzaubern, also z. B. mehrere Wölfe eines Rudels innerhalb der Reichweite."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Vipernblick.html",
    "name": "Vipernblick",
    "properties": {
      "AsP-Kosten": "8 AsP + 4 pro 5 Kampfrunden",
      "Merkmal": "Einfluss",
      "Probe": "MU/MU/CH (modifiziert um SK)",
      "Publikation": "Die Streitenden Königreiche Seite 167",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Hexen",
      "Wirkung": "Mit diesem Zauberspruch kann die Hexe ein Opfer, solange sie ihren Blick nicht von ihm abwendet, hypnostieren und somit lähmen. Das Opfer erleidet je nach QS die folgenden Einbußen. Die Wirkung ist nicht kumulativ, es gelten die Auswirkungen der höchsten QS.<br/>QS 1: Status Fixiert<br/>QS 2: 1 Stufe Paralyse, Status Fixiert<br/>QS 3: 2 Stufen Paralyse, Status Fixiert<br/>QS 4: 3 Stufen Paralyse, Status Fixiert<br/>QS 5: 4 Stufen Paralyse, Status Fixiert<br/>QS 6: 4 Stufen Paralyse, Status Handlungsunfähig<br/>Die Hexe muss dem Opfer in die Augen starren, um es zu fixieren. Alle ihre Proben sind um 2 Punkte erschwert, solang sie starrt. Schließt sie ihre Augen, wendet den Blick ab oder entfernt sie sich weiter vom Opfer, als die Reichweite des Zaubers beträgt, endet die Wirkung augenblicklich. Erleidet das Opfer TP oder SP, oder wird es von der Fixierungsstelle bewegt, endet der Zauberspruch ebenfalls. Wird der Sichtkontakt kurzzeitig unterbrochen (z. B., weil jemand in die Blicklinie läuft, es zu dunkel wird oder die Augen der Hexe mit einer Hand verdeckt werden), so muss die Hexe eine Probe auf Selbstbeherrschung (Störungen ignorieren) ablegen, um den Spruch aufrechtzuerhalten. Wird der Sichtkontakt länger als 2 KR unterbrochen, endet die Wirkung. Das Opfer kann den Blickkontakt von sich aus nicht abbrechen. Während der Wirkung des Spruches kann das Opfer keine Attacken, Fernkampfangriffe oder Verteidigungen ausführen.",
      "Wirkungsdauer": "aufrechterhaltend, maximal jedoch 50 KR",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Spurlos.html",
    "name": "Spurlos",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Telekinese",
      "Probe": "KL/FF/KK",
      "Publikation": "Regelwerk Seite 299",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Elfen",
      "Wirkung": "Der Zaubernde hinterlässt keine Spuren mehr. Er knickt keine Grashalme um und erzeugt keine Fußabdrücke auf weichem Boden. Selbst verräterische Gerüche hinterlässt er nicht. Um Spuren des Zaubernden zu finden oder zu verfolgen, sind Proben auf Fährtensuchen um QS erschwert.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite Berührung ",
        "(FW 8, 2 AP): Die Reichweite ist Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ],
      "1": [
        "Andere Kosten ",
        "(FW 12, 4 AP): Die AsP-Kosten, um den Zauber aufrechtzuerhalten, betragen 2 AsP pro 30 Minuten."
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Taubheit.html",
    "name": "Taubheit",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/IN/CH (modifiziert um SK)",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Das Ziel kann nichts mehr hören und erhält dadurch den Status <em>Taub</em>.",
      "Wirkungsdauer": "QS x 5 Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Lebewesen ",
        "(FW 8, 2 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen."
      ],
      "1": [
        "Hörschwierigkeiten ",
        "(FW 12, 4 AP): Das Ziel hat auch noch QS Stunden nach Ende der Wirkungsdauer Hörschwierigkeiten. Alle Proben, die das Gehör erfordern, sind um 1 erschwert."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 6 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 2 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Stillstand.html",
    "name": "Stillstand",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Elementar",
      "Probe": "MU/IN/KO",
      "Publikation": "Klingen der Nacht Seite 110",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Nachtalben u. a.",
      "Wirkung": "Der Zauberer muss einen Mittelpunkt innerhalb der Reichweite des Zauberspruchs benennen, um den herum sich die Zone kugelförmig mit einem Radius von QS x 2 Schritt ausbreitet. Innerhalb dieser verdichtet sich die Luft zu einer nur mühsam zu durchdringenden Masse, die Attacken, Verteidigungen sowie Proben auf körperliche Talente um 2 erschwert und die GS um den gleichen Wert senkt. Durchquert die Flugbahn eines Projektils die Zone zumindest teilweise, werde die angerichteten TP halbiert. Stürze in der Zone oder in die Zone hinein sind wie Stürze ins Wasser zu werten.",
      "Wirkungsdauer": "QS x 3 Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Somnigravis.html",
    "name": "Somnigravis",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Regelwerk Seite 298",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Elfen",
      "Wirkung": "Der Zauberspruch betäubt den Bezauberten. Erreicht er so Betäubung Stufe IV, schläft er ein und ist vor Ablauf der Wirkungsdauer nur durch großen Lärm, kräftiges Anstoßen oder Ähnliches zu wecken. Ungestört schläft er, bis er auf natürlichem Wege erwacht.<br/>QS 1: 1 Stufe Betäubung, aber nur für 1 Minute<br/>QS 2: 1 Stufe Betäubung<br/>QS 3: 2 Stufen Betäubung<br/>QS 4: 3 Stufen Betäubung<br/>QS 5: 4 Stufen Betäubung<br/>QS 6: 4 Stufen Betäubung, aber für die doppelte Wirkungsdauer",
      "Wirkungsdauer": "QS x 3 in Minuten",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Verteilte Wirkung ",
        "(FW 8, 2 AP): Die Zustandsstufen können auf mehrere Ziele verteilt werden, die vor dem Wirken des Zaubers benannt werden müssen. Kann der Zauberer z. B. 3 Stufen "
      ],
      "1": [
        "Längere Wirkung ",
        "(FW 12, 4 AP): Die Wirkungsdauer steigt auf QS x 4 Minuten."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 6 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 4 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Skelettarius.html",
    "name": "Skelettarius",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Dämonisch",
      "Probe": "MU/KL/CH",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Zauberer erhebt die körperlichen Überreste eines verstorbenen Wesens kurzfristig zum Untoten. Er kann mit dem Zauberspruch einfache Mumien, Skelette und Zombies erwecken, jeweils maximal bis zur Größenkategorie mittel. Die Erschaffung funktioniert nach den gleichen Regeln wie die Beschwörung. Das untote Wesen verrichtet 1 + QS Dienste und kann wie Dämonen und Elementare verbessert werden (siehe <strong>Regelwerk </strong>Seite <strong>263</strong>). Es ist zu den gleichen Diensten wie Dämonen und Untote in der Lage.",
      "Wirkungsdauer": "QS x 2 Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Kulturschaffende (Verstorbene)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Mehr Dienste ",
        "(FW 8, 2 AP): Der Zauberer kann QS +2Dienste von dem Wesen verlangen."
      ],
      "1": [
        "Längerer Dienst ",
        "(FW 12, 4 AP): Das Wesen verliert erst am Ende einer Woche (statt am Ende eines Tages) automatisch einen Dienst."
      ],
      "2": [
        "Mächtiges Wesen ",
        "(FW 16, 6 AP): Dem Wesen können zweimal die gleichen Verbesserungen beim Beschwören gegeben werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Solidirid.html",
    "name": "Zaubererweiterungen",
    "properties": {
      "Merkmal": "Keines",
      "Publikation": "Aventurische Magie 146",
      "Verbreitung": "Allgemein"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Mehr Strukturpunkte ",
        "(FW 8, 3 AP): Die Strukturpunkte betragen 100 statt 50."
      ],
      "1": [
        "Höheres Gewicht ",
        "(FW 12, 6 AP): Die Brücke trägt ein Gewicht von bis zu 1.000 Stein."
      ],
      "2": [
        "Längere Brücke ",
        "(FW 16, 9 AP): Die Brücke verfügt über eine Länge von QS x 10 Schritt."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Spinnenlauf.html",
    "name": "Spinnenlauf",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO",
      "Publikation": "Regelwerk Seite 298",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Hexen",
      "Wirkung": "Hände und Füße des Verzauberten erhalten die Eigenschaft, sich auch an den glattesten Oberflächen festsaugen zu können. So kann er glatte Felswände und Mauern überwinden und an Decken Halt finden. Das Gewicht des Verzauberten ändert sich nicht. Daher kann es bei verputzten Wänden passieren, dass sich der Putz an Händen und Füßen unter der Belastung von der Mauer löst. Der Verzauberte muss sich mindestens mit drei Gliedmaßen festhalten. Für jeweils 2 QS kann es eine Gliedmaße weniger sein bis zu einem Minimum von einer Gliedmaße.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Wirkt durch Kleidung ",
        "(FW 8, 1 AP): Der Zauber entfaltet seine Wirkung auch durch getragene Handschuhe und Schuhwerk."
      ],
      "1": [
        "Reichweite Berührung ",
        "(FW 12, 2 AP): Die Reichweite ist Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 3 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Sensibar.html",
    "name": "Sensibar",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers), 4 AsP pro Minute",
      "Merkmal": "Hellsicht",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Die Streitenden Königreiche Seite 167",
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Zaubernde kann die Gefühle des Verzauberten ergründen. Der Zauber offenbart nur die Gefühle selbst, nicht jedoch deren Grund oder Ursprung. Für den Zaubernden sind Proben auf Menschenkenntnis (Lügen durchschauen oder Motivation erkennen) gegen das Ziel des Sensibar um die erreichte QS erleichtert. Der Verzauberte kann bemerken, dass etwas Fremdes in seinen Geist blickt. Hierzu muss ihm eine Erfolgsprobe auf Sinnesschärfe erschwert um die QS des Zaubers gelingen. Er kann aber auch dann nicht zweifelsfrei sagen, wer dafür verantwortlich ist. Mit einer Probe auf Willenskraft, ebenfalls erschwert um die QS des Zaubers, kann er seine Gefühle gezielt unterdrücken. Ist der Verzauberte emotional stark aufgewühlt, ist dies jedoch nach Meisterentscheid um bis zu 3 Punkte zusätzlich erschwert.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Kampfhandlung vorhersehen ",
        "(FW 8, 2 AP): Im Kampf kann der Zauberer Handlungen des verzauberten Gegners vorausahnen. Die Verteidigung des Zauberers ist gegen diesen Gegner um 1 erhöht. Dabei gelten 5 Sekunden der Wirkungsdauer als 1 KR."
      ],
      "1": [
        "Unbemerkt ",
        "(FW 12, 4 AP): Die "
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Silentium.html",
    "name": "Silentium",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Telekinese",
      "Probe": "KL/FF/KK",
      "Publikation": "Regelwerk Seite 298",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Elfen",
      "Wirkung": "Der Zaubernde erschafft eine kugelförmige Zone, in der keine Geräusche mehr übertragen werden. Der Radius der Zone beträgt QS x 3 in Schritt. Die Zone entsteht mit dem Zaubernden als Mittelpunkt. Er kann sich vor der Fertigkeitsprobe entscheiden, ob sie sich mit ihm mit bewegt oder an Ort und Stelle verbleiben soll. In letzterem Falle darf er sich maximal QS x 3 Schritt von der Zone entfernen, ansonsten endet der Zauber.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Andere Kosten ",
        "(FW 8, 2 AP): Die AsP-Kosten, um den Zauber aufrechtzuerhalten, betragen 4 AsP pro 30 Minuten."
      ],
      "1": [
        "Reichweite Berührung ",
        "(FW 12, 4 AP): Der Zauber hat die Reichweite Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_SchwarzundRot.html",
    "name": "Schwarz und Rot",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "MU/CH/KO (modifiziert um ZK)",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Das Ziel verliert am Ende jeder Stunde LeP in Höhe der QS.",
      "Wirkungsdauer": "8 Stunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Lebewesen ",
        "(FW 8, 3 AP): Die Zielkategorie des Zaubers ist Lebewesen."
      ],
      "1": [
        "Schwächung ",
        "(FW 12, 6 AP): Am Ende jeder Stunde sinken zusätzlich zum Schaden alle körperlichen Eigenschaften um 1 (bis zu einem Minimum von 6). Sie regenerieren sich augenblicklich am Ende der Wirkungsdauer."
      ],
      "2": [
        "Todesfluch ",
        "(FW 16, 9 AP): Der Zauberer kann zusätzlich beliebig viele seiner LeP opfern, um am Ende der ersten Stunde in dieser Höhe SP beim Ziel zu verursachen."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_SchwarzerSchrecken.html",
    "name": "Schwarzer Schrecken",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Klingen der Nacht Seite 110",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Nachtalben u. a.",
      "Wirkung": "Das Ziel erhält 1 Stufe des Zustands <em>Furcht</em>, der sich gegen alles richtet, was Schwarz ist.",
      "Wirkungsdauer": "QS Stunden",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Andere Farbe ",
        "(FW 8, 1 AP): Der Zauberer kann eine andere Farbe als Schwarz wählen."
      ],
      "1": [
        "Längere Wirkungsdauer ",
        "(FW 12, 2 AP): Die Wirkungsdauer beträgt QS x 2 Stunden."
      ],
      "2": [
        "Große Angst ",
        "(FW 16, 3 AP): Das Opfer erleidet 2 Stufen "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Schmerzenlindern.html",
    "name": "Schmerzen lindern",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Heilung",
      "Probe": "MU/IN/CH",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Elfen, Gildenmagier",
      "Wirkung": "Je nach QS können mit diesem Zauberspruch Stufen von <em>Schmerz </em>augenblicklich abgebaut werden. Die Wirkung ist nicht kumulativ, es gelten jeweils die Auswirkungen der höchsten QS.<ul><li><strong>QS 1: </strong>1 Stufe <em>Schmerz</em></li><li><strong>QS 2: </strong>1 Stufe <em>Schmerz</em>, +1 KO für 1 Minute</li><li><strong>QS 3: </strong>2 Stufen <em>Schmerz</em>, +1 KO für 1 Minute</li><li><strong>QS 4: </strong>3 Stufen <em>Schmerz</em>, +1 KO für 1 Minute</li><li><strong>QS 5: </strong>4 Stufen <em>Schmerz</em>, +1 KO für 1 Minute</li><li><strong>QS 6: </strong>4 Stufen <em>Schmerz</em>, +2 KO für 1 Minute</li></ul>",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Größere Reichweite ",
        "(FW 8, 2 AP): Der Zauber hat die Reichweite 2 Schritt."
      ],
      "1": [
        "Verteilte Wirkung ",
        "(FW 12, 4 AP): Die Senkung der Zustandsstufe "
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 6 AP): Der Zauber kann auf bis zu 2 Ziele gleichzeitig gesprochen werden. Das zweite Ziel kostet 4 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Schlangenruf.html",
    "name": "Schlangenruf",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Dämonisch",
      "Probe": "MU/CH/CH",
      "Publikation": "Die Streitenden Königreiche Seite 166",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Hexen",
      "Wirkung": "Die Hexe ruft mit diesem Zauberspruch bis zu QS x 2 Schlangen herbei, die für sie kämpfen. Es erscheinen maximal so viele Schlangen, wie die Anzahl der Gegner der Hexe beträgt. Die Hexe muss einen Punkt dem die Tiere dann in einem Radius von QS/2 Schritt erscheinen. Die Hexe kann gezielt Gegner benennen, welche die Schlangen dann angreifen. Sie kann jedoch nicht mehrere Tiere auf einen Gegner hetzen. Stirbt ein Gegner, verschwindet die gerufene Schlange wieder im Nichts. Nach ihrem Erscheinen können die Schlangen sich beliebig weit vom Ort ihrer Herbeirufung wegbewegen. Die Schlangen sind magische Wesen, die aus Magie erschaffen wurden. Endet die Wirkungsdauer, verschwinden die Schlangen wieder im Nichts. Ihre Werte entsprechen der Stabschlange (siehe Regelwerk Seite 329), allerdings sind sie ungiftig.",
      "Wirkungsdauer": "bis zum Tod der Tiere, maximal jedoch 20 KR",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Sanftmut.html",
    "name": "Sanftmut",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Regelwerk Seite 297",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Druiden, Hexen",
      "Wirkung": "Das verzauberte Tier wird friedfertig und lässt sich ohne Schwierigkeiten von dem Zauberer anfassen. Der Zauberspruch lässt sich nur auf Tiere anwenden.",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Tiere"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Längere Wirkungsdauer 1 ",
        "(FW 8, 1 AP): Die Wirkungsdauer beträgt QS x 5 Minuten."
      ],
      "1": [
        "Erhöhte Reichweite ",
        "(FW 12, 2 AP): Die Reichweite beträgt 16 Schritt."
      ],
      "2": [
        "Längere Wirkungsdauer 2 ",
        "(FW 16, 3 AP): Die Wirkungsdauer beträgt QS x 10 Minuten. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Satuarias_Herrlichkeit.html",
    "name": "Satuarias Herrlichkeit",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO",
      "Publikation": "Regelwerk Seite 297",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Zaubernde erzeugt subtile Veränderungen seines Körpers, die ihn begehrlicher wirken lassen. Haar und Teint werden verbessert, die Zähne aufgehellt und begradigt und die gesamte Statur dem gewünschten Schönheitsideal angepasst. Proben auf das Talent Betören (Anbändeln, Liebeskünste) und Überreden (Schmeicheln) sind um QS erleichtert. Je nach Situation können andere Gesellschaftstalente auf die gleiche Weise erleichtert werden. Auf Wesen mit anderem Schönheitsideal wirkt die Veränderung nicht.",
      "Wirkungsdauer": "QS x 3 in Stunden",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite Berührung ",
        "(FW 8, 2 AP): Die Reichweite ist Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ],
      "1": [
        "Längere Wirkungsdauer ",
        "(FW 12, 4 AP): Die Wirkungsdauer beträgt QS x 4 Stunden."
      ],
      "2": [
        "Wahre Schönheit ",
        "(FW 16, 6 AP): Alle Lebewesen erleiden gegen den Verzauberten eine Erschwernis von 1 auf alle AT und FK sowie alle Zauber und Liturgien, die ihm Schaden verursachen würden, da sie nur ungern gegen ihn kämpfen."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Sapefacta.html",
    "name": "Sapefacta",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Telekinese",
      "Probe": "KL/CH/FF",
      "Publikation": null,
      "Reichweite": "selbst",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Innerhalb eines Radius von QS Schritt um den Zauberer werden Lebewesen und ihre am Körper getragene Kleidung von jeglichem Schmutz befreit. Dies kann durch Verschmutzung verursachte Erschwernisse bei Gesellschaftstalenten, beispielsweise bei <em>Etikette (Benehmen) </em>oder <em>Betören (Aufhübschen)</em>, nach Meisterentscheid reduzieren. Tätowierungen und ähnliche permanente Veränderungen sind nicht von der Zauberwirkung betroffen.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gerüche ",
        "(FW 8, 1 AP) Auch Gerüche werden entfernt."
      ],
      "1": [
        "Zielkategorie Lebewesen ",
        "(FW 12, 2 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen."
      ],
      "2": [
        "Größerer Radius ",
        "(FW 16, 3 AP): Der Wirkungsradius beträgt QS x 2 Schritt."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Respondami.html",
    "name": "Respondami",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Regelwerk Seite 297",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Der Verzauberte muss auf QS Fragen wahrheitsgemäß antworten. Die Fragen müssen mit Ja oder Nein zu beantworten sein. Auf andere Fragen kann der Verzauberte schweigen. Das Opfer ist sich während der Wirkung des Zaubers bewusst, was es sagt. Das Opfer muss die Sprache des Zauberers verstehen und sprechen können, ansonsten kann es ihm nicht antworten.",
      "Wirkungsdauer": "QS x 15 in Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Mehr Fragen ",
        "(FW 8, 2 AP): Das Ziel muss QS + 2 Fragen wahrheitsgemäß beantworten."
      ],
      "1": [
        "Antworten mit Zahlen ",
        "(FW 12, 4 AP): Das Ziel kann auch Fragen beantworten, deren Antwort Zahlen darstellen („Wie viele Gäste waren auf der Feier gestern anwesend?“ „42!“)"
      ],
      "2": [
        "Wann-Fragen beantworten ",
        "(FW 16, 6 AP): Das Ziel kannauch Fragen zu Zeiten beantworten („Wann ist die Kaiserin nach Gareth aufgebrochen?“ „Vor drei Tagen.“)."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Salander.html",
    "name": "Salander",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO (modifiziert um ZK)",
      "Publikation": "Regelwerk Seite 297",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Mit diesem Zauberspruch wird ein Lebewesen in ein anderes, kleineres und leichteres Lebewesen verwandelt. Bei sehr massiven Änderungen (Mammut zu Maus) ist die Probe um bis zu 3 erschwert. Es kann nur in Lebewesen verwandelt werden, die dem Zaubernden bekannt sind. Das Ziel behält einen kleinen Teil seiner geistigen Fähigkeiten und Erinnerungen, übernimmt jedoch die körperlichen Fähigkeiten der neuen Gestalt. Zudem behält es seine Lebensenergie und seinen natürlichen Rüstungsschutz, weshalb ein in einen Löwenzahn verwandelter Krieger kaum auszureißen ist. Das Ziel kann nicht in magische oder übernatürliche Lebewesen verzaubert werden. Ausrüstung wird nicht mitverwandelt. Verwandelte können sich nach dem Ende der Wirkungsdauer bruchstückhaft an die Zeit als Tier oder Pflanze erinnern. Details zum Thema Verwandlung finden sich im Abschnitt Verwandlungsregeln im Regelwerk auf Seite 258.",
      "Wirkungsdauer": "QS x 3 in Stunden",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gleichwertig ",
        "(FW 8, 3 AP): Der Zauber kann genutzt werden, um das Ziel in ein Wesen der gleichen Größe zu verwandeln (z. B. einen Menschen in ein Reh oder einen Raben in eine Taube)."
      ],
      "1": [
        "Geistige Fähigkeiten ",
        "(FW 12, 6 AP): Das Ziel behält während der Verwandlung seine vollständigen geistigen Fähigkeiten und kann sich nach der Rückverwandlung an alles erinnern."
      ],
      "2": [
        "Längere Wirkungsdauer ",
        "(FW 16, 9 AP): Die Wirkungsdauer beträgt QS Tage."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Regeneratio.html",
    "name": "Regeneratio",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro KR (Kosten nicht modifizierbar)",
      "Merkmal": "Heilung",
      "Probe": "IN/CH/KO",
      "Publikation": null,
      "Reichweite": "selbst",
      "Steigerungsfaktor": "D",
      "Verbreitung": "Elfen",
      "Wirkung": "Der Zauberer regeneriert jede Kampfrunde LeP in Höhe der QS/2. Maximal kann der Zauberspruch FW Kampfrunden aufrechterhalten werden.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen (Zauberdauer ist nicht modifizierbar)",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zauberdauer modifizierbar ",
        "(FW 8, 4 AP): Die Zauberdauer ist modifizierbar."
      ],
      "1": [
        "Reichweite Berührung ",
        "(FW 12, 8 AP): Die Reichweite umfasst Berührung, sodass der Zauber auch auf andere gelegt werden kann."
      ],
      "2": [
        "Reichweite 8 Schritt ",
        "(FW 16, 12 AP): Die Reichweite beträgt 8 Schritt und der Zauber kann auch auf andere gelegt werden. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Reflectimago.html",
    "name": "Reflectimago",
    "properties": {
      "AsP-Kosten": "2 AsP",
      "Merkmal": "Illusion",
      "Probe": "KL/CH/FF",
      "Publikation": null,
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Der Zauberer überzieht die glatte Fläche eines Objekts mit einer maximal 2 Rechtschritt messenden spiegelnden Oberfläche. Dabei handelt es sich jedoch nicht um einen echten Spiegel, sondern eine Illusion, man kann das Objekt also nicht dazu verwenden, um z. B. Sonnenstrahlen zu bündeln oder jemanden zu blenden. Details zum Thema Illusionen finden sich im <strong>Regelwerk</strong> auf Seite <strong>259.</strong>",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 1 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 2 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 3 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Radau.html",
    "name": "Radau",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro Kampfrunde",
      "Merkmal": "Telekinese",
      "Probe": "KL/FF/KK",
      "Publikation": "Regelwerk Seite 296",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Besen oder ein anderer Stab oder Stock nach Wahl des Zaubernden greift von sich aus einen von der Hexe bestimmten Gegner innerhalb von 8 Schritt an (nach dem Wirken des Zaubers können Ziel und Besen sich weiter entfernen). Er gilt während des Zaubers als unzerbrechlich und magisch und schlägt eine Attacke pro Runde zu. Er kann dabei keine Kampfmanöver ausführen. Seine Werte sind INI 12+1W6, AT 10+(QS), TP 1W6+3, GS 12. Sollte der Besen vor Ablauf der Wirkungsdauer den Gegner getötet haben oder keinen Gegner mehr vor sich haben, dann greift er ein weiteres zufälliges Opfer innerhalb von 16 Schritt an (eventuell auch die Hexe selbst). Ist kein Opfer in dieser Reichweite, endet der Zauber. Um den Besen festzuhalten, ist ein erfolgreicher Angriff mit Raufen und der Sonderfertigkeit Haltegriff nötig. Für diese Zwecke verfügt der Stab über eine PA in Höhe der Hälfte der AT und einen Wert in Kraftakt von 10 Punkten mit Eigenschaften von 14 für die Probe.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Objekt"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Plumbumbarum.html",
    "name": "Plumbumbarum",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Einfluss",
      "Probe": "MU/CH/GE (modifiziert um SK)",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier, Scharlatane",
      "Wirkung": "Das Ziel erleidet einen Abzug in Höhe der QS des Zaubers auf seine AT.",
      "Wirkungsdauer": "5 Kampfrunden",
      "Zauberdauer": "2 Aktionen (Zauberdauer ist nicht modifizierbar)",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Senkung der Parade ",
        "(FW 8, 2 AP): Zusätzlich zur AT sinkt auch die PA des Ziels um QS/2."
      ],
      "1": [
        "Zielkategorie Lebewesen ",
        "(FW 12, 4 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 6 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 4 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Psychostabilis.html",
    "name": "Psychostabilis",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 10 Minuten",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/FF",
      "Publikation": "Regelwerk Seite 296",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Mittels dieses Zauberspruchs wird kurzfristig die Resistenz gegen geistige Beeinflussung gestärkt. Die Seelenkraft verbessert sich um QS/2.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Verteilte Wirkung ",
        "(FW 8, 2 AP): Die Steigerung der Seelenkraft kann auf mehrere Ziele verteilt werden, die vor dem Wirken des Zaubers benannt werden müssen. Kann der Zauberer z. B. 3 Punkte Seelenkraft erhöhen, darf er drei Zielen 1 Punkt geben, oder einem Ziel 2 Punkte und einem anderen 1 Punkt."
      ],
      "1": [
        "Schnellsteigerung ",
        "(FW 12, 4 AP): Die Seelenkraft steigt bei QS 1-3 um 1, bei QS 4-6 um 2. Dafür dauert der Zauber nur 2 Aktionen. Das Wirken dieser Erweiterung ist um 2 Punkte erschwert."
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Projectimago.html",
    "name": "Projectimago",
    "properties": {
      "AsP-Kosten": "8 AsP + 1 AsP pro zusätzlicher Meile",
      "Merkmal": "Illusion",
      "Probe": "MU/IN/CH",
      "Publikation": null,
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Der Zauberer projiziert ein optisches Ebenbild seiner selbst an einen gewünschten Ort (inklusive Kleidung und Gegenständen, die er am Körper trägt). Für die dortigen Beobachter sieht es so aus, als stünde eine reale Person vor ihnen, die alle Handlungen vollzieht, die der Zauberer durch Bewegung vorgibt. Dreht er sich also im Kreis und springt in die Luft, wird die Projektion das Gleiche tun. Der Ort der Erscheinung darf maximal 5 Meilen + 1 Meile pro vom Zauberer zusätzlich freiwillig investierten AsP entfernt sein, und dieser muss ihn schon einmal aufgesucht haben oder ihn sehen können. Eine Übertragung der Sinne findet nicht statt, der Zauberer kann also im Normalfall nur vermuten, wie die Reaktionen am Zielort ausfallen. Details zum Thema Illusionen finden sich im <strong>Regelwerk</strong> auf Seite <strong>259</strong>.",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 2 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 4 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 6 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Physiostabilis.html",
    "name": "Physiostabilis",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 10 Minuten",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/FF",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Mittels dieses Zauberspruchs wird kurzfristig die Widerstandskraft gegen körperliche Beeinflussungen gestärkt. Die Zähigkeit des Verzauberten verbessert sich um QS/2.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Verteilte Wirkung ",
        "(FW 8, 2 AP): Die Steigerung der Zähigkeit kann auf mehrere Ziele verteilt werden. Diese müssen vor Wirken des Zaubers benannt werden. Kann der Zauberer z. B. 3 Punkte Zähigkeit erhöhen, kann er drei Zielen 1 Punkt geben, oder einem Ziel 2 Punkte und einem anderen 1 Punkt."
      ],
      "1": [
        "Schnellsteigerung ",
        "(FW 12, 4 AP): Die Zähigkeit steigt bei QS 1-3 um 1, bei QS 4-6 um 2. Dafür dauert der Zauber nur 2 Aktionen. Das Wirken dieser Erweiterung ist um 2 erschwert."
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Pestilenz_ersp%C3%BCren.html",
    "name": "Pestilenz erspüren",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Hellsicht",
      "Probe": "MU/KL/IN",
      "Publikation": "Die Streitenden Königreiche Seite 166",
      "Reichweite": "1 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Druiden",
      "Wirkung": "Mit diesem Zauberspruch kann der Druide erspüren, welche Art von Krankheit das Opfer befallen hat. Je mehr QS er erzielt, desto mehr kann er über die Erkrankung herausfinden. Zudem erhält er eine Erleichterung von QS/2, wenn er zur Behandlung eines Patienten eine Probe auf Heilkunde Krankheiten ablegt.<br/>QS 1: Hat das Opfer den Status Krank?<br/>QS 2: Welche Stufe hat die Krankheit? Hat das Opfer schon jemand anderen mit der Krankheit angesteckt?<br/>QS 3: Wie heißt die Krankheit? Litt das Opfer schon einmal an der Krankheit?<br/>QS 4: Welche Behandlung gibt es?<br/>QS 5: Welche Gegenmittel gibt es?<br/>QS 6: Gibt es besondere Umstände (z. B. magische Ursache)?",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Penetrizzel.html",
    "name": "Penetrizzel",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro Minute",
      "Merkmal": "Hellsicht",
      "Probe": "MU/KL/IN",
      "Publikation": "Regelwerk Seite 296",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Zaubernde kann durch feste Materie blicken. Pro QS kann der Zaubernde 20 Halbfinger durchblicken. Magiestörendes Material kann die Probe erschweren (z. B. Eisen –1, Koschbasalt –4). Magische Objekte können nicht durchblickt werden. Herrscht auf der anderen Seite des Hindernisses Dunkelheit oder Nebel, wirkt sich dies ganz normal auf die Sicht des Zaubernden aus.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Sehen und Hören ",
        "(FW 8, 2 AP): Der Zauberer kann nicht nur durch das Objekt sehen, sondern auch hindurch hören."
      ],
      "1": [
        "Helligkeit ",
        "(FW 12, 4 AP): Sollte die Sicht hinter das Objekt mangels Beleuchtung eingeschränkt sein, so kann der Zauberer QS/2 Stufen durch natürliche Dunkelheit verursachte Sichtmodifikatoren ignorieren."
      ],
      "2": [
        "Durch Wände hindurchzaubern ",
        "(FW 16, 6 AP): Der Zauberer kann auch hinter dem Objekt / der Wand befindliche Ziele verzaubern, solange er sie sieht. Die Probe für den Zauber, der durch das Hindernis wirken soll, ist dabei aber um 1 erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/paral.html",
    "name": "Paralysis",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO (modifiziert um ZK)",
      "Publikation": "Regelwerk Seite 296",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Der  Körper  des  Verzauberten  versteift und verhärtet sich. Wird er vollständig paralysiert (Stufe IV), verwandelt sich sein Körper in eine unzerstörbare Substanz, ohne sein Gewicht zu verändern. Ein so versteinerter Körper ist durch gewöhnliche Waffen, Feuer oder Stürze nicht zu verletzen. Das  Opfer  kann  sich  nicht  bewegen,  fühlen  oder hören, aber innerhalb seines Sichtfeldes sehen. Die Wirkung  von  Giften  und  Krankheiten  kommt  zum Stillstand.<ul><li>QS 1:1 Stufe <em>Paralyse</em>, aber nur für 2 KR</li><li>QS 2: 1 Stufe <em>Paralyse</em></li><li>QS 3: 2 Stufen<em> Paralyse</em></li><li>QS 4: 3 Stufen <em>Paralyse</em></li><li>QS 5: 4 Stufen <em>Paralyse</em></li><li>QS 6: 4 Stufen<strong> Paralyse</strong>, aber für die doppelte Wirkungsdauer</li></ul>",
      "Wirkungsdauer": "QS x 2 in Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Verteilte Wirkung ",
        "(FW 8, 2 AP): Die Zustandsstufen können auf mehrere Ziele verteilt werden, die vor dem Wirken des Zaubers benannt werden müssen. Kann der Zauberer z. B. 3 Stufen "
      ],
      "1": [
        "Längere Wirkung ",
        "(FW 12, 4 AP): Die Wirkungsdauer steigt auf QS x 3 Minuten."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 6 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 4 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Orcanofaxius.html",
    "name": "Orcanofaxius",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/CH",
      "Publikation": null,
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Aus den Fingern des Zaubernden schießt ein Luftstrahl, der in gerader Linie sein Ziel trifft. Der Magier muss keine zusätzliche Aktion aufwenden, um nach dem Wirken des Zaubers zu treffen. Das Treffen ist in der Zauberdauer inbegriffen. Das getroffene Ziel erleidet 2W6 + (QS x 2) Trefferpunkte Schaden. Der Luftstrahl zählt als Fernkampfangriff mit einer Schusswaffe und kann entsprechend geblockt werden, und auch ein Ausweichen ist möglich. An Schilden erzeugt er Strukturschaden, wenn er auf sie trifft. Der Strahl trifft automatisch, wenn man sich nicht verteidigt. Trifft der Luftstrahl sein Ziel, werden die TP durch den RS des Ziels vermindert. Das Ziel wird zudem bei 1-3 auf 1W6 umgestoßen und erhält den Status <em>Liegend</em>.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Intensiver Strahl ",
        "(FW 8, 3 AP): Es muss nicht gewürfelt werden, ob das Ziel den Status "
      ],
      "1": [
        "Windender Strahl ",
        "(FW 12, 6 AP): Das Ziel kann schlechter ausweichen. Das Ausweichen ist zusätzlich um 2 erschwert. Es entstehen zusätzliche Kosten in Höhe von 2 AsP."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 9 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 4 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Oculus_llusionis.html",
    "name": "Oculus Illusionis",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Illusion",
      "Probe": "KL/IN/CH",
      "Publikation": "Regelwerk Seite 295",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Mit diesem Illusionszauber ist die Täuschung des Sichtsinnes möglich. Es lassen sich bewegliche dreidimensionale Illusionen erzeugen, die sich rein auf Sicht auswirken. Details zum Thema Illusionen finden sich im Abschnitt Illusionsregeln im <strong>Regelwerk </strong>auf Seite <strong>259</strong>.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 2 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 4 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 6 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Pentagramma.html",
    "name": "Pentagramma",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Antimagie",
      "Probe": "MU/KL/CH",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Ein niederer Dämon wird gebannt, wenn der Zauberer mehr QS erzielt, als die Anrufungsschwierigkeit beträgt (Anrufungsschwierigkeiten von 0 oder höher zählen als 0). Es kann sich dabei sowohl um einen beschworenen als auch um einen freien Dämon handeln. Ebenso ist es möglich, Dämonen zu bannen, die an Objekte oder Wesen gebunden bzw. in diese eingefahren sind. Bei der Bannung wird der Dämon in das Pentagramm gezogen und wird zurück in die Siebte Sphäre gezwungen.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "8 Aktionen (Zauberdauer ist nicht modifizierbar)",
      "Zielkategorie": "Dämonen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zauberdauer modifizierbar ",
        "(FW 8, 3 AP): Die Zauberdauer ist modifizierbar."
      ],
      "1": [
        "Zwei Dämonen ",
        "(FW 12, 6 AP): Der Zauber kann gegen zwei Dämonen gleichzeitig eingesetzt werden. Allerdings darf die Anrufungsschwierigkeit beider Dämonen zusammen die QS nicht übersteigen. Es entstehen zusätzliche Kosten in Höhe von 8 AsP pro Dämon nach dem ersten."
      ],
      "2": [
        "Drei Dämonen ",
        "(FW 16, 9 AP): Der Zauber kann gegen drei Dämonen gleichzeitig eingesetzt werden. Allerdings darf die Anrufungsschwierigkeit der Dämonen zusammen die QS nicht übersteigen. Es entstehen zusätzliche Kosten in Höhe von 8 AsP pro Dämon nach dem ersten. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_OculusAstralis.html",
    "name": "Oculus Astralis",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Hellsicht",
      "Probe": "KL/IN/CH",
      "Publikation": null,
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Die normale Sicht des Zauberers wird um eine astrale Wahrnehmung ergänzt. Sie ist nicht detailreich genug, um magische Analysen vorzunehmen, der Zauberer kann jedoch mittels magischer Unsichtbarkeit verborgene Dinge oder Personen erkennen. Auch die Orientierung an magisch durchdrungenen Orten, beispielsweise dem Limbus, ist dank dieser Astralsicht erleichtert oder überhaupt erst möglich. Während er diese Sicht einsetzt, erleidet der Zauberer einen Modifikator von –2 auf alle Talentproben.",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Längere Wirkungsdauer 1 ",
        "(FW 8, 2 AP): Die Wirkungsdauer beträgt QS x 5 Minuten."
      ],
      "1": [
        "Längere Wirkungsdauer 2 ",
        "(FW 12, 4 AP): Die Wirkungsdauer beträgt QS x 10 Minuten. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Längere Wirkungsdauer 3 ",
        "(FW 16, 6 AP): Die Wirkungsdauer beträgt QS x 30 Minuten. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Odem_Arcanum.html",
    "name": "Odem Arcanum",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Hellsicht",
      "Probe": "KL/IN/IN",
      "Publikation": "Regelwerk Seite 295",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "allgemein",
      "Wirkung": "Mit diesem Zauberspruch lässt sich aktives magisches Wirken auf Gegenständen und Personen erkennen. Je nach Stärke der astralen Kräfte im Objekt kann die Probe erleichtert oder erschwert werden. Je nach QS können dabei nachfolgende Analysen mittels des Zaubers Analys beeinflusst werden. Der Zauberer kann nur ein ausgewähltes Wesen oder Objekt in Reichweite untersuchen. Er hat keine Rundumsicht.<br/>QS 1: Ist Magie vorhanden oder nicht?<br/>QS 2: Die maximale QS bei der Magischen Analyse steigt um 1.<br/>QS 3: Die Fertigkeitsprobe eines Analys auf das gleiche Objekt ist um 1 erleichtert. <br/>QS 4: Die Fertigkeitsprobe eines Analys auf das gleiche Objekt ist um 2 erleichtert.<br/>QS 5: Die maximale QS bei der Magischen Analyse steigt um 2.<br/>QS 6: Die Fertigkeitsprobe eines Analys auf das gleiche Objekt ist um 3 erleichtert.<br/>Die Boni für die maximale QS bei der Magischen Analyse sind nicht kumulativ bzw. auch nicht die Erleichterungen beim Analys. Wer also QS 4 beim Odem erzielt hat, bekommt keine Erleichterung von 3 (1 durch QS 3 + 2 durch QS 4), sondern nur eine von 2. Allerdings erhält der Held die höchsten Boni der beiden Verbesserungsmöglichkeiten. Ein Held mit QS 6 bekommt also eine Erleichterung von 3 auf den nachfolgenden Analys (durch QS 6) und die maximale QS bei der Magischen Analyse ist um 2 erhöht (durch QS 5). Mehr zur Magischen Analyse siehe Regelwerk Seite 269.",
      "Wirkungsdauer": "1 Minute",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Wesen, Objekt"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zwei Gegenstände ",
        "(FW 8, 1 AP): Der Zauberer kann den Spruch auf bis zu zwei Gegenstände gleichzeitig wirken."
      ],
      "1": [
        "Kegelsicht ",
        "(FW 12, 2 AP): Der Zauber wirkt für 1 KR lang innerhalb des Sichtfelds des Zauberers bis maximal 8 Schritt Entfernung auf alle in diesem befindlichen Objekte und Wesen. Das Sichtfeld desZauberers ist nicht veränderlich, erlaubt ist also nur der Blick in eine Richtung. Da er sich nicht auf eine spezielle Sache konzentrieren kann, werden die erreichten QS vor Konsultieren der Tabelle halbiert. Diese Art der magischen Wahrnehmung zählt als ungerichtete magische Wahrnehmung."
      ],
      "2": [
        "Rundumsicht ",
        "(FW 16, 3 AP): Für 1 KR erhält der Held eine Rundumsicht, die 8 Schritt weit reicht. Er kann sich auf der Stelle drehen, aber sich nicht anderweitig bewegen. Bei Gelingen des Zaubers erhält er automatisch nur 1 QS, kann aber damit alle Gegenstände in Blickreichweite erfassen. Diese Art der magischen Wahrnehmung zählt als ungerichtete magische Wahrnehmung."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Orcanosphaero.html",
    "name": "Orcanosphaero",
    "properties": {
      "AsP-Kosten": "32 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/KO",
      "Publikation": null,
      "Reichweite": "32 Schritt",
      "Steigerungsfaktor": "D",
      "Verbreitung": "Druiden",
      "Wirkung": "Aus den Händen des Zaubernden schießt ein Sturmball, der in gerader Linie sein Ziel trifft. Das Treffen ist in der Zauberdauer inbegriffen, der Magier muss also keine zusätzliche Aktion aufwenden. Der Sturmball explodiert, wenn er sein Ziel oder auf ein großes, festes Hindernis trifft (z. B. eine Wand oder einen Schild). Verlässt der Sturmball die Reichweite, ohne ein Ziel zu treffen, so löst er sich auf. Auch die Gefährten des Zauberers können getroffen werden, wenn er explodiert. Der Radius der Explosion beträgt 5 Schritt. Der Schaden beträgt einen Schritt um das Zentrum der Explosion herum 2W6 + (QS x 3) Trefferpunkte (auch gegen leblose Objekte als Strukturschaden). Pro Schritt Entfernung von diesem Bereich verringert sich der Schaden um 3 TP. Der Sturmball trifft automatisch, wenn man ihm nicht aktiv zu entgehen versucht. Dazu muss eine Verteidigung eingesetzt und eine Probe auf <em>Körperbeherrschung (Kampfmanöver) </em>abgelegt werden. Pro QS hat der Held sich 1 Schritt weit weg vom Zentrum der Explosion bewegt. Trifft der Sturmball sein Ziel, werden die TP durch den RS des Ziels vermindert. Alle getroffenen Ziele werden außerdem bei 1-3 auf 1W6 umgestoßen und erhalten den Status <em>Liegend</em>.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Intensive Explosion ",
        "(FW 8, 4 AP): Es muss nicht gewürfelt werden, ob die Ziele den Status "
      ],
      "1": [
        "Schneller Ball ",
        "(FW 12, 8 AP): Die Ziele können schlechter ausweichen. Das Ausweichen ist um zusätzlich 1 erschwert. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ],
      "2": [
        "Großer Radius ",
        "(FW 16, 12 AP): Der Explosionsradius beträgt 7 Schritt. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Objektbann.html",
    "name": "Objektbann",
    "properties": {
      "AsP-Kosten": "8 AsP bzw. 16 AsP für Zauber mit Zielkategorie Zone",
      "Merkmal": "Antimagie",
      "Probe": "KL/IN/FF",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Ein Zauber des Merkmals Objekt wird aufgehoben, wenn dessen QS nicht höher als die QS des Objektbanns ist. Der Bann entfaltet keine Wirkung gegen Zauber, deren Wirkung sofort eintritt (z. B. einmaliger Schaden). Auch gegen Zauber, deren Wirkung bereits vollendet ist, oder permanent wirkende Sprüche hilft er nicht. Wird der Objektbann gegen einen Zauber der Zielkategorie Zone eingesetzt, genügt es, wenn sich ein Teil von dieser innerhalb der Reichweite befindet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite erhöhen ",
        "(FW 8, 2 AP): Die Zaubermodifikation Reichweite erhöhen ist nicht erschwert."
      ],
      "1": [
        "Zauberdauer senken ",
        "(FW 12, 4 AP): Die Zaubermodifikation Zauberdauer senken ist nicht erschwert."
      ],
      "2": [
        "Kosten senken ",
        "(FW 16, 6 AP): Die Zaubermodifikation Kosten senken ist nicht erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Objectofixo.html",
    "name": "Objectofixo",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Objekt",
      "Probe": "MU/KL/KK",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Das Zielobjekt wird am Boden befestigt und kann nur mit einer um die QS x 2 erschwerten Probe auf <em>Kraftakt (Drücken &amp; Verbiegen, Stemmen &amp; Heben, Ziehen</em> <em>&amp; Zerren) </em>davon getrennt werden. Ist dies einmal gelungen, endet der Zauber vorzeitig. Das verzauberte Objekt darf maximal 5 Stein wiegen. Bei dem Boden kann es sich auch um andere waagerechte Flächen wie z. B. Tische oder Schiffsplanken handeln. Der gewählte Untergrund ist nicht dagegen gefeit, bewegt zu werden, wodurch eine Befestigung an Sand, lockerer Erde oder kleinen Möbelstücken meist nur wenig Sinn ergibt. Wird das Objekt während der Wirkungsdauer zerstört, haften stattdessen seine Trümmerstücke sowie der eventuell vorhandene Inhalt am Boden. In diesem Fall muss nur für eines der Stücke eine Probe auf <em>Kraftakt </em>gelingen, um den Zauber für alle Teile vorzeitig enden zu lassen.",
      "Wirkungsdauer": "QS Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Längere Wirkungsdauer ",
        "(FW 8, 1 AP): Die Wirkungsdauer beträgt QS Stunden."
      ],
      "1": [
        "Höheres Gewicht ",
        "(FW 12, 2 AP): Das Objekt darf bis zu 25 Stein wiegen."
      ],
      "2": [
        "Wände und Decken ",
        "(FW 16, 3 AP): Das Objekt kann auch an Wänden oder Decken fixiert werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Objectobscuro.html",
    "name": "Objectobscuro",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers) + 4 AsP pro 5 Minuten",
      "Merkmal": "Objekt",
      "Probe": "KL/FF/KO",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Das Zielobjekt wird innerhalb von 20 – (QS x 3) Kampfrunden unsichtbar. Während dieser Zeit wird es immer durchscheinender, bis es schließlich nicht mehr zu sehen ist. Objekte und Personen in oder hinter dem Objekt bleiben weiterhin sichtbar. Das verzauberte Objekt darf maximal 5 Stein wiegen.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Längere Wirkung ",
        "(FW 8, 2 AP): Die Wirkung hält pro investierten 4 AsP 30 Minuten an."
      ],
      "1": [
        "Keine Aufrechterhaltung ",
        "(FW 12, 4 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ],
      "2": [
        "Unsichtbarer Inhalt ",
        "(FW 16, 6 AP): Auch Inhalte des verzauberten Gegenstands mit einem Gewicht bis 10 Stein werden unsichtbar."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Menetekel.html",
    "name": "Menetekel",
    "properties": {
      "AsP-Kosten": "2 AsP",
      "Merkmal": "Illusion",
      "Probe": "KL/CH/FF",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Gildenmagier, Scharlatane",
      "Wirkung": "Der Zauber ermöglicht es, illusionäre Schriftzüge erscheinen zu lassen. Alles, was der Zauberer sagt, erscheint an einer imaginären Wand von bis zu 10 Rechtschritt Fläche, die sich beliebig in Breite und Länge ausformen kann. Die Buchstaben können in beliebiger Größe und Anzahl dargestellt werden, gelten aber nicht als Sichthindernis. Details zum Thema Illusionen finden sich im <strong>Regelwerk </strong>auf Seite <strong>259</strong>.",
      "Wirkungsdauer": "QS x 30 Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 1 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 2 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 3 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Nuntiovolo.html",
    "name": "Nuntiovolo",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Sphären",
      "Probe": "MU/KL/CH",
      "Publikation": null,
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Der Zauberer beschwört eine Rauchgestalt in Form eines Vogels oder einer Fledermaus herauf, die ein maximal 250 Gramm wiegendes Objekt an einen vom Zauberer bestimmten Ort bringen kann. Die Entfernung zum Zielort darf höchstens 20 Meilen + 10 Meilen pro 1 AsP betragen. Sobald die Maximalentfernung überschritten wird, löst sich die Gestalt auf und lässt den Gegenstand fallen. Die Kreatur bewegt sich mit einer GS von 10 fort, ohne dabei vom Wetter beeinflusst zu werden. Sie besitzt eine LE in Höhe der QS und verfügt über keinen Verteidigungswert, allerdings ist sie von profanen Waffen nicht zu verletzen.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Dämonen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Höhere Grundreichweite ",
        "(FW 8, 2 AP): Die Grundreichweite der Kreatur beträgt 50 statt 20 Meilen."
      ],
      "1": [
        "Höhere Flugreichweite ",
        "(FW 12, 4 AP): Die Kreatur kann pro investiertem 1 AsP 25 Meilen statt 10 zurücklegen."
      ],
      "2": [
        "Schnelle Kreatur ",
        "(FW 16, 6 AP): Die Kreatur besitzt eine GS von 20 statt von 10."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Nebelwand.html",
    "name": "Nebelwand",
    "properties": {
      "AsP-Kosten": "mindestens 4 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/CH",
      "Publikation": "Regelwerk Seite 295",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden, Elfen",
      "Wirkung": "Der Zaubernde erschafft eine Zone aus dichtem Nebel, der sich von Wind nicht fortwehen lässt. Je investiertem AsP kann er 200 Kubikmeter Nebel erschaffen (was etwa einer kleineren Hütte entspricht). Die Nebelwolke kann nach Belieben geformt werden, ob als kompakte Kugel, als lang gezogenes Band oder gar in Form eines Drachen. Der Nebel erzeugt einen Sichtmodifikator der Stufe 2.",
      "Wirkungsdauer": "QS x 15 Minuten, danach verweht der Nebel",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Wandernder Nebel ",
        "(FW 8, 3 AP): Die Nebelwolke kann sich mit GS 4 nach dem Willen des Zauberers fortbewegen und dabei auch ihre Form ändern."
      ],
      "1": [
        "Lange Wirkungsdauer ",
        "(FW 12, 6 AP): Die Wirkungsdauer beträgt QS Stunden."
      ],
      "2": [
        "Dichter Nebel ",
        "(FW 16, 9 AP): Der Nebel ist so dicht, dass er als ein Sichtmodifikator Stufe 3 zählt."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Manus_Miracula.html",
    "name": "Manus Miracula",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Keines",
      "Probe": "KL/FF/KK",
      "Publikation": "Regelwerk Seite 294",
      "Reichweite": "selbst",
      "Verbreitung": "Allgemein",
      "Wirkung": "Der Zaubernde kann auf QS Schritt Distanz unbelebte Gegenstände verschieben, drehen, verformen und biegen, als würde er sie mit einer Hand ergreifen. Er kann jedoch maximal 1 Kilogramm damit anheben. Bei Proben auf Talente, beispielsweise um mit einem telekinetisch gehaltenen Pinsel etwas zu malen oder mit dem Zauberspruch eine Figur aus Ton zu formen, haben die dazu nötigen körperlichen Eigenschaften einen Wert von QS + 7. Die Werte können auch die des Helden übersteigen. Die Krafteinwirkungen wirken punktuell und recht langsam. Daher können mit den so manipulierten Gegenständen keine Attacken oder Paraden ausgeführt werden.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "2 Aktionen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Mehr Gewicht (",
        "FW 8, 1 AP): Der Zauber kann ein Gewicht von maximal 3 Stein bewegen."
      ],
      "1": [
        "Bessere Werte ",
        "(FW 12, 2 AP): Die körperlichen Eigenschaften verbessern sich auf QS + 9."
      ],
      "2": [
        "Noch bessere Werte ",
        "(FW 16, 3 AP): Die körperlichen Eigenschaften verbessern sich auf QS + 11. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Memorans.html",
    "name": "Memorans",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "KL/KL/IN",
      "Publikation": "Die Streitenden Königreiche Seite 166",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Durch den Zauberspruch kann sich der Zauberer alles einprägen, was er in den nächsten QS x 5 Minuten wahrnimmt, als besäße er ein fotografisches Gedächtnis. Dies kann ein Gespräch, gelesene Seiten, Wegstrecken, optische Eindrücke oder Gerüche umfassen.",
      "Wirkungsdauer": "1 Jahr",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende (selbst)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Merk dir mehr ",
        "(FW 8, 1 AP): Der Zauberer kann sich Eindrücke für QS x 15 Minuten einprägen."
      ],
      "1": [
        "Merk dir noch mehr ",
        "(FW 12, 2 AP): Der Zauberer kann sich Wahrnehmungen für QS x 1 Stunde einprägen. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Längere Wirkungsdauer ",
        "(FW 16, 3 AP): Die Wirkungsdauer beträgt 5 Jahre."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Manifesto.html",
    "name": "Manifesto",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Elementar</strong>",
      "Probe": "MU/KL/CH",
      "Publikation": "Regelwerk Seite 294",
      "Reichweite": "1 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "allgemein",
      "Wirkung": "Es manifestiert sich eine Handvoll eines bestimmten Elements nach Wahl des Zaubernden. Es handelt sich um einfache Manifestationen wie eine kleine Flamme, einen Kieselstein oder ein Stück Eis. Elementaristen erlernen diesen Zauberspruch früh in ihrer Ausbildung, um die Grundzüge der Herbeirufung zu erlernen, ohne Elementare zu belästigen (Insgesamt erscheint etwa eine Menge bvon 0,05 l pro QS).",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Objekt"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Größere Menge ",
        "(FW 8, 1 AP): Die Menge des Elements steigt auf 0,1 l pro QS."
      ],
      "1": [
        "Noch größere Menge ",
        "(FW 12, 2 AP): Die Menge des Elements steigt auf 0,2 l pro QS. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Noch viel größere Menge ",
        "(FW 16, 3 AP): Die Menge des Elements steigt auf 0,4 l pro QS. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_LastdesAlters.html",
    "name": "Last des Alters",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten nicht modifizierbar)",
      "Merkmal": "Dämonisch",
      "Probe": "IN/CH/KO (modifiziert um ZK)",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Das Ziel altert körperlich stark und wird zu einem Greis. Es wird jedoch nicht an Altersschwäche sterben und erhält am Ende der Wirkungsdauer sein ursprüngliches Alter zurück. Alle körperlichen Handlungen des Opfers sind aufgrund akuter Altersschwäche um QS/2 erschwert (z. B. Körpertalente, Handwerkstalente). Dies umfasst auch Kampfhandlungen und somit AT, PA, AW und FK. Der Zaubernde hat nach dem Wirken des Zaubers QS Kampfrunden Zeit, um sein Ziel zu berühren, damit der Spruch seine Wirkung entfalten kann. Ansonsten verpufft der Zauberspruch wirkungslos. Will ein Ziel nicht berührt werden, ist eine gelungene, nicht verteidigte Raufen-AT +2 oder eine AT +2 mit dem Traditionsartefakt notwendig.",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Längere Wirkungsdauer 1 ",
        "(FW 8, 3 AP): Der Zauber wirkt QS x 5 Minuten."
      ],
      "1": [
        "Längere Berührungszeit ",
        "(FW 16, 6 AP): Nach dem Wirken des Zaubers hat der Zauberer QS x 2 KR Zeit, um sein Opfer zu berühren."
      ],
      "2": [
        "Längere Wirkungsdauer 2 ",
        "(FW 16, 9 AP): Der Zauber wirkt QS Stunden. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_ManusIllusionis.html",
    "name": "Manus Illusionis",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Illusion",
      "Probe": "KL/IN/CH",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Gildenmagier, Scharlatane",
      "Wirkung": "Mit diesem Illusionszauber ist die Täuschung des Tastsinnes möglich. Die Illusion muss dabei auf eine bereits vorhandene Oberfläche gelegt werden, da sie lediglich die Art des Fühlens ändert, jedoch nicht etwas Fassbares aus dem Nichts zu erschaffen vermag. Nur die Oberfläche fühlt sich anders an, nicht jedoch das gesamte Objekt. Details zum Thema Illusionen finden sich im <strong>Regelwerk </strong>auf Seite <strong>259</strong>.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone (max. 3 x 3 Schritt)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 1 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 2 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 3 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Motoricus.html",
    "name": "Motoricus",
    "properties": {
      "AsP-Kosten": "mindestens 4 AsP (Aktivierung) + Hälfte der notwendigen AsP pro 5 Minuten (Kosten sind nicht modifizierbar)",
      "Merkmal": "Telekinese",
      "Probe": "KL/FF/KK",
      "Publikation": "Regelwerk Seite 294",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Zaubernde kann unbelebte Gegenstände telekinetisch anheben und bewegen. Sie bewegen sich mit einer Geschwindigkeit von maximal QS + 2 Schritt pro Aktion und dürfen maximal QS x 20 Stein wiegen. Pro 5 Stein Gewicht muss der Zaubernde dafür 1 AsP aufbringen. Befinden sich andere Objekte auf dem zu bewegenden Gegenstand, zählt deren Gewicht mit hinzu. Die Bewegungen des Objekts sind träge, weshalb sie für Angriffe oder Paraden ungeeignet sind. Um ein so bewegtes Objekt durch Festhalten oder Drücken aufzuhalten, ist eine um QS erschwerte Probe auf <em>Kraftakt (Ziehen &amp; Zerren) </em>nötig.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Objekt"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Mehr Gewicht (",
        "FW 8, 2 AP): Pro 10 Stein Gewicht muss der Zauberer 1 AsP aufwenden."
      ],
      "1": [
        "Noch mehr Gewicht ",
        "(FW 12, 4 AP): Pro 15 Stein Gewicht muss der Zauberer 1 AsP aufwenden. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Mehrere Objekte ",
        "(FW 16, 6 AP): Mit dem Zauber können mehrere Objekte gleichzeitig bewegt werden, deren Gesamtgewicht aber nicht über dem zulässigen Maximum liegen darf."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Kusch.html",
    "name": "Kusch",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Druiden, Scharlatane",
      "Wirkung": "Das verzauberte Tier wird von Angst vor dem Zauberer erfüllt. Die genauen Auswirkungen hängen von der QS ab:</li><li><strong>QS 1: </strong>1 Stufe <em>Furcht</em>, aber nur für 2 KR</li><li><strong>QS 2: </strong>1 Stufe <em>Furcht</em></li><li><strong>QS 3: </strong>2 Stufen <em>Furcht</em></li><li><strong>QS 4: </strong>3 Stufen <em>Furcht</em></li><li><strong>QS 5: </strong>4 Stufen <em>Furcht</em></li><li><strong>QS 6: </strong>4 Stufen <em>Furcht</em>, aber für die doppelte Wirkungsdauer",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Tiere"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Verteilte Wirkung ",
        "(FW 8, 1 AP): Die Zustandsstufen können auf mehrere Ziele verteilt werden, die vor dem Wirken des Zaubers benannt werden müssen. Werden z. B. insgesamt 3 Stufen "
      ],
      "1": [
        "Längere Wirkung ",
        "(FW 12, 2 AP): Die Wirkungsdauer steigt auf QS x 5 Minuten."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 3 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 2 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_LungedesLeviatan.html",
    "name": "Lunge des Leviatan",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Heilung",
      "Probe": "MU/IN/KO",
      "Publikation": null,
      "Reichweite": "selbst",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Elfen, Gildenmagier",
      "Wirkung": "Während der Wirkungsdauer kann der Zauberer sprinten, ohne dass ihn dies erschöpft. Sein FW in <em>Körperbeherrschung (Laufen) </em>wird für die Wirkungsdauer verdoppelt. Bei Verfolgungsjagden gilt diese Verdopplung jedoch vor der Einberechnung der effektiven GS.",
      "Wirkungsdauer": "QS Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite Berührung ",
        "(FW 8, 1 AP): Als Reichweite gilt Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ],
      "1": [
        "Andere Tätigkeiten ",
        "(FW 12, 2 AP): Die Wirkung gilt auch für andere Fertigkeitsproben bei Verfolgungsjagden, z. B. "
      ],
      "2": [
        "Längere Wirkungsdauer ",
        "(FW 16, 3 AP): Die Wirkungsdauer beträgt QS x 3 KR."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Katzenaugen.html",
    "name": "Katzenaugen",
    "properties": {
      "AsP-Kosten": "2 AsP (Aktivierung) + 1 AsP pro 10 Minuten",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO",
      "Publikation": "Regelwerk Seite 294",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Hexen",
      "Wirkung": "Die Lichtempfindlichkeit der Augen des Zieles erhöht sich ungemein. So kann es auch in fast völliger Dunkelheit deutlich besser sehen. Pro QS sinkt die Stufe der Sichterschwernis um 1. In völliger Dunkelheit nützt dieser Zauberspruch nichts.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Längere Aufrechterhaltung ",
        "(FW 8, 1 AP): Pro 1 AsP kann der Spruch 1 Stunde aufrechterhalten werden."
      ],
      "1": [
        "Reichweite Berührung ",
        "(FW 12, 2 AP): Als Reichweite gilt Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ],
      "2": [
        "Mehrere Lebewesen ",
        "(FW 16, 3 AP): Der Zauber kann auch auf Lebewesen gewirkt werden, sogar auf mehrere gleichzeitig bis zur Anzahl der QS. Pro Lebewesen nach dem ersten entstehen zusätzliche Kosten von 1 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Kr%C3%B6tensprung.html",
    "name": "Krötensprung",
    "properties": {
      "AsP-Kosten": "2 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO",
      "Publikation": "Regelwerk Seite 294",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Verzauberte kann einmalig unnatürlich weit und hoch springen. Die Weite des Sprungs wird um QS + 3 in Schritt erhöht, die Höhe um QS. Mehr zu den Regeln des Springens siehe Regelwerk Seite 349.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Weiter und höher 1 ",
        "(FW 8, 1 AP): Die Weite des Sprungs steigt auf QS +5, die Höhe bis auf QS +1 Schritt."
      ],
      "1": [
        "Weiter und höher 2 ",
        "(FW 12, 2 AP): Die Weite des Sprungs steigt auf QS +7, die Höhe bis auf QS +3 Schritt. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Krötenflink ",
        "(FW 16, 3 AP): Der Verzauberte kann QS KR lang beliebig viele Sprünge ausführen. Pro KR kann ein Sprung durchgeführt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Karnifilo.html",
    "name": "Karnifilo",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Klingen der Nacht Seite 109",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Nachtalben u. a.",
      "Wirkung": "Das Ziel erhält den Status <em>Blutrausch</em>.",
      "Wirkungsdauer": "QS x 2 KR (statt der üblichen Zeit von 2W20 KR des Status’ <em>Blutrausch</em>)",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Wüterich ",
        "(FW 8, 2 AP): Die Boni auf AT und TP steigen zusätzlich um +1."
      ],
      "1": [
        "Vorhersehbares Ende ",
        "(FW 12, 4 AP): Der Zauberer kann zu Beginn des Zaubers festlegen, dass der "
      ],
      "2": [
        "Nur bestimmte Ziele ",
        "(FW 16, 6 AP): Der Zauberer kann Ziele ausschließen, die der Verzauberte nicht angreift."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Invercano.html",
    "name": "Invercano",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Antimagie",
      "Probe": "MU/IN/FF",
      "Publikation": null,
      "Reichweite": "selbst",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Wird der Zauberer Ziel eines Angriffszaubers, kann er diesen mittels Raufen oder seinem Traditionsartefakt auf seinen Gegner zurückwerfen. Hierzu ist eine Parade erforderlich, die um 4 Punkte erschwert ist. Gelingt diese, wird der Zauber auf den Anwender zurückgeworfen und erreicht sein neues Ziel zu Beginn der nächsten Kampfrunde. Als Angriffszauber gelten alle Zauber, die TP oder SP verursachen und bei denen mindestens 1 Würfel geworfen wird. Zauber mit Zonenwirkung können nicht zurückgeworfen werden. Weisen das ursprüngliche und das neue Ziel eine unterschiedliche SK bzw. ZK auf, wird dies ignoriert. Auch die Reichweite spielt für das Zurückwerfen des Zaubers keine Rolle. Jedes Mal, wenn ein Zauber durch einen Invercano zurückgeworfen wird, sinkt seine QS um 1. Sinkt die QS dadurch auf 0, löst sich der Zauber auf.",
      "Wirkungsdauer": "QS x 2 Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "selbst"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Verbesserte Reaktion 1 ",
        "(FW 8, 3 AP): Die Parade, um den Zauber zurückzuwerfen, ist nur um 2 erschwert."
      ],
      "1": [
        "Verbesserte Reaktion 2 ",
        "(FW 12, 6 AP): Die Parade, um den Zauber zurückzuwerfen, ist nicht erschwert. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Zurückspiegeln auf einen Dritten ",
        "(FW 16, 9 AP): Mittels einer zusätzlich um 4 erschwerten PA kann der Zauber auch auf eine dritte Person zurückgeworfen werden. Diese darf maximal so weit entfernt sein, wie der Zauberer, der den Angriffszauber gewirkt hat und muss unter dieselbe Zielkategorie fallen."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Klarum_Purum.html",
    "name": "Klarum Purum",
    "properties": {
      "AsP-Kosten": "3 AsP pro Giftstufe (Kosten nicht modifizierbar)",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/CH",
      "Publikation": "Die Streitenden Königreiche Seite 166",
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Zauberspruch hebt die Wirkung eines Giftes auf. Die Giftstufe darf die QS nicht übersteigen, sonst wirkt der Zauber nicht und gilt als misslungen.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Ausnahme ",
        "(FW 8, 2 AP): Der Zauberer kann entscheiden, dass Alkohol neutralisiert werden. Er kann einzelne Substanzen benennen, die nicht herausgefiltert werden sollen."
      ],
      "1": [
        "Tadelloser Entgifter ",
        "(FW 12, 4 AP): Für jeweils 4 zusätzliche AsP kann die QS bei einer gelungenen Probe um 1 erhöht werden (bis zu einem Maximum von QS 6)."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 6 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 4 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Incendio.html",
    "name": "Incendio",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "KL/CH/KO (modifiziert um ZK)",
      "Publikation": null,
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Scharlatane",
      "Wirkung": "Der Incendio lässt das ausgewählte Lebewesen in Flammen aufgehen.<ul><li><strong>QS 1: </strong>1W6 TP</li><li><strong>QS 2: </strong>1W6+2 TP</li><li><strong>QS 3: </strong>1W6+2 TP, <em>Brennend </em>auf kleiner Fläche</li><li><strong>QS 4: </strong>1W6+4 TP, <em>Brennend </em>auf kleiner Fläche</li><li><strong>QS 5: </strong>1W6+6 TP, <em>Brennend </em>auf kleiner Fläche</li><li><strong>QS 6: </strong>1W6+6 TP, <em>Brennend </em>auf großer Fläche</li></ul>Der Zauberspruch trifft sein Ziel automatisch. Der Gegner kann weder ausweichen noch parieren.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Objekt ",
        "(FW 8, 2 AP): Der Zauber ist auch gegen Objekte einsetzbar. Sie erleiden Schaden ohne den Status "
      ],
      "1": [
        "Erhöhter Schaden ",
        "(FW 12, 4 AP): Der Zauber verursacht zum üblichen Schaden +1 TP."
      ],
      "2": [
        "Wasser-Zerstörer ",
        "(FW 16, 6 AP): Gegen Ziele des Elements Wasser können die TP verdoppelt werden. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Invominima.html",
    "name": "Invocatio Minima",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Sphären",
      "Probe": "MU/CH/KO",
      "Publikation": "Regelwerk Seite 293",
      "Reichweite": "1 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Es manifestiert sich eine Handvoll Substanz aus den Niederhöllen. Meist handelt es sich um Schleim, Säure, schweflige Dämpfe oder flüssiges Feuer. Das genaue Ergebnis der Beschwörung lässt sich nicht beeinflussen. Der Zauberspruch gilt als einfacher und risikoarmer Übungszauber für Beschwörer (Insgesamt erscheint etwa eine Menge von 0,05 l pro QS).",
      "Wirkungsdauer": "<strong> sofort</strong>",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Objekt"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Größere Menge ",
        "(FW 8, 1 AP): Die Menge der dämonischen Essenz steigt auf 0,1 l pro QS."
      ],
      "1": [
        "Noch größere Menge ",
        "(FW 12, 2 AP): Die Menge der dämonischen Essenz steigt auf 0,2 l pro QS. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Noch viel größere Menge ",
        "(FW 16, 3 AP): Die Menge der dämonischen Essenz steigt auf 0,4 l pro QS. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Impersona.html",
    "name": "Impersona",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 10 Minuten",
      "Merkmal": "Illusion",
      "Probe": "IN/CH/FF",
      "Publikation": null,
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Der Zauberer kann sein Gesicht als ein beliebiges anderes erscheinen lassen. Soll es sich dabei um das Gesicht einer speziellen Person handeln, muss der Zauberer diese gut kennen oder während der Zauberdauer sehen können. Körper, Stimme und Kleidung sind nicht vom Zauber betroffen. Details zum Thema Illusionen finden sich im <strong>Regelwerk </strong>auf Seite <strong>259</strong>.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 2 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 4 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 6 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Illusionsbann.html",
    "name": "Illusionsbann",
    "properties": {
      "AsP-Kosten": "8 AsP bzw. 16 AsP für Zauber mit Zielkategorie Zone",
      "Merkmal": "Antimagie",
      "Probe": "KL/IN/CH",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Scharlatane",
      "Wirkung": "Ein Zauber des Merkmals Illusion wird aufgehoben, wenn dessen QS nicht höher ist als die QS des Illusionsbanns. Der Bann entfaltet keine Wirkung gegen Zauber, deren Wirkung sofort eintritt. Auch gegen Zauber, deren Wirkung bereits vollendet ist oder permanent wirkende Sprüche hilft er nicht. Wird der Illusionsbann gegen einen Zauber der Zielkategorie Zone eingesetzt, genügt es, wenn sich ein Teil von dieser innerhalb der Reichweite befindet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite erhöhen ",
        "(FW 8, 2 AP): Die Zaubermodifikation Reichweite erhöhen ist nicht erschwert."
      ],
      "1": [
        "Zauberdauer senken ",
        "(FW 12, 4 AP): Die Zaubermodifikation Zauberdauer senken ist nicht erschwert."
      ],
      "2": [
        "Kosten senken ",
        "(FW 16, 6 AP): Die Zaubermodifikation Kosten senken ist nicht erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Ignisphaero.html",
    "name": "Ignisphaero",
    "properties": {
      "AsP-Kosten": "32 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/KO",
      "Publikation": "Die Streitenden Königreiche Seite 165",
      "Reichweite": "32 Schritt",
      "Steigerungsfaktor": "D",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Aus den Händen des Zaubernden schießt ein Feuerball, der in gerader Linie sein Ziel trifft. Der Treffer des Feuerballs erfolgt am Ende der Zauberdauer, der Magier muss keine zusätzliche Aktion dafür aufwenden. Der Feuerball explodiert, wenn er sein Ziel oder auf ein großes, festes Hindernis trifft (z. B. eine Wand oder einen Schild). Verlässt der Feuerball die Reichweite, ohne ein Ziel zu treffen, so löst er sich auf. Auch die Gefährten des Zauberers können von dem Feuerball getroffen werden, wenn er explodiert. Der Radius der Explosion beträgt 5 Schritt. Der Schaden beträgt bis zu einem Schritt vom Zentrum entfernt 2W6+(QS x 3) Trefferpunkte (auch gegen leblose Objekte als Strukturschaden).<br/>Pro Schritt Entfernung von diesem Bereich verringert sich der Schaden um jeweils 3 TP. Der Feuerball trifft automatisch, wenn man ihm nicht aktiv zu entgehen versucht. Dazu muss eine Verteidigung eingesetzt und eine Probe auf Körperbeherrschung (Kampfmanöver) abgelegt werden. Pro QS hat der Held sich 1 Schritt vom Zentrum der Explosion entfernt. Trifft der Feuerball sein Ziel, werden die TP durch den RS des Ziels vermindert. Entflammbare Ziele fangen bei 1-3 auf 1W6 Feuer.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Intensive Explosion ",
        "(FW 8, 4 AP): Es muss nicht gewürfelt werden, ob die Ziele den Status "
      ],
      "1": [
        "Schneller Ball ",
        "(FW 12, 8 AP): Die Ziele können schlechter ausweichen. Das Ausweichen ist um zusätzlich 1´erschwert. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ],
      "2": [
        "Großer Radius ",
        "(FW 16, 12 AP): Der Explosionsradius beträgt 7 Schritt. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Ignorantia.html",
    "name": "Ignorantia",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "IN/CH/GE (modifiziert um SK)",
      "Publikation": null,
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Das Ziel ignoriert den Zauberer und seine Handlungen. Dadurch kann dieser unbemerkt an seinem Opfer vorbeilaufen oder vor seinen Augen einen Diebstahl begehen. Interagiert der Zaubernde während der Wirkungsdauer mit dem Opfer oder greift er dieses an, endet der Zauber sofort. Achtet das Ziel explizit auf eine Sache, etwa eine Tür oder einen Gegenstand, bemerkt es alle diesbezüglichen Veränderungen, jedoch ohne die Quelle der Veränderung ausmachen zu können. So bemerkt es z. B. das Öffnen oder Schließen einer bewachten Tür, vermag aber nicht zu sagen, wer genau dafür verantwortlich war.",
      "Wirkungsdauer": "QS Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Lebewesen ",
        "(FW 8, 2 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen."
      ],
      "1": [
        "Höhere Wirkungsdauer ",
        "(FW 12, 4 AP): Die Wirkungsdauer erhöht sich auf QS x 5 Minuten."
      ],
      "2": [
        "Jemand anderen benennen ",
        "(FW 16, 6 AP): Der Zauberer kann die Wirkung des Spruchs auf jemand anderen übertragen, statt selbst Nutznießer zu sein. Diese andere Person muss er beim Wirken des Zaubers berühren."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Imperavi.html",
    "name": "Imperavi",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/KL/CH (modifiziert um SK)",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Das Ziel befolgt einen einzigen Befehl des Zauberers, der seinem Selbsterhaltungstrieb nicht offensichtlich zuwiderläuft. Es wird also einen Diebstahl begehen, eine einzige Frage beantworten oder dem Zauberer in einem Kampf beistehen, nicht aber von einer Klippe springen oder seine eigenen Hände verspeisen. Der Zauber kann nicht dazu eingesetzt werden, dass das Opfer während der kompletten Wirkungsdauer Befehle entgegennimmt („Ich befehle dir, allen meinen Befehlen zu gehorchen.“) oder mehrere Fragen wahrheitsgemäß zu beantworten. Auch lange Befehlsketten sind nicht erlaubt („Öffne die Tür, gehe hinein, mache das Licht an und zerschlage die Kiste.“), sondern nur einzelne, knappe Befehle. Der Meister hat hierbei das letzte Wort, ob ein Befehl möglich ist oder nicht.",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "16 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Ohne Berührung ",
        "(FW 8, 3 AP): Der Zauber wirkt auf 1 Schritt Reichweite."
      ],
      "1": [
        "Mehr Befehle ",
        "(FW 12, 6 AP): Der Zauberer kann dem Opfer QS/2 Befehle geben."
      ],
      "2": [
        "Ohne Erinnerung ",
        "(FW 16, 9 AP): Der Zauberer kann entscheiden, ob das Opfer sich an sein Handeln unter Einfluss des Zaubers erinnern kann oder nicht. Es ist dabei möglich, dass er ihm seine Erinnerung ganz oder teilweise nimmt."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Horriphobus.html",
    "name": "Horriphobus",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Regelwerk Seite 293",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Dem Verzauberten gegenüber wirkt der Zaubernde wie eine Angst einflößende Gestalt aus seinen Alpträumen. Die Stärke dieses Eindrucks variiert mit der QS:<br/>QS 1: 1 Stufe Furcht, aber nur für 2 KR<br/>QS 2: 1 Stufe Furcht<br/>QS 3: 2 Stufen Furcht<br/>QS 4: 3 Stufen Furcht<br/>QS 5: 4 Stufen Furcht<br/>QS 6: 4 Stufen Furcht, aber für die doppelte Wirkungsdauer",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Verteilte Wirkung ",
        "(FW 8, 2 AP): Die Zustandsstufen können auf mehrere Ziele verteilt werden, die vor dem Wirken des Zaubers benannt werden müssen. Kann der Zauberer z. B. 3 Stufen "
      ],
      "1": [
        "Längere Wirkung ",
        "(FW 12, 4 AP): Die Wirkungsdauer steigt auf QS x 4 Minuten."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 6 AP): Der Zauberer kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 4 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Ignifaxius.html",
    "name": "Ignifaxius",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/CH",
      "Publikation": "Regelwerk Seite 293",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Aus den Fingern des Zaubernden schießt einen Flammenstrahl, der in gerader Linie sein Ziel trifft. Der Magier muss keine zusätzliche Aktion aufwenden, um nach dem Wirken des Zaubers zu treffen. Das Treffen ist in der Zauberdauer inbegriffen. Das getroffene Ziel erleidet 2W6+(QS x 2) Trefferpunkte Schaden. Der Flammenstrahl zählt als Fernkampfangriff mit einer Schusswaffe und kann entsprechend geblockt werden, und auch ein Ausweichen ist möglich. An Schilden erzeugt er Strukturschaden, wenn er auf sie trifft. Der Strahl trifft automatisch, wenn man sich nicht verteidigt. Trifft der Flammenstrahl sein Ziel, werden die TP durch den RS des Ziels vermindert. Entflammbare Ziele werden bei 1-3 auf 1W6 angezündet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Intensiver Strahl ",
        "(FW 8, 3 AP): Es muss nicht gewürfelt werden, ob das Ziel den Status "
      ],
      "1": [
        "Windender Strahl ",
        "(FW 12, 6 AP): Das Ziel kann schlechter ausweichen. Das Ausweichen ist zusätzlich um 2 erschwert. Es entstehen zusätzliche Kosten in Höhe von 2 AsP."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 9 AP): Der Zauberer kann bis zu 2 Ziele gleichzeitig treffen. Die AsP-Kosten des Zaubers verdoppeln sich."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_H%C3%B6llenpein.html",
    "name": "Höllenpein",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Die Streitenden Königreiche Seite 165",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Verzauberte erleidet Schmerzen, die sich oft in Krämpfen manifestieren. Der Höllenpein ersetz bei Folterungen das Talent Einschüchtern (Folter). Das Opfer muss eine Vergleichsprobe mit Selbstbeherrschung (Folter widerstehen) gegen den Höllenpein bestehen, die um die Schmerzstufe des Zauberspruchs erschwert ist (zusätzlich<br/>zu allen sonstigen Modifikatoren). Der Zaubernde hat nach dem Wirken des Zaubers QS Kampfrunden Zeit, um sein Ziel zu berühren, damit der Spruch seine Wirkung entfalten kann. Ansonsten verpufft der Zauber wirkungslos. Will ein Ziel nicht berührt werden, ist eine gelungene, nicht verteidigte Raufen-AT notwendig.<br/>QS 1: keine zusätzliche Wirkung<br/>QS 2: 1 Stufe Schmerz, 0 SP<br/>QS 3: 1 Stufe Schmerz, 1 SP<br/>QS 4: 2 Stufen Schmerz, 1 SP<br/>QS 5: 2 Stufen Schmerz, 2 SP<br/>QS 6: 3 Stufen Schmerz, 2 SP",
      "Wirkungsdauer": "5 Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Geistige Umnachtung ",
        "(FW 8, 2 AP): Nach dem Ende der Wirkungsdauer erhält das Ziel 1 Stufe "
      ],
      "1": [
        "Krämpfe ",
        "(FW 12, 4 AP): Nach dem Ende der Wirkungsdauer erhält das Ziel 1 Stufe "
      ],
      "2": [
        "Längere Berührungszeit ",
        "(FW 16, 6 AP): Nach dem Wirken des Zaubers hat der Zauberer QS x 2 KR Zeit, um sein Opfer zu berühren."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Hexenkrallen.html",
    "name": "Hexenkrallen",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO",
      "Publikation": "Regelwerk Seite 292",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Hexe wachsen an beiden Händen scharfe Krallen. Sie verursacht damit 1W6+3 TP im Nahkampf und verwendet dafür die Kampftechnik Raufen. Die Hexe gilt damit weiterhin als unbewaffnet. Hexenkrallen gelten als magische Waffen.",
      "Wirkungsdauer": "QS x 3 in Minuten",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Ein- und ausfahrbare Krallen ",
        "(FW 8, 1 AP): Die Hexe kann die Krallen aus- oder einfahren. Dies erfordert jeweils 1 freie Aktion."
      ],
      "1": [
        "Kletterhilfe ",
        "(FW 12, 2 AP): Die Krallen erleichtern Probe auf "
      ],
      "2": [
        "Scharfe Krallen ",
        "(FW 16, 3 AP): Die Krallen richten 1W6+4 TP an."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Hexengalle.html",
    "name": "Hexengalle",
    "properties": {
      "AsP-Kosten": "4 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO",
      "Publikation": "Regelwerk Seite 292",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Speichel der Hexe verwandelt sich augenblicklich in ätzende Säure, die für die Hexe selbst jedoch harmlos ist. Der Speichel verursacht 1W6+(QS) Trefferpunkte an dem nächsten Ziel, das die Hexe anspuckt. Die Spuckreichweite beträgt 3 Schritt. Die Hexe muss keine zusätzliche Aktion aufwenden, um nach dem Wirken des Zaubers zu spucken. Das Spucken ist in der Zauberdauer inbegriffen. Die Spucke trifft automatisch, wenn der Gegner sich nicht verteidigt. Der Spuckangriff zählt als Fernkampfangriff mit einer Schusswaffe und kann entsprechend geblockt werden, und auch ein Ausweichen ist möglich. An Schilden erzeugt er Strukturschaden, wenn er auf sie trifft. Trifft die Spucke ihr Ziel, werden die TP durch den RS des Ziels vermindert.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zerstäuber ",
        "(FW 8, 2 AP): Eine Verteidigung gegen den Spuckangriff ist um 2 erschwert."
      ],
      "1": [
        "Höhere Spuckreichweite ",
        "(FW 12, 4 AP): Die Spuckreichweite beträgt 6 Schritt."
      ],
      "2": [
        "Nachwirkung ",
        "(FW 16, 6 AP): Am Ende der nachfolgenden KR erleidet das Opfer eines erfolgreichen Hexengallen-Angriffs noch einmal 1W3 + QS/2 TP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Hexenholz.html",
    "name": "Hexenholz",
    "properties": {
      "AsP-Kosten": "mindestens 4 AsP (Aktivierung) + Hälfte der Aktivierungskosten pro 5 Minuten (Kosten sind nicht modifizierbar)",
      "Merkmal": "Telekinese",
      "Probe": "KL/FF/KK",
      "Publikation": "Die Streitenden Königreiche Seite 165",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Hexen",
      "Wirkung": "Die Zaubernde kann hölzerne Gegenstände telekinetisch anheben und bewegen. Der Gegenstand kann auch andere Materialien beinhalten, die dann zum Gewicht dazu zählen, aber zumindest ein Teil muss aus Holz bestehen. Die Gegenstände bewegen sich mit einer Geschwindigkeit von maximal QS + 2 Schritt pro Aktion und dürfen maximal QS x 20 Stein wiegen. Pro 5 Stein Gewicht muss die Zaubernde dafür 1 AsP aufbringen. Befinden sich andere Objekte an oder auf dem zu bewegenden Gegenstand, zählt deren Gewicht mit hinzu. Die Bewegungen des Objekts sind träge, weshalb sie für Angriffe oder Paraden ungeeignet sind. Um ein so bewegtes Objekt durch Festhalten oder Drücken aufzuhalten, ist eine um die QS erschwerte Probe auf Kraftakt (Ziehen &amp; Zerren) nötig.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Objekt (Holz)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Herzschlagruhe.html",
    "name": "Herzschlag ruhe",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Dämonisch",
      "Probe": "MU/CH/KK (modifiziert um ZK)",
      "Publikation": null,
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Der Herzschlag des Ziels wird ausgesetzt, wodurch es jede Kampfrunde 1W3 LeP verliert. Mit Hilfe einer Probe auf <em>Selbstbeherrschung </em>erschwert um die QS oder auf <em>Heilkunde Wunden (Stabilisieren) </em>erschwert um QS/2 kann die Wirkung des Zaubers gestoppt werden. Eine Probe zählt als Aktion. Die <em>Heilkunde Wunden</em>- Probe kann sowohl das Opfer des Zaubers selbst als auch eine dritte Person einsetzen.",
      "Wirkungsdauer": "QS x 3 Kampfrunden",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Größerer Schmerz ",
        "(FW 8, 3 AP): Der Zauber richtet pro KR 1W3+1 SP an."
      ],
      "1": [
        "Noch größerer Schmerz ",
        "(FW 12, 6 AP): Der Zauber richtet pro KR 1W3+2 SP an. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Noch viel größerer Schmerz ",
        "(FW 16, 9 AP): Der Zauber richtet pro KR 1W3+3 SP an. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Hexenknoten.html",
    "name": "Hexenknoten",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH",
      "Publikation": "Die Streitenden Königreiche Seite 165",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Hexenknoten erzeugt eine imaginäre Barriere für alle Kulturschaffenden, die sich der Barriere bis auf 16 Schritt nähern. Jedes Opfer nimmt die Barriere anders war, z. B. als Abgrund oder Feuerwand. Auch wenn mehreren Opfern auffällt, dass sie jeweils etwas anderes wahrnehmen, können sie dieses Hindernis nicht überwinden. Die Hexe muss einen Mittelpunkt innerhalb der Reichweite des Zauberspruchs benennen. Von dort aus wirkt gradlinig eine Barriere, die QS x 2 Schritt lang ist. Den exakten Verlauf durch den Mittelpunkt kann die Hexe festlegen. Ein Held, der die Barriere des Hexenknotens dennoch überschreiten will, muss eine Probe auf Willenskraft (Bedrohungen standhalten) erschwert um 2+QS des Zauberspruchs bestehen. Gelingt diese, kann er passieren und die Barriere übt während ihrer Wirkungsdauer keinen Einfluss mehr auf ihn aus. Misslingt die Probe, bleibt der Hexenknoten für ihn ein unüberwindbares Hindernis. Ein Held kann 1 Aktion aufwenden und mit einer Wiederholungsprobe erneut versuchen, die Barriere zu durchdringen.",
      "Wirkungsdauer": "QS x 10 in KR",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Heptagramma.html",
    "name": "Heptagramma",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Antimagie",
      "Probe": "MU/KL/CH",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Ein niederer Geist wird gebannt, wenn der Zauberer mehr QS erzielt, als die Anrufungsschwierigkeit beträgt (Anrufungsschwierigkeiten von 0 oder höher zählen als 0). Es kann sich dabei sowohl um einen beschworenes als auch um ein freies Geisterwesen handeln. Ebenso ist es möglich, Geister zu bannen, die an Objekte oder Wesen gebunden bzw. in diese eingefahren sind. Bei der Bannung wird der Geist in das Heptagramm gezogen und wechselt in eines der Totenreiche über. Anschließend kann er nicht mehr eigenständig in der Dritten Sphäre in Erscheinung treten, jedoch weiterhin beschworen werden.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "8 Aktionen (Zauberdauer ist nicht modifizierbar)",
      "Zielkategorie": "Beseelte, Geister"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zauberdauer modifizierbar ",
        "(FW 8, 2 AP): Die Zauberdauer ist modifizierbar."
      ],
      "1": [
        "Zwei Geister ",
        "(FW 12, 4 AP): Der Zauber kann gegen zwei Geister gleichzeitig eingesetzt werden. Allerdings darf die Anrufungsschwierigkeit beider Geister zusammen die QS nicht übersteigen. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ],
      "2": [
        "Drei Geister ",
        "(FW 16, 6 AP): Der Zauber kann gegen drei Geister gleichzeitig eingesetzt werden. Allerdings darf die Anrufungsschwierigkeit der Geister zusammen die QS nicht übersteigen. Es entstehen zusätzliche Kosten in Höhe von 4 AsP pro Geist nach dem ersten. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Herr_%C3%BCber_das_Tierreich.html",
    "name": "Herr über das Tierreich",
    "properties": {
      "AsP-Kosten": "KL (t) des Tieres in AsP (Kosten nicht modifizierbar)",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Die Streitenden Königreiche Seite 164",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden",
      "Wirkung": "Der Druide kann mit diesem Zauberspruch ein Tier der Größenkategorie groß und kleiner beherrschen. Es hört auf jeden Befehl des Druiden und ist auch bereit, für ihn bis zum Tod zu kämpfen. Allerdings muss das Tier auch in der Lage sein, den Befehl auszuführen. Es muss ein Wesen der Kategorie domestiziertes Tier oder Wildtier sein (kein Ungeheuer). Auch Salz- oder Süßwassertiere kommen in Frage. Mit dem Zauberspruch kann stets nur ein einzelnes Wesen beherrscht werden. Solange die Wirkungsdauer anhält, kann der Druide also kein weiteres Tier durch den Zauberspruch beherrschen.",
      "Wirkungsdauer": "QS Tage",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Tiere (domestizierte Tiere oder Wildtiere der Größenkategorie groß oder kleiner)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Hexagramma.html",
    "name": "Hexagramma",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Antimagie",
      "Probe": "MU/KL/CH",
      "Publikation": null,
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden",
      "Wirkung": "Ein Elementargeist wird gebannt, wenn der Zauberer mehr QS erzielt, als die Anrufungsschwierigkeit beträgt (Anrufungsschwierigkeiten von 0 oder höher zählen als 0). Es kann sich dabei sowohl um einen beschworenen als auch um einen freien Elementargeist handeln. Ebenso ist es möglich, Elementargeister zu bannen, die an Objekte oder Wesen gebunden bzw. in diese eingefahren sind. Bei der Bannung wird er in das Hexagramm gezogen und wechselt in die Sphäre der Elemente über. Er kann jedoch nach Ablauf von 24 Stunden in die Dritte Sphäre zurückkehren.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "8 Aktionen (Zauberdauer ist nicht modifizierbar)",
      "Zielkategorie": "Elementare"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zauberdauer modifizierbar ",
        "(FW 8, 3 AP): Die Zauberdauer ist modifizierbar."
      ],
      "1": [
        "Zwei Elementare ",
        "(FW 12, 6 AP): Der Zauber kann gegen zwei Elementare gleichzeitig eingesetzt werden. Allerdings darf die Anrufungsschwierigkeit beider Elementare zusammen die QS nicht übersteigen. Es entstehen zusätzliche Kosten in Höhe von 8 AsP."
      ],
      "2": [
        "Drei Elementare ",
        "(FW 16, 9 AP): Der Zauber kann gegen drei Elementare gleichzeitig eingesetzt werden. Allerdings darf die Anrufungsschwierigkeit der Elementare zusammen die QS nicht übersteigen. Es entstehen zusätzliche Kosten in Höhe von 8 AsP pro Elementar nach dem ersten. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Heilungsbann.html",
    "name": "Heilungsbann",
    "properties": {
      "AsP-Kosten": "8 AsP bzw. 16 AsP für Zauber mit Zielkategorie Zone",
      "Merkmal": "Antimagie",
      "Probe": "KL/CH/FF",
      "Publikation": "Aventurische Magie 130",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Ein Zauber mit dem Merkmal Heilung wird aufgehoben, wenn dessen QS nicht höher ist als die QS des Heilungsbanns. Der Bann entfaltet keine Wirkung gegen Zauber, deren Wirkung sofort eintritt (z. B. einmalige Heilung). Auch gegen Zauber, deren Wirkung bereits vollendet ist, oder permanent wirkende Sprüche wirkt er nicht. Wird der Heilungsbann gegen einen Zauber der Zielkategorie Zone eingesetzt, genügt es, wenn sich ein Teil von dieser innerhalb der Reichweite befindet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite erhöhen ",
        "(FW 8, 2 AP): Die Zaubermodifikation Reichweite erhöhen ist nicht erschwert."
      ],
      "1": [
        "Zauberdauer senken ",
        "(FW 12, 4 AP): Die Zaubermodifikation Zauberdauer senken ist nicht erschwert."
      ],
      "2": [
        "Kosten senken ",
        "(FW 16, 6 AP): Die Zaubermodifikation Kosten senken ist nicht erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Hellsichtbann.html",
    "name": "Hellsichtbann",
    "properties": {
      "AsP-Kosten": "8 AsP bzw. 16 AsP für Zauber mit Zielkategorie Zone",
      "Merkmal": "Antimagie",
      "Probe": "KL/IN/CH",
      "Publikation": "Aventurische Magie 130",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier, Hexen, Scharlatane",
      "Wirkung": "Ein Zauber des Merkmals Hellsicht wird aufgehoben, wenn dessen QS nicht höher ist als die QS des Hellsichtbanns. Der Bann entfaltet keine Wirkung gegen Zauber, deren Wirkung sofort eintritt. Auch gegen Zauber, deren Wirkung bereits vollendet ist, oder permanent wirkende Sprüche hilft er nicht. Wird der Hellsichtbann gegen einen Zauber der Zielkategorie Zone eingesetzt, genügt es, wenn sich ein Teil von dieser innerhalb der Reichweite befindet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite erhöhen ",
        "(FW 8, 2 AP): Die Zaubermodifikation Reichweite erhöhen ist nicht erschwert."
      ],
      "1": [
        "Zauberdauer senken ",
        "(FW 12, 4 AP): Die Zaubermodifikation Zauberdauer senken ist nicht erschwert."
      ],
      "2": [
        "Kosten senken ",
        "(FW 16, 6 AP): Die Zaubermodifikation Kosten senken ist nicht erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_GrosseVerwirrung.html",
    "name": "Große Verwirrung",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/KL/CH (modifiziert um SK)",
      "Publikation": "Die Streitenden Königreiche Seite 164",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden",
      "Wirkung": "Das Opfer dieses Druidenzaubers erleidet je nach QS unterschiedliche Stufen Verwirrung:<br/>QS 1: 1 Stufe Verwirrung, aber nur für 2 KR<br/>QS 2: 1 Stufe Verwirrung<br/>QS 3: 2 Stufen Verwirrung<br/>QS 4: 3 Stufen Verwirrung<br/>QS 5: 4 Stufen Verwirrung<br/>QS 6: 4 Stufen Verwirrung, aber für die doppelte Wirkungsdauer",
      "Wirkungsdauer": "QS x 3 KR",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Harmlose_Gestalt.html",
    "name": "Harmlose Gestalt",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung) + 4 AsP pro 5 Minuten",
      "Merkmal": "Illusion",
      "Probe": "KL/IN/CH",
      "Publikation": "Regelwerk Seite 292",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Hexen",
      "Wirkung": "Der Zaubernde nimmt die Gestalt einer unauffälligen Person wie eines Dieners oder eines Bettlers an, die an dem entsprechenden Ort nicht auffällt. Dies umfasst sowohl das Aussehen als auch die passende Stimme, jedoch nicht Kenntnisse wie Sprachen oder angemessenes Verhalten. Größere Gegenstände und Vertrautentiere werden nicht mit dem Zauberspruch verborgen. Der Zauberspruch wirkt intuitiv, daher kann die Hexe nicht explizit festlegen, welches Aussehen sie annimmt. Mehr zu Illusionen und wie man sie durchschaut siehe Regelwerk Seite 259.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 2 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 4 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 6 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_GrosseGier.html",
    "name": "Große Gier",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Regelwerk Seite 291",
      "Reichweite": "Berührung (Reichweite ist nicht modifizierbar)",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Hexen",
      "Wirkung": "Der Verzauberte verspürt eine unbändige Gier nach einem Objekt oder einer Handlung, die der Zaubernde ihm nennt. Er wird alles ihm Mögliche tun, um dieses Ziel zu erreichen, solange er Leib und Leben damit nicht gefährdet. Er erhält eine Schlechte Eigenschaft Gier nach … für die Wirkungsdauer des Zauberspruchs.",
      "Wirkungsdauer": "QS x 15 Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gelungene Beeinflussung 1 ",
        "(FW 8, 2 AP): Der Verzauberte kann nach dem Ende der Wirkungsdauer eine Probe auf "
      ],
      "1": [
        "Gelungene Beeinflussung 2 ",
        "(FW 12, 4 AP): Der Verzauberte kann nach dem Ende der Wirkungsdauer eine Probe auf "
      ],
      "2": [
        "Gelungene Beeinflussung 3 ",
        "(FW 16, 6 AP): Der Verzauberte kann nach dem Ende der Wirkungsdauer eine Probe auf "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Gletscherform.html",
    "name": "Gletscherform",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Elementar",
      "Probe": "KL/FF/KK",
      "Publikation": "Klingen der Nacht Seite 109",
      "Reichweite": "selbst",
      "Ritualdauer": "5 Minuten",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Nachtalben u. a.",
      "Wirkung": "Innerhalb eines Radius’ von QS Schritt vermag der Zauberer alle Materie des Elements Eis zu verformen, solange sie nicht Teil eines Wesens ist. Auf diesem Wege können beispielsweise Eisbrocken zu einer Wand zusammengefügt oder eine Behausung aus gepresstem Schnee errichtet werden. Der Prozess geht dabei nur langsam vonstatten. Soll das Material in eine bestimmte Richtung geformt werden, dauert dies 1 KR pro Spann. Die Erschaffung von besonderen Objekten wie Kunstwerken oder nutzbaren Gegenständen erfordert es sogar, ein Drittel der normalen Herstellungszeit aufzuwenden. In diesem Fall ist es außerdem nicht möglich, an mehr als einem Objekt gleichzeitig zu arbeiten oder parallel andere Verformungen durchzuführen. Für die Ermittlung der Qualität solcher Objekte wird QS/2 des Zaubers als QS des entsprechenden Handwerkstalents herangezogen. Eine Änderung der Materialart oder der Materialqualität ist mit dem Ritual nicht möglich. Am Ende der Wirkungsdauer ist das Verformte wieder den normalen Gesetzen der Natur ausgeliefert.",
      "Wirkungsdauer": "QS x 10 Minuten",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Ritual",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Haselbusch.html",
    "name": "Haselbusch",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Elementar",
      "Probe": "IN/CH/FF",
      "Publikation": "Aventurische Magie 130",
      "Reichweite": "2 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Elfen",
      "Wirkung": "Der Zauber regt das Wachstum von Pflanzen an. Der Zauberer muss eine Pflanze oder Pflanzensamen an dem Objekt, das er erklettern will, ablegen und warten. Am Ende der Zauberdauer wächst die Pflanze pro KR 1 Schritt (bis maximal QS x 3 Schritt) hoch und erleichtert <em>Klettern</em>-Proben an der ausgewählten Stelle um QS/2 Punkte.",
      "Wirkungsdauer": "1 Tag",
      "Zauberdauer": "16 Aktionen",
      "Zielkategorie": "Pflanze"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Formwuchs ",
        "(FW 8, 2 AP): Die Pflanze kann während des Wachsens im Rahmen ihrer Möglichkeiten eine vom Zauberer vorgegebene Form annehmen."
      ],
      "1": [
        "Längere Wirkungsdauer ",
        "(FW 12, 4 AP): Die Wirkungsdauer hält 1 Woche an."
      ],
      "2": [
        "Viel längere Wirkungsdauer ",
        "(FW 16, 6 AP): Die Wirkungsdauer hält 1 Monat an. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Gefunden.html",
    "name": "Gefunden",
    "properties": {
      "AsP-Kosten": "2 AsP",
      "Merkmal": "Hellsicht",
      "Probe": "KL/IN/GE",
      "Publikation": "Aventurische Magie 129",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Hexen, Scharlatane",
      "Wirkung": "Der Zauberer kann die Richtung bestimmen, in der sich ein Objekt befindet. Er muss dieses insgesamt mindestens einen Monat lang bei sich getragen haben oder über eine magische Verbindung zu ihm verfügen. Ist das Objekt weiter als QS x 3 Schritt von ihm entfernt, scheitert der Zauber.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Höhere Reichweite 1 ",
        "(FW 8, 1 AP): Das gesuchte Objekt darf bis zu QS x 5 Schritt entfernt sein."
      ],
      "1": [
        "Höhere Reichweite 2 ",
        "(FW 12, 2 AP): Das gesuchte Objekt darf bis zu QS x 10 Schritt entfernt sein. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Höhere Reichweite 3 ",
        "(FW 16, 3 AP): Das gesuchte Objekt darf bis zu QS x 50 Schritt entfernt sein. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Gedankenbilder.html",
    "name": "Gedankenbilder",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Einfluss",
      "Probe": "IN/CH/KO",
      "Publikation": "Aventurische Magie 129",
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Elfen",
      "Wirkung": "Das Ziel vernimmt in seinem Geist vom Zauberer gewählte Bilder, beispielsweise dessen Sinneseindrücke, eine Warnung vor drohender Gefahr oder den Plan für ein gemeinsames Vorgehen. Dem Empfänger ist bewusst, dass ihm diese Bilder eingegeben werden. Zudem kann er auf diesem Wege nicht unfreiwillig abgelenkt werden. Das Ziel des Zaubers und der Zaubernde können sich nach Ende der Zauberdauer auch beliebig weit voneinander fortbewegen. Wichtig ist nur, dass der Zaubernde weiterhin Sichtkontakt zur Zielperson halten kann.",
      "Wirkungsdauer": "QS x 3 Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Kurze Rücksprache ",
        "(FW 8, 1 AP): Das Ziel kann in Gedanken eine kurze Rückantwort in Form eines Bildes an den Zauberer senden."
      ],
      "1": [
        "Mehr Personen ",
        "(FW 12, 2 AP): Der Zauberer kann bis zu QS Personen verzaubern. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Kommunikationsverbindung ",
        "(FW 16, 3 AP): Alle Ziele können in Gedanken mit dem Zauberer Bilder austauschen, aber nicht untereinander. Es entstehen einmalig zusätzliche Kosten in Höhe von 4 AsP. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Gardianium.html",
    "name": "Gardianum",
    "properties": {
      "AsP-Kosten": "mindestens 4 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Antimagie",
      "Probe": "MU/KL/CH",
      "Publikation": "Regelwerk Seite 291",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Der Zauberspruch erschafft eine unsichtbare Kuppel um den Magier herum, die von außen kommende magische Angriffe absorbiert. Die Kuppel ist eigentlich eine Kugel, da jedoch der Magier meistens auf dem Boden steht, ist die Kugelform nicht so wichtig. Der Radius der Kuppel beträgt 3 Schritt, ihre Schildstärke die investierten AsP + QS x 3. Sie kann ihre Schildstärke in Trefferpunkten an Schaden absorbieren, die von Schaden verursachenden Zaubern erzeugt werden, hält jedoch weder magische Wesen noch magische Waffen ab. Fällt die Schildstärke unter 1, bricht die Kuppel zusammen. Schaden, der nicht mehr absorbiert werden kann, richtet Schaden an. Die Kuppel bewegt sich stets mit dem Zaubernden. Geschützt durch die Wirkung sind auch alle, die innerhalb der Kuppel stehen.",
      "Wirkungsdauer": "5 Minuten",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Stärkerer Schild ",
        "(FW 8, 2 AP): Die Schildstärke beträgt AsP + (QS x 4)."
      ],
      "1": [
        "Großer Radius ",
        "(FW 12, 4 AP): Der Radius der Kuppel beträgt 5 Schritt. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ],
      "2": [
        "Reichweite Berührung ",
        "(FW 16, 6 AP): Als Reichweite gilt Berührung. Die Schildstärke beträgt jedoch nur AsP + (QS x 2). Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Fortifex.html",
    "name": "Fortifex",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Telekinese",
      "Probe": "MU/IN/KO",
      "Publikation": "Die Streitenden Königreiche Seite 164",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Durch den Fortifex entsteht eine durchscheinende, allerdings leicht flimmernde (und damit sichtbare)Wand, die für physische Objekte undurchdringlich ist. Die Wand kann beispielsweise Pfeile, Bolzen, einen Ignifaxius oder Lebewesen aufhalten. Sie schützt nicht vor Hitze, Kälte, Licht, Gasen, körperlosen Wesen oder Zaubern und Liturgien, die keine physische Komponente aufweisen. Der Zauberer muss einen Mittelpunkt innerhalb der Reichweite des Zauberspruchs benennen. Von dort aus wirkt gradlinig eine Barriere, die QS x 2 Schritt lang ist. Den exakten Verlauf durch den Mittelpunkt kann der Zauberer festlegen. Die Höhe der Barriere beträgt 3 Schritt. Eine Tiefe besitzt die Wand nicht. Man kann sie nur aufgerichtet platzieren, nicht flach hinlegen oder schräg stellen. Die Wand besitzt 100 Strukturpunkte. Sollten die Strukturpunkte auf 0 oder darunter sinken, löst sie sich auf.",
      "Wirkungsdauer": "30 Kampfrunden",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Höhere Wand ",
        "(FW 8, 2 AP): Die Wand ist 5 Schritt hoch."
      ],
      "1": [
        "Zylinder ",
        "(FW 12, 4 AP): Die Wand ist gewölbt und verläuft um den Zaubernden herum. Die Höhe beträgt 3 Schritt, der Radius QS Schritt."
      ],
      "2": [
        "Deckel ",
        "(FW 16, 6 AP): Die Wand verläuft wie bei der Zaubererweiterung Zylinder, nur dass dieser nach oben hin geschlossen ist. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Foramen.html",
    "name": "Foramen",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/IN/FF",
      "Publikation": "Die Streitenden Königreiche Seite 163",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Durch diesen Zauberspruch öffnen sich einfache Schlösser automatisch, bei komplizierten Schlössern wird es leichter, sie zu öffnen. Pro QS werden Proben auf Schlösserknacken (Bartschlösser oder Kombinationsschlösser) und Kraftakt (Eintreten &amp; Zertrümmern) gegen das Schloss um 1 erleichtert. Sollte der Gesamtmodifikator zum Knacken eines Schlosses dadurch zu einer Erleichterung werden, springt das Schloss augenblicklich auf. Die Erleichterung gilt binnen der Wirkungsdauer sowohl für den Zauberer als auch für andere Personen.",
      "Wirkungsdauer": "5 Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Objekte (Schlösser)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Wiederverschließbar ",
        "(FW 8, 3 AP): Wenn es nicht beschädigt wurde, verschließt sich das Schloss nach Ablauf der Wirkungsdauer wieder von selbst."
      ],
      "1": [
        "Fallengespür ",
        "(FW 12, 6 AP): Der Zauberer kann spüren, ob ein Schloss durch eine Falle gesichert ist. Er kann die Falle aber nicht durch den Zauber entschärfen."
      ],
      "2": [
        "Die Priesterkaiser kommen! ",
        "(FW 16, 9 AP): Der Zauberer kann alle Schlösser innerhalb der Wirkungsdauer öffnen oder Proben wie bei der Zauberwirkung beschrieben erleichtern. Dazu muss er die Schlösser berühren und pro Schloss 1 AsP zusätzlich zahlen."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Fulminictus.html",
    "name": "Fulminictus",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO (modifiziert um ZK)",
      "Publikation": "Regelwerk Seite 291",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Elfen",
      "Wirkung": "Der Verzauberte erleidet Schaden, der auf seine Aura einwirkt und eine Reihe kleiner innerer Verletzungen erzeugt. Er erleidet 2W6+(QS x 2) Trefferpunkte. Rüstungen schützen nicht vor diesem Zauber. Der Zauberspruch trifft sein Ziel automatisch. Der Gegner kann weder ausweichen noch parieren.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Verteilter Schaden 1 ",
        "(FW 8, 3 AP): Der Zauberer wählt 2 Ziele in Reichweite aus. Der Schaden kann beliebig auf beide Ziele verteilt werden."
      ],
      "1": [
        "Verteilter Schaden 2 ",
        "(FW 12, 6 AP): Der Zauberer wählt 3 Ziele in Reichweite aus. Der Schaden kann beliebig zwischen den Zielen verteilt werden. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 9 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Die AsP-Kosten des Zaubers verdoppeln sich."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Flim_Flam.html",
    "name": "Flim Flam",
    "properties": {
      "AsP-Kosten": "2 AsP (Aktivierung des Zaubers) + 1 AsP pro Stunde",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/CH",
      "Publikation": "Regelwerk Seite 291",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Zaubernde erzeugt eine kleine, schwebende Kugel aus Licht. Sie ist entweder stationär oder folgt dem Zaubernden. Dies muss er vor dem Zaubern festlegen, ebenso wie die Farbe des Lichtes. Die maximal erzeugbare Helligkeit variiert je nach QS. Der Zaubernde kann die Helligkeit jedoch nach Wunsch einmalig verringern. Die Zone des Lichts variiert je nach Helligkeit.<br/>QS 1: Das Licht hat die Helligkeit einer Kerze.<br/>QS 2: Das Licht hat die Helligkeit einer Fackel.<br/>QS 3: Das Licht hat die Helligkeit eines Lagerfeuers.<br/>QS 4: Die Helligkeit des Lichts reicht aus, um einen Raum von 5 mal 5 Schritt auszuleuchten.<br/>QS 5: Die Helligkeit des Lichts reicht aus, um einen großen Saal auszuleuchten.<br/>QS 6: Das Licht ist blendend hell. Es ist kaum möglich, direkt hineinzusehen.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Lichtregulation ",
        "(FW 8, 1 AP): Der Zauberer kann die Flim Flam-Kugel innerhalb der Wirkungsdauer nach Belieben heller oder dunkler werden lassen (bis zu einem Maximum der erzielten QS)."
      ],
      "1": [
        "Keine Aufrechterhaltung ",
        "(FW 12, 2 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ],
      "2": [
        "Verankern ",
        "(FW 16, 3 AP): Der Flim Flam kann an einer anderen Person verankert werden, sodass sich das Licht in bis zu 8 Schritt Entfernung zu dieser Person mitbewegt. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Favilludo.html",
    "name": "Favilludo",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Elementar",
      "Probe": "IN/FF/CH",
      "Publikation": "Aventurische Magie 128",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Das Ziel des Zaubers wird von einem Schwarm tanzender Funken umgeben. Ihre Farbe kann dabei beliebig gewählt werden. Alle Angriffe gegen den Zauberer sind um 1 erschwert.",
      "Wirkungsdauer": "QS Kampfrunden",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Kerzenschein ",
        "(FW 8, 1 AP): Der Schein ist so hell wie eine Kerze, sodass der Zauberer als Lichtquelle zählt."
      ],
      "1": [
        "Heiße Aura ",
        "(FW 12, 2 AP): Der Schein verursacht bei Gegnern, die Nahkampfangriffe gegen den Verzauberten richten, bei 1 auf 1W6 jeweils 1 SP."
      ],
      "2": [
        "Reichweite Berührung ",
        "(FW 16, 3 AP): Als Reichweite gilt Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Firnlauf.html",
    "name": "Firnlauf",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/GE",
      "Publikation": "Klingen der Nacht Seite 108",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Nachtalben u. a.",
      "Wirkung": "Um den Zauberer herum entsteht eine QS Schritt messende Zone, in der allen Wesen eine problemlose Überquerung von Oberflächen des Elements Eis möglich ist, seien es Schneefelder oder hauchdünn gefrorene Wasserflächen. Ihre GS wird durch die Beschaffenheit des Untergrunds nicht vermindert und sie werden weder einsinken, einbrechen noch ausrutschen. Zudem erleiden sie keinen Schaden durch Kälte oder natürliches Eis. Die Wirkung erstreckt sich nicht auf größere Objekte wie Fahrzeuge. ",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Fischflosse.html",
    "name": "Fischflosse",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers) + 4 AsP pro Stunde",
      "Merkmal": "Verwandlung",
      "Probe": "MU/IN/GE",
      "Publikation": "Aventurische Magie 128",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "C",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Zauberer verwandelt sich in ein Wasserlebewesen seiner Wahl, das jedoch maximal die Größenkategorie klein aufweisen darf. Während der Wirkungsdauer verwendet der Zauberer die körperlichen Werte des Tieres, einschließlich seiner Eigenschaften, Talente und Kampfwerte. Eine niedrige LE wird bei der Verwandlung anteilsmäßig angerechnet, gleiches geschieht bei der Rückverwandlung. Die geistigen Werte des Zauberers bleiben ebenso wie sein Bewusstsein erhalten. Die Verwandlung betrifft nur den Zauberer selbst, nicht seine Kleidung oder Ausrüstung. Es ist keine Verwandlung in ein kulturschaffendes Wesen möglich.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Mittlere Tiere ",
        "(FW 8, 3 AP): Der Zauberer kann sich auch in Wasserlebewesen der Größenkategorie mittel verwandeln. Es entstehen zusätzliche Kosten in Höhe von 5 AsP."
      ],
      "1": [
        "Keine Aufrechterhaltung ",
        "(FW 12, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ],
      "2": [
        "Große Tiere ",
        "(FW 16, 9 AP): Der Zauberer kann sich auch in Wasserlebewesen der Größenkategorie groß verwandeln. Es entstehen zusätzliche Kosten in Höhe von 6 AsP. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Exposami.html",
    "name": "Exposami",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Hellsicht",
      "Probe": "KL/IN/CH",
      "Publikation": "Die Streitenden Königreiche Seite 163",
      "Reichweite": "QS x 20 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Druiden, Elfen",
      "Wirkung": "Der Zauberer kann alle Lebewesen innerhalb der Reichweite des Zauberspruchs spüren, sofern sie mindestens so groß sind wie eine Ratte. Die Auren nimmt der Zauberer als grün-leuchtende Flecken wahr. Er ist jedoch nicht darauf angewiesen diese zu sehen, um Lebewesen zu spüren. Pflanzen, Pilze und Lebewesen, die kleiner als eine Ratte sind, können durch den Zauberspruch nicht erkannt werden. Bauwerke aus den Elementen Erz oder Eis stören die Wirkung des Spruches. Hinter einer Mauer aus Stein oder in einem Iglu kann der Zauberer also keine Lebewesen orten. Der Zauberer kann erkennen, um was für einen Typus von Lebewesen es sich handelt (siehe Regelwerk Seite 355).",
      "Wirkungsdauer": "10 Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen (außer Pflanzen, Pilze und Wesen, die kleiner als eine Ratte sind)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Durch Erz ",
        "(FW 8, 1 AP): Der Zauber wirkt auch durch Erz bis zu einer maximalen Dicke von 1 Schritt hindurch."
      ],
      "1": [
        "Durch Eis ",
        "(FW 12, 2 AP): Der Zauber wirkt auch durch Eis bis zu einer maximalen Dicke von 1 Schritt hindurch. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Spezielles Lebewesen ",
        "(FW 16, 3 AP): Der Zauberer kann eine spezielle Art von Lebewesen benennen und mittels des Zaubers suchen (z. B. Hunde, Menschen, Pferde)."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Erinnerungverlassedich.html",
    "name": "Erinnerung verlasse dich",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um die SK)",
      "Publikation": "Aventurische Magie 127",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Der Zauber unterdrückt alle persönlichen Erinnerungen des Opfers an die letzten QS Minuten. Für die Wirkungsdauer kann es sich an diesen Zeitraum weder erinnern noch Proben auf entsprechend erlangtes Wissen ablegen. Seine Reflexe sind davon jedoch ebenso wenig betroffen wie zuvor erlangtes Wissen und Fähigkeiten, weshalb auf diese uneingeschränkt geprobt werden darf. Allerdings ist das Ziel in den ersten 5 KR etwas desorientiert und erleidet bis zum Ende der 5. KR eine Stufe <em>Verwirrung</em>.",
      "Wirkungsdauer": "QS x 5 Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Längere Wirkungsdauer 1 ",
        "(FW 8, 3 AP): Die Wirkungsdauer erhöht sich auf QS Stunden."
      ],
      "1": [
        "Längere Wirkungsdauer 2 ",
        "(FW 12, 6 AP): Die Wirkungsdauer erhöht sich auf QS Tage. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Längere Wirkungsdauer 3 ",
        "(FW 16, 9 AP): Die Wirkungsdauer erhöht sich auf QS Wochen. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/SZ_Falkenauge.html",
    "name": "Falkenauge",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Hellsicht",
      "Probe": "MU/KL/IN",
      "Publikation": "Regelwerk Seite 291",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Elfen",
      "Wirkung": "Der Verzauberte baut eine geistige Verbindung zu seinem Ziel auf. Hierdurch wird für den Verzauberten der nächste Fernkampfangriff auf dieses Ziel um QS des Zaubers erleichtert.",
      "Wirkungsdauer": "Bis zum nächsten Schuss, maximal QS x 2 Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Aufteilung ",
        "(FW 8, 2 AP): Die QS können auf 2 Personen aufgeteilt werden. Beide Personen müssen berührt werden."
      ],
      "1": [
        "Langanhaltend ",
        "(FW 12, 4 AP): Die Wirkungsdauer beträgt QS x 2 Minuten."
      ],
      "2": [
        "Zweiter Schuss ",
        "(FW 16, 6 AP): Ein zweiter Schuss auf das gleiche Ziel ist um QS/2 erleichtert, solange er noch innerhalb der Wirkungsdauer erfolgt."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Elfenstimme.html",
    "name": "Elfenstimme",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Einfluss",
      "Probe": "IN/CH/KO",
      "Publikation": "Aventurische Magie 127",
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Elfen",
      "Wirkung": "Das Ziel vernimmt in seinem Geist vom Zauberer gewählte akustische Signale, beispielsweise gesprochene Worte oder eine Melodie. Dem Empfänger ist bewusst, dass es sich nicht um natürliche Geräusche handelt. Zudem kann er auf diesem Wege nicht unfreiwillig abgelenkt werden. Das Ziel des Zaubers und der Zaubernde können sich nach Ende der Zauberdauer auch beliebig weit voneinander fortbewegen. Wichtig ist nur, dass der Zaubernde weiterhin Sichtkontakt zur Zielperson halten kann.",
      "Wirkungsdauer": "QS x 3 Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Kurze Rücksprache ",
        "(FW 8, 1 AP): Das Ziel kann in Gedanken eine kurze Rückantwort an den Zauberer senden, z. B. ein kurzes Ja oder Nein."
      ],
      "1": [
        "Mehr Personen ",
        "(FW 12, 2 AP): Der Zauberer kann bis zu QS Personen verzaubern. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Kommunikationsverbindung ",
        "(FW 16, 3 AP): Alle Ziele können in Gedanken mit dem Zauberer kommunizieren, aber nicht untereinander. Es entstehen einmalig zusätzliche Kosten in Höhe von 4 AsP. Voraussetzung: Zaubererweiterung"
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Elementarbann.html",
    "name": "Elementarbann",
    "properties": {
      "AsP-Kosten": "8 AsP bzw. 16 AsP für Zauber mit Zielkategorie Zone",
      "Merkmal": "Antimagie",
      "Probe": "IN/CH/KO",
      "Publikation": "Aventurische Magie 126",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden",
      "Wirkung": "Ein Zauber des Merkmals Elementar wird aufgehoben, wenn dessen QS nicht höher als die QS des Elementarbanns ist. Der Bann entfaltet keine Wirkung gegen Zauber, deren Wirkung sofort eintritt (z. B. einmaliger Schaden). Auch gegen Zauber, deren Wirkung bereits vollendet ist, oder permanent wirkende Sprüche hilft er nicht. Wird der Elementarbann gegen einen Zauber der Zielkategorie Zone eingesetzt, genügt es, wenn sich ein Teil von dieser innerhalb der Reichweite befindet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite erhöhen ",
        "(FW 8, 2 AP): Die Zaubermodifikation Reichweite erhöhen ist nicht erschwert."
      ],
      "1": [
        "Zauberdauer senken ",
        "(FW 12, 4 AP): Die Zaubermodifikation Zauberdauer senken ist nicht erschwert."
      ],
      "2": [
        "Kosten senken ",
        "(FW 16, 6 AP): Die Zaubermodifikation Kosten senken ist nicht erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Eisenrost.html",
    "name": "Eisenrost",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/CH/GE",
      "Publikation": "Aventurische Magie 126",
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Metallene Gegenstände verlieren 20 Strukturpunkte. Sinken die Strukturpunkte dadurch unter 1, zerfrisst der Rost das Objekt so stark, dass es nicht mehr verwendbar ist. Um metallene Rüstungen zu zerstören, benötigt der Zauberer so viele QS, wie die Rüstung Rüstungsschutz hat. Bei metallenen Waffen der Kampftechniken Dolche und Raufen muss 1 QS erzielt werden, bei andere Waffen mindestens 2 QS. Zweihandwaffen können nur mit mindestens 3 QS zerstört werden. Erzielte QS gegen Waffen summieren sich auf.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen (kann nicht modifiziert werden)",
      "Zielkategorie": "Profane Objekte"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Metallgegenstände ",
        "(FW 8, 3 AP): Der Zauber richtet bei Metallgegenständen, nicht aber Waffen und Rüstungen, zusätzlich QS x 10 Strukturpunkte Schaden an."
      ],
      "1": [
        "Zauberdauer modifizierbar ",
        "(FW 12, 6 AP): Die Zauberdauer des Zaubers darf doch modifiziert werden."
      ],
      "2": [
        "Ausgeweitete Zerstörung ",
        "(FW 16, 9 AP): Auch weitere metallene Objekte in bis zu 2 Schritt Abstand vom eigentlichen Ziel sind betroffen."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_EigeneAengste.html",
    "name": "Eigne Ängste",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Klingen der Nacht Seite 108",
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Nachtalben u. a.",
      "Wirkung": "Alle Fertigkeitsproben, die unter anderem auf Mut gewürfelt werden, sind um die QS erschwert. ",
      "Wirkungsdauer": "5 Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Einflussbann.html",
    "name": "Einflussbann",
    "properties": {
      "AsP-Kosten": "8 AsP bzw. 16 AsP für Zauber mit Zielkategorie Zone",
      "Merkmal": "Antimagie",
      "Probe": "KL/IN/CH",
      "Publikation": "Aventurische Magie 126",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier, Hexen, Scharlatane",
      "Wirkung": "Ein Zauber des Merkmals Einfluss wird aufgehoben, solange dessen QS nicht höher ist als die QS des Einflussbanns. Es ist nicht möglich, den Bann auf die Auswirkungen eines Zaubers anzuwenden, dessen Wirkungsdauer bereits abgelaufen ist oder sofortiger Natur war. Ebenso können keine Zauber mit der Wirkungsdauer permanent gebannt werden. Handelt es sich um einen Zauber der Zielkategorie Zone, genügt es, wenn sich ein Teil von dieser innerhalb der Reichweite befindet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite erhöhen ",
        "(FW 8, 2 AP): Die Zaubermodifikation Reichweite erhöhen ist nicht erschwert."
      ],
      "1": [
        "Zauberdauer senken ",
        "(FW 12, 4 AP): Die Zaubermodifikation Zauberdauer senken ist nicht erschwert."
      ],
      "2": [
        "Kosten senken ",
        "(FW 16, 6 AP): Die Zaubermodifikation Kosten senken ist nicht erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Ecliptifactus.html",
    "name": "Ecliptifactus",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro Kampfrunde",
      "Merkmal": "Dämonisch",
      "Probe": "MU/IN/CH",
      "Publikation": "Die Streitenden Königreiche Seite 162",
      "Reichweite": "selbst",
      "Schatten": "<ul><li><strong>MU</strong> 15 <strong>KL</strong> 12 <strong>IN</strong> 13 <strong>CH</strong> 12</li><li><strong>FF</strong> 12 <strong>GE</strong> 13 <strong>KO</strong> 13 <strong>KK</strong> 14</li><li><strong>LeP</strong> 25 <strong>AsP</strong> – <strong>KaP</strong> – <strong>INI</strong> 14+1W6</li><li><strong>AW</strong> 7 <strong>SK</strong> 3 <strong>ZK</strong> 1 <strong>GS</strong> 8</li><li><strong>Angriff*: AT</strong> 13 <strong>PA</strong> 8 <strong>TP</strong> 1W6+3 <strong>RW</strong> mittel</li><li><strong>RS/BE</strong> 2/0</li><li><strong>Aktionen:</strong> 1</li><li><strong>Sonderfertigkeiten:</strong> keine</li><li><strong>Talente:</strong> Klettern 6, Körperbeherrschung 7, Kraftakt 7, Selbstbeherrschung 10, Sinnesschärfe 7, Verbergen 12, Einschüchtern 10, Willenskraft 7</li><li><strong>Größenkategorie:</strong> mittel</li><li><strong>Typus:</strong> übernatürliches Wesen, humanoid</li><li><strong>Kampfverhalten:</strong> Der Schatten verteidigt den Zaubernden, so gut er kann und geht, wenn dieser nicht direkt angegriffen wird, auch von sich aus zum Angriff auf potentielle Feinde über oder folgt dem Zauberer. Er führt jedoch keine Befehle des Zaubernden aus. Der Schatten versucht sich immer in einem Radius von 13 Schritten um den Zauberer herum aufzuhalten. Wird er durch irgendwelche Handlungen aus diesem Bereich gedrängt, versucht er den Radius wieder zu erreichen.</li><li><strong>Flucht:</strong> Der Schatten flieht nie.)<li></ul> Unabhängig von der geführten Waffe des Schattens, gelten die hier angegebenen Werte (plus eventuelle Boni aus erzielten QS).",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Schatten des Zauberers wird durch diesen Zauberspruch belebt und kämpft für ihn. Mit dem Ecliptifactus kann der Magier immer nur einen Schatten heraufbeschwören. Erst nach Ablauf der Wirkungsdauer kann er den Zauber erneut wirken. Der Schatten besitzt die unten aufgeführten Werte. Zusätzlich erhält der Schatten folgende Boni:<br/>QS 1: keine Änderungen<br/>QS 2: +1 AT, +5 LeP, +1 SK<br/>QS 3: +1 AT, +1 PA, +1 AW, +1 TP, +5 LeP, +1 SK, Finte I<br/>QS 4: +2 AT, +1 PA, +1 AW, +1 TP, +1 RS, +10 LeP, +1 SK, Finte I<br/>QS 5: +2 AT, +2 PA, +2 AW, +1 TP, +1 RS, +10 LeP, +2 SK, Finte I<br/>QS 6: +3 AT, +2 PA, +2 AW, +2 TP, +1 RS, +15 LeP, +2 SK, Finte I+II<br/>Der Schatten ist außer durch Zauber mit dem Merkmal Antimagie nicht durch Magie beeinflussbar und erleidet keine Zustände. Sinken seine LeP auf 0, so verliert der Zaubernde schlagartig seine gesamte Astralenergie, davon 2 AsP permanent. Es dauert 7 Wochen, bis der Schatten sich regeneriert hat. Bis dahin besitzt der Zaubernde keinen Schatten und kann den Zauberspruch entsprechend auch nicht anwenden. Der fehlende Schatten wird in vielen Kulturen, besonders in den Ländern der Zwölfgöttergläubigen, als ein Stigma betrachtet. Ein fehlender Schatten wird schnell als ein Anzeichen gesehen, dass man es mit einem Dämonenbündler oder gar einem Geweihten des Namenlosen zu tun hat. Der Held bekommt für die Zeit ohne Schatten den Nachteil Stigma (siehe Regelwerk Seite 178).",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Weite Entfernung ",
        "(FW 8, 3 AP): Der Schatten kann sich bis zu 20 Schritt weit entfernen."
      ],
      "1": [
        "Keine Aufrechterhaltung ",
        "(FW 12, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt"
      ],
      "2": [
        "Verbesserter Schatten ",
        "(FW 16, 9 AP): Alle Eigenschaften des Schattens steigen um 1."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Disruptivo.html",
    "name": "Disruptivo",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers) + 4 AsP pro 5 Minuten",
      "Merkmal": "Antimagie",
      "Probe": "MU/KL/CH",
      "Publikation": "Regelwerk Seite 289",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Dieser Grundzauber der Antimagie beeinträchtigt alle Arten von Zauberei in QS x 2 Schritt Radius um den Zaubernden herum, indem störende Schwingungen in die umgebenden astralen Muster gesendet werden. Alle Proben auf Zaubersprüche, die in dieser Zone gewirkt werden oder dort ihre Wirkung entfalten sollen, sind erschwert. Dies gilt ebenso für Zauber, die der Zaubernde selbst wirkt. Der Zaubernde muss vor dem Wirken festlegen, ob die Zone sich mit ihm mit bewegen oder an Ort und Stelle bleiben soll.<br/>QS 1: Probenerschwernis –1<br/>QS 2: Probenerschwernis –2<br/>QS 3: Probenerschwernis –3<br/>QS 4: Probenerschwernis –4<br/>QS 5: Probenerschwernis –5<br/>QS 6: Probenerschwernis –6",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Großer Radius ",
        "(FW 8, 2 AP): Der Radius beträgt QS x 3 Schritt."
      ],
      "1": [
        "Reichweite Berührung ",
        "(FW 12, 4 AP): Als Reichweite gilt Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ],
      "2": [
        "Unbeeindruckter Zauberwirker ",
        "(FW 16, 6 AP): Der Zauberer selbst erleidet beim Zaubern innerhalb der von ihm erschaffenen Zone nur die halbe Erschwernis."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Duplicatus.html",
    "name": "Duplicatus",
    "properties": {
      "AsP-Kosten": "4 AsP pro Doppelgänger (bei Misslingen entsprechend 2 AsP)",
      "Merkmal": "Illusion",
      "Probe": "KL/IN/CH",
      "Publikation": "Regelwerk Seite 290",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "C",
      "Trefferchancen": "Zahl der Doppelgänger Chance<br/>1 Doppelgänger 50 % (1-10 auf W20)<br/>2 Doppelgänger 33 % (1-7 auf W20)<br/>3 Doppelgänger 25 % (1-5 auf W20)<br/>4 Doppelgänger 20 % (1-4 auf W20)",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Zaubernde erzeugt einen oder mehrere illusionäre Doppelgänger des Ziels, die sich synchron zu ihm bewegen und ständig mit ihm verschmelzen und sich wieder von ihm trennen. Je nach QS erscheinen mehrere Doppelgänger. Der Zaubernde kann sich entscheiden, weniger Doppelgänger als maximal möglich erscheinen zu lassen:<br/>QS 1: 1 Doppelgänger, aber nur 2 Kampfrunden<br/>QS 2: 1 Doppelgänger<br/>QS 3: 2 Doppelgänger<br/>QS 4: 3 Doppelgänger<br/>QS 5: 4 Doppelgänger<br/>QS 6: 4 Doppelgänger, aber doppelte Wirkungsdauer<br/>Da die Doppelgänger nicht vom Zaubernden zu unterscheiden sind, haben Angreifer mit Nah- und Fernkampfangriffen oder Zaubern eine entsprechende Chance, einen der Doppelgänger statt des Zaubernden zu treffen. Sollte der Zaubernde statt eines Doppelgängers getroffen werden, muss er den Angriff parieren oder ihm ausweichen. Flächenangriffe sind hiervon nicht betroffen. Mehr zu den Illusionen und wie man sie durchschaut siehe Seite 259.",
      "Wirkungsdauer": "QS x 3 Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 3 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 6 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 9 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Dunkelheit.html",
    "name": "Dunkelheit",
    "properties": {
      "AsP-Kosten": "16 AsP (Aktivierung des Zaubers) + 8 AsP pro 5 Minuten",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/CH",
      "Publikation": "Die Streitenden Königreiche Seite 162",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Um den Zaubernden herum bildet sich eine Kugel aus Dunkelheit mit einem Durchmesser von QS x 2 in Schritt. Pro QS erschweren sich die Sichtverhältnisse um eine Stufe. Weder natürliche noch übernatürliche Lichtquellen können diese Dunkelheit erhellen. Für den Zaubernden werden die Sichtverhältnisse durch den Zauber nicht erschwert, bestehende Sichtmodifikatoren gelten allerdings weiterhin. Der Zaubernde muss vor dem Wirken des Zaubers entscheiden, ob die Zone der Dunkelheit an Ort und Stelle verbleiben oder sich mit ihm als Zentrum bewegen soll.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Großer Radius ",
        "(FW 8, 2 AP): Der Radius beträgt QS x 3 Schritt."
      ],
      "1": [
        "Angsteinflößende Dunkelheit ",
        "(FW 12, 4 AP): Die Dunkelheit ist so furchteinflößend, dass alle Lebewesen in der Zone eine Probe auf "
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Desintegratus.html",
    "name": "Desintegratus",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/CH/KK",
      "Publikation": "Aventurische Magie 124",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Das verzauberte Objekt verliert QS x 10 Strukturpunkte. Sinken die Strukturpunkte dadurch unter 1, zerfällt das Objekt zu Staub. Um Rüstungen zu zerstören, benötigt der Zauberer so viele QS, wie die Rüstung Rüstungsschutz hat. Bei Waffen der Kampftechniken Dolche und Raufen muss 1 QS erzielt werden, bei andere Waffen mindestens 2 QS. Zweihandwaffe können nur mit mindestens 3 QS zerstört werden. Erzielte QS gegen Waffen summieren sich auf.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Profane Objekte"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Höhere Zerstörungskraft 1 ",
        "(FW 8, 2 AP): Der Schaden steigt auf QS x 20 Strukturpunkte."
      ],
      "1": [
        "Höhere Zerstörungskraft 2 ",
        "(FW 12, 4 AP): Der Schaden steigt auf QS x 30 Strukturpunkte. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Ausgeweitete Zerstörung ",
        "(FW 16, 6 AP): Auch kleinere Gegenstände in bis zu 2 Schritt Abstand vom eigentlichen Ziel erleiden Schaden, z. B. Stühle in der Nähe eines betroffenen Tisches, nicht aber einzelne Steine einer Mauer. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Debilitatio.html",
    "name": "Debilitatio",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Sphären",
      "Probe": "MU/KL/CH",
      "Publikation": "Aventurische Magie 124",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Spruch erschafft eine unbewegliche kugelförmige Zone, die darin befindlichen Dämonen und Elementaren eine Erschwernis in Höhe der QS/2 auf alle Proben einbringt. Der Zauberer muss einen Mittelpunkt innerhalb der Reichweite des Zauberspruchs benennen, um den herum sich die Zone mit einem Radius von QS x 2 Schritt ausbreitet.",
      "Wirkungsdauer": "QS x 3 Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Geisterzone ",
        "(FW 8, 2 AP): Der Zauber wirkt auch gegen Geister."
      ],
      "1": [
        "Feenzone ",
        "(FW 12, 4 AP): Der Zauber wirkt auch gegen Feenwesen. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Durchdringung ",
        "(FW 16, 6 AP): Die betroffenen Wesen erhalten pro KR in der Zone 1 SP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Daemonenbann.html",
    "name": "Dämonenbann",
    "properties": {
      "AsP-Kosten": "8 AsP bzw. 16 AsP für Zauber mit Zielkategorie Zone",
      "Merkmal": "Antimagie",
      "Probe": "MU/CH/KO",
      "Publikation": "Aventurische Magie 123",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Ein Zauber des Merkmals Dämonisch wird aufgehoben, solange dessen QS nicht höher ist als die QS des Dämonenbanns. Der Bann entfaltet keine Wirkung gegen Zauber, deren Wirkung sofort eintritt (z. B. einmaliger Schaden). Auch gegen Zauber, deren Wirkung bereits vollendet ist, oder permanent wirkende Sprüche hilft er nicht. Wird der Dämonenbann gegen einen Zauber der Zielkategorie Zone eingesetzt, genügt es, wenn sich ein Teil von dieser innerhalb der Reichweite befindet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite erhöhen ",
        "(FW 8, 2 AP): Die Zaubermodifikation Reichweite erhöhen ist nicht erschwert."
      ],
      "1": [
        "Zauberdauer senken ",
        "(FW 12, 4 AP): Die Zaubermodifikation Zauberdauer senken ist nicht erschwert."
      ],
      "2": [
        "Kosten senken ",
        "(FW 16, 6 AP): Die Zaubermodifikation Kosten senken ist nicht erschwert."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Claudibus.html",
    "name": "Claudibus",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/IN/FF",
      "Publikation": "Die Streitenden Königreiche Seite 162",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Hexen",
      "Wirkung": "Durch diesen Zauberspruch verschließen sich Schlösser automatisch und es wird schwerer, sie wieder zu öffnen oder zu knacken. Pro QS werden Proben auf Schlösserknacken (Bartschlösser oder Kombinationsschlösser) und Kraftakt (Eintreten &amp; Zertrümmern) gegen das Schloss um 1 erschwert.",
      "Wirkungsdauer": "30 Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Objekte (Schlösser)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Längere Wirkungsdauer 1 (",
        "FW 8, 2 AP): Die Wirkungsdauer erhöht sich auf 2 Stunden."
      ],
      "1": [
        "Längere Wirkungsdauer 2 (",
        "FW 12, 4 AP): Die Wirkungsdauer erhöht sich auf 8 Stunden. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Längere Wirkungsdauer 3 (",
        "FW 16, 6 AP): Die Wirkungsdauer erhöht sich auf 24 Stunden. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Chamaelioni.html",
    "name": "Chamaelioni",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Illusion",
      "Probe": "IN/CH/GE",
      "Publikation": "Klingen der Nacht Seite 107",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Nachtalben u. a.",
      "Wirkung": "Steht der Zauberer still, verschmelzen Körper und Kleidung optisch mit der Umgebung (jedoch nicht Rüstungen , Waffen oder andere Ausrüstung). Eine Entdeckung ist nur dann möglich, wenn eine Vergleichsprobe zwischen <em>Sinnesschärfe (Hinterhalte</em> <em>entdecken, Suchen </em>oder <em>Wahrnehmen) </em>erschwert um QS gegen <em>Verbergen </em>gelingt. Sobald er sich bewegt, verfällt die Tarnung.",
      "Wirkungsdauer": "QS Minuten",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Ausrüstung tarnen ",
        "(FW 8, 2 AP): Auch Waffen bis zur Reichweite mittel, Rüstungen und Ausrüstungsstücke, die am Körper getragen werden, sind von der Tarnwirkung eingeschlossen."
      ],
      "1": [
        "Unsichtbarer Jäger ",
        "(FW 12, 4 AP): Selbst bei Bewegung, also auch im Kampf, wirkt die Tarnung noch. Im Kampf sorgt dies für Erschwernisse von 2 auf AT gegen das Ziel."
      ],
      "2": [
        "Reichweite Berührung ",
        "(FW 16, 6 AP): Als Reichweite gilt Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Daemonenschild.html",
    "name": "Dämonenschild",
    "properties": {
      "AsP-Kosten": "mindestens 4 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Antimagie",
      "Probe": "MU/KL/CH",
      "Publikation": "Aventurische Magie 123",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Spruch erschafft eine unsichtbare, 3 Schritt im Radius messende Kuppel um den Magier herum. Die Kuppel ist eigentlich eine Kugel, da jedoch der Magier meistens auf dem Boden steht, ist die Kugelform nur selten relevant. Dämonen können in sie eindringen, aber alle ihre Angriffe (und somit die TP) werden innerhalb des Radius von der Magie der Kuppel absorbiert. Dämonen werden teilweise halbmateriell und schlagen durch ihre Gegner hindurch oder ihre Angriffe werden von der Kuppel aufgesaugt wie Wasser von einem Schwamm. Zu diesem Zweck verfügt die Kuppel über eine Schildstärke in Höhe von AsP + (QS x 3), die TP in gleicher Höhe zu absorbieren vermag. Fällt die Schildstärke unter 1, bricht die Kuppel zusammen und der Zauber endet.",
      "Wirkungsdauer": "5 Minuten",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Schutzhaut ",
        "(FW 8, 2 AP): Die Schildstärke beträgt AsP + (QS x 4), aber nur der Zauberer selbst ist von der Schutzwirkung betroffen."
      ],
      "1": [
        "Großer Radius ",
        "(FW 12, 4 AP): Der Radius beträgt 5 Schritt. Es entstehen zusätzliche Kosten in Höhe von 4 AsP, die jedoch nicht die Schildstärke erhöhen."
      ],
      "2": [
        "Reichweite Berührung ",
        "(FW 16, 6 AP): Als Reichweite gilt Berührung. Die Schildstärke beträgt nur QS x 2. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Corpofesso.html",
    "name": "Corpofesso",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Verwandlung",
      "Probe": "KL/IN/KO (modifiziert um ZK)",
      "Publikation": "Regelwerk Seite 289",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Der Verzauberte erleidet schmerzhafte Muskelschwäche. Während der Wirkungsdauer erleidet er den Zustand Schmerz.<br/>QS 1: 1 Stufe Schmerz, aber nur für 1 KR<br/>QS 2: 1 Stufe Schmerz<br/>QS 3: 2 Stufen Schmerz<br/>QS 4: 3 Stufen Schmerz<br/>QS 5: 4 Stufen Schmerz<br/>QS 6: 4 Stufen Schmerz, aber für die doppelte Wirkungsdauer",
      "Wirkungsdauer": "QS x 2 in Kampfrunden",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Verteilte Wirkung ",
        "(FW 8, 3 AP): Die Zustandsstufen können auf mehrere Ziele verteilt werden, die vor dem Wirken des Zaubers benannt werden müssen. Kann der Zauberer z. B. 3 Stufen "
      ],
      "1": [
        "Längere Wirkung ",
        "(FW 12, 6 AP): Die Wirkungsdauer steigt auf QS x 3 KR."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 9 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 8 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Corpofrigo.html",
    "name": "Corpofrigo",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "KL/CH/KO (erschwert um ZK)",
      "Publikation": "Die Streitenden Königreiche Seite 162",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Der Corpofrigo erzeugt je nach QS Schaden und Stufen von Paralyse.<br/>QS 1: 1W6 TP<br/>QS 2: 1W6+2 TP<br/>QS 3: 1W6+2 TP, 1 Stufe Paralyse<br/>QS 4: 1W6+4 TP, 1 Stufe Paralyse<br/>QS 5: 1W6+6 TP, 1 Stufe Paralyse<br/>QS 6: 1W6+6 TP, 2 Stufen Paralyse<br/>Rüstungen schützen nicht vor diesem Zauber. Der Zauberspruch trifft sein Ziel automatisch und der Gegner kann weder ausweichen noch parieren.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Objekt ",
        "(FW 8, 2 AP): Der Zauber ist auch gegen Objekte einsetzbar. Sie erleiden Schaden, erhalten aber keine Zustandsstufen "
      ],
      "1": [
        "Fixiert ",
        "(FW 12, 4 AP): Das Ziel erleidet bis zum Ende der nächsten KR den Status "
      ],
      "2": [
        "Humus-Zerstörer ",
        "(FW 16, 6 AP): Gegen Ziele des Elements Humus können die TP verdoppelt werden. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Bannbaladin.html",
    "name": "Bannbaladin",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Regelwerk Seite 288",
      "Reichweite": "4 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Dieser ursprünglich elfische Freundschaftszauber weckt in seinem Ziel Sympathien und Freundschaft für den Zaubernden. Die genaue Wirkung ist davon abhängig, wie das Ziel zu dem Zaubernden steht. Pro QS verbessert sich die Verbindung zwischen den beiden um eine Stufe. Ist der Zaubernde dem Ziel vorher unbekannt, bewegt sich die Einstellung des Ziels meist zwischen Stufe 4 (Abneigung) und Stufe 6 (Zuneigung). Vorteile wie Gutaussehend oder Nachteile wie Vorurteile gegenüber dem Zaubernden können diesen ersten Eindruck je nach Situation um eine oder mehr Stufen modifizieren.<br/>Stufe 1: Das Ziel steht dem Zaubernden voller unstillbarem Hass gegenüber.<br/>Stufe 2: Das Ziel ist der erklärte Feind des Zaubernden.<br/>Stufe 3: Das Ziel verspürt dem Zaubernden gegenüber Abscheu und Ablehnung.<br/>Stufe 4: Das Ziel verspürt eine gewisse Abneigung für den Zaubernden.<br/>Stufe 5: Das Ziel ist dem Zaubernden gegenüber neutral.<br/>Stufe 6: Das Ziel verspürt eine gewisse Zuneigung für den Zaubernden.<br/>Stufe 7: Das Ziel empfindet Vertrauen und Freundschaft zum Zaubernden.<br/>Stufe 8: Das Ziel ist dem Zaubernden eng und loyal verbunden.<br/>Stufe 9: Das Ziel ist dem Zaubernden verfallen (geht für ihn jedoch nicht in den Tod).<br/>Der Zauberspruch verändert nicht das Erinnerungsvermögen. Dem Verzauberten ist nach Ende des Zaubers bewusst, was er empfunden und getan hat. Während der Zauberwirkung mag er sich des Zaubers bewusst sein, das beeinflusst aber seine neue Einstellung nicht. Handlungen des Zauberers hingegen können während der Wirkung das Verhältnis zum Verzauberten positiv oder negativ beeinflussen.",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende, übernatürliche Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gelungene Beeinflussung 1 ",
        "(FW 8, 2 AP): Der Verzauberte kann nach dem Ende der Wirkungsdauer eine Probe auf "
      ],
      "1": [
        "Gelungene Beeinflussung 2 ",
        "(FW 12, 4 AP): Der Verzauberte kann nach dem Ende der Wirkungsdauer eine Probe auf "
      ],
      "2": [
        "Gelungene Beeinflussung 3 ",
        "(FW 16, 6 AP): Der Verzauberte kann nach dem Ende der Wirkungsdauer eine Probe auf "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Axxeleratus.html",
    "name": "Axxeleratus",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/FF",
      "Publikation": "Regelwerk Seite 288",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Elfen",
      "Wirkung": "Die Bewegungen des Verzauberten werden übernatürlich beschleunigt. Dies bringt folgende Erleichterungen: +1 Verteidigung, GS x 2, INI-Basiswert x 2. Gegner können Attacken und Fernkampfangriffe des Beschleunigten schlechter abwehren und erhalten auf Verteidigung eine Erschwernis von 2.",
      "Wirkungsdauer": "QS x 5 Kampfrunden",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Schneller ",
        "(FW 8, 2 AP): Die GS erhöht sich auf GS x 3. Wann immer der Verzauberte sich mit mehr als GS x 2 fortbewegt, muss eine Probe auf "
      ],
      "1": [
        "Noch schneller ",
        "(FW 12, 4 AP): Die GS erhöht sich auf GS x 4. Wann immer der Verzauberte sich mit mehr als GS x 2 fortbewegt, muss eine Probe auf "
      ],
      "2": [
        "Noch viel schneller ",
        "(FW 16, 6 AP): Die GS erhöht sich auf GS x 5. Wann immer der Verzauberte sich mit mehr als GS x 2 fortbewegt, muss eine Probe auf "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Balsam.html",
    "name": "Balsam Salabunde",
    "properties": {
      "AsP-Kosten": "1 AsP pro LeP, mindestens jedoch 4 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/FF",
      "Publikation": "Regelwerk Seite 288",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Verzauberte erhält innerhalb von 6 Minuten nach dem Wirken des Zaubers verlorene LeP in Höhe der verwendeten AsP zurück. Der Zauberer kann maximal so viele AsP einsetzen, wie er FW hat. Für jede QS sinkt die Zeit um 1 Minute. Wird der Zauber vor dem Ablauf der durch den Konstitutionswert angegebenen Frist für den Tod eines Helden begonnen, kann er gerettet werden. Wird der Zauber jedoch unterbrochen, überlebt der Patient danach nur noch die verbliebenen Kampfrunden.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "16 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zwei Ziele ",
        "(FW 8, 2 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig heilen. Die AsP-Kosten müssen entsprechend für jedes Ziel einzeln entrichtet werden."
      ],
      "1": [
        "Vier Ziele ",
        "(FW 12, 4 AP): Der Zauber kann bis zu 4 Ziele gleichzeitig heilen. Die AsP-Kosten müssen entsprechend für jedes Ziel einzeln entrichtet werden."
      ],
      "2": [
        "Zielkategorie Lebewesen ",
        "(FW 16, 6 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Blitz.html",
    "name": "Blitz dich find",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH (modifiziert um SK)",
      "Publikation": "Regelwerk Seite 289",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Verzauberte wird geblendet. Er erhält eine Stufe des Zustands Verwirrung.",
      "Wirkungsdauer": "QS in Kampfrunden",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zwei Ziele ",
        "(FW 8, 1 AP): Der Zauberer kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 2 AsP extra."
      ],
      "1": [
        "Vier Ziele ",
        "(FW 12, 2 AP): Der Zauberer kann bis zu 4 Ziele gleichzeitig treffen. Jedes Ziel nach dem ersten kostet 2 AsP extra. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Acht Ziele ",
        "(FW 16, 3 AP): Der Zauberer kann bis zu 8 Ziele gleichzeitig treffen. Jedes Ziel nach dem ersten kostet 2 AsP extra. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Aureolus.html",
    "name": "Aureolus",
    "properties": {
      "AsP-Kosten": "2 AsP (Kosten nicht modifizierbar)",
      "Merkmal": "Illusion",
      "Probe": "IN/CH/FF",
      "Publikation": "Aventurische Magie 121",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Das Objekt wird von einem Glanz überzogen, der es wertvoller und prachtvoller erscheinen lässt. Der Glanz stellt jedoch keine Lichtquelle dar. Maximal kann eine Fläche von einem Rechtschritt überzogen werden. Proben auf <em>Handel (Feilschen)</em>, um das verzauberte Objekt zu verkaufen, sind um QS/2 Punkte erleichtert. Dem Käufer steht nach dem Ende der Wirkungsdauer eine Probe auf <em>Willenskraft </em>zu. Gelingt die Probe, erkennt er, dass er betrogen wurde. Bei Misslingen empfindet er den Handel vielleicht als schlechtes Geschäft, aber nicht als Betrug. Details zum Thema Illusionen finden sich im <strong>Regelwerk </strong>auf Seite <strong>259</strong>.",
      "Wirkungsdauer": "QS Stunden",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 1 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 2 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 3 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_AurisIllusionis.html",
    "name": "Auris Illusionis",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Illusion",
      "Probe": "KL/IN/CH",
      "Publikation": "Aventurische Magie 121",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier, Scharlatane",
      "Wirkung": "Mit diesem Illusionszauber ist die Täuschung des Gehörsinnes möglich. Es lassen sich Geräusche beliebiger Art erzeugen, die von allen Wesen in Hörreichweite wahrgenommen werden können. Die Lautstärke kann frei gewählt werden, vermag jedoch niemals ein Maß anzunehmen, das Schmerzen oder gar Schaden verursacht. Details zum Thema Illusionen finden sich im <strong>Regelwerk </strong>auf Seite <strong>259</strong>.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone (Radius von 5 x 5 Schritt)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 2 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 4 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 6 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_AugedesLimbus.html",
    "name": "Auge des Limbus",
    "properties": {
      "AsP-Kosten": "32 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Sphären",
      "Probe": "MU/IN/KK",
      "Publikation": "Aventurische Magie 120",
      "Reichweite": "32 Schritt",
      "Steigerungsfaktor": "D",
      "Verbreitung": "Gildenmagier, Kristallomanten",
      "Wirkung": "Der Spruch erschafft einen Strudel in den angrenzenden Limbus. Der Zauberer muss einen Mittelpunkt innerhalb der Reichweite des Zauberspruchs benennen, um den herum sich die Zone mit einem Radius von QS Schritt ausbreitet. Alle darin befindlichen Wesen werden in den Limbus gezogen, und auch unbefestigte Objekte sind betroffen. Jede KR muss eine Probe auf <em>Kraftakt (Ziehen &amp; Zerren) </em>gelingen, ansonsten wird man 2 Schritt näher zum Zentrum gesogen. Sucht man Halt an einem befestigten Gegenstand, ist die <em>Kraftakt</em>-Probe um 1 erleichtert. Wer bei der Öffnung des Strudels direkt im Zentrum steht, kann eine Probe auf <em>Sinnesschärfe (Wahrnehmen)</em> erschwert um 3 ablegen. Bei Gelingen hat man sich intuitiv vom Sog wegbewegt und befindet sich 2 Schritt vom Zentrum entfernt. Wer sich im Radius des Sogs befindet, kann sich nicht normal von dem Zentrum wegbewegen.",
      "Wirkungsdauer": "QS Kampfrunden",
      "Zauberdauer": "16 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Aus dem Limbus ",
        "(FW 8, 4 AP): Der Zauber kann auch im Limbus gewirkt werden, sodass man stattdessen aus dem Limbus in die Dritte Sphäre gesogen wird."
      ],
      "1": [
        "Stärkerer Sog ",
        "(FW 12, 8 AP): Die Proben auf "
      ],
      "2": [
        "Größerer Radius ",
        "(FW 16, 12 AP): Der Radius des Zaubers wird verdoppelt."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Aufwecken.html",
    "name": "Aufwecken",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Heilung",
      "Probe": "MU/IN/CH",
      "Publikation": "Aventurische Magie 119",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Elfen, Gildenmagier, Hexen",
      "Wirkung": "Ein schlafendes Ziel erwacht sofort aus seinen Träumen, und auch der Status <em>Bewusstlos </em>wird durch diesen Zauber aufgehoben. Das Ziel leidet aber danach für 6 – QS KR an 1 Stufe <em>Verwirrung</em>.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zwei Ziele ",
        "(FW 8, 1 AP): Der Zauberer kann bis zu 2 Ziele gleichzeitig wecken. Das zweite Ziel kostet 2 AsP extra."
      ],
      "1": [
        "Vier Ziele ",
        "(FW 12, 2 AP): Der Zauberer kann bis zu 4 Ziele gleichzeitig wecken. Jedes Ziel nach dem ersten kostet 2 AsP extra. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Massenerwachen ",
        "(FW 16, 3 AP): Beliebig viele Ziele erwachen durch den Zauber. Jedes Ziel nach dem ersten kostet 2 AsP extra. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Attributo_K%C3%B6rperkraft.html",
    "name": "Attributo (Körperkraft)",
    "properties": {
      "AsP-Kosten": "8 (Aktivierung des Zaubers) + 4 AsP pro 10 Minuten",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/KK",
      "Publikation": "Die Streitenden Königreiche Seite 162",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Durch den Attributo (Körperkraft) kann der Zauberer ein Ziel stärker und zäher machen. Für jede QS bekommt der Verzauberte einen Bonus. Die Boni sind kumulativ, das heißt bei QS 3 hat der Träger insgesamt KK +2 und ZK +1.<br/>1 QS: +1 KK<br/>2 QS: +1 ZK<br/>3 QS: +1 KK<br/>4 QS: +1 ZK<br/>5 QS: +1 KK<br/>6 QS: +1 ZK",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Lebewesen ",
        "(FW 8, 2 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen. Es entstehen zusätzliche Kosten in Höhe von 2 AsP."
      ],
      "1": [
        "Schnellsteigerung ",
        "(FW 12, 4 AP): Die Eigenschaft steigt bei QS 1-3 um 1, bei QS 4-6 um 2. Die SK steigt hingegen gar nicht, dafür dauert der Zauber nur 1 Aktion."
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_AttributoFingerfertigkeit.html",
    "name": "Attributo (Fingerfertigkeit)",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers) + 4 AsP pro 10 Minuten",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/FF",
      "Publikation": "Aventurische Magie 118",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Durch den Zauber wird das Ziel flinker und geschickter. Für jede erreichte QS bekommt der Verzauberte einen Bonus. Die Boni sind kumulativ, das heißt bei QS 3 hat der Träger insgesamt FF +2 und FK +1.<ul><li><strong>QS 1: </strong>+1 FF</li><li><strong>QS 2: </strong>+1 FK</li><li><strong>QS 3: </strong>+1 FF</li><li><strong>QS 4: </strong>+1 FK</li><li><strong>QS 5: </strong>+1 FF</li><li><strong>QS 6: </strong>+1 FK</li></ul>",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Lebewesen ",
        "(FW 8, 2 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen. Es entstehen zusätzliche Kosten in Höhe von 2 AsP."
      ],
      "1": [
        "Schnellsteigerung ",
        "(FW 12, 4 AP): Die Eigenschaft steigt bei QS 1-3 um 1, bei QS 4-6 um 2. Die SK steigt hingegen gar nicht, dafür dauert der Zauber nur 1 Aktion."
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zaubergilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_AttributoCharisma.html",
    "name": "Attributo (Charisma)",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers) + 4 AsP pro 10 Minuten",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/CH",
      "Publikation": "Aventurische Magie 118",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Durch den Zauber wird das Ziel charismatischer und ansprechender. Für jede erreichte QS bekommt der Verzauberte einen Bonus. Die Boni sind kumulativ, das heißt, bei QS 3 hat der Träger insgesamt CH +2 und SK +1.<ul><li><strong>QS 1: </strong>+1 CH</li><li><strong>QS 2: </strong>+1 SK</li><li><strong>QS 3: </strong>+1 CH</li><li><strong>QS 4: </strong>+1 SK</li><li><strong>QS 5: </strong>+1 CH</li><li><strong>QS 6: </strong>+1 SK</li></ul>",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Lebewesen ",
        "(FW 8, 2 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen. Es entstehen zusätzliche Kosten in Höhe von 2 AsP."
      ],
      "1": [
        "Schnellsteigerung ",
        "(FW 12, 4 AP): Die Eigenschaft steigt bei QS 1-3 um 1, bei QS 4-6 um 2. Die SK steigt hingegen gar nicht, dafür dauert der Zauber nur 1 Aktion."
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zaubergilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_AttributoKlugheit.html",
    "name": "Attributo (Klugheit)",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers) + 4 AsP pro 10 Minuten",
      "Merkmal": "Heilung",
      "Probe": "KL/KL/IN",
      "Publikation": "Aventurische Magie 119",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Gildenmagier",
      "Wirkung": "Durch den Zauber wird das Ziel klüger und vernünftiger. Für jede erreichte QS bekommt der Verzauberte einen Bonus. Die Boni sind kumulativ, das heißt bei QS 3 hat der Träger insgesamt KL +2 und SK +1.<ul><li><strong>QS 1: </strong>+1 KL</li><li><strong>QS 2: </strong>+1 SK</li><li><strong>QS 3: </strong>+1 KL</li><li><strong>QS 4: </strong>+1 SK</li><li><strong>QS 5: </strong>+1 KL</li><li><strong>QS 6: </strong>+1 SK</li></ul>",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Lebewesen ",
        "(FW 8, 2 AP): Der Zauber umfasst auch die Zielkategorie Lebewesen. Es entstehen zusätzliche Kosten in Höhe von 2 AsP."
      ],
      "1": [
        "Schnellsteigerung ",
        "(FW 12, 4 AP): Die Eigenschaft steigt bei QS 1-3 um 1, bei QS 4-6 um 2. Die SK steigt hingegen gar nicht, dafür dauert der Zauber nur 1 Aktion."
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Armatrutz.html",
    "name": "Armatrutz",
    "properties": {
      "AsP-Kosten": "4 AsP für RS 1, 8 AsP für RS 2, 16 AsP für RS 3 (Kosten sind nicht modifizierbar)",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/FF",
      "Publikation": "Regelwerk Seite 288",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "C",
      "Verbreitung": "allgemein",
      "Wirkung": "Die Haut des Zaubernden verhärtet sich, ohne ihre Flexibilität zu verlieren. So erhält er einen natürlichen Rüstungsschutz, der sich auf getragene Rüstung aufaddiert, ohne die Belastung zu erhöhen. Die Höhe des gewünschten zusätzlichen Rüstungsschutzes muss der Zaubernde vor der Probe festlegen. Maximal ist ein zusätzlicher RS von 3 möglich.",
      "Wirkungsdauer": "QS x 3 Minuten",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Objekt ",
        "(FW 8, 3 AP): Ein Objekt von maximal der Größe eines durchschnittlichen Hauses erhält RS, der vor Strukturschaden schützt."
      ],
      "1": [
        "Harte Schale ",
        "(FW 12, 6 AP): Der Zauberer kann auch einen RS von 4 verleihen. Die Kosten dafür betragen 32 AsP (nicht modifizierbar)."
      ],
      "2": [
        "Reichweite Berührung ",
        "(FW 16, 9 AP): Als Reichweite gilt Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden. Die Kosten steigen dabei um eine Kategorie (von 4 auf 8, von 8 auf 16 usw.)."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_AromatisIllusionis.html",
    "name": "Aromatis Illusionis",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Illusion",
      "Probe": "KL/IN/CH",
      "Publikation": "Aventurische Magie 118",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Mit diesem Illusionszauber lassen sich beliebige Gerüche und Geschmäcker erzeugen, die jedoch niemals so intensiv sein können, dass sie bei betroffenen Personen Übelkeit hervorrufen könnten. Details zum Thema Illusionen finden sich im <strong>Regelwerk </strong>auf Seite <strong>259</strong>.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone (Radius 3 x 3 Schritt)"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Gute Illusion 1 ",
        "(FW 8, 1 AP): Die "
      ],
      "1": [
        "Gute Illusion 2 ",
        "(FW 12, 2 AP): Die "
      ],
      "2": [
        "Gute Illusion 3 ",
        "(FW 16, 3 AP): Die "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Atemnot.html",
    "name": "Atemnot",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Einfluss",
      "Probe": "KL/CH/KO (modifiziert um ZK)",
      "Publikation": "Die Streitenden Königreiche Seite 161",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden",
      "Wirkung": "Der Verzauberte leidet augenblicklich unter Atemnot. Er erhält eine Stufe des Zustands Betäubung.",
      "Wirkungsdauer": "QS in Kampfrunden",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {}
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Archosphaero.html",
    "name": "Archosphaero",
    "properties": {
      "AsP-Kosten": "32 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/KO",
      "Publikation": "Aventurische Magie 117",
      "Reichweite": "32 Schritt",
      "Steigerungsfaktor": "D",
      "Verbreitung": "Druiden",
      "Wirkung": "Aus den Händen des Zaubernden schießt ein Erzball, der in gerader Linie sein Ziel trifft. Das Treffen ist in der Zauberdauer inbegriffen, der Magier muss also keine zusätzliche Aktion aufwenden. Der Erzball explodiert, wenn er sein Ziel oder auf ein großes, festes Hindernis trifft (z. B. eine Wand oder einen Schild). Verlässt der Erzball die Reichweite, ohne ein Ziel zu treffen, so löst er sich auf. Auch die Gefährten des Zauberers können getroffen werden, wenn der Erzball explodiert. Der Radius der Explosion beträgt 5 Schritt. Der Schaden beträgt einen Schritt um das Zentrum der Explosion herum 2W6 + (QS x 3) Trefferpunkte (auch gegen leblose Objekte als Strukturschaden). Pro Schritt Entfernung von diesem Bereich verringert sich der Schaden um 3 TP. Der Erzball trifft automatisch, wenn man ihm nicht aktiv zu entgehen versucht. Dazu muss eine Verteidigung eingesetzt und eine Probe auf <em>Körperbeherrschung</em> <em>(Kampfmanöver) </em>abgelegt werden. Pro QS hat der Held sich 1 Schritt weit weg vom Zentrum der Explosion bewegt. Trifft der Erzball sein Ziel, werden die TP durch den RS des Ziels vermindert. Alle getroffenen Ziele erhalten außerdem bei 1-3 auf 1W6 1 Stufe des Zustands <em>Belastung</em>, der erst nach 5 Minuten wieder endet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Zone"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Intensive Explosion ",
        "(FW 8, 4 AP): Es muss nicht gewürfelt werden, ob die Ziele 1 Stufe "
      ],
      "1": [
        "Schneller Ball ",
        "(FW 12, 8 AP): Die Ziele können schlechter ausweichen. Das Ausweichen ist zusätzlich um 1 erschwert. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ],
      "2": [
        "Großer Radius ",
        "(FW 16, 12 AP): Der Radius der Explosion beträgt 7 Schritt. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Archofaxius.html",
    "name": "Archofaxius",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "MU/KL/CH",
      "Publikation": "Aventurische Magie 117",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Druiden",
      "Wirkung": "Aus den Fingern des Zaubernden schießt ein Erzstrahl, der in gerader Linie sein Ziel trifft. Der Magier muss keine zusätzliche Aktion aufwenden, um nach dem Wirken des Zaubers zu treffen. Das Treffen ist in der Zauberdauer inbegriffen. Das getroffene Ziel erleidet 2W6 + (QS x 2) Trefferpunkte Schaden. Der Erzstrahl zählt als Fernkampfangriff mit einer Schusswaffe und kann entsprechend geblockt werden, und auch ein Ausweichen ist möglich. An Schilden erzeugt er Strukturschaden, wenn er auf sie trifft. Der Strahl trifft automatisch, wenn man sich nicht verteidigt. Trifft der Erzstrahl sein Ziel, werden die TP durch den RS des Ziels vermindert. Das Ziel erhält zudem bei 1-3 auf 1W6 1 Stufe des Zustands <em>Belastung</em>, der erst nach 5 Minuten wieder endet.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "alle"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Intensiver Strahl ",
        "(FW 8, 3 AP): Es muss nicht gewürfelt werden, ob das Ziel 1 Stufe "
      ],
      "1": [
        "Windender Strahl ",
        "(FW 12, 6 AP): Das Ziel kann schlechter ausweichen. Das Ausweichen ist zusätzlich um 2 erschwert. Es entstehen zusätzliche Kosten in Höhe von 2 AsP."
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 9 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 4 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Analys.html",
    "name": "Analys Arkanstruktur",
    "properties": {
      "AsP-Kosten": "16 AsP",
      "Merkmal": "Hellsicht",
      "Probe": "KL/KL/IN",
      "Publikation": "Regelwerk Seite 287",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "C",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Zauberer erhält detaillierte Hinweise, ob das Objekt magisch ist und falls ja, wie seine magische Struktur beschaffen ist. Durch die so gesammelten Informationen kann der Zauberer bei einer Magischen Analyse mehr QS ansammeln als üblich. Jede QS des Analys entspricht der Höhe der maximal ansammelbaren QS der Probe auf Magiekunde (unterschiedliche Anwendungsgebiete) für die Magische Analyse. Hat der Zauberer z. B. 3 QS im Analys erzielt, kann er maximal 3 QS bei der Magischen Analyse erzielen, hat er eine QS von 4, so sind maximal 4 QS bei der Analyse möglich usw. Mehr zur Magischen Analyse siehe Seite 269.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "32 Aktionen",
      "Zielkategorie": "Wesen, Objekte"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zwei Gegenstände ",
        "(FW 8, 3 AP): Der Zauberer kann bis zu 2 Gegenstände gleichzeitig analysieren."
      ],
      "1": [
        "Drei Gegenstände ",
        "(FW 12, 6 AP): Der Zauberer kann bis zu 3 Gegenstände gleichzeitig analysieren. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Vier Gegenstände ",
        "(FW 16, 9 AP): Der Zauberer kann bis zu 4 Gegenstände gleichzeitig analysieren. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Altisonus.html",
    "name": "Altisonus",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Heilung",
      "Probe": "MU/CH/KO",
      "Publikation": "Aventurische Magie 116",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Scharlatane",
      "Wirkung": "Die Stimme des Zauberers wird deutlich lauter und beeindruckender und vermag jede andere in einem Raum zu übertönen. Die Reichweite seiner Stimme verdoppelt sich.",
      "Wirkungsdauer": "QS x 5 Minuten",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Reichweite Berührung ",
        "(FW 8, 1 AP): Als Reichweite gilt Berührung. Der Zauberspruch kann nur auf Kulturschaffende übertragen werden."
      ],
      "1": [
        "Noch weiter ",
        "(FW 12, 2 AP): Die Reichweite der Stimme reicht viermal so weit wie normal. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ],
      "2": [
        "Donnerstimme ",
        "(FW 16, 3 AP): In einem Radius von 10 Schritt um den Sprecher empfinden Lebewesen die Lautstärke als derart unangenehm, dass sämtliche Fertigkeitsproben für sie um 1 erschwert sind, solange der Zauberer spricht."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_%C3%84ngste_lindern.html",
    "name": "Ängste lindern",
    "properties": {
      "AsP-Kosten": "8 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/IN/CH",
      "Publikation": "Die Streitenden Königreiche Seite 161",
      "Reichweite": "Berührung",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Hexen",
      "Wirkung": "je nach QS können mit diesem Zauberspruch Stufen von Furcht augenblicklich abgebaut werden. Die Wirkung ist nicht kumulativ, es gelten die Auswirkungen der höchsten QS.<br/>QS 1: 1 Stufe Furcht<br/>QS 2: 1 Stufe Furcht, +1 MU für 1 Minute<br/>QS 3: 2 Stufen Furcht, +1 MU für 1 Minute<br/>QS 4: 3 Stufen Furcht, +1 MU für 1 Minute<br/>QS 5: 4 Stufen Furcht, +1 MU für 1 Minute<br/>QS 6: 4 Stufen Furcht, +2 MU für 1 Minute",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Größere Reichweite ",
        "(FW 8, 2 AP): Der Zauber hat die Reichweite 2 Schritt."
      ],
      "1": [
        "Verteilte Wirkung ",
        "(FW 12, 4 AP): Die Senkung der Zustandsstufe "
      ],
      "2": [
        "Zwei Ziele ",
        "(FW 16, 6 AP): Der Zauber kann auf bis zu 2 Ziele gleichzeitig gesprochen werden. Das zweite Ziel kostet 4 AsP extra."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Angstausloesen.html",
    "name": "Angst auslösen",
    "properties": {
      "AsP-Kosten": "16 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Dämonisch",
      "Probe": "MU/CH/GE",
      "Publikation": "Aventurische Magie 116",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "C",
      "Verbreitung": "Gildenmagier",
      "Wirkung": "Alle Kulturschaffenden in einem Radius von QS x 2 Schritt um den Zauberer werden von panischer Angst vor ihm erfüllt. Solange sie sich im Wirkungsradius aufhalten, erleiden sie 2 Stufen des Zustands <em>Furcht</em>. Die Opfer müssen den Zauberer nicht sehen, damit der Spruch seine Wirkung entfaltet. Ist ihre SK aber höher als die QS des Zaubers, sind sie von den Auswirkungen nicht betroffen.",
      "Wirkungsdauer": "QS x 2 KR",
      "Zauberdauer": "4 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Lebewesen ",
        "(FW 8, 3 AP): Die Zielkategorie umfasst Lebewesen."
      ],
      "1": [
        "Längere Wirkungsdauer ",
        "(FW 12, 6 AP): Die Wirkungsdauer beträgt QS x 3 KR."
      ],
      "2": [
        "Größerer Radius ",
        "(FW 16, 9 AP): Der Radius beträgt QS x 3 Schritt."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Aeolito.html",
    "name": "Aeolito",
    "properties": {
      "AsP-Kosten": "8 AsP (Kosten sind nicht modifizierbar)",
      "Merkmal": "Elementar",
      "Probe": "KL/CH/KO (modifiziert um ZK)",
      "Publikation": "Aventurische Magie 115",
      "Reichweite": "16 Schritt",
      "Steigerungsfaktor": "B",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Aeolito erschafft einen stürmischen Wind, der beim Ziel je nach QS Schaden und den Status <em>Liegend </em>verursacht.<ul><li><strong>QS 1: </strong>1W6 TP</li><li><strong>QS 2: </strong>1W6+2 TP</li><li><strong>QS 3: </strong>1W6+2 TP, <em>Liegend</em></li><li><strong>QS 4: </strong>1W6+4 TP, <em>Liegend</em>, 1 Schritt zurückgeworfen</li><li><strong>QS 5: </strong>1W6+6 TP, <em>Liegend</em>, 2 Schritt zurückgeworfen</li><li><strong>QS 6: </strong>1W6+6 TP, <em>Liegend</em>, 3 Schritt zurückgeworfen</li><li>Rüstungen schützen nicht vor diesem Zauber. Der Zauberspruch trifft sein Ziel automatisch. Der Gegner kann weder ausweichen noch parieren.</li></ul>",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zielkategorie Objekt ",
        "(FW 8, 2 AP): Der Zauber ist auch gegen Objekte einsetzbar. Sie erleiden Schaden, erhalten aber nicht den Status "
      ],
      "1": [
        "Weites Zurückwerfen ",
        "(FW 12, 4 AP): Die Distanz beim Zurückwerfen wird verdoppelt."
      ],
      "2": [
        "Erz-Zerstörer ",
        "(FW 16, 6 AP): Gegen Ziele des Elements Erz können die TP verdoppelt werden. Es entstehen zusätzliche Kosten in Höhe von 4 AsP."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Alpgestalt.html",
    "name": "Alpgestalt",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Einfluss",
      "Probe": "MU/CH/GE (modifiziert um SK)",
      "Publikation": "Aventurische Magie 116",
      "Reichweite": "8 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Druiden, Hexen, Scharlatane",
      "Wirkung": "Den Verzauberten befällt Angst und er erhält eine Stufe des Zustands <em>Furcht</em>.",
      "Wirkungsdauer": "QS Kampfrunden",
      "Zauberdauer": "1 Aktion",
      "Zielkategorie": "Lebewesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Zwei Ziele ",
        "(FW 8, 1 AP): Der Zauber kann bis zu 2 Ziele gleichzeitig treffen. Das zweite Ziel kostet 2 AsP extra."
      ],
      "1": [
        "Vier Ziele ",
        "(FW 12, 2 AP): Der Zauber kann bis zu 4 Ziele gleichzeitig treffen. Voraussetzung: Zaubererweiterung "
      ],
      "2": [
        "Acht Ziele ",
        "(FW 16, 3 AP): Der Zauber kann bis zu 8 Ziele gleichzeitig treffen. Jedes Ziel nach dem ersten kostet 2 AsP extra. Voraussetzung: Zaubererweiterung "
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Adlerauge.html",
    "name": "Adlerauge",
    "properties": {
      "AsP-Kosten": "4 AsP (Aktivierung des Zaubers) + 2 AsP pro 5 Minuten",
      "Merkmal": "Heilung",
      "Probe": "KL/IN/FF",
      "Publikation": "Regelwerk Seite 287",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "B",
      "Verbreitung": "Druiden, Elfen",
      "Wirkung": "Das Talent Sinnesschärfe wird während der Wirkungsdauer um QS +3 des Zaubers erhöht.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "2 Aktionen",
      "Zielkategorie": "Wesen"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Einzelsinn schärfen ",
        "(FW 8, 2 AP): Nur ein Einzelsinn (Sicht, Gehör, Geruch & Geschmack, Tastsinn) ist vom Zauber betroffen. Der Zauberer erhält auf entsprechende Proben einen Bonus von QS +4 auf "
      ],
      "1": [
        "Spurensuchen ",
        "(FW 12, 4 AP): Bei Proben auf "
      ],
      "2": [
        "Keine Aufrechterhaltung ",
        "(FW 16, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Abvenenum.html",
    "name": "Abvenenum",
    "properties": {
      "AsP-Kosten": "4 AsP",
      "Merkmal": "Objekt",
      "Probe": "KL/IN/FF",
      "Publikation": "Aventurische Magie 114",
      "Reichweite": "1 Schritt",
      "Steigerungsfaktor": "A",
      "Verbreitung": "Druiden, Elfen, Gildenmagier",
      "Wirkung": "Bis zu 5 Stein an Getränken und Speisen werden von allen Giften und Krankheitskeimen befreit, deren Stufe die QS nicht übersteigt. Ist bereits jemand durch die Speisen oder Getränke vergiftet worden, wirkt der Abvenenum bei ihm nicht mehr.",
      "Wirkungsdauer": "sofort",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Objekte"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Ausnahme ",
        "(FW 8, 1 AP): Der Zauberer kann entscheiden, dass Alkohol und andere Rauschmittel nicht neutralisiert werden. Er kann die einzelnen Substanzen benennen, die nicht herausgefiltert werden sollen."
      ],
      "1": [
        "Größerer Umfang ",
        "(FW 12, 2 AP): Der Zauberer kann größere Mengen an Getränken und Speisen verzaubern. Es entstehen zusätzliche Kosten in Höhe von 2 AsP pro weiteren angefangenen 5 Stein."
      ],
      "2": [
        "Tadelloser Vorkoster ",
        "(FW 16, 3 AP): Für jeweils 4 zusätzliche AsP kann die QS bei einer gelungenen Probe um 1 erhöht werden (bis zu einem Maximum von QS 6)."
      ]
    }
  },
  {
    "link": "http://www.ulisses-regelwiki.de/index.php/index.php/ZS_Adlerschwinge.html",
    "name": "Adlerschwinge",
    "properties": {
      "AsP-Kosten": "8 AsP (Aktivierung des Zaubers) + 4 AsP pro Stunde",
      "Merkmal": "Verwandlung",
      "Probe": "MU/IN/GE",
      "Publikation": "Aventurische Magie 115",
      "Reichweite": "selbst",
      "Steigerungsfaktor": "C",
      "Verbreitung": "allgemein",
      "Wirkung": "Der Zauberer verwandelt sich in ein Fluglebewesen seiner Wahl, das jedoch maximal die Größenkategorie klein aufweisen darf. Während der Wirkungsdauer verwendet der Zauberer die körperlichen Werte des Tieres, einschließlich seiner Eigenschaften, Talente und Kampfwerte. Eine niedrige LE wird bei der Verwandlung anteilsmäßig angerechnet, gleiches geschieht bei der Rückverwandlung. Die geistigen Werte des Zauberers bleiben ebenso wie sein Bewusstsein erhalten. Die Verwandlung betrifft nur den Zauberer selbst, nicht seine Kleidung oder Ausrüstung. Es ist keine Verwandlung in ein kulturschaffendes Wesen möglich.",
      "Wirkungsdauer": "aufrechterhaltend",
      "Zauberdauer": "8 Aktionen",
      "Zielkategorie": "Kulturschaffende"
    },
    "spellclass": "Zauberspruch",
    "spellextensions": {
      "0": [
        "Mittlere Tiere ",
        "(FW 8, 3 AP): Der Zauberer kann sich auch in Fluglebewesen der Größenkategorie mittel verwandeln. Es entstehen zusätzliche Kosten in Höhe von 5 AsP."
      ],
      "1": [
        "Keine Aufrechterhaltung ",
        "(FW 12, 6 AP): Der Zauber gilt nicht als aufrechterhaltend. Die Wirkungsdauer und damit die AsP-Kosten müssen beim Sprechen des Zaubers festgelegt werden."
      ],
      "2": [
        "Große Tiere ",
        "(FW 16, 9 AP): Der Zauberer kann sich auch in Fluglebewesen der Größenkategorie groß verwandeln. Es entstehen zusätzliche Kosten in Höhe von 6 AsP. Voraussetzung: Zaubererweiterung "
      ]
    }
  }
]
