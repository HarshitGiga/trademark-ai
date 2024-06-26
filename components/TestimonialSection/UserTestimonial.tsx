import Image from "next/image";

type UserCardProps = {
  name: string;
  photo?: string;
  role?: string;
  company?: string;
  text: string;
};
export const UserCard = ({
  name,
  photo,
  role,
  company,
  text,
}: UserCardProps) => {
  return (
    <div className="group relative mx-auto my-4">
      <div className="relative rounded-lg bg-slate-100 p-6 transition-transform duration-300 ease-in-out z-20 group-hover:rotate-2">
        <div className="m-4 flex gap-2 items-center">
          {photo && (
            <div className="avatar">
              <div className="w-14 rounded-full">
                <Image src={photo} width={100} height={100} alt="" />
              </div>
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            {role && <span className="text-lg">{role}, </span>}
            {company && <span className="text-lg">{company}</span>}
          </div>
        </div>
        <p className="mb-4 p-4">{text}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-background transition-transform duration-300 ease-in-out z-10 group-hover:-rotate-2"></div>
    </div>
  );
};
