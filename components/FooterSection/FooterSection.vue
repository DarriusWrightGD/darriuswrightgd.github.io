<template>
    <footer id="contact">
        <h1 class="footer-title">Contact</h1>
        <div class="contact-section">
            <div class="contact-form">
                <form action="https://formspree.io/darriuswrightgd@gmail.com" method="POST" >
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <textarea name="message" cols="30" rows="10" placeholder="Leave a message and I'll get back to you as soon as I can!"></textarea>
                    <input type="submit" class="btn footer-btn">
                </form>
            </div>
            <div class="social">
                <a href="https://github.com/DarriusWrightGD">
                    <fa-icon class="nav-icon" :icon="['fab', 'github-square']"/>
                </a>
                <a href="https://www.linkedin.com/in/darrius-wright/">
                    <fa-icon class="nav-icon" :icon="['fab', 'linkedin']"/>
                </a>
            </div>
            <div class="copy">
                © {{ new Date().getFullYear() }} <span>Darrius Wright</span>. All rights reserved.
            </div>
        </div>
        
    </footer>
</template>


<style scoped lang="scss">
    @import '~/assets/main.scss';

    footer {
        background: black;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;


        .footer-title {
            // text-align: center;
            border-bottom: 2px solid white;
            margin: 1rem auto;
            padding: 0 2rem;

        }


        .contact-section {
            // display: flex;
            // justify-content: space-between;
            padding: 2rem;
            // width: 100%;

            form {
                display: flex;
                flex-direction: column;
                // width: 100%;
                input, textarea {
                    font-family: 'Roboto Condensed' sans-serif;
                    margin: .5rem auto;
                    width: 20rem;
                    resize: none;
                    
                    @include respond(mobile-land) {
                        width: 40rem;
                    }
                }
                .footer-btn {
                    margin-left: auto;
                }
            }
        }

        .contact-message, .contact-form {
            width: 100%
        }

        .social {
            padding-top: 5rem;
            
            a {
                color: white;
                font-size: 5rem;
                margin: 1rem;

                &:hover {
                    color: $primary-color;
                }
            }
        }

        .copy {
            padding-top: 2rem;
            font-size: 1.8rem;
            span {
                font-size: 2rem;
                font-weight: bold;
            }
        }
    }
</style>
