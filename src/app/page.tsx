'use client';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({
  title,
  href,
  sub,
  src,
}: {
  title: string;
  href: string;
  sub: string;
  src: string;
}) => (
  <Link href={href} className="card">
    <Image src={src} alt="" fill />
    <div className="shade" />
    <div className="content">
      <h2>{title}</h2>
      <p>{sub}</p>
    </div>
  </Link>
);

export default function Home() {
  return (
    <>
      <div className="hero">
        <Image
          src="https://picsum.photos/seed/hero/1600/560"
          alt=""
          fill
        />
        <div className="overlay" />
        <h1>Architecting Scalable Digital Experiences</h1>
        <p>Consulting • Solution Architecture • Engineering Excellence • Business Insight</p>
      </div>

      <section className="grid grid-top">
        <Card
          title="About Me"
          href="/about"
          sub="Background & career"
          src="https://picsum.photos/seed/about/400/300"
        />
        <Card
          title="Services"
          href="/services"
          sub="Strategy & delivery"
          src="https://picsum.photos/seed/services/400/300"
        />
        <a
          onClick={() =>
            document.getElementById('hire-modal')?.classList.remove('hidden')
          }
          className="card hire"
        >
          <div className="content">
            <h2>Hire Me</h2>
            <p>Book a free consult</p>
          </div>
        </a>
        {/* …rest of cards unchanged */}
      </section>
    </>
  );
}
