<template>
  <div class="right-sidebar">
    <div class="content">
      <div class="header">header</div>
      <div class="messages">
        <div class="message-content scrollY">
          <div class="wrap" v-for="i in 100">
            <div class="content">message is {{ i }}</div>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.right-sidebar {
  --width: 370px;
  --z-index: 900;

  word-wrap: break-word;
  will-change: margin-right;
  background: #0f212e;
  filter: drop-shadow(0 0 5px rgba(25, 25, 25, 0.25));
  z-index: var(--z-index);
  flex-shrink: 0;
  width: var(--width);

  > .content {
    height: 100%;
    display: flex;
    flex-direction: column;

    > .header {
      background: #0f212e;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--header-height);
      z-index: 2;
      position: relative;
      box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.2),
        0 4px 6px -2px rgba(0, 0, 0, 0.1);
      flex-shrink: 0;
      touch-action: none;
      padding-right: var(--scrollbar-size);
      padding-left: var(--space-4);
    }

    .messages {
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;
      position: relative;
      touch-action: none;

      .message-content {
        overflow-x: hidden;
        min-height: 0;
        transform: translateZ(0);
        overflow-y: scroll;
        word-break: break-word;
        padding: var(--space-2) var(--space-4);
        display: flex;
        flex-direction: column;
        overflow-anchor: none;
        overscroll-behavior: contain;

        > * + * {
          margin-top: var(--space-2);
        }

        .wrap {
          border-radius: 0.25rem;
          width: 100%;
          background: #213743;

          .content {
            padding: 0.5em 1em;
            width: 100%;
            color: #fff;
            font-size: 16px;
          }
        }
      }
    }

    .footer {
      position: relative;
      display: grid;
      align-items: center;
      padding: var(--space-4);
      row-gap: var(--space-2);
      background: #213743;
      grid-template-rows: auto;
      grid-template-columns: auto 1fr;
      grid-template-areas:
        "input input"
        "online actions";
      touch-action: none;
    }
  }

  .mobile-view({
    position: fixed;
    width: 100%;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    transform: translateX(100%);
  });
}
</style>
