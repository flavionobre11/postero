<template>
    <div class="btn-container">
        <button 
            @click.prevent="clients()"
            id="clientes" 
            class="btn-postero" 
            v-bind:style="'background-color: '+ $props.color">
                {{ title }}
                <p>{{ description }}</p>
        </button>
    </div>
</template>

<script>
export default {
    name: "Options",
    props:{
        title: String,
        description: String,
        color: String,
        route: String
    },
    methods: {
        clients(){
            this.$router.push(this.$props.route)
            this.$router.go();
        }
    }

}
</script>

<style scoped src="./style.css"/>