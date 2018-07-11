import { contactForm } from './form.js';
import { header } from './header.js';
import { initMap } from './map.js';

/*
wyjątkowa sytuacja:
jako ze dzialamy na modulach to wszystko wlacznie z app.js
jest zamknietym modulem (zamknietym przed swiatem pudelkiem).
Nasza funkcja initMap musi byc
dostepna poza tymi pudelkami-modulami, dlatego, ze jest odpalana
przez link do google map. Zobacz na link do google map ktory
wrzucilismy do html - na samym koncu jest odwolanie do tej metody
dlatego wlasnie musimy ja przypiac do glownego scope (zrobic z niej metode globalna)
poprzez window.initMap = map

metoda ta nazywa sie jsonp. Wysymyslona przez Polakow, sluzy do tego
by obchodzic problem z Cors Origin. Więcej do zobaczenia w necie pod haslem jsonp
*/
window.initMap = initMap;

$(function() {
    contactForm();
    header();
})
