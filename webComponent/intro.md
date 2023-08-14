# WebComponent 的好，用過的都知道 - 奶綠茶

{%hackmd Cw2XpA-PTgWNLFD4R6-Unw %}

###### ▼▼▼ 開始筆記 ▼▼▼

簡報：https://speakerdeck.com/milkmidi/webcomponent

## 十年前的技術

- jQuery [再戰十年！]
- Flash Action Script [已死]
- Silverlight [已死]
- RWD
- Bootstrap

## 2023 Web Development Trend

(JS 已經碰到效能瓶頸)

- React / Vue / Angular
- graphQL
- TailwindCSS
- webassembly: Figma Canvas 區塊
- Webpack(已被淘汰) / Vite
- No JQuery
- Test

JS 的問題

- 全域污染：只要有 document 的地方就能執行
- 引用順序導致覆蓋，Ex: d.js 蓋掉 c.js

### web component 是什麼？

define a tag
減少耦合性
好搜尋(要改的部份直接從 code 海撈出來)，好改(因為相關的語法封裝在 CLASS 裡面)

### web component 好處

- 好找好改
- 限縮範圍
- 準時下班

### BUT

- IE 不支援

### How to use

```js
class Mycomponent extends HTMLElement {
  constructor() {
    super();
  }
  connectdCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(name, oldValue, newValue) {}
  ...
}
```

### 生命週期

![](https://hackmd.io/_uploads/rkhwdmQnh.jpg)
[參考連結](https://ithelp.ithome.com.tw/m/articles/10293737)

### Shadow DOM

與世隔絕的安全屋，類似 iframe
![](https://hackmd.io/_uploads/SkFLtXQ2h.jpg)

- 隔開 css 全域影響
- 外面的 DOM 元素不會影響到裡面的 CSS

#### 缺點

- 外層和 shadow DOM's style 不會互相影響
- 可透過 `attachShadow({ mode })` 取用內部元素
  [shadow DOM 和 attachShadow 參考說明](https://ithelp.ithome.com.tw/m/articles/10293754)

#### Shadow DOM + SLOT

- 只支援 Shadow DOM
  ![](https://hackmd.io/_uploads/HJ8m97X3h.jpg)

### 加薪技能樹

- WebComponent 致命傷

  - 原生 JS 太囉唆(要建一堆 event)
  - Webcomponent 請不要用 Document 找東西 (因為會跨域搜尋)
  - 原本的 DOM 被 Vue 刪掉再重新渲染，第三方媒體碼找不到 DOM

- 解法：webcomponent + petite-vue

  - 純 JS 作法
    ![](https://hackmd.io/_uploads/B1fDiXm3h.jpg)
  - petite-vue
    ![](https://hackmd.io/_uploads/SJFGn7Q22.jpg)
  - webcomponent + petite-vue
    ![](https://hackmd.io/_uploads/HkiHn7X22.jpg)

- petite-vue: not virtual DOM, 只有解析 attributes，相似於 vue，語法好理解
- 使用黑魔法：[v-model](https://vuejs.org/guide/components/v-model.html)
  ![](https://hackmd.io/_uploads/S1vX6mmhh.jpg) - 備註：input 要加 type="checkbox"

> 結語：
> 學習不需要為公司、長官或同事
> 不需要為別人，只需要為自己
