import { useState, useEffect, useRef } from 'react'

const slides = [
    {
        label: 'PRINCIPAL',
        title: 'Poder de compra, vantagens exclusivas, gestão estruturada e aumento de vendas',
        description: 'Aqui você encontra as melhores negociações do mercado, serviços estratégicos e crescimento sustentável.',
        btn: 'Quero ser parceiro',
        link: '#parceiros',
        imageBase: '/hero_1'
    },
    {
        label: 'QUEM SOMOS',
        title: 'A força de uma grande rede que impulsiona lojas de materiais de construção em todo o Brasil',
        description: 'Geramos valor para lojistas e fornecedores em todo o Brasil, com propósito, trocas de experiências e estrutura.',
        btn: 'Quero conhecer melhor',
        link: '#quem-somos',
        imageBase: '/hero_2'
    },
    {
        label: 'FORNECEDORES',
        title: 'Conectamos as maiores marcas do mercado para fortalecer sua loja',
        description: 'Garantimos as melhores condições comerciais para você vender mais e ter diversas oportunidades de crescimento.',
        btn: 'Quero fazer parte',
        link: '#parceiros',
        imageBase: '/hero_3'
    }
]

const servicos = [
    {
        imageBase: '/servico_1',
        title: 'COMPRAS',
        desc: 'Mais poder de compra e margem no seu caixa.',
        num: '01'
    },
    {
        imageBase: '/servico_2',
        title: 'OPERAÇÕES',
        desc: 'Gestão profissional e eficiente.',
        num: '02'
    },
    {
        imageBase: '/servico_3',
        title: 'MARKETING',
        desc: 'Maior visibilidade e aumento das vendas.',
        num: '03'
    },
    {
        imageBase: '/servico_4',
        title: 'PARCERIAS ESTRATÉGICAS',
        desc: 'Soluções que fazem a loja crescer e proteger a gestão financeira.',
        num: '04'
    }
]

const pilares = [
    {
        title: 'Negociações nacionais e regionais com fornecedores homologados',
        desc: 'Gera ganho imediato de margem, melhores prazos e poder de compra que sua loja não teria sozinha.'
    },
    {
        title: 'Consultoria de gestão do negócio',
        desc: 'Ajuda, você lojista, a organizar processos, melhorar resultados e profissionalizar a operação com estrutura e estratégia.'
    },
    {
        title: 'Campanhas Nacionais de Vendas',
        desc: 'Entrega visibilidade, fluxo de clientes e aumento de faturamento, sem que você precise estruturar tudo sozinho.'
    },
    {
        title: 'Soluções financeiras (crédito, taxas e garantias de venda)',
        desc: 'Protege o caixa, aumenta o tíquete médio e reduz risco — ponto decisivo para qualquer dono de loja.'
    }
]

const testimonials = [
    {
        name: 'Carlos Oliveira',
        store: 'Oliveira Materiais',
        quote: 'Fazer parte da Rede CenterSIM é um marco na história da nossa empresa. É motivo de orgulho e responsabilidade. Agradeço pela confiança e pelas parcerias que fortalecem esse movimento. Seguimos juntos, construindo crescimento com propósito.',
        location: 'Belo Horizonte - MG'
    },
    {
        name: 'Mariana Santos',
        store: 'Santo Lar Construções',
        quote: 'A Rede CenterSIM possui elevada relevância estratégica para o nosso negócio. Ao longo de quase 10 anos de parceria, foi construída uma relação sólida de cooperação e confiança mútua, que assegura a presença efetiva da Rede em todos os níveis da nossa operação.',
        location: 'Campinas - SP'
    },
    {
        name: 'Ricardo Silva',
        store: 'Silva & Filhos',
        quote: 'Para nós, a Rede CenterSIM tem sido de extrema importância, não só pelas negociações com fornecedores de produtos, mas também na negociação com diversos fornecedores de serviços. Sempre trazendo as melhores opções e informações do mercado.',
        location: 'Florianópolis - SC'
    },
    {
        name: 'Jorge Almeida',
        store: 'Almeida Construção',
        quote: 'Somos parceiros da Rede CenterSIM há 10 anos. Decisão extremamente assertiva que nos fortalece a cada dia. A Rede nos traz total confiança e nos serve de relevante apoio para a nossa operação. Somos muito gratos pelo bom trabalho prestado.',
        location: 'Cuiabá - MT'
    },
    {
        name: 'Fernando Costa',
        store: 'Costa Ferragens',
        quote: 'Fazer parte da Rede CenterSIM é sentir que você não está sozinho na jornada. É ter apoio estratégico, troca real entre empresários e a segurança de caminhar ao lado de quem pensa no crescimento de forma estruturada.',
        location: 'Ribeirão Preto - SP'
    },
    {
        name: 'Beatriz Lima',
        store: 'Lima Materiais Rio',
        quote: 'A Rede CenterSIM é uma parceira importante para o nosso negócio. Sempre tivemos apoio, confiança e uma relação transparente, que contribui diretamente para o nosso crescimento.',
        location: 'Rio de Janeiro - RJ'
    }
]

const faqs = [
    {
        question: 'Quem pode se tornar parceiro da CenterSIM?',
        answer: 'A CenterSIM é voltada para lojistas do segmento da construção civil que buscam crescer, evoluir e fortalecer sua competitividade no mercado.'
    },
    {
        question: 'Quais são os benefícios de fazer parte da CenterSIM?',
        answer: 'Ao fazer parte da CenterSIM, o parceiro passa a contar com diversos benefícios, como maior competitividade, apoio comercial e estratégico, ações de marketing e melhores oportunidades de negócio.'
    },
    {
        question: 'Como funciona o suporte da CenterSIM?',
        answer: 'O suporte da CenterSIM é contínuo e próximo, com atendimento direto ao time da loja e acesso a grupos de apoio, disponível de segunda a sexta-feira, em horário comercial.'
    },
    {
        question: 'A CenterSIM interfere na gestão da loja? É necessário seguir um padrão visual ou de marca?',
        answer: 'Não. A gestão da loja permanece sob responsabilidade do parceiro. A CenterSIM atua como apoio estratégico, oferecendo orientação, consultoria e boas práticas para a melhoria dos resultados.'
    },
    {
        question: 'A CenterSIM atende lojas de qualquer porte?',
        answer: 'Sim. A CenterSIM atende lojas de pequeno, médio e grande porte, desde que estejam alinhadas aos objetivos e valores da rede.'
    },
    {
        question: 'É possível sair da CenterSIM, se necessário?',
        answer: 'Sim. A saída pode ocorrer conforme as regras contratuais, sempre de forma transparente e respeitosa.'
    },
    {
        question: 'Como funcionam as negociações com fornecedores? É obrigatório comprar exclusivamente dos fornecedores da rede?',
        answer: 'As negociações são centralizadas, garantindo ganho de escala e melhores condições comerciais, sem obrigatoriedade de compra, preservando a liberdade de escolha do parceiro.'
    }
]

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [openFaq, setOpenFaq] = useState(null)
    const [activeQuemSomosTab, setActiveQuemSomosTab] = useState(0)
    const slideInterval = useRef(null)
    const supplierLogoCount = 30
    const supplierLogos = Array.from({ length: supplierLogoCount }, (_, i) => i + 1)

    const buildSources = (base) => ({
        avif: `${base}.avif`,
        webp: `${base}.webp`,
        png: `${base}.png`
    })

    useEffect(() => {
        slideInterval.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length)
        }, 6000)
        return () => clearInterval(slideInterval.current)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % (testimonials.length / 2))
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const goToSlide = (i) => {
        setCurrentSlide(i)
        clearInterval(slideInterval.current)
        slideInterval.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length)
        }, 6000)
    }

    const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length)
    const nextSlide = () => goToSlide((currentSlide + 1) % slides.length)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Solicitação enviada com sucesso! Em breve nossa equipe entrará em contato.')
    }

    const quemSomosTabs = [
        {
            id: 'missao',
            title: '01 Missão',
            imageBase: '/missao_photo',
            content: (
                <div className="qs-content-inner">
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.6', opacity: '0.9' }}>Prestar serviços relevantes para os nossos Parceiros de negócios, que são os Lojistas e Fornecedores da nova rede, a Center SIM.</p>
                </div>
            )
        },
        {
            id: 'visao',
            title: '02 Visão',
            imageBase: '/visao_photo',
            content: (
                <div className="qs-content-inner">
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.6', opacity: '0.9' }}>Ser reconhecida como a melhor Rede de Lojas de material de construção do Brasil.</p>
                </div>
            )
        },
        {
            id: 'valores',
            title: '03 Valores',
            imageBase: '/valores_photo',
            content: (
                <div className="qs-content-inner" style={{ background: 'transparent', padding: 0 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                        <span className="qs-badge">Simplicidade</span>
                        <span className="qs-badge">Integridade</span>
                        <span className="qs-badge">Sinceridade</span>
                        <span className="qs-badge">Objetividade</span>
                        <span className="qs-badge">Felicidade</span>
                    </div>
                </div>
            )
        },
        {
            id: 'presenca',
            title: '04 Presença Nacional',
            imageBase: '/mapa_brasil_regions',
            content: (
                <div className="qs-content-inner" style={{ background: 'transparent', padding: 0 }}>
                    <div className="qs-stat-list">
                        <div className="qs-stat-row">
                            <span className="qs-stat-region">Nordeste</span>
                            <span className="qs-stat-bar"><span style={{ width: '100%' }}></span></span>
                            <span className="qs-stat-num">+140</span>
                        </div>
                        <div className="qs-stat-row">
                            <span className="qs-stat-region">Sudeste</span>
                            <span className="qs-stat-bar"><span style={{ width: '64%' }}></span></span>
                            <span className="qs-stat-num">+90</span>
                        </div>
                        <div className="qs-stat-row">
                            <span className="qs-stat-region">Sul</span>
                            <span className="qs-stat-bar"><span style={{ width: '57%' }}></span></span>
                            <span className="qs-stat-num">+80</span>
                        </div>
                        <div className="qs-stat-row">
                            <span className="qs-stat-region">Centro-Oeste</span>
                            <span className="qs-stat-bar"><span style={{ width: '43%' }}></span></span>
                            <span className="qs-stat-num">+60</span>
                        </div>
                        <div className="qs-stat-row">
                            <span className="qs-stat-region">Norte</span>
                            <span className="qs-stat-bar"><span style={{ width: '14%' }}></span></span>
                            <span className="qs-stat-num">+20</span>
                        </div>
                    </div>
                </div>
            )
        }
    ]

    return (
        <main>
            {/* Hero Slider */}
            <section id="home" className="hero">
                <div className="hero-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, i) => (
                        <div className="hero-slide" key={i}>
                            <picture className="hero-slide-bg">
                                <source type="image/avif" srcSet={buildSources(slide.imageBase).avif} />
                                <source type="image/webp" srcSet={buildSources(slide.imageBase).webp} />
                                <img
                                    src={buildSources(slide.imageBase).png}
                                    alt=""
                                    aria-hidden="true"
                                    loading={i === 0 ? 'eager' : 'lazy'}
                                    decoding="async"
                                    fetchPriority={i === 0 ? 'high' : 'low'}
                                />
                            </picture>
                            <div className="hero-slide-overlay" style={{ background: 'rgba(0,0,0,0.6)' }} />
                            <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                                <div className="hero-content">
                                    <span className="hero-label">{slide.label}</span>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    <a href={slide.link} className="btn btn-primary">{slide.btn}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hero-arrows">
                    <button className="hero-arrow" onClick={prevSlide} aria-label="Anterior"><i className="fas fa-chevron-left" /></button>
                    <button className="hero-arrow" onClick={nextSlide} aria-label="Próximo"><i className="fas fa-chevron-right" /></button>
                </div>
                <div className="hero-dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`hero-dot ${i === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>

                <a href="#quem-somos" className="scroll-indicator fade-in" style={{ animationDelay: '0.8s' }} aria-label="Rolar para baixo">
                    <i className="fas fa-chevron-down"></i>
                </a>
            </section>

            {/* Quem Somos */}
            <section id="quem-somos" className="qs-section">
                <div className="container">
                    <div className="qs-header">
                        <div className="qs-header-left">
                            <span className="section-subtitle" style={{ textAlign: 'left', marginBottom: '10px', color: 'var(--primary)' }}>Quem Somos</span>
                            <h2 className="qs-title">Como surgiu a <br /><span>Rede CenterSIM</span></h2>
                        </div>
                        <div className="qs-header-right">
                            <p className="qs-desc">
                                A Center SIM é a rede do Grupo SIM Negócios dedicada ao mercado da construção civil. Criada para atender lojistas de materiais de construção, a rede oferece negociações estratégicas, serviços especializados e soluções que impulsionam resultados reais.
                            </p>
                        </div>
                    </div>

                    <div className="qs-container">
                        <div className="qs-tabs">
                            {quemSomosTabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    className={`qs-tab ${activeQuemSomosTab === index ? 'active' : ''}`}
                                    onClick={() => setActiveQuemSomosTab(index)}
                                >
                                    <div className="qs-tab-title">
                                        <span>{tab.title.split(' ')[0]}</span> {tab.title.split(' ').slice(1).join(' ')}
                                    </div>
                                    <div className="qs-tab-arrow">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="qs-display">
                            <div className="qs-image-container qs-fade-in" key={`img-${activeQuemSomosTab}`}>
                                <picture>
                                    <source type="image/avif" srcSet={buildSources(quemSomosTabs[activeQuemSomosTab].imageBase).avif} />
                                    <source type="image/webp" srcSet={buildSources(quemSomosTabs[activeQuemSomosTab].imageBase).webp} />
                                    <img
                                        src={buildSources(quemSomosTabs[activeQuemSomosTab].imageBase).png}
                                        alt={quemSomosTabs[activeQuemSomosTab].title}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                            <div className="qs-content-side qs-fade-in" key={`content-${activeQuemSomosTab}`}>
                                <div className="qs-card highlight">
                                    <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', fontWeight: '800' }}>
                                        {quemSomosTabs[activeQuemSomosTab].title.split(' ').slice(1).join(' ')}
                                    </h3>
                                    {quemSomosTabs[activeQuemSomosTab].content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Serviços em Destaque</h2>
                    <p className="section-subtitle">Oferecemos uma estrutura completa de apoio ao lojista</p>

                    <div className="services-grid">
                        {servicos.map((item, i) => (
                            <div key={i} className="service-new-card">
                                <div className="service-new-box">
                                    <span className="service-num">{item.num}</span>
                                    <picture>
                                        <source type="image/avif" srcSet={buildSources(item.imageBase).avif} />
                                        <source type="image/webp" srcSet={buildSources(item.imageBase).webp} />
                                        <img src={buildSources(item.imageBase).png} alt={item.title} loading="lazy" decoding="async" />
                                    </picture>
                                </div>
                                <div className="service-new-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fornecedores */}
            <section id="fornecedores" className="section" style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 className="section-title">Conectamos as maiores marcas do mercado para fortalecer sua loja</h2>
                    <p className="section-subtitle">
                        Contamos com mais de 50 fornecedores que oferecem negociações exclusivas, ampliando o mix de produtos e aumentando a competitividade das lojas parceiras.
                    </p>
                </div>

                <div className="suppliers-carousel">
                    <div className="suppliers-track">
                        {/* Supplier logos */}
                        {[...supplierLogos, ...supplierLogos].map((num, idx) => {
                            const base = `/fornecedores/${num}`
                            return (
                                <div key={`${num}-${idx}`} className="supplier-brand-box">
                                    <img src={`${base}.png`} alt={`Fornecedor ${num}`} loading="lazy" decoding="async" />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container">
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <a href="#parceiros" className="btn btn-primary">Quero fazer parte</a>
                    </div>
                </div>
                <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-180px * ${supplierLogoCount} - 30px * ${supplierLogoCount})); }
                    }
                `}</style>
            </section>

            {/* Parceiros Lojistas (Pilares e Form) */}
            <section id="parceiros" className="section section-parceiros">
                <div className="container">
                    <div className="parceiros-header">
                        <h2 className="section-title">Parceiros Lojistas</h2>
                        <p className="section-subtitle">
                            Na prática, resolvemos seus principais desafios: margem apertada, falta de tempo para gestão, pouca escala para negociar e dificuldade em crescer com segurança. Fazemos isso por meio de <strong>quatro pilares</strong> estratégicos que geram <strong>ganho imediato, organização do negócio e aumento</strong> consistente de vendas.
                        </p>
                    </div>

                    <div className="contact-new-wrapper">
                        <div className="contact-info-block">
                            <h3 className="info-subtitle">O QUE FAZEMOS DE MELHOR EM 4 PILARES</h3>

                            <div className="pilares-list">
                                {pilares.map((pilar, i) => (
                                    <div key={i} className="pilar-item">
                                        <div className="pilar-icon">
                                            <i className="fas fa-check-circle"></i>
                                        </div>
                                        <div className="pilar-text">
                                            <h4>{pilar.title}</h4>
                                            <p>{pilar.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="contact-form-block">
                            <div className="form-header">
                                <h3>Seja um parceiro!</h3>
                                <p>Preencha os dados e entraremos em contato.</p>
                            </div>
                            <form className="contact-new-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Nome completo *</label>
                                        <input type="text" required placeholder="Seu nome" />
                                    </div>
                                    <div className="form-group">
                                        <label>Loja *</label>
                                        <input type="text" required placeholder="Sua loja" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>E-mail *</label>
                                        <input type="email" required placeholder="seu@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>Telefone *</label>
                                        <input type="tel" required placeholder="(00) 00000-0000" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Cidade / Estado *</label>
                                        <input type="text" required placeholder="Cidade / UF" />
                                    </div>
                                    <div className="form-group">
                                        <label>Interesse *</label>
                                        <select required>
                                            <option value="">Selecione...</option>
                                            <option value="lojista">Quero ser lojista</option>
                                            <option value="equipe">Quero fazer parte da equipe</option>
                                            <option value="fornecedor">Quero ser fornecedor</option>
                                            <option value="outros">Outros</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Mensagem</label>
                                    <textarea rows="2" placeholder="Sua mensagem..."></textarea>
                                </div>
                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary">Enviar solicitação</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimentos - Marquee Section */}
            <section id="depoimentos" className="section section-testimonials-marquee">
                <div className="container">
                    <div className="testimonials-marquee-grid">
                        {/* Column 1: Text */}
                        <div className="marquee-text-col text-left">
                            <span className="section-label">DEPOIMENTOS</span>
                            <h2 className="section-title text-left">O que nossos parceiros dizem sobre a CenterSIM</h2>
                            <p className="section-description">
                                A voz de quem vive o dia a dia da rede é a nossa melhor referência.
                                Descubra como estamos transformando o setor da construção.
                            </p>
                            <div className="marquee-cta">
                                <a href="#parceiros" className="btn btn-primary">Seja um parceiro</a>
                            </div>
                        </div>

                        {/* Column 2: Marquee Grid */}
                        <div className="marquee-visual-col">
                            <div className="marquee-column column-up">
                                <div className="marquee-inner">
                                    {[...testimonials, ...testimonials].map((t, i) => (
                                        <div className="testimonial-card-mini" key={i}>
                                            <div className="mini-quote">
                                                <i className="fas fa-quote-left"></i>
                                            </div>
                                            <p>{t.quote}</p>
                                            <div className="mini-author">
                                                <div className="mini-author-info">
                                                    <strong>{t.name}</strong>
                                                    <span>{t.store}</span>
                                                </div>
                                                <div className="mini-photo-placeholder">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="marquee-column column-down">
                                <div className="marquee-inner">
                                    {[...testimonials, ...testimonials].reverse().map((t, i) => (
                                        <div className="testimonial-card-mini" key={i}>
                                            <div className="mini-quote">
                                                <i className="fas fa-quote-left"></i>
                                            </div>
                                            <p>{t.quote}</p>
                                            <div className="mini-author">
                                                <div className="mini-author-info">
                                                    <strong>{t.name}</strong>
                                                    <span>{t.store}</span>
                                                </div>
                                                <div className="mini-photo-placeholder">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Redes Sociais / Instagram */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Fique por dentro de tudo que acontece na CenterSIM</h2>
                    <p className="section-subtitle">Acompanhe eventos, campanhas nacionais, visitas e novidades da rede.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
                        {[1, 2, 3, 4].map(num => (
                            <div key={num} style={{
                                aspectRatio: '1/1',
                                background: 'linear-gradient(135deg, #eee, #ddd)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontSize: '3rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <i className="fab fa-instagram"></i>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(0,0,0,0)',
                                    transition: 'background 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(247, 101, 16, 0.8)';
                                        e.currentTarget.style.opacity = 1;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(0,0,0,0)';
                                        e.currentTarget.style.opacity = 0;
                                    }}
                                >
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Ver post</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                            <i className="fab fa-instagram" style={{ marginRight: '8px' }}></i>
                            Siga nosso Instagram
                        </a>
                    </div>
                </div>
            </section>

            {/* Contato / FAQ */}
            <section id="contato" className="section section-gray">
                <div className="container">
                    <h2 className="section-title">Central de Atendimento e Dúvidas</h2>
                    <p className="section-subtitle">Fale com a gente e conheça mais de perto nossos serviços</p>

                    <div className="contact-grid" style={{ marginTop: '50px' }}>
                        <div>
                            <h3 style={{ marginBottom: '30px', fontSize: '1.8rem', color: 'var(--dark)' }}>Perguntas Frequentes</h3>
                            <div className="faq-list">
                                {faqs.map((faq, i) => (
                                    <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                        <div className="faq-question">
                                            {faq.question}
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="faq-answer">
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6388!3d-23.5732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b0e2e5e5e5%3A0x0!2sRua%20Apeninos%2C%201126%20-%20Para%C3%ADso%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                                    width="100%"
                                    height="220"
                                    style={{ border: 0, borderRadius: '12px 12px 0 0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização CenterSIM"
                                />
                            </div>
                            <div className="contact-card-body">
                                <h3>Nossos Contatos</h3>
                                <div className="contact-card-item">
                                    <i className="fas fa-envelope" />
                                    <p>centersim@simnegocios.com.br</p>
                                </div>
                                <div className="contact-card-item">
                                    <i className="fas fa-phone" />
                                    <p>(11) 2386-3627 | (11) 2386-3657</p>
                                </div>
                                <div className="contact-card-item">
                                    <i className="fas fa-map-marker-alt" />
                                    <p>Rua Apeninos, 1126 – 9º andar<br />Paraíso – São Paulo - SP</p>
                                </div>
                                <div className="contact-card-socials">
                                    <a href="https://www.instagram.com/centersimoficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                                    <a href="https://www.youtube.com/@redecentersim4689" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a>
                                    <a href="https://web.facebook.com/redecentersim" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                                    <a href="https://www.tiktok.com/@centersim?lang=pt-BR" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main >
    )
}
