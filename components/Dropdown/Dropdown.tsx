interface DropdownProps {
  options?: string[];
  title: React.ReactNode | string;
}
export const Dropdown = ({ options, title }: DropdownProps) => {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="">
        {title}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-primary text-white"
      >
        {options &&
          options.map((option, index) => (
            <li key={index}>
              <a>{option}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};
