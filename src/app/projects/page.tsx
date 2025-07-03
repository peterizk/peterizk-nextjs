// src/app/projects/page.tsx
// Next 14 / React 18 – Server Component (TSX) – Fully validated with `tsc`

import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

/*────────────────────────── Metadata ─────────────────────────*/
export const metadata = {
  title: 'Projects – Peter Rizk',
  description:
    'Case studies demonstrating Azure cloud migrations, analytics modernisation, self‑service portals, and omni‑channel delivery.',
};

/*────────────────────────── Types ────────────────────────────*/
interface Tech {
  name: string;
  level: 'expert' | 'advanced' | 'proficient';
}

interface Project {
  id: string;
  title: string;
  role: string;
  period?: string;
  summary: string;
  points: string[];
  tech: Tech[];
  kpi: string;
  repo?: string;
  demo?: string;
  doc?: string;
}

/*──────────── Helper – star badge for skill level ────────────*/
function levelBadge(level: Tech['level']): string {
  return level === 'expert' ? '★★★★★' : level === 'advanced' ? '★★★★☆' : '★★★☆☆';
}

/*──────────── Helper – inline link icons ─────────────────────*/
function LinkIcons({ repo, demo, doc }: { repo?: string; demo?: string; doc?: string }): ReactNode {
  if (!repo && !demo && !doc) return null;
  const iconStyle: CSSProperties = { fontSize: 14, marginRight: 8 };
  return (
    <p style={{ marginTop: 8 }}>
      {repo && (
        <Link href={repo} target="_blank" rel="noopener" style={iconStyle} title="Source code">
          🛠️
        </Link>
      )}
      {demo && (
        <Link
          href={demo}
          target={demo.startsWith('/') ? undefined : '_blank'}
          rel="noopener"
          style={iconStyle}
          title="Live demo / video"
        >
          ▶️
        </Link>
      )}
      {doc && (
        <Link href={doc} target="_blank" rel="noopener" style={iconStyle} title="Documentation / deck">
          📄
        </Link>
      )}
    </p>
  );
}

/*────────────────────── Project Data ───────────────────────*/
const projects: Project[] = [
  {
    id: 'retail-omni',
    title: 'Fortune‑500 Retail Digital Transformation',
    role: 'Principal Architect & Product Director',
    period: '2024‑2025',
    summary: 'Azure‑powered omnichannel rebuild doubled customer engagement.',
    points: [
      'SAFe flywheel & realtime Jira dashboards',
      'TDD pipeline & AEM Cloud migration (on‑prem → SaaS)',
      'Chatbot + SEO architecture → page‑load ↓38 %',
    ],
    tech: [
      { name: 'Azure AKS', level: 'advanced' },
      { name: 'AEM Cloud', level: 'advanced' },
      { name: 'Jira', level: 'expert' },
    ],
    kpi: 'Engagement ↑100 % • Code quality ↑200 %',
    doc: '/aem_before_after_multi_layer_architecture.pptx', 
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
      'Scalable JSON rendering architecture',
    ],
    tech: [
      { name: 'Azure DevOps', level: 'expert' },
      { name: '.NET', level: 'advanced' },
      { name: 'SAFe', level: 'expert' },
    ],
    kpi: 'Dev efficiency ↑150 % • Client onboarding ↓60 %',
    doc: '/aem_cloud_migration_architecture.pptx',
    demo: 'https://www.youtube.com/watch?v=razJaYZMkyg',
  },
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
    demo: 'https://www.youtube.com/watch?v=7uwf1mA62zI',
  },
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
    doc: '/federal-signature-case-study.pdf',
  },
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
    demo: 'https://www.youtube.com/watch?v=QsDCygypPcA',
  },
  {
    id: 'aem-cloud-migration',
    title: 'AEM Cloud Migration & Experience Fragments',
    role: 'Principal Architect & Product Owner',
    period: '2023',
    summary:
      'Migrated to AEM as a Cloud Service; introduced Core Components, Experience Fragments, and blue‑green deploys via Cloud Manager.',
    points: [
      'Defined target AEM cloud architecture & 6‑month roadmap',
      'Championed XF governance playbook',
      'Implemented CI/CD with Cloud Manager',
    ],
    tech: [
      { name: 'AEM Cloud', level: 'advanced' },
      { name: 'Cloud Manager', level: 'advanced' },
      { name: 'Java', level: 'advanced' },
    ],
    kpi: 'Publish time ↓48 h → 6 h • Traffic ↑35 % • Uptime >99.95 %',
    doc: '/aem_cloud_migration_architecture.pptx',
  },
  {
    id: 'barcode-kiosk',
    title: 'Barcode Kiosk & Inventory Automation',
    role: 'Senior Developer',
    period: '2002',
    summary: 'Java‑based kiosk with barcode scanner provided real‑time inventory logging across Midwest plants.',
    points: [
      'Designed kiosk UI & barcode parsing',
      'Integrated with SAP backend',
      'Deployed across Midwest facilities',
    ],
    tech: [
      { name: 'Java', level: 'advanced' },
      { name: 'SAP', level: 'proficient' },
      { name: 'Zebra SDK', level: 'proficient' },
    ],
    kpi: 'Productivity ↑25 % • Data‑entry errors ↓70 %',
    demo: 'https://youtu.be/barcode-kiosk-demo',
  },
  {
    id: 'selfservice-demo',
    title: 'Self‑Service Admin Demo',
    role: 'Full‑Stack Prototype',
    period: '2025',
    summary: 'Widget shows how admins upload content and navigation updates instantly—no redeploy required.',
    points: [
      'React drag‑drop upload with local state mock',
      'Simulated Azure Blob storage calls',
      'Live nav preview updates after file drop',
    ],
    tech: [
      { name: 'Next.js', level: 'advanced' },
      { name: 'React Hook Form', level: 'proficient' },
      { name: 'Tailwind', level: 'proficient' },
    ],
    kpi: 'Upload → publish <3 s • Zero training needed',
    demo: '/projects/selfservice-demo',
  },
];

/*──────────────────── Projects Page Component ───────────────*/
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
              {p.period && ` • ${p.period}`}
            </p>
            <p style={{ fontSize: 14, marginBottom: 6 }}>{p.summary}</p>
            <ul style={{ marginLeft: 20, listStyle: 'disc', fontSize: 12, marginBottom: 6 }}>
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
            {<LinkIcons repo={p.repo} demo={p.demo} doc={p.doc} />}
          </section>
        ))}
      </div>
    </article>
  );
}
