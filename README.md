react-demo
==
by kimi

##Start
+ `install` npm i
+ `start` npm start
+ `build` npm run build

##Do
+ Structure  
```
  src
  ├─ action
  |    └─ your_action.js
  ├─ reducer
  |    ├─ your_reducer.js  ->   {...}
  |    └─ root.js - totalReducer ─┚
  ├─ component
  |    └─ your_component.js (component, props injected)
  ├─ container                                ↓
  |    └─ container.js connect(...,...)(your_component) -> export
  ├─ styl (ease)
  |    └─ your_styl.styl
  └─ img  (ease)
       └─ your_img.jpg
```
+ Output  
  You will see your component display as a route/page in view.

##?
Anyway, it's just a demo, don't take it serious...
