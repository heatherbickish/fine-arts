import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Artwork } from "@/models/ArtWork.js"
import { AppState } from "@/AppState.js"

class ArtWorksService {
  async getArtWorks() {
    const response = await api.get('api/artworks')
    const artworks = response.data.artworks.map(artPojo => new Artwork(artPojo))
    AppState.artworks = artworks
    logger.log(artworks)
  }


}
export const artWorksService = new ArtWorksService()