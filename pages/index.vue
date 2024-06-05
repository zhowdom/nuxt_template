<template>
  <div class="home">
    <div class="currency-items">
      <div class="item" v-for="item in currencyItems" :key="item.currency">
        <div class="row">
          <icon :name="`svg:currency-${item.currency?.toLowerCase()}`" />
          <span>{{ item.currencyRealname }}</span>
        </div>
        <span class="rate">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const response = await useFetch("/api/web/hall/platform", { method: "post" });

const {
  data: currencyItems,
  pending,
  refresh,
}: any = await useAsyncData(async () => {
  console.log("useAsyncData");
  console.log(`process.server => `, process.server);

  const { data } = await useRequest("/api/web/currencyRatio/list", { method: "post" });
  return data.value;
});

// const response = await useRequest("/api/web/hall/platform", { method: "post" });
</script>

<style scoped lang="less">
.home {
  padding: var(--space-3) 0;

  .currency-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--space-3);

    .item {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: var(--space-3);

      .row {
        display: flex;
        align-items: center;

        * + * {
          margin-left: var(--space-2);
        }
      }

      .rate {
        font-size: 12px;
      }
    }
  }
}
</style>
