<template>
  <div id="lista">
    <h1>Contatos</h1>
    <div id="cliente"> {{ cliente.name }}
      <table>
        <thead>

            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Telefone</th>
                <th scope="col">Ultimo Pedido</th>
                <th scope="col">OPÇÕES</th>
            </tr>

        </thead>

        <tbody>

            <tr v-for="(cliente, index) in clientes" :key="index">
                <th scope="row">{{ index+1 }}</th>
                <td>{{ cliente.name }}</td>
                <td>{{ cliente.tel }}</td>
                <td>{{ cliente.lastOrder }}</td>
            </tr>

        </tbody>
    
    </table>

    </div>
  </div>
  

</template>

<script>

export default {
  name: 'ListaClientes',
  data(){
    return{
      dados:{
        name: this.cliente.name,
        tel: this.cliente.tel,
        lastOrder: this.cliente.lastOrder,
        address: {
          rua: this.cliente.address.rua,
          bairro: this.cliente.address.bairro,
          cidade: this.cliente.address.uf,
          uf: this.cliente.address.uf
        }
      },
      clientes:[
        {
          name: 'Kellyn Romanoff',
          tel:'85998998923',
          lastOrder: '10/04/2020'  
        },
        {
          name: 'Flavito',
          tel:'85993333333',
          lastOrder: '10/04/2020'  
        },
        {
          name: 'Vitoria Vee',
          tel:'85998772631',
          lastOrder: '13/10/2019'  
        }
      ]
    }
  },
  props:{
    cliente: Object
  },
  methods:{
    // registrar(){

    // }
  }
}
</script>

<style scoped src="../style.css">