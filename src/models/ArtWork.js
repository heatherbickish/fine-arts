export class Artwork {
  constructor(data) {
    this.id = data.id
    this.color = data.color
    this.description = data.description
    this.imgUrl = data.imgUrls.regular
    this.slug = data.slug
    this.attribution = data.attribution
    this.height = data.height
    this.width = data.width
  }
}