<template>
    <header class="header">
        <logo/>
        <navbar/>
    </header>
</template>
<script>
import Logo from '~/components/shared/Header/Logo.vue'
import Navbar from '~/components/shared/Navbar/Navbar.vue'
export default {
    components: {
        Navbar,
        Logo
    }
}
</script>

<style scoped>
    .header {
        position: relative;
        width: 100%;
        background: rgba(0,0,0,.9);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.5rem 2.5rem 1.5rem;
        z-index: 100;
    }
</style>
