# [FC-b000] Primary Button

## Path

```
frontend/src/components/buttons/PrimaryButton.tsx
```

## Description

FC-b000 is a functional button component.

## Example

```tsx
<PrimaryButton
    initialRenderDelayMS={2000}
    buttonLabel='Login'
    buttonType='button'
    redirectUrl='/login'
/>
```

## Where is used

-   [A-000_Home](../../screens/a-000_home.md)

## Imported libraries, etc

-   `react`
    -   React
-   `useDelayVisibility`

## Properties

| ID  | Property             |         Type         | Required | Default |
| :-: | :------------------- | :------------------: | :------: | :------ |
|  0  | initialRenderDelayMS |        number        |   True   |         |
|  1  | buttonType           | 'button' or 'submit' |   True   |         |
|  2  | buttonLabel          |        string        |   True   |         |
|  3  | redirectUrl          |        string        |  False   |         |
|  4  | data                 |          T           |  False   |         |
|  5  | onClick              |      () => void      |  False   |         |
|  6  | onSubmit             |  (data: T) => void   |  False   |

-   `0`: The initial delay in milliseconds before rendering the element.
-   `1`: The type of the button, which can be either "button" or "submit."
-   `2`: The label text displayed on the button.
-   `3`: An optional URL to redirect to when the button is clicked.
-   `4`: Optional data of generic type T that can be submitted.
-   `5`: An optional callback function triggered when the button is clicked.
-   `6`: An optional callback function that receives data of type T when the form is submitted.

## States

None

## API used

None
