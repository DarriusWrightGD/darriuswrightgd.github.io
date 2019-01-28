<template>
    <card class="service">
        <fa-icon class="service-icon" :icon="['fas', icon]"/>
        <h1>{{ability}}</h1>
        <span>{{description}}</span>
    </card>
</template>
<script>
import Card from '@/components/shared/Card/Card'
export default {
    props: {
        ability: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
    },
    components: {
        Card
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/main.scss';

    .service {
        flex: 0 0 100%;
        margin: 2rem;
        @include respond(mobile-land) {
            flex: 0 0 40%;
        }
        @include respond(tab-land) {
            flex: 0 0 20%;
        }
        min-height: 40rem;
        .service-icon {
            font-size: 8rem;
            margin: 2rem 0;
            color: $primary-color;
        }
        h1 {
            font-size: 2rem;
            padding-bottom: 2rem;
        }
        span {
            font-size: 2rem;
        }
    }
</style>

