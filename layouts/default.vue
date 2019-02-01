<template>
  <div data-aos="fade-in">
    <div class="bg-image"></div>
    <div class="main-layout">
      <overlay/>
      <main-header class="main-header"/>
      <div class="layout-center">
        <div class="layout-title">
          <h1>Darrius Wright</h1>
          <h2 class="job-title">Software Devloper</h2>
        </div>
        <a class="btn main-btn" v-scroll-to="'#about-me'">
          See More
        </a>
      </div>
    </div>
    <nuxt/>
    <footer-section/>
  </div>
</template>
<script>
import MainHeader from '~/components/shared/Header/Header'
import Overlay from '~/components/shared/Overlay/Overlay.vue'
import FooterSection from '~/components/FooterSection/FooterSection'
import Typed from 'typed.js'

export default {
  components: {
    MainHeader,
    Overlay,
    FooterSection
  },
  mounted() {
    const typed = new Typed('.job-title', {
      strings: [
        "",
        "Software Dev^200loper^800", 
        "Software Dev^200eolper^800", 
        "Software Dev^200opler^800", 
        "I write code"
      ],
      // startDelay: 2000,
      smartBackspace: true,
      typeSpeed: 30,
      backSpeed: 30,
      showCursor: false
    })
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
  overflow-x: hidden;


  @include respond(mobile) {
    font-size: 40%;
  }

  @include respond(mobile-land) {
    font-size: 45%;
  }

  @include respond(tablet) {
    font-size: 50%;
  }

  @include respond(tab-port) {
    font-size: 55%;
  }

  @include respond(tab-land) {
    font-size: 60%;
  }

  @include respond(big-desktop) {
    font-size: 75%;        
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
  background-image: url('/img/background-min.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -3;
}

.main-layout {
  position: relative;
  height: 100vh;
  margin-bottom: 2rem;
}

.btn.main-btn {
  margin: 5rem;
  font-size: 1.5rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  // position: absolute;
  // bottom: 5%;
  width: 15rem;
  // transform: translate(-35%, -50%)

}

.layout-center {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.layout-title {
  // position: absolute;
  // top: 50%;
  // transform: translate(0, -50%);
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  padding: 1.5rem 3rem;
  color: white;

  h2 {
    font-weight: lighter;
    font-size: 2.5rem;
    min-height: 2.5rem;
  }
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
