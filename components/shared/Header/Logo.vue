<template>
    <div class="logo">
        <span class="software">
            <span v-for="(letter, index) in 'Software'" :key="letter">
                <span :class="'char'+index">{{letter}}</span>
            </span>
        </span>
        <span class="by">by</span>
        <h1 class="logo-name">
            Wright
        </h1>
    </div>

</template>
<style lang="scss" scoped>
    @import '~/assets/main.scss';

    @function calcX($maxX, $index, $charCount) {
        $xMove: $maxX/$charCount;
        @return $xMove * $index;
    }

    .logo {
        color:white;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;      

        > span {
            display: block;
            text-align: center;
        }

        span {
            font-size: 1rem;
        }

        .software {
            $charCount: 8;
            $maxY: 1.5;
            $yMove: $maxY/($charCount/2);

            @for $i from 0 through $charCount {
                $yPosition: $yMove *  abs($i - ( ($charCount - 1) /2 ) ) - $maxY;
                
                .char#{$i} {
                    display:block;
                    position:absolute;
                    transform: translateX(calcX(8, $i, $charCount) + rem) translateY( $yPosition + rem);

                    @include respond(tab-land) {
                        transform: translateX(calcX(7.8, $i, $charCount) + rem) translateY( $yPosition + rem); 
                    }

                    @include respond(big-desktop) {
                        transform: translateX(calcX(7, $i, $charCount) + rem) translateY( $yPosition + rem); 
                    }
                }
            }
        }

        .by {
            letter-spacing: 5px;
        }

        h1 {
            font-size: 1rem;
            letter-spacing: 7px;
        }
    }

    
</style>
