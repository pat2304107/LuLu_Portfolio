<template>
  <div class="container">
    <div class="info come" v-show="infoIsShow">
      <img src="../assets/C81C83E2.jpeg" class="photo" />
      <div class="name">
        <div class="name_ch">盧　俊諺</div>
        <div class="name_en">CHUN-YEN LU</div>
      </div>
    </div>
    <div class="intro_block come" v-show="introIsShow">
      <div class="intro_L"><img src="../assets/intro_L.png" alt="" /></div>
      <div class="introduction">
        <div>畢業於國立臺灣藝術大學圖文傳播藝術學系。</div>
        <div>向來喜歡接觸新奇的事物，且具有高行動力。</div>
        <div>自認學習能力佳，能快速上手全新事物，享受解決問題的過程。</div>
      </div>
      <div class="intro_R">
        <img src="../assets/intro_R.png" alt="" />
      </div>
    </div>
    <div class="dw_block come" v-show="dwIsShow">
      <div class="dw_L"><img src="../assets/dw_L.png" /></div>
      <a href="https://issuu.com/luchunyen/docs/_2.0" class="gdw"
        ><img src="../assets/GDW.png"
      /></a>
      <div class="mdw"><img src="../assets/MDW.png" /></div>
      <div class="dw_R"><img src="../assets/dw_R.png" /></div>
    </div>
    <div class="mail_block come" v-show="mailIsShow">
      <div class="mail_L"><img src="../assets/mail_L.png" /></div>
      <a href="mailto:a20000306@gmail.com" class="mail"
        ><img src="../assets/mail.png" alt=""
      /></a>
      <div class="mail_R"><img src="../assets/mail_R.png" /></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      timer: '',
      infoTimer: '',
      introTimer: '',
      dwTimer: '',
      mailTimer: '',
      infoIsShow: false,
      introIsShow: false,
      dwIsShow: false,
      mailIsShow: false,
    };
  },
  computed() {},
  methods: {
    comtainerAnimate: function () {
      $('.container').animate(
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
  },
  mounted() {
    this.timer = setTimeout(this.comtainerAnimate, 500);
    this.infoTimer = setTimeout(this.infoShowing, 1000);
    this.introTimer = setTimeout(this.introShowing, 1500);
    this.dwTimer = setTimeout(this.dwShowing, 2000);
    this.mailTimer = setTimeout(this.mailShowing, 2500);
  },
};
</script>
