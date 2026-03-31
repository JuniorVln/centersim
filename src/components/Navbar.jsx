import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeHash, setActiveHash] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const handleHashChange = () => setActiveHash(window.location.hash)
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        // Intersection Observer for scrollspy
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Adjust margin to trigger active state earlier/later
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveHash(`#${entry.target.id}`)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        const sections = ['home', 'quem-somos', 'fornecedores', 'parceiros', 'contato']
        
        sections.forEach(id => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        window.addEventListener('hashchange', handleHashChange)
        window.addEventListener('scroll', handleScroll)
        handleHashChange()
        handleScroll()

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
    }, [])

    const isActive = (hash) => activeHash === hash || (activeHash === '' && hash === '#home') ? 'active' : ''

    return (
        <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-logo">
                    <a href="/">
                        <img
                            src="/logo-branco.png"
                            alt="CenterSIM Logo"
                            style={{ height: '56px' }}
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                        />
                    </a>
                </div>

                <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    <a href="/#home" className={isActive('#home')} onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="/#quem-somos" className={isActive('#quem-somos')} onClick={() => setMenuOpen(false)}>Quem somos</a>
                    <a href="/#fornecedores" className={isActive('#fornecedores')} onClick={() => setMenuOpen(false)}>Fornecedores</a>
                    <a href="/#parceiros" className={isActive('#parceiros')} onClick={() => setMenuOpen(false)}>Parceiros</a>
                    <a href="/#contato" className={isActive('#contato')} onClick={() => setMenuOpen(false)}>Contato</a>
                    <a href="/ja-sou-parceiro" target="_blank" rel="noopener noreferrer" className="btn btn-nav-outline d-desktop-none" onClick={() => setMenuOpen(false)}>Área do parceiro</a>
                </div>

                <div className="navbar-actions">
                    <a href="/ja-sou-parceiro" target="_blank" rel="noopener noreferrer" className="btn btn-nav-outline d-mobile-none">Área do parceiro</a>
                    <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} style={{ color: '#fff' }} />
                    </button>
                </div>
            </div>
        </nav>
    )
}
