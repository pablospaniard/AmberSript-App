import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.scss'

const Button = props => {
  const { select, delete: delBtn, onButtonClick, disabled, text } = props
  return (
    <button
      type="button"
      className={`${select ? styles.Button_Select : null} ${
        delBtn ? styles.Button_Delete : null
      }`}
      onClick={onButtonClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  add: null,
  delete: null,
  edit: null,
  disabled: null,
  onButtonClick: null
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  select: PropTypes.bool,
  delete: PropTypes.bool,
  edit: PropTypes.bool,
  disabled: PropTypes.bool,
  onButtonClick: PropTypes.func
}

export default Button
