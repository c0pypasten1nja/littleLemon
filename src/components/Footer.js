import Logo from "../assets/Logo.svg";

function Footer() {
    return <footer>
        <div class="footer-nav">
            <div class="logo">
                <img src={Logo} alt="Little Lemon Logo"></img>
            </div>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="/reservation">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </div>
        <div class="contact">
            <p>123 Main Street, Chicago, IL</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@littlelemon.com</p>
        </div>
        <div class="social-media">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
        </div>
    </footer>
}

export default Footer;