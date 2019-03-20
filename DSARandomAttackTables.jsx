export const DSARandomAttack = {
  successes: {
    attack: {
      distance: {
        title: "Fernkampf Angriff",
        description: "Anstatt die TP nach einem bestätigten Kritischen Erfolg bei dem FK zu verdoppeln, wird ein Zufallsereignis generiert. Der Verteidigungswert des Gegners ist bei allen Ergebnissen halbiert.",
        image: "img/fernkampf-angriff-erfolg.jpg",
        imagetitle: "Kritischer Fernkampf Angrif",
        table: {
          "Leichter Treffer": [
          "Der Treffer richtet +1 TP an",
          "Der Treffer richtet +3 TP an"
          ],
          "Leicht Betäubender Treffer": [
          "Der Treffer richtet +1 TP an und der Gegner erhält 1 Stufe Betäubung für 1 KR",
          "Der Treffer richtet +2 TP an und der Gegner erhält 1 Stufe Betäubung für 2 KR",
          "Der Treffer richtet +3 TP an und der Gegner erhält 1 Stufe Betäubung für 3 KR"
          ],
          "Mittelschwerer Treffer": [
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält den Status Blutend",
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet)",
          "Der Gegner erhält den Status Blutend",
          "Der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslinger erleidet er den Status Liegend."
          ],
          "Mittelschwerer schmerzhafter Treffer": [
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 2 KR 1 Stufe Schmerz",
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 2 KR 1 Stufe Schmerz sowie den Status Blutend",
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 2 KR 1 Stufe Schmerz sowie den Status Betäubung",
          "Der Gegner erhält für 1 KR 1 Stufe Schmerz",
          "Der Gegner erhält für 2 KR 1 Stufe Schmerz",
          "Der Gegner erhält für 2 KR 1 Stufe Schmerz sowie den Status Blutend",
          ],
          "Mittelschwerer Betäubender Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 3 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 8 KR.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 5 KR 2 Stufen Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 8 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 3 KR 2 Stufen Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 1 KR 2 Stufen Betäubung."
          ],
          "Schwerer Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Betäubung sowie den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt TP werden verdoppelt und der Gegner erhält 1 Stufe Schmerz für 2 KR.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt.",
          "Der Treffer richtet +5 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Treffer richtet +3 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Treffer richtet +1 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend."
          ],
          "Schwerer Betäubender Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –1 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden.",
          "Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 10 KR.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 5 KR 2 Stufen Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 8 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 3 KR 2 Stufen Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 1 KR 2 Stufen Betäubung."
          ],
          "Schwerer Schwmerzhafter Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz sowie 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz sowie den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz.",
          "Der Gegner erhält für 5 KR 1 Stufe Schmerz sowie den Status Blutend.",
          "Der Gegner erhält für 5 KR 1 Stufe Schmerz.",
          "Der Gegner erhält für 5 KR 2 Stufen Schmerz."
          ],
          "Aus dem Gleichgewicht gebracht": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) –2 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 4 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) –2 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslingen erleidet er den Status Liegend."
          ],
          "Gehirn Erschütterung": [
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –2 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 2 Stufen Betäubung für 1 Stunde.",
          "Dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –2 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleichob die Probe ge- oder misslungen ist, erleidet der Held 2 Stufen Betäubung für 1 Stunde.",
          "Dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 1 Stunde."
          ],
          "Extrem Schwerer Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdreifacht.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 1W3 KR den Status Handlungsunfähig zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Schmerz für 3 KR."
          ],
        }
      },
      combat: {
        title: "Nahkampf Angriff",
        description: "Anstatt die TP nach einem bestätigten Kritischen Erfolg bei der AT zu verdoppeln, wird ein Zufallsereignis generiert. Der Verteidigungswert des Gegners ist bei allen Ergebnissen halbiert.",
        image: "img/nahkampf-angriff-erfolg.jpg",
        imagetitle: "Kritischer Nahkampf Angriff",
        table: {
          "Leichter Treffer": [
          "Der Treffer richtet +1 TP an",
          "Der Treffer richtet +3 TP an"
          ],
          "Leicht Betäubender Treffer": [
          "Der Treffer richtet +1 TP an und der Gegner erhält 1 Stufe Betäubung für 1 KR",
          "Der Treffer richtet +2 TP an und der Gegner erhält 1 Stufe Betäubung für 2 KR",
          "Der Treffer richtet +3 TP an und der Gegner erhält 1 Stufe Betäubung für 3 KR"
          ],
          "Mittelschwerer Treffer": [
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält den Status Blutend",
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet)",
          "Der Gegner erhält den Status Blutend",
          "Der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslinger erleidet er den Status Liegend."
          ],
          "Mittelschwerer schmerzhafter Treffer": [
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 2 KR 1 Stufe Schmerz",
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 2 KR 1 Stufe Schmerz sowie den Status Blutend",
          "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 2 KR 1 Stufe Schmerz sowie den Status Betäubung",
          "Der Gegner erhält für 1 KR 1 Stufe Schmerz",
          "Der Gegner erhält für 2 KR 1 Stufe Schmerz",
          "Der Gegner erhält für 2 KR 1 Stufe Schmerz sowie den Status Blutend",
          ],
          "Mittelschwerer Betäubender Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 3 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 8 KR.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 5 KR 2 Stufen Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 8 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 3 KR 2 Stufen Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 1 KR 2 Stufen Betäubung."
          ],
          "Schwerer Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Betäubung sowie den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt TP werden verdoppelt und der Gegner erhält 1 Stufe Schmerz für 2 KR.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt.",
          "Der Treffer richtet +5 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Treffer richtet +3 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Treffer richtet +1 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend."
          ],
          "Schwerer Betäubender Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –1 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden.",
          "Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 10 KR.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 5 KR 2 Stufen Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 8 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 3 KR 2 Stufen Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 1 KR 2 Stufen Betäubung."
          ],
          "Schwerer Schwmerzhafter Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz sowie 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz sowie den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz.",
          "Der Gegner erhält für 5 KR 1 Stufe Schmerz sowie den Status Blutend.",
          "Der Gegner erhält für 5 KR 1 Stufe Schmerz.",
          "Der Gegner erhält für 5 KR 2 Stufen Schmerz."
          ],
          "Aus dem Gleichgewicht gebracht": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) –2 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 4 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) –2 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslingen erleidet er den Status Liegend."
          ],
          "Gehirn Erschütterung": [
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –2 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 2 Stufen Betäubung für 1 Stunde.",
          "Dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –2 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleichob die Probe ge- oder misslungen ist, erleidet der Held 2 Stufen Betäubung für 1 Stunde.",
          "Dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 1 Stunde."
          ],
          "Extrem Schwerer Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdreifacht.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 1W3 KR den Status Handlungsunfähig zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Schmerz für 3 KR."
          ],
        }
      }
    },
    defend: {
      distance: {
        title: "Fernkampf Verteidigung",
        description: "Die Ergebnisse ersetzen die Regel, dass die nächste Verteidigung in dieser Kampfrunde nicht um 3 sinkt, es sei denn, dies wird als Ergebnis aufgeführt.",
        image: "img/fernkampf-verteidigung-erfolg.jpg",
        imagetitle: "Kritische Fernkampf Verteidigung",
        table: {
          "Sehr gute Gelegenheit zum Angriff": [
            "Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 2 senken (bis zu einem Maximum von +/–0).",
            "Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 3 senken (bis zu einem Maximum von +/–0), wenn er den Vorteil nutzt, sinkt seine Verteidigung im selben Zeitraum um 1."
          ],
          "Gute Gelegenheit zum Angriff": [
            "Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 2 senken (bis zu einem Maximum von +/–0), wenn er den Vorteil nutzt, sinkt seine Verteidigung im selben Zeitraum um 1.",
            "Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 1 senken (bis zu einem Maximum von +/–0).",
            "Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 1 senken (bis zu einem Maximum von +/–0), außerdem ist die Verteidigung gegen seine Angriffe im selben Zeitraum zusätzlich um 1 erschwert."
          ],
          "Große Verteidigungslücke": [
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 3 erschwert, allerdings erleidet der Held eine Erschwernis von 1 Punkt, sofern er ein Kampfmanöver einsetzt.",
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 3 erschwert.",
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 3 erschwert. Außerdem kann der Held bis zum Ende der nächsten KR einmalig eine Erschwernis von 1 Punkt ignorieren, wenn er ein Manöver einsetzt.",
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 3 erschwert. Außerdem kann der Held bis zum Ende der nächsten KR einmalig eine Erschwernis von bis zu 2 Punkten ignorieren, wenn er ein Manöver einsetzt."
          ],
          "Kleine Verteidigungslücke": [
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 1 erschwert.",
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 2 erschwert, allerdings erleidet der Held eine Erschwernis von 1 Punkt, sofern er ein Kampfmanöver einsetzt.",
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 2 erschwert.",
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 2 erschwert. Außerdem kann der Held bis zum Ende der nächsten KR einmalig eine Erschwernis von 1 Punkt ignorieren, wenn er ein Manöver einsetzt.",
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 2 erschwert. Außerdem kann der Held bis zum Ende der nächsten KR einmalig eine Erschwernis von bis zu 2 Punkten ignorieren, wenn er ein Manöver einsetzt.",
            "Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KR gegen den Helden um 2 erschwert. Außerdem kann der Held bis zum Ende der nächsten KR einmalig eine Erschwernis von bis zu 3 Punkten ignorieren, wenn er ein Manöver einsetzt."
          ],
          "Angriffssituation": [
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 AT und +1 FK, allerdings nur sofern er keine Basis- oder Spezialmanöver einsetzt.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 AT und +1 FK, allerdings nur sofern er keine Spezialmanöver einsetzt.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 AT und +1 FK.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 AT und +1 FK. Darüber hinaus sind Basismanöver im selben Zeitraum zusätzlich um 1 erleichtert.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 AT und +1 FK. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraum zusätzlich um 1 erleichtert.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT und +2 FK. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraum zusätzlich um 2 erleichtert.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT und +2 FK. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraum zusätzlich um 3 erleichtert."
          ],
          "Verteidigungsvorteil": [
            "Der Verteidigungswert sinkt nicht um 3 wie üblich bei der nächsten Verteidigung in dieser Kampfrunde, sondern nur um 2, allerdings sind alle darauf folgenden Aktionen bis zum Ende der nächsten KR um 1 erschwert, sofern der Held von dem Vorteil profitiert.",
            "Der Verteidigungswert sinkt nicht um 3 wie üblich bei der nächsten Verteidigung in dieser Kampfrunde, sondern nur um 2.",
            "Der Verteidigungswert sinkt nicht um 3 wie üblich bei der nächsten Verteidigung in dieser Kampfrunde, sondern nur um 1, allerdings sind alle darauf folgenden Aktionen bis zum Ende der nächsten KR um 1 erschwert, sofern der Held von dem Vorteil profitiert.",
            "Der Verteidigungswert sinkt nicht um 3 wie üblich bei der nächsten Verteidigung in dieser Kampfrunde, sondern nur um 1.",
            "Der Verteidigungswert sinkt nicht um 3 wie üblich bei der nächsten Verteidigung in dieser Kampfrunde.",
            "Der Verteidigungswert sinkt nicht um 3 wie üblich bei der nächsten Verteidigung in dieser Kampfrunde. Darüber hinaus sind alle Angriffe gegen den Helden bis zum Ende der nächsten KR um 1 zusätzlich erschwert.",
            "Der Verteidigungswert sinkt nicht um 3 wie üblich bei der nächsten Verteidigung in dieser Kampfrunde. Darüber hinaus sind alle Angriffe gegen den Helden bis zum Ende der nächsten KR um 2 zusätzlich erschwert.",
            "Der Verteidigungswert sinkt nicht um 3 wie üblich bei der nächsten Verteidigung in dieser Kampfrunde. Darüber hinaus sind alle Angriffe gegen den Helden bis zum Ende der nächsten KR um 2 zusätzlich erschwert und es können im selbem Zeitraum keine Manöver gegen ihn eingesetzt werden."
          ],
          "Verteidigungssituation": [
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 VW, allerdings sind Kampfmanöver, sofern er welche einsetzt, bis zum Ende der nächsten KR um –2 erschwert.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 VW, allerdings sind Kampfmanöver, sofern er welche einsetzt, bis zum Ende der nächsten KR um –1 erschwert.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 VW.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 VW, Setzt er bei seiner Verteidigung ein Manöver ein, erhält er einen zusätzlichen Bonus von +1 VW (also insgesamt +2 VW).",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 VW. Setzt er bei seiner Verteidigung ein Manöver ein, erhält er einen zusätzlichen Bonus von +1 VW (also insgesamt +3 VW).",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 VW, Setzt er bei seiner Verteidigung ein Manöver ein, erhält er einen zusätzlichen Bonus von +2 VW (also insgesamt +4 VW).",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +3 VW, Setzt er bei seiner Verteidigung ein Manöver ein, erhält er einen zusätzlichen Bonus von +2 VW (also insgesamt +5 VW)."
          ],
          "Gute Angriffssituation": [
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT und +2 FK allerdings nur sofern er keine Basis- oder Spezialmanöver einsetzt.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT und +2 FK, allerdings nur sofern er keine Spezialmanöver einsetzt.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT und +2 FK.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT und +2 FK. Darüber hinaus sind Basismanöver im selben Zeitraum zusätzlich um 1 erleichtert.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT und +2 FK. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraum zusätzlich um 1 erleichtert.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT und +2 FK. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraum zusätzlich um 2 erleichtert."
          ],
          "Herausragende Kampfsituation": [
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT, +2 FK und +1 VW, allerdings nur sofern er keine Basis- oder Spezialmanöver einsetzt.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT, +2 FK und +1 VW.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT, +2 FK und +1 VW. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraum zusätzlich um 1 erleichtert.",
            "Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +2 AT, +2 FK und +1 VW. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraum zusätzlich um 2 erleichtert."
          ],
          "Blöße": [
            "Bis zum Ende der nächsten KR sind alle Proben auf AT und FK, die gegen den Gegner gerichtet sind, um 1 erleichtert, gleich ob durch den Helden oder seine Gefährten, allerdings nur sofern keine Basis- oder Spezialmanöver eingesetzt werden.",
            "Bis zum Ende der nächsten KR sind alle Proben auf AT und FK, die gegen den Gegner gerichtet sind, um 1 erleichtert, gleich ob durch den Helden oder seine Gefährten.",
            "Bis zum Ende der nächsten KR sind alle Proben auf AT und FK, die gegen den Gegner gerichtet sind, um 1 erleichtert, gleich ob durch den Helden oder seine Gefährten. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraum zusätzlich um 1 erleichtert."
          ],
          "Auf dem Präsentierteller": [
            "Bis zum Ende der nächsten KR sind Verteidigungen des Gegners um 1 erschwert, außerdem sind Basis- und Spezialmanöver gegen ihn um 1 erleichtert gleich ob durch den Helden oder seine Gefährten.",
            "Bis zum Ende der nächsten KR sind Verteidigungen des Gegners um 1 erschwert, außerdem sind alle Proben auf AT und FK gegen ihn um 1 erleichtert gleich ob durch den Helden oder seine Gefährten."
          ]
        }
      },
      combat: {
        title: "Nahkampf Verteidigung",
        description: "Die Ergebnisse ersetzen den Passierschlag des Helden für einen bestätigten Kritischen Erfolg, es sei denn, ein Passierschlag wird als Ergebnis aufgeführt.",
        image: "img/nahkampf-verteidigung-erfolg.jpg",
        imagetitle: "Kritische Nahkampf Verteidigung",
        table: {
          "Geschickter Angriff": [
          "Der Held verfügt bis zum Ende der nächsten KR über einen Bonus von +2 auf AT gegen seinen Gegner.",
          "Wenn der Held bis zum Ende der nächsten KR ein Manöver im Nahkampf einsetzt, kann er einmalig eine Erschwernis von bis zu 2 Punkten ignorieren."
          ],
          "Geschickte Verteidigung": [
          "Der Held verfügt bis zum Ende der nächsten KR über einen Bonus von +1 auf VW gegen seinen Gegner.",
          "Der Held verfügt bis zum Ende der nächsten KR über einen Bonus von +2 auf VW gegen seinen Gegner.",
          "Der Held verfügt bis zum Ende der nächsten KR über einen Bonus von +3 auf VW gegen seinen Gegner."
          ],
          "Geschickte Kampfbewegungen": [
          "Bis zum Ende der nächsten KR sind Manöver gegen den Helden für den Gegner um 2 zusätzlich erschwert.",
          "Wenn der Gegner bis zum Ende der nächsten KR Manöver gegen den Helden einsetzt, ist die Verteidigung gegen diese um 4 Punkte erleichtert.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Manöver gegen den Helden einsetzen.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Spezialmanöver gegen den Helden einsetzen."
          ],
          "Äußerst geschickte Kampfbewegungen": [
          "Bis zum Ende der nächsten KR sind alle Angriffe (AT, FK) des Gegners gegen den Helden um 2 erschwert.",
          "Bis zum Ende der nächsten KR sind alle Angriffe (AT, FK) des Gegners gegen den Helden um 4 erschwert.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Angriffe (AT, FK) gegen den Helden ausführen.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Angriffe (AT, FK) gegen den Helden ausführen. Außerdem kann der Held in diesem Zeitraum einmalig eine Erschwernis von bis zu 1 Punkt ignorieren, wenn er ein Manöver im Nahkampf einsetzt.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Angriffe (AT, FK) gegen den Helden ausführen. Außerdem kann der Held in diesem Zeitraum einmalig eine Erschwernis von bis zu 2 Punkten ignorieren, wenn er ein Manöver im Nahkampf einsetzt.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Angriffe (AT, FK) gegen den Helden ausführen. Außerdem kann der Held in diesem Zeitraum einmalig eine Erschwernis von bis zu 3 Punkten ignorieren, wenn  er ein Manöver im Nahkampf einsetzt."
          ],
          "Vorteilhafte Position": [
          "Der Held muss bis zum Ende der nächsten KR nur 1 freie Aktion aufwenden, um in Vorteilhafte Position zu gelangen. Er muss dazu keine Probe ablegen.",
          "Der Held muss bis zum Ende der nächsten KR nur 1 Aktion aufwenden, um in Vorteilhafte Position zu gelangen. Er muss dazu keine Probe ablegen.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position.Außerdem kann der Held in diesem Zeitraum zusätzlich einmalig eine Erschwernis von bis zu 1 Punkt ignorieren, wenn er ein Manöver im Nahkampf einsetzt.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position. Außerdem kann der Held in diesem Zeitraum zusätzlich einmalig eine Erschwernis von bis zu 2 Punkten ignorieren, wenn er ein Manöver im Nahkampf einsetzt.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position. Außerdem erhält der Held in diesem Zeitraum zusätzlich noch einen Bonus von +1 auf AT und +1 auf VW.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position. Außerdem erhält der Held in diesem Zeitraum zusätzlich noch einen Bonus von +2 auf AT und +1 auf VW."
          ],
          "Passierschlag": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 3 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erleichtert. Wenn der Held den Passierschlag nutzt, ist seine AT danach bis zum Ende der nächsten KR um 1 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erleichtert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erleichtert. Wenn der Held den Passierschlag nutzt, ist seine AT danach bis zum Ende der nächsten KR um 1 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erleichtert."
          ],
          "Geschickter Passierschlag": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 3 erschwert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei Basismanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei Basismanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erschwert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei Basismanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei Basismanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei sowohl Basis- als auch Spezialmanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen sei-nen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erleichtert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei sowohl Basis- als auch Spezialmanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erleichtert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei sowohl Basis- als auch Spezialmanöver einsetzen."
          ],
          "Machtvoller Passierschlag": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +2 TP an.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +2 TP an und der Gegner erhält bis zum Ende der nächsten KR 1 Stufe Betäubung.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +3 TP an.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +3 TP an und der Gegner erhält bis zum Ende der nächsten KR 1 Stufe Betäubung.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +4 TP an.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +4 TP an und der Gegner erhält bis zum Ende der nächsten KR 1 Stufe Betäubung."
          ],
          "Günstige Angriffsposition": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Wenn der Held bis zum Ende der nächsten KR ein Manöver im Nahkampf einsetzt, kann er einmalig eine Erschwernis von 1 Punkt ignorieren.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +1 auf AT.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Wenn der Held bis zum Ende der nächsten KR ein Manöver im Nahkampf einsetzt, kann er einmalig eine Erschwernis von bis zu 2 Punkten ignorieren.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +2 auf AT."
          ],
          "Günstige Verteidigungsposition": [
          "Der Kämpfer kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +1 auf VW.",
          "Der Kämpfer kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +2 auf VW.",
          "Der Kämpfer kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +3 auf VW."
          ],
          "Zwei Passierschläge": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erleichtert. Danach kann er einen weiteren durchführen, der nicht zuzüglich modifiziert ist.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Dieser ist zuzüglich zu allen anderen Modifikatoren um 4 erleichtert. Danach kann er einen weiteren durchführen, der zuzüglich um 2 erschwert ist.",
          ]
        }
      }
    }
  },
  fails: {
    attack: {
      distance: {
        title: "Fernkampf Angriff Patzer",
        description: "Anstatt 1W6+2 SP bei einem Patzer, kann auch dieses Ereignis benutzt werden.",
        image: "img/fernkampf-angriff-fehlschlag.jpg",
        imagetitle: "Fernkampf Angriff Patzer",
        table: {
          "Waffe zerstört": [
            "Die Waffe kann nicht mehr repariert werden. Ihre Einzelteile treffen teilweise den Helden und verursachen 1W6 SP. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Die Waffe ist zerbrochen. Die Probe, um sie zu reparieren ist um 3 erschwert, außerdem kostet die Reparatur 25 % des ursprünglichen Preises der Waffe. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe schwer beschädigt": [
            "Die Waffe ist nicht mehr verwendbar, bis sie repariert wird. Die Probe, um sie zu reparieren ist um 1 erschwert. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Die Waffe ist nicht mehr verwendbar, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Die Waffe ist zwar schwer beschädigt, aber noch einsetzbar. Alle Proben auf Fernkampf sind um 4 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe beschädigt": [
            "Die Waffe hat einen Kratzer abbekommen, aber dies hat keine regeltechnischen Auswirkungen. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Die Waffe wurde beschädigt. Alle Proben auf Fernkampf sind um 2 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Die Waffe wurde beschädigt. Alle Proben auf Fernkampf sind um 4 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Die Waffe wurde beschädigt. Alle Proben auf Fernkampf sind um 4 erschwert, bis sie repariert wird. Außerdem ist die Probe für die Reparatur um 1 erschwert. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe verloren": [
            "Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Sie liegt 1W6+2 Schritt weit weg, sodass noch eine Bewegung ausgeführt werden muss, um sie zu erreichen. Außerdem hat sie sich an einem Objekt verhakt oder ist eingeklemmt und kann nur mit 1 Aktion und einer Probe auf Kraftakt (Ziehen & Zerren) befreit werden. ",
            "Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Allerdings liegt sie 1W6+2 Schritt weit weg, sodass zusätzlich noch eine Bewegung ausgeführt werden muss, um sie zu erreichen. ",
            "Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Außerdem hat sie sich an einem Objekt verhakt oder ist eingeklemmt und kann nur mit 1 Aktion und einer Probe auf Kraftakt (Ziehen & Zerren) befreit werden. ",
            "Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). ",
            "Die Waffe ist auf den Boden gefallen, dabei hat sie selbst oder das Geschoss aber einen vom Meister bestimmten Gefährten des Helden oder einen Unschuldigen fast getroffen, sodass dieser bis zum Ende der nächsten KR –3 auf VW aufweist. Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf FK. ",
            "Die Waffe ist zwar auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239), allerdings ist die Probe um 2 erleichtert."
          ],
          "Kamerad / Unschuldiger getroffen": [
            "Das Geschoss trifft aus Versehen einen Freund oder einen am Kampf Unbeteiligten. Ist kein solches Ziel in der Nähe, wird diese Auswirkung Selbst verletzt behandelt. Der Schaden der Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und bekommt danach noch einen Bonus von +2 TP. Das Opfer kann sich gegen den Angriff nicht verteidigen. ",
            "Das Geschoss trifft aus Versehen einen Freund oder einen am Kampf Unbeteiligten. Ist kein solches Ziel in der Nähe, wird diese Auswirkung Selbst verletzt behandelt. Der Schaden der Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und bekommt danach noch einen Bonus von +2 TP. Das Opfer kann sich gegen den Angriff verteidigen erhält aber einen Malus von –2 auf Verteidigung. ",
            "Der Treffer beim Kamerad / Unschuldigen erfolgte in den rechten Arm. Ist kein solches Ziel in der Nähe, wird diese Auswirkung Selbst verletzt behandelt. Der Schaden der Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und bekommt danach noch einen Bonus von +2 TP. Das Opfer kann sich gegen den Angriff verteidigen. ",
            "Das Geschoss trifft aus Versehen einen Freund oder einen am Kampf Unbeteiligten. Ist kein solches Ziel in der Nähe, wird diese Auswirkung Selbst verletzt behandelt. Der Schaden der Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. ",
            "Das Geschoss trifft aus Versehen einen Freund oder einen am Kampf Unbeteiligten. Ist kein solches Ziel in der Nähe, wird diese Auswirkung Selbst verletzt behandelt. Der Schaden der Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und bekommt danach einen Malus von –2 TP (bis zu einem Minimum von 1 TP). Das Opfer kann sich gegen den Angriff nicht verteidigen. ",
            "Das Geschoss trifft aus Versehen einen Freund oder einen am Kampf Unbeteiligten. Ist kein solches Ziel in der Nähe, wird diese Auswirkung Selbst verletzt behandelt. Der Schaden der Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und bekommt danach noch einen Malus von –2 TP (bis zu einem Minimum von 1 TP). Das Opfer kann sich gegen den Angriff verteidigen. ",
            "Das Geschoss trifft aus Versehen einen Freund oder einen am Kampf Unbeteiligten. Ist kein solches Ziel in der Nähe, wird diese Auswirkung Selbst verletzt behandelt. Der Schaden der Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und bekommt danach noch einen Malus von –2 TP (bis zu einem Minimum von 1 TP). Das Opfer kann sich gegen den Angriff verteidigen und erhält einen Bonus von +2 auf die Verteidigung."
          ],
          "Fehlschuss": [
            "Die Kleidung eines Gefährten oder eines Unschuldigen wird getroffen und ist dadurch an ein Objekt festgenagelt, sodass er bis zum Ende der nächsten KR den Status Fixiert erleidet. ",
            "Die Ladezeit steigt um 2 Aktionen. ",
            "Der Fehlschuss bleibt in einem Gefährten oder einen Unschuldigen hängen, richtet aber nur 1 SP an (falls das Ziel eine Rüstung mit mindestens RS 1 trägt: 0 SP). ",
            "Die Ladezeit steigt um 1 Aktion. ",
            "Das Geschoss geht wird beim Schuss zerstört. ",
            "Der spektakuläre Fehlschuss trifft ein Objekt (Ladenschild heruntergeschossen, Glasfenster zu Bruch gegangen etc.). ",
            "Es kommt zu einem Fehlschuss und das Geschoss ist verloren. ",
            "Der Schuss geht weit daneben und das Geschoss fliegt bis zu seiner maximalen Reichweite davon."
          ],
          "Zerrung": [
            "1 Stufe Schmerz und 1 Stufe Paralyse für 1 Stunde. ",
            "1 Stufe Schmerz und 1 Stufe Paralyse für 5 KR. ",
            "Der Held hat Nackenschmerzen und erleidet für die nächsten 3 Kampfrunden –2 VW. ",
            "Der Held hat Rückenschmerzen und erleidet für die nächsten 3 Kampfrunden 1 Stufe Schmerz. ",
            "Der Held hat eine Zerrung und erleidet bis zum Ende der nächsten KR 1 Stufe Schmerz. ",
            "Der Held hat Nackenschmerzen und erleidet für die nächsten 3 Kampfrunden –1 AT und –1 VW. ",
            "Der Held hat eine Zerrung in seinem rechten Arm (bei Linkshändern: linker Arm) und erleidet für die nächsten 3 Kampfrunden –2 auf AT."
          ],
          "Sehne herausgerutscht / Waffe nicht richtig gegriffen / Ladehemmung": [
            "Der Held benötigt 5 komplette Kampfrunden, um die Waffe wieder einsatzbereit zu machen. ",
            "Der Held benötigt 3 komplette Kampfrunden, um die Waffe wieder einsatzbereit zu machen. ",
            "Der Held benötigt 2 komplette Kampfrunden, um die Waffe wieder einsatzbereit zu machen. ",
            "Der Held benötigt 1 komplette Kampfrunden, um die Waffe wieder einsatzbereit zu machen. ",
            "Waffe Die Waffe macht bis zum Ende des Kampfes Schwierigkeiten, sodass alle Proben auf FK um 2 erschwert sind. ",
            "Die Waffe macht bis zum Ende des Kampfes Schwierigkeiten, sodass alle Proben auf FK um 1 erschwert sind."
          ],
          "Zu konzentriert": [
            "Der Held ist mit Zielen oder mit seiner Waffe beschäftigt. Er benötigt 2 Aktionen zum Abschießen/Werfen der Waffe. Der FK-Angriff wird damit zu einer Länger dauernden Handlung. ",
            "Der Held ist mit Zielen oder mit seiner Waffe beschäftigt. Bis zu seiner nächsten Aktion sind Verteidigungen um 4 erschwert. ",
            "Der Held ist mit Zielen oder mit seiner Waffe beschäftigt. Bis zu seiner nächsten Aktion kann er keine Verteidigungen ausführen. ",
            "Der Held ist mit Zielen oder mit seiner Waffe beschäftigt. Bis zum Abschluss des FK-Angriffs kann er keine Verteidigungen ausführen und er benötigt 2 Aktionen zum Abschießen/Werfen der Waffe. Der FK-Angriff wird damit zu einer Länger dauernden Handlung."
          ],
          "Selbst verletzt": [
            "Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und dann halbiert. ",
            "Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. ",
            "Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Zudem erleidet der Held den Status Blutend."
          ],
          "Selbst schwer verletzt": [
            "Ein schwerer Eigentreffer des Helden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und dann verdoppelt. Zudem erleidet der Held den Status Blutend. ",
            "Ein schwerer Eigentreffer des Helden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Zudem erleidet der Held den Status Blutend und bis zum Ende der nächsten KR sind alle seine Handlungen um 2 erschwert."
          ]
        }
      },
      combat: {
        title: "Nahkampf Angriff Patzer",
        description: "Anstatt 1W6+2 SP bei einem Patzer, kann auch dieses Ereignis benutzt werden.",
        image: "img/nahkampf-angriff-fehlschlag.jpg",
        imagetitle: "Nahkampf Angriff Patzer",
        table: {
          "Waffe zerstört": [
            "Die Waffe kann nicht mehr repariert werden. Ihre Einzelteile treffen teilweise den Helden und verursachen 1W6 SP. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt.",
            "Die Waffe ist zerbrochen. Die Probe, um sie zu reparieren ist um 3 erschwert, außerdem kostet die Reparatur 25 % des ursprünglichen Preises der Waffe. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe schwer beschädigt": [
            "Die Waffe ist nicht mehr verwendbar, bis sie repariert wird. Die Probe, um sie zu reparieren ist um 1 erschwert. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt.",
            "Die Waffe ist nicht mehr verwendbar, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt.",
            "Die Waffe ist zwar schwer beschädigt, aber noch einsetzbar. Alle Proben auf Attacke und Parade sind um 4 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe beschädigt": [
            "Die Waffe hat einen Kratzer abbekommen, aber dies hat keine regeltechnischen Auswirkungen. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt.",
            "Die Waffe wurde beschädigt. Alle Proben auf Attacke und Parade sind um 1 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt.",
            "Die Waffe wurde beschädigt. Alle Proben auf Attacke und Parade sind um 2 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt.",
            "Die Waffe wurde beschädigt. Alle Proben auf Attacke und Parade sind um 3 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe verloren": [
            "Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Allerdings kann der Gegner dabei einen Passierschlag ausführen.",
            "Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Allerdings liegt sie 1W6+2 Schritt weit weg, sodass zusätzlich noch eine Bewegung ausgeführt werden muss, um sie zu erreichen.",
            "Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Allerdings ist die Probe um 2 erschwert.",
            "Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239).",
            "Die Waffe ist auf den Boden gefallen, hat aber vorher einen vom Meister bestimmten Gefährten des Helden oder einen Unschuldigen fast getroffen, sodass dieser bis zum Ende der nächsten KR –3 auf VW aufweist. Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf AT.",
            "Die Waffe ist zwar auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239), allerdings ist die Probe um 2 erleichtert."
          ],
          "Waffe stecken geblieben": [
            "Die Waffe fliegt dem Helden aus der Hand und trifft einen Gefährten oder einen Unschuldigen. Dieser kann versuchen, sich mit einer Schilde-PA zu verteidigen oder ausweichen. Bei Misslingen erleidet er den vollen Waffenschaden. Alle eingesetzten Manöver werden dabei berücksichtigt. Der Held kann seine Waffe nach den üblichen Regeln wiedererlangen (siehe Regelwerk Seite 239). Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf AT.",
            "Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, ist 1 Aktion und eine Probe auf Kraftakt (Ziehen & Zerren) notwendig.",
            "Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, ist 1 Aktion und eine um 1 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig.",
            "Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, ist 1 Aktion und eine um 2 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig.",
            "Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, sind 5 Aktionen und eine um 2 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig.",
            "Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, sind 1 Aktion und eine um 2 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig. Nach dem Befreien hat sie aber einen kleinen Schaden, der für eine Erschwernis von 1 auf AT und PA sorgt. Nach dem Kampf kann dieser Schaden behoben werden ohne dass eine Probe notwendig ist.",
            "Die Waffe des Helden schwingt gegen einen Gefährten oder Unschuldigen. Dieser kann sofort eine VW einsetzen, um dem Treffer zu entgehen. Bei Misslingen erleidet er den vollen Waffenschaden. Alle eingesetzten Manöver werden dabei berücksichtigt. Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf AT."
          ],
          "Sturz": [
            "Der Held erleidet den Zustand Liegend und zieht bis 1W3 seiner Gefährten, die zufällig bestimmt werden, ebenfalls zu Boden, sofern ihnen nicht eine Probe auf Körperbeherrschung (Balance) –2 gelingt. Sie erleiden ansonsten den Status Liegend. Sollten keine Gefährten in der unmittelbaren Nähe sein, erleidet der Held 1 Stufe Schmerz für 5 Minuten.",
            "Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 3 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend, erleidet 1W6+2 SP und für 3 KR 1 Stufe Betäubung.",
            "Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 3 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend und verletzte sich beim Sturz mit 1W6+2 SP.",
            "Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 2 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend und verletzte sich beim Sturz mit 1W6 SP.",
            "Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 2 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend.",
            "Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 1 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend.",
            "Der Held stolpert und stürzt, wenn seinem Spieler nicht eine Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend.",
            "Der Held stolpert und stürzt, wenn seinem Spieler nicht eine erleichterte Probe auf Körperbeherrschung (Balance) +1 gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend."
          ],
          "Stolpern": [
            "Der Held stolpert in die Waffe des Gegners und erleidet den vollen Waffenschaden, zudem ist seine nächste Handlung um 2 erschwert.",
            "Der Held stolpert, seine nächste Handlung ist um 3 erschwert.",
            "Der Held verliert einen Gegenstand (außer seine Waffe), seine Hose rutscht herunter, oder er hängt irgendwo fest. Bis zum Ende der nächsten KR hat er eine Erschwernis von 2 auf alle Handlungen und er erleidet den Status Eingeengt und Fixiert.",
            "Der Held stolpert, seine nächste Handlung ist um 2 erschwert.",
            "Der Held stolpert, sodass bis zum Ende der nächsten KR alle Gegner gegen ihn einen Bonus von 2 auf AT erhalten. Der Abenteurer bekommt aber keine Erschwernis für seine nächste Handlung.",
            "Der Held stolpert, seine nächste Handlung ist um 1 erschwert.",
            "Der Held stolpert, sodass bis zum Ende der nächsten KR alle Gegner gegen ihn einen Bonus von 1 auf AT erhalten. Der Abenteurer bekommt aber keine Erschwernis für seine nächste Handlung."
          ],
          "Fuß verdreht": [
            "Der Held erhält für 3 KR 2 Stufen Schmerz.",
            "Der Held erhält für 5 KR 1 Stufe Schmerz.",
            "Der Held erhält für 3 KR 1 Stufe Schmerz.",
            "Der Held erleidet +2 TP, dafür aber keine Stufe Schmerz.",
            "Der Held erhält für 1 KR 1 Stufe Schmerz.",
            "Der Held erleidet +1 TP, dafür aber keine Stufe Schmerz."
          ],
          "Beule": [
            "Der Held bekommt 2 Stufen Betäubung für 1 Stunde (statt 1 Stufe).",
            "Der Held bekommt 1 Stufe Betäubung und den Status Blutend.",
            "Der Held bekommt 1 Stufe Betäubung für 1 Stunde.",
            "Der Held bekommt 1 Stufe Betäubung für 2 KR."
          ],
          "Selbst verletzt": [
            "Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und dann halbiert. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen.",
            "Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen.",
            "Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. Zudem erleidet der Held den Status Blutend."
          ],
          "Selbst schwer verletzt": [
            "Ein schwerer Eigentreffer des Helden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und dann verdoppelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. Zudem erleidet der Held den Status Blutend.",
            "Ein schwerer Eigentreffer des Helden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. Zudem erleidet der Held den Status Blutend und bis zum Ende der nächsten KR sind alle seine Handlungen um 2 erschwert."
          ]
        }
      }
    },
    defend: {
      distance: {
        title: "Fernkampf Verteidigung Patzer",
        description: "Anstatt 1W6+2 SP bei einem Patzer, kann auch dieses Ereignis benutzt werden.",
        image: "img/fernkampf-verteidigung-fehlschlag.jpg",
        imagetitle: "Fernkampf Verteidigung Patzer",
        table: {
          "Waffe/Schild zerstört": [
            "Waffe zerspringt in Einzelteile: Die Waffe kann nicht mehr repariert werden. Ihre Einzelteile treffen teilweise den Helden und verursachen 1W6 SP. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Waffe zerbrochen: Die Waffe ist zerbrochen. Die Probe, um sie zu reparieren ist um 3 erschwert, außerdem kostet die Reparatur 25 % des ursprünglichen Preises der Waffe. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe/Schild schwer beschädigt": [
            "Extrem schwere Beschädigung: Die Waffe ist nicht mehr verwendbar, bis sie repariert wird. Die Probe, um sie zu reparieren ist um 1 erschwert. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Waffe stark beschädigt: Die Waffe ist nicht mehr verwendbar, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Waffe kaum noch zu gebrauchen: Die Waffe ist zwar schwer beschädigt, aber noch einsetzbar. Alle Proben auf Attacke und Parade sind um 4 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe/Schild beschädigt": [
            "Kratzer an der Waffe: Die Waffe hat einen Kratzer abbekommen, aber dies hat keine regeltechnischen Auswirkungen. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Leicht beschädigte Waffe: Die Waffe ist beschädigt worden. Alle Proben auf Attacke und Parade sind um 1 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Beschädigte Waffe: Die Waffe ist beschädigt worden. Alle Proben auf Attacke und Parade sind um 2 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Schwer beschädigte Waffe: Die Waffe ist beschädigt worden. Alle Proben auf Attacke und Parade sind um 3 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe/Schild verloren": [
            "Waffe liegt weit weg und ungünstig: Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Sie liegt 1W6+2 Schritt weit weg, sodass noch eine Bewegung ausgeführt werden muss, um sie zu erreichen. Außerdem hat sie sich an einem Objekt verhakt oder ist eingeklemmt und kann nur mit 1 Aktion und einer Probe auf Kraftakt (Ziehen & Zerren) befreit werden. ",
            "Waffe weit weg: Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Allerdings liegt sie 1W6+2 Schritt weit weg, sodass zusätzlich noch eine Bewegung ausgeführt werden muss, um sie zu erreichen. ",
            "Waffe liegt ungünstig: Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Allerdings ist die Probe um 2 erschwert. ",
            "Waffe auf den Boden gefallen: Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). ",
            "Waffe streift einen Gefährten oder Unschuldigen: Die Waffe ist auf den Boden gefallen, hat aber vorher einen vom Meister bestimmten Gefährten des Helden oder einen Unschuldigen fast getroffen, sodass dieser bis zum Ende der nächsten KR –3 auf VW aufweist. Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf AT. ",
            "Waffe liegt günstig: Die Waffe ist zwar auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239), allerdings ist die Probe um 2 erleichtert."
          ],
          "Waffe/Schild stecken geblieben": [
            "Gefährten oder Unschuldigen verletzt: Die Waffe fliegt dem Helden aus der Hand und trifft einen Gefährten oder einen Unschuldigen. Dieser kann versuchen, sich mit einer Schilde-PA zu verteidigen oder ausweichen. Bei Misslingen erleidet er den vollen Waffenschaden. Eingesetzte Manöver werden dabei berücksichtigt. Der Held kann seine Waffe nach den üblichen Regeln wiedererlangen (siehe Regelwerk Seite 239). Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf AT. ",
            "Waffe steckt fest: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, ist 1 Aktion und eine Probe auf Kraftakt (Ziehen & Zerren) notwendig. ",
            "Waffe steckt ziemlich fest: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, ist 1 Aktion und eine um 1 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig. ",
            "Waffe steckt sehr tief fest: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, ist 1 Aktion und eine um 2 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig. ",
            "Waffe steckt extrem tief fest: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, sind 5 Aktionen und eine um 2 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig. ",
            "Waffe verbogen: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, sind 1 Aktion und eine um 2 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig. Nach dem Befreien hat sie aber einen kleinen Schaden, der für eine Erschwernis von 1 auf AT und PA sorgt. Nach dem Kampf kann dieser Schaden behoben werden ohne dass eine Probe notwendig ist. ",
            "Waffe trifft Gefährten oder Unschuldigen: Die Waffe des Helden schwingt gegen einen Gefährten oder Unschuldigen. Dieser kann sofort eine VW einsetzen, um dem Treffer zu entgehen. Bei Misslingen erleidet er den vollen Waffenschaden. Alle eingesetzten Manöver werden dabei berücksichtigt. Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf AT."
          ],
          "Sturz": [
            "Abgeräumt: Der Held erleidet den Zustand Liegend und zieht bis 1W3 seiner Gefährten, die zufällig bestimmt werden, ebenfalls zu Boden, sofern ihnen nicht eine Probe auf Körperbeherrschung (Balance) –2 gelingt. Sie erleiden ansonsten den Status Liegend. Sollten keine Gefährten in der unmittelbaren Nähe sein, erleidet der Held 1 Stufe Schmerz für 5 Minuten. ",
            "Luftraubender Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 3 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend, erleidet 1W6+2 SP und für 3 KR 1 Stufe Betäubung. ",
            "Sehr schmerzhafter Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 3 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend und verletzte sich beim Sturz mit 1W6+2 SP. ",
            "Schmerzhafter Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 2 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend und verletzte sich beim Sturz mit 1W6 SP. ",
            "Gestürzt: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 2 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend. ",
            "Leichter Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 1 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend. ",
            "Harmloser Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend. ",
            "Fehltritt: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine erleichterte Probe auf Körperbeherrschung (Balance) +1 gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend."
          ],
          "Stolpern": [
            "In die Waffe des Gegners gestolpert: Der Held stolpert in die Waffe des Gegners und erleidet den vollen Waffenschaden, zudem ist seine nächste Handlung um 2 erschwert. ",
            "Schwer gestolpert: Der Held stolpert, seine nächste Handlung ist um 3 erschwert. ",
            "MissgeschicDer Held verliert einen Gegenstand (außer seine Waffe), seine Hose rutscht herunter, oder er hängt irgendwo fest. Bis zum Ende der nächsten KR hat er eine Erschwernis von 2 auf alle Handlungen und er erleidet den Status Eingeengt und Fixiert. ",
            "Gestolpert: Der Held stolpert, seine nächste Handlung ist um 2 erschwert. ",
            "Schwer aus dem Gleichgewicht geraten: Der Held stolpert, sodass bis zum Ende der nächsten KR alle Gegner gegen ihn einen Bonus von 2 auf AT erhalten. Der Abenteurer bekommt aber keine Erschwernis für seine nächste Handlung. ",
            "Leicht gestolpert: Der Held stolpert, seine nächste Handlung ist um 1 erschwert. ",
            "Aus dem Gleichgewicht geraten: Der Held stolpert, sodass bis zum Ende der nächsten KR alle Gegner gegen ihn einen Bonus von 1 auf AT erhalten. Der Abenteurer bekommt aber keine Erschwernis für seine nächste Handlung."
          ],
          "Fuß verdreht": [
            "Fuß verdreht und überdehnt: Der Held erhält für 3 KR 2 Stufen Schmerz. ",
            "Schlimm schmerzender Fuß: Der Held erhält für 5 KR 1 Stufe Schmerz. ",
            "Schmerzender Fuß: Der Held erhält für 3 KR 1 Stufe Schmerz. ",
            "Schwer verknackst: Der Held erleidet +2 TP, dafür aber keine Stufe Schmerz. ",
            "Leicht schmerzender Fuß: Der Held erhält für 1 KR 1 Stufe Schmerz. ",
            "Leicht verknackst: Der Held erleidet +1 TP, dafür aber keine Stufe Schmerz."
          ],
          "Beule": [
            "Große Beule: Der Held bekommt 2 Stufen Betäubung für 1 Stunde (statt 1 Stufe). ",
            "Blutende Beule: Der Held bekommt 1 Stufe Betäubung und den Status Blutend. ",
            "Kopfschmerzen: Der Held bekommt 1 Stufe Betäubung für 1 Stunde. ",
            "Leichte Kopfschmerzen: Der Held bekommt 1 Stufe Betäubung für 2 KR."
          ],
          "Selbst verletzt": [
            "Leichte Verletzung: Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und dann halbiert. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. ",
            "Verletzung: Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. ",
            "Schlimme, blutender Verletzung: Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. Zudem erleidet der Held den Status Blutend."
          ],
          "Selbst schwer verletzt": [
            "Sehr schwerer Eigentreffer: Ein schwerer Eigentreffer des Helden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und dann verdoppelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. Zudem erleidet der Held den Status Blutend. ",
            "Blutender Eigentreffer: Ein schwerer Eigentreffer des Helden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. Zudem erleidet der Held den Status Blutend und bis zum Ende der nächsten KR sind alle seine Handlungen um 2 erschwert."
          ]
        }
      },
      combat: {
        title: "Nahkampf Verteidigung Patzer",
        description: "Anstatt 1W6+2 SP bei einem Patzer, kann auch dieses Ereignis benutzt werden.",
        image: "img/nahkampf-verteidigung-fehlschlag.jpg",
        imagetitle: "Nahkampf Verteidigung Patzer",
        table: {
          "Waffe/Schild zerstört": [
            "Waffe zerspringt in Einzelteile: Die Waffe kann nicht mehr repariert werden. Ihre Einzelteile treffen teilweise den Helden und verursachen 1W6 SP. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Waffe zerbrochen: Die Waffe ist zerbrochen. Die Probe, um sie zu reparieren ist um 3 erschwert, außerdem kostet die Reparatur 25 % des ursprünglichen Preises der Waffe. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe/Schild schwer beschädigt": [
            "Extrem schwere Beschädigung: Die Waffe ist nicht mehr verwendbar, bis sie repariert wird. Die Probe, um sie zu reparieren ist um 1 erschwert. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Waffe stark beschädigt: Die Waffe ist nicht mehr verwendbar, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Waffe kaum noch zu gebrauchen: Die Waffe ist zwar schwer beschädigt, aber noch einsetzbar. Alle Proben auf Attacke und Parade sind um 4 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe/Schild beschädigt": [
            "Kratzer an der Waffe: Die Waffe hat einen Kratzer abbekommen, aber dies hat keine regeltechnischen Auswirkungen. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Leicht beschädigte Waffe: Die Waffe ist beschädigt worden. Alle Proben auf Attacke und Parade sind um 1 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Beschädigte Waffe: Die Waffe ist beschädigt worden. Alle Proben auf Attacke und Parade sind um 2 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt. ",
            "Schwer beschädigte Waffe: Die Waffe ist beschädigt worden. Alle Proben auf Attacke und Parade sind um 3 erschwert, bis sie repariert wird. Bei unzerstörbaren Waffen wird das Ergebnis wie Waffe verloren behandelt."
          ],
          "Waffe/Schild verloren": [
            "Waffe liegt weit weg und ungünstig: Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Sie liegt 1W6+2 Schritt weit weg, sodass noch eine Bewegung ausgeführt werden muss, um sie zu erreichen. Außerdem hat sie sich an einem Objekt verhakt oder ist eingeklemmt und kann nur mit 1 Aktion und einer Probe auf Kraftakt (Ziehen & Zerren) befreit werden. ",
            "Waffe weit weg: Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Allerdings liegt sie 1W6+2 Schritt weit weg, sodass zusätzlich noch eine Bewegung ausgeführt werden muss, um sie zu erreichen. ",
            "Waffe liegt ungünstig: Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). Allerdings ist die Probe um 2 erschwert. ",
            "Waffe auf den Boden gefallen: Die Waffe ist auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239). ",
            "Waffe streift einen Gefährten oder Unschuldigen: Die Waffe ist auf den Boden gefallen, hat aber vorher einen vom Meister bestimmten Gefährten des Helden oder einen Unschuldigen fast getroffen, sodass dieser bis zum Ende der nächsten KR –3 auf VW aufweist. Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf AT. ",
            "Waffe liegt günstig: Die Waffe ist zwar auf den Boden gefallen und muss nach den üblichen Regeln wieder aufgehoben werden (siehe Regelwerk Seite 239), allerdings ist die Probe um 2 erleichtert."
          ],
          "Waffe/Schild stecken geblieben": [
            "Gefährten oder Unschuldigen verletzt: Die Waffe fliegt dem Helden aus der Hand und trifft einen Gefährten oder einen Unschuldigen. Dieser kann versuchen, sich mit einer Schilde-PA zu verteidigen oder ausweichen. Bei Misslingen erleidet er den vollen Waffenschaden. Eingesetzte Manöver werden dabei berücksichtigt. Der Held kann seine Waffe nach den üblichen Regeln wiedererlangen (siehe Regelwerk Seite 239). Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf AT. ",
            "Waffe steckt fest: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, ist 1 Aktion und eine Probe auf Kraftakt (Ziehen & Zerren) notwendig. ",
            "Waffe steckt ziemlich fest: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, ist 1 Aktion und eine um 1 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig. ",
            "Waffe steckt sehr tief fest: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, ist 1 Aktion und eine um 2 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig. ",
            "Waffe steckt extrem tief fest: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, sind 5 Aktionen und eine um 2 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig. ",
            "Waffe verbogen: Die Waffe des Helden ist in einem Baum, einer Holzwand, dem Boden oder Ähnlichem stecken geblieben. Um sie zu befreien, sind 1 Aktion und eine um 2 erschwerte Probe auf Kraftakt (Ziehen & Zerren) notwendig. Nach dem Befreien hat sie aber einen kleinen Schaden, der für eine Erschwernis von 1 auf AT und PA sorgt. Nach dem Kampf kann dieser Schaden behoben werden ohne dass eine Probe notwendig ist. ",
            "Waffe trifft Gefährten oder Unschuldigen: Die Waffe des Helden schwingt gegen einen Gefährten oder Unschuldigen. Dieser kann sofort eine VW einsetzen, um dem Treffer zu entgehen. Bei Misslingen erleidet er den vollen Waffenschaden. Alle eingesetzten Manöver werden dabei berücksichtigt. Ist niemand in der Nähe, erleidet der Held bis zum Ende der nächsten KR eine Erschwernis von 3 auf AT."
          ],
          "Sturz": [
            "Abgeräumt: Der Held erleidet den Zustand Liegend und zieht bis 1W3 seiner Gefährten, die zufällig bestimmt werden, ebenfalls zu Boden, sofern ihnen nicht eine Probe auf Körperbeherrschung (Balance) –2 gelingt. Sie erleiden ansonsten den Status Liegend. Sollten keine Gefährten in der unmittelbaren Nähe sein, erleidet der Held 1 Stufe Schmerz für 5 Minuten. ",
            "Luftraubender Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 3 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend, erleidet 1W6+2 SP und für 3 KR 1 Stufe Betäubung. ",
            "Sehr schmerzhafter Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 3 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend und verletzte sich beim Sturz mit 1W6+2 SP. ",
            "Schmerzhafter Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 2 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend und verletzte sich beim Sturz mit 1W6 SP. ",
            "Gestürzt: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 2 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend. ",
            "Leichter Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine um 1 erschwerte Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend. ",
            "Harmloser Sturz: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine Probe auf Körperbeherrschung (Balance) gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend. ",
            "Fehltritt: Der Held stolpert und stürzt, wenn seinem Spieler nicht eine erleichterte Probe auf Körperbeherrschung (Balance) +1 gelingt. Sollte er das nicht schaffen, erhält der Held den Status Liegend."
          ],
          "Stolpern": [
            "In die Waffe des Gegners gestolpert: Der Held stolpert in die Waffe des Gegners und erleidet den vollen Waffenschaden, zudem ist seine nächste Handlung um 2 erschwert. ",
            "Schwer gestolpert: Der Held stolpert, seine nächste Handlung ist um 3 erschwert. ",
            "MissgeschicDer Held verliert einen Gegenstand (außer seine Waffe), seine Hose rutscht herunter, oder er hängt irgendwo fest. Bis zum Ende der nächsten KR hat er eine Erschwernis von 2 auf alle Handlungen und er erleidet den Status Eingeengt und Fixiert. ",
            "Gestolpert: Der Held stolpert, seine nächste Handlung ist um 2 erschwert. ",
            "Schwer aus dem Gleichgewicht geraten: Der Held stolpert, sodass bis zum Ende der nächsten KR alle Gegner gegen ihn einen Bonus von 2 auf AT erhalten. Der Abenteurer bekommt aber keine Erschwernis für seine nächste Handlung. ",
            "Leicht gestolpert: Der Held stolpert, seine nächste Handlung ist um 1 erschwert. ",
            "Aus dem Gleichgewicht geraten: Der Held stolpert, sodass bis zum Ende der nächsten KR alle Gegner gegen ihn einen Bonus von 1 auf AT erhalten. Der Abenteurer bekommt aber keine Erschwernis für seine nächste Handlung."
          ],
          "Fuß verdreht": [
            "Fuß verdreht und überdehnt: Der Held erhält für 3 KR 2 Stufen Schmerz. ",
            "Schlimm schmerzender Fuß: Der Held erhält für 5 KR 1 Stufe Schmerz. ",
            "Schmerzender Fuß: Der Held erhält für 3 KR 1 Stufe Schmerz. ",
            "Schwer verknackst: Der Held erleidet +2 TP, dafür aber keine Stufe Schmerz. ",
            "Leicht schmerzender Fuß: Der Held erhält für 1 KR 1 Stufe Schmerz. ",
            "Leicht verknackst: Der Held erleidet +1 TP, dafür aber keine Stufe Schmerz."
          ],
          "Beule": [
            "Große Beule: Der Held bekommt 2 Stufen Betäubung für 1 Stunde (statt 1 Stufe). ",
            "Blutende Beule: Der Held bekommt 1 Stufe Betäubung und den Status Blutend. ",
            "Kopfschmerzen: Der Held bekommt 1 Stufe Betäubung für 1 Stunde. ",
            "Leichte Kopfschmerzen: Der Held bekommt 1 Stufe Betäubung für 2 KR."
          ],
          "Selbst verletzt": [
            "Leichte Verletzung: Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und dann halbiert. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. ",
            "Verletzung: Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. ",
            "Schlimme, blutender Verletzung: Der Held hat sich selbst verletzt und erleidet Schaden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. Zudem erleidet der Held den Status Blutend."
          ],
          "Selbst schwer verletzt": [
            "Sehr schwerer Eigentreffer: Ein schwerer Eigentreffer des Helden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt und dann verdoppelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. Zudem erleidet der Held den Status Blutend. ",
            "Blutender Eigentreffer: Ein schwerer Eigentreffer des Helden. Der Schaden seiner Waffe wird unter Einbeziehung des Schadensbonus ausgewürfelt. Bei unbewaffneten Kämpfern wird 1W6 TP angenommen. Zudem erleidet der Held den Status Blutend und bis zum Ende der nächsten KR sind alle seine Handlungen um 2 erschwert."
          ]
        }
      }
    }
  }
};
