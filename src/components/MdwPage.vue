<template>
  <div class="mdwpage">
    <div class="container">
      <div>{{ fuck }}</div>
    </div>
  </div>
</template>

//
<script>
export default {
  data() {
    const videoList = {};
    const fuck = 'fuck';
  },
  mounted() {
    this.axios
      .get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'contentDetails', // 把需要的資訊列出來
          playlistId: 'PLOGdOYYek9-GGkxEk_ldKrb3atmdv8yG8', // 播放清單的id
          maxResults: 10, // 預設為五筆資料，可以設定1~50
          key: 'AIzaSyCw1tQJgOrzv94I7qI7EOXCtJ8KiU4F0hY',
        },
      })
      .then((res) => {
        this.videoList = res.data.items;
        console.log(this.videoList);
      })
      .catch((e) => console.log(e));
  },
};
</script>
