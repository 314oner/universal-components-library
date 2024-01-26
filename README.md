![314oner GitHub Banner](./static/img/GitHubHeader.png)

## Instalation 

### Universal Components Library

**Universal Components Library** is available as an [npm package](https://www.npmjs.com/package/@314oner/universal-components-library).

npm:

```bash
npm install @314oner/universal-components-library
```
yarn:

```bash
yarn add @314oner/universal-components-library
```

### Styles

```ts
import '@314oner/universal-components-library/dist/style.css';
```
The entry point of your application: `main.js` | `main.ts` | `index.js` | `index.ts`
```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// ! This line ⬇️⬇️⬇️
import '@314oner/universal-components-library/dist/style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## Getting started with Universal Components Library
***
```ts
import './App.css'

import {Text} from '@314oner/universal-components-library';

function App() {
  return <Text bold color={"blue"}>Hello World 🤍</Text>
}

export default App
```

# 📩 Latest Videos
<!-- BLOG-POST-LIST:START -->
- [Чипи Чипи Чапа Чапа Дуби Дуби Даба Даба | 1 Час | Кот Танцует в Лотке](https://www.youtube.com/watch?v=rslGMR0sj6w)
- [Howard the Alien [10 Hours]](https://www.youtube.com/watch?v=TRc85qoNo6w)
<!-- BLOG-POST-LIST:END -->