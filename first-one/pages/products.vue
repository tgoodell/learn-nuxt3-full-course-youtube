<script setup>
// const { data: productCount, pending } = await useAsyncData("products", () =>
//     $fetch("api/products")
// );

const { data: productCount, pending } = await useLazyAsyncData("products", () =>
    $fetch("api/products")
);

const refresh = () => refreshNuxtData("products");
</script>

<template>
    <div>
        <p>{{ pending ? "Loading" : productCount }}</p>
        <button @click="refresh">Refresh</button>
    </div>
</template>