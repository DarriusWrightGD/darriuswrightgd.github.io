<template>
  <div class="container">
    <about-section data-aos="slide-up"/>
    <experience-section data-aos="slide-right"/>
    <skills-section data-aos="slide-left"/>
    <education-section data-aos="slide-up"/>
  </div>
</template>

<script>
import AboutSection from '~/components/AboutSection/AboutSection'
import SkillsSection from '~/components/SkillsSection/SkillsSection'
import ExperienceSection from '~/components/ExperienceSection/ExperienceSection'
import EducationSection from '~/components/EducationSection/EducationSection'
export default {
  components: {
    AboutSection,
    SkillsSection,
    ExperienceSection,
    EducationSection
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
