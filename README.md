# Relaunch foto-ch

## More info
[Client](./client/README.md)

[Server](./server/README.md)

[Shared](./shared/README.md)

[DB](./server/db/README.md)

## Ziel
Ablösung der bestehenden fotoCH-Plattformen (www und intern) durch aktuelle Technologien. Verbesserung der Performance, bessere Wartbarkeit der Applikationen.
 
 ## Applikation
  - Zwei Module:
    - www: Öffentliche Webseite
    - intern: Erfassungsmasken und interne Inhalte

## Technologien
 - Frontend: Angular
 - API: Koa (NodeJS), GraphQL
 - DB: Postgres
 - Container: Docker
 
 ## Datenbank / Migration
 1. Aufsetzen eines sinnvollen Schemas
 2. Migration aus der bestehenden DB ins neue Schema
