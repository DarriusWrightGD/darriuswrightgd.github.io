<template>
    <div class="nav">
        <div>
            <fa-icon class="nav-icon" @click="navClosed=!navClosed" :icon="['fas', 'bars']"/>
        </div>
        <!--  -->
        <div class="nav-bar" :class="{'mobile-hide': navClosed}" >
            <ul class="nav-items" >
                <li class="nav-item" v-for="navItem in navItems" :key="navItem.name">
                    <a href="#" @click="navClosed=!navClosed" v-scroll-to="navItem.scrollTo">{{navItem.name}}</a>   
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navClosed: true,
            navItems: [
                {
                    name: "About",
                    scrollTo: "#about-me"
                },
                {
                    name: "Experience",
                    scrollTo: "#experience"
                },
                {
                    name: "Skills",
                    scrollTo: "#skills"
                },
                {
                    name: "Education",
                    scrollTo: "#education"
                },
                {
                    name: "Contact",
                    scrollTo: "#contact"
                }
            ]
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
            color: white;
            font-size: 4rem;
            display: block;
            align-self: flex-end;
            margin-left: auto;

            @include respond(tablet) {
                display: none;
            }
        }

        .nav-bar {
            z-index: 15;
        }

        .nav-items {
            display: flex;
            flex-direction: column;
            margin-top: 3rem;
            margin-left: auto;

            // flex-direction: row;
            list-style: none;
            color: white;
            font-size: 2rem;
            font-weight: bold;

            @include respond(tablet) {
                flex-direction: row;
                margin-top: 0;
            }
            

            .nav-item {
                position:relative;
                padding: 1rem 2rem;

                @include respond(tablet) {
                    padding: 0 2rem;
                }

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
