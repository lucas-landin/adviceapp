"use client"
import Image from "next/image"
import ImageSwitcher from "./components/ImageSwitcher"
import {  useState } from 'react';
import axios from 'axios';


export default function Home() {

  const [data, setData] = useState([]);
  const [advice, setAdvice] = useState('If you need a advice press the button');
  const [id, setId] = useState(0);


  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setData(response.data);
      setAdvice(response.data.slip.advice) 
      setId(response.data.slip.id)
      console.log(data)
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };
 


  return (
   <div className='flex flex-col text-center p-5 w-96  mx-3 rounded-3xl bg-[#313A49]'>
    <div className='adviceNumber mt-1'>
     <p className=' tracking-[0.3rem]  uppercase text-xs'>Advice <span> # {id}</span> </p>
    </div>

    <div className=' text-center mt-5 text-xl px-3 text-[#CEE3E9] font-bold '>
      <p>"{advice}"</p>
    </div>

     <div className="mt-2">
       <ImageSwitcher />
     </div>
      
      <div className=" relative top-11">
      <button onClick={fetchData} className=" bg-[#4FFFB1] p-3 rounded-full">
        
      <Image
      src="/icon-dice.svg"
      alt="Dados"
      width={24}
      height={24}
     />
      </button>
      </div>
        
   </div>
  )
}
