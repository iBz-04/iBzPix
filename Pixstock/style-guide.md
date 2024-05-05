# Essential Stuff by iBz

## Html import links

Google font

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

Material icon

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0"
/>
```

---

## CSS Variables

### Colors

```css
--scrim: #000000;
```

Light colors

```css
--light-background: #fafdfc;
--light-on-background: #191c1c;
--light-surface: #f7faf9;
--light-on-surface: #191c1c;
--light-surface-variant: #dae5e3;
--light-on-surface-variant: #3f4948;
--light-surface-container-high: #e6e9e8;
--light-surface-container-highest: #e0e3e2;
--light-surface-container: #eceeed;
--light-outline: #6f7978;
--light-outline-variant: #bec9c7;
--light-primary: #006a67;
--light-on-primary: #ffffff;
--light-primary-container: #6ff7f2;
--light-on-primary-container: #00201f;
--light-secondary: #845400;
--light-on-secondary: #ffffff;
--light-secondary-container: #ffddb5;
--light-on-secondary-container: #2a1800;
--light-tertiary: #a93538;
--light-on-tertiary: #ffffff;
--light-tertiary-container: #ffdad8;
--light-on-tertiary-container: #410006;
--light-error: #ba1a1a;
--light-on-error: #ffffff;
--light-error-container: #ffdad6;
--light-on-error-container: #410002;
--light-inverse-surface: #2d3131;
--light-inverse-on-surface: #eff1f0;
--light-inverse-primary: #4edad5;
```

Dark colors

```css
--dark-background: #191c1c;
--dark-on-background: #e0e3e2;
--dark-surface: #101414;
--dark-on-surface: #c4c7c6;
--dark-surface-variant: #3f4948;
--dark-on-surface-variant: #bec9c7;
--dark-surface-container-high: #272b2a;
--dark-surface-container-highest: #323535;
--dark-surface-container: #1d2020;
--dark-outline: #889392;
--dark-outline-variant: #3f4948;
--dark-primary: #4edad5;
--dark-on-primary: #003735;
--dark-primary-container: #00504e;
--dark-on-primary-container: #6ff7f2;
--dark-secondary: #ffb958;
--dark-on-secondary: #462b00;
--dark-secondary-container: #643f00;
--dark-on-secondary-container: #ffddb5;
--dark-tertiary: #ffb3b0;
--dark-on-tertiary: #68000f;
--dark-tertiary-container: #891c23;
--dark-on-tertiary-container: #ffdad8;
--dark-error: #ffb4ab;
--dark-on-error: #690005;
--dark-error-container: #93000a;
--dark-on-error-container: #ffdad6;
--dark-inverse-surface: #e0e3e2;
--dark-inverse-on-surface: #191c1c;
--dark-inverse-primary: #006a67;
```

### Typography

Font family

```css
--ff-primary: "Work Sans", sans-serif;
```

Font size

```css
--fs-base: 62.5%;
--fs-display-large: 5.7rem;
--fs-display-medium: 4.5rem;
--fs-display-small: 3.6rem;
--fs-headline-large: 3.2rem;
--fs-headline-medium: 2.8rem;
--fs-headline-small: 2.4rem;
--fs-title-large: 2.2rem;
--fs-title-medium: 1.6rem;
--fs-title-small: 1.4rem;
--fs-label-large: 1.4rem;
--fs-label-medium: 1.2rem;
--fs-label-small: 1.1rem;
--fs-body-large: 1.6rem;
--fs-body-medium: 1.4rem;
--fs-body-small: 1.2rem;
```

Font weight

```css
--weight-regular: 400;
--weight-medium: 500;
```

### Border Radius

```css
--radius-extra-small: 4px;
--radius-small: 8px;
--radius-medium: 12px;
--radius-large: 16px;
--radius-large-end: 0 16px 16px 0;
--radius-extra-large: 28px;
--radius-circle: 50%;
--radius-full: 500px;
```

### Elevation

```css
--elevation-1: 0 1px 2px hsla(0, 0%, 0%, 0.3), 0 1px 3px 1px hsla(0, 0%, 0%, 0.15);
--elevation-2: 0 1px 2px hsla(0, 0%, 0%, 0.3), 0 2px 6px 2px hsla(0, 0%, 0%, 0.15);
```

### Others

```css
--top-app-bar-height: 64px;
```

### Transition

Duration

```css
--motion-duration-short-1: 100ms;
--motion-duration-short-2: 200ms;
--motion-duration-medium-1: 250ms;
--motion-duration-medium-2: 400ms;
--motion-duration-long: 500ms;
```

Easing

```css
--motion-easing-linear: cubic-bezier(0, 0, 1, 1);
--motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
--motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
--motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
--motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
--motion-easing-legacy: cubic-bezier(0.4, 0, 0.2, 1);
```
