'use client'

import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useCallback, useLayoutEffect, useState } from 'react'

export default function ThemeButton() {
  const { setTheme, theme } = useTheme()
  const [loaded, setLoaded] = useState(false)

  useLayoutEffect(() => {
    setLoaded(true)
  }, [loaded])

  const onClickThemeIcon = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [setTheme, theme])

  return (
    <div>
      {loaded && theme === 'dark' && (
        <SunIcon
          onClick={onClickThemeIcon}
          className="h-[1.2rem] w-[1.2rem] transition-all"
        />
      )}

      {loaded && theme === 'light' && (
        <MoonIcon
          onClick={onClickThemeIcon}
          className="h-[1.2rem] w-[1.2rem] transition-all"
        />
      )}
    </div>
  )
}
