window.onload = function () {
    function getID(a) {
        return document.getElementById(a);
    }
    getID("mainBasket").onmouseover = function () {
        getID("basket1").style.display = "none";
        getID("basket2").style.display = "block";
        
    }
    getID("mainBasket").onmouseout = function () {
        getID("basket2").style.display = "none";
        getID("basket1").style.display = "block";
    }
    var img = 1;
    getID("next").onclick = function () {
        if (img == 0) {
            getID("corusel").style.background = "url(image/image/slide-1-2050x740.jpg)";
            getID("corusel").style.transition = "1s";
            getID("text1").style.display = "block";
            getID("text2").style.display = "none";
            getID("text3").style.display = "none";
            img = 1;
        }
        else if (img == 1) {
            getID("corusel").style.background = "url(image/image/slide-2-2050x740.jpg)";
            getID("corusel").style.transition = "1s";
            getID("corusel").style.backgroundPosition = "center";
            getID("text1").style.display = "none";
            getID("text2").style.display = "block";
            getID("text3").style.display = "none";
            img = 2;
        }
        else if (img == 2) {
            getID("corusel").style.background = "url(image/image/slide-3-2050x740.jpg)";
            getID("corusel").style.backgroundPosition = "center";
            getID("corusel").style.transition = "1s";
            getID("text1").style.display = "none";
            getID("text2").style.display = "none";
            getID("text3").style.display = "block";
            img = 0;
        }
    }
    var imgBack = 0;
    getID("previous").onclick = function () {
        if (imgBack == 0) {
            getID("corusel").style.background = "url(image/image/slide-3-2050x740.jpg)";
            getID("corusel").style.backgroundPosition = "center";
            getID("corusel").style.transition = "1s";
            getID("text1").style.display = "none";
            getID("text2").style.display = "none";
            getID("text3").style.display = "block";
            imgBack = 1;
        }
        else if (imgBack == 1) {
            getID("corusel").style.background = "url(image/image/slide-2-2050x740.jpg)";
            getID("corusel").style.backgroundPosition = "center";
            getID("corusel").style.transition = "1s";
            getID("text1").style.display = "none";
            getID("text2").style.display = "block";
            getID("text3").style.display = "none";
            imgBack = 2;
        }
        else if (imgBack == 2) {
            getID("corusel").style.background = "url(image/image/slide-1-2050x740.jpg)";
            getID("corusel").style.transition = "1s";
            getID("text1").style.display = "block";
            getID("text2").style.display = "none";
            getID("text3").style.display = "none";
            imgBack = 0;
        }
    }
    getID("custom").onmouseover = function() {
        getID("seeAllBtn3").style.background = "#333";
        getID("btsa3").style.background = "rgb(253, 85, 3)";
        getID("iconPrevWhite3").style.display = "block";
        getID("iconPrev3").style.display = "none";
        getID("btsa3").style.transition = "0.5s";
        getID("seeAllBtn3").style.transition = "0.5s";
        
    }
    getID("custom").onmouseout = function() {
        getID("seeAllBtn3").style.background = "rgb(253, 85, 3)";
        getID("btsa3").style.background = "#333";
        getID("iconPrevWhite3").style.display = "none";
        getID("iconPrev3").style.display = "block";
         
    }
    getID("summer").onmouseover = function() {
        getID("seeAllBtn2").style.background = "#333";
        getID("btsa2").style.background = "rgb(253, 85, 3)";
        getID("iconPrevWhite2").style.display = "block";
        getID("iconPrev2").style.display = "none";
        getID("btsa2").style.transition = "0.5s";
        getID("seeAllBtn2").style.transition = "0.5s";
        
    }
    getID("summer").onmouseout = function() {
        getID("seeAllBtn2").style.background = "rgb(253, 85, 3)";
        getID("btsa2").style.background = "#333";
        getID("iconPrevWhite2").style.display = "none";
        getID("iconPrev2").style.display = "block";   
    }
    getID("winter").onmouseover = function() {
        getID("seeAllBtn1").style.background = "#333";
        getID("btsa1").style.background = "rgb(253, 85, 3)";
        getID("iconPrevWhite1").style.display = "block";
        getID("iconPrev1").style.display = "none";
        getID("btsa1").style.transition = "0.5s";
        getID("seeAllBtn1").style.transition = "0.5s";
    }
    getID("winter").onmouseout = function() {
        getID("seeAllBtn1").style.background = "rgb(253, 85, 3)";
        getID("btsa1").style.background = "#333";
        getID("iconPrevWhite1").style.display = "none";
        getID("iconPrev1").style.display = "block";
        
         
    }
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
//      span.style.cssText = 'position:absolute;left:0;top:0';
//      span.innerHTML = i + 1;
//      lis[i].appendChild(span);
    }

    /* конфигурация */
    var width = 130; // ширина изображения
    var count = 3; // количество изображений

    var carousel2 = document.getElementById('carousel2');
    var list = carousel2.querySelector('ul');
    var listElems = carousel2.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево

    carousel2.querySelector('.prev2').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel2.querySelector('.next2').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
    getID("detBtn1").onclick = function() {
        getID("quikView1").style.display = "flex";
    }
    getID("close1").onclick = function() {
        getID("quikView1").style.display = "none";
    } 
    getID("detBtn2").onclick = function() {
        getID("quikView2").style.display = "flex";
    }
    getID("close2").onclick = function() {
        getID("quikView2").style.display = "none";
    } 
    getID("detBtn3").onclick = function() {
        getID("quikView3").style.display = "flex";
    }
    getID("close3").onclick = function() {
        getID("quikView3").style.display = "none";
    }
    getID("detBtn4").onclick = function() {
        getID("quikView4").style.display = "flex";
    }
    getID("close4").onclick = function() {
        getID("quikView4").style.display = "none";
    }
    getID("detBtn5").onclick = function() {
        getID("quikView5").style.display = "flex";
    }
    getID("close5").onclick = function() {
        getID("quikView5").style.display = "none";
    }
    getID("detBtn6").onclick = function() {
        getID("quikView6").style.display = "flex";
    }
    getID("close6").onclick = function() {
        getID("quikView6").style.display = "none";
    }
    getID("detBtn7").onclick = function() {
        getID("quikView7").style.display = "flex";
    }
    getID("close7").onclick = function() {
        getID("quikView7").style.display = "none";
    }
}