<template>
  <div class="app-wrap">
    <left-sidebar />
    <main class="main-content">
      <top-navigation />
      <div class="scrollable scrollY">
        <div class="container-wrapper">
          <div class="container">
            <slot></slot>
          </div>
        </div>
        <footer class="footer">
          <div class="container-wrapper">
            <div class="container">footer</div>
          </div>
        </footer>
      </div>
      <mobile-footer />
    </main>
    <right-sidebar />
  </div>
</template>

<script setup lang="ts">
import LeftSidebar from "~/components/left-sidebar.vue";
import TopNavigation from "~/components/top-navigation.vue";
import MobileFooter from "~/components/mobile-footer.vue";
import RightSidebar from "~/components/right-sidebar.vue";
</script>

<style lang="less">
.app-wrap {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .mobile-view({
    flex-direction: column;
  });

  .main-content {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;

    > .scrollable {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 100%;
      height: 100%;
      flex: 1;

      .container-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 3vw;
      }

      .mobile-view({
        padding-top: var(--header-height);
        padding-bottom: var(--mobile-footer-height);
      });
    }

    > .mobile-footer {
      height: var(--mobile-footer-height);
      background-color: #0f212e;
      display: none;
      z-index: 1300;
      justify-items: center;
      width: 100%;
      line-height: 1;
      padding: 0 1rem;
      box-shadow: 0 5px 5px #0a1c2766;
      overflow: hidden;
      position: fixed;
      bottom: 0;

      .mobile-view({
        display: flex;

        .button-wrap {
          display: flex;
          justify-content: center;
          position: relative;
          width: 100%;

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            > * + * {
              margin-top: 5px;
            }
          }
        }
      });
    }
  }
}
</style>
