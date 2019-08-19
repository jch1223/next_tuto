import Link from 'next/link'

const linkStyled = {
  marginRight: 15
}

function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyled}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyled}>about</a>
      </Link>
    </div>
  )
}

export default Header
