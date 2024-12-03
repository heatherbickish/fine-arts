<script setup>
import { artWorksService } from "@/services/ArtWorksService";
import { logger } from "@/utils/Logger";
import Pop from "@/utils/Pop";
import { onMounted } from "vue";


onMounted(()=> {
  logger.log('On mount is working')
  getArtWorks()
})


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
  <p>hey hey</p>
</template>

<style scoped lang="scss"></style>
