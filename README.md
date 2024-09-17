## Full stack -harjoitustyö (Helsingin yliopisto)
# Valokuvaajan portfolio 

## Yleistä

Oma sovellukseni Helsingin yliopiston Full stack-kurssin harjoitustyöksi. Kurssilla tutustutaan JavaScriptilla tapahtuvaan moderniin web-sovelluskehitykseen. Harjoitustyö on toteutettu React-kirjaston avulla ja kyseessä on single page-sovellus. Harjoitustyön tavoitteena oli oppia enemmän css tyylien määrittelystä sekä miten React soveltuu perinteisen web-sivuston tekemiseen. Lopullisena päämääränä oli toteuttaa sivut, joilla on rekisteröity "virallinen "osoite ja valittu paikka sen ylläpitoon.

### Valokuvaajan portfolio

Sivusto nimensä mukaisesti toimii portfoliona valokuvaajalle, tässä tapauksessa itselleni. Koska kyseessä on portfolio on se täysin yhdellä sivulla toimiva, eikä tästä syystä esimerkiksi React Routeria ole käytetty. Kuvagallerian kuvien lähempää tarkastelua lukuunottamatta pysytään yhdessä päänäkymässä. Sivun tarkoituksena on olla mahdollisimman käyttäjäystävällinen, esitellä katsojalle valokuvaajan kuvia, antaa tarvittavat tiedot kuvaajasta sekä mahdollisuuden ottaa yhteyttä kuvaajaan. 

Sivusto on pyritty rakentamaan mahdollisimman pitkälle ilman ylimääräisiä kirjastoja, kuten tyylikirjastot. Käytetyt kirjastot on lueteltu alempana. Näistä olisi ikoni kirjaston käyttö voitu täysin välttää, mutta sen tuoma nopeus projektin tekemiseen puolsi sen käyttöä. Vastaavasti sähköpostin välitykseen oli perstultua pelkästään tietoturvan näkökulmasta valita jokin olemassa olevista palveluista.

### Haasteet ja kehityskohteet

Alussa etenkin css tuotti päänvaivaa ja yksinkertaiselta vaikuttavat asiat veivät paljon aikaa. Projektin edetessä tuntuma tuli huomattavasti paremmaksi ja jatkossa voi kirjastojen käyttöä välttää. Joitain pienempiä bugeja jäi koodiin, esim. gallerian kuvien katselussa, pienet kuvakkeet värjäytyvät sinisen värisiksi jos kuvia selailee nopeasti. Kosmeettinen ongelma, en saanut selvinnyt mistä johtuu. SEO asiat tuntuivat mystisiltä, enkä saanut tähän mennessä vielä sivuja näkymään Googlen haussa.

Seuraavat asiat voivat olla seuraavia kehittämisen kohteita: Testien tekemistä, lomake jolla voi ilmoittautua kurssille (vaatisi myös jonkinlaista maksu integraatiota), blogille oma paikka. Myöhempää ajatusta varten voi myös miettiä, mikä on tehokkain tapa lisätä/poistaa uusia kuvia. Olisiko tässä tarvetta backendille?

Kaiken kaikkiaan erittäin opettavainen rypistys ja pääsi syvemmin perehtymään sellaisiin osa-alueisiin joita kursseilla ei ole käsitelty.

### Dokumentaatio

[Dokumentaatio](./dokumentaatio/dokumentaatio.md)

### LIVE

Sivustojen ylläpito on tällä hetkellä kahdella eri alustalla. Heroku toimi projektin alkuvaiheessa kehitysalustana ja myöhemmin virallinen versio laitettiin CloudFlare alustalle. Herokun sivut sulkeutuvat työn arvioinnin jälkeen.

CloudFlare:

https://photography-portfolio.pages.dev/


## Käytetyt kirjastot

[React icons](https://react-icons.github.io/react-icons/)

[React emailjs](https://www.emailjs.com/docs/examples/reactjs/)

[React reCAPTCHA](https://www.npmjs.com/package/react-recaptcha)

[react-dotenv](https://www.npmjs.com/package/react-dotenv) 

## Työaikakirjanpito

[Työaikakirjanpito](./dokumentaatio/tuntikirjanpito.md)

All pictures Copyright by Jari Sokka 
