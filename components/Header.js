import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white p-3 text-gray-800 shadow-sm">
      <div className="mx-2 flex flex-row justify-between md:mx-4">
        <div className="mx-auto flex items-center">
          <Link href="/">
            <a className="text-2xl font-bold md:text-4xl">⌚ Watch Business</a>
          </Link>
        </div>
      </div>
    </header>
  )
}
