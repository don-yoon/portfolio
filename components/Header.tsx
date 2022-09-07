import React from "react"
import { Navbar, Dropdown } from "flowbite-react"
import Link from "next/link"

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        theDon
      </Navbar.Brand>
      <Dropdown 
        label="Menu"
        inline={true}>
        <Dropdown.Item>
          <Link href="/projects">
            Projects
          </Link>
        </Dropdown.Item>

      </Dropdown>
    </Navbar>
  )
}


export default Header