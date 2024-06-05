<template>
  <div class="left-sidebar">
    <div class="header">
      <button class="menu-button">
        <icon name="svg:menu" />
      </button>
      <div class="link-wrap">
        <nuxt-link :to="localePath('/casino')" class="link-btn casino">
          <button>
            <span>{{ $t("casino") }}</span>
          </button>
        </nuxt-link>
        <nuxt-link :to="localePath('/sports')" class="link-btn sports">
          <button>
            <span>{{ $t("sports") }}</span>
          </button>
        </nuxt-link>
      </div>
    </div>
    <div class="content">
      <div class="inner-content scrollY">
        <div class="section-wrapper">
          <nuxt-link :to="localePath('/favourite')" exact>
            <button>
              <icon name="svg:favourite" />
              <span>{{ $t("favourite") }}</span>
            </button>
          </nuxt-link>
          <nuxt-link :to="localePath('/recent')" exact>
            <button>
              <icon name="svg:recent" />
              <span>{{ $t("recent") }}</span>
            </button>
          </nuxt-link>
        </div>

        <lang-change />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LangChange from "~/components/lang-change.vue";
</script>

<style scoped lang="less">
.left-sidebar {
  --z-index: 900;

  word-wrap: break-word;
  position: relative;
  background: #0f212e;
  filter: drop-shadow(0 0 5px rgba(25, 25, 25, 0.25));
  display: flex;
  flex-direction: column;
  z-index: var(--z-index);
  flex-shrink: 0;
  height: 100%;
  will-change: margin-left;
  width: 240px;

  > .header {
    display: flex;
    padding: 0 var(--space-4) 0 0;
    touch-action: none;
    box-shadow: var(--shadows-lg);
    height: var(--header-height);

    .menu-button {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      min-width: 3.75rem;
      height: 3.75rem;
      border-radius: var(--radius-base);
    }

    .link-wrap {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      width: 100%;

      .link-btn {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: var(--space-9);
        border-radius: var(--radius-base);
        color: var(--white);
        font-size: var(--text-size-default);
        font-weight: 700;
        text-shadow:
          0 1px 2px rgba(0, 0, 0, 0.12),
          0 1px 3px rgba(0, 0, 0, 0.2);
        user-select: none;

        &.casino {
          background-image: url(https://mediumrare.imgix.net/casino-poker-cards-en.jpg?auto=format&w=78);

          &.active,
          &:hover {
            background-image: url(https://mediumrare.imgix.net/casino-poker-cards-green-en.jpg?auto=format&w=78);
          }
        }

        &.sports {
          background-image: url(https://mediumrare.imgix.net/sports-balls-en.jpg?auto=format&w=78);

          &.active,
          &:hover {
            background-image: url(https://mediumrare.imgix.net/sports-balls-orange-en.jpg?auto=format&w=78);
          }
        }
      }
    }
  }

  > .content {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-content: flex-start;
    padding: 0;
    touch-action: pan-x;
    flex: 1;

    .inner-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      overscroll-behavior: contain;
      padding: var(--space-4);
      padding-right: 0.6rem;

      :deep(.section-wrapper) {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        background-color: #1a2c38;
        border-radius: var(--radius-base);

        a {
          button {
            color: #fff;
            font-weight: 600;
            border: none;
            font-size: 0.875rem;
            border-radius: calc(0.5rem - 4px);
            width: 100%;
            background: none;
            padding: 0.8125rem 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition-duration: 0.1s;
          }

          &.active,
          &:hover {
            button {
              background-color: rgba(47, 69, 83, 1);
            }
          }

          &:active {
            button {
              transform: scale(0.95);
            }
          }
        }
      }
    }
  }

  .mobile-view({
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    transform: translateX(-100%);
  });
}
</style>
