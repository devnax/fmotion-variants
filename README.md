Framer motion variants


## Variants List
```js
import {variants} from 'fmotion-variants'

const {
  zoom,
  zoomOver,
  fadeIn,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp
} = variants

```


## With Component
```js

import {AnimateBox} from 'fmotion-variants'

// types zoom | ZoomOver | FadeIn | FadeInUp | FadeInDown | FadeInLeft | FadeInRight

const App = () => {
  return (
    <AnimateBox type='zoom'>
      Children...
    </AnimateBox>
  )
}

```