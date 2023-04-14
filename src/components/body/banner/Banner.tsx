/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect, useRef } from 'react'
import './Style.css'
import { type DataHomePageItem } from '../../../models/DataHomePageType'
import { homePageData } from '../../../assets/data/homePageData'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

export default function Banner (): JSX.Element {
  const [bannerLength, setBannerLength] = useState(0)
  const [banner, setBanner] = useState<DataHomePageItem[]>([])
  const [indexs, setIndexs] = useState<number[]>([0, 1, 2])

  const bannerControllerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = homePageData.items.filter(item => item.sectionType === 'banner')[0]
    setBannerLength(banner.items.length)

    const items: any[] = []
    indexs.forEach(index => {
      items.push(banner.items[index])
    })
    setBanner(items)
  }, [indexs])

  useEffect(() => {
    const interval = setInterval(nextBanner, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [indexs])

  const nextBanner = (): void => {
    const newIndexs = indexs.map(index => {
      index += 1
      if (index === bannerLength) index = index - bannerLength

      return index
    })

    setIndexs(newIndexs)
  }

  const backBanner = (): void => {
    const newIndexs = indexs.map(index => {
      index -= 1
      if (index === -1) index = index + bannerLength

      return index
    })

    setIndexs(newIndexs)
  }

  return (
    <div className='banner'
    onMouseEnter={(e) => {
      bannerControllerRef.current!.style.display = 'contents'
    }}
    onMouseLeave={(e) => {
      bannerControllerRef.current!.style.display = 'none'
    }}
    >
      {
        banner.map((item, key) => {
          return (
            <a className='banner-item' key={key}>
              <img className='banner-item-img' src={item.banner} alt="" />
            </a>
          )
        })
      }
      <div ref={bannerControllerRef} className='banner-controller'>
        <div className='banner-icon-container banner-icon-back' onClick={backBanner}>
          <ArrowBackIosNewOutlinedIcon className='controller-icon' />
        </div>
        <div className="banner-icon-container banner-icon-forward" onClick={nextBanner}>
          <ArrowForwardIosOutlinedIcon className='controller-icon' />
        </div>
      </div>
    </div>
  )
}
