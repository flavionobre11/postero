<template>
    <div id="dash">
        <div id="container-1" class="container" style="margin-top:0rem;">
            <P id="user" class="title">Olá, Flávio</p>
            <p>bem-vindo à nossa dash ❤️</p>
            <p style="margin:-13px 0 0 0;">O que vamos fazer?</p>
            
        </div>
        <div id="container-2" class="container">
            <div class="btn-container">
                <Options title="Clientes" description="Crie, consulte e organize os clientes." color="Tomato" route="clientes"/>
                <Options title="Notas" description="Cadastre, consulte e edite as notinhas." color="rgb(24, 109, 61)" />
                <Options title="Modelos" description="Cadastre, consulte e edite os modelos." color="rgb(216, 30, 61)" />
                <Options title="Pedidos" description="Registre os pedidos novos e antigos." color="rgb(88, 26, 146)" />
            </div>
        </div>
        <div id="container-3" class="container">
            <h1>Pedidos Pendentes</h1>
        </div>

        <div id="container-4" class="container footer">
            <p>Copyright © 2018-2021. Póstero Dashboard. Todos os direitos reservados</p>
        </div>
    </div>
</template>

<script>
import Options from "./Options"
export default {
    name: 'DashComponent',
    components:{
        Options
    }
}
</script>

<style scoped src="./style.css"/>