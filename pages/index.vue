<template>
  <div class="relative">
    <transition :appear="true">
      <div class="bg-topimg h-[70vh] bg-cover lg:h-[100vh] bg-no-repeat"></div>
    </transition>

    <transition name="fadein">
      <h1
        class="text-[20px] lg:text-[80px] text-white w-[100%] text-center absolute top-10 font-ui"
        v-if="show"
      >
        仕事もプライベートもすっきり整理
      </h1>
    </transition>
    <transition name="fadeinbutton">
      <div
        class="absolute  w-screen text-center bottom-[100px] lg:bottom-[200px]"
        v-if="show"
      >
        <nuxt-link to="/register">
          <button
            type="button"
            class="w-32 h-20 inline-block rounded-3xl animate-bounce bg-yellow-400 shadow lg:rounded-full lg:text-2xl font-ui font-bold lg:w-60 lg:h-24"
          >
            会員登録はこちら
          </button>
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    // テキストを表示させるフラグ
    const show = ref(false);
    // テキストを表示
    const showtext = () => {
      show.value = true;
    };
    // 2秒後（背景が表示されたら）テキストを浮かび上がらせる
    window.setTimeout(showtext, 2000);
    return { show };
  },
});
</script>

<style scoped>
/* 背景のアニメーション */
.v-enter-active {
  transition: opacity 2s 0.5s;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
/* テキストのアニメーション */
.fadein-enter-active {
  transition: opacity 2s, transform 2s;
}
.fadein-enter {
  opacity: 0;
  transform: translateY(100px);
}
.fadein-enter-to {
  opacity: 1;
  transform: translateX(0);
}
/* ボタンのアニメーション */
.fadeinbutton-enter-active {
  transition: opacity 2s;
}
.fadeinbutton-enter {
  opacity: 0;
}
.fadeinbutton-enter-to {
  opacity: 1;
}
</style>
