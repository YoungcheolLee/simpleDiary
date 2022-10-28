import React, { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

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

  const onRemove = (targetId) => {
    console.log(`targetId(${targetId})가 삭제되었습니다.`);
    const newDiaryList = data.filter((item) => item.id !== targetId);
    setData(newDiaryList);
  };

  /** #수정하기 기능의 onEdit 로직설명
   *  setData를 통해서 어떠한 값을 전달함
   *  변경하는 값은 어떻게만드냐?
   *  - onEdit함수는 어떠한 특정 일기 데이터를 수정하는 함수 이기때문에 매개변수로 받은 targetId와 원본데이터의 id를 비교한다.
   *  - 원본데이터 배열에 mpa 함수를 이용하여 모든 요소를 순회하면서 새로운 배열을 만든다.
   *  - 삼항연산자를 통해 원본배열의 id와 매개변수로 받은 targetId가 같다면 ? 수정한 데이터로 배열을 바꿔주고 그렇지 않다면 기존 데이터를 출력해라.
   */

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((item) =>
        item.id === targetId ? { ...item, content: newContent } : item
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
