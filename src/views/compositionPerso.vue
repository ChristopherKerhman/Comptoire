<template>
  <h4 class="titre_h1">Faite vos choix de glaces et supplément</h4>
  <panier/>
  <createur/>
</template>
<script>
import panier from '@/components/commande.vue'
import createur from '@/components/design.vue'
export default {
  name: 'composition',
  components: {
    panier,
    createur
  }
}
</script>
