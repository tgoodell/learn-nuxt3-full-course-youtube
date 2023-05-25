<script setup lang="ts">
useHead({
    title: "A cool page",
    meta: [
        { name: "description", content: "It's cool that you can see this description."}
    ],
    bodyAttrs: {
        class: "cool"
    },
    script: [
        { children: 'console.log(\'Hello world\')'}
    ],
})
</script>

<template>
    <div>SEO Time</div>
</template>