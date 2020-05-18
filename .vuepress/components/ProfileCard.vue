<template>
<section class="profile-card">
    <img class="profile-img" :src="$attrs.imgSrc" />
    <div>
        <slot /> <!-- This is where your content will be inserted -->
    </div>
</section>
</template>

<style scoped>
.profile-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1em;
    max-width: 350px;
    margin: 2em auto;
    border-radius: 0.5em;
    background-color: #fff1;
    box-shadow: 0.1em 0.1em 0.5em 0.5em #0003;
}

.profile-img {
    box-sizing: border-box;
    padding: 1em;
    border-radius: 50%;
}
</style>