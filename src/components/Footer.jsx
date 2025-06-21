function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <div className="container text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} Nền Tảng Học Tập | 
          <a href="https://github.com/konnn04/reviews-it" 
             className="text-white ms-1" 
             target="_blank" 
             rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
      <div className="container text-center mt-2">
        <img src="https://count.getloli.com/get/@konn04_review_it?theme=rule34" alt="" srcset="" className="img-fluid" height="100" />
      </div>
    </footer>
  );
}

export default Footer;