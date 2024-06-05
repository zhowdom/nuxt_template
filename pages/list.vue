<template>
  <div class="list">
    <div class="item" v-for="item in list">
      <span>{{ item.name }}</span>
      <span>{{ item.email }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: list } = useFetch("https://jsonplaceholder.typicode.com/users");

definePageMeta({
  title: "List",
  description: "List of users",
  keepalive: true,
});
</script>

<style lang="postcss">
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;

  .item {
    border-bottom: 10px;
    background-color: #ececec;
    border-radius: 5px;
    padding: 20px;
  }
}
</style>
