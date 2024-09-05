# CSS Coding Convention

## Naming Rules

### Files

CSS to be applied to the entire system should be defined in `frontend/app/global.css`.

The style of each component should be defined in the same hierarchy as the `component-name + .module.css`.

The same applies to each page.

### Classes

Classes that may be controlled by a tsx file should be described in CamelCase.

### Variables

Values that may be used system-wide should be written in `frontend/app/global.css`:root as variables.

## Prohibitions

It is prohibited to apply styles from higher-level CSS to lower-level components.

Also, please delete unnecessary descriptions and comments.

## Styles

The order in which styles are described for each class should be as follows.

1. **Layout**

    - display
    - flex
    - justify-content
    - align-items
    - grid

2. **Color**

    - color
    - background
    - opacity

3. **Typography**

    - font-family
    - font-size
    - font-weight
    - line-height
    - letter-spacing
    - text-align
    - text-transform

4. **Sizing**

    - width
    - height
    - padding
    - margin
    - border

5. **Positioning**

    - position
    - top, right, bottom, left
    - z-index

6. **Decoration**

    - border-radius
    - box-shadow
    - text-shadow
    - list-style
    - outline

7. **Animation**

    - transition
    - animation

### Example

```css
.primaryButton {
    /* Layout */
    margin-block: 0.75rem;
    padding: 0.75rem 5rem;
    width: 100%;

    /* Color */
    border: var(--black-100);
    background: radial-gradient(circle, var(--gray-50) 0%, var(--black-100) 100%);
    color: var(--white-75);

    /* Typography */
    font-size: 1.5rem;
    font-weight: var(--font-weight-light);
    letter-spacing: 0.25em;

    /* Sizing */
    opacity: 0;

    /* Decoration */
    border-radius: 5%;

    /* Animation */
    transition: opacity 750ms ease, transform 500ms ease;
}
```
