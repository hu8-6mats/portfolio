# [FC-000] Sequential Message

## Path

```console
frontend/src/functions/SequentialMessage.tsx
```

## Description

FC-000 is a functional component.

It displays a binary array of the same length as the string received in the argument  
and replaces the argument one character at a time based on the specified delay.

## Example

```tsx
<SequentialMessage
    primaryDelayMS={1500}
    binaryStringDelayMS={15}
    messageDelayMS={25}
    endOfLineDelayMS={1000}
    message='Hello World!\nThis is a test message.'
/>
```

## Where is used

-   [A-000_Home](../screens/a-000_home.md)

## Imported libraries, etc

-   `React`
    -   Functional component
    -   Hooks
        -   useState
-   `CSS Modules`
    -   Styles are applied via SequentialMessage.module.css

## Properties

| ID  | Property            |  Type  | Required | Default |
| :-: | :------------------ | :----: | :------: | :-----: |
|  0  | primaryDelayMS      | number |  False   |  1,000  |
|  1  | binaryStringDelayMS | number |  False   |   20    |
|  2  | messageDelayMS      | number |  False   |   10    |
|  3  | endOfLineDelayMS    | string |  False   |   750   |
|  4  | message             | string |   True   |         |

0. Delay before starting to display the binary string for each segment (in milliseconds).
1. Delay between displaying each character of the binary string (in milliseconds).
2. Delay between replacing each binary character with the actual message character (in milliseconds).
3. Delay applied after completing the display of each line segment before starting the next line (in milliseconds).
4. The message to display progressively. Multiple lines can be separated by \n.

## States

| ID  |      State       | Type   |
| :-: | :--------------: | :----- |
|  0  | displayedMessage | string |

0. Holds the message currently displayed.

## API used

None
