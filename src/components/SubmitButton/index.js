import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const getClassName = loading => {
  let className = 'submit-button'
  if (loading) {
    className += ' loading'
  }
  return className
}

const Loading = () => (
  <span>Loading</span>
)

const SubmitButton = ({loading, children}) => {
  return (
    <div className={getClassName(loading)}>
      {loading ? <Loading /> : children}
    </div>
  )
}

SubmitButton.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default SubmitButton
