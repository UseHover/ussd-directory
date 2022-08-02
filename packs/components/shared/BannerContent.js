import React from 'react'
import PropTypes from 'prop-types'

const BannerContent = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="co-white mb-1h">{title}</h1>
      <p className="max-527 mx-auto lh-31">{subtitle}</p>
    </>
  )
}

BannerContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default BannerContent
