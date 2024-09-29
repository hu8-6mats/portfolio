# [CH-000] Use Delay Visibility

## Path

```
frontend/src/hooks/useDelayVisibility.tsx
```

## Description

CH-000 is a custom hook.

It delays rendering for the initial display by the amount of time specified in the argument.

## Example

```tsx
const isVisible: boolean = useDelayVisibility({ initialRenderDelayMS });
```

## Where is used

-   [A-000_Home](../components/buttons/fc-b000_primary-button.md)

## Imported libraries, etc

-   `react`
    -   useState
    -   useEffect

## Properties

| ID  | Property             |  Type  | Required | Default |
| :-: | :------------------- | :----: | :------: | :------ |
|  0  | initialRenderDelayMS | number |  False   | 1,000   |

-   `0`: The initial delay in milliseconds before rendering the element.

## States

| ID  |   State   | Type    |
| :-: | :-------: | :------ |
|  0  | isVisible | boolean |

-   `0`: Boolean state that indicates whether an element is currently visible on the screen.

## API used

None
