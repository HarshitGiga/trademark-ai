import { text } from "stream/consumers";

interface ButtonProps {
  buttonType?: "primary" | "secondary" | "danger" | "success"; // Example button types
  text: string;
  secondaryText?: string;
  style?: string;
}

const buttonStyles = {
  primary: "bg-primary text-white hover:bg-primary hover:shadow-md",
  secondary:
    "bg-transparent text-black border-1 hover:bg-transparent hover:text-primary hover:shadow-md",
  danger: "bg-danger text-white hover:bg-danger hover:shadow-md",
  success: "bg-success text-white hover:bg-success hover:shadow-md",
};
export const Button = ({ buttonType, text, secondaryText, style }: ButtonProps) => {
  const buttonStyle = buttonType
    ? buttonStyles[buttonType]
    : buttonStyles.primary;
  switch (buttonType) {
    case "primary": {
      return (
        <PrimaryButton text={text} secondaryText={secondaryText} />
      );
    }
    case "secondary": {
      return <SecondaryButton text={text} />;
    }
    default: {
      return <PrimaryButton text={text} secondaryText={secondaryText} />;
    }
  }
};

const PrimaryButton = ({ text, secondaryText }: ButtonProps) => {
  return (
    <button className="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group bg-primary">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
        <span className="px-1">{secondaryText}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
        {text}
      </span>
      <span className="relative invisible">Button Text</span>
    </button>
  );
};

const SecondaryButton = ({ text }: ButtonProps) => {
  return (
    <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
        {text}
      </span>
      <span className="relative invisible">Button Text</span>
    </button>
  );
};
