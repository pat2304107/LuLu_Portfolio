<template>
  <div class="mainpage">
    <div class="mainContainer" id="mainContainer">
      <div class="info come" v-show="infoIsShow">
        <img src="../assets/profilePicture.jpeg" class="photo" />
        <div class="name">
          <div class="nameCh">盧　俊諺</div>
          <div class="nameEn">CHUN-YEN LU</div>
        </div>
      </div>
      <div class="introBlock come" v-show="introIsShow">
        <div class="introL"><img src="../assets/introL.png" alt="" /></div>
        <div class="introduction">
          <div>畢業於國立臺灣藝術大學圖文傳播藝術學系。</div>
          <div>向來喜歡接觸新奇的事物，且具有高行動力。</div>
          <div>自認學習能力佳，能快速上手全新事物，享受解決問題的過程。</div>
        </div>
        <div class="introR">
          <img src="../assets/introR.png" alt="" />
        </div>
      </div>
      <div class="dwBlock come" v-show="dwIsShow">
        <div class="dwL">
          <img src="../assets/dwL.png" />
        </div>
        <a href="https://issuu.com/luchunyen/docs/_2.0" class="gdw"
          ><img src="../assets/GDW.png" />
          <div class="hoverAnimation"></div
        ></a>
        <div class="mdw" @click="$emit('show-mdw-page'), scroll()">
          <img src="../assets/MDW.png" />
          <div class="hoverAnimation"></div>
        </div>
        <div class="dwR"><img src="../assets/dwR.png" /></div>
      </div>
      <div class="mailBlock come" v-show="mailIsShow">
        <div class="mailL"><img src="../assets/mailL.png" /></div>
        <a href="mailto:a20000306@gmail.com" class="mail">
          <img src="../assets/mail.png" />
          <div class="hoverAnimation"></div>
        </a>
        <div class="mailR"><img src="../assets/mailR.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      infoIsShow: false,
      introIsShow: false,
      dwIsShow: false,
      mailIsShow: false,
    };
  },
  computed() {},
  methods: {
    containerAnimate: function () {
      $('#mainContainer').animate(
        {
          height: '788px',
        },
        'slow'
      );
    },
    infoShowing: function () {
      this.infoIsShow = !this.infoIsShow;
    },
    introShowing: function () {
      this.introIsShow = !this.introIsShow;
    },
    dwShowing: function () {
      this.dwIsShow = !this.dwIsShow;
    },
    mailShowing: function () {
      this.mailIsShow = !this.mailIsShow;
    },
    scroll: function () {
      // setTimeout(function () {
      //   window.scrollTo({
      //     left: 0,
      //     top: document.body.scrollHeight,
      //     behavior: 'smooth',
      //   });
      // }, 200);
      // console.log('scroll');
      $('html, body').animate(
        { scrollTop: document.body.scrollHeight },
        'slow'
      );
    },
  },
  mounted() {
    setTimeout(this.containerAnimate, 500);
    setTimeout(this.infoShowing, 1000);
    setTimeout(this.introShowing, 1500);
    setTimeout(this.dwShowing, 2000);
    setTimeout(this.mailShowing, 2500);
  },
};
</script>
