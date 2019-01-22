<template>
    <div>
        <svg 
            :height="height"
            :width="width">
            <circle
                :stroke-width="stroke"
                stroke="#e6e6e6"
                :stroke-dasharray="strokeDasharray"
                :stroke-dashoffset="circumference * 2"
                fill="transparent"
                :r="normalizedRadius"
                :cx="radius"
                :cy="radius"
            />
            <circle
                data-aos="progress-animation"
                :stroke-width="stroke"
                :stroke="color"
                :stroke-dasharray="strokeDasharray"
                :stroke-dashoffset="strokeDashoffset"
                fill="transparent"
                :r="normalizedRadius"
                :cx="radius"
                :cy="radius"
            />
        </svg>
        <span>{{progress}} %</span>
    </div>
</template>

<script>
export default {
    props: {
        stroke: {
            type: Number,
            default: 3
        },
        radius: {
            type: Number,
            default: 80
        },
        progress: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: 'blue'
        }
    },
    data() {
        const normalizedRadius = this.radius - this.stroke * 2;
        const circumference = normalizedRadius * 2 * Math.PI;

        return {
            normalizedRadius,
            circumference,
            height: this.radius * 2,
            width: this.radius * 2
        }
    },
    computed: {
        strokeDasharray() {
            return `${this.circumference} ${this.circumference}`
        },
        strokeDashoffset() {
            const offset = this.circumference - ( this.progress / 100 * this.circumference);
            return offset;
        }
    }
}
</script>


<style lang="scss" scoped>
div {
    position: relative;
}

div span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 2.2rem;
    font-weight: lighter;
}

// [data-aos="progress-animation"] {
//     stroke-dashoffset: 0;

//     &.aos-animate {
//         transition: stroke-dashoffset 2s;
//     }
// }

circle {
    transition: stroke-dashoffset 2s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}
</style>
