import { ChangeEvent, FormEvent, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { categories, colors, FormData, ProductData } from "./data";
import Modal from "./components/Ui/Modal";
import Input from "./components/Ui/Input";
import Button from "./components/Ui/Buttons";
import { IProduct } from "./interfaces";
import { productValidation } from "./Validation";
import ErrorMessage from "./components/Ui/ErrorMessage";
import CircleColor from "./components/Ui/CircleColor";
import Select from "./components/Ui/Select";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const defaultProduct = {
    title: "",
    description: "",
    imgUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imgurl: "",
    },
  };

  const productError = { title: "", description: "", imgUrl: "", price: "" };
  const [products, setProducts] = useState<IProduct[]>(ProductData);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [errors, setErrors] = useState(productError);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForEdit, setIsOpenForEdit] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [selected, setSelected] = useState(categories[0]);
  const [selectedProduct, setSelectedProduct] =
    useState<IProduct>(defaultProduct);
  const [productIndex, setProductIndex] = useState<number>(0);
  const [isOpenForDelete, setIsOpenForDelete] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const openEdit = () => {
    setIsOpenForEdit(true);
  };
  const closeEdit = () => {
    setIsOpenForEdit(false);
  };
  const openDelete = () => {
    setIsOpenForDelete(true);
  };
  const closeDelete = () => {
    setIsOpenForDelete(false);
  };

  const renderColorsList = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prevColor) =>
            prevColor.filter((item) => item !== color)
          );
          return;
        }
        if (selectedProduct.colors.includes(color)) {
          setTempColor((prevColor) =>
            prevColor.filter((item) => item !== color)
          );
          return;
        }
        setTempColor((prevColor) => [...prevColor, color]);
      }}
    />
  ));

  const handleChangeForEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description, imgUrl, price } = product;
    const errors = productValidation({
      title,
      description,
      imgUrl,
      price,
    });

    const isVaild =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!isVaild) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      {
        ...product,
        colors: tempColor,
        id: products.length + 1,
        category: selected,
      },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempColor([]);
    close();
    toast.success('Product added successfully');
  };
  const handleSubmitToEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = productValidation({
      title: selectedProduct.title,
      description: selectedProduct.description,
      imgUrl: selectedProduct.imgUrl,
      price: selectedProduct.price,
    });
    const isVaild =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!isVaild) {
      setErrors(errors);
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[productIndex] = {
      ...selectedProduct,
      colors: tempColor.concat(selectedProduct.colors),
    };
    if(!updatedProducts){
      return;
    }
    setProducts(updatedProducts);
    setSelectedProduct(defaultProduct);
    setTempColor([]);
    closeEdit();
    toast.success('Product Updated successfully');
  };

  const onCancle = () => {
    setErrors(productError);
    setProduct(defaultProduct);
    close();
  };

  const handleDeleteProduct = () => {
    const filtered = products.filter(
      (product) => product.id !== selectedProduct.id
    );
    setProducts(filtered);
    closeDelete();
    toast.success('Product Deleted successfully');
  };

  return (
    <>
      <main className="constainer w-[90%] mx-auto my-3 ">
        <Header open={open} />
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              setProductIndex={setProductIndex}
              setSelectedProduct={setSelectedProduct}
              openEdit={openEdit}
              openDelete={openDelete}
            />
          ))}
        </div>

        {/* Modal for ADD Product */}
        <Modal isOpen={isOpen} close={close} title="Add New Product">
          <form onSubmit={handleSubmit}>
            {FormData.map((input) => (
              <div className="flex flex-col" key={input.id}>
                <label htmlFor={input.id} className="font-medium text-sm">
                  {input.lable}
                </label>
                <Input
                  type={input.type}
                  name={input.name}
                  id={input.id}
                  value={product[input.name]}
                  onChange={handleChange}
                />
                <ErrorMessage message={errors[input.name]} />
              </div>
            ))}
            <Select selected={selected} setSelected={setSelected} />
            <div className="flex flex-wrap space-x-1 my-2">
              {renderColorsList}
            </div>
            <div className="flex flex-wrap space-x-1 space-y-1">
              {tempColor.map((color) => (
                <span
                  key={color}
                  className="p-1 text-sm rounded-md"
                  style={{ backgroundColor: color, color: "white" }}
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              <Button intent="primary" type="submit">
                Submit
              </Button>
              <Button intent="close" onClick={onCancle}>
                Close
              </Button>
            </div>
          </form>
        </Modal>

        {/* Modal for Edit Product */}
        <Modal
          isOpen={isOpenForEdit}
          close={closeEdit}
          title="Edit this Product"
        >
          <form onSubmit={handleSubmitToEdit}>
            {FormData.map((input) => (
              <div className="flex flex-col" key={input.id}>
                <label htmlFor={input.id} className="font-medium text-sm">
                  {input.lable}
                </label>
                <Input
                  type={input.type}
                  name={input.name}
                  id={input.id}
                  value={selectedProduct[input.name]}
                  onChange={handleChangeForEdit}
                />
                <ErrorMessage message={errors[input.name]} />
              </div>
            ))}
            <Select
              selected={selectedProduct.category}
              setSelected={(value) =>
                setSelectedProduct({ ...selectedProduct, category: value })
              }
            />
            <div className="flex flex-wrap space-x-1 my-2">
              {renderColorsList}
            </div>
            <div className="flex flex-wrap space-x-1 space-y-1">
              {tempColor.concat(selectedProduct.colors).map((color) => (
                <span
                  key={color}
                  className="p-1 text-sm rounded-md"
                  style={{ backgroundColor: color, color: "white" }}
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              <Button intent="primary" type="submit">
                Submit
              </Button>
              <Button intent="close" onClick={onCancle}>
                Close
              </Button>
            </div>
          </form>
        </Modal>

        {/* Modal for Delete Product */}
        <Modal
          isOpen={isOpenForDelete}
          close={closeDelete}
          title="Are you sure you want to delete this Product ?"
          description="Deleting this product will permanently remove it from your store. This action cannot be undone."
        >
          <div className="mt-4 flex space-x-2">
            <Button
              intent="secondary"
              type="submit"
              onClick={handleDeleteProduct}
            >
              Yes , Delete
            </Button>
            <Button intent="close" onClick={closeDelete}>
              Cancel
            </Button>
          </div>
        </Modal>


        {/* Toast */}
        <Toaster toastOptions={
        {
          duration: 4000,
          style: {
            fontWeight: 500
          }
        }
        } />
      </main>
    </>
  );
}

export default App;
