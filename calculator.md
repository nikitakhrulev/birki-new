<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../scss/main.css">
    <title>BirkaMarket / Рассчитать заказ</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header__row">
                <a href="../index.html"><img src="../img/logo-header.png" alt="main-logo"></a>
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__list-item"><a href="#!">О нас</a></li>
                        <li class="nav__list-item"><a href="#!">Контакты</a></li>
                        <li class="nav__list-item">
                          <a href="#!">Продукция</a>
                          <div class="nav__list-sub-nav">
                            <ul class="sub-nav">
                                <li class="sub-nav__item"><a href="./pages/satin.html" class="sub-nav__link">Сатин</a></li>
                                <li class="sub-nav__item"><a href="#!" class="sub-nav__link">Силикон</a></li>
                                <li class="sub-nav__item"><a href="./pages/neylon.html" class="sub-nav__link">Нейлон</a></li>
                                <li class="sub-nav__item"><a href="#!" class="sub-nav__link">Жаккард</a></li>
                                <li class="sub-nav__item"><a href="#!" class="sub-nav__link">Хлопок</a></li>
                                <li class="sub-nav__item"><a href="#!" class="sub-nav__link">Картон</a></li>
                            </ul>
                        </div>
                        </li>
                        <li class="nav__list-item"><a href="#!">Доставка</a></li>
                        <li class="nav__list-item"><a href="#!">Рассчитать заказ</a></li>
                    </ul>
                </nav>
                <div class="header__contacts">
                    <img src="../img/icons/phone.svg" alt="phone">
                    <a href="tel: 8 (495) 001-08-09">8 (495) 001-08-09</a>
                </div>
            </div>
        </div>
    </header>
    <main class="main" style="padding: 100px 0; text-align: center">
        <div class="container">
            <h2 class="section-heading">Рассчитать заказ</h2>
            <div class="materials-select">
                <label for="cars">Выберите материал:</label>
                <select id="materials" name="materials">
                <option value="choose">выбрать</option>
                <option value="satin">Сатин</option>
                <option value="neylon">Нейлон</option>
                <option value="silicon">Силикон</option>
                <option value="cotton">Хлопок</option>
                <option value="jakkard">Жаккард</option>
                <option value="cardboard">Картон</option>
                </select>
            </div> -->
            <!-- calculators -->
            <!-- satin -->
            <!-- <div class="satin-calculator hidden calc">
                <p class="material-heading">Сатин</p>
                <div class="calculator-selects">
                    <div>
                        <div class="calculator-width">
                            <label for="satin-width">Ширина бирки:</label>
                            <select name="satin-width" id="satin-width">
                            <option value="choose">выбрать</option>
                            <option value="10">10 мм</option>
                            <option value="15">15 мм</option>
                            <option value="20">20 мм</option>
                            <option value="25">25 мм</option>
                            <option value="30">30 мм</option>
                            <option value="35">35 мм</option>
                            <option value="40">40 мм</option>
                            <option value="45">45 мм</option>
                            <option value="50">50 мм</option>
                            <option value="55">55 мм</option>
                            <option value="60">60 мм</option>
                            <option value="65">65 мм</option>
                            <option value="70">70 мм</option>
                            <option value="75">75 мм</option>
                            <option value="80">80 мм</option>
                            <option value="other">Другое</option>
                        </select>
                        </div>
                        <div class="calculator-length">
                            <label for="satin-length">Длина бирки:</label>
                        <select name="satin-length" id="satin-length">
                            <option value="choose">выбрать</option>
                            <option value="10">10 мм</option>
                            <option value="15">15 мм</option>
                            <option value="20">20 мм</option>
                            <option value="25">25 мм</option>
                            <option value="30">30 мм</option>
                            <option value="35">35 мм</option>
                            <option value="40">40 мм</option>
                            <option value="45">45 мм</option>
                            <option value="50">50 мм</option>
                            <option value="55">55 мм</option>
                            <option value="60">60 мм</option>
                            <option value="65">65 мм</option>
                            <option value="70">70 мм</option>
                            <option value="75">75 мм</option>
                            <option value="80">80 мм</option>
                            <option value="85">85 мм</option>
                            <option value="90">90 мм</option>
                            <option value="95">95 мм</option>
                            <option value="100">100 мм</option>
                            <option value="105">105 мм</option>
                            <option value="110">110 мм</option>
                            <option value="115">115 мм</option>
                            <option value="120">120 мм</option>
                            <option value="125">125 мм</option>
                            <option value="130">130 мм</option>
                            <option value="135">135 мм</option>
                            <option value="140">140 мм</option>
                            <option value="145">145 мм</option>
                            <option value="150">150 мм</option>
                            <option value="155">155 мм</option>
                            <option value="160">160 мм</option>
                            <option value="165">165 мм</option>
                            <option value="170">170 мм</option>
                            <option value="175">175 мм</option>
                            <option value="180">180 мм</option>
                            <option value="185">185 мм</option>
                            <option value="190">190 мм</option>
                            <option value="195">195 мм</option>
                            <option value="200">200 мм</option>
                            <option value="other">Другое</option>
                        </select>
                        </div>
                        <div class="calculator-tape-color">
                            <label for="satin-tape-color">Цвет ленты:</label>
                        <select name="satin-tape-color" id="satin-tape-color">
                            <option value="choose">выбрать</option>
                            <option value="white">Белый</option>
                            <option value="black">Черный</option>
                            <option value="other">Цветной</option>
                        </select>
                        </div>
                        <div class="calculator-print-color">
                            <label for="satin-print-color">Цвет печати:</label>
                        <select name="satin-print-color" id="satin-print-color">
                            <option value="choose">выбрать</option>
                            <option value="white">Белый</option>
                            <option value="black">Черный</option>
                            <option value="other">Цветной</option>
                        </select>
                        </div>
                        <div class="satin-quantity-slider">
                            <label for="satin-quantity">Choose quantity:</label>
                            <input type="range" name="satin-quantity" id="satin-quantity" min="300" max="20000">
                            <p>Selected quantity: <span id="satinQuantityValue">50</span></p> 
                        </div>
                    </div>
                    <div>
                        <img src="./../img/main-menu/" alt="">
                    </div>
                </div>
            </div> -->
            <!-- neylon -->
            <!-- <div class="neylon-calculator hidden calc"> -->
                <p>Нейлон</p>
                <label for="neylon-width">Ширина бирки:</label>
                <select name="neylon-width" id="neylon-width">
                    <option value="choose">выбрать</option>
                    <option value="10">10 мм</option>
                    <option value="15">15 мм</option>
                    <option value="20">20 мм</option>
                    <option value="25">25 мм</option>
                    <option value="30">30 мм</option>
                    <option value="35">35 мм</option>
                    <option value="40">40 мм</option>
                    <option value="45">45 мм</option>
                    <option value="50">50 мм</option>
                    <option value="55">55 мм</option>
                    <option value="60">60 мм</option>
                    <option value="65">65 мм</option>
                    <option value="70">70 мм</option>
                    <option value="75">75 мм</option>
                    <option value="80">80 мм</option>
                    <option value="other">Другое</option>
                </select>
                <label for="neylon-length">Длина бирки:</label>
                <select name="neylon-length" id="neylon-length">
                    <option value="choose">выбрать</option>
                    <option value="10">10 мм</option>
                    <option value="15">15 мм</option>
                    <option value="20">20 мм</option>
                    <option value="25">25 мм</option>
                    <option value="30">30 мм</option>
                    <option value="35">35 мм</option>
                    <option value="40">40 мм</option>
                    <option value="45">45 мм</option>
                    <option value="50">50 мм</option>
                    <option value="55">55 мм</option>
                    <option value="60">60 мм</option>
                    <option value="65">65 мм</option>
                    <option value="70">70 мм</option>
                    <option value="75">75 мм</option>
                    <option value="80">80 мм</option>
                    <option value="85">85 мм</option>
                    <option value="90">90 мм</option>
                    <option value="95">95 мм</option>
                    <option value="100">100 мм</option>
                    <option value="105">105 мм</option>
                    <option value="110">110 мм</option>
                    <option value="115">115 мм</option>
                    <option value="120">120 мм</option>
                    <option value="125">125 мм</option>
                    <option value="130">130 мм</option>
                    <option value="135">135 мм</option>
                    <option value="140">140 мм</option>
                    <option value="145">145 мм</option>
                    <option value="150">150 мм</option>
                    <option value="155">155 мм</option>
                    <option value="160">160 мм</option>
                    <option value="165">165 мм</option>
                    <option value="170">170 мм</option>
                    <option value="175">175 мм</option>
                    <option value="180">180 мм</option>
                    <option value="185">185 мм</option>
                    <option value="190">190 мм</option>
                    <option value="195">195 мм</option>
                    <option value="200">200 мм</option>
                    <option value="other">Другое</option>
                </select>
                <label for="neylon-tape-color">Цвет ленты:</label>
                <select name="neylon-tape-color" id="neylon-tape-color">
                    <option value="choose">выбрать</option>
                    <option value="white">Белый</option>
                </select>
                <label for="neylon-print-color">Цвет печати:</label>
                <select name="neylon-print-color" id="neylon-print-color">
                    <option value="choose">выбрать</option>
                    <option value="black">Черный</option>
                    <option value="other">Цветной</option>
                </select>
                <div class="neylon-quantity-slider">
                    <label for="neylon-quantity">Choose quantity:</label>
                    <input type="range" name="neylon-quantity" id="neylon-quantity" min="300" max="20000">
                    <p>Selected quantity: <span id="neylonQuantityValue">50</span></p> 
                </div>
            <!-- </div> -->
            <!-- silicon -->
            <!-- <div class="silicon-calculator hidden calc"> -->
                <p>Силикон</p>
                <label for="silicon-width">Ширина бирки:</label>
                <select name="silicon-width" id="silicon-width">
                    <option value="choose">выбрать</option>
                    <option value="10">10 мм</option>
                    <option value="15">15 мм</option>
                    <option value="20">20 мм</option>
                    <option value="25">25 мм</option>
                    <option value="30">30 мм</option>
                    <option value="35">35 мм</option>
                    <option value="40">40 мм</option>
                    <option value="45">45 мм</option>
                    <option value="50">50 мм</option>
                    <option value="55">55 мм</option>
                    <option value="60">60 мм</option>
                    <option value="65">65 мм</option>
                    <option value="70">70 мм</option>
                    <option value="75">75 мм</option>
                    <option value="80">80 мм</option>
                    <option value="other">Другое</option>
                </select>
                <label for="silicon-length">Длина бирки:</label>
                <select name="silicon-length" id="silicon-length">
                    <option value="choose">выбрать</option>
                    <option value="10">10 мм</option>
                    <option value="15">15 мм</option>
                    <option value="20">20 мм</option>
                    <option value="25">25 мм</option>
                    <option value="30">30 мм</option>
                    <option value="35">35 мм</option>
                    <option value="40">40 мм</option>
                    <option value="45">45 мм</option>
                    <option value="50">50 мм</option>
                    <option value="55">55 мм</option>
                    <option value="60">60 мм</option>
                    <option value="65">65 мм</option>
                    <option value="70">70 мм</option>
                    <option value="75">75 мм</option>
                    <option value="80">80 мм</option>
                    <option value="85">85 мм</option>
                    <option value="90">90 мм</option>
                    <option value="95">95 мм</option>
                    <option value="100">100 мм</option>
                    <option value="105">105 мм</option>
                    <option value="110">110 мм</option>
                    <option value="115">115 мм</option>
                    <option value="120">120 мм</option>
                    <option value="125">125 мм</option>
                    <option value="130">130 мм</option>
                    <option value="135">135 мм</option>
                    <option value="140">140 мм</option>
                    <option value="145">145 мм</option>
                    <option value="150">150 мм</option>
                    <option value="155">155 мм</option>
                    <option value="160">160 мм</option>
                    <option value="165">165 мм</option>
                    <option value="170">170 мм</option>
                    <option value="175">175 мм</option>
                    <option value="180">180 мм</option>
                    <option value="185">185 мм</option>
                    <option value="190">190 мм</option>
                    <option value="195">195 мм</option>
                    <option value="200">200 мм</option>
                    <option value="other">Другое</option>
                </select>
                <label for="silicon-tape-color">Цвет ленты:</label>
                <select name="silicon-tape-color" id="silicon-tape-color">
                    <option value="choose">выбрать</option>
                    <option value="white">Белый</option>
                    <option value="black">Черный</option>
                    <option value="other">Цветной</option>
                </select>
                <label for="silicon-print-color">Цвет печати:</label>
                <select name="silicon-print-color" id="silicon-print-color">
                    <option value="choose">выбрать</option>
                    <option value="white">Белый</option>
                    <option value="black">Черный</option>
                    <option value="other">Цветной</option>
                </select>
                <div class="silicon-quantity-slider">
                    <label for="silicon-quantity">Choose quantity:</label>
                    <input type="range" name="silicon-quantity" id="silicon-quantity" min="300" max="20000">
                    <p>Selected quantity: <span id="siliconQuantityValue">50</span></p> 
                </div>
            <!-- </div> -->
            <!-- jakkard -->
            <!-- <div class="jakkard-calculator hidden calc">
                <p>Жаккард</p>
                <label for="jakkard-width">Ширина бирки:</label>
                <select name="jakkard-width" id="jakkard-width">
                    <option value="choose">выбрать</option>
                    <option value="10">10 мм</option>
                    <option value="15">15 мм</option>
                    <option value="20">20 мм</option>
                    <option value="25">25 мм</option>
                    <option value="30">30 мм</option>
                    <option value="35">35 мм</option>
                    <option value="40">40 мм</option>
                    <option value="45">45 мм</option>
                    <option value="50">50 мм</option>
                    <option value="55">55 мм</option>
                    <option value="60">60 мм</option>
                    <option value="65">65 мм</option>
                    <option value="70">70 мм</option>
                    <option value="75">75 мм</option>
                    <option value="80">80 мм</option>
                    <option value="85">85 мм</option>
                    <option value="90">90 мм</option>
                    <option value="95">95 мм</option>
                    <option value="100">100 мм</option>
                    <option value="other">Другое</option>
                </select>
                <label for="jakkard-width">Длина бирки:</label>
                <select name="jakkard-width" id="jakkard-width">
                    <option value="choose">выбрать</option>
                    <option value="10">10 мм</option>
                    <option value="15">15 мм</option>
                    <option value="20">20 мм</option>
                    <option value="25">25 мм</option>
                    <option value="30">30 мм</option>
                    <option value="35">35 мм</option>
                    <option value="40">40 мм</option>
                    <option value="45">45 мм</option>
                    <option value="50">50 мм</option>
                    <option value="55">55 мм</option>
                    <option value="60">60 мм</option>
                    <option value="65">65 мм</option>
                    <option value="70">70 мм</option>
                    <option value="75">75 мм</option>
                    <option value="80">80 мм</option>
                    <option value="85">85 мм</option>
                    <option value="90">90 мм</option>
                    <option value="95">95 мм</option>
                    <option value="100">100 мм</option>
                    <option value="other">Другое</option>
                </select>
                <div class="jakkard-quantity-slider">
                    <label for="jakkard-quantity">Choose quantity:</label>
                    <input type="range" name="jakkard-quantity" id="jakkard-quantity" min="300" max="20000">
                    <p>Selected quantity: <span id="jakkardQuantityValue">50</span></p> 
                </div> -->
            <!-- </div> -->
            <!-- cotton -->
            <!-- <div class="cotton-calculator hidden calc"> -->
                <p>Хлопок</p>
                <label for="cotton-width">Ширина бирки:</label>
                <select name="cotton-width" id="cotton-width">
                    <option value="choose">выбрать</option>
                    <option value="10">10 мм</option>
                    <option value="15">15 мм</option>
                    <option value="20">20 мм</option>
                    <option value="25">25 мм</option>
                    <option value="30">30 мм</option>
                    <option value="35">35 мм</option>
                    <option value="40">40 мм</option>
                    <option value="45">45 мм</option>
                    <option value="50">50 мм</option>
                    <option value="55">55 мм</option>
                    <option value="60">60 мм</option>
                    <option value="65">65 мм</option>
                    <option value="70">70 мм</option>
                    <option value="75">75 мм</option>
                    <option value="80">80 мм</option>
                    <option value="85">85 мм</option>
                    <option value="90">90 мм</option>
                    <option value="95">95 мм</option>
                    <option value="100">100 мм</option>
                    <option value="other">Другое</option>
                </select>
                <label for="cotton-width">Длина бирки:</label>
                <select name="cotton-width" id="cotton-width">
                    <option value="choose">выбрать</option>
                    <option value="10">10 мм</option>
                    <option value="15">15 мм</option>
                    <option value="20">20 мм</option>
                    <option value="25">25 мм</option>
                    <option value="30">30 мм</option>
                    <option value="35">35 мм</option>
                    <option value="40">40 мм</option>
                    <option value="45">45 мм</option>
                    <option value="50">50 мм</option>
                    <option value="55">55 мм</option>
                    <option value="60">60 мм</option>
                    <option value="65">65 мм</option>
                    <option value="70">70 мм</option>
                    <option value="75">75 мм</option>
                    <option value="80">80 мм</option>
                    <option value="85">85 мм</option>
                    <option value="90">90 мм</option>
                    <option value="95">95 мм</option>
                    <option value="100">100 мм</option>
                    <option value="other">Другое</option>
                </select>
                <div class="cotton-quantity-slider">
                    <label for="cotton-quantity">Choose quantity:</label>
                    <input type="range" name="cotton-quantity" id="cotton-quantity" min="300" max="20000">
                    <p>Selected quantity: <span id="cottonQuantityValue">50</span></p> 
                </div>
            <!-- </div> -->
            <!-- cardboard -->
            <!-- <div class="cardboard-calculator hidden calc">
                <p>Картон</p>
                <label for="carton-format">Выберите формат</label>
                <select name="carton-format" id="carton-format">
                    <option value="choose">выбрать</option>
                    <option value="90*50">90*50</option>
                    <option value="80*50">80*50</option>
                    <option value="90*54">90*54</option>
                    <option value="98*58">98*58</option>
                    <option value="120*60">120*60</option>
                    <option value="120*50">120*50</option>
                </select>
                <label for="carton-print">Выберите тип печати:</label>
                <select name="carton-print" id="carton-print">
                    <option value="choose">выбрать</option>
                    <option value="4+0">4+0 (односторонняя)</option>
                    <option value="4+4">4+4 (двухсторонняя)</option>
                </select>
                <label for="carton-diametr">Диаметр отверстия (мм)</label>
                <select name="carton-diametr" id="carton-diametr">
                    <option value="choose">выбрать</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
        </div>
    </main>
    <footer class="footer">
        <div class="container">
          <div class="footer__grid">
            <div class="footer__grid-bio__wrapper">
              <div class="footer__grid-bio">
                <img src="../img/logo-footer1.png" alt="main-logo">
                <div class="footer__req">
                  <h4>Изготовление бирок<br> на заказ</h4>
                  <p>ИП Федотов А.В.</p>
                  <p>ИНН 771412910075</p>
                  <p>ОГРНИП 323774600620762</p>
                </div>
              </div> -->
              <!-- <p class="copyright">© Birka Market 2024</p>
              <a class="policy" href="#!">Политика конфиденциальности</a>
            </div>
            <ul class="footer__products-list">
              <h4>Продукция</h4>
              <li class="footer__products-list__item"><a href="#!">Сатин</a></li>
              <li class="footer__products-list__item"><a href="#!">Хлопок</a></li>
              <li class="footer__products-list__item"><a href="#!">Картон</a></li>
              <li class="footer__products-list__item"><a href="#!">Силикон</a></li>
              <li class="footer__products-list__item"><a href="#!">Нейлон</a></li>
              <li class="footer__products-list__item"><a href="#!">Жаккард</a></li>
            </ul>
            <ul class="footer__nav-list">
              <h4>Навигация</h4>
              <li class="footer__nav-list__item"><a href="#!">О нас</a></li>
              <li class="footer__nav-list__item"><a href="#!">Доставка</a></li>
              <li class="footer__nav-list__item"><a href="#!">Рассчитать заказ</a></li>
            </ul>
            <ul class="footer__contacts-list">
              <h4>Контакты</h4>
              <li class="footer__contacts-list__item list">125363, г. Москва<br> Строительный проезд,<br> д. 2, стр. 1</li>
              <li class="footer__contacts-list__item">пн-пт 10:00 – 20:00</li>
              <li class="footer__contacts-list__item">8 (999) 999-99-99<br>123@gmail.com</li>
            </ul>
          </div>
        </div>
    </footer>
    <script src="../js/calculator.js"></script>
</body>
</html> -->