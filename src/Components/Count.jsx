const Count = ({countNumber, text}) => {
  return (
    <div className="p-8.5 bg-[#140C1C] border-r border-r-[#FFFFFF]/14 last:border-none">
        <strong className="text-[48px] font-bold text-primary font-sora">{countNumber}</strong>
      <p className=" text-white/60 text-[16px] ">
        {text}
      </p>
    </div>
  );
};

export default Count;
