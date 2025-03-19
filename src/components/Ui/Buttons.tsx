import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { tailwindMerge } from "../../Utils";

// cva for button
const buttonVariant = cva("text-white rounded-md cursor-pointer", {
  variants: {
    intent: {
      primary: "bg-indigo-600",
      secondary: "bg-red-700",
      close: "bg-gray-600",
    },
    size: {
      sm: "font-small p-1",
      md: "font-medium py-2 px-4",
      lg: "font-bold p-3",
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
    fullWidth: true,
  },
});

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariant> {
  children: ReactNode;
}
const Button = ({ children, intent, size, fullWidth, ...rest }: IProps) => {
  return (
    <button className={tailwindMerge(buttonVariant({ intent, fullWidth, size }))} {...rest}>
      {children}
    </button>
  );
};

export default Button;
