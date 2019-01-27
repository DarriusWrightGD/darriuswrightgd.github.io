<template>
    <div class="card">
        <slot/>
    </div>
</template>
<style>
.card {
    position: relative;
    text-align: center;
    padding: 1rem 2rem;
    background: white;
    box-shadow: 0 .1rem .2rem rgba(0,0,0,.3);
}
</style>
