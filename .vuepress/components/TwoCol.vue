<template>
<section class="grid">
    <div>
        <slot name="col1"></slot>
    </div>
    <div>
        <slot name="col2"></slot>
    </div>
</section>
</template>

<style lang="stylus" scoped>
.grid
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 1em
</style>