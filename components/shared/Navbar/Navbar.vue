<template>
    <div class="nav">
        <div>
            <!-- <fa-icon class="nav-icon" @click="navClosed=!navClosed" :icon="['fas', 'bars']"/> -->
        </div>
        <ul class="nav-items" :class="{'mobile-hide': navClosed}">
            <li class="nav-item">
                <a href="#" v-scroll-to="'#about-me'">About</a>   
            </li>
            <li class="nav-item">
                <a href="#" v-scroll-to="'#experience'">Experience</a>
            </li>
            <li class="nav-item">
                <a href="#" v-scroll-to="'#skills'">Skills</a>
            </li>
            <!-- <li class="nav-item">
                <a href="#" v-scroll-to="'#education'">Education</a>
            </li> -->
            <li class="nav-item">
                <a href="#" v-scroll-to="'#contact'">Contact</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navClosed: false
        }
    }
}
</script>

<style scoped lang="scss">
    @import '~/assets/main.scss';
    .nav {
        display: flex;
        flex-direction: column;
        .nav-icon {
            // position: fixed;
            color: white;
            font-size: 4rem;
            // height: 6rem;
            display: block;
            // position: absolute;
            // right: 0;
            // top: 0;
            // margin: 2rem;
        }

        .nav-items {
            display: flex;
            flex-direction: row;
            list-style: none;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            // margin-top: 6rem;

            .nav-item {
                position:relative;
                padding: 0 1rem;
                a {
                    cursor: pointer;

                    &,
                    &:link,
                    &:visited {
                        color: white;
                        text-decoration: none;
                        display: inline-block;
                    }

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        .mobile-hide {
            display: none;
            @include respond(tablet) {
                display: flex;
            }
        }
    }
</style>
