<template>
    <card class="experience">
            <div class="experience-title">
                <h2>{{company}}</h2>
                <h3 v-for="jobTitle in jobTitles" :key="jobTitle">{{jobTitle}}</h3>
            </div>
            <div class="experience-time">
                {{from}} - {{to}}
            </div>
            <ul class="accomplishments">
                <li v-for="accomplishment in accomplishments" :key="accomplishment">
                    <p>{{accomplishment}}</p>
                </li>
            </ul>
            <div class="technologies">
                <h3 class="technologies-title">Technologies Used</h3>
                <span v-for="(tech, index) in technologiesUsed" :key="tech">
                    {{tech}}<span v-if="index < technologiesUsed.length-1">, </span>
                </span>
            </div>
    </card>
</template>
<script>
import Card from '~/components/shared/Card/Card'
export default {
    props: {
        jobTitles: {
            type: Array,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        accomplishments: {
            type: Array,
            required: true
        },
        technologiesUsed: {

        }
    },
    components: {
        Card
    }
}
</script>

<style scoped lang="scss">
@import '~/assets/main.scss';

.experience {
    // text-align: left;
    width: 40rem;
    min-height: 60rem;
    display: flex;
    flex-direction: column;

    .experience-title, .technologies-title {
        padding: 2rem 0 0;
        @include respond(tablet) {
            padding: 2rem 0;
        }
    }

    .experience-time {
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: bold;

        @include respond(tablet) {
            display: none;
        }
    }

    h2 {
        font-size: 3.2rem;
    }

    h3 {
        font-size: 2.2rem;
    }

    ul {
        text-align: left;
    }

    .technologies {
        margin-top: auto;
        margin-bottom: 2rem;
        padding: 0 2rem;
    }
}
</style>
