<template>
    <div class='skill'>
        <progress-circle :progress="progress"/>
        <div class="skill-name">{{name}}</div>
    </div>
</template>
<script>
import ProgressCircle from '~/components/shared/ProgressCircle/ProgressCircle'
export default {
    components: {
        ProgressCircle
    },
    props: {
        progress: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>
    .skill {
        display: flex;
        flex-direction: column;
    }
    .skill .skill-name {
        font-size: 2.5rem;
        margin-top: 2rem;
        letter-spacing: 1.5px;
        font-weight: lighter;
    }
</style>

