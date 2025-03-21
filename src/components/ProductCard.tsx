import { IProduct } from "../interfaces";
import { textSlice } from "../Utils/textSlice";
import Button from "./Ui/Buttons";
import Image from "./Image";
import CircleColor from "./Ui/CircleColor";

interface IProps {
  product: IProduct;
  setSelectedProduct :(product: IProduct) => void  
  openEdit : ()=> void
  index : number;
  setProductIndex : (value : number) => void;
  openDelete : () => void
}
const ProductCard = ({ product , setSelectedProduct , openEdit , index , setProductIndex , openDelete}: IProps) => {
  const { imgUrl, title, description, colors, price, category} = product;

  const EditProduct = () =>{
    setSelectedProduct(product)
    setProductIndex(index)
    openEdit()
  }

  const DeleteProduct = () => {
    setSelectedProduct(product)
    openDelete()
  }
   

  return (
    <>
      <div className="border border-gray-200 rounded-md p-2">
        {/* image */}

        <Image
          className="rounded-md w-full h-52 md:object-center"
          src={imgUrl}
          alt={title}
        />

        {/* title */}
        <h1 className="font-bold my-2">{textSlice(title, 30)}</h1>

        {/* description */}
        <p>{textSlice(description)}</p>

        {/* color */}
        <div className="flex gap-1 my-3">
        {
            colors.map((color)=> <CircleColor key={color} color={color} /> )
          }
        </div>

        {/* price and category */}
        <div className="flex justify-between items-center">
          <p className="font-bold text-blue-500">${price},00</p>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{category.name}</span>
            <Image
              src={category.imgurl}
              className="w-10 h-10 rounded-full object-fill"
              alt={category.name}
            />
          </div>
        </div>

        {/* buttons */}
        <div className="flex space-x-2 mt-4">
          <Button onClick={() => EditProduct()}>Edit</Button>
          <Button intent={"secondary"} onClick={() => DeleteProduct()}>Delete</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
