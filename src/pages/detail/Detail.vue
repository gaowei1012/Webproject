<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list='list'></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "二级票页面"
            },
            {
              title: "二级票页面",
              children: [
                {
                  title: "二级票页面-11"
                },
                {
                  title: "二级票页面-22"
                }
              ]
            }
          ]
        },
        {
          title: "儿童票",
          children: [
            {
              title: "二级票页面"
            }
          ]
        },
        {
          title: "优惠票"
        }
      ]
    };
  }
};
</script>


<style lang='stylus' scoped>
.content {
    height: 40rem;
}
</style>