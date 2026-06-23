import Logos from './Logos.js'

import '../styles/footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer__logo">
        <figure>
          <img src={Logos.animebdrip} alt="AnimeBDRip" loading="lazy" />
        </figure>
      </div>
      <div className="footer__redes">
        <p>Síguenos en nuestras redes sociales</p>
        <div className="footer__redes--enlaces">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Discord</p>
          <div>
            <figure className="footer__redes--logo">
              <img src={Logos.facebook} alt="Facebook" loading="lazy" />
            </figure>
          </div>
          <div>
            <figure className="footer__redes--logo">
              <img src={Logos.twitter} alt="Twitter" loading="lazy" />
            </figure>
          </div>
          <div>
            <figure className="footer__redes--logo">
              <img src={Logos.discord} alt="Discord" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
      <div className="footer__contacto">
        <p><b>Contacto: </b>juanfed12345@gmail.com</p>
        <p><b>Medellín-Colombia</b></p>
      </div>
      <div className="footer__copyright">
        <p>Derechos reservados <b>© {year} AnimeBDRip</b></p>
        <p><b>Made with ❤ by AnimeBDRip</b></p>
      </div>
    </footer>
  )
}

export default Footer
