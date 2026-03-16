import { Link } from 'react-router-dom'

const appFeatures = [
    {
        icon: 'fa-chart-pie',
        title: 'Relatórios de Comissões',
        desc: 'Acompanhe detalhadamente seus ganhos por venda, bônus e metas alcançadas em tempo real.'
    },
    {
        icon: 'fa-box-open',
        title: 'Gestão de Estoque',
        desc: 'Consulte a disponibilidade de chips e produtos Center SIM instantaneamente para agilizar suas vendas.'
    },
    {
        icon: 'fa-shopping-cart',
        title: 'Pedidos de Reposição',
        desc: 'Faça pedidos de chips e materiais de marketing diretamente pelo aplicativo com poucos cliques.'
    },
    {
        icon: 'fa-bullhorn',
        title: 'Campanhas Exclusivas',
        desc: 'Tenha acesso em primeira mão às campanhas nacionais da Center SIM e materiais de PDV.'
    },
    {
        icon: 'fa-user-check',
        title: 'Ativação Simplificada',
        desc: 'Ferramentas rápidas para ativação de clientes e acompanhamento do status de cada linha.'
    },
    {
        icon: 'fa-headset',
        title: 'Suporte VIP',
        desc: 'Canal de atendimento prioritário via chat para resolver qualquer questão técnica ou comercial.'
    }
]

export default function JaSouParceiro() {
    return (
        <main>
            {/* Page Hero */}
            <div className="page-hero page-hero-with-bg">
                <img className="page-hero-bg" src="/hero_1.png" alt="" aria-hidden="true" />
                <div className="page-hero-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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

                        <div className="partner-app-visual">
                            <div className="phone-device">
                                <div className="phone-frame">
                                    <div className="phone-notch" />
                                    <div className="phone-screen">
                                        <div className="phone-status-bar">
                                            <span>9:41</span>
                                            <div className="phone-status-icons">
                                                <i className="fas fa-signal" />
                                                <i className="fas fa-wifi" />
                                                <i className="fas fa-battery-full" />
                                            </div>
                                        </div>
                                        <div className="phone-app-header">
                                            <img src="/logo-branco.png" alt="CenterSIM" />
                                        </div>
                                        <div className="phone-app-content">
                                            <p className="phone-greeting">Olá, Parceiro!</p>
                                            <p className="phone-subgreeting">Bem-vindo ao seu painel</p>
                                            <div className="phone-stats">
                                                <div className="phone-stat">
                                                    <span className="phone-stat-value">247</span>
                                                    <span className="phone-stat-label">Vendas</span>
                                                </div>
                                                <div className="phone-stat">
                                                    <span className="phone-stat-value">R$ 12k</span>
                                                    <span className="phone-stat-label">Comissão</span>
                                                </div>
                                            </div>
                                            <div className="phone-menu-grid">
                                                <div className="phone-menu-item">
                                                    <i className="fas fa-chart-pie" />
                                                    <span>Relatórios</span>
                                                </div>
                                                <div className="phone-menu-item">
                                                    <i className="fas fa-box-open" />
                                                    <span>Estoque</span>
                                                </div>
                                                <div className="phone-menu-item">
                                                    <i className="fas fa-shopping-cart" />
                                                    <span>Pedidos</span>
                                                </div>
                                                <div className="phone-menu-item">
                                                    <i className="fas fa-bullhorn" />
                                                    <span>Campanhas</span>
                                                </div>
                                                <div className="phone-menu-item">
                                                    <i className="fas fa-user-check" />
                                                    <span>Ativações</span>
                                                </div>
                                                <div className="phone-menu-item">
                                                    <i className="fas fa-headset" />
                                                    <span>Suporte</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="phone-glow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Features */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Tudo o que você precisa em um só lugar</h2>
                    <p className="section-subtitle">
                        Nossa plataforma centraliza informações, negociações e oportunidades exclusivas para você, parceiro.
                    </p>
                    <div className="app-features-grid">
                        {appFeatures.map((f, i) => (
                            <div className="app-feature-card" key={i}>
                                <div className="app-feature-icon">
                                    <i className={`fas ${f.icon}`} />
                                </div>
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Not a partner yet */}
            <section className="section">
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
