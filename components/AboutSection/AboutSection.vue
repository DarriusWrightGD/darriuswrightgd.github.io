<template>
    <content-section title="About Me">
        <div class="about-content">
            <div class="about-image">

            </div>
            <p class="about-message">
                I'm a Software Engineer that loves everything involving programming. I've programmed in all sorts of different languages such as C++, C#, Python, and JavaScript. The projects that I have worked on range from personal projects in Machine Learning to professional works in creating deployment workflows to managing websites for companies. No matter the project, I always take the same pride in my work and make sure to deliver the highest quality results possible.
            </p>
        </div>
    </content-section>
</template>
<script>
import ContentSection from '~/components/shared/ContentSection/ContentSection'
export default {
    components: {
        ContentSection
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
    }
</style>
