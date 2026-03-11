import { Link } from 'react-router-dom'

export default function JaSouParceiro() {
    return (
        <main>
            {/* Page Hero */}
            <div className="page-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Já sou parceiro</span>
                    </div>
                    <h1>Área do Parceiro</h1>
                    <p>Acesse a plataforma e todas as ferramentas exclusivas para parceiros CenterSIM</p>
                </div>
            </div>

            {/* Welcome */}
            <section className="section">
                <div className="container">
                    <div className="partner-app-grid">
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>
                                É um prazer ter você como parceiro lojista. <span style={{ color: 'var(--primary)' }}>Obrigado por confiar em nós!</span>
                            </h2>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '16px' }}>
                                Nossa plataforma foi desenvolvida para facilitar o seu dia a dia, centralizando informações comerciais, negociações, comunicados e oportunidades exclusivas que só aqui você tem.
                            </p>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '24px' }}>
                                Tudo em um só lugar, com acesso fácil!
                            </p>

                            <div className="app-downloads">
                                <a href="https://apps.apple.com/br/app/" target="_blank" rel="noopener noreferrer" className="app-download-btn">
                                    <i className="fab fa-apple" />
                                    <div className="app-text">
                                        <small>Disponível na</small>
                                        <span>Apple Store</span>
                                    </div>
                                </a>
                                <a href="https://play.google.com/store/apps/" target="_blank" rel="noopener noreferrer" className="app-download-btn">
                                    <i className="fab fa-google-play" />
                                    <div className="app-text">
                                        <small>Disponível no</small>
                                        <span>Play Store</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                width: '280px',
                                height: '500px',
                                background: 'linear-gradient(135deg, var(--dark) 0%, var(--dark-2) 100%)',
                                borderRadius: '32px',
                                padding: '16px',
                                boxShadow: 'var(--shadow-lg)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '150px',
                                    height: '150px',
                                    background: 'radial-gradient(circle, rgba(247,101,16,0.3) 0%, transparent 70%)',
                                    borderRadius: '50%'
                                }} />
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'var(--primary)',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '16px',
                                    zIndex: 1
                                }}>
                                    <span style={{ color: 'white', fontWeight: 900, fontSize: '1.5rem' }}>C</span>
                                </div>
                                <p style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', zIndex: 1 }}>CenterSIM</p>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', zIndex: 1 }}>App do Parceiro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Not a partner yet */}
            <section className="section section-gray">
                <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Ainda não é nosso parceiro?</h2>
                    <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '24px' }}>
                        Se você quer fazer parte da Rede CenterSIM e saber quais são as vantagens, clique abaixo e fale com a gente:
                    </p>
                    <Link to="/seja-parceiro" className="btn btn-primary" style={{ marginBottom: '20px' }}>
                        Quero ser parceiro da CenterSIM
                    </Link>
                    <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.05rem', marginTop: '16px' }}>
                        Aqui, sua loja negocia melhor em Rede, se conecta mais e cresce junto!
                    </p>
                </div>
            </section>
        </main>
    )
}
