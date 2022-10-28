import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  console.log(diaryList);

  return (
    <div className="DiaryList">
      <h4>{diaryList.length} 개의 일기가 있습니다!</h4>

      {/* Props로 받은 diaryList를 배열로 랜더링 하는 구문 */}
      <div>
        {diaryList.map((item) => (
          <DiaryItem
            key={item.id}
            {...item}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
};

//예상외의 Props가 전달 되었다면 해당 구문이 실행하며 빈 배열이 노출함
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
