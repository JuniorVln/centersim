# Center SIM — Diagrama da Codebase

Projeto **React + Vite** para o site da rede Center SIM (segmento construção civil). Abaixo está a arquitetura em diagramas.

---

## 1. Fluxo de entrada e layout

```mermaid
flowchart TB
    subgraph entry["Entrada"]
        HTML["index.html"]
        MAIN["main.jsx"]
        APP["App.jsx"]
    end

    HTML -->|"script module"| MAIN
    MAIN -->|"BrowserRouter"| APP
    MAIN -->|"import"| CSS["index.css"]

    subgraph layout["Layout (App.jsx)"]
        direction TB
        ST["ScrollToTop"]
        NAV["Navbar"]
        ROUTES["Routes"]
        FOOT["Footer"]
    end

    APP --> ST
    APP --> NAV
    APP --> ROUTES
    APP --> FOOT
```

---

## 2. Rotas e páginas

```mermaid
flowchart LR
    subgraph routes["React Router (Routes)"]
        R0["/"]
        R1["/quem-somos"]
        R2["/contato"]
        R3["/seja-parceiro"]
        R4["/ja-sou-parceiro"]
    end

    subgraph pages["Páginas"]
        P0["Home.jsx"]
        P1["QuemSomos.jsx"]
        P2["Contato.jsx"]
        P3["SejaParceiro.jsx"]
        P4["JaSouParceiro.jsx"]
    end

    R0 --> P0
    R1 --> P1
    R2 --> P2
    R3 --> P3
    R4 --> P4
```

---

## 3. Estrutura de pastas (src)

```mermaid
flowchart TB
    subgraph src["src/"]
        subgraph components["components/"]
            Navbar["Navbar.jsx"]
            Footer["Footer.jsx"]
            ScrollToTop["ScrollToTop.jsx"]
        end

        subgraph pages["pages/"]
            Home["Home.jsx"]
            QuemSomos["QuemSomos.jsx"]
            Contato["Contato.jsx"]
            SejaParceiro["SejaParceiro.jsx"]
            JaSouParceiro["JaSouParceiro.jsx"]
        end

        App["App.jsx"]
        Main["main.jsx"]
        IndexCSS["index.css"]
        AppCSS["App.css"]
    end

    App --> Navbar
    App --> Footer
    App --> ScrollToTop
    App --> Home
    App --> QuemSomos
    App --> Contato
    App --> SejaParceiro
    App --> JaSouParceiro
```

---

## 4. Dependências principais

```mermaid
flowchart LR
    subgraph app["Aplicação"]
        App
    end

    subgraph deps["Dependências"]
        React["react"]
        Router["react-router-dom"]
        GSAP["gsap"]
    end

    App --> React
    App --> Router
    Navbar --> GSAP
```

| Pacote            | Uso principal                          |
|-------------------|----------------------------------------|
| `react` / `react-dom` | UI e componentes                    |
| `react-router-dom`   | Rotas e navegação                  |
| `gsap`               | Animações (ex.: Navbar)            |
| `vite`               | Build e dev server                 |

---

## 5. Visão geral (um único diagrama)

```mermaid
flowchart TB
    index["index.html"] --> main["main.jsx"]
    main --> App["App.jsx"]
    main --> indexCSS["index.css"]

    App --> ScrollToTop["ScrollToTop"]
    App --> Navbar["Navbar"]
    App --> Footer["Footer"]
    App --> Routes["Routes"]

    Routes --> Home["/ → Home"]
    Routes --> QuemSomos["/quem-somos → QuemSomos"]
    Routes --> Contato["/contato → Contato"]
    Routes --> SejaParceiro["/seja-parceiro → SejaParceiro"]
    Routes --> JaSouParceiro["/ja-sou-parceiro → JaSouParceiro"]

    Navbar -.->|animações| GSAP["gsap"]
```

---

Para visualizar os diagramas Mermaid:
- **VS Code:** extensão "Mermaid" ou "Markdown Preview Mermaid Support"
- **GitHub:** abra este `.md` no repositório
- **Online:** [mermaid.live](https://mermaid.live)
