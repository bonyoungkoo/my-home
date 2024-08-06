import Menu from '@/components/Menu'
import ThemeButton from '@/components/ThemeButton'

export default function Header() {
  return (
    <div className="w-[100vw] mt-4 mb-4 px-4 flex justify-between items-center">
      <Menu />
      <ThemeButton />
    </div>
  )
}
