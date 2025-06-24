import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header({ title }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
            <Nav.Link as={Link} to="#" onClick={() => {
              alert('Web hiện tại chỉ là web tĩnh, tính năng quản lý hay đóng góp tài liệu sẽ được cập nhật trong tương lai gần.');
            }}>Đóng góp tài liệu</Nav.Link>
            
            <Nav.Link href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
              Trick A+ mọi môn
            </Nav.Link>
            <Nav.Link onClick={toggleTheme} className="theme-switch">
              <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
            </Nav.Link>
            <Nav.Link href="https://github.com/konnn04/reviews-it" target="_blank">
              <i className="bi bi-github"></i> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;