<template>
    <content-section id="about-me" title="About Me">

        <div class="about-content">
            <div class="about-image"></div>
            <div class="services">
                <service class="hvr-grow-shadow" v-for="service in services" :key="service.ability" v-bind="service"/>
            </div>
        </div>
    </content-section>
</template>
<script>
// code, cloud, chalkboard-teacher, book
import ContentSection from '~/components/shared/ContentSection/ContentSection'
import Service from '~/components/shared/Service/Service'
import { mapGetters } from 'vuex'
export default {
    components: {
        ContentSection,
        Service
    },
    computed: {
        ...mapGetters('services', ['services'])
    }
}
</script>

<style lang="scss">
    @import '~/assets/main.scss';
    .about-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        // @include respond(tab-port) {
        //     flex-direction: row;
        // }

        .about-message {
            // display: block;
            flex: 0 0 50%;
            padding: 0 0;

            @include respond(tablet) {
                padding: 0 10rem;
            }
        }

        .about-image {
            // flex: 0 0 50%;

            height: 25rem;
            width: 25rem;
            border-radius: 50%;
            border: 5px solid black;
            margin-bottom: 2rem;
            background-image: url('/img/about-me-min.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .services {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>
