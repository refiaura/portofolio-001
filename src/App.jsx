import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness,
  Check, Code2, Github, GraduationCap, MapPin, Menu, Moon, Send,
  Sparkles, Sun, X,
} from 'lucide-react'

const navigation = [
  ['Tentang', '#tentang'], ['Keahlian', '#keahlian'], ['Proyek', '#proyek'],
  ['Pengalaman', '#pengalaman'], ['Sertifikat', '#sertifikat'], ['Kontak', '#kontak'],
]

const projects = [
  {
    number: '01', category: 'DATA SCIENCE · PROYEK KELOMPOK',
    title: 'Analisis Kesenjangan Gender pada IPM Jawa Barat',
    description: 'Analisis kesenjangan gender pada IPM kabupaten/kota di Jawa Barat tahun 2021–2025 dengan fokus pada aspek pendidikan. Proyek kelompok mata kuliah Data Science.',
    tools: ['Tambahkan tools yang digunakan'],
    role: 'Peran: isi kontribusi Anda',
    href: '',
  },
  {
    number: '02', category: 'PROYEK PILIHAN', title: 'Tambahkan proyek Anda',
    description: 'Ganti teks ini dengan masalah yang diselesaikan, solusi yang dibangun, dan dampak proyek.',
    tools: ['Java', 'Spring Boot', 'SQL'], role: 'Peran: sesuaikan', href: '', placeholder: true,
  },
  {
    number: '03', category: 'PROYEK PILIHAN', title: 'Tambahkan proyek Anda',
    description: 'Ceritakan proyek lain yang ingin Anda tampilkan di portofolio ini.',
    tools: ['Tambahkan tools'], role: 'Peran: sesuaikan', href: '', placeholder: true,
  },
]

const skillGroups = [
  { title: 'Backend & Bahasa', icon: Code2, items: ['Java', 'Spring Boot', 'REST API'] },
  { title: 'Database & Tools', icon: BriefcaseBusiness, items: ['SQL', 'Desain database', 'Tambahkan tools lain'] },
  { title: 'Soft skills', icon: Sparkles, items: ['Tambahkan soft skill', 'Contoh: kerja tim'] },
]

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('refi-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('refi-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  function submitContact(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const recipient = 'email-anda@example.com' // Ganti dengan alamat email aktif Anda.
    const subject = encodeURIComponent(`Pesan portofolio dari ${name}`)
    const body = encodeURIComponent(`Dari: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Lewati ke konten utama</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#beranda" aria-label="Refi Aura, ke beranda"><span className="brand-mark">R<span>.</span></span><span className="brand-name">refi<span>aura</span></span></a>
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Navigasi utama">
            {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="icon-button theme-toggle" onClick={() => setDark((value) => !value)} aria-label={dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'} title={dark ? 'Mode terang' : 'Mode gelap'}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="nav-cta" href="#kontak">Mari terhubung <ArrowUpRight size={15} /></a>
            <button className="icon-button menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero section" id="beranda">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="status-dot" /> TERBUKA UNTUK PELUANG KOLABORASI</div>
              <h1>Halo, saya <span className="text-gradient">Refi Aura<br className="desktop-break" /> Noviansyah.</span></h1>
              <p className="hero-role">Mahasiswa Teknik Informatika <span>·</span> Backend Developer</p>
              <p className="hero-description">Saya membangun backend yang <strong>andal, aman, dan siap bertumbuh</strong>—satu API yang dirancang dengan baik pada satu waktu.</p>
              <div className="hero-buttons">
                <a className="button button-primary" href="#proyek">Lihat Proyek <ArrowDownRight size={17} /></a>
                <a className="button button-secondary" href="#kontak">Hubungi Saya <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-meta"><span><MapPin size={15} /> Cianjur, Indonesia</span><span className="meta-divider" /><span>Fokus pada Java &amp; Spring Boot</span></div>
            </div>
            <div className="hero-art reveal" aria-label="Placeholder foto profil Refi Aura">
              <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="profile-card">
                <div className="profile-topline"><span>PORTOFOLIO / {new Date().getFullYear()}</span><span className="profile-live"><i /> AVAILABLE</span></div>
                <div className="avatar-placeholder"><span>RA</span><div className="avatar-corner">FOTO<br />PROFIL</div></div>
                <div className="profile-caption"><div><strong>Refi Aura Noviansyah</strong><span>Backend Developer</span></div><span className="profile-arrow"><ArrowUpRight size={18} /></span></div>
              </div>
              <div className="floating-chip chip-java"><span className="chip-symbol">J</span><span><strong>Java</strong><small>Backend</small></span></div>
              <div className="floating-chip chip-spring"><span className="spring-symbol">✳</span><span><strong>Spring Boot</strong><small>Framework</small></span></div>
              <div className="art-coordinate">BACKEND<br />JAVA / SPRING</div>
            </div>
          </div>
          <div className="container hero-bottom"><span>SCROLL UNTUK MENJELAJAHI</span><a href="#tentang" aria-label="Gulir ke bagian tentang"><ArrowDown size={17} /></a><span className="hero-index">01 / 06</span></div>
        </section>

        <section className="section about-section" id="tentang">
          <div className="container">
            <div className="section-heading reveal"><span className="section-kicker">01 — TENTANG SAYA</span><h2>Merancang sistem,<br /><span>memecahkan masalah.</span></h2></div>
            <div className="about-grid">
              <div className="about-copy reveal"><p>Saya mahasiswa Teknik Informatika dan backend developer yang berfokus pada pengembangan aplikasi menggunakan <strong>Java dan Spring Boot</strong>. Saya senang membangun REST API yang bersih, aman, dan scalable, serta merancang database yang efisien.</p><p>Tujuan saya adalah berkontribusi di tim engineering untuk membangun sistem backend yang andal dan berdampak bagi banyak pengguna.</p><a className="text-link" href="#kontak">Kenali saya lebih lanjut <ArrowRight size={16} /></a></div>
              <div className="education-card reveal"><div className="card-icon"><GraduationCap size={21} /></div><div><span className="card-label">PENDIDIKAN</span><h3>Universitas Anda</h3><p>Teknik Informatika <span>·</span> Tahun masuk–lulus</p><small className="edit-note">Ganti dengan nama universitas dan tahun yang sebenarnya.</small></div><ArrowUpRight className="education-arrow" size={18} /></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="keahlian">
          <div className="container">
            <div className="section-heading section-heading-row reveal"><div><span className="section-kicker">02 — KEAHLIAN</span><h2>Perangkat untuk<br /><span>membangun solusi.</span></h2></div><p>Teknologi yang saya gunakan untuk merancang dan mengembangkan aplikasi backend.</p></div>
            <div className="skill-grid">{skillGroups.map(({ title, icon: Icon, items }, index) => <article className="skill-card reveal" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-number">0{index + 1}</span></div><h3>{title}</h3><div className="skill-tags">{items.map((item) => <span className={item.toLowerCase().includes('tambah') || item.includes('Contoh') ? 'skill-tag is-placeholder' : 'skill-tag'} key={item}>{item}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section className="section projects-section" id="proyek">
          <div className="container">
            <div className="section-heading section-heading-row reveal"><div><span className="section-kicker">03 — PROYEK PILIHAN</span><h2>Beberapa hal yang<br /><span>pernah saya bangun.</span></h2></div><a className="text-link" href="https://github.com/refiaura" target="_blank" rel="noreferrer">Lihat GitHub <ArrowUpRight size={16} /></a></div>
            <div className="project-list">{projects.map((project) => <article className={`project-card reveal ${project.placeholder ? 'project-placeholder' : ''}`} key={project.number}><div className="project-index">{project.number}</div><div className="project-content"><div className="project-category">{project.category}{project.placeholder && <span className="draft-badge">DRAFT</span>}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-details"><div><span className="detail-label">TOOLS</span><div className="project-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div><div><span className="detail-label">KONTRIBUSI</span><span className="project-role">{project.role}</span></div></div></div>{project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Buka proyek ${project.title}`}><ArrowUpRight size={20} /></a> : <span className="project-link project-link-placeholder" title="Tautan GitHub atau demo belum ditambahkan" aria-label="Tautan proyek belum tersedia"><ArrowUpRight size={20} /></span>}</article>)}</div>
          </div>
        </section>

        <section className="section experience-section" id="pengalaman">
          <div className="container experience-layout"><div className="section-heading reveal"><span className="section-kicker">04 — PENGALAMAN</span><h2>Terus belajar,<br /><span>terus bertumbuh.</span></h2><p className="experience-intro">Ruang untuk pengalaman profesional, organisasi, atau kegiatan kampus yang ingin Anda tampilkan.</p></div><article className="experience-card reveal"><div className="experience-line"><span className="experience-dot" /></div><div className="experience-body"><div className="experience-top"><span className="card-label">POSISI / PERAN</span><span className="experience-period">PERIODE</span></div><h3>Tambahkan pengalaman atau organisasi</h3><p className="experience-org">Nama organisasi / tempat</p><ul><li>Tambahkan pencapaian atau tanggung jawab utama Anda.</li><li>Gunakan hasil terukur bila tersedia.</li></ul></div></article>
          </div>
        </section>

        <section className="section certificates-section" id="sertifikat">
          <div className="container certificate-row reveal"><div><span className="section-kicker">05 — SERTIFIKAT</span><h2>Sertifikat &amp; pencapaian</h2></div><div className="certificate-placeholder"><span className="certificate-check"><Check size={16} /></span><div><strong>Tambahkan sertifikat Anda</strong><p>Nama sertifikat · Penerbit · Tahun</p></div><span className="optional-label">OPSIONAL</span></div></div>
        </section>

        <section className="section contact-section" id="kontak">
          <div className="container contact-layout"><div className="contact-copy reveal"><span className="section-kicker">06 — KONTAK</span><h2>Punya ide menarik?<br /><span>Mari kita bicarakan.</span></h2><p>Saya terbuka untuk diskusi, kolaborasi, dan kesempatan baru. Kirim pesan dan mari mulai percakapan.</p><div className="contact-links"><a href="mailto:email-anda@example.com"><span className="contact-link-icon"><Send size={16} /></span><span><small>EMAIL</small><strong>email-anda@example.com</strong></span><ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/username-anda" target="_blank" rel="noreferrer"><span className="contact-link-icon linkedin-icon">in</span><span><small>LINKEDIN</small><strong>Tambahkan profil LinkedIn</strong></span><ArrowUpRight size={16} /></a><a href="https://github.com/refiaura" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={16} /></span><span><small>GITHUB</small><strong>github.com/refiaura</strong></span><ArrowUpRight size={16} /></a></div><small className="edit-note contact-note">Ganti email dan tautan LinkedIn dengan informasi Anda.</small></div>
            <form className="contact-form reveal" onSubmit={submitContact}><div className="form-heading"><span className="form-heading-icon"><Send size={17} /></span><div><strong>Kirim pesan</strong><span>Balas obrolan baru secepatnya.</span></div></div><label htmlFor="name">Nama Anda</label><input id="name" name="name" autoComplete="name" placeholder="Nama lengkap" required /><label htmlFor="email">Alamat email</label><input id="email" name="email" type="email" autoComplete="email" placeholder="nama@email.com" required /><label htmlFor="message">Pesan</label><textarea id="message" name="message" rows="4" placeholder="Ceritakan sedikit tentang kebutuhan Anda..." required /><button className="button button-primary form-submit" type="submit">Kirim pesan <ArrowUpRight size={16} /></button>{sent && <p className="form-success" role="status">Aplikasi email Anda akan terbuka. Pastikan alamat penerima telah diperbarui.</p>}<p className="form-footnote">Formulir ini membuka aplikasi email Anda dan tidak menyimpan data.</p></form>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#beranda"><span className="brand-mark">R<span>.</span></span><span className="brand-name">refi<span>aura</span></span></a><span>Dirancang dengan niat baik. <span className="footer-heart">✳</span> © {new Date().getFullYear()} Refi Aura Noviansyah</span><a className="back-top" href="#beranda">Kembali ke atas <ArrowUpRight size={14} /></a></div></footer>
    </div>
  )
}

export default App

