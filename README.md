# README #

Chatworkへのゴミの日通知用スクリプト(google apps script)です。

### How to install ###

#### メール設定 ####
* 53Calに、該当地域を登録しメール通知設定する。
* 53Calからのメールにラベル等のフィルタ設定を行う。
* 53Cal is http://www.53cal.jp/

#### chatwork token発行 ####
* チャットワーク>動作設定>API発行>チャットワークパスワード入力してtoken表示

#### google apps script登録 ####
* http://c-note.chatwork.com/post/69590585422/chatworkapi-gas-library を参考にライブラリを追加する
* google driveで新規スプレッドシートを作成する。（オーナーは自分、非公開設定で構わない。）
* スクリプトエディタで本リポジトリのソースを貼り付ける。

#### トリガー実行 ####
* トリガーを登録し、定期的に実行されるようにする。