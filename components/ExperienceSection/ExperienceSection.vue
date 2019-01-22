<template>
    <content-section title="Experience">
        <div class="experience-group">
            <div v-for="exp in experience" class="experience-item" data-aos="fade-in" data-aos-delay="200" :key="exp.company">
                    <div class="experience-time">
                        <span>{{exp.from}} - {{exp.to}}</span>
                    </div>
                    <div class="divider"></div>
                    <experience   v-bind="exp"/>
            </div>
        </div>
    </content-section>
</template>

<script>
import Experience from '~/components/ExperienceSection/Experience/Experience'
import ContentSection from '~/components/shared/ContentSection/ContentSection'
import { mapGetters } from 'vuex'
export default {
    components: {
        Experience,
        ContentSection
    },
    computed: {
        ...mapGetters('experience', ['experience'])
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_mixins.scss';

.experience-item {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;

    @include respond(tablet) {
        margin: 6rem 0;
        position: relative;

        &:not(:last-child):before {
            content: "";
            position: absolute;
            left: 6rem;
            top: 12rem;
            width: 1px;
            height: calc(100% - 6rem);
            background-color: #e6e6e6;
        }
    }
}

.experience-time {
    display: none;
    
    @include respond(tablet) {
        height: 12rem;
        width: 12rem;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: 5px solid blue;

        span {
            font-size: 1.4rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // color: white;
            font-weight: lighter;
            width: 100%;
        }
    }
}

.divider {
    display: none;

    @include respond(tablet) {
        display:inline-block;
        flex-grow: 1;
        align-self: flex-start;
        padding-top: 6rem;
        border-bottom: 1px solid blue;
    }
}

</style>


