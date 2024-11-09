const RankingBox = ({ mainData }) => {
  return (
    <>
      <div className="flex flex-col justify-center w-[16.5rem] h-[18.375rem] px-6 border-[1px] border-white rounded-[1rem] bg-[rgba(255,255,255,0.10)]">
        <div className="mb-2 text-xl font-semibold text-white">랭킹</div>
        <div className="mb-4 text-base font-semibold text-gray_300">
          이번 달 가장 많은 퀴즈를 푼 친구
        </div>
        <div className="flex flex-col gap-[0.4rem] h-[9.875rem] overflow-auto custom-scrollbar-skyblue">
          {mainData.friendScoreDTOS.map((it, index) => (
            <div className="flex items-center gap-4 ">
              <div className="text-xl font-semibold text-gray_300">
                {index + 1}
              </div>
              <div className="text-base font-medium text-white">
                {it.friendNickname}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RankingBox;
