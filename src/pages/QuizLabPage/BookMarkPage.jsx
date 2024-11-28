import { useParams } from "react-router-dom";
import PageDefauleTemplate from "../../components/Common/PageDefauleTemplate";
import BookMarkComponent from "../../components/QuizLabPage/BookMarkComponent";

const BookMarkPage = () => {
  return (
    <>
      <PageDefauleTemplate pageName="퀴즈 연구소">
        <BookMarkComponent />
      </PageDefauleTemplate>
    </>
  );
};

export default BookMarkPage;
