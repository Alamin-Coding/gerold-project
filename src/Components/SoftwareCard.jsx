import Icon1 from "../assets/carditem1.png"

const SoftwareCard = ({
  icon = Icon1,
  title = "Adobe After Effect",
  description = "Adobe After Effects is a powerful software application used motion graphics.",
  progress = 92,
}) => {
  return (
    <div className="w-[305px] h-[326px] rounded-[24px] bg-[#05080b] px-7 py-11 text-white">
      {/* Header */}
      <div className="flex items-center gap-5">
        {/* Icon */}
        <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#11051c] shadow-[0_0_0_4px_rgba(193,132,244,0.12)]">
          <img src={icon} alt="" />
        </div>

        {/* Title */}
        <h3 className="max-w-[155px] text-[21px] font-normal leading-[1.15] tracking-[-0.3px] text-[#f5f5f5]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-5 max-w-[245px] text-[17px] font-normal leading-[1.4] text-[#929397]">
        {description}
      </p>

      {/* Progress */}
      <div className="mt-[45px]">
        <div className="mb-2 flex justify-end">
          <span className="text-[16px] font-normal text-[#eeeeee]">
            {progress}%
          </span>
        </div>

        <div className="h-[4px] w-full overflow-hidden rounded-full bg-[#282b2f]">
          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareCard;
