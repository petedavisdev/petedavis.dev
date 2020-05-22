<template>
    <section>
        <div class="content">
            <slot />

            <label><input type="radio" v-model="choice" value="true"> True</label>
            <label><input type="radio" v-model="choice" value="false"> False</label>

            <p v-if="choice && choice == answer" class="correct">CORRECT</p>
            <p v-else-if="choice && choice != answer" class="wrong">WRONG!!!</p>
        </div>
        <div>
            <img :src="imgSrc" />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        answer: String,
        imgSrc: String
    },
    data() {
        return {
            choice: null
        }
    }
}
</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    max-width: 350px;
    margin: 2em auto;
    border-radius: 0.5em;
    background-color: #fff1;
    box-shadow: 0.1em 0.1em 0.5em 0.5em #0003;
}

.content {
    text-align: center;
    padding: 0 1em 1em;
}

img {
    box-sizing: border-box;
    padding: 0.5em;
}

label {
    display: inline-block;
    margin: 0.5em;
    padding: 0.5em;
    border-radius: 0.2em;
    border: 1px white solid;
}

.correct,
.wrong {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0;
}

.correct {
    color: lightgreen;
}

.wrong {
    color: pink;
}

</style>