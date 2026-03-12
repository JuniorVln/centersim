import { Link } from 'react-router-dom'

const services = [
    'Negociações nacionais e regionais com fornecedores homologados',
    'Condições comerciais diferenciadas e ações exclusivas',
    'Consultoria em gestão, comercial, operações, marketing e vendas',
    'Soluções financeiras e parcerias estratégicas',
    'Treinamentos para equipes e gestores',
    'Eventos, convenções e coquetéis'
]

export default function QuemSomos() {
    return (
        <main>
            {/* Page Hero */}
            <div className="page-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Quem Somos</span>
                    </div>
                    <h1>A Rede CenterSIM</h1>
                    <p>Marcada por confiança e transparência no segmento da construção civil</p>
                </div>
            </div>

            {/* Intro */}
            <section className="section">
                <div className="container">
                    <div className="about-intro">
                        <div className="about-intro-image">
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'linear-gradient(135deg, #F76510 0%, #d9560e 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px'
                            }}>
                                <div style={{ textAlign: 'center', color: 'white' }}>
                                    <i className="fas fa-building" style={{ fontSize: '4rem', marginBottom: '16px' }} />
                                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>CenterSIM</p>
                                    <p style={{ opacity: 0.8 }}>Construindo parcerias sólidas</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>Nossa história<br /><span>Marcada por confiança e transparência</span></h2>
                            <p>
                                A Rede CenterSIM é uma rede de lojas do segmento da construção civil, com ampla presença nacional, sendo líder do setor em capilaridade.
                            </p>
                            <p>
                                Fazemos parte do Grupo SIM, que também atua no segmento moveleiro, compartilhando o mesmo propósito de fortalecer o varejo especializado. Atuamos de forma consolidada na prestação de serviços estratégicos e relevantes para nossos parceiros de negócios: lojistas e fornecedores.
                            </p>
                            <Link to="/seja-parceiro" className="btn btn-primary">Quero fazer parte!</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missão, Visão e Valores */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Missão, visão e valores!</h2>
                    <div className="mvv-grid">
                        <div className="mvv-card">
                            <i className="fas fa-bullseye" />
                            <h3>Nossa missão</h3>
                            <p>Prestar serviços relevantes e estratégicos aos nossos parceiros lojistas, contribuindo para o seu sucesso e na perpetuação de seus negócios, como uma Rede que gera valor e apoio no setor da construção civil.</p>
                        </div>
                        <div className="mvv-card">
                            <i className="fas fa-eye" />
                            <h3>Nossa visão</h3>
                            <p>Ser reconhecida como a MELHOR Rede de Lojas de produtos para construção civil do Brasil.</p>
                        </div>
                        <div className="mvv-card">
                            <i className="fas fa-heart" />
                            <h3>Nossos valores</h3>
                            <p>• Simplicidade • Integridade • Sinceridade • Objetividade • Felicidade</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* O que fazemos */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">O que fazemos</h2>
                    <p className="section-subtitle">
                        Oferecemos uma estrutura completa de apoio ao lojista, com mais de 50 serviços estratégicos que impactam diretamente a competitividade do negócio.
                    </p>
                    <div className="services-list">
                        {services.map((s, i) => (
                            <div className="service-item" key={i}>
                                <i className="fas fa-check-circle" />
                                <p>{s}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section section-dark">
                <div className="container">
                    <h2 className="section-title" style={{ marginBottom: '50px' }}>Crescimento construído com você</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">+100</div>
                            <div className="stat-label">Lojas parceiras</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Serviços</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Parcerias estratégicas</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">300+</div>
                            <div className="stat-label">Parcerias realizadas</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-orange cta-section">
                <div className="container">
                    <h2>Pronto para crescer com um suporte estratégico que gera resultados?</h2>
                    <p>Fale com a gente e saiba como se tornar parceiro.</p>
                    <Link to="/seja-parceiro" className="btn btn-white">Quero ser parceiro!</Link>
                </div>
            </section>
        </main>
    )
}
