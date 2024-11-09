import StoredNote from "../NoteStorePage/StoredNote";
import noteIcon1 from "../../assets/storenotepage/note_icon1.svg";
import GoButton from "./Button/GoButton";
const threeNoteInfo = [
  {
    noteId: 6,
    title: "object oriented programming 개념 정리",
    categoryName: "하이",
    createdAt: "2024-11-02T23:23:21.665893",
    chatgptContent:
      "오버로딩과 객체 관리\n\n오버로딩\n오버로딩은 메서드나 생성자의 매개변수 개수, 타입, 순서가 다를 때 발생하며, 반환 타입은 오버로딩에 영향을 미치지 않는다. 예를 들어, 같은 이름의 메서드가 서로 다른 매개변수를 가질 수 있어 다양한 방식으로 호출될 수 있다.\n\n객체 소멸 및 가비지 컬렉션\n자바에서는 `new` 키워드를 사용하여 객체를 생성하고, 이 객체는 자바 가상 머신(JVM)에 의해 관리된다. 객체가 더 이상 참조되지 않으면 가비지(gar",
  },
  {
    noteId: 2,
    title: "object oriented programming 개념 정리",
    categoryName: "하이자식1",
    createdAt: "2024-11-02T21:34:52.198406",
    chatgptContent:
      "자바 프로그래밍 개요\n\n오버로딩\n오버로딩은 동일한 메서드 이름을 사용하되 매개변수의 개수, 타입, 순서가 서로 다르게 정의하는 기술이다. 반환 타입은 오버로딩에 영향을 미치지 않는다.\n\n객체 소멸 및 가비지 컬렉션\n자바에서 객체는 `new` 키워드를 통해 생성되며, 사용이 끝나면 자바 가상 머신(JVM)이 메모리를 가용 메모리로 반환한다. 가비지라 불리는 객체는 가리키는 레퍼런스가 없을 때 발생하며, JVM의 가비지 컬렉터가 이를 자동으로 회수",
  },
  {
    noteId: 1,
    title: "object oriented programming 개념 정리",
    categoryName: "하이",
    createdAt: "2024-11-02T21:34:33.708414",
    chatgptContent:
      "자바의 오버로딩과 메모리 관리\n\n오버로딩\n오버로딩은 동일한 메서드 이름을 가지고, 매개변수의 개수, 타입, 순서가 서로 다를 때 발생한다. 반환 타입은 오버로딩에 영향을 미치지 않는다. 예를 들어, 다음과 같은 메서드들이 오버로딩의 예시가 될 수 있다:\n```java\nvoid example(int a);\nvoid example(double b);\nvoid example(int a, double b);\n```\n\n객체 소멸 및 가비지 컬렉션\n자바에",
  },
];

const MyNote = ({ mainData }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-2 text-xl font-semibold">나의 노트</div>
        <div className="mb-6 text-base font-medium text-gray_499">
          최근 내가 추가한 노트를 확인해 보세요
        </div>
        <div className="flex gap-5">
          {mainData.threeNoteInfo.length === 0 ? (
            <div className="flex justify-center w-full">
              <GoButton
                text="최근 추가한 노트가 없어요!"
                subText="노트 생성하러 가기"
                url="/storenote"
              />
            </div>
          ) : (
            mainData.threeNoteInfo.map((it, index) => (
              <>
                <StoredNote
                  noteName={it.title}
                  noteId={it.noteId}
                  noteContent={it.chatgptContent}
                  noteIcon={noteIcon1}
                  parentCategory={it.parentCategoryName}
                  childCategory={it.categoryName}
                />
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default MyNote;
