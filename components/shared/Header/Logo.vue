<template>
    <div class="logo">
        <!-- <span class="software">
            <span v-for="(letter, index) in 'Software'" :key="letter">
                <span :class="'char'+index">{{letter}}</span>
            </span>
        </span>
        <span class="by">by</span>
        <h1 class="logo-name">
            Wright
        </h1> -->
        <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <text x="-100" y="90" class="software">S</text> 
            <text x="-65" y="80" class="software">o</text> 
            <text x="-30" y="65" class="software">f</text> 
            <text x="0" y="50" class="software">t</text> 
            <text x="28" y="50" class="software">w</text> 
            <text x="65" y="65" class="software">a</text>
            <text x="95" y="80" class="software">r</text> 
            <text x="125" y="90" class="software">e</text> 
            <text x="0" y="90" class="pre-text">by</text> 
            <text x="-100" y="130" class="name">wright</text>        </svg>
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
        fill: white;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase; 
        align-self: flex-start;   

        svg {
            width: 6rem;
            height: 4rem;
        }

        .pre-text {
            font-size: 40px;
            letter-spacing: 10px;
        }
        .name {
            font-family: 'Slabo 27px';
            letter-spacing: 20px;
            font-size: 40px;
        }

        > span {
            display: block;
            text-align: center;
        }

        span {
            font-size: 1rem;
        }

        .software {
            font-size: 40px;

            // $charCount: 8;
            // $startY: 160;
            // $maxY: 40;
            // $yMove: $maxY/($charCount/2);

            // @for $i from 0 through $charCount {
            //     $yPosition: $startY - $yMove *  abs($i - ( ($charCount - 1) /2 ) ) - $maxY;
                
            //     .char#{$i} {
            //         display:block;
            //         position:absolute;
            //         transform: translateX(calcX(8, $i, $charCount) + px) translateY( $yPosition + px);
            //     }
            // }
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
