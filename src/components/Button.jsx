import Link from 'next/link'
import clsx from 'clsx'

export function Button({ invert, href, className, children, ...props }) {
  className = clsx(
    className,
    'inline-flex tracking-tight transEffect min-w-[165px] flex justify-center text-[15px] leading-[15px] py-[14px] px-5 font-BearFont-semibold text-white hover:bg-transparent hover:text-[#D23D3C] bg-[#D23D3C] border border-1 border-[#D23D3C] rounded-full',
    invert
      ? ''
      : ''
  )

  let inner = <span className="relative top-px">{children}</span>

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {inner}
    </button>
  )
}
