## Asennus

1. Asenna riippuvuudet komennolla:
```bash
npm install
```

2. Sivuston käynnistys:
```bash
npm start
```

Sivut ovat nyt kehitysympäristössä osoitteessa http://localhost:3000.


3. Sivujen tuotantoversion luominen:
```bash
npm run build
```

Tuotantoversio luodaan kansioon `build`.


4. Koodin tyylin tarkastus:
```bash
npm run eslint
```

## Rakenne

Sivujen hakemistorakenne on seuraava:

```bash
photography-portfolio\src
|---assets
|   ---data
|   ---images
|       |---birds
|       |---finland
|       |---macros
|       |---mammals
|       |---recent
|       |---winter
|       |---world
|---components
    ---about
    ---contact
    ---footer
    ---gallery
    ---header
    ---landing
    ---recent
```

Kansioon `assets` on koottu käytettävät kuvat sekä niihin liittyvät tiedot. Nämä on jaettu alikansioihin `data` ja `images`. Kuvat on lisäksi jaoteltu omiin alikansioihinsa. Gallerian tietoja hallitaan `gallery-data.js` kautta, johon kootaan jokaisen yksittäisen gallerian tiedot.

Kansio `components` sisältään jokaisen osa-alueen oman kansion, jossa tämän osuuden toiminnallisuus ja tyylien määrittely.

## Tyylit

Sivuston tyylit määritellän kahdella tasolla. Yleiset tyylin määritykset löytyvät juurihakemiston `index.css` tiedostosta. Tässä määritellään mm. käytetyt fontit, värimaailma sekä yleisen tason marginaalit ja kuvakkoot. Osa-alue kohtaiset css määritykset löytyvät `components\alikansio` kohdasta kyseisen tiedoston rinnalta esim. About.js -> About.css.  

## CI/CD

Tämän hetken versio on automatisoitu päivittymään Heroku-palveluun kättämällä GitHubin actions-toiminnallisuutta. Tähän liittyvä `yml` tiedosto löytyy kansiosta `.github\workflows`.