import React, { useEffect, useState } from 'react'
import { BannerContent, ChannelList, CountrySearchInput, Header } from '../components/shared'
import { getChannels } from '../http'

const Home = () => {
  const [channels, setChannels] = useState({})

  useEffect(() => {
    const loadChannels = async () => {
      const response = await getChannels('', 50)
      setChannels(response.data)
    }

    loadChannels()
  }, [])

  return (
    <>
      <section className="home-banner">
        <Header />
        <article className="tx-c co-white">
          <div className="wrapper will-grow">
            <BannerContent
              title="USSD Directory for 30+ countries"
              subtitle="Find USSD codes across Africa. We have thousands of entries across mobile network operators, banks,
              telcos, industries and utilities."
            />
            <CountrySearchInput />
          </div>
        </article>
      </section>

      <section>
        <ChannelList channels={channels} />
      </section>

      <section className="wrapper will-grow d-flx gsm-section bg-lightblue">
        <div className="mb-2 width-100-pc max-474">
          <h2 className="mb-1h mt-1">Get Stax</h2>
          <p className="lh-31 mb-2h">
            Never dial a USSD Code Again. Let Stax do it for you. Stax makes it simpler and easier for you to send
            money, buy airtime, request money, check your account balance, and do more with your bank and mobile money
            accounts. It leverages USSD automation technology to give you more control of your money. No need to
            remember different USSD codes, switch from bank app to fintech app or biller to biller ever again. Best part
            is - it works offline.
          </p>
          <a href="https://stax.onelink.me/nR0j/ussddirectory" target="_blank" rel="noreferrer">
            <img className="google-play mr-2 mb-2" src="/uploads/play.png" alt="Google-play" />
          </a>
        </div>
        <img className="gsm" src="/uploads/gsm.png" alt="mobile app view" />
      </section>

      <section className="wrapper will-grow negate-bottom">
        <h4 className="co-deepblack mb-5 h2 mt-5h">USSD blog</h4>
        <div id="recent-blog-posts" className="row overflow-hidden grid mostly-3">
          <template>
            <div className="col-lg-3 col-md-5 blog-post-thumb-container">
              <div className="skewed-bg-bottom-left position-relative mid-grey-bg blog-post-thumb">
                <a href="" className="stretched-link">
                  <img src="" className="featured-img" alt="" />
                  <h3 className="title"></h3>
                </a>
              </div>
            </div>
          </template>
        </div>
        <div className="col-lg-2 col-md-5 home-blog-post-link order-last order-lg-first order-md-6">
          <a href="https://blog.ussd.directory" className="ff-semibold microtext co-blue mt-5 d-blk tx-r">
            View all
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
