<template>
  <div class="card2">
    <h2>工作经验</h2>
    <hr />

    <p class="liststyle" v-for="e in data.workExperience" :key="e.time">
      <strong>公司 : {{e.company}}</strong>
      <br />
      {{e.time}} | {{e.post}}
    </p>

    <h2>教育背景</h2>
    <hr />
    <p class="liststyle" :key="e.time" v-for="e in data.education">
      <strong>学校 : {{e.school}}</strong>
      <br />
      时间 : {{e.time}}
      <br />
      专业 : {{e.specialty}}
    </p>

    <h2>技能熟练度</h2>
    <hr />
    <div class="liststyle" :key="e.name" v-for="e in data.skill">
      <b>{{e.name}}</b>
      <el-progress :percentage="e.init" :stroke-width="16" :text-inside="true" status="exception"></el-progress>
    </div>
  </div>
</template>

<script>
import { constants } from 'crypto';
import { debuglog } from 'util';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    data: Object,
  },
  data() {
    return {};
  },
  methods: {
    setprogress(e) {
      let n = 0;
      const sn = setInterval(() => {
        n += 1;
        if (n === e.Proficiency) {
          e.init = e.Proficiency;
          clearInterval(sn);
        }
      }, 0);
    },
  },
  mounted() {
    setTimeout(() => {
      this.data.skill.forEach((element) => {
        this.setprogress(element);
      });
    }, 500);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card2 {
  position: relative;
  // background: #64e2c2;
  width: 338.8px;
  // width: 53%;
}

.liststyle {
  // display: flex;
  // justify-content: space-around;
  // flex-wrap: wrap;
  // min-height: 60px;

  margin-bottom: 8px;

  text-align: start;

  .el-progress {
    margin-bottom: 9px;
  }
  .el-tag {
    margin-top: 6px;
  }
}
</style>
