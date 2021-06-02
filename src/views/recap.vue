<template>
  <h3 class="titre_h1">Recapitulatif de la commande</h3>
  <panier/>
</template>
<script>
import panier from '@/components/commande.vue'
export default {
  name: 'commandeClient',
  components: {
    panier
  }
}
</script>
