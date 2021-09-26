<template>
  <div id="app">
    <HelloWorld />
    <h2>通过自己封装的axios来请求</h2>
    <p>{{ list }}</p>
    <button @click="ajaxTest">自己写回调函数</button>
    <p>{{ testList }}</p>

    <button @click="interceptors">拦截器</button>
    <p>{{ test2List }}</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { ajax } from "./network/ajax";
import { ajax2 } from "./network/ajax";
import { ajax3 } from "./network/ajax";

export default {
  name: "App",
  data() {
    return {
      list: "",
      testList: "",
      test2List: "",
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    ajaxTest() {
      ajax2({
        baseConfig: {
          url: "/gd/getList",
          params: {
            page: 1,
            limit: 2,
            share: 0,
            token:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IiJ9.eyJpc3MiOiJodHRwOlwvXC8xMC42LjYuNyIsImF1ZCI6Imh0dHA6XC9cLzEwLjYuNi43IiwianRpIjoiIiwiaWF0IjoxNjMyNjE4NTE3LCJuYmYiOjE2MzI2MTg1MjMsImV4cCI6MTYzMjY2MTcxNywidXNlcm5hbWUiOiJhZG1pbiIsInVpZCI6MTAwMCwicXgiOjk5LCJncyI6MCwiYm0iOjAsInpiIjowfQ.ARqjDsZKTnvSk4RUgouuyPTEflL2itJavqfoXrWrId4",
          },
        },
        success: (res) => {
          // 成功回调,这里层层必须用箭头函数,还能让this的指针指向本组件,普通函数定义方式,this指向本函数所在对象,而箭头函数没有this,它会层层网上层找,直到找到this
          //console.log(this);
          this.testList = res.data.data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    },
    interceptors() {
      // 使用拦截器
      ajax3({
        url: "/gd/getlist",
        params: {
          page: 1,
          limit: 2,
          share: 0,
        },
      })
        .then((res) => {
          // 使用拦截器过滤了相关数据,只剩下data
          console.log(res);
          this.test2List = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    ajax({
      url: "/gd/getList",
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
};
</script>

<style>
</style>
