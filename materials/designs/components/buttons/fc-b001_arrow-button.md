# [FC-b001] Arrow Button

## Path

```
frontend/src/components/buttons/ArrowButton.tsx
```

## Description

FC-b001 is a functional button component.

## Example

```tsx
<ArrowButton initialRenderDelayMS={2000} buttonType='button' buttonDirection='left' />
```

## Where is used

## Imported libraries, etc

-   `react`
    -   React
-   `useDelayVisibility`

## Properties

| ID  | Property             |         Type         | Required | Default |
| :-: | :------------------- | :------------------: | :------: | :------ |
|  0  | initialRenderDelayMS |        number        |   True   |         |
|  1  | buttonType           | 'button' or 'submit' |   True   |         |
|  2  | buttonDirection      |  'left' or 'right'   |   True   |
|  3  | onClick              |      () => void      |  False   |

-   `0`: The initial delay in milliseconds before rendering the element.
-   `1`: The type of the button, which can be either "button" or "submit."
-   `2`: Indicates the direction of the button, which can be 'left' or 'right'.
-   `3`: An optional callback function triggered when the button is clicked.

## States

None

## API used

None
