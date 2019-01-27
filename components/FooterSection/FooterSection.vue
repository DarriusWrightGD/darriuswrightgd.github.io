<template>
    <footer id="contact">
        <h1 class="footer-title">Contact</h1>
        <div class="contact-section">
            <!-- <div class="contact-message">
                <h2>Thanks for stopping by!</h2>
            </div> -->
            <div class="contact-form">
                <!-- <h2>Send me a message!</h2> -->
                <form action="https://formspree.io/darriuswrightgd@gmail.com" method="POST" >
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <textarea name="message" cols="30" rows="10" placeholder="Leave a message and I'll get back to you as soon as I can!"></textarea>
                    <input type="submit" class="btn footer-btn">
                </form>
            </div>
        </div>
        
    </footer>
</template>

<style scoped lang="scss">
    @import '~/assets/_styles.scss';

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
                    margin: .5rem auto;
                    width: 40rem;
                }
                .footer-btn {
                    margin-left: auto;
                }
            }
        }

        .contact-message, .contact-form {
            width: 100%
        }
    }
</style>
