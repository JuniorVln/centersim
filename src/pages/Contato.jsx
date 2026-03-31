import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendContactEmail } from '../lib/emailjs'

const faqData = [
    {
        q: 'Para quem é a Rede CenterSIM?',
        a: 'A Rede CenterSIM é voltada para lojistas do segmento da construção civil que querem crescer e fortalecer sua competitividade no mercado.'
    },
    {
        q: 'Quais são os benefícios de ser parceiro?',
        a: 'Você tem acesso a negociações nacionais e regionais com fornecedores homologados, garantindo melhores preços e condições comerciais. Oferecemos apoio em gestão e operações, participação em campanhas de vendas, conteúdos e orientações de marketing para fortalecer a visibilidade da sua loja, além de soluções financeiras com taxas diferenciadas.'
    },
    {
        q: 'Como funciona o suporte ao parceiro?',
        a: 'O nosso suporte acontece de forma contínua e próxima ao parceiro, por meio de grupos individuais, regionais e gerais, além do contato direto com todos os colaboradores e áreas. O atendimento está disponível em horário comercial, garantindo agilidade e proximidade.'
    },
    {
        q: 'A rede interfere na gestão da minha loja?',
        a: 'Não. A gestão da loja continua sendo sua. Atuamos como apoio estratégico, oferecendo orientação, consultoria e boas práticas para melhorar resultados. Respeitamos a identidade e o momento de cada parceiro.'
    },
    {
        q: 'Lojas de qualquer porte podem participar?',
        a: 'Sim. Atendemos pequenas, médias e grandes lojas, desde que estejam alinhadas aos nossos objetivos e valores.'
    },
    {
        q: 'Posso sair da rede?',
        a: 'Sim. A saída pode ocorrer conforme as regras contratuais, sempre de forma transparente e respeitosa.'
    },
    {
        q: 'Sou obrigado a comprar dos fornecedores da rede?',
        a: 'As negociações são realizadas de forma centralizada, proporcionando ganho de escala e melhores preços. A compra não é obrigatória exclusivamente com os fornecedores da rede, você mantém a liberdade de escolha, contando com fornecedores homologados que oferecem maior segurança e vantagens comerciais.'
    }
]

export default function Contato() {
    const [activeFaq, setActiveFaq] = useState(null)
    const [formData, setFormData] = useState({
        nome: '', email: '', telefone: '', empresa: '', mensagem: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const [sending, setSending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        try {
            await sendContactEmail({
                from_name: formData.nome,
                email: formData.email,
                telefone: formData.telefone,
                loja: formData.empresa,
                mensagem: formData.mensagem,
                origem: 'Página de Contato',
            })
            setFormData({ nome: '', email: '', telefone: '', empresa: '', mensagem: '' })
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Retornaremos em breve.')
            }, 100)
        } catch (err) {
            if (!err.message?.includes('Ativação')) {
                alert('Erro ao enviar. Por favor, tente novamente ou entre em contato pelo WhatsApp.')
            }
        } finally {
            setSending(false)
        }
    }

    const toggleFaq = (i) => {
        setActiveFaq(activeFaq === i ? null : i)
    }

    return (
        <main>
            {/* Page Hero */}
            <div className="page-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Contato</span>
                    </div>
                    <h1>Fale com a CenterSIM</h1>
                    <p>Entre em contato e descubra como a CenterSIM pode impulsionar sua loja.</p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px' }}>
                        <Link to="/seja-parceiro" className="btn btn-primary">Quero fazer parte!</Link>
                        <a href="#faq" className="btn btn-outline">Tem dúvidas?</a>
                    </div>
                </div>
            </div>

            {/* Contact Form + Info */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-card">
                            <h2>Entre em contato</h2>
                            <p>Preencha o formulário e nossa equipe entrará em contato em breve.</p>
                            <form onSubmit={handleSubmit}>
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
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={sending}>
                                    {sending ? 'Enviando...' : 'Enviar mensagem'}
                                </button>
                            </form>
                        </div>

                        <div className="contact-info-sidebar">
                            <div className="contact-info-card">
                                <div className="icon-wrapper">
                                    <i className="fas fa-envelope" />
                                </div>
                                <div>
                                    <h4>E-mail</h4>
                                    <p>centersim@simnegocios.com.br</p>
                                </div>
                            </div>
                            <div className="contact-info-card">
                                <div className="icon-wrapper">
                                    <i className="fas fa-phone" />
                                </div>
                                <div>
                                    <h4>Telefone</h4>
                                    <p>(11) 2386-3627 | (11) 2386-3657</p>
                                </div>
                            </div>
                            <div className="contact-info-card">
                                <div className="icon-wrapper">
                                    <i className="fas fa-map-marker-alt" />
                                </div>
                                <div>
                                    <h4>Endereço</h4>
                                    <p>Rua Apeninos, 1126 – 9º andar<br />Paraíso – São Paulo - SP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section section-gray" id="faq">
                <div className="container">
                    <h2 className="section-title">Dúvidas frequentes</h2>
                    <p className="section-subtitle">Nosso time responde em até 24 horas úteis. Confira as respostas para as perguntas mais comuns.</p>
                    <div className="faq-list">
                        {faqData.map((faq, i) => (
                            <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i}>
                                <button className="faq-question" onClick={() => toggleFaq(i)}>
                                    <span>{faq.q}</span>
                                    <i className="fas fa-chevron-down" />
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-orange cta-section">
                <div className="container">
                    <h2>Seja parceiro e fortaleça o seu negócio!</h2>
                    <Link to="/seja-parceiro" className="btn btn-white" style={{ marginTop: '10px' }}>Quero ser parceiro</Link>
                </div>
            </section>
        </main>
    )
}
