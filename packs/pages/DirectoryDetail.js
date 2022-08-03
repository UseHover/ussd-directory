import React, { useEffect, useState } from 'react'
import { Header, Loader } from '../components/shared'
import { useLocation } from 'react-router-dom'
import { getChannelActions } from '../http'

const queryStringToObj = queryString => {
  return queryString
    .split('&')
    .map(q => {
      const [key, value] = q.split('=')
      return { [key.replace('?', '')]: value }
    })
    .reduce((prev, curr) => {
      return { ...prev, ...curr }
    }, {})
}

const DirectoryDetail = () => {
  const [channelActions, setChannelActions] = useState({})
  const { search } = useLocation()
  const queryParams = queryStringToObj(search)

  useEffect(() => {
    const loadChannelActions = async () => {
      const response = await getChannelActions(queryParams?.channelId)
      setChannelActions(response.data)
    }

    loadChannelActions()
  }, [queryParams?.channelId])

  return (
    <>
      <Header hasBanner={false} />
      <section className="wrapper will-grow">
        <a href="/directory" className="d-flx mb-3">
          <svg width="24" height="24">
            <use href="/uploads/icon-sprite.svg#left-arrow"></use>
          </svg>
          <p className="ml-1 co-blue ff-regular">Back to directory</p>
        </a>
        {channelActions?.data && (
          <h1 className="d-flx al-i-c mb-1-2" id="header">
            {channelActions?.data[0]?.attributes?.from_institution_name}
          </h1>
        )}
        <article className="grid mostly-2" id="info">
          <div className="card-details co-darkblue pos-r" id="card-details">
            {Object.keys(channelActions).length === 0 ? (
              <Loader />
            ) : (
              <>
                {channelActions.data.map(channelAction => (
                  <div className="mb-5" key={channelAction.id}>
                    <p className="mb-2-3">{channelAction.attributes.name}</p>
                    <div className="d-flx al-i-c">
                      <a href="tel:" id="myInput" className="smalltext ff-bold m-0 mr-2-3">
                        {channelAction.attributes.path}
                      </a>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </article>
        <article>
          <p>
            Disclaimer: The tool is provided for informational purposes only. Whilst every effort is made to provide
            accurate data, users must acknowledge that this website accepts no liability whatsoever with respect to its
            accuracy. Only your bank can confirm the correct bank account information. If you are making an important
            payment, which is time-critical, we recommend contacting your bank first.
          </p>
        </article>
      </section>
    </>
  )
}

export default DirectoryDetail
