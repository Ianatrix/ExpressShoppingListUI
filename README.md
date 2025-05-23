# Express Shopping List UI

Eine einfache Einkaufslisten-App mit Express-Backend und minimalem Frontend.

## Funktionen

- Nutzer hinzufügen (Name eingeben, Button klicken)
- Nutzer löschen (Button neben Nutzer klicken)
- Daten werden in `database.json` gespeichert
- REST-API mit folgenden Endpunkten:
  - GET `/api/users` – alle Nutzer abrufen
  - POST `/api/users` – Nutzer hinzufügen
  - DELETE `/api/users/:id` – Nutzer löschen

## Installation

1. Repository klonen:

```bash
git clone https://github.com/IanatrixExpressShoppingListUI.git
cd ExpressShoppingListUI
 ```

2. Abhöngigkeiten installieren

```bash
npm install
```

3. Server starten

```bash

 npm start
```

4. Browser öffnen

```bash
http://localhost:5001/ui
```
