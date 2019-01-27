<template>
    <content-section id="about-me" title="About Me">

        <div class="about-content">
            <div class="about-image"></div>
            <div class="services">
                <Card class="service" v-for="service in services" :key="service.ability">
                    <fa-icon class="service-icon" :icon="['fas', service.icon]"/>
                    <h1>{{service.ability}}</h1>
                    <span>{{service.description}}</span>
                </Card>
            </div>
            <!-- <p class="about-message">
                I'm a Software Engineer that loves everything involving programming. I've programmed in all sorts of different languages such as C++, C#, Python, and JavaScript. The projects that I have worked on range from personal projects in Machine Learning to professional works in creating deployment workflows to managing websites for companies. No matter the project, I always take the same pride in my work and make sure to deliver the highest quality results possible.
            </p> -->
        </div>
    </content-section>
</template>
<script>
// code, cloud, chalkboard-teacher, book
import ContentSection from '~/components/shared/ContentSection/ContentSection'
import Card from '~/components/shared/Card/Card'
import { mapGetters } from 'vuex'
export default {
    components: {
        ContentSection,
        Card
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
            background-image: url('/img/about-me.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .services {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .service {
                flex: 0 0 80%;
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
                    font-size: 1.5rem;
                }
            }
        }
    }
</style>
