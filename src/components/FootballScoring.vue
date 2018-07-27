// background image: https://www.istockphoto.com/jp/%E3%83%99%E3%82%AF%E3%82%BF%E3%83%BC/%E3%83%95%E3%83%83%E3%83%88%E3%83%9C%E3%83%BC%E3%83%AB-%E3%82%B5%E3%83%83%E3%82%AB%E3%83%BC-%E3%83%9E%E3%83%83%E3%83%81%E3%81%AE%E7%B5%B1%E8%A8%88%E9%87%8F-gm807994878-130980021

<template>
  <div class="container">
    <p class="message">メッセージ: {{ msg }}</p>

  </div>
</template>

<style>
.message { color: #42b983; }

</style>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'サッカースコアページ'
    }
  }
}
</script>
