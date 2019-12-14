<template>
    <section>
        <a v-for="post in latestPosts" :href="post.path">
            <img :src="post.frontmatter.thumbnail" alt />
            {{ post.title }}
        </a>
    </section>
</template>

<script>
export default {
    computed: {
        latestPosts() {
            return this.$site.pages
                .filter(page => {
                    return page.regularPath.includes("/_posts/");
                })
                .sort((a, b) => {
                    return a.frontmatter.date > b.frontmatter.date ? 1 : -1;
                });
        }
    }
};
</script>

<style scoped>
a {
    display: block;
    margin-top: 1rem;
}
img {
    width: 16vw;
    height: 9vw;
    object-fit: cover;
    vertical-align: middle;
}
</style>