import React, { useEffect, useState } from 'react'
import Header from './header/Header'
import { getHomePageData } from '../../services/homePageService'
export default function Body (): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [homePageData, setHomePageData] = useState<any>()
  useEffect(() => {
    async function handler (): Promise<void> {
      const data = await getHomePageData()
      setHomePageData(data)
    }

    handler().catch((error) => { console.error(error) })
  }, [])

  return (
    <div>
      <Header />
      Body
    </div>
  )
}
