1. TypeScript och DOM
 
1.1. Grundläggande DOM-manipulation
Skapa en HTML-sida med olika element (h1, p, div etc.). Använd TypeScript för att ändra dessa element. Du kan till exempel ändra texten i en rubrik eller ändra bakgrundsfärgen på en div.
 
1.2. Typer och DOM
Uppgradera din HTML-sida så den innehåller ett formulär med textfält, kryssrutor och radioknappar. Använd TypeScript för att hämta formulär-data och skriv ut den i konsolen. Använd olika datatyper för att representera olika typer av data.
 
 
2. Händelsehantering
 
2.1. Grundläggande DOM-händelser
Lägg till knappar som utlöser olika händelser, som att ändra text eller färg på andra element på sidan.
 
2.2. Händelser och typer
Lägg till funktionalitet som kräver att du använder olika händelseobjekt, som MouseEvent, KeyboardEvent, etc. Varför inte reagera på när en användare skriver i ett textfält? Hämta ut data från händelseobjektet och använd det för att ändra andra element på sidan (eller bara logga datan till konsolen).
 
 
3. En enkel TODO-app
 
Visst älskar alla att göra TODO-appar? 😁
 
Kombinera allt du har lärt dig och använd TypeScript för att skapa en enkel TODO-app där användaren kan lägga till och ta bort uppgifter, och markera dem som slutförda.
 
Rekommenderar att ni använder en array av objekt som er Single-Source-of-Truth (se separat inlägg om du är osäker på vad det är) och låter DOM återspegla denna. Dvs när ni gör förändringar i array:en eller dess objekt så bör listan av Todos renderas om.
