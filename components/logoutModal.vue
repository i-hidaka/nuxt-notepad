<template>
  <div>
    <div
      class="h-screen w-screen flex flex-col items-center justify-center bg-gray-400 bg-opacity-80 font-sans"
    >
      <div
        class="h-screen  w-full absolute flex items-center justify-center bg-modal"
      >
        <div
          class="!bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center overflow-y-scroll"
        >
          <div class="mb-4"></div>
          <div class="mb-8">
            <p>ログアウトしてよろしいですか？</p>
          </div>
          <div class="flex justify-center">
            <button
              class="mr-2 flex-no-shrink text-white py-2 px-4 rounded bg-blue-700"
              type="button"
              @click="logout()"
            >
              ログアウト
            </button>
            <button
              class="flex-no-shrink text-white py-2 px-4 rounded bg-blue-700"
              type="button"
              @click="cancel()"
            >
              キャンセル
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(props, context) {
    const store = useStore();
    const router = useRouter();
    /**
     * ログアウトする.
     */
    const logout = () => {
      // storeのログイン情報を削除する
      store.commit("logOutFlag");
      // 親に"childFalseModal"としてメソッドを渡す
      context.emit("childFalseModal");
      // ログアウトしたらトップページへ飛ばす
      router.push("/");
    };
    /**
     * ログアウトをキャンセルする.
     */
    const cancel = () => {
      // 親に"childFalseModal"としてメソッドを渡す
      context.emit("childFalseModal");
    };
    return { logout, cancel };
  },
});
</script>

<style></style>
