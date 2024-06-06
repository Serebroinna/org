import "./footer.css";

const Footer = () => {
    return <footer>
        <div className="redes">
            <a href="https://www.google.com">
                <img src="/img/facebook.png" alt="imagen"></img>
            </a>
            <a href="https://www.google.com">
                <img src="/img/instagram.png" alt="imagen"></img>
            </a>
            <a href="https://www.google.com">
                <img src="/img/twitter.png" alt="imagen"></img>
            </a>
        </div>
        <img src="favicon.png" alt="imagen"></img>
        <strong>Desarrollado por Ivan Beltran</strong>
    </footer>
}

export default Footer;