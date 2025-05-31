// src/app/services/page.tsx
// ────────────────────────────────────────────────
export const metadata = {
  title: 'Services – Peter Rizk',
  description: 'Development, architecture, data analytics, and executive‑level consulting wrapped in one Microsoft‑first toolkit.',
};

interface Service {
  id: string;
  title: string;
  hook: string;
  bullets: string[];
  tools: string[];
}

const services: Service[] = [
  {
    id: 'dev-delivery',
    title: 'Full‑Stack Development & DevOps',
    hook: 'Ship reliable features at sprint‑speed.',
    bullets: [
      'Test‑driven pipelines, blue‑green deploys, IaC',
      'Hands‑on in React, Node, Java, AEM, .NET',
      'Azure DevOps & GitHub Actions automation',
    ],
    tools: ['Azure DevOps', 'GitHub Actions', 'Terraform', 'Selenium'],
  },
  {
    id: 'architecture',
    title: 'Enterprise & Solution Architecture',
    hook: 'Blueprints that scale and last.',
    bullets: [
      'TOGAF 9 & SAFe framework alignment',
      'Reference architectures for composable commerce',
      'Cloud cost‑to‑value modelling & governance',
    ],
    tools: ['Azure Well‑Architected', 'AEM Cloud', 'Kubernetes', 'Terraform'],
  },
  {
    id: 'data-viz',
    title: 'Data Visualization & Analytics',
    hook: 'Turn raw data into decisions.',
    bullets: [
      'Tableau & Power BI interactive dashboards',
      'Azure Synapse pipelines + DAX / Power Query',
      'Predictive modelling with Azure ML & Python',
    ],
    tools: ['Tableau', 'Power BI', 'SQL', 'Azure ML'],
  },
  {
    id: 'excel-mastery',
    title: 'Microsoft Excel Automation',
    hook: 'The spreadsheet super‑power you actually need.',
    bullets: [
      'Power Query ETL & DAX reporting',
      'VBA macro libraries that eliminate manual drudgery',
      'Training workshops for finance & ops teams',
    ],
    tools: ['Excel Power Query', 'Power Pivot', 'VBA', 'Office Scripts'],
  },
  {
    id: 'consulting',
    title: 'Executive‑Level Consulting',
    hook: 'Translate tech into board‑room impact.',
    bullets: [
      'C‑suite road‑maps & OKR definition',
      'Stakeholder facilitation and change management',
      'Vendor selection & RFP leadership',
    ],
    tools: ['SAFe', 'Confluence', 'Miro', 'Figma'],
  },
];

export default function ServicesPage() {
  return (
    <article style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>Consulting & Delivery Services</h1>
      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit,minmax(26rem,1fr))',
        }}
      >
        {services.map((s) => (
          <section
            key={s.id}
            style={{
              background: '#ffffff',
              color: '#1f2937',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 8px rgba(0,0,0,.08)',
            }}
          >
            <h2 style={{ fontSize: 18, marginBottom: 4 }}>{s.title}</h2>
            <p style={{ fontSize: 13, fontStyle: 'italic', marginBottom: 8 }}>{s.hook}</p>
            <ul style={{ marginLeft: 20, listStyle: 'disc', fontSize: 12, marginBottom: 8 }}>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p style={{ fontSize: 11, opacity: 0.8 }}>
              <strong>Tools&nbsp;</strong>
              {s.tools.join(' • ')}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
