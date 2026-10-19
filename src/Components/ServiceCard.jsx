import icon from "../assets/service-icon (1).png";

const ServiceCard = ({ img, title, description, listArray = [] }) => {
  return (
    <div className="p-7.5 bg-[#050709]">
      <div className="size-[64px] bg-primary rounded-full p-1 flex items-center justify-center">
        <img src={img || icon} alt="icon" />
      </div>
      <h3 className="font-bold text-[30px] pt-[34px] pb-4 text-white">
        {title}
      </h3>
      <p className="text-white/60 leading-normal pb-5.5">{description}</p>

      <ul className="grid gap-3 list-disc pl-5">
        {listArray.map((list) => (
          <li key={list} className="text-white ">
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
