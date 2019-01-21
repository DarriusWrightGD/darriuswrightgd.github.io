<template>
    <footer>
        <h1 class="footer-title">Contact Me</h1>
        <div class="contact-section">
            <div class="contact-message">
                <h2>Thanks for stopping by!</h2>
            </div>
            <div class="contact-form">
                <h2>Send me a message!</h2>
                <form action="https://formspree.io/darriuswrightgd@gmail.com" method="POST" >
                    <input type="text" name="name">
                    <textarea name="message" cols="30" rows="10"></textarea>
                    <input type="submit" class="btn footer-btn">
                </form>
            </div>
        </div>
        
    </footer>
</template>
<script>
</script>

<style scoped lang="scss">
    @import '~/assets/_styles.scss';

    footer {
        background: black;
        color: white;

        .footer-title {
            // text-align: center;
        }

        h1 {
            padding: 2rem;
        }

        .contact-section {
            display: flex;
            justify-content: space-between;
            padding: 2rem;
            width: 100%;

            form {
                display: flex;
                flex-direction: column;
                // width: 100%;
                input, textarea {
                    margin: 1rem auto;
                    width: 100%;
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
