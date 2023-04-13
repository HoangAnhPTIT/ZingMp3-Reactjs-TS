import axios from 'axios'

export const getHomePageData = async (): Promise<any> => {
  try {
    const { data } = await axios.get('https://zingmp3.vn/api/v2/page/get/home?page=1&count=30&ctime=1681382340&version=1.9.24&sig=d7034ac2031725afd4e2493a13c51e2c15feeb78ac9cfb10c698d990e7dbb242e18ac3afb0514e65dd922c2c87c671d0c5f8ceac567ae78d2686a780eda0ff5f&apiKey=X5BM3w8N7MKozC0B85o4KMlzLZKhV00y')

    return data
  } catch (error: any) {
    throw new Error(error.message)
  }
}
