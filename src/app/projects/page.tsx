// src/app/projects/page.tsx
// (Next 14 / React 18 – TSX)

import Link from 'next/link';

export const metadata = {
  title: 'Projects – Peter Rizk',
  description:
    'Case studies demonstrating Azure cloud migrations, analytics modernisation, and omni‑channel experience delivery.',
};

/*────────────────────────── Types ──────────────────────────*/
interface Tech {
  name: string;
  level: 'expert' | 'advanced' | 'proficient';
}

interface Project {
  id: string;
  title: string;
  role: string;
  period?: string;
  summary: string;     // one‑liner hook
  points: string[];    // 2‑4 crisp bullets
  tech: Tech[];
  kpi: string;
  repo?: string;       // optional GitHub / Bitbucket URL
  demo?: string;       // optional live demo / YouTube / Figma URL
  doc?: string;        // optional PDF / deck / spec URL
}

/*────────────────────── Star Badge Helper ──────────────────*/
function levelBadge(level: Tech['level']) {
  return level === 'expert' ? '★★★★★' : level === 'advanced' ? '★★★★☆' : '★★★☆☆';
}

/*────────────────────── Link Icon Helper ──────────────────*/
function LinkIcons({ repo, demo, doc }: { repo?: string; demo?: string; doc?: string }) {
  if (!repo && !demo && !doc) return null;
  const style = { fontSize: 12, marginRight: 8 } as const;
  return (
    <p style={{ marginTop: 8 }}>
      {repo && (
        <Link href={repo} target="_blank" rel="noopener" style={style} title="Source code">
          🛠️
        </Link>
      )}
      {demo && (
        <Link href={demo} target="_blank" rel="noopener" style={style} title="Live demo / video">
          ▶️
        </Link>
      )}
      {doc && (
        <Link href={doc} target="_blank" rel="noopener" style={style} title="Documentation / deck">
          📄
        </Link>
      )}
    </p>
  );
}

/*────────────────────── Project Data ──────────────────────*/
const projects: Project[] = [
  /*── Original highlights ─────────────────────────────────*/
  {
    id: 'retail-omni',
    title: 'Fortune‑500 Retail Digital Transformation',
    role: 'Principal Architect & Product Director',
    period: '2024‑2025',
    summary: 'Azure‑powered omnichannel rebuild doubled customer engagement.',
    points: [
      'SAFe flywheel & real‑time Jira / Airtable dashboards',
      'TDD pipeline & AEM Cloud migration (on‑prem → SaaS)',
      'Chatbot + SEO architecture → page‑load ↓38 %',
    ],
    tech: [
      { name: 'Azure AKS', level: 'advanced' },
      { name: 'AEM Cloud', level: 'advanced' },
      { name: 'Confluence / Jira', level: 'expert' },
    ],
    kpi: 'Engagement ↑100 % • Code quality ↑200 %',
    repo: 'https://github.com/peterizk/retail-omni',
  },
  {
    id: 'saas-scale',
    title: 'On‑shore Dev Centre & SAFe Roll‑out',
    role: 'Director of Technology',
    period: '2020‑2023',
    summary: 'Built on‑shore dev hub; scaled SAFe across 200 engineers.',
    points: [
      'Standard dev blueprint cut bespoke code 40 %',
      'Azure DevOps pipelines',
      'Scalable page rendering and JSON architecture',
    ],
    tech: [
      { name: 'Azure DevOps', level: 'expert' },
      { name: '.NET', level: 'advanced' },
      { name: 'SAFe', level: 'expert' },
    ],
    kpi: 'Dev efficiency ↑150 % • Client onboarding ↓60 %',
    doc: '/docs/saas-scale-overview.pdf',
  },
  /*── Merged predictive analytics ─────────────────────────*/
  {
    id: 'predictive-analytics',
    title: 'Predictive Pre‑Sales Analytics Platform (HCSC)',
    role: 'Data Visualisation & Strategy Lead',
    period: '2017‑2020',
    summary:
      'Tableau‑driven analytics & savings models unlocked a $10 M cost‑savings program and boosted deal close‑rates.',
    points: [
      'Client‑specific savings models & guaranteed outcomes',
      'Interactive Tableau dashboards for executive buy‑in',
      'Unified SQL pipelines across 5 regional health plans',
    ],
    tech: [
      { name: 'Tableau', level: 'advanced' },
      { name: 'SQL', level: 'advanced' },
      { name: 'Azure ML', level: 'proficient' },
      { name: 'Python', level: 'proficient' },
    ],
    kpi: 'Forecast accuracy ↑85 % • Sales efficiency ↑25 %',
    demo: 'https://youtu.be/analytics-demo',
  },
  /*── Merged ICD‑10 cloud migration ───────────────────────*/
  {
    id: 'icd10-cloud',
    title: 'ICD‑10 Cloud Migration & Test Automation',
    role: 'Test Architect',
    period: '2010‑2017',
    summary:
      'Modernised a COBOL claims platform to Azure App Service and automated 2 000+ regression tests with zero Sev‑1 defects at go‑live.',
    points: [
      'Azure App Service refactor of COBOL batch',
      'Designed test strategy & budget',
      'Implemented Selenium & LoadRunner suites',
    ],
    tech: [
      { name: 'Azure App Service', level: 'proficient' },
      { name: 'Selenium', level: 'advanced' },
      { name: 'LoadRunner', level: 'proficient' },
    ],
    kpi: 'Manual QA effort ↓40 % • Defect leakage ≈0 %',
  },
  /*── Merged federal signature project ───────────────────*/
  {
    id: 'federal-financials',
    title: 'Federal Financials Digital Signature System',
    role: 'Solution Lead (Accenture)',
    period: '2008‑2010',
    summary:
      'First e‑signature workflow in US‑gov finance, bridging compliance across five agencies and cutting approval cycles from 3 days to 4 h.',
    points: [
      'Bridged security gaps across five agencies',
      'Designed multi‑agency security model',
    ],
    tech: [
      { name: 'Oracle Financials', level: 'proficient' },
      { name: 'Silanis e‑Sign', level: 'advanced' },
      { name: 'BPEL', level: 'proficient' },
    ],
    kpi: 'Close‑process time ↓75 % • 100 % compliance',
    doc: '/docs/federal-signature-case-study.pdf',
  },
  /*── Legacy variable‑print project ───────────────────────*/
  {
    id: 'variable-print',
    title: 'Variable Data Print Innovation',
    role: 'Software Developer Lead',
    period: '1997‑1998',
    summary: 'Personalised mass‑print engine adopted as industry standard.',
    points: [
      'C++ rendering module for 50 000 ppm press',
      'Time‑to‑press → hours vs days from static models',
    ],
    tech: [
      { name: 'C++', level: 'advanced' },
      { name: 'Quark XT', level: 'proficient' },
    ],
    kpi: 'First‑mover advantage • Patents filed',
  },
  /*── Sheet‑derived items with added tech ─────────────────*/
  {
    id: 'aem-cloud-migration-experience-fragments',
    title: 'AEM Cloud Migration & Experience Fragments',
    role: 'Principal Architect & Product Owner',
    summary:
      'Migrated to AEM as a Cloud Service; introduced Core Components, Experience Fragments, and Cloud Manager CI/CD for omnichannel SEO.',
    points: [
      'Defined target AEM cloud architecture & 6‑month roadmap',
      'Championed XFs, policies, and content governance playbook',
      'Implemented blue‑green deploys via Cloud Manager',
    ],
    tech: [
      { name: 'AEM Cloud', level: 'expert' },
      { name: 'Adobe Cloud Manager', level: 'advanced' },
      { name: 'Azure DevOps', level: 'proficient' },
    ],
    kpi: 'Publish time ↓48 h → <6 h • SEO traffic ↑35 %',
    repo: 'https://github.com/peterizk/aem-cloud-migration',
  },
  {
    id: 'safe-transformation-onshore-dev-guild',
    title: 'SAFe Transformation & On‑shore Dev Guild',
    role: 'Solution Architect Director',
    summary:
      'Rolled out SAFe across 200 engineers and built an on‑shore TDD DevOps guild, cutting bespoke code by 40 %.',
    points: [
      'Created on‑shore guild and playbooks',
      'Instituted SAFe ceremonies & metrics',
      'Automated Azure DevOps pipelines',
    ],
    tech: [
      { name: 'Azure DevOps', level: 'advanced' },
      { name: 'SAFe', level: 'expert' },
      { name: '.NET', level: 'proficient' },
    ],
    kpi: 'Workforce efficiency ↑150 % • Time‑to‑market ↓60 %',
  },
  {
    id: 'barcode-kiosk-inventory-automation',
    title: 'Barcode Kiosk & Inventory Automation',
    role: 'Senior Developer',
    summary:
      'Designed and deployed a Java barcode‑scanning kiosk for real‑time inventory and task logging across multiple manufacturing plants.',
    points: [
      'Built kiosk UI & barcode parsing module',
      'Integrated SAP backend for live stock updates',
      'Rolled out across Midwest facilities',
    ],
    tech: [
      { name: 'Java', level: 'advanced' },
      { name: 'SAP', level: 'proficient' },
      { name: 'Barcode APIs', level: 'proficient' },
    ],
    kpi: 'Productivity ↑25 % • Data‑entry errors ↓70 %',
    demo: 'https://youtu.be/barcode-kiosk-demo',
  },
  {
    id: 'variable-data-printing-vdf-platform',
    title: 'Variable Data Printing (VDF) Platform',
    role: 'Lead Developer',
    summary:
      'Pioneered a VDF solution using Facespan and a custom markup language enabling mass‑customised print runs.',
    points: [
      'Standardised Facespan dev practices',
      'Led junior devs building customer templates',
      'Delivered client‑centric variable runs',
    ],
    tech: [
      { name: 'Facespan', level: 'proficient' },
      { name: 'C++', level: 'advanced' },
      { name: 'PostScript', level: 'proficient' },
    ],
    kpi: 'First‑to‑market VDF capability • New revenue stream enabled',
  },
];

/*────────────────────── Page Component ────────────────────*/
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
              {p.role}
              {p.period ? ` • ${p.period}` : ''}
            </p>
            <p style={{ fontSize: 14, marginBottom: 6 }}>{p.summary}</p>
            <ul
              style={{ marginLeft: 20, listStyle: 'disc', fontSize: 12, marginBottom: 6 }}
            >
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <p style={{ fontSize: 12, fontStyle: 'italic', marginBottom: 8 }}>{p.kpi}</p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 6,
              }}
            >
              {p.tech.map((t) => (
                <li
                  key={t.name}
                  style={{ fontSize: 10, background: '#374151', borderRadius: 4, padding: '2px 6px' }}
                >
                  {t.name} {levelBadge(t.level)}
                </li>
              ))}
            </ul>
            {/* inline icons */}
            <LinkIcons repo={p.repo} demo={p.demo} doc={p.doc} />
          </section>
        ))}
      </div>
    </article>
  );
}
