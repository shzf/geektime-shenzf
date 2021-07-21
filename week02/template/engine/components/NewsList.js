export default {
  render() {
    // return `
    //     <div class="newslist">
    //         <div class="news-item" for="item in newslist">
    //             <div class="img"><img src="{{item.image}}"/></div>
    //             <div class="title">{{item.title}}</div>
    //         </div>
    //     </div>
    // `
    return `
    <div class="newslist">
      <div class="news-item" for="item in newslist" click="openUrl">
        <div class="img" v-if="item.showImage"><img src="{{item.image}}"/></div>
        <div class="date" v-if="item.showDate">{{item.passtime}}</div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
`
    //     let tmpl = `<div class="newslist">
    //   <div class="img" v-if="info.showImage"><img src="{{info.image}}"/></div>
    //   <div class="date" v-if="info.showDate">{{info.passtime}}</div>
    //   <div class="title">{{info.title}}</div>
    // </div>`
    //     return tmpl
  },
}
