import React from 'react';
import Logos from './Logos';
import '../styles/footer.css'; // importo los estilos del footer

const Footer = () => {
	return (
		<footer>
			<div class="footer__logo">
				<figure>
					<img src={Logos.animebdrip} alt="AnimeBDRip" class="footer__logo" />
				</figure>
			</div>
			<div class="footer__redes">
				<p>Siguenos en nuestras redes solciales</p>
				<div class="footer__redes--enlaces">
					<p>Facebook</p>
					<p>Twitter</p>
					<p>Discord</p>
					<div>
						<figure class="footer__redes--logo">
							<img src={Logos.facebook} alt="Facebook" />
						</figure>
					</div>
					<div>
						<figure class="footer__redes--logo">
							<img src={Logos.twitter} alt="Facebook" />
						</figure>
					</div>
					<div>
						<figure class="footer__redes--logo">
							<img src={Logos.discord} alt="Facebook" />
						</figure>
					</div>
				</div>
			</div>
			<div class="footer__contacto">
				<p><b>Contacto: </b>juanfed12345@gmail.com</p>
				<p><b>Medellin-Colombia</b></p>
			</div>
			<div class="footer__copyright">
				<p>Derechos reservados <b>© 2022 AnimeBDRip</b></p>
				<p><b>Made with ❤ by AnimeBDRip</b></p>
			</div>
		</footer>
	);
};

export default Footer;
