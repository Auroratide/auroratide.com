Aliquam mollis, sapien sed auctor imperdiet, ex lacus tempus augue, sed dignissim orci elit vitae massa. Praesent sodales tempus erat, quis feugiat tellus. Sed `blandit` tempus consequat. Aenean vitae eleifend ipsum.

```jsx
import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import State from './state';
import classnames from 'classnames';

import styles from './style';

const setHeight = (expanded, elem) => {
  elem.style.height = expanded ? `${elem.scrollHeight}px` : null;
};

const Accordion = ({ state, className, children }) =>
  <div
    className={classnames(styles.accordion, { expanded: state.expanded }, className)}
    ref={(elem) => elem ? setHeight(state.expanded, elem) : null}
  >
    {children}
  </div>;

Accordion.propTypes = {
  state: PropTypes.instanceOf(State).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Accordion;
```

```css
@import "theme";

.top-bar a {
  color: var(--palette-off-white);
}

.top-bar a:hover {
  color: var(--palette-white);
}

.top-bar .container {
  display: flex;
  flex-direction: column;
}

.top-bar .main-links {
  display: flex;
  justify-content: space-between;
}

.top-bar .nav-links {
  display: flex;
  flex-direction: column;
}

@media (--breakpoint-lg) {
  .top-bar .container {
    flex-direction: row;
    max-height: 7rem;
  }

  .top-bar .nav-links {
    flex-direction: row;
    flex: 1;
    margin-left: 3rem;
    height: auto;
  }

  .top-bar .hamburger {
    display: none;
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Auroratide</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="Timothy Foster, Auroratide" />
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700" rel="stylesheet" />
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="/client.js"></script>
    <noscript>
      <div class="container">
        <h1 class="title">Uh oh!</h1>
        <h2 class="subtitle">Seems like you have javascript disabled.</h2>
        <p class="text">This website heavily (actually, completely) relies on javascript in order to work. Please re-enable javascript if you want to continue!</p>
      </div>
    </noscript>
  </body>
</html>
```