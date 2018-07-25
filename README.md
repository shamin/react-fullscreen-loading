# react-fullscreen-loading
[![npm version](https://badge.fury.io/js/react-fullscreen-loading.svg)](https://www.npmjs.com/package/react-fullscreen-loading)

Minimal fullscreen loading for react

[![Edit v6z782xow7](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v6z782xow7)

## Installation

```
npm install --save react-fullscreen-loading
```

## Example

```javascript
import React from 'react';
import Loading from 'react-fullscreen-loading';

class App extends React.Component {
  render() {
    return(
      <Loading loading background="#2ecc71" loaderColor="#3498db" />
    )
  }
}

export default App;
```


## Props

Name | Type | Default Value
------------ | ------------- | -------------
loading | boolean | false
background | String  | `rgba(236, 240, 241, 0.7)`
loaderColor | String  | `#e74c3c`

# Licence
Code released under the [MIT License](https://github.com/shaminmeerankutty/react-fullscreen-loading/blob/master/LICENSE.md)

