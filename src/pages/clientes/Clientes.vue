<template>
  <div id="clientes" class="body">
      <div class="container-clientes">
            <div id="formulario" class="container form-container">
                
                <!-- aqui troca-se a imagem e o texto
                    de acordo com o que o usuário quer. -->
                <Crud :crud="crud"/>

                <a class="collapse">+ informações pessoais</a>
                <form id="pessoal" class="form-client">
                    <label class="form-label" for="inputName">Nome:</label>
                    <input v-model="cliente.name" class="form-input" type="text" name="inputName" id="inputName" placeholder="ex. Vitoria Vee">
                    <label class="form-label" for="inputTel">Telefone:</label>
                    <input v-model="cliente.tel" class="form-input" type="text" name="inputTel" id="inputTel" placeholder="apenas números">
                    <label class="form-label" for="inputTam">Tamanho:</label>
                    <input v-model="cliente.lastOrder" class="form-input" type="text" name="inputTam" id="inputTam" placeholder="ex. M ou 38">   
                </form>
                <hr>

                <a class="collapse">+ endereço</a>
                <form id="endereco" class="form-client">
                    <label class="form-label" for="inputRua">Endereço:</label>
                    <input v-model="cliente.address.rua" class="form-input" type="text" name="inputRua" id="inputRua" placeholder="ex. Rua Waldir Hebert, 230" autocomplete="off">
                    <label class="form-label" for="inputBairro">Bairro:</label>
                    <input v-model="cliente.address.bairro" class="form-input" type="text" name="inputBairro" id="inputBairro" placeholder="ex. Pajuçara" autocomplete="off">
                    <label class="form-label" for="inputCidade">Cidade:</label>
                    <input v-model="cliente.address.cidade" class="form-input" type="text" name="inputCidade" id="inputCidade" placeholder="ex. Maracanaú" autocomplete="off">   
                    <label class="form-label" for="inputUF">Estado:</label>
                    <select v-model="cliente.address.uf" name="inputUF" class="form-input select" id="inputUF" required autocomplete="off">
                            <option value="">Selecione seu estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                </form>
                <hr>
                <button type="submit" class="btn" @click="registrar()">Registrar</button>
            </div>

            <div id="formulario" class="container list">
                <Lista :cliente="cliente"/>
            </div>
      </div>

  </div>
</template>

<script>

import Crud from './components/Crud'
import Lista from './components/Lista'

export default {
    name: 'ClienteComponent', 
    components:{
        Crud,
        Lista
    },

    data(){
        return{
            crud: 'cadastrar',
            cliente: {
                name: 'flávio playsson o louco',
                tel: '85998992039',
                lastOrder: '13/12/2020',
                address:{
                    rua: 'rua 15 de novembro 87',
                    bairro: 'piratininga',
                    cidade: 'maracanau',
                    uf: 'CE'
                }
            }
        }
    },

    methods:{
        registrar: function (){
            this.cliente.name = 'flavito';
        },

        collapseMethod: function () {
            var coll = document.getElementsByClassName("collapse");
            var i;
            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.maxHeight){
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    } 
                });
            }
        }
    },

    mounted(){
        // script para collapse (esconder/mostrar itens)
        this.collapseMethod();
    },
}
</script>

<style scoped src="./style.css"/>