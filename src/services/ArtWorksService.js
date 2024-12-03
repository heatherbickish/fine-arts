import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Artwork } from "@/models/ArtWork.js"
import { AppState } from "@/AppState.js"

class ArtWorksService {
  async getArtWorks() {
    const response = await api.get('api/artworks')
    const artworks = response.data.artworks.map(artPojo => new Artwork(artPojo))
    AppState.artworks = artworks
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }


}
export const artWorksService = new ArtWorksService()