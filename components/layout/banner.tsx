import Image from "next/image";
interface IBanner {
  src: string | null
}
const Banner: React.FC<IBanner> = ({ src }) => {
  return <div className='w-full h-auto'>
    <Image src={src ?? 'https://static.cdnno.com/storage/topbox/d771ac7ebfc83a66b2b27157b3400a15.webp'} alt='banner' width="0"
      height="0"
      sizes="100vw"
      className="w-full h-auto" />
  </div>
}

export default Banner