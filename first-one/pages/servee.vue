<script setup>
const response = await $fetch("/api/hello");
console.log(response);
</script>

<template>
    <div>
        <h1>Hello from the Server</h1>
    </div>
</template>

<style lang="scss"></style>