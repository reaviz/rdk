# Backdrop

A component to render a backdrop.

## Usage

### Import module

```javascript
import { Backdrop } from "Overlay";

function onClickHandler() {
  // ...
}

<Backdrop
  className="backdrop"
  onClick={onClickHandler}
  visible={true}
  zIndex={1}
/>;
```

### Props

There are four props available on `Backdrop`:

- `className` - Optional, specifies the class(es) to apply to the backdrop.
- `onClick` - Function that accepts one parameter `React.MouseEvent` and returns void.
- `visible` - Boolean, `true` if visible, `false` otherwise
- `zIndex` - Number specifying the z-index of the backdrop

## Dependencies

The following dependencies are required by `Backdrop`:

- [Transition](https://www.npmjs.com/package/react-transition-group)
- [classnames](https://www.npmjs.com/package/classnames)
