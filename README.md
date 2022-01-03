# @jdthornton/animated-modal

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/animated-modal.svg)](https://www.npmjs.com/package/@jdthornton/animated-modal)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/animated-modal.svg)](https://www.npmjs.com/package/@jdthornton/animated-modal)

React animated modal component.

## Demo

https://jdthornton.github.io/#/animated-modal

## Install

```
$ npm install @jdthornton/animated-modal
```

## Usage

```js
import AnimatedModal, { useModal } from "@jdthornton/animated-modal";
import '@jdthornton/animated-modal/styles.css';

function App(){

  const { isOpen, open, close } = useModal();

  return(
    <AnimatedModal isOpen={isOpen} close={close}>
      Modal
    </AnimatedModal>
  )
}
```


## Props

| Prop                                                                      | Type                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpen`                                                                  | boolean                                                                             | Modal is open when value is set to true                                                                                                                                                                                                                                                                                                                                                                    |
| `openClassName`                                                           | string                                                                              | The modal class applied when the modal is open                                                                                                                                                                                                                                                                                                                                                             |
| `openStyle`                                                               | object                                                                              | The modal style applied when the modal is open                                                                                                                                                                                                                                                                                                                                                             |
| `close`                                                                   | Function                                                                            | The modal close handler                                                                                                                                                                                                                                                                                                                                                                                    |
| `showCloseButton`                                                         | boolean                                                                             | Shows a modal close button                                                                                                                                                                                                                                                                                                                                                                                 |
| `closeOnOverlayClick`                                                     | boolean                                                                             | Closes the modal on overlay click                                                                                                                                                                                                                                                                                                                                                                          |
| `closeOnEsc`                                                              | boolean                                                                             | Closes the modal on 'ESC' key press                                                                                                                                                                                                                                                                                                                                                                        |
| `inertQuerySelector`                                                      | string                                                                              | The query selector for the element to be made inert when the modal is open                                                                                                                                                                                                                                                                                                                                 |
| `className`                                                               | string                                                                              | The modal class                                                                                                                                                                                                                                                                                                                                                                                            |
| `style`                                                                   | object                                                                              | The modal style                                                                                                                                                                                                                                                                                                                                                                                            |
| `overlayClassName`                                                        | string                                                                              | The overlay class                                                                                                                                                                                                                                                                                                                                                                                          |
| `overlayStyle`                                                            | object                                                                              | The overlay style                                                                                                                                                                                                                                                                                                                                                                                          |
| `labelledBy`                                                              | string                                                                              | The aria-labelledby attribute                                                                                                                                                                                                                                                                                                                                                                              |
| `describedBy`                                                             | string                                                                              | The aria-describedby attribute                                                                                                                                                                                                                                                                                                                                                                             |
