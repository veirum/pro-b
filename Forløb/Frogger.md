# Frogger

![frogger](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQt7IJXRoTFy-vmkOcWRJSx2u_WO1VtNJhFQ&usqp=CAU)

Frogger er et klassisk arkadespil fra 1981 udviklet af Konami. Spillet er så populært at der findes utallige udgaver. For at se spillet følg linket nedenunder.

<br>

https://www.youtube.com/watch?v=WNrz9_Fe-Us&t=422s

<br>

Spillets regler

Spilet går ud på at Frogger skal krydse vejen og floden og fylde 5 pladser på flodbreden. Hver gang de fem tomme hummer i flodbreden fyldes stuger sværhedsgraden og hastigheden øges samt nye forhindringer tilføjes. Spillet slutter når spilleren løber tør for liv. Spilleren starter med 3, 5 eller 7 liv alt efter sværhedsgrad.

## Overblik

Inden udvikling af spillet skal der først være en overbliksskabende process hvor det originale spil analyseres og alle delkomponenterne identificeres og beskrives. Dette er nødvendigt for overhovedet at kunne genskabe spillet. Se video ovenover.

### ✏️ Opgave

- Beskrive spillet med stikordord. Hvad er reglerne og hvilke mekanikker kan ses i spillet.

- Beskriv spillets flow via flowcharts for at få en fornemmelse af spillets flow og for at begynde at få en fornemmelse af de første delelementer i spillet.

  [Hvad er et flowchart og hvad betyder de forskellige former?](https://www.lucidchart.com/pages/what-is-a-flowchart-tutorial)

- Til sidst laves er et overblik over hvilke klasser man vil lave. Til dette skal der bruges UML klassediagrammer da de giver et godt overblik til senere reference og ideudvikling.

​		[Hvad er UML klassediagram og hvad betyder de forskellige symboler?](https://www.lucidchart.com/pages/uml-class-diagram)





Herefter laves uml diagrammer af de forskellige dele af spillet.



## Disposition over udvikling af spillet

Dispositionen viser rækkefølgen af de skridt det kræver at lave frogger. Disposition er ikke en tutorial, men en oversigt. Det vil sige at man selv skal fylde de huller der altid vil være i en oversigt.

- Lave en bane i ønsket opløsning på 15 lanes i højden og 14 lanes i bredden. (f.eks. 700 x 750)
- Lav en tom frogger-klasse
- Lav en show og update metode til frogger klassen og brug show til at tegne frogger nederst i banen. Tegn frogger så den passer til opløsningen. (50x50 hvis 700 x 750 bruges)
- Brug keyPressed eller keyReleased funktionen til at få Frogger til at bevæge sig rundt på banen. (+/- 50 til froggers x, y koordinater.)
- 

