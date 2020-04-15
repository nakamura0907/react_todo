### 課題
- ~デザインの統一感~
    - 要素の端揃えなど
- styled-component
    - Reactの場合はcssよりもこちらを（できるだけ）
- ~ADD後のフォーム初期化~
    - 空白無効など
- todoリストはObjectかMapで
    - 配列よりも効率的?
- ~README.md~
    - どのような技術を使っているのかなど
    - ポートフォリオのアピールに
- ~ディレクトリ構造~
- ~lint,prettier~
    - 両方入れて連携させる
- ~TypeScriptの型~
    - Atomsなどのコンポーネントにも
        - const Sample = (props: IProps) => {}の形で
    - そのコンポーネントを見るだけで何が渡って来るのか分かる


### メモ
- Listコンポーネントがstateを保持していて尚且つ削除することで不具合が生じた
    - この問題をuuidを用いて解決した
- 個別のli要素にクラスを付与できないという問題が発生
    - ulコンポーネントとliコンポーネントに分割することで解決した
    - 三項演算子を()で囲むことで文字列連結ができる
        - "sample" + (true ? " is-active" : "")
- ulコンポーネントのli要素を分割したらkeyがuniqueではなくなった
    - li要素本体にkeyを割り当てるのではなく、liコンポーネント自体にkeyを振ることで解決
- クラスコンポーネントに関数を渡すと、レンダリング時(?)に勝手に呼び出されてしまう不具合が発生
    - 正確にはprops.onClickFunctionという形式
    - {() => props.onClickFunction()}とアロー関数形式で解決
- inputタグを利用すると failed prop typeというエラーが発生
    - inputタグのvalueをdefaultValueに、onInputをonChangeに変更で解決
