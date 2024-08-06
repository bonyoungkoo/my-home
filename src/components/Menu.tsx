'use client'

import cn from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Navigation = {
  name: string
  href: string
}

const navigationList = [
  {
    name: '홈',
    href: '/home',
  },
  {
    name: '밥먹자',
    href: '/bob',
  },
  {
    name: '일정',
    href: '/calendar',
  },
  {
    name: '게임',
    href: '/game',
  },
]

export default function Menu() {
  const pathname = usePathname()

  return (
    <div className="flex justify-center">
      {navigationList.map((v: Navigation) => (
        <Link
          key={v.name}
          href={v.href}
          className={cn(
            'flex h-7 items-center justify-center rounded-full px-4 text-center text-lg transition-colors hover:text-foreground/80',
            pathname.startsWith(v.href) ? 'bg-muted' : 'text-muted-foreground',
          )}
        >
          {v.name}
        </Link>
      ))}
    </div>
  )
}
