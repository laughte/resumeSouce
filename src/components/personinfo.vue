<template>
  <div class="per">
    <i @click="data.perinfoflag =!data.perinfoflag" class="el-icon-circle-close"></i>
    <h2>联系方式</h2>
    <hr />
    <p>
      <b>tel:</b>
      {{data.tel}}
      <br />
      <b>email:</b>
      {{data.email}}
    </p>
  </div>
</template>  


<script>
export default {
  name: "personinfo",
  props: { data: Object, n: Number },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.per {
  border-radius: 8px;
  top: 325px;
  left: 140px;
  position: absolute;
  text-align: start;
  padding: 0 8px 8px;
  width: 350px;
  height: 160px;
  background: rgba(255, 255, 255, 0.8);
  p {
    b {
      letter-spacing: 1px;
    }
  }
  .el-icon-circle-close {
    position: absolute;
    right: 8px;
    top: 8px;
    font-size: 18px;
    transition: all 0.1s;
    &:hover {
      transform: rotate(90deg);
    }
  }
}
</style>