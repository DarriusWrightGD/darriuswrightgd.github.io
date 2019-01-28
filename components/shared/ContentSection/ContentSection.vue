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

<style scoped lang="scss">
@import '@/assets/main.scss';

.section-content {
    padding: 1rem;

    @include respond(tablet) {
        padding: 3rem;
    }
}
</style>

