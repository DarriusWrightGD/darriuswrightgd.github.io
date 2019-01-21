<template>
    <header class="header">
        <div>
            <h1>Darrius Wright</h1>
            <!-- <h2>Software Engineer</h2> -->
        </div>
        <Navbar/>
    </header>
</template>
<script>
import Navbar from '~/components/shared/Navbar/Navbar.vue'
export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>
/* 0acdcd */
    .header {
        width: 100%;
        background: rgba(0,0,0,0);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        position: absolute;
        top: 0;

    }


</style>
