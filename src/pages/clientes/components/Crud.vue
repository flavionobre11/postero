<template>
    <div id="change">
        <div id="crud" v-if="crud === 'cadastrar'">
            <img src="../assets/add-user.svg" alt="logo" class="icon-user"/>
            <h1>Cadastrar um cliente</h1>
            <p class="tag-p">Crie um novo contato agora mesmo!</p>
        </div>

        <div id="crud" v-else-if="crud === 'editar'">
            <img src="../assets/edit-user.svg" alt="logo" class="icon-user"/>
            <h1>Editar um cliente</h1>
            <p class="tag-p">Faça as edições necessárias. Ah, não esquece de salvar, ok? :)</p>
        </div>

    </div>

</template>

<script>
export default {
    props:{
        crud: String
    }

}
</script>

<style scoped src="../style.css"/>