

## Plan: 4 Verbesserungen umsetzen

### 1. Iframes durch statisches Screenshot ersetzen (Performance)
- **Home.tsx**: Iframe im Referenz-Preview durch `<img>` mit dem bereits vorhandenen Screenshot (`/images/tc-schwarzgelb-screenshot.png`) ersetzen
- **References.tsx**: Iframe ebenfalls durch das statische Screenshot-Bild ersetzen
- Hover-Overlay und Link-Verhalten bleiben erhalten

### 2. Browser-URL-Leiste korrigieren
- **Home.tsx**: Text `tcsgheidelberg.vercel.app` → `schwarzgelb-heidelberg.de`
- **References.tsx**: Mobile-Fallback auf Zeile 57 (`tcsgheidelberg.vercel.app`) → `schwarzgelb-heidelberg.de`

### 3. SEO Meta-Tags ergänzen
- **index.html**: Bereits vorhanden und korrekt konfiguriert (Title, Description, OG-Tags, canonical URL). Hier ist nichts weiter nötig — die Tags sind bereits professionell gesetzt.
- Ergänzung: `twitter:card` und `twitter:` Meta-Tags für bessere Social-Media-Vorschau hinzufügen

### 4. Auskommentierten Code aufräumen
- **Hero.tsx**: Zeilen 8–46 (alter auskommentierter Hero-Code) komplett entfernen
- **Footer.tsx**: Auskommentiertes Copyright-Element (Zeilen 80–83) entfernen
- **Home.tsx**: Auskommentierter "About Section"-Block entfernen

### Dateien die geändert werden
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`  
- `src/pages/Home.tsx`
- `src/pages/References.tsx`
- `index.html`

