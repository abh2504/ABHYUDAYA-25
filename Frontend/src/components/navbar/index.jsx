import "./style.css"

function Navbar() {
  return (
    <div className="nav-bar-container">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contactus">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
