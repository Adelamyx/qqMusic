const api = {
  // 歌曲查找列表
  searchList: (keywords, page) => {
    return `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?w=${keywords}&p=${page}&n=30`
  },
  song: (songmid) => {
    // 播放音乐接口
    return `http://ws.stream.qqmusic.qq.com/C100${songmid}.m4a?fromtag=0`
  },
  album: (albummid) => {
    return `https://y.gtimg.cn/music/photo_new/T002R150x150M000${albummid}.jpg?max_age=2592000`
  }
}

export default api
