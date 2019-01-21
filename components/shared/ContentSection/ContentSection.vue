<template>
    <section>
        <h1 class="section-title">{{title}}</h1>
        <div class="section-content">
            <slot/>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.section-content {
    padding: 3rem;
}
</style>

