<template>
  <div class="content">
    <div class="head">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" name="" value="" placeholder="搜搜..." @keyup.13="search(searchkey, 1)" v-model="searchkey">
    </div>
    <div class="list" :class="{'blank':showPlay}">
      <ul>
        <li v-for="(item,index) in songList" :key="index" @click="choosePlay(item)">
          <div class="logo">
            <i class="iconfont icon-yinyue"></i>
          </div>
          <div class="text">
            <p class="songname">{{item.songname}}</p>
            <p class="starname">{{item.singer[0].name}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom" v-show="showPlay">
      <audio id="play" :src="playlink" autoplay loop></audio>
      <div class="songimg">
        <img :src="album" alt='songimg'>
      </div>
      <div class="bottomContent">
        <p class="bSongName">{{nowSong.songname}}</p>
        <p class="bStarName" v-if="nowSong && nowSong.singer">{{nowSong.singer}}</p>
        <a :href="playlink" class="iconfont icon-xiazai" :download="nowSong.songname"></a>
        <i class="play iconfont icon-zanting" v-if="state" @click="switchPlay"></i>
        <i class="play iconfont icon-bofang" v-else @click="switchPlay"></i>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data () {
    return {
      searchkey: '梁静茹', // 搜索关键词字段
      page: 1, // 当前页面 默认一进页面是第一页
      songList: [], // 接口获取的歌曲列表
      nowSong: {
        playurl: '001SsVz71gOzPH',
        albumimg: '002E4IXe1ESUij',
        songname: '儿歌',
        singer: '梁静茹'
      }, // 当前播放的歌曲
      state: false, // state为true时代表播放， false时表示暂停
      showPlay: false // 展示页面的底部play内容
    }
  },
  computed: {
    album () { // 显示相册
      return api.album(this.nowSong.albumimg)
    },
    playlink () { // 播放曲目链接
      return api.song(this.nowSong.playurl)
    }
  },
  async mounted () {
    await this.search(this.searchkey, this.page)
    window.onscroll = () => {
      this.pageLoad()
    }
    this.state = true
    this.showPlay = true
    console.log('前端小白,参考了qq音乐，觉得qq音乐是一个非常好的音乐播放器！会支持你的！非常喜欢梁静茹，希望我们大家都越来越好')
  },
  methods: {
    search (searchkey, page) {
      // searchkey: 搜索的关键词， page:当前是第几页
      this.$http.jsonp(api.searchList(searchkey, page), { jsonp: 'jsonpCallback' }).then((response) => {
        if (response) {
          this.songList = response.data.data.song.list
        } else {
          console.log('数据请求出错了！')
        }
      })
    },
    choosePlay (item) {
      // 选择列表中的某一首歌
      this.nowSong = {
        playurl: item.songmid,
        albumimg: item.albummid,
        songname: item.songname,
        singer: item.singer[0].name
      }
      this.state = true
      this.play(this.state)
      this.showPlay = true
    },
    play (state) {
      // 播放音频
      const playel = document.querySelector('#play')
      setTimeout(() => {
        state ? playel.play() : playel.pause()
      }, 0)
    },
    switchPlay () {
      // 切换播放暂停
      this.state = !this.state
      this.play(this.state)
    },
    pageLoad () {
      // 分页加载
      var all = document.body.scrollHeight
      var top = document.documentElement.scrollTop
      if ((all - top) < document.documentElement.clientHeight) {
        this.page++
        this.$http.jsonp(api.searchList(this.searchkey, this.page), { jsonp: 'jsonpCallback' }).then((response) => {
          if (response) {
            this.songList = this.songList.concat(response.data.data.song.list)
          } else {
            console.log('数据请求出错了！')
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/rem.scss';
@import '../../assets/font/iconfont.css';

.content {
  font-size: rem(40);
}

.head {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: rem(20);
  background-color: #333;

  i {
    padding-right: rem(20);
    font-size: rem(40);
    color: #fff;
  }

  input {
    flex: 1;
    padding: rem(10);
    font-size: rem(30);
    color: #666;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
  }
}

.list {
  margin-top: rem(100);

  ul {
    background-color: #fff;

    li {
      display: flex;
      height: rem(120);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: rem(80);
        height: rem(100);
      }

      .text {
        flex: 1;
        height: rem(120);
        padding-top: rem(20);
        text-align: left;

        .songname {
          font-size: rem(30);
        }

        .starname {
          font-size: rem(24);
          color: rgba(0, 0, 0, 0.8);

        }
      }

    }
  }
}

.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: rem(220);
  color: #fff;
  background: rgba(0, 0, 0, 0.8);

  .songimg {
    width: rem(220);
    height: rem(220);
    padding: rem(20);
  }

  .bottomContent {
    flex: 1;
    padding-left: rem(20);
    text-align: left;

    .bSongName, .bStarName {
      padding-top: rem(20);
      font-size: rem(30);
      line-height: 1.5;
    }

    a {
      color: #fff;
      list-style: none;
    }

    .play {
      float: right;
      margin: 0 rem(40) rem(20) 0;
      font-size: rem(60);
    }
  }
}

.blank {
  margin-bottom: rem(200);
}

</style>
