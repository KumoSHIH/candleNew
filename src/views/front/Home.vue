<template>
  <div>
    <transition :duration="1000"><DarkLoading/></transition>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/home">
        <img src="../../assets/images/logo_light.png" class="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-light"></i>
      </button>
      <div class="collapse navbar-collapse bg-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/list">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bulletin">The News</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              Shopping Cart
              <div class="badge badge-light">{{ cartLength }}</div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/controller">Controller</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <a href="#" class="scrollTop text-center animatedJS" id="top">
      <i class="fas fa-sort-up"></i>
    </a>
    <div class="slidershow-wrap">
      <vue-displacement-slideshow
        :images="images"
        displacement="require('@/assets/hero2.jpg')"
        :intensity="0.2"
        :speedIn="1.4"
        :speedOut="1.4"
        ease="Expo.easeInOut"
        ref="slideshow">
      </vue-displacement-slideshow>
    </div>
    <div class="hero1 row d-flex flex-column justify-content-center align-items-center no-gutters">
      <div class="svgWrap">
        <svg viewBox="0 0 268 31.75">
          <g>
            <path id="title" class="st0 c" d="M17.88,13.109c0.244-0.244,1.396-1.36,1.78-1.36c0.349,0,0.523,0.244,0.349,0.803l0.07,0.069
              c3.385-2.932,5.583-6.072,5.583-7.224c0-0.593-0.384-0.837-0.942-0.698c-0.628,0.175-4.606,0.314-12.423,9.457
              c-2.443,2.862-4.223,6.735-4.223,9.388c0,2.478,1.187,3.943,3.699,3.943c4.397,0,12.074-5.723,15.389-8.654
              c0.105,1.779-0.454,2.269-1.779,3.524c-6.805,6.561-12.598,8.654-15.878,8.654c-3.874,0-6.665-2.407-6.665-6.421
              c0-5.13,4.292-10.644,7.887-14.028c2.966-2.827,10.294-8.41,14.447-8.41c2.094,0,3.455,1.116,3.56,3.315
              c0.244,4.711-8.759,13.645-13.156,14.308c-1.012,0.14-1.954-0.559-1.954-1.676c0-1.047,0.942-2.094,1.675-2.722L17.88,13.109z"/>
            <path class="st0 a1" d="M33.795,24.067c-0.663,0.523-2.896,2.338-3.699,2.338c-0.977,0-3.001-2.303-3.071-4.117
              c-0.139-4.362,8.934-8.829,12.982-8.934c1.605-0.035,2.268,1.256,2.268,1.675s-0.907,0.768-1.221,0.872
              c0.663,0.279,1.012,0.663,1.012,1.431c0,1.117-3.036,3.56-3.036,5.2c0,0.593,0.523,0.837,1.082,0.837
              c1.466,0,3.455-1.779,4.956-2.791l0.279,1.291c-1.501,1.71-6.177,5.443-7.887,5.443c-1.152,0-1.675-0.837-1.675-1.85
              c0-1.116,0.837-2.966,1.291-3.908l-0.069-0.069L33.795,24.067z M29.573,23.16c0.035,0.175,0.174,0.803,0.698,0.698
              c0.698-0.14,1.78-0.035,8.689-7.015l-0.07-0.069C30.585,19.321,29.573,21.45,29.573,23.16z"/>
            <path class="st0 n" d="M61.436,19.531l0.279,1.535c-1.85,1.64-5.444,5.933-7.991,5.933c-1.326,0-1.954-1.117-1.954-2.304
              c0-2.094,1.884-4.396,3.001-6.002l-0.07-0.07c-2.024,1.501-3.804,3.315-5.374,5.34c-0.523,0.663-1.815,2.373-2.757,2.373
              c-1.536,0-1.919-2.198-1.955-3.385c-0.104-2.408,2.094-5.933,4.118-7.643c0.454-0.384,0.768-0.419,1.361-0.419
              c2.094,0.069,1.919,0.559,1.919,0.768c0,1.361-4.397,4.886-4.397,5.724c0,0.209,0.174,0.384,0.384,0.384
              c0.244,0,0.558-0.314,0.698-0.489c2.792-3.56,9.213-7.852,10.225-7.852c0.14,0,0.349,0.175,0.558,0.663
              c0.209,0.523,0.419,1.151,0.523,1.885c0,1.36-4.292,4.013-4.292,6.421c0,0.313,0.279,0.628,0.628,0.628
              c0.837,0,2.373-1.222,3.001-1.745L61.436,19.531z"/>
            <path class="st0 d" d="M75.117,15.657c-1.151,1.814-2.826,4.083-2.826,6.316c0,0.559,0.035,1.745,0.802,1.745
              c1.187,0,4.397-2.827,5.514-3.56l0.245,1.151c-1.64,1.814-5.235,5.479-7.782,5.479c-1.326,0-1.85-1.396-1.85-2.513
              c0-0.872,0.14-1.779,0.279-2.651c-1.221,1.047-4.467,4.432-6.037,4.432s-2.547-3.351-2.547-4.571
              c0-4.118,6.944-7.607,9.911-7.782c0.733-0.035,1.012,0.453,1.466,0.978c1.151-1.989,4.222-9.213,6.77-9.213
              c0.698,0,1.117,0.697,1.117,1.326c0,1.047-0.942,2.478-1.5,3.35L75.117,15.657z M63.985,22.218
              c-0.035,0.314,0.14,0.594,0.523,0.663c0.419,0.104,6.037-4.083,6.596-6.142C64.962,18.729,64.195,19.915,63.985,22.218z"/>
            <path class="st0 l" d="M89.741,21.275c-1.919,1.989-5.2,5.514-8.201,5.514c-2.547,0-3.106-2.478-3.106-4.536
              c0-3.664,1.57-7.607,3.839-10.399c3.071-3.804,6.386-7.049,7.503-7.049c0.593,0,0.732,0.837,0.698,1.291
              c-0.244,3.315-1.152,6.386-8.724,13.714c-0.314,0.594-0.419,1.571-0.245,2.408c0.314,0.803,0.803,1.501,1.745,1.501
              c1.919,0,4.606-2.233,6.002-3.49L89.741,21.275z M82.517,16.6c2.478-2.304,4.641-5.653,5.27-7.643
              c-1.71,0.838-3.699,3.979-5.339,7.572L82.517,16.6z"/>
            <path class="st0 e" d="M102.061,21.241c-2.129,2.478-5.967,5.758-9.422,5.758c-2.547,0-3.734-2.269-3.804-4.571
              c-0.14-4.572,4.92-9.248,9.457-9.213c1.117,0,2.513,0.279,2.513,1.675c0,1.71-1.71,4.292-8.41,6.491l-0.07,0.768
              c-0.104,1.326,1.047,1.779,2.164,1.779c2.478,0,5.409-2.547,7.259-4.013L102.061,21.241z M97.733,15.622
              c0-0.244-0.175-0.453-0.419-0.384c-1.745,0.454-3.769,2.129-4.711,4.433C95.674,18.623,97.768,16.216,97.733,15.622z"/>
            <path class="st0 dot" d="M103.493,25.149c0-1.257,1.535-4.153,3.524-3.734c0.489,0.104,1.71,0.104,1.71,1.117
              c0,0.034-0.873,4.327-3.036,4.083C104.749,26.51,103.493,26.336,103.493,25.149z"/>
            <path class="st0 h" d="M126.211,21.206l-3.629,4.257c-0.419,0.594-1.187,1.989-2.024,1.989c-0.768,0-1.71-0.697-1.71-1.5
              c0-0.978,2.478-3.386,2.966-4.327c-2.443,0.209-3.56-0.244-3.56-1.431c0-0.803,1.012-2.652,1.954-2.652
              c0.244,0,0.523,0.244,0.803,0.244c0.384,0,0.419-0.244,5.723-1.257c1.326-1.291,3.839-4.013,6.91-7.502
              c0.453-0.489,1.466-1.71,1.466-2.408c0-0.628-0.803-0.768-1.222-0.768c-1.85,0-6.246,1.291-11.97,3.664
              c0.244,0.104,0.489,0.209,0.489,0.523c0,0.488-0.454,0.698-0.873,0.837c-2.617,0.908-2.373,0.942-4.781,2.164
              c-0.419,0.209-0.907,0.488-1.396,0.488c-0.803,0-1.047-0.977-1.047-1.604c0-1.013,0.559-3.002,1.187-3.839
              c1.256-1.431,7.084-3.351,9.073-3.979c2.896-0.942,7.293-1.779,10.295-1.779c2.896,0,3.769,1.71,3.769,3.42
              c0,2.163-2.094,4.257-3.49,5.758l-3.943,4.188l5.375-0.628l6.315-7.922c0.419-0.559,1.885-2.513,2.618-2.513
              c0.453,0,0.593,0.419,0.593,0.803c0,1.116-0.244,1.779-2.861,4.99l-3.77,4.642c1.605,0.034,3.315,0,4.746,0.872
              c-1.64,1.291-3.07,2.861-4.188,4.676c-1.047-0.244-2.129-0.349-3.56-0.244c-0.523,0.907-1.814,2.548-1.814,3.595
              c0,0.628,0.244,1.431,0.384,2.094c-1.116-0.244-2.896,1.466-3.804,1.151c-0.593-0.209-0.803-0.698-0.628-1.745
              s0.732-2.651,2.024-5.095L126.211,21.206z"/>
            <path class="st0 a2" d="M149.212,24.067c-0.663,0.523-2.896,2.338-3.699,2.338c-0.978,0-3.001-2.303-3.071-4.117
              c-0.14-4.362,8.934-8.829,12.981-8.934c1.605-0.035,2.269,1.256,2.269,1.675s-0.907,0.768-1.222,0.872
              c0.663,0.279,1.013,0.663,1.013,1.431c0,1.117-3.036,3.56-3.036,5.2c0,0.593,0.523,0.837,1.082,0.837
              c1.465,0,3.454-1.779,4.955-2.791l0.279,1.291c-1.501,1.71-6.177,5.443-7.887,5.443c-1.151,0-1.675-0.837-1.675-1.85
              c0-1.116,0.837-2.966,1.291-3.908l-0.07-0.069L149.212,24.067z M144.989,23.16c0.035,0.175,0.175,0.803,0.698,0.698
              c0.697-0.14,1.779-0.035,8.688-7.015l-0.069-0.069C146.001,19.321,144.989,21.45,144.989,23.16z"/>
            <path class="st0 n2" d="M176.853,19.531l0.279,1.535c-1.85,1.64-5.444,5.933-7.992,5.933c-1.326,0-1.954-1.117-1.954-2.304
              c0-2.094,1.885-4.396,3.001-6.002l-0.069-0.07c-2.024,1.501-3.804,3.315-5.374,5.34c-0.523,0.663-1.814,2.373-2.757,2.373
              c-1.535,0-1.92-2.198-1.954-3.385c-0.104-2.408,2.094-5.933,4.117-7.643c0.454-0.384,0.769-0.419,1.361-0.419
              c2.094,0.069,1.919,0.559,1.919,0.768c0,1.361-4.396,4.886-4.396,5.724c0,0.209,0.175,0.384,0.384,0.384
              c0.244,0,0.559-0.314,0.698-0.489c2.791-3.56,9.213-7.852,10.225-7.852c0.14,0,0.349,0.175,0.559,0.663
              c0.209,0.523,0.418,1.151,0.523,1.885c0,1.36-4.293,4.013-4.293,6.421c0,0.313,0.279,0.628,0.628,0.628
              c0.838,0,2.373-1.222,3.002-1.745L176.853,19.531z"/>
            <path class="st0 d2" d="M190.533,15.657c-1.151,1.814-2.827,4.083-2.827,6.316c0,0.559,0.035,1.745,0.803,1.745
              c1.187,0,4.397-2.827,5.514-3.56l0.244,1.151c-1.64,1.814-5.234,5.479-7.781,5.479c-1.326,0-1.85-1.396-1.85-2.513
              c0-0.872,0.14-1.779,0.279-2.651c-1.222,1.047-4.467,4.432-6.038,4.432c-1.57,0-2.547-3.351-2.547-4.571
              c0-4.118,6.944-7.607,9.91-7.782c0.733-0.035,1.013,0.453,1.466,0.978c1.151-1.989,4.223-9.213,6.771-9.213
              c0.697,0,1.116,0.697,1.116,1.326c0,1.047-0.942,2.478-1.5,3.35L190.533,15.657z M179.4,22.218
              c-0.034,0.314,0.14,0.594,0.523,0.663c0.419,0.104,6.038-4.083,6.596-6.142C180.378,18.729,179.61,19.915,179.4,22.218z"/>
            <path class="st0 m" d="M205.854,24.347c-0.803,0.768-2.059,2.198-3.245,2.198c-0.838,0-1.501-0.628-1.535-1.466
              c-0.035-1.012,0.803-2.617,3.07-6.071c0.07-0.07,0.21-0.35,0.21-0.454c0-0.14-0.105-0.244-0.245-0.244
              c-0.349,0-1.116,0.838-1.36,1.082c-1.814,1.919-3.769,4.013-5.409,6.037c-0.384,0.453-0.872,0.977-1.501,0.977
              c-1.675,0-2.163-2.722-2.163-3.978c0.035-3.42,3.734-8.097,5.828-7.817c0.523,0.07,1.57,0.07,1.57,0.803
              c0,0.698-0.978,1.745-1.396,2.233c-0.628,0.732-1.396,1.361-1.919,2.129c-0.384,0.523-1.012,1.082-1.012,1.814
              c0,0.069,0.104,0.314,0.244,0.314c0.174,0,0.593-0.454,0.697-0.559c1.71-1.78,7.922-7.991,10.19-7.991
              c0.942,0,1.431,0.697,1.431,1.604c0,1.536-2.478,4.362-3.245,5.724l0.069,0.069l7.747-6.106c0.349-0.279,1.222-0.978,1.641-0.978
              c0.279,0,0.628,0.838,0.732,0.978c0.244,0.384,0.628,0.907,0.628,1.396c0,0.594-0.697,1.361-1.081,1.78
              c-2.723,3.001-2.932,3.56-2.967,4.361c-0.035,0.419,0.419,0.978,0.838,0.873c0.732-0.175,1.116-0.175,5.409-3.106l0.209,1.641
              c-1.641,1.291-6.665,5.409-8.619,5.409c-1.047,0-1.78-1.013-1.78-2.024c0-1.745,1.71-4.223,2.582-5.653l-0.069-0.069
              L205.854,24.347z"/>
            <path class="st0 a3" d="M224.527,24.067c-0.663,0.523-2.896,2.338-3.699,2.338c-0.978,0-3.001-2.303-3.071-4.117
              c-0.14-4.362,8.934-8.829,12.981-8.934c1.605-0.035,2.269,1.256,2.269,1.675s-0.907,0.768-1.222,0.872
              c0.663,0.279,1.013,0.663,1.013,1.431c0,1.117-3.036,3.56-3.036,5.2c0,0.593,0.523,0.837,1.082,0.837
              c1.465,0,3.454-1.779,4.955-2.791l0.279,1.291c-1.501,1.71-6.177,5.443-7.887,5.443c-1.151,0-1.675-0.837-1.675-1.85
              c0-1.116,0.837-2.966,1.291-3.908l-0.07-0.069L224.527,24.067z M220.305,23.16c0.035,0.175,0.175,0.803,0.698,0.698
              c0.697-0.14,1.779-0.035,8.688-7.015l-0.069-0.069C221.316,19.321,220.305,21.45,220.305,23.16z"/>
            <path class="st0 d3" d="M249.795,15.657c-1.151,1.814-2.827,4.083-2.827,6.316c0,0.559,0.035,1.745,0.803,1.745
              c1.187,0,4.397-2.827,5.514-3.56l0.244,1.151c-1.64,1.814-5.234,5.479-7.781,5.479c-1.326,0-1.85-1.396-1.85-2.513
              c0-0.872,0.14-1.779,0.279-2.651c-1.222,1.047-4.467,4.432-6.038,4.432c-1.57,0-2.547-3.351-2.547-4.571
              c0-4.118,6.944-7.607,9.91-7.782c0.733-0.035,1.013,0.453,1.466,0.978c1.151-1.989,4.223-9.213,6.771-9.213
              c0.697,0,1.116,0.697,1.116,1.326c0,1.047-0.942,2.478-1.5,3.35L249.795,15.657z M238.662,22.218
              c-0.034,0.314,0.14,0.594,0.523,0.663c0.419,0.104,6.038-4.083,6.596-6.142C239.64,18.729,238.872,19.915,238.662,22.218z"/>
            <path class="st0 e2" d="M266.268,21.241c-2.128,2.478-5.967,5.758-9.422,5.758c-2.547,0-3.733-2.269-3.804-4.571
              c-0.14-4.572,4.921-9.248,9.457-9.213c1.117,0,2.513,0.279,2.513,1.675c0,1.71-1.71,4.292-8.41,6.491l-0.069,0.768
              c-0.105,1.326,1.047,1.779,2.163,1.779c2.478,0,5.409-2.547,7.259-4.013L266.268,21.241z M261.94,15.622
              c0-0.244-0.174-0.453-0.418-0.384c-1.745,0.454-3.77,2.129-4.712,4.433C259.882,18.623,261.976,16.216,261.94,15.622z"/>
          </g>
        </svg>
      </div>
      <div class="hero1Icon animatedJS">
        <i class="fas fa-angle-double-down "></i>
      </div>
    </div>
    <div class="hero2 row justify-content-center no-gutters">
      <div class="hero2Txt d-flex flex-column justify-content-center align-items-center">
        <h2 class="display-4 text-light text-center animatedTop"><strong>SUMMER SALE</strong></h2>
        <h2 class="display-4 text-light text-center animatedTop">全館滿$999享折扣</h2>
        <h2 class="display-4 text-light text-center animatedTop">當月壽星結帳再95折</h2>
      </div>
    </div>
    <section class="row d-flex justify-content-center my-5 no-gutters">
      <div class="col-12 mt-4">
        <div class="row justify-content-center no-gutters">
          <a class="recommendWrap col-10 col-md-3 col-lg-2 mb-4 mb-md-0 mr-md-2 animatedTop">
            <span class="recommendTxt text-shadow">夏日慶典</span>
            <div class="recommendImg bg-cover" style="background-image: url(https://imgur.com/jOSjPYO.jpg);"></div>
          </a>
          <a class="recommendWrap col-10 col-md-3 col-lg-2 mb-4 mb-md-0 mr-md-2 animatedTop">
            <span class="recommendTxt text-shadow">最新上架</span>
            <div class="recommendImg bg-cover" style="background-image: url(https://i.imgur.com/ASWlINS.jpg);"></div>
          </a>
          <a class="recommendWrap col-10 col-md-3 col-lg-2 mb-4 mb-md-0 mr-md-2 animatedTop">
            <span class="recommendTxt text-shadow">人氣商品</span>
            <div class="recommendImg bg-cover" style="background-image: url(https://i.imgur.com/6UhPZwc.jpg);"></div>
          </a>
        </div>
      </div>
    </section>
    <div class="container">
      <hr>
      <div class="row d-flex justify-content-center mt-5">
        <h5 class="col-9 col-md-8 text-center my-4 letterspacing animatedTop"><strong>帶上你的情人、朋友，選一個屬於自己香味的蠟燭吧！<br>
          靜靜地感受心靈的沉靜，天然大豆蠟的獨特觸感，彷彿洗去一天的疲憊....</strong>
        </h5>
      </div>
    </div>
    <section class="about">
      <div class="row d-flex justify-content-center align-items-center no-gutters">
        <div class="col-lg-5 aboutImg about-cover" style="background-image: url(https://i.imgur.com/raOiSop.jpg)"></div>
        <div class="col-lg-5 text-center text-main mt-5 mt-lg-0 animatedLeft">
          <i class="frame fas fa-hourglass-half mb-1"></i>
          <h2>時間</h2>
          <p class="mt-3">蠟燭產品下單後現做，2-6工作天內發貨。<br>預定可備註發貨日期。</p>
        </div>
      </div>
      <div class="row flex-row-reverse d-flex justify-content-center align-items-center my-5 no-gutters">
        <div class="col-lg-5 aboutImg bg-cover" style="background-image: url(https://i.imgur.com/JDnX5qA.jpg)"></div>
        <div class="col-lg-5 text-center text-main mt-5 mt-lg-0 animatedLeft">
          <i class="frame fas fa-leaf mb-1"></i>
          <h2>純天然</h2>
          <p class="mt-3">原材料為美國大豆蠟，由大豆製作而成，純天然材料，<br>
          不會釋放化學物質，燃燒更緩慢，溫和地釋放香味。</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center align-items-center no-gutters">
        <div class="col-lg-5 aboutImg about-cover" style="background-image: url(https://i.imgur.com/Eb3g2Bp.jpg)"></div>
        <div class="col-lg-5 text-center text-main mt-5 mt-lg-0 animatedLeft">
          <i class="frame fab fa-bitbucket mb-1"></i>
          <h2>產品</h2>
          <p class="mt-3">蠟燭產品皆為純手工製作，完全一樣是不存在的，<br>也因此有其獨特性
          ，小氣泡或細節不平整等為正常狀況。</p>
        </div>
      </div>
    </section>
    <section class="hero3 row justify-content-center align-items-center no-gutters">
      <div class="col-md-6 col-lg-5 hmTxt d-flex justify-content-center align-items-center">
        <div class="col-10 rightTxt my-5 text-white letterspacing animatedTop">
          <h3 class="text-center mb-4">手作課程</h3>
          <li>NT$1000起。費用含手作體驗：20 種配方原料、手工玻璃容器（直徑 9 x 7.5cm，270ml）、包材、現場工具使用。</li>
          <li>專業設計師一起創作，親自製作屬於你且獨一無二的作品。</li>
          <li>活動前 15 分鐘開放入場，為了讓體驗活動順利進行，遲到超過 30 分鐘即無法入場，視同放棄課程，概不退款。</li>
          <li>活動將依需求進行側拍，如不希望被攝影，可以於活動現場告知工作人員。</li>
        </div>
      </div>
      <div class="col-md-6 col-lg-5 handMadeWrap d-flex  justify-content-center align-items-center">
        <div class="col-10 text-center animatedTop" id="blip2">
          <p>課程中將準備 20 款不同的配方原料，提供學員們自行調配個人專屬香氛蠟燭，
            讓居家空間更增添幾許優逸氣息，感受生活的慢時尚。
          </p>
          <button class="btn btn-main bntHand" id='click1' @click="btn1">課程場次</button>
        </div>
        <div class="col-12 col-lg-10 text-center" id="blip">
          <ul>
            <h2 class="my-1"><i class="far fa-lightbulb mr-2"></i>場次報名</h2>
            <li class="mb-1">2019/08/03 <i class="fas fa-glass-whiskey ml-2 mr-1"></i>經典大豆蠟燭 $1,000</li>
            <li class="mb-1">2019/08/04 <i class="fab fa-pagelines ml-2 mr-2"></i>花草大豆蠟燭 $1,300</li>
            <li class="mb-1">2019/08/10 <i class="fas fa-pepper-hot ml-2 mr-1"></i>水果大豆蠟燭 $1,500</li>
            <li >2019/08/11 <i class="fab fa-pagelines ml-2 mr-2"></i>花草大豆蠟燭 $1,300</li>
          </ul>
          <button class="btn btn-main" id='click2' @click="btn2">Go back</button>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import $ from 'jquery'
import anime from 'animejs'
import VueDisplacementSlideshow from 'vue-displacement-slideshow'
import Footer from '@/components/Footer'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    VueDisplacementSlideshow,
    Footer
  },
  data () {
    return {
      message: {}
    }
  },
  computed: {
    ...mapGetters('cartModules', ['cart', 'cartLength']),
    images () {
      return [
        require('@/assets/images/4.jpeg'),
        require('@/assets/images/3.jpeg'),
        require('@/assets/images/8.jpg'),
        require('@/assets/images/7.jpg')
      ]
    }
  },
  methods: {
    ...mapActions('cartModules', ['getCart']),
    btn1 () {
      anime({
        targets: '#blip',
        opacity: 1,
        duration: 500,
        translateY: 100
      })
      anime({
        targets: '#click1',
        opacity: 0,
        duration: 500,
        translateY: 100
      })
      anime({
        targets: '#blip2',
        opacity: 0,
        duration: 500,
        translateY: 100
      })
    },
    btn2 () {
      anime({
        targets: '#blip',
        opacity: 0,
        duration: 500,
        translateY: -500
      })
      anime({
        targets: '#click1',
        opacity: 1,
        duration: 500,
        translateY: 0
      })
      anime({
        targets: '#blip2',
        opacity: 1,
        duration: 500,
        translateY: 0
      })
    },
    init () {
      setInterval(() => {
        this.$refs.slideshow.next()
      }, 3000)
    }
  },
  created () {
    this.$store.dispatch('cartModules/getCart')
    $(document).ready(function () {
      $('#top').click(function (e) {
        e.preventDefault()
        $('html,body').animate({ scrollTop: 0 }, 1000)
      })
      $(window).scroll(function () {
        var scrollPos = $(window).scrollTop()
        var windowHeight = $(window).height()
        // console.log(scrollPos,windowHeight);
        $('.animatedJS').each(function () {
          var thisPos = $(this).offset().top
          // console.log(thisPos);
          if ((windowHeight + scrollPos) >= thisPos) {
            $(this).addClass('fadeIn')
          }
        })
        $('.animatedTop').each(function () {
          var thisPos = $(this).offset().top
          if ((windowHeight + scrollPos) >= thisPos) {
            $(this).addClass('fadeIn')
          }
        })
        $('.animatedRight').each(function () {
          var thisPos = $(this).offset().top
          if ((windowHeight + scrollPos) > thisPos) {
            $(this).addClass('fadeRight')
          }
        })
        $('.animatedLeft').each(function () {
          var thisPos = $(this).offset().top
          if ((windowHeight + scrollPos) > thisPos) {
            $(this).addClass('fadeLeft')
          }
        })
      })
    })
  },
  mounted () {
    this.init()
  }
}
</script>
