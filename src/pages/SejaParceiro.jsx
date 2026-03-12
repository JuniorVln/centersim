import { useState } from 'react'
import { Link } from 'react-router-dom'

const benefits = [
    {
        icon: 'fa-chart-bar',
        title: 'Negociações exclusivas',
        desc: 'Fornecedores homologados que aumentam a competitividade e a rentabilidade.'
    },
    {
        icon: 'fa-headset',
        title: 'Suporte comercial e estratégico',
        desc: 'Para impulsionar resultados reais nas lojas parceiras.'
    },
    {
        icon: 'fa-cogs',
        title: 'Consultoria em operações e gestão',
        desc: 'Treinamentos contínuos e troca de boas práticas entre parceiros.'
    },
    {
        icon: 'fa-bullhorn',
        title: 'Marketing estruturado',
        desc: 'Campanhas nacionais, presença digital e fortalecimento de marca.'
    },
    {
        icon: 'fa-piggy-bank',
        title: 'Apoio financeiro',
        desc: 'Fóruns especializados para uma gestão segura e eficiente.'
    },
    {
        icon: 'fa-handshake',
        title: 'Parcerias estratégicas',
        desc: 'Simplificam o dia a dia e ampliam o poder de compra da sua loja.'
    },
    {
        icon: 'fa-file-invoice',
        title: 'Reforma tributária',
        desc: 'Apoio para entendimento da transição para nova reforma tributária.'
    }
]

const testimonials = [
    {
        quote: 'Fazer parte da Rede CenterSIM é um marco na história da nossa empresa. É motivo de orgulho e responsabilidade. Seguimos juntos, construindo crescimento com propósito.',
        location: 'Minas Gerais'
    },
    {
        quote: 'A Rede CenterSIM possui elevada relevância estratégica para o nosso negócio. Ao longo de quase 10 anos de parceria, foi construída uma relação sólida de cooperação e confiança mútua.',
        location: 'São Paulo'
    },
    {
        quote: 'Para nós, a Rede CenterSIM tem sido de extrema importância, trazendo as melhores opções e informações do mercado. Com transparência, eficiência e agilidade.',
        location: 'Santa Catarina'
    },
    {
        quote: 'Somos parceiros há 10 anos. Decisão extremamente assertiva que nos fortalece a cada dia. A Rede nos traz total confiança e relevante apoio para a nossa operação.',
        location: 'Mato Grosso'
    }
]

export default function SejaParceiro() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [formData, setFormData] = useState({
        nome: '', email: '', telefone: '', empresa: '', cidade: '', mensagem: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Formulário enviado com sucesso! Entraremos em contato em breve.')
        setFormData({ nome: '', email: '', telefone: '', empresa: '', cidade: '', mensagem: '' })
    }

    return (
        <main>
            {/* Page Hero */}
            <div className="page-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Quero ser parceiro</span>
                    </div>
                    <h1>Faça parte da Rede CenterSIM</h1>
                    <p>A força de uma rede consolidada que impulsiona o seu negócio</p>
                    <a href="#formparceiro" className="btn btn-primary" style={{ marginTop: '20px' }}>Quero ser parceiro</a>
                </div>
            </div>

            {/* Stats */}
            <section className="section section-dark">
                <div className="container">
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>Mais de 300 parcerias realizadas com lojistas e fornecedores.</p>
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

            {/* Benefits */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Benefícios de ser parceiro CenterSIM</h2>
                    <p className="section-subtitle">Somos uma rede de lojas feita para empresários que querem mais competitividade, melhores negociações e suporte estratégico para crescimento contínuo.</p>
                    <div className="partner-benefits">
                        {benefits.map((b, i) => (
                            <div className="benefit-card" key={i}>
                                <div className="benefit-icon">
                                    <i className={`fas ${b.icon}`} />
                                </div>
                                <div>
                                    <h4>{b.title}</h4>
                                    <p>{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Por que CenterSIM */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Porque a CenterSIM é a melhor escolha</h2>
                    <ul className="check-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <li><i className="fas fa-check-circle" /> Negociações exclusivas e fornecedores homologados que aumentam a competitividade e a rentabilidade</li>
                        <li><i className="fas fa-check-circle" /> Suporte comercial e estratégico para impulsionar resultados reais nas lojas</li>
                        <li><i className="fas fa-check-circle" /> Consultoria em operações e gestão, com treinamentos contínuos e troca de boas práticas</li>
                        <li><i className="fas fa-check-circle" /> Marketing estruturado, com campanhas nacionais, presença digital e fortalecimento de marca</li>
                        <li><i className="fas fa-check-circle" /> Apoio financeiro e fóruns especializados para uma gestão segura e eficiente</li>
                        <li><i className="fas fa-check-circle" /> Parcerias estratégicas que simplificam o dia a dia e ampliam o poder de compra</li>
                        <li><i className="fas fa-check-circle" /> Apoio para entendimento da transição para nova reforma tributária</li>
                    </ul>
                </div>
            </section>

            {/* Junte-se CTA */}
            <section className="section section-orange cta-section">
                <div className="container">
                    <h2>Junte-se a uma rede que cresce junto com você.</h2>
                    <Link to="/contato" className="btn btn-white" style={{ marginTop: '10px' }}>Solicitar contato</Link>
                </div>
            </section>

            {/* Depoimentos */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">O que nossos parceiros dizem</h2>
                    <div className="testimonials-slider">
                        <div className="testimonials-track" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                            {testimonials.map((t, i) => (
                                <div className="testimonial-card" key={i}>
                                    <div className="testimonial-inner">
                                        <p className="testimonial-quote">{t.quote}</p>
                                        <p className="testimonial-location">{t.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="testimonials-nav">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={i === currentTestimonial ? 'active' : ''}
                                    onClick={() => setCurrentTestimonial(i)}
                                    aria-label={`Depoimento ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="section" id="formparceiro">
                <div className="container">
                    <h2 className="section-title">Pronto para fortalecer sua loja?</h2>
                    <p className="section-subtitle">Preencha o formulário abaixo que entraremos em contato!</p>
                    <div className="contact-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="contact-form-card" style={{ gridColumn: '1 / -1' }}>
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome completo *</label>
                                        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail *</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefone">Telefone *</label>
                                        <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="empresa">Empresa</label>
                                        <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cidade">Cidade / Estado</label>
                                        <input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group" style={{ marginTop: '10px' }}>
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                                    Enviar solicitação
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section section-dark cta-section">
                <div className="container">
                    <h2>Pronto para ser parceiro?</h2>
                    <p>Fale com a gente e saiba como podemos fortalecer o seu negócio.</p>
                    <Link to="/contato" className="btn btn-primary" style={{ marginTop: '10px' }}>Solicitar contato</Link>
                </div>
            </section>
        </main>
    )
}
