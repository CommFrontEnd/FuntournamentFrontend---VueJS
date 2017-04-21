<template>
    <form>
        <h1>Inscription</h1>
        <div class="group-form">
            <label>Nom</label>
            <input type="text">
        </div>
        <div class="group-form">
            <label>Email</label>
            <input type="text">
        </div>
        <div class="group-form">
            <label>Password</label>
            <input type="password">
        </div>
    </form>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>