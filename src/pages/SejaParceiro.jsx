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
        name: 'Ana Karina',
        store: 'Armazém Mais',
        quote: 'Fazer parte da Rede CenterSIM é um marco na história da nossa empresa. É motivo de orgulho e responsabilidade. Agradeço pela confiança e pelas parcerias que fortalecem esse movimento. Seguimos juntos, construindo crescimento com propósito.',
        location: 'Candeias - BA',
        photo: '/depoimentos/ana-karina.jpeg'
    },
    {
        name: 'Ludgero Moreira',
        store: 'LM Acabamentos',
        quote: 'Ser CenterSIM é estar ativo e associativo no mercado matcon. É estar atualizado e buscar melhores e maiores oportunidades para se desenvolver e oferecer aos clientes sempre o melhor.',
        location: 'Passa Quatro - MG',
        photo: '/depoimentos/ludgero.jpeg'
    },
    {
        name: 'Rubia',
        store: 'Pedrisco',
        quote: 'Em tempos de alta competitividade e grandes desafios a CenterSIM foi uma parceira importante para nossa empresa. Pois com o apoio da rede, juntamente com as trocas de experiências dos parceiros lojistas associados, unimos forças para buscar melhores oportunidades de crescimento.',
        location: 'Ortigueira - PR',
        photo: '/depoimentos/rubia.jpeg'
    },
    {
        name: 'Kleyton',
        store: 'Reformar Construções',
        quote: 'A CenterSIM tem sido uma parceira fundamental na caminhada da ReforMAR. A confiança, o suporte e a proximidade no dia a dia nos dão segurança para crescer e tomar decisões com mais clareza.',
        location: 'Iraquara - BA',
        photo: '/depoimentos/kleyton.jpeg'
    },
    {
        name: 'Luhara Rios',
        store: 'Casa das Madeiras',
        quote: 'A CenterSIM é uma parceira estratégica para nós da Casa das Madeiras. Nossa relação é constituída por confiança e apoio constante, o que impulsiona nosso crescimento.',
        location: 'Mairi - BA',
        photo: '/depoimentos/luhara.jpeg'
    }
]

export default function SejaParceiro() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [formData, setFormData] = useState({
        nome: '', loja: '', email: '', telefone: '', cidade: '', interesse: '', mensagem: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Formulário enviado com sucesso! Entraremos em contato em breve.')
        setFormData({ nome: '', loja: '', email: '', telefone: '', cidade: '', interesse: '', mensagem: '' })
    }

    return (
        <main>
            {/* Page Hero */}
            <div className="page-hero page-hero-with-bg">
                <img className="page-hero-bg" src="/hero_2.png" alt="" aria-hidden="true" />
                <div className="page-hero-overlay" />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
            <section className="section section-dark section-stats-compact">
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
                                <h4>{b.title}</h4>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Call to Action */}
            <section className="section section-light">
                <div className="container">
                    <div className="side-by-side">
                        <div className="side-content">
                            <h2 style={{ fontSize: '2.5rem', lineHeight: 1.1 }}>Sua loja merece o suporte de uma gigante.</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--gray)', marginTop: '20px' }}>
                                Unir-se à Center SIM significa ter acesso a condições comerciais que antes eram restritas a grandes redes nacionais. 
                                <br /><br />
                                <strong>Competitividade, consultoria e marketing:</strong> o tripé que sustenta o crescimento dos nossos mais de 100 parceiros ativos em todo o Brasil.
                            </p>
                            <div style={{ marginTop: '30px' }}>
                                <div className="feature-check">
                                    <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }} />
                                    <span>Tabelas de preços exclusivas</span>
                                </div>
                                <div className="feature-check">
                                    <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }} />
                                    <span>Treinamentos para sua equipe</span>
                                </div>
                                <div className="feature-check">
                                    <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }} />
                                    <span>Marca forte e reconhecida</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                    <a href="#formparceiro" className="btn btn-white" style={{ marginTop: '10px' }}>Quero ser parceiro</a>
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
                                        <div className="testimonial-author">
                                            <img src={t.photo} alt={t.name} className="testimonial-author-photo" />
                                            <div>
                                                <strong className="testimonial-name">{t.name}</strong>
                                                <span className="testimonial-store">{t.store}</span>
                                                <span className="testimonial-location">{t.location}</span>
                                            </div>
                                        </div>
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
                                        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Seu nome" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="loja">Loja *</label>
                                        <input type="text" id="loja" name="loja" value={formData.loja} onChange={handleChange} required placeholder="Nome da sua loja" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cidade">Cidade / Estado *</label>
                                        <input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} required placeholder="Cidade / UF" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail *</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefone">Telefone *</label>
                                        <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required placeholder="(00) 00000-0000" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="interesse">Interesse *</label>
                                        <select id="interesse" name="interesse" value={formData.interesse} onChange={handleChange} required>
                                            <option value="">Selecione...</option>
                                            <option value="lojista">Quero ser lojista</option>
                                            <option value="equipe">Quero fazer parte da equipe</option>
                                            <option value="fornecedor">Quero ser fornecedor</option>
                                            <option value="outros">Outros</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group" style={{ marginTop: '10px' }}>
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Sua mensagem..." />
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
                    <a href="#formparceiro" className="btn btn-primary" style={{ marginTop: '10px' }}>Fale com a gente</a>
                </div>
            </section>
        </main>
    )
}
