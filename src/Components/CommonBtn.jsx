
import { GoArrowUpRight } from "react-icons/go";


const CommonBtn = ( {children}) => {
  return (
    <button className='bg-primary
    text-white text-[15px] font-bold rounded-full py-3.75 px-8.75 flex items-center gap-1.5
    '>
        {children}
        <GoArrowUpRight />
    </button>
  )
}

export default CommonBtn;