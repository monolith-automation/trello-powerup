window.TrelloPowerUp.initialize({
    'card-buttons': function (t) {
      return [{
        text: '時間を記録',
        callback: function (t) {
          return t.modal({
            url: './index.html',
            height: 400,
            fullscreen: false,
            title: "稼働時間を記録しますか？"
          });
        }
      }];
    },
    // attachment-sectionsの最小限の実装を追加
    'attachment-sections': function(t, options) {
      // 空の配列を返すだけでOK
      return [];
    }
  });
  
  function startTimer() {
    console.log("✅ 記録開始！");
    window.TrelloPowerUp.getRestApi().closeModal();
  }
