<template>
  <div class="mdwpage1">
    <div class="mdwContainer">
      <div class="videoListL">
        <img src="../assets/videoListL.png" alt="" />
      </div>
      <div class="mdwImg" v-show="blockImgIsShow">
        <img src="../assets/mdwImg.png" alt="" />
      </div>
      <div class="videoBlock" v-show="blockIsShow">
        <a
          :href="`https://www.youtube.com/watch?v=${videoIdList}`"
          v-for="(videoIdList, index) in videoIdList"
          :key="index"
          class="videoLink"
        >
          <img
            :src="
              `https://img.youtube.com/vi/` + videoIdList + `/maxresdefault.jpg`
            "
          />
          <div class="hoverAnimation"></div>
        </a>
      </div>
      <div class="videoListR">
        <img src="../assets/videoListR.png" />
      </div>
      <div
        class="scrollToTopBtn"
        v-show="scrollToTopBtnIsShow"
        v-on:click="scrollToTop"
      >
        <img src="../assets/scrollToTop.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mdwPageShow'],
  data() {
    return {
      videoIdList: [],
      blockImgIsShow: false,
      blockIsShow: false,
      scrollToTopBtnIsShow: false,
    };
  },
  watch: {
    mdwPageShow: function () {
      console.log(this.mdwPageShow);
      setTimeout(this.blockImgShow, 3000);
      setTimeout(this.scrollToTopBtnShow, 3000);
      setTimeout(this.blockImgShow, 5000);
      setTimeout(this.blockShow, 5000);
    },
  },
  methods: {
    blockShow() {
      this.blockIsShow = true;
    },
    blockImgShow() {
      this.blockImgIsShow = !this.blockImgIsShow;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToTopBtnShow() {
      this.scrollToTopBtnIsShow = true;
    },
  },
  mounted() {
    this.axios
      .get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'contentDetails', // 把需要的資訊列出來
          playlistId: 'PLqRd43Vx6OJ8dLhGl_77g-_ymcp3vlNJN', // 播放清單的id
          maxResults: 10, // 預設為五筆資料，可以設定1~50
          key: 'AIzaSyCw1tQJgOrzv94I7qI7EOXCtJ8KiU4F0hY',
        },
      })
      .then((res) => {
        for (let i = 0; i < res.data.items.length; i++) {
          this.videoIdList.push(res.data.items[i].contentDetails.videoId);
        }
        console.log(this.videoIdList);
      })
      .catch((e) => console.log(e));
    console.log(this.mdwPageShow);
  },
};
</script>
