<template>
     <form 
        action="https://tinyletter.com/petedavisdev" 
        method="post" 
        target="popupwindow" 
        onsubmit="window.open('https://tinyletter.com/petedavisdev', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
        <h3>Join my mailing list</h3>
        <div class="field">
            <label for="tlemail">Email</label>
            <input type="text" name="email" id="tlemail" />
        </div>

        <input type="hidden" value="1" name="embed"/>
        <button>Subscribe</button>
    </form>
</template>

<style lang="stylus" scoped>
form
    max-width 450px
    margin 5em auto

h3
    text-align center
</style>