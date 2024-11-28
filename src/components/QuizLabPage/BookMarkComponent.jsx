import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import BookMarkedQuiz from "./BookMarkedQuiz";
import { getBookmarkNote } from "../../services/api/bookmark";

const BookMarkComponent = () => {
  const [page, setPage] = useState(0);

  const {
    data: bookmarkNoteData,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookmarkNoteData", page],
    queryFn: () => getBookmarkNote(page),
  });

  return (
    <>
      <div className="flex flex-col items-center overflow-y-hidden relative ">
        <BookMarkedQuiz selectedNotes={bookmarkNoteData.bookmarkedNotes} />
      </div>
    </>
  );
};
export default BookMarkComponent;
