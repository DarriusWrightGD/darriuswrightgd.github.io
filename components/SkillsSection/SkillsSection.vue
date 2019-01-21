<template>
    <content-section title="Skills">
        <div class="skills-list">
            <div class="skills-list-item" v-for="skill of skills" :key="skill.name" >
                <skill :name="skill.name" :progress="skill.progress" />            
            </div>
        </div>
    </content-section>
</template>
<script>
import {mapGetters} from 'vuex';
import Skill from '~/components/SkillsSection/Skill/Skill'
import Card from '~/components/shared/Card/Card'
import ContentSection from '~/components/shared/ContentSection/ContentSection'
export default {
    components: {
        Skill,
        Card,
        ContentSection
    },
    computed: {
        ...mapGetters('skills', ['skills'])
    }
    
}
</script>
<style lang="scss" scoped >
    @import '~assets/main';
    .skills-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .skills-list-item {
            display: inline-block;
            flex: 0 0 100%;
            padding-bottom: 5rem;

            

            @include respond(tablet) {
                flex: 0 0 50%;
            }

            @include respond(tab-land) {
                flex: 0 0 25%;
            }
            
            // @include respond()
        }
    }

    
</style>


