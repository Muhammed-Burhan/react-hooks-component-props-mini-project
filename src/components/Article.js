import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const timeTored = (m) => {
    // aw interval lo awaya loop akay pe rek bexen
    const interval = m < 30 ? 5 : 10;
    // away lo dearey krdny emoji akan bakar denen
    const emoji = m < 30 ? "☕️" : "🍱";

    // shtakan push dakaena naw way
    let emojiToDisplay = "";
    //index+=interval yany index=index+interval nmwna agar 15 daqa be hamw jare 5 lo index akay zead daby hata loop aka radawasty
    //index=0 minutes=47 1   index=10 minutes=47 2  index=20 minutes=47 3  index=30 minutes=47 4 index=40 minutes=47 5 index=50 minutes=47 4
    for (let index = 0; index < m; index += interval) {
      emojiToDisplay += emoji;
    }
    return emojiToDisplay;
  };
  const emojis = timeTored(minutes);
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} minutes to read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
