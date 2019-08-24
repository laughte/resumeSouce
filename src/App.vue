<template>
  <div id="app">
    <i
      class="el-icon-edit animated fadeInDown"
      v-show="$store.state.mainpageflag"
      @click="showtool"
    ></i>
    <transition appear>
      <tool v-show="$store.state.toolflag" />
    </transition>
    <transition appear>
      <transition-group v-show="$store.state.mainpageflag" appear tag="ul">
        <li
          @click="changemin(i)"
          class="perapp"
          v-show="cardshowflag"
          :key="data.hash"
          v-for="(data,i) in $store.state.personinfo"
          ref="perappli"
        >
          <div class="mainpage" ref="mainpage" :class="isblur[data.perinfoflag]">
            <HelloWorld :data="data" :n="i" />
            <card1 :data="data" />
            <card2 :data="data" />
            <div class="arstyle">
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
              <i class="around"></i>
            </div>
          </div>
          <transition appear>
            <perinfo
              :data="data"
              :n="i"
              class="animated"
              v-show="$store.state.personinfo[i].perinfoflag"
            />
          </transition>
        </li>
      </transition-group>
    </transition>
  </div>
</template>

<script>
import tool from './components/tool.vue';
import HelloWorld from './components/HelloWorld.vue';
import card1 from './components/card1.vue';
import card2 from './components/card2.vue';
import perinfo from './components/personinfo.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    card1,
    card2,
    perinfo,
    tool,
  },
  data() {
    return {
      cardshowflag: true,
      peranimate: { true: ' jackInTheBox', false: 'rollOut' },
      isblur: { true: 'bluractive', false: 'noblur' },
    };
  },
  methods: {
    showtool() {
      this.$store.commit({ type: 'showtool', title: '立即创建' });
    },
    changeflag() {
      this.cardshowflag = true;
    },
    changemin(i) {
      // this.$refs.perappli[i].classList.add("changemax");
    },
  },
  computed: {
    linsen() {
      return this.$store.state.personinfo;
    },
  },
  watch: {
    linsen(n, o) {
      this.$store.commit('saveStorageData');
    },
  },

  mounted() {
    this.changeflag();
  },
  created() {
    this.$store.commit('readStoragedata');
  },
};
</script>

<style lang="scss">
//transition-group 样式
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
.v-move {
  transition: all 0.6s ease;
}
.v-leave-active {
  position: absolute !important;
}

// 梯形条样式
div.arstyle {
  display: flex;
  justify-content: start;
  .around {
    // position: absolute;
    width: 30px;
    height: 26px;
    border-top: 8px solid red;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    transform: rotate(180deg);
    &:nth-child(even) {
      transform: rotate(0);
      margin-top: 30px;
      border-top-color: yellow;
    }
  }
}

.el-icon-delete {
  position: absolute;
  z-index: 8;
}
.el-icon-edit {
  cursor: pointer;
  position: fixed;
  font-size: 30px;
  top: 35px;
  left: 30px;
  z-index: 9;
}

// 毛玻璃效果
.bluractive {
  filter: blur(5px);
}
//取消毛玻璃效果
.noblur {
  filter: blur(0px);
}

.colorstyle {
  color: green;
  background: white;
}

//表单变小
.changemin {
  transform: scale(3, 3);
}

// 单页面的主要样式
.perapp {
  // transform: scale(0.2, 0.2);
  transition: all ease-in-out 0.3s;
  position: relative;
  margin: auto;
  overflow: hidden;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 2vh;
  margin: auto;
  margin-top: 10px;
  width: 640px;
  min-width: 640px;
  background: linear-gradient(-150deg, transparent 1.5em, white 0%, white 100%);
  border-radius: 0.5em;
  div.mainpage {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &:before {
    z-index: 5;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
        to left bottom,
        transparent 50%,
        white 0,
        rgba(255, 255, 255, 1)
      )
      100% 0 no-repeat;

    width: 1.73em;
    height: 3em;
    transform: translateY(-1.3em) rotate(-30deg);
    transform-origin: bottom right;
    border-bottom-left-radius: inherit;
    box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.15);
  }
}

html,
body {
  margin: 0;
  padding: 0;
  background: #eef0f1;
}
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}
h2 {
  text-align: start;
  margin: 15px 0 8px 0;
}
hr {
  border: 6px solid #ec4848;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  cursor: pointer;
  color: #42b983;
}
p {
  text-align: start;
  margin: 0;
  padding: 0;
  hyphens: auto;
}
b {
  text-align: start;
}
</style>
