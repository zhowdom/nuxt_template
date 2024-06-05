<template>
  <div class="section-wrapper">
    <nuxt-link v-for="locale in locales">
      <button @click="change(locale.code)">
        <icon :name="`circle-flags:${locale.iso}`" />
        <span>{{ locale.name }}</span>
      </button>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const { locales, setLocale } = useI18n();

const change = (lang: string) => {
  setLocale(lang);
};
</script>

<style scoped lang="less"></style>
