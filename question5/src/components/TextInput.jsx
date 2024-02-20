import React from 'react'

import Input from './Input'

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

export default TextInput