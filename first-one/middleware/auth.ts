export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = false;
    // to is destination
    if (isLoggedIn) {
        // redirect to page we want to go
        return navigateTo(to.fullPath);
    }
    // redirect to login
    return navigateTo("/login");
});