<p align="center">
    <img src="./assets/images/logo-transparent.png"
        height="130">
</p>
<p align="center">A tool to practice <b>Hiragana</b> and <b>Katakana</b></p>
<p align="center">
    <a href="https://go.dev/" alt="Made In">
        <img src="https://img.shields.io/badge/USED-JS, CSS, HTML-blue?style=for-the-badge&logo=javascript&logoColor=white" /></a>
        <img src="https://img.shields.io/github/contributors/NeutronX-dev/kana-master?style=for-the-badge" /></a>
</p>

Currently running on repl. You can view it [here](https://kana.nutron.repl.co/).

Sadly, I have not made a version where you choose which characters to practice with, however, if you wish you can set `window.KaNa.main.symbols` to a multidimentional array like the following:

```js
[
    ['あ', 'え', 'い', 'お', 'う'],
    ['ア', 'エ', 'イ', 'オ', 'ウ'],
    ['a', 'e', 'i', 'o', 'u']
]
```
**CONSIDER**: They have to be the same length. and the placement matter, index `[0][0]` (あ) corresponds to `[1][0]` (ア) as well a `[2][0]` (a).



# LICENSE
![gnu-logo](./assets/images/gplv3-88x31.png)

This program is free software: you can redistribute it and/or modify
it under the terms of the [GNU General Public License](https://github.com/NeutronX-dev/ws.js/blob/main/LICENSE) as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.