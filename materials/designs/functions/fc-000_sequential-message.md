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
        -   useEffect
-   `CSS Modules`
    -   Styles are applied via SequentialMessage.module.css

## Properties

| Property            |  Type  | Required | Default | Description                                                                                        |
| :------------------ | :----: | :------: | :-----: | :------------------------------------------------------------------------------------------------- |
| primaryDelayMS      | number |  False   |  1,000  | Delay before starting to display the binary string for each segment (in milliseconds).             |
| binaryStringDelayMS | number |  False   |   20    | Delay between displaying each character of the binary string (in milliseconds).                    |
| messageDelayMS      | number |  False   |   10    | Delay between replacing each binary character with the actual message character (in milliseconds). |
| message             | string |   True   |         | The message to display progressively. Multiple lines can be separated by \n.                       |

## States

| State            |  Type  | Description                                                                                                                       |
| :--------------- | :----: | :-------------------------------------------------------------------------------------------------------------------------------- |
| displayedMessage | string | Holds the message currently displayed, including the intermediate binary string and its transformation into the original message. |

## API used

| Endpoint                | Method | Parameters     |
| :---------------------- | :----: | :------------- |
| /generate_binary_string |  GET   | length: number |
