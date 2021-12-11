

document.addEventListener('DOMContentLoaded', function() {
    // Activating Modals , Tabs, Collapsibles and Carousel
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);

    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);

    var carousels = document.querySelectorAll('.carousel');
    M.Carousel.init(carousels, {
        shift: 10,
        padding: 100,
        indicators: true
    });



    document.querySelectorAll('.favorites').forEach((fave) => {
        fave.addEventListener('click', (e) => {
            if(fave.innerText === "favorite_border"){
                fave.innerHTML = '<i class="material-icons favorites">favorite</i>';
                
            } else {
                fave.innerHTML = '<i class="material-icons favorites">favorite_border</i>';
                
            }
        });
    });


    // ATTACK ON TITAN SECTION
    
    // Eren
    var eren = document.querySelector("#eren");
    var eren_start = eren.src;
    var eren_hover = eren.getAttribute('onmouseover');

    eren.onmouseover = () => { eren.src = eren_hover; }
    eren.onmouseout = () => { eren.src = eren_start; }

    // Mikasa
    var mikasa = document.querySelector("#mikasa");
    var mikasa_start = mikasa.src;
    var mikasa_hover = mikasa.getAttribute('onmouseover');

    mikasa.onmouseover = () => { mikasa.src = mikasa_hover; }
    mikasa.onmouseout = () => { mikasa.src = mikasa_start; }

    // Armin
    var armin = document.querySelector("#armin");
    var armin_start = armin.src;
    var armin_hover = armin.getAttribute('onmouseover');

    armin.onmouseover = () => { armin.src = armin_hover; }
    armin.onmouseout = () => { armin.src = armin_start; }

    // Levi
    var levi = document.querySelector("#levi");
    var levi_start = levi.src;
    var levi_hover = levi.getAttribute('onmouseover');

    levi.onmouseover = () => { levi.src = levi_hover; }
    levi.onmouseout = () => { levi.src = levi_start; }

    // Annie
    var annie = document.querySelector("#annie");
    var annie_start = annie.src;
    var annie_hover = annie.getAttribute('onmouseover');

    annie.onmouseover = () => { annie.src = annie_hover; }
    annie.onmouseout = () => { annie.src = annie_start; }

    // Historia
    var historia = document.querySelector("#historia");
    var historia_start = historia.src;
    var historia_hover = historia.getAttribute('onmouseover');

    historia.onmouseover = () => { historia.src = historia_hover; }
    historia.onmouseout = () => { historia.src = historia_start; }


    // HUNTER X HUNTER SECTION

    // Gon 
    var gon = document.querySelector("#gon");
    var gon_start = gon.src;
    var gon_hover = gon.getAttribute('onmouseover');

    gon.onmouseover = () => { gon.src = gon_hover; }
    gon.onmouseout = () => { gon.src = gon_start; }

    // Killua
    var godspeed = document.querySelector("#godspeed");
    var godspeed_start = godspeed.src;
    var godspeed_hover = godspeed.getAttribute('onmouseover');

    godspeed.onmouseover = () => { godspeed.src = godspeed_hover; }
    godspeed.onmouseout = () => { godspeed.src = godspeed_start; }

    // Kurapika
    var kurapika = document.querySelector("#kurapika");
    var kurapika_start = kurapika.src;
    var kurapika_hover = kurapika.getAttribute('onmouseover');

    kurapika.onmouseover = () => { kurapika.src = kurapika_hover; }
    kurapika.onmouseout = () => { kurapika.src = kurapika_start; }

    // Leorio
    var leorio = document.querySelector("#leorio");
    var leorio_start = leorio.src;
    var leorio_hover = leorio.getAttribute('onmouseover');

    leorio.onmouseover = () => { leorio.src = leorio_hover; }
    leorio.onmouseout = () => { leorio.src = leorio_start; }

    // Hisoka
    var hisoka = document.querySelector("#hisoka");
    var hisoka_start = hisoka.src;
    var hisoka_hover = hisoka.getAttribute('onmouseover');

    hisoka.onmouseover = () => { hisoka.src = hisoka_hover; }
    hisoka.onmouseout = () => { hisoka.src = hisoka_start; }

    // Illumi
    var illumi = document.querySelector("#illumi");
    var illumi_start = illumi.src;
    var illumi_hover = illumi.getAttribute('onmouseover');

    illumi.onmouseover = () => { illumi.src = illumi_hover; }
    illumi.onmouseout = () => { illumi.src = illumi_start; }

    // JUJUTSU KAISEN SECTION

    // Itadori
    var itadori = document.querySelector("#itadori");
    var itadori_start = itadori.src;
    var itadori_hover = itadori.getAttribute('onmouseover');

    itadori.onmouseover = () => { itadori.src = itadori_hover; }
    itadori.onmouseout = () => { itadori.src = itadori_start; }
    
    // Megumi
    var megumi = document.querySelector("#megumi");
    var megumi_start = megumi.src;
    var megumi_hover = megumi.getAttribute('onmouseover');

    megumi.onmouseover = () => { megumi.src = megumi_hover; }
    megumi.onmouseout = () => { megumi.src = megumi_start; }

    // Nobara
    var nobara = document.querySelector("#nobara");
    var nobara_start = nobara.src;
    var nobara_hover = nobara.getAttribute('onmouseover');

    nobara.onmouseover = () => { nobara.src = nobara_hover; }
    nobara.onmouseout = () => { nobara.src = nobara_start; }

    // Toge
    var toge = document.querySelector("#toge");
    var toge_start = toge.src;
    var toge_hover = toge.getAttribute('onmouseover');

    toge.onmouseover = () => { toge.src = toge_hover; }
    toge.onmouseout = () => { toge.src = toge_start; }

    // Yuta
    var yuta = document.querySelector("#yuta");
    var yuta_start = yuta.src;
    var yuta_hover = yuta.getAttribute('onmouseover');

    yuta.onmouseover = () => { yuta.src = yuta_hover; }
    yuta.onmouseout = () => { yuta.src = yuta_start; }

    // Gojo
    var gojo = document.querySelector("#gojo");
    var gojo_start = gojo.src;
    var gojo_hover = gojo.getAttribute('onmouseover');

    gojo.onmouseover = () => { gojo.src = gojo_hover; }
    gojo.onmouseout = () => { gojo.src = gojo_start; }

    // NARUTO SECTION

    // Naruto
    var naruto = document.querySelector("#naruto-img");
    var naruto_start = naruto.src;
    var naruto_hover = naruto.getAttribute('onmouseover');

    naruto.onmouseover = () => { naruto.src = naruto_hover; }
    naruto.onmouseout = () => { naruto.src = naruto_start; }

    // Sasuke
    var sasuke = document.querySelector("#sasuke");
    var sasuke_start = sasuke.src;
    var sasuke_hover = sasuke.getAttribute('onmouseover');

    sasuke.onmouseover = () => { sasuke.src = sasuke_hover; }
    sasuke.onmouseout = () => { sasuke.src = sasuke_start; }

    // Kakashi
    var kakashi = document.querySelector("#kakashi");
    var kakashi_start = kakashi.src;
    var kakashi_hover = kakashi.getAttribute('onmouseover');

    kakashi.onmouseover = () => { kakashi.src = kakashi_hover; }
    kakashi.onmouseout = () => { kakashi.src = kakashi_start; }

    // Itachi
    var itachi = document.querySelector("#itachi");
    var itachi_start = itachi.src;
    var itachi_hover = itachi.getAttribute('onmouseover');

    itachi.onmouseover = () => { itachi.src = itachi_hover; }
    itachi.onmouseout = () => { itachi.src = itachi_start; }

    // Sai
    var sai = document.querySelector("#sai");
    var sai_start = sai.src;
    var sai_hover = sai.getAttribute('onmouseover');

    sai.onmouseover = () => { sai.src = sai_hover; }
    sai.onmouseout = () => { sai.src = sai_start; }

    // Minato
    var minato = document.querySelector("#minato");
    var minato_start = minato.src;
    var minato_hover = minato.getAttribute('onmouseover');

    minato.onmouseover = () => { minato.src = minato_hover; }
    minato.onmouseout = () => { minato.src = minato_start; }

    // TOKYO GHOUL SECTION

    // Kaneki
    var kaneki = document.querySelector("#kaneki");
    var kaneki_start = kaneki.src;
    var kaneki_hover = kaneki.getAttribute('onmouseover');

    kaneki.onmouseover = () => { kaneki.src = kaneki_hover; }
    kaneki.onmouseout = () => { kaneki.src = kaneki_start; }

    // Touka
    var touka = document.querySelector("#touka");
    var touka_start = touka.src;
    var touka_hover = touka.getAttribute('onmouseover');

    touka.onmouseover = () => { touka.src = touka_hover; }
    touka.onmouseout = () => { touka.src = touka_start; }

    // Amon
    var amon = document.querySelector("#amon");
    var amon_start = amon.src;
    var amon_hover = amon.getAttribute('onmouseover');

    amon.onmouseover = () => { amon.src = amon_hover; }
    amon.onmouseout = () => { amon.src = amon_start; }

    // Juuzou
    var juuzou = document.querySelector("#juuzou");
    var juuzou_start = juuzou.src;
    var juuzou_hover = juuzou.getAttribute('onmouseover');

    juuzou.onmouseover = () => { juuzou.src = juuzou_hover; }
    juuzou.onmouseout = () => { juuzou.src = juuzou_start; }

    // Akira
    var akira = document.querySelector("#akira");
    var akira_start = akira.src;
    var akira_hover = akira.getAttribute('onmouseover');

    akira.onmouseover = () => { akira.src = akira_hover; }
    akira.onmouseout = () => { akira.src = akira_start; }

    // Ayato
    var ayato = document.querySelector("#ayato");
    var ayato_start = ayato.src;
    var ayato_hover = ayato.getAttribute('onmouseover');

    ayato.onmouseover = () => { ayato.src = ayato_hover; }
    ayato.onmouseout = () => { ayato.src = ayato_start; }

});
