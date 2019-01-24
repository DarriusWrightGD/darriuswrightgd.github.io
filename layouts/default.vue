<template>
  <div data-aos="fade-in">
    <div class="bg-image"></div>
    <div class="main-layout">
      <overlay/>
      <div class="layout-center">
        <div class="layout-title">
          <h1>Darrius Wright</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
    </div>
    <nuxt/>
    <footer-section/>
  </div>
</template>
<script>
import Overlay from '~/components/shared/Overlay/Overlay.vue'
import FooterSection from '~/components/FooterSection/FooterSection'
export default {
  components: {
    Overlay,
    FooterSection
  }
}
</script>


<style lang="scss">
@import "~assets/main";

html {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: $background-color;


  @include respond(mobile) {
    font-size: 30%;
  }

  @include respond(mobile-land) {
    font-size: 35%;
  }

  @include respond(tablet) {
    font-size: 40%;
  }

  @include respond(tab-port) {
    font-size: 50%;
  }

  @include respond(tab-land) {
    font-size: 60%;
  }

  @include respond(big-desktop) {
    font-size: 85%;        
  }

}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1,h2,h3,h4,h5 {
  font-family: 'Slabo 27px', serif;
}

.bg-image {
  position: absolute;
  width: 100%;
  height: 100vh;
  filter: blur(4px);
  -webkit-filter: blur(4px);
  background-image: url('/img/background1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
}

.main-layout {
  position: relative;
  height: 100vh;
  margin-bottom: 2rem;
}

.layout-center {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.layout-title {
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  padding: 1.5rem 3rem;
  color: white;
}

.layout-title h2 {
  font-weight: lighter;
}



h1 {
  font-size: 4rem;
  text-transform: uppercase;
}

h2 {
  font-size: 2.2rem;
}

section {
  width: 100%;
  padding-bottom: 3rem;
}

.section-title {
  border-bottom: 2px solid black;
  display: inline-block;
  padding: 0 3rem;
}

span,p {
  font-size: 2rem;
}

</style>
