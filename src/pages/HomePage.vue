<script setup>
import { AppState } from "@/AppState";
import { artWorksService } from "@/services/ArtWorksService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";


onMounted(()=> {
  logger.log('On mount is working')
  getArtWorks()
})

const artworks =computed(()=> AppState.artworks)

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
      <div class="m-4">
        <h4><em>CodeWorks Institute Of Art</em></h4>
      </div>
    </div>
  </section>
  <section class="row">
    <div v-for="artwork in artworks" :key="artwork.id" class="col-md-3">
      <img :src="artwork.imgUrl" alt="" class="img-fluid m-3">
    </div>
  </section>

</div>
</template>

<style scoped lang="scss"></style>
