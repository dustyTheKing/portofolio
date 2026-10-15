import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative w-full h-[700px] xl:h-full xl:flex xl:max-w-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        fill
        className="object-contain"
        style={{ objectPosition: "center bottom" }}
        priority
      />
    </div>
  );
};

export default Avatar;
