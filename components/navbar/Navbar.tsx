import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"
interface NavsType {
  path: string,
  text: string
}
const navItems: NavsType[] = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]
export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-20 p-2 m-2 rounded">
      <Link href='/' className="flex item-center"> <span><HomeIcon size={16} className="mr-1" /> Home</span></Link>
      <div className="flex flex-1"></div>
      {
        navItems.map((nav: NavsType, index: number) =>
          <ActiveLink key={index+nav.text} {...nav}/>
        )
      }
    </nav>
  )
}
