import Image from "next/image";

export const Footer = () => {
  return (
    <div className="text-center">
      <div>Contact Us</div>
      <hr className="my-4" />
      <div className="flex justify-between gap-4 items-center p-4">
        <Image width={80} height={40} alt="mainlogo" src="/GI_logo.png" />
        <p className="text-sm">
          Copyright © 2024 Trademark AI. <br/> All rights reserved by GigaIntel
        </p>
      </div>
    </div>
  );
};
