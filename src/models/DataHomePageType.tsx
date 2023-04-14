export interface DataHomePageType {
  items: DataHomePageItem[]
  hasMore: boolean
  total: number
}

export interface DataHomePageItem {
  sectionType: string
  viewType?: string
  title?: string
  link?: string
  sectionId?: string
  items: any
  adId?: string
  pageType?: string
  itemType?: string
  options?: Options
  subTitle?: SubTitle
  banner?: string
  type?: string
  chart?: Chart
  chartType?: string
}

export interface Options {
  autoSlider?: boolean
  hideArrow?: boolean
  hideTitle?: boolean
}

export interface SubTitle {
  encodeId?: string
  cover?: string
  thumbnail: string
  thumbnailHasText?: string
  thumbnailR?: string
  title: string
  link: string
  description?: string
  id?: string
  name?: string
  spotlight?: boolean
  alias?: string
  thumbnailM?: string
  isOA?: boolean
  isOABrand?: boolean
  playlistId?: string
}

export interface Chart {
  times: Time[]
  minScore: number
  maxScore: number
  items: Items
  totalScore: number
}

export interface Time {
  hour: string
}

export interface Items {
  Z677ODE7: Z677Ode7[]
  Z6600ZCO: Z6600Zco[]
  Z67CFZDA: Z67Cfzda[]
}

export interface Z677Ode7 {
  time: number
  hour: string
  counter: number
}

export interface Z6600Zco {
  time: number
  hour: string
  counter: number
}

export interface Z67Cfzda {
  time: number
  hour: string
  counter: number
}

export enum TextType {
  Album = 'Album',
  Ep = 'EP',
  Playlist = 'Playlist',
  Single = 'Single',
}

export enum UserName {
  ZingMP3 = 'Zing MP3',
}

export enum ViewType {
  Slider = 'slider',
}
