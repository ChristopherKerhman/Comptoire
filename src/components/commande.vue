<template>
  <button>Total de la commande : {{panierClient.toFixed(2)}} €</button>
  <ul>
    <li v-for="detail in commande" v-bind:key="detail">
      {{detail}}
    </li>
    <li v-for="coulis in coupeCreateurPerso" v-bind:key="coulis">
      {{coulis}}
    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'commande',
  computed: {
    ...mapState(['panierClient', 'commande', 'coupeCreateurPerso'])
  }
}
</script>
<style scoped>
button {
  background-color: #BEE3DB;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bolder;
  border: 2px #89B0AE solid;
}
</style>
