import React, { useState } from 'react'
import { Loader } from './index'
import PropTypes from 'prop-types'

const ChannelList = ({ channels, country }) => {
  const [displayStyle, setDisplayStyle] = useState('gridstyle')

  const onChangeListDisplay = event => {
    const currentId = event.currentTarget.id

    if (currentId === 'listStyleBtn') {
      setDisplayStyle('liststyle')
      return
    }

    setDisplayStyle('gridstyle')
  }

  const onViewMore = () => {
    const currentPath = window.location.pathname

    if (currentPath === '/') {
      window.location.replace('/directory/')
      return
    }

    console.log('Viewing more...')
  }

  console.log(window.location)

  return (
    <section className="code-head">
      <div className="space-between-groups flex-wrap">
        <p className="ff-bold smalltext no-wrap mb-1 mx-auto ml-0">{country?.name || 'All Countries'}</p>
        <div className="switcher d-flx flt-r show-mediumup">
          <button
            id="gridStyleBtn"
            className={`mr-1 ${displayStyle === 'gridstyle' ? 'active' : ''}`}
            onClick={onChangeListDisplay}
          >
            <p className="mr-1h">Grid view</p>
            <svg width="25" height="24">
              <use href="/uploads/icon-sprite.svg#grid-box"></use>
            </svg>
          </button>
          <button
            id="listStyleBtn"
            className={displayStyle === 'liststyle' ? 'active' : ''}
            onClick={onChangeListDisplay}
          >
            <p className="mr-1h">List view</p>
            <svg width="26" height="24">
              <use href="/uploads/icon-sprite.svg#list-box"></use>
            </svg>
          </button>
        </div>
      </div>
      <section>
        {Object.keys(channels).length === 0 ? (
          <Loader />
        ) : (
          <div id="ussdList" className="">
            <ul id="ulList" className={displayStyle}>
              {channels.data.map(channel => (
                <li className="list-card" key={channel.id}>
                  <div className="space-between-groups listly mb-1h">
                    <p className="ff-medium lh-24">{channel.attributes.name}</p>
                    <p className="co-purple picotext uppercase ff-medium mr-2-0">{channel.attributes.country_alpha2}</p>
                  </div>
                  <a
                    href={`tel:${channel.attributes.root_code}`}
                    id="myInput"
                    className="h5 smalltext lh-32 mt-0 mb-1h"
                  >
                    {channel.attributes.root_code}
                  </a>
                  <p className="copy no-wrap mb-1h ff-medium">{channel.attributes.institution_type}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      {channels?.data && channels.data.length > 0 && (
        <a onClick={onViewMore} className={`ff-medium co-blue mt-3 microtext fit-content mx-auto d-blk`} id="view">
          View more
        </a>
      )}
    </section>
  )
}

ChannelList.propTypes = {
  channels: PropTypes.object.isRequired,
  country: PropTypes.object,
}

ChannelList.defaultProps = {
  country: {},
}

export default ChannelList
