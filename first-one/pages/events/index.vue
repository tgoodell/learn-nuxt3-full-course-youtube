<script setup lang="ts">
definePageMeta({
    middleware: "auth"
})
</script>

<template>
    <div class="Main">
        <Alert />
        <Profile />
        <ProfileHeader />
        <ProfileHeaderAvatar />
    </div>
</template>