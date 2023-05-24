<script setup>
// const { sayHello } = useUtils();
// sayHello();

const { $sayHello } = useNuxtApp();
$sayHello("Tristan");

// console.log(useNuxtApp());
</script>

<template>
    <div class="Main">
        <h1>Hello Nuxt3</h1>
        <!-- If images are in assets folder 
            <img src="@/assets/1.png" alt="First image" />
        <img src="@/assets/2.png" alt="Second image" /> -->

        <IconsBell />

        <img src="/1.png" alt="First image" />
        <img src="/2.png" alt="Second image" />
    </div>
</template>