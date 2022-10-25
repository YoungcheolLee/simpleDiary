import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이영철",
    content: "안녕 첫 일기!",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "강수영",
    content: "나는 수영쿤",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "감자",
    content: "아빠가 넘 좋앙 멍멍",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "후추",
    content: "엄마가 넘 좋앙 멍멍",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
