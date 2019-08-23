import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toolflag: false,
    mainpageflag: true,
    n: 0,
    datacache: {
      hash: "",
      time: "",
      perinfoflag: false,
      name: "刘欢",
      age: 27,
      tel: 13627079680,
      email: "liuziyu36@gmail.com",
      post: "WEB前端",
      salary: "5.5k-7.5k",
      workWay: "全职",
      careerObjective: "",
      workExperience: [{
          company: "苏州今生有约婚纱摄影",
          time: "2014.7-2015.10",
          post: "婚纱照美化调修"
        },
        {
          company: "苏州万盟玉栈",
          time: "2016.3-2017.102016.3-2017.10",
          post: "设计师"
        }, {
          company: "赣州米兰婚纱摄影",
          time: "2017.06-2018.05",
          post: "婚纱照美化调修"
        }, {
          company: "喜福文化传播有限公司",
          time: "2018.10-2019.07",
          post: "婚纱照美化调修"
        }
      ],
      education: [{
        school: "九江职业技术学院",
        time: "2011.9~2014.6",
        specialty: "动漫设计与制作"
      }],
      evaluation: "学习能力强,有良好的学习习惯，遇到不懂，意味着新的学习收获适应能力强，有良好的团队精神和团队意识，能积极融团队, 乐于接受和适应新鲜事物对待工作认真负责，能在岗位和团队中汲取养分不断学习，和公司共同进步和成长",
      careerPlanning: "从毕业到现在做了几年的影楼和设计行业,感觉这些好像并不适合我,因为并不能从中获取成就感,后来接触了编程,从开始的基本的html css js学起慢慢的从中找到了乐趣,便开始计划转行做前端,后来又系统的学习了vue 前端框架, nodejs, python 期间自己也写了些项目以便更深入的学习,从开始到现在学编程也有将近一年的时间了,便想着是时候找个公司来检验我的学习成果了.",
      skill: [{
        name: "photoshop",
        init: 0,
        Proficiency: 85,
      }, {
        name: "illustrator",
        init: 0,
        Proficiency: 80,
      }, {
        name: "html&css",
        init: 0,
        Proficiency: 75,
      }, {
        name: "js&nodejs",
        init: 0,
        Proficiency: 65,
      }, {
        name: "python",
        init: 0,
        Proficiency: 60,
      }, {
        name: "vue&vuex&axios",
        init: 0,
        Proficiency: 65,
      }],
      blog: "myblog/index.html",
      github: "https://github.com/laughte"
    },
    datacount: 0,
    clicktype: "",
    personinfo: [],
    datatemp: [],
    formTP: {}
  },
  mutations: {
    showtool(state, e) {
      // debugger

      if (e) {
        state.clicktype = e.title
        if (e.title === "立即创建") {

          let {
            ...Y
          } = state.datacache
          state.personinfo.unshift(Y)
          state.datacount = 0
          //设置创建日期
          let nowdate = new Date()
          state.personinfo[0].time =
            `${nowdate.getFullYear()}-${nowdate.getMonth() +
            1}-${nowdate.getDate()} | ${nowdate.getHours()}:${nowdate.getMinutes()}:${nowdate.getSeconds()}`
          //创建hash值

          state.personinfo[0].hash = (Math.random()).toString()

        } else if (e.title === "确认修改") {
          state.datacount = state.personinfo.length - 1
        } else if (e.title === "取消创建") {
          state.personinfo.splice(0, 1)
        }

      }
      state.mainpageflag = !state.mainpageflag;
      state.toolflag = !state.toolflag
    },
    deleteItem(state, e) {
      state.clicktype = e.title
      state.personinfo.splice(e.index, 1);
    },
    saveStorageData(state) {
      let itemArray = JSON.stringify(state.personinfo)
      localStorage.setItem('personinfo', itemArray)
    },
    readStoragedata(state) {
      // debugger
      if (localStorage.getItem('personinfo')) {
        let oldarray = localStorage.getItem('personinfo')
        let dataarr = JSON.parse(oldarray)
        if (dataarr.length > 0) {
          state.personinfo = dataarr
        }

      }
    },

    appendworkitem(state, e) {
      state.personinfo[state.datacount].workExperience.push(e);
    },
    resetwork(state) {
      state.personinfo[state.datacount].workExperience = [];
    },
    appendeduitem(state, e) {
      state.personinfo[state.datacount].education.push(e);
    },
    resetedu(state) {
      state.personinfo[state.datacount].education = [];
    },
    appendskillitem(state, e) {
      state.personinfo[state.datacount].skill.push(e);
    },
    resetskill(state) {

      state.personinfo[state.datacount].skill = [];
    },

    modifyitem(state, e) {
      // debugger;
      state.datacount = e.index
      state.clicktype = e.title;
      // state.personinfo= state.personinfo.slice(e.index, 1)[0];
      this.commit("showtool")
    }
  }
});
