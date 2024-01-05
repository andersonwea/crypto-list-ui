import Image from 'next/image'
import logo1 from '@/assets/logo1.svg'
import logo2 from '@/assets/logo2.svg'

export function Logo() {
  return (
    <>
      <div className="max-sm:hidden">
        <Image
          src={logo1}
          alt="logomarca do Port Dev"
          width={154}
          height={40}
          className="min-w-[154px]"
        />
      </div>
      <div className="hidden max-sm:block w-[104px]">
        <Image
          src={logo2}
          alt="logomarca do Port Dev"
          width={134}
          height={40}
          className="w-[154px] h-[40px]"
        />
      </div>
    </>
  )
}
