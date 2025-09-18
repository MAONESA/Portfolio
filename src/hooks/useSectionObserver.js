import { Github, Linkedin, Mail } from 'lucide-react'


export default function Footer() {
const iconCls = "size-5 transition-transform group-hover:-translate-y-0.5"
const linkCls = "group inline-flex items-center gap-2 rounded-xl px-3 py-2 outline-neon hover:text-[--color-neon]"


return (
<footer className="mt-10 border-t border-white/10 pt-6 text-sm text-white/70">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
<p className="order-2 md:order-1">© {new Date().getFullYear()} David — All rights reserved.</p>
<nav className="order-1 flex items-center gap-3 md:order-2">
<a className={linkCls} href="https://github.com/" target="_blank" rel="noreferrer">
<Github className={iconCls} /> <span className="sr-only">GitHub</span>
</a>
<a className={linkCls} href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
<Linkedin className={iconCls} /> <span className="sr-only">LinkedIn</span>
</a>
<a className={linkCls} href="mailto:hello@example.com">
<Mail className={iconCls} /> <span className="sr-only">Email</span>
</a>
</nav>
</div>
</footer>
)
}