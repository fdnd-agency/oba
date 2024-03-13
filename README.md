# Mijn OBA Profielpagina - SvelteKit Project

![Ontwerp zonder titel (2)](https://github.com/Trisjan/lets-jam-webapplicatie/assets/54691201/d4655bd2-12c9-4de6-85e8-ee4b3df62a78)

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruiksinstructies en Configuratie](#gebruiksinstructiesenconfiguratie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)
  * [Opmerkingen over API en Abonnement](#opmerkingenoverAPIenabonnement)


## Inleiding
Dit SvelteKit project is gericht op het ontwikkelen van de profielpagina voor het Mijn OBA platform, een platform waarmee gebruikers inzicht kunnen krijgen in hun uitleengeschiedenis, abonnementsvorm, openstaande boetes, en gepersonaliseerde suggesties voor boeken en activiteiten. Het project maakt gebruik van de Hygraph bibliotheek en integreert de [OBA Boeken API](https://zoeken.oba.nl/api/v1/) om relevante gegevens op te halen.

## Kenmerken
1. **Profielpagina**: Gebruikers kunnen hun profielpagina bezoeken om een overzicht te krijgen van hun uitleengeschiedenis, abonnementsinformatie en openstaande boetes.

2. **Gepersonaliseerde Suggesties**: Het systeem biedt gepersonaliseerde suggesties voor boeken en activiteiten op basis van de gebruikersvoorkeuren en leengeschiedenis.

3. **Hygraph Integratie**: Het project maakt gebruik van Hygraph, een krachtige tool voor het beheren van grafieken en het organiseren van gegevens.

4. **OBA Boeken API**: De [OBA Boeken API](https://zoeken.oba.nl/api/v1/) wordt geïntegreerd om boekgegevens op te halen en weer te geven op de profielpagina.

## Installatie
Volg deze stappen om het project lokaal te installeren:

1. Clone het project van de GitHub repository:
   ```bash
   git clone https://github.com/Trisjan/lets-jam-webapplicatie
   ```

2. Installeer de benodigde afhankelijkheden:
   ```bash
   cd lets-jam-webapplicatie
   npm install
   ```

3. Start de ontwikkelingsserver:
   ```bash
   npm run dev
   ```

4. Open je browser en ga naar `http://localhost:5000` om de applicatie te bekijken.

Voor gedetailleerde documentatie over SvelteKit, raadpleeg de [Svelte documentatie](https://svelte.dev/docs/introduction).

## Gebruiksinstructies en Configuratie

Om het project te gebruiken, moet je een `.env`-bestand toevoegen aan de hoofdmap van het project. Dit bestand bevat gevoelige informatie en wordt daarom niet gedeeld via versiebeheer. Hier zijn de vereiste variabelen en hun waarden:

1. **`.env`-bestand toevoegen:**

   Maak een bestand met de naam `.env` in de hoofdmap van het project en voeg de volgende variabelen toe:

   ```env
   HYGRAPH_URL="URL_VAN_HYGRAPH"
   HYGRAPH_KEY="HYGRAPH_API_KEY"
   PUBLIC_API_KEY="OBA_PUBLIC_API_KEY"
   ```

2. **Variabelen uitleg:**

   - `HYGRAPH_URL`: De URL van Hygraph waarop het project moet worden aangesloten.
   
   - `HYGRAPH_KEY`: API-sleutel voor toegang tot Hygraph.

   - `PUBLIC_API_KEY`: De openbare API-sleutel vereist voor toegang tot de [OBA Boeken API](https://zoeken.oba.nl/api/v1/).

3. **Voorbeeld van een `.env`-bestand:**

   ```env
   HYGRAPH_URL="https://voorbeeld.hygraph.com"
   HYGRAPH_KEY="jouw_hygraph_api_sleutel"
   PUBLIC_API_KEY="jouw_oba_public_api_sleutel"
   ```

4. **Start de ontwikkelingsserver:**

   Nadat je het `.env`-bestand hebt toegevoegd, start je de ontwikkelingsserver opnieuw:

   ```bash
   npm run dev
   ```

Met deze configuratie heb je toegang tot de vereiste services en API's om het Mijn OBA profielpagina project te gebruiken en te testen. Zorg ervoor dat je de juiste waarden hebt voor de Hygraph-URL, Hygraph-API-sleutel en de openbare OBA-API-sleutel om een succesvolle integratie te garanderen.

## Bronnen
- [Svelte Documentation](https://svelte.dev/docs/introduction)
- [Project Profielpagina Documentatie](https://github.com/fdnd-agency/oba/blob/main/PROJECT_PROFIELPAGINA.md)
- Figma-ontwerpen (verwijzing naar Figma-bestanden voor het ontwerp van de profielpagina)
- [OBA Boeken API Documentatie](https://zoeken.oba.nl/api/v1/)

## Opmerkingen over API en Abonnement
Voor specifieke instructies en details over het gebruik van de OBA Boeken API en het verkrijgen van abonnementsinformatie, raadpleeg de documenten verstrekt door de opdrachtgever. Zorg ervoor dat je over het juiste abonnement beschikt om toegang te krijgen tot alle benodigde functies en gegevens als lid.









