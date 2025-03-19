import Button from "./Ui/Buttons";
import Modal from "./Ui/Modal";

interface IProps {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}
const Header = ({close , open , isOpen}: IProps) => {
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
      <Modal isOpen={isOpen} close={close} title="Add New Product">

        <div className="mt-4 flex space-x-2">
          <Button
            intent="primary"
            onClick={close}
          >
            Submit
          </Button>
          <Button
            intent="close"
            onClick={close}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
