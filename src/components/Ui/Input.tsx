import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{}
const Input = ({...rest}:IProps) => {
  return <input className="border border-gray-300 rounded-md p-2 my-1 focus:outline-indigo-700" {...rest}/>
}

export default Input