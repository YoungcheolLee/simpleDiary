import React, { useRef, useState } from "react";

/* [설명]
   - 다이어리 "작성" 기능을 담당하는 컴포넌트
*/
const DiaryEditor = ({ onCreate }) => {
  //useRef함수를 호출하여 어떠한 반환값을 authorInput 이란 상수에 담아줌
  //useRef()는 DOM요소를 선택가능하게 하는 기능
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 3,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(state);
    if (state.author.length < 1) {
      alert("작성자명을 입력해 주세요!");
      authorInput.current.focus();
      //current = 현재가르키는 값. 즉 authorInput.current = authorInput 태그 이고, focus()를 통해 포커스 기능을 넣어줌
      return;
    }

    if (state.content.length < 4) {
      alert("일기의 본문을 3글자 이상 입력해주세요!");
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("일기 저장성공!");

    //저장 후 editor 부분 초기화 작업
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          //ref 속성에 에 authorInput을 담아 해당 input태그에 접근이 가능하다.
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          placeholder={"작성자"}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="일기 본문"
        />
      </div>
      <div>
        오늘의 감정점수 : &nbsp;
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
