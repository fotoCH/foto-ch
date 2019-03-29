# foto-ch data migration

## Vorgehensweise
Damit wir zu einer sauberen Datenstruktur kommen, haben wir das neue Schema von Grund auf neu entworfen. Dabei haben wir bewusst in Kauf genommen, dass die Migration aus den bestehenden Daten etwas aufwändig wird.

## Gedanken zur neuen Datenstruktur
![Database schema.png](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Datenbank Schema")

Die Basis der Datenbank sind die vier Haupt-Tabellen für Objekte, Organisationen, Personen und Sammlungen. Objekte teilen sich weiter in Photos und Literatur auf; Sammlungen teilen sich in Bestände und Ausstellungen auf.

Um die Beziehungen bei den Haupt-Tabellen abzubilden gibt es Zwischentabellen, die jeweils einem Beziehungstyp (realtionship_types) zugeordnet werden. Um zu überprüfen, welcher Typ für welche Beziehung verwendet wird, gibt es die Flags "is_x_y_relation". Dies erlaubt es auch, einen Typen bei mehreren Zwischentabellen einzusetzen.

## Locations
#### Mögliche Use-Cases zu den Locations
Für alle, die sich Fragen, warum die Locations so aufgebaut wurden ;)
- Von einem Foto ist nur das Land bekannt, oder der Subkontinent
- Detailansicht Foto mit allen Lokalisations-Infos (lat, long, Adresse, Stadt, Land, Subkontinent)
- Liste von Fotos mit Ortsangabe und Kanton 
- Maps API: Eine Liste mit Name, Link, Datum, Koordinaten
- Bestandesliste mit Ort und Kanton
