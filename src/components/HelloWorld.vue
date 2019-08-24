<template>
  <div class="hello">
    <el-tooltip class="item" effect="dark" content="点击删除" placement="bottom">
      <div v-show="$store.state.setflag" class="sanjiaoxing" @click="deleteitem(n)"></div>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="点击修改内容" placement="bottom">
      <i class="el-icon-setting" v-show="$store.state.setflag" @click="modifyitem(n)"></i>
    </el-tooltip>

    <p class="times" v-text="data.time"></p>
    <!-- <h2 @mouseover="$store.commit('showperinfofunc',n)">{{data.name}}</h2> -->
    <el-tooltip class="item" effect="dark" content="点击查看详细信息" placement="bottom">
      <h2 @click="data.perinfoflag =!data.perinfoflag">{{data.name}}</h2>
    </el-tooltip>

    <br />

    <div class="otheritem">
      <p>
        {{data.post}} |
        <a :href="data.blog">BLOG</a> |
        <a :href="data.github">GITHUB</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    data: Object,
    n: Number
  },
  methods: {
    opmsg(e) {
      const h = this.$createElement;
      if (e === "删除") {
        this.$message({
          message: h("p", null, [
            h("span", { style: "color: red" }, "点击删除内容 ")
          ])
        });
      } else if (e === "修改") {
        this.$message({
          message: h("p", null, [
            h("span", { style: "color: teal" }, "点击修改内容 ")
          ])
        });
      }
    },
    modifyitem(n) {
      this.$store.commit({ type: "modifyitem", index: n, title: "确认修改" });
    },
    deleteitem(n) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.commit("deleteItem", { index: n, title: "删除" });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  // overflow: hidden;
  background: #ec4848;
  // border-radius: 0.5em;
  position: relative;
  width: 100%;
  height: 100px;
  .el-icon-setting {
    opacity: 0.1;
    position: absolute;
    font-size: 25px;
    top: 5px;
    left: 85px;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  .times {
    position: absolute;
    bottom: 5px;
    left: 5px;
  }
  .sanjiaoxing {
    position: absolute;
    // height: 10px;
    // width: 10px;
    // left: 49px;
    transform: rotate(105deg);
    transition: all 2s;
    box-shadow: 5px 5px 5px yellow inset;
    border-top: 50px solid rgba(255, 0, 0, 0);
    // border-bottom: 50px solid rgba(0, 141, 0, 0);
    border-left: 50px solid rgba(255, 218, 5, 0.8);

    // border-right: 50px solid purple;
  }
  h2 {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 1vw;
    letter-spacing: 4px;
  }
  .otheritem {
    position: absolute;
    bottom: 5px;
    right: 1vw;
    p {
      a {
        color: #2c3e50;
      }
      a:link {
        text-decoration: none;
      }
      a:active {
        text-decoration: blink;
      }
      a:visited {
        text-decoration: none;
      }
    }
  }
}
</style>
