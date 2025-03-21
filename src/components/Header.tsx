
import Button from "./Ui/Buttons";

interface IProps {
  open: () => void;
}
const Header = ({ open }: IProps) => {
  return (
    <>
      <div className="flex justify-between items-center my-5">
        <h1 className="font-bold md:text-2xl lg:text-3xl xl:text-4xl">
          Latest <span className="text-indigo-700">Products</span>
        </h1>
        <Button fullWidth={false} size={"md"} onClick={open}>
          Build Now
        </Button>
      </div>
      
    </>
  );
};

export default Header;
