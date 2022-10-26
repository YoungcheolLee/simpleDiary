import React, { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "이영철",
//     content: "안녕 첫 일기!",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "강수영",
//     content: "나는 수영쿤",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "감자",
//     content: "아빠가 넘 좋앙 멍멍",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "후추",
//     content: "엄마가 넘 좋앙 멍멍",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  //데이터가 추가될 때 마다 ID 추가 하는 기능
  const dataId = useRef(0);

  /* [일기 배열에 새로운 일기를 추가하는 함수]
  로직 : 1. DiaryEditor 에서 새로운 일기 작성 후 "저장하기" 버튼 클릭
         2. 작성한 일기가 onCreate 함수를 통해 data에 업데이트 됨. */
  const onCreate = (author, content, emotion) => {
    //현재 시간
    const created_date = new Date().getTime();

    //새로운 일기아이템으로 추가되어야 하는 데이터를 담은 상수
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
