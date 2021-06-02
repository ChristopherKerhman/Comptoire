<template>
  <div class="home">
  <coupes/>
  </div>
</template>

<script>
// @ is an alias to /src
import coupes from '@/components/coupes.vue'

export default {
  name: 'Home',
  components: {
    coupes
  }
}
</script>
