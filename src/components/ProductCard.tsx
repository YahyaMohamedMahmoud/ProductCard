import { IProduct } from "../interfaces";
import { textSlice } from "../Utils/textSlice";
import Button from "./Buttons";
import Image from "./Image";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  const { imgUrl, title, description, colors, price, categry } = product;
  return (
    <>
      <div className="border border-gray-200 rounded-md p-2">
        {/* image */}

        <Image
          src={imgUrl}
          className="rounded-md w-full h-52 md:object-center"
          alt={title}
        />

        {/* title */}
        <h1 className="font-bold my-2">{textSlice(title, 30)}</h1>

        {/* description */}
        <p>{textSlice(description)}</p>

        {/* color */}
        <div className="flex gap-2 my-3">
          <span className="w-5 h-5 rounded-full bg-green-500 cursor-pointer" />
          <span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer" />
          <span className="w-5 h-5 rounded-full bg-black cursor-pointer" />
        </div>

        {/* price and category */}
        <div className="flex justify-between items-center">
          <p className="font-bold text-blue-500">${price}</p>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{categry.name}</span>
            <Image
              src={categry.imgurl}
              className="w-10 h-10 rounded-full object-fill"
              alt={categry.name}
            />
          </div>
        </div>

        {/* button */}

        <div className="flex space-x-2 mt-4">
          <Button>Edit</Button>
          <Button intent={"secondary"}>Delete</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
