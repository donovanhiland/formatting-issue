import React, { Component } from 'react'
import PropTypes from 'prop-types'
import glamorous, { withTheme } from 'glamorous'
import _ from 'underscore'
import iconPaths from './iconPaths'

const StyledIcon = glamorous.svg(props => {
  const color = props.color ?
    props.theme.color[props.color] :
    props.theme.color.elements.dark

  let size = props.size ?
    props.theme.icon[props.size].size :
    props.theme.icon.default.size

  if (props.circular) {
    size = size - 7
  }
  size = `${size}px`

  return [
    {
      width: size,
      height: size,
      display: 'inline-block',
      fill: color,
    },
    props.size === 'small' && {
      width: size,
      height: size,
    },
  ]
})

@withTheme
export default class Icon extends Component {
  static propTypes = {
    /** Optional color to apply to the icon. Affects the border and icon. */
    color: PropTypes.string,
    /** Name of the icon to be used */
    name: PropTypes.string.isRequired,
    /** The size of the icon */
    size: PropTypes.oneOf(['small', 'xsmall', 'default']),
  }

  static defaultProps = {
    size: 'default',
  }

  render() {
    const { name, ...rest } = this.props
    return (
      <StyledIcon
        viewBox="0 0 20 20"
        {...rest}
      >
        {iconPaths[name].map((path, index) => (
          <path
            key={index}
            d={path}
          />
        ))}
      </StyledIcon>
    )
  }
}
