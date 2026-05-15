
const QuizSkeleton = () => {
  return (
    <div className="flex flex-col h-full animate-pulse">
      <div className="mx-auto w-32 h-10 bg-white/20 border border-white/10 rounded-full mb-8 shadow-[0_4px_0px_rgba(0,0,0,0.1)]" />

      <div className="flex flex-col items-center gap-2 py-4 lg:py-6 mb-8">
        <div className="h-9 w-3/4 bg-white/30 border border-white/10 rounded-lg" />
        <div className="h-9 w-1/2 bg-white/30 border border-white/10 rounded-lg" />
      </div>

      <div className="px-2 lg:px-12 space-y-6 lg:space-y-12 flex-grow">
        <div className="grid grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-4 lg:gap-y-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="h-16 lg:h-[72px] bg-white/20 border border-white/10 rounded-lg shadow-[0_4px_0px_rgba(0,0,0,0.1)]" />
          ))}
        </div>

        <div className="flex flex-col justify-center gap-4 max-w-xl mx-auto mt-12">
          <div className="h-14 lg:h-16 w-full bg-white/30 border border-white/10 rounded-xl shadow-[0_4px_0px_rgba(0,0,0,0.1)]" />
          <div className="h-14 lg:h-16 w-full bg-white/15 border border-white/10 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default QuizSkeleton;
