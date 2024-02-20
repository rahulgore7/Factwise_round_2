import React from 'react'

class Input extends React.PureComponent {
  render() {
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

export default Input