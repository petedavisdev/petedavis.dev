<template>
<section class="profile-card">
    <img class="profile-img" :src="$attrs.imgSrc" />
    <div>
        <small>Profile</small>
        <slot /> <!-- This is where your content will be inserted -->
    </div>
</section>
</template>

<style scoped>
.profile-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    max-width: 400px;
    border: white 1px solid;
    border-radius: 0.5em;
    align-items: center;
}

.profile-img {
    box-sizing: border-box;
    padding: 1em;
    border-radius: 50%;
}
</style>