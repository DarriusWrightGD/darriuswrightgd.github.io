<template>
    <div class="logo">
        <svg viewBox="0 0 180 260" xmlns="http://www.w3.org/2000/svg">
            <text x="-100" y="150" class="software">S</text> 
            <text x="-50" y="120" class="software">o</text> 
            <text x="-5" y="100" class="software">f</text> 
            <text x="35" y="80" class="software">t</text> 
            <text x="85" y="80" class="software">w</text> 
            <text x="150" y="100" class="software">a</text>
            <text x="200" y="120" class="software">r</text> 
            <text x="250" y="150" class="software">e</text> 
            <text x="40" y="150" class="pre-text">by</text> 
            <text x="-100" y="220" class="name">wright</text>
        </svg>
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
            font-size: 80px;
            letter-spacing: 10px;
        }
        .name {
            font-family: 'Slabo 27px';
            letter-spacing: 20px;
            font-size: 80px;
        }

        > span {
            display: block;
            text-align: center;
        }

        span {
            font-size: 1rem;
        }

        .software {
            font-size: 80px;

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
