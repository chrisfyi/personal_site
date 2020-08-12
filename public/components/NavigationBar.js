import NavBar from 'react-bootstrap'


const NavBar= () => {

    return (
       <>
        <Navbar bg="light">
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
        </>
    )


}

return NavBar;