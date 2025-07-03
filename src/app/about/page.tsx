// src/app/about/page.tsx
export const metadata = {
  title: 'About – Peter Rizk',
  description:
    '25‑year journey delivering cloud migrations, omnichannel platforms, data‑driven strategy, and Microsoft‑first productivity.',
};

export default function AboutPage() {
  return (
    <article style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>Hi, I’m Peter Rizk</h1>
      <p style={{ marginBottom: 24 }}>
        Solution Architect and technical strategist with <strong>25 years of enterprise delivery</strong>. From
        pioneering variable digital print at R.R. Donnelley to spearheading <strong>Azure‑centric</strong> cloud migrations
        for Fortune 500 retailers, I translate business goals into scalable, resilient platforms and data‑driven growth.
      </p>

      {/* ――― Career Snapshot ――― */}
      <h2 style={{ fontSize: 20, marginBottom: 8 }}>Career Snapshot</h2>
      <ul style={{ marginLeft: 20, marginBottom: 24, listStyle: 'disc' }}>
        <li>
          <strong>Principal Architect @ Fortune‑500 Retailer</strong> — Cut AEM publish lead‑time 87 % and tripled release
          cadence by moving to AEM as a Cloud Service on Azure infrastructure.
        </li>
        <li>
          <strong>Director of Technology @ Simplify Healthcare</strong> — Built an on‑shore centre of excellence and rolled
          out SAFe across 500+ engineers; migrated analytics estate to <strong>Azure Synapse</strong>.
        </li>
        <li>
          <strong>22 Years at Accenture</strong> — Rose from Java developer to data analytics strategist, leading a
          $12 M ICD‑10 migration with zero Sev‑1s while modernising on‑prem solutions to Azure PaaS services.
        </li>
      </ul>

      {/* ――― Core Strengths ――― */}
      <h2 style={{ fontSize: 20, marginBottom: 8 }}>Core Strengths</h2>
      <div
        style={{
          display: 'grid',
          gap: 16,
          gridTemplateColumns: 'repeat(auto-fit,minmax(14rem,1fr))',
          marginBottom: 24,
        }}
      >
        <div>
          <h3 style={{ fontSize: 16 }}>Cloud Migrations</h3>
          <p>AEM as a Cloud Service, <strong>Azure AKS / App Service</strong>, blue‑green CICD in Azure DevOps.</p>
        </div>
        <div>
          <h3 style={{ fontSize: 16 }}>Omnichannel Architecture</h3>
          <p>Experience & Content Fragments powering web, mobile, kiosks, email.</p>
        </div>
        <div>
          <h3 style={{ fontSize: 16 }}>Data &amp; AI Strategy</h3>
          <p>Azure OpenAI Service, ML‑driven ROI forecasting, KPI modelling, and cross‑platform data interpretation.</p>
        </div>
        <div>
          <h3 style={{ fontSize: 16 }}>Data Visualization</h3>
          <p>Power BI Designer, Tableau, Excel Power Pivot—interactive dashboards that turn metrics into decisions.</p>
        </div>
        <div>
          <h3 style={{ fontSize: 16 }}>DevOps Enablement</h3>
          <p>Azure DevOps Pipelines, GitHub Actions, Terraform IaC, 24×7 observability.</p>
        </div>
        <div>
          <h3 style={{ fontSize: 16 }}>Microsoft Office Expert</h3>
          <p>All office tools and <strong>Excel wizardry.</strong></p>
        </div>
      </div>

      {/* ――― Credentials ――― */}
      <h2 style={{ fontSize: 20, marginBottom: 8 }}>Credentials</h2>
      <ul style={{ marginLeft: 20, listStyle: 'disc', marginBottom: 32 }}>
        <li>MBA — DePaul University Kellstadt</li>
        <li>Computer Engineer — University of Illinois Chicago</li>
        <li>Leading SAFe®, TOGAF 9, PMP (inactive)</li>
        <li><strong>Microsoft Certified:</strong> DP‑203 (Data Engineer), AZ‑305 (Solution Architect)</li>
      </ul>

      {/* ――― My Story ――― */}
      <h2 style={{ fontSize: 20, marginBottom: 8 }}>My Story</h2>
      <p style={{ marginBottom: 16 }}>
        Born in Chicago to Egyptian‑immigrant parents, I grew up bridging cultures—weekends at Coptic Orthodox church
        events and school days tinkering with computers. I wrote my first BASIC program on a Commodore 64 and have been
        automating ever since.
      </p>
      <p style={{ marginBottom: 16 }}>
        After earning a Computer Engineering degree from UIC in 1996, I joined R.R. Donnelley’s digital print lab and
        helped pioneer on‑demand, variable data printing. Consulting called next: two decades at Accenture solving
        riddles for government, energy, and healthcare clients, then a Director role at a health‑tech scale‑up.
      </p>
      <p style={{ marginBottom: 16 }}>
        Outside work I’m a proud dad raising two teenagers in Naperville. We enjoy pickup basketball and solving several 
        escape‑rooms.  I run workshops on Power Query, DAX, and macro
        automation for anyone who still loves data viz and analytics as much as I do. Friends hand me their “tech to‑do” lists
        whenever I visit, and I still can’t resist a challenge, puzzle, or riddle.
      </p>

      <p>
        <em>Favourite mantra:</em> “Every repeated action is a script waiting to happen.”
      </p>
    </article>
  );
}
