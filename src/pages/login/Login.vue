<template>
  <body>
        <div id="container-login" class="container">
            <h1>Dashboard Póstero</h1>
            <p>Faça login em nossa plataforma :)</p>
            <form id="login" class="formlogin">
                <input v-model="userEmail" type="email" name="inputEmail" placeholder="digite seu e-mail">
                <input v-model ="userPassword" type="password" name="inputPassword" placeholder="digite sua senha">
            <button type="submit" class="btn-login" @click.prevent="login()">Entrar</button>
            </form>
            <p><a href="#" title="Esqueceu?">Esqueceu a senha?</a></p>
            <br>
            <p class="footer">Copyright © 2018-2021. Póstero Dashboard. Todos os direitos reservados</p>
        </div>
  </body>
</template>

<script>

export default {
  name: 'LoginComponent',
  data(){
    return{
      userEmail: "",
      userPassword: ""
    }
  },
  methods: {
    login(){
      alert("Login realizado com sucesso 🎉\n\nE-mail: "+this.userEmail)
      this.$router.replace('dash')
    }
  }
}
</script>

<style scoped src="./style.css"/>