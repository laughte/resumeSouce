<style scoped>
.tool {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* background: pink; */
}
.el-form {
  width: 450px;
  /* position: absolute; */
  /* background: rgb(233, 236, 236); */
}
.leftside {
  /* top: 0; */
  margin-left: 5px;
}
.rightside {
  /* top: 10px; */
  margin-right: 10px;
}
.bluractive {
  filter: blur(5px);
}
.noblur {
  filter: blur(0px);
}
</style>

<template>
  <div class="tool">
    <el-form
      :model="$store.state.personinfo[$store.state.datacount]"
      :rules="rules"
      class="leftside"
      ref="form"
      label-width="90px"
    >
      <h2>基本信息</h2>
      <el-form-item label="姓名:" prop="name">
        <el-input v-model="$store.state.personinfo[$store.state.datacount].name"></el-input>
      </el-form-item>
      <el-form-item label="性别:" prop="sex">
        <el-radio-group v-model="$store.state.personinfo[$store.state.datacount].sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
          <el-radio label="第三性别"></el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- <el-form-item label="性别:" prop="sex">
        <el-input v-model="$store.state.personinfo[$store.state.datacount].sex"></el-input>
      </el-form-item>-->
      <el-form-item label="年龄:" prop="age">
        <el-input v-model.number="$store.state.personinfo[$store.state.datacount].age"></el-input>
      </el-form-item>
      <el-form-item label="手机:" prop="tel">
        <el-input v-model.number="$store.state.personinfo[$store.state.datacount].tel"></el-input>
      </el-form-item>
      <el-form-item label="email:" prop="email">
        <el-input v-model="$store.state.personinfo[$store.state.datacount].email"></el-input>
      </el-form-item>
      <el-form-item label="求职岗位:" prop="post">
        <el-input v-model="$store.state.personinfo[$store.state.datacount].post"></el-input>
      </el-form-item>
      <el-form-item label="期望薪资:" prop="salary">
        <el-input v-model="$store.state.personinfo[$store.state.datacount].salary"></el-input>
      </el-form-item>
      <el-form-item label="工作时间:" prop="workWay">
        <el-radio-group v-model="$store.state.personinfo[$store.state.datacount].workWay">
          <el-radio label="全职"></el-radio>
          <el-radio label="兼职"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="github:">
        <el-input v-model="$store.state.personinfo[$store.state.datacount].github"></el-input>
      </el-form-item>
      <el-form-item label="blog:">
        <el-input v-model="$store.state.personinfo[$store.state.datacount].blog"></el-input>
      </el-form-item>
      <h2>工作经验</h2>
      <el-form-item label="公司:">
        <el-input v-model="work.company"></el-input>
      </el-form-item>
      <el-form-item label="时间:">
        <el-input v-model="work.time"></el-input>
      </el-form-item>
      <el-form-item label="职位:">
        <el-input v-model="work.post"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addworkitem">添加工作</el-button>
        <el-button @click="resetwork">重置工作</el-button>
      </el-form-item>
    </el-form>

    <div class="perapp">
      <div
        class="mainpage"
        ref="mainpage"
        :class="isblur[$store.state.personinfo[$store.state.datacount].perinfoflag]"
      >
        <HelloWorld :data="$store.state.personinfo[$store.state.datacount]" />
        <card1 :data="$store.state.personinfo[$store.state.datacount]" />
        <card2 :data="$store.state.personinfo[$store.state.datacount]" />
        <div class="arstyle">
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
          <div class="around"></div>
        </div>
      </div>

      <transition appear>
        <perinfo
          :data="$store.state.personinfo[$store.state.datacount]"
          v-show="$store.state.personinfo[$store.state.datacount].perinfoflag"
        />
      </transition>
    </div>

    <el-form
      label-position="left"
      :model="$store.state.personinfo[$store.state.datacount]"
      :rules="rules"
      class="rightside"
      ref="form"
      label-width="80px"
    >
      <h2>教育背景</h2>
      <el-form-item label="学校:">
        <el-input v-model="education.school"></el-input>
      </el-form-item>
      <el-form-item label="时间:">
        <el-input v-model="education.time"></el-input>
      </el-form-item>
      <el-form-item label="专业:">
        <el-input v-model="education.specialty"></el-input>
      </el-form-item>
      <el-form-item size="medium">
        <el-button type="primary" @click="addeduitem">添加学校</el-button>
        <el-button @click="resetedu">重置学校</el-button>
      </el-form-item>
      <h2>工作技能</h2>
      <el-form-item label="技能:">
        <el-input v-model="skill.name"></el-input>
      </el-form-item>
      <el-form-item label="熟练度:">
        <el-slider v-model="skill.Proficiency"></el-slider>
        <!-- <el-input v-model="skill.Proficiency"></el-input> -->
      </el-form-item>
      <el-form-item size="medium">
        <el-button type="primary" @click="addskillitem">添加技能</el-button>
        <el-button @click="resetskill">重置技能</el-button>
      </el-form-item>
      <h2>自我评价</h2>
      <el-form-item prop="evaluation">
        <el-input
          rows="5"
          type="textarea"
          v-model="$store.state.personinfo[$store.state.datacount].evaluation"
        ></el-input>
      </el-form-item>
      <h2>职业规划</h2>
      <el-form-item prop="careerPlanning">
        <el-input
          rows="6"
          type="textarea"
          v-model="$store.state.personinfo[$store.state.datacount].careerPlanning"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">{{$store.state.clicktype}}</el-button>
        <el-button @click="unSubmit">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { deflate } from "zlib";
import HelloWorld from "./HelloWorld.vue";
import card1 from "./card1.vue";
import card2 from "./card2.vue";
import perinfo from "./personinfo.vue";

export default {
  name: "tool",
  components: {
    HelloWorld,
    card1,
    card2,
    perinfo
  },
  data() {
    return {
      isblur: { true: "bluractive", false: "noblur" },
      skill: {
        name: "",
        init: 0,
        Proficiency: 0
      },
      education: { school: "", time: "", specialty: "" },
      work: { company: "", time: "", post: "" },
      peranimate: { true: " jackInTheBox", false: "rollOut" },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            min: 2,
            max: 9,
            message: "长度在 2 到 9 个字符",
            trigger: "blur"
          }
        ],
        sex: [{ required: true, message: "性别不能为空" }],
        age: [
          { required: true, message: "年龄不能为空" },
          { type: "number", message: "年龄必须为数字值" }
        ],
        post: [{ required: true, message: "内容不能为空", trigger: "blur" }],
        salary: [{ required: true, message: "内容不能为空", trigger: "blur" }],
        tel: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { type: "number", message: "号码必须为数字值" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        evaluation: [
          { required: true, message: "请输入相关内容", trigger: "blur" },
          {
            min: 50,
            max: 200,
            message: "长度在 50 到 200 个字符",
            trigger: "blur"
          }
        ],
        careerPlanning: [
          { required: true, message: "请输入相关内容", trigger: "blur" },
          {
            min: 50,
            max: 200,
            message: "长度在 50 到 200 个字符",
            trigger: "blur"
          }
        ],
        workWay: [
          { required: true, message: "请选择活工作方式", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          switch (this.$store.state.clicktype) {
            case "立即创建":
              this.$store.commit("saveStorageData");
              break;
            case "确认修改":
              this.$store.commit("saveStorageData");
              break;
            case "删除":
              break;
              break;
          }
          this.$store.commit("showtool");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    unSubmit() {
      switch (this.$store.state.clicktype) {
        case "立即创建":
          this.$store.commit("showtool", { title: "取消创建" });
          break;
        case "确认修改":
          this.$store.commit("showtool", { title: "取消修改" });
      }
    },
    addworkitem() {
      // this.form.workExperience.push(this.work);
      this.$store.commit("appendworkitem", this.work);
      this.work = {};
    },
    resetwork() {
      // this.form.workExperience = [];
      this.$store.commit("resetwork");
    },
    addeduitem() {
      // this.form.education.push(this.education);
      this.$store.commit("appendeduitem", this.education);
      this.education = {};
    },
    resetedu() {
      // this.form.education = [];
      this.$store.commit("resetedu");
    },
    addskillitem() {
      // this.form.skill.push(this.skill);
      this.$store.commit("appendskillitem", this.skill);
      this.skill = { init: 0 };
    },
    resetskill() {
      // this.form.skill = [];
      this.$store.commit("resetskill");
    }
  }
};
</script>
