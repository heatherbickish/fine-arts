<script setup>
import { AppState } from "@/AppState";
import { artWorksService } from "@/services/ArtWorksService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { onMounted } from "vue";


onMounted(()=> {
  logger.log('On mount is working')
  getArtWorks()
})

const artworks = AppState.artworks

async function getArtWorks(){
  try {
    await artWorksService.getArtWorks()
  } catch (error) {
    logger.error('Getting artworks', error)
    Pop.error(error)
  }
}


</script>

<template>
<div class="container">
  <section class="row">
    <div class="col">
      
      <h4>CodeWorks Institute Of Art</h4>
    </div>
  </section>
  <section class="row">
    <div class="col">
      {{ artworks }}
    </div>
  </section>

</div>
</template>

<style scoped lang="scss"></style>
