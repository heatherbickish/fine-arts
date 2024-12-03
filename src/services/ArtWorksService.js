import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ArtWorksService {
  async getArtWorks() {
    const response = await api.get('api/artworks')
    logger.log('Got artworks', response.data)
  }


}
export const artWorksService = new ArtWorksService()