<template>
    <div class="experience">
        <div>
            <div class="experience-title">
                <h2>{{company}}</h2>
                <h3 v-for="jobTitle in jobTitles">{{jobTitle}}</h3>
            </div>

            <!-- <span>
                <strong>{{company}}</strong> - <i>{{jobTitle}}</i> ( <i>{{from}} - {{to}}</i> )
            </span> -->
            <ul>
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
        </div>
    </div>
</template>
<script>
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
    }
}
</script>

<style scoped lang="scss">
.experience {
    text-align: left;

    padding: 2rem 4rem;
    width: 40rem;
    min-height: 60rem;
    box-shadow: 0 .1rem .2rem rgba(0,0,0,.3);
    opacity: 1;
    position: relative;

    .experience-title, .technologies-title {
        width: 100%;
        text-align: center;
        padding: 2rem 0;
    }

    .technologies {
        text-align: center;
    }

    h2 {
        font-size: 3.2rem;
    }

    h3 {
        font-size: 2.2rem;
        text-align: center;
    }
}
</style>
