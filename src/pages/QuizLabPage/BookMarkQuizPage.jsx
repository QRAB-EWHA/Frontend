import { useQuery } from "@tanstack/react-query";
import PageDefauleTemplate from "../../components/Common/PageDefauleTemplate";
import BookMarkComponent from "../../components/QuizLabPage/BookMarkComponent";
import { getBookmarkQuizByNote } from "../../services/api/bookmark";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Common/NavBar";
import BookMarkQuizComponent from "../../components/QuizLabPage/BookMarkQuizComponent";

const BookMarkQuizPage = () => {
  const { id } = useParams();

  const {
    data: bookmarkQuizByNote,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookmarkQuizByNote", id],
    queryFn: () => getBookmarkQuizByNote(id),
  });
  return (
    <>
      <div className={`w-full h-screen bg-neutralwhite `}>
        <NavBar />
        <BookMarkQuizComponent bookmarkQuizByNote={bookmarkQuizByNote} />
      </div>
    </>
  );
};

export default BookMarkQuizPage;
