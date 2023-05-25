<script setup>
import { useCounterStore } from "~/stores/myStore";

const store = useCounterStore();
console.log(store);
</script>

<template>
    <div>Hello!</div>
</template>

<style lang="scss"></style>