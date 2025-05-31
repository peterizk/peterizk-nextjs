// src/app/projects/page.tsx
export const metadata = {
  title: 'Projects – Peter Rizk',
  description:
    'Case studies demonstrating Azure cloud migrations, analytics modernisation, and omni‑channel experience delivery.',
};

interface Tech {
  name: string;
  level: 'expert' | 'advanced' | 'proficient';
}
interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  summary: string;   // one‑liner hook
  points: string[];  // 2‑3 crisp bullets
  tech: Tech[];
  kpi: string;
}

const projects: Project[] = [
  {
    id: 'retail-omni',
    title: 'Fortune‑500 Retail Digital Transformation',
    role: 'Principal Architect & Product Director',
    period: '2024‑2025',
    summary: 'Azure‑powered omnichannel rebuild doubled customer engagement.',
    points: [
      'SAFe flywheel & real‑time Jira / Airtable dashboards',
      'TDD pipeline & AEM Cloud migration (on‑prem ➜ SaaS)',
      'Chatbot + SEO architecture → page load ↓38 %',
    ],
    tech: [
      { name: 'Azure AKS', level: 'advanced' },
      { name: 'AEM Cloud', level: 'advanced' },
      { name: 'Confluence / Jira', level: 'expert' },
    ],
    kpi: 'Engagement ↑100% • Code quality and release quality ↑200%',
  },
  {
    id: 'saas-scale',
    title: 'On‑shore Dev Centre & SAFe Roll‑out',
    role: 'Director of Technology',
    period: '2020‑2023',
    summary: 'Built onshore dev hub; scaled SAFe across 200 engineers.',
    points: [
      'Standard dev blueprint cut bespoke code 40%',
      'Azure DevOps pipelines',
      'Scalable page rendering solutions and JSON architecture',
    ],
    tech: [
      { name: 'Azure DevOps', level: 'expert' },
      { name: '.NET Architecture', level: 'advanced' },
      { name: 'SAFe', level: 'expert' },
    ],
    kpi: 'Dev efficiency ↑150% • SaaS Delivery and client onboarding ↓200%',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Pre‑Sales Analytics for HCSC',
    role: 'Data Visualization & Strategy Lead',
    period: '2017‑2020',
    summary: 'Tableau‑driven pre‑sales analytics unlocked a $10M cost-savings program.',
    points: [
      'Client-specific savings models & guaranteed outcomes',
      'Interactive Tableau dashboards for exec buy‑in',
      'SQL data pipelines across 5 regional health plans',
    ],
    tech: [
      { name: 'Tableau', level: 'advanced' },
      { name: 'SQL', level: 'advanced' },
      { name: 'Azure ML', level: 'proficient' },
    ],
    kpi: 'Program bookings over $5M / Y1 • forecast accuracy ↑85%',
  },
  {
    id: 'icd10-cloud',
    title: 'ICD-10 Cloud Migration & Automation',
    role: 'Test Architect',
    period: '2010-2017',
    summary: 'Modernised claims platform & automated 2,000+ tests.',
    points: [
      'Azure App Service refactor of COBOL batch',
      'Selenium & LoadRunner → zero Sev-1s at go-live',
    ],
    tech: [
      { name: 'Azure App Service', level: 'proficient' },
      { name: 'Selenium', level: 'advanced' },
      { name: 'LoadRunner', level: 'proficient' },
    ],
    kpi: 'Manual QA effort ↓1000% • Test coverage 99.98%',
  },
  {
    id: 'federal-financials',
    title: 'Federal Financials Digital Signature',
    role: 'Solution Lead (Accenture)',
    period: '2008-2010',
    summary: 'First e-signature workflow in US-gov finance, once thought impossible.',
    points: [
      'Bridged security gaps across five agencies',
      'Cut approval cycle 3 days ➜ 4 hrs',
    ],
    tech: [
      { name: 'OAF', level: 'advanced' },
      { name: 'Oracle Financials', level: 'proficient' },
     { name: 'Silanis e‑Sign', level: 'advanced' },
      { name: 'BPEL', level: 'proficient' },
    ],
    kpi: '100% compliance • paperless ROI in 9mo',
  },
  {
    id: 'variable-print',
    title: 'Variable Data Print Innovation',
    role: 'Software Developer Lead',
    period: '1997‑1998',
    summary: 'Personalised mass‑print engine adopted as industry standard.',
    points: [
      'C++ rendering module for 50,000 ppm press',
      'Time-to-press hours vs days from static models',
    ],
    tech: [
      { name: 'C++', level: 'advanced' },
      { name: 'Quark XT', level: 'proficient' },
    ],
    kpi: 'First-mover advantage • patents filed',
  },
];

function levelBadge(l: Tech['level']): string {
  return l === 'expert' ? '★★★★★' : l === 'advanced' ? '★★★★☆' : '★★★☆☆';
}

export default function ProjectsPage() {
  return (
    <article style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>Highlighted Projects</h1>

      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit,minmax(26rem,1fr))',
        }}
      >
        {projects.map((p) => (
          <section
            key={p.id}
            style={{
              background: 'var(--brand-dark)',
              color: '#fff',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 8px rgba(0,0,0,.15)',
            }}
          >
            <h2 style={{ fontSize: 18, marginBottom: 4 }}>{p.title}</h2>
            <p style={{ fontSize: 12, opacity: 0.85, marginBottom: 6 }}>
              {p.role} • {p.period}
            </p>
            <p style={{ fontSize: 14, marginBottom: 6 }}>{p.summary}</p>
            <ul style={{ marginLeft: 20, listStyle: 'disc', fontSize: 12, marginBottom: 6 }}>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <p style={{ fontSize: 12, fontStyle: 'italic', marginBottom: 8 }}>{p.kpi}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.tech.map((t) => (
                <li
                  key={t.name}
                  style={{
                    fontSize: 10,
                    background: '#374151',
                    borderRadius: 4,
                    padding: '2px 6px',
                  }}
                >
                  {t.name} {levelBadge(t.level)}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
