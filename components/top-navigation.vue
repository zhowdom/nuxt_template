<template>
  <div class="navigation">
    <div class="group">
      <div class="container">
        <div class="navigation-container">
          <div class="logo">
            <nuxt-link :to="localePath('/')">home</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.navigation {
  padding-right: var(--scrollbar-size);
  width: 100%;
  z-index: 100;
  background: #1a2c38;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow:
    #0003 0 4px 6px -1px,
    #0000001f 0 2px 4px -1px;
  touch-action: none;

  .mobile-view({
    position: fixed;
    top: 0;
  });

  .group {
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: 0 3vw;
    display: flex;
    align-items: center;
    flex-direction: column;

    .navigation-container {
      position: relative;
      height: var(--header-height);
      display: grid;
      width: 100%;
      align-items: center;
      grid-template-columns: 1fr auto 1fr;
      gap: var(--space-4);
    }
  }
}
</style>
