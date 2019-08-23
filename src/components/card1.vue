<template>
  <div class="card1">
    <h2>求职意向</h2>
    <hr />
    <div class="ph">
      <p>
        <b>岗位:</b>
        {{data.post}}
      </p>

      <p>
        <b>薪资:</b>
        {{data.salary}}
      </p>

      <p>
        <b>工作时间:</b>
        {{data.workWay}}
      </p>
    </div>
    <h2>自我评价</h2>
    <hr />
    <p class="content">{{data.evaluation}}</p>
    <h2>职业规划</h2>
    <hr />
    <p class="content">{{data.careerPlanning}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card1 {
  letter-spacing: 2px;
  position: relative;
  // background: #64e2c2;
  width: 263.5px;
  height: auto;

  // &:hover {
  //   .around {
  //     &:nth-child(even) {
  //       margin-top: 0;
  //     }
  //   }
  // }

  .ph {
    p {
      margin-top: 6px;
    }
  }
  p {
    text-align: justify;
  }
}
</style>
