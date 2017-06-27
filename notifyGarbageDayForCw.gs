function notifyGarbageDayForCw(){

    // 最新１件のみ処理を行う
    // NOTE: 処理終了後、対象メールを既読化するので、そもそも未読が１件したない想定
    var thds = GmailApp.search("label:ゴミ is:unread");

    // 対象メールなしなら終了
    if (!thds || thds.length === 0) { return; }

    var cwMsg = '[info]--- [自動通知: ゴミの日お知らせ] ---\n\n';

    // 処理
    for(var n in thds){
        var thd = thds[n];
        var msgs = thd.getMessages();
        for(m in msgs){
            var msg = msgs[m];
            var date = msg.getDate();
            var body = msg.getBody();
            var id = msg.getId();
            cwMsg += body + '[/info]';
        }
        // 既読化
        thd.markRead();

        // １件処理して終わり
        break;
    }

    // ChatWorkに送信
    var dummyRoomId = 9999999999;
    var client = ChatWorkClient.factory({token: 'xxxxxxxx'});

    // TODO: check your chatwork
    // client.sendMessage({room_id: dummyRoomId, body: cwMsg});

}
