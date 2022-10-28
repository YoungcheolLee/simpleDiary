import { useRef, useState } from "react";

const DiaryItem = ({
  onRemove,
  onEdit,
  id,
  author,
  content,
  emotion,
  created_date,
}) => {
  //수정중인지? 수정중이 아닌지? 를 판별하는 boolean type state
  //isEidt 함수가 true값을 갖는다면 "수정중" 인걸로 간주해서 컨텐츠 부분에 수정하는 폼을 띄운다.
  const [isEdit, setIsEdit] = useState(false);

  //호출이 되는 순간 원래 isEdit값을 반전시킴. "!" 를 통해 not연산 수행
  const toggleIsEdit = () => setIsEdit(!isEdit);

  //수정폼에 입력하는 데이터들도 state로 handleing이 가능하게 해주는 state
  const [localContent, setLocalContent] = useState(content);

  //수정폼 focus 기능을 위한 useRef() 생성
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  //수정하기 버튼을 눌렀을때 content 영역의 내용 초기화 하는 작업
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  //수정완료 버튼을 눌렀을 때 실행되는 함수
  const handleEdit = () => {
    if (localContent.length < 4) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          ></textarea>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
