<template>
  <div class="hello">
    <h1>axios测试</h1>
    <button @click="get">请求数据</button>
    <p>结果:{{ list }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return { list: null };
  },
  props: {
    msg: String,
  },
  methods: {
    get() {
      // 使用全局的axios和对应的配置进行网络请求
      this.$axios({
        url: "/gd/getList",
        method: "post",
        // get(默认)请求用params,post请求用data
        params: {
          page: 1,
          limit: 2,
          share: 0,
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IiJ9.eyJpc3MiOiJodHRwOlwvXC8xMC42LjYuNyIsImF1ZCI6Imh0dHA6XC9cLzEwLjYuNi43IiwianRpIjoiIiwiaWF0IjoxNjMyNjE4NTE3LCJuYmYiOjE2MzI2MTg1MjMsImV4cCI6MTYzMjY2MTcxNywidXNlcm5hbWUiOiJhZG1pbiIsInVpZCI6MTAwMCwicXgiOjk5LCJncyI6MCwiYm0iOjAsInpiIjowfQ.ARqjDsZKTnvSk4RUgouuyPTEflL2itJavqfoXrWrId4",
        },
      }).then((res) => {
        this.list = res.data.data;
      });
    },
  },
};

// axios并发请求
// axios.all([请求一, 请求二]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
