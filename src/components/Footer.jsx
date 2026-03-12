export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <a href="#home" className="footer-logo">
                            <img
                                src="/logo-negativo.png"
                                alt="CenterSIM Logo"
                                style={{ height: '60px', marginBottom: '10px' }}
                                loading="lazy"
                                decoding="async"
                            />
                        </a>
                        <p className="footer-desc">
                            Prestadora de serviços no segmento da construção civil. Conectamos lojistas aos melhores fornecedores do mercado.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/centersimoficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="https://www.youtube.com/@redecentersim4689" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube" />
                            </a>
                            <a href="https://web.facebook.com/redecentersim" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="https://www.tiktok.com/@centersim?lang=pt-BR" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <i className="fab fa-tiktok" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4>Links Rápidos</h4>
                        <div className="footer-links">
                            <a href="#home">Home</a>
                            <a href="#quem-somos">Quem somos</a>
                            <a href="#parceiros">Parceiros Lojistas</a>
                            <a href="#fornecedores">Nossos fornecedores</a>
                            <a href="#contato">Contato</a>
                        </div>
                    </div>

                    <div>
                        <h4>Contato</h4>
                        <div className="footer-links">
                            <a href="mailto:centersim@simnegocios.com.br">centersim@simnegocios.com.br</a>
                            <a href="tel:+551123863627">(11) 2386-3627</a>
                            <a href="tel:+551123863657">(11) 2386-3657</a>
                            <p style={{ fontSize: '0.95rem' }}>Rua Apeninos, 1126 – 9º andar<br />Paraíso – São Paulo-SP</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>©2026 CenterSIM. Todos os direitos reservados.</span>
                    <div className="footer-bottom-links">
                        <a href="#">Política de privacidade</a>
                        <a href="#">Termos de uso</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
