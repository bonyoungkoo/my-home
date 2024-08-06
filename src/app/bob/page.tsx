import Header from '@/components/Header'
import { Utensils } from 'lucide-react'

export default function Bob() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex justify-center items-center m-[5px] w-[200px] h-[150px] rounded-xl border-4 border-solid border-white">
          <Utensils size={100} />
        </div>
        <div className="flex justify-center items-center m-[5px] w-[200px] h-[150px] rounded-xl border-4 border-solid border-white">
          <Utensils size={100} />
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-center items-center m-[5px] w-[200px] h-[150px] rounded-xl border-4 border-solid border-white">
          <Utensils size={100} />
        </div>
        <div className="flex justify-center items-center m-[5px] w-[200px] h-[150px] rounded-xl border-4 border-solid border-white">
          <Utensils size={100} />
        </div>
      </div>
    </>
  )
}
