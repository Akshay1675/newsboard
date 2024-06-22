import { defaultThumbnail } from "../utils/constants"

const SidebarNews = ({data, currentNews}) => {
    if(data.title === currentNews.title) {
        return null
    }
  return (
    <div className="flex w-96 mb-6">
        <img className="md:w-36 w-28 mr-3 md:mr-4" src={data.urlToImage ? data.urlToImage : defaultThumbnail} alt={data.title}/>
        <p className="text-sm font-medium">{data.title}</p>
    </div>
  )
}

export default SidebarNews