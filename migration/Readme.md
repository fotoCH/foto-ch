# foto-ch data migration

## Vorgehensweise
Damit wir zu einer sauberen Datenstruktur kommen, haben wir das neue Schema von Grund auf neu entworfen. Dabei haben wir bewusst in Kauf genommen, dass die Migration aus den bestehenden Daten etwas aufwändig wird.

## Gedanken zur neuen Datenstruktur
<a href="https://github.com/fotoCH/foto-ch/blob/master/migration/Database_schema.png" target="_blank"><img src="https://github.com/fotoCH/foto-ch/blob/master/migration/Database_schema.png" width="176" height="120"></a>

Die Basis der Datenbank sind die vier Haupt-Tabellen für Objekte, Organisationen, Personen und Sammlungen. Objekte teilen sich weiter in Photos und Literatur auf; Sammlungen teilen sich in Bestände und Ausstellungen auf.

Um die Beziehungen bei den Haupt-Tabellen abzubilden gibt es Zwischentabellen, die jeweils einem Beziehungstyp (realtionship_type) zugeordnet werden. Um zu überprüfen, welcher Typ für welche Beziehung verwendet wird, gibt es die Flags "is_x_y_relation". Dies erlaubt es auch, einen Typen bei mehreren Zwischentabellen einzusetzen.

## Translations
Einige Attribute der Fotografen und Organisationen müssen mehrsprachig erfasst werden können. In der alten Datenbank wurde dafür jeweils eine Spalte pro Sprache angelegt. Im neuen Schema sollen die mehrsprachigen Attribute unter "attributes" definiert werden. Die konkreten Werte und Übersetzungen können dann unter "translations" pro Sprache eingefügt werden. 

## Berechtigungssystem
Einige Benutzer sollen Leseberechtigung auf nicht-öffentliche Fotografen, Organisationen oder Bestände erhalten. Darum gibt es pro Tabelle eine ACL, die den Zugang für Benutzer oder Gruppen regelt. Weiter gibt es Benutzer, die Änderungen vorschlagen dürfen und Benutzer mit Schreib-Rechten. Die Zugänge werden über die "access_levels" pro Entität oder teilweise insgesamt definiert.

## Orte und Koordinaten
Es gilt die beiden Systeme für Ortsinformationen zu unterscheiden: Koordinaten befolgen ein mathematisches System, während Adressen, Orte, usw. historisch entstanden sind. Es macht also Sinn, diese Informationen getrennt abzuspeichern.

### Adressen/Orte
In der alten Datenbank werden Orte auf verschiedene Arten gespeichert, häufig ganz einfach im Text-Format. Um diese zu harmonisieren, sollen neu alle Orte in der entsprechenden Tabelle verknüpft werden. Dabei wird immer nur die präziseste Information mit dem Objekt verknüpft. Alle weiteren Informationen ergeben sich aus der Hierarchie.
#### Anwendungsbeispiel
Von einer Ausstellung in Bern ist die Adresse bekannt. Beim Erfassen wird also die Adresse hinzufügt und mit dem Ort "Bern" verknüpft. Wenn ich nun wissen will, in welchem Subkontinent die Ausstellung stattgefunden hat, so kann ich die Hierarchie durchgehen. Die Adresse liegt in Bern, Bern liegt im Kanton BE, BE liegt in der Schweiz und die Schweiz liegt in Europa.

### Koordinaten
Koordinaten werden mit Ortschaften, Ländern, Kantonen, usw. verknüpft, um diese auf der Karte darstellen zu können. Weiter werden sie bei Fotos unabhängig von der Ortsangabe verwendet. So können, wenn vorhanden, die Adresse und die Koordinaten erfasst werden.

### Use-Cases zu den Locations
- Foto erfassen: Es ist nur das Land bekannt, oder der Subkontinent
- Detailansicht Foto mit allen Lokalisations-Infos (lat, long, Adresse, Stadt, Land, Subkontinent)
- Liste von Fotos mit Ortsangabe und Kanton 
- Maps API: Eine Liste mit Name, Link, Datum, Koordinaten
- Bestandesliste mit Ort und Kanton

#### 
