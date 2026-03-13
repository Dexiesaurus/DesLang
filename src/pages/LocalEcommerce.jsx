import { Link } from "react-router-dom";
import { 
  ArrowLeft, Users, Search, ShieldCheck, Heart, 
  Eye, MessageSquare, BarChart3, Target, Lightbulb 
} from "lucide-react";

const ImplicationCard = ({ number, title, description }) => (
  <div className="bg-deep-shadow border border-facilier-purple p-6 relative card-texture">
    <div className="flex items-start gap-4">
      <span className="font-gothic text-3xl text-voodoo-green opacity-70">
        {number}
      </span>

      <div>
        <h4 className="font-syne font-bold text-alligator-gold uppercase text-sm mb-2">
          {title}
        </h4>

        <p className="text-bone/70 text-xs leading-relaxed font-inter">
          {description}
        </p>
      </div>
    </div>
  </div>
);


/* ── SWAMP-IFIED SUB-COMPONENTS ── */

const SectionLabel = ({ icon, label }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-facilier-purple pb-2">
    <span className="text-voodoo-green">{icon}</span>
    <h2 className="text-xs font-orbitron font-bold text-alligator-gold tracking-[0.3em] uppercase">{label}</h2>
  </div>
);

const MethodCard = ({ title, participants, description, tools }) => (
  <div className="bg-deep-shadow border border-facilier-purple p-6 card-texture relative overflow-hidden group h-full">
    <div className="absolute top-0 left-0 w-1 h-full bg-voodoo-green opacity-30 group-hover:opacity-100 transition-opacity"></div>
    <h3 className="font-syne font-bold text-bone mb-1 uppercase tracking-tighter">{title}</h3>
    <p className="text-voodoo-green text-[10px] font-orbitron mb-3 tracking-widest">{participants}</p>
    <p className="text-bone/60 text-xs leading-relaxed mb-4 font-inter">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tools.map((t) => (
        <span key={t} className="text-[9px] font-orbitron border border-voodoo-green/30 text-voodoo-green px-2 py-0.5">{t}</span>
      ))}
    </div>
  </div>
);

const FindingCard = ({ number, title, insight, quote, icon }) => (
  <div className="border-l-2 border-alligator-gold pl-6 mb-12 relative">
    <div className="absolute -left-[2px] top-0 h-4 w-[4px] bg-blood-red"></div>
    <div className="flex items-center gap-3 mb-3">
      <span className="text-voodoo-green">{icon}</span>
      <span className="text-[10px] text-bone/40 font-orbitron tracking-[0.2em]">{number}</span>
      <h3 className="font-syne font-bold text-alligator-gold uppercase text-lg">{title}</h3>
    </div>
    <p className="text-bone/80 text-sm leading-relaxed mb-4 font-inter">{insight}</p>
    <blockquote className="text-voodoo-green/70 text-xs italic border-l border-facilier-purple pl-4 font-inter">
      "{quote}"
    </blockquote>
  </div>
);

const PersonaCard = ({ name, archetype, age, description, frustrations, desires }) => (
  <div className="bg-bone text-deep-shadow p-8 relative skew-x-[-1deg] shadow-[15px_15px_0_var(--alligator-gold)] h-full">
    <div className="mb-6 border-b border-deep-shadow/20 pb-4">
      <h3 className="font-gothic text-4xl mb-1">{name}</h3>
      <p className="font-orbitron text-[10px] font-bold tracking-widest text-blood-red">{archetype} // {age}</p>
    </div>
    <p className="text-sm leading-relaxed mb-6 font-inter italic">"{description}"</p>
    <div className="space-y-6">
      <div>
        <p className="text-[10px] font-bold font-orbitron uppercase mb-3 border-b border-deep-shadow w-fit">FRUSTRATIONS</p>
        <ul className="space-y-2">
          {frustrations.map((f, i) => (
            <li key={i} className="text-xs font-inter flex items-start gap-2">
              <span className="text-blood-red">✕</span> {f}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-[10px] font-bold font-orbitron uppercase mb-3 border-b border-deep-shadow w-fit">DESIRES</p>
        <ul className="space-y-2">
          {desires.map((d, i) => (
            <li key={i} className="text-xs font-inter flex items-start gap-2">
              <span className="text-voodoo-green font-bold">✓</span> {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const PriorityBadge = ({ level }) => {
  const colors = level === "High" ? "text-blood-red border-blood-red" : "text-voodoo-green border-voodoo-green";
  return <span className={`text-[9px] font-orbitron border px-2 py-0.5 tracking-tighter ${colors}`}>{level.toUpperCase()}</span>;
};

/* ── MAIN COMPONENT ── */

const LocalEcommerce = () => {
  return (
    <div className="site-wrapper min-h-screen bg-deep-shadow text-bone font-inter pb-32">
      <nav className="sticky top-0 z-50 bg-deep-shadow/95 backdrop-blur border-b border-facilier-purple px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/#research" className="inline-flex items-center gap-2 text-xs text-alligator-gold hover:text-voodoo-green transition-all font-orbitron tracking-widest no-underline">
            <ArrowLeft className="w-4 h-4" />
            RETURN_TO_BASE_ // LOG_OUT
          </Link>
          <span className="text-[10px] font-orbitron text-bone/30 tracking-[0.5em]">CLASSIFIED // LOG_002</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-20">
          <p className="text-voodoo-green text-xs font-orbitron tracking-[0.3em] uppercase mb-4">UX Research Case Study</p>
          <h1 className="text-6xl md:text-7xl font-gothic text-alligator-gold leading-tight mb-8">
            Local E-Commerce
          </h1>
          <p className="text-bone/70 text-lg leading-relaxed max-w-2xl font-light">
            Exploring the gap between consumers' desire to shop locally and the digital barriers that push them toward large retailers.
          </p>
          
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 text-[10px] font-orbitron text-bone/40 border-t border-facilier-purple/30 pt-8">
            <div><span className="text-voodoo-green">TEAM:</span> 4 RESEARCHERS</div>
            <div><span className="text-voodoo-green">DURATION:</span> 10 WEEKS</div>
            <div><span className="text-voodoo-green">METHODS:</span> OBSERVATIONS, INTERVIEWS</div>
            <div><span className="text-voodoo-green">INSTITUTION:</span> DEPAUL UNIVERSITY</div>
          </div>
        </header>

        {/* 1. THE PROBLEM */}
        <section className="mb-24">
          <SectionLabel icon={<Target className="w-4 h-4" />} label="The Problem" />
          <div className="bg-facilier-purple/10 border-l-4 border-voodoo-green p-10 card-texture">
            <p className="text-bone text-base leading-relaxed">
              E-commerce generated nearly <strong>$1.2 trillion</strong> in U.S. sales in 2024, yet over <strong>$500 billion</strong> went to just two retailers: Amazon and Walmart. Consumers say they want to support local but face barriers of cost and discoverability.
            </p>
          </div>
        </section>

        {/* 2. RESEARCH QUESTIONS */}
        <section className="mb-24">
          <SectionLabel icon={<Search className="w-4 h-4" />} label="Research Questions" />
          <div className="grid gap-8">
            {[
              "How do consumers currently discover and evaluate local businesses online?",
              "What barriers prevent consumers from choosing small businesses over large retailers?",
              "What features would a digital platform need to bridge the gap?",
            ].map((q, i) => (
              <div key={i} className="flex gap-6 items-center group">
                <span className="font-gothic text-4xl text-voodoo-green opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                <p className="text-bone/80 text-lg font-light italic">"{q}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. METHODS */}
        <section className="mb-24">
          <SectionLabel icon={<Users className="w-4 h-4" />} label="Methods" />
          <div className="grid md:grid-cols-2 gap-8">
            <MethodCard
              title="Contextual Observations"
              participants="8 participants (ages 21–44)"
              description="Scenario-based observations where participants searched for a local business using their usual tools and devices."
              tools={["In-person", "Screen share", "Affinity diagramming"]}
            />
            <MethodCard
              title="Semi-Structured Interviews"
              participants="8 participants (ages 21–44)"
              description="One-on-one Zoom interviews exploring habits, preferences, and attitudes toward local business discovery."
              tools={["Atlas.ti coding", "Codebook synthesis"]}
            />
          </div>
        </section>

        {/* 4. KEY FINDINGS */}
        <section className="mb-24">
          <SectionLabel icon={<Lightbulb className="w-4 h-4" />} label="Key Findings" />
          <div className="space-y-4">
            <FindingCard
              number="01"
              title="Discovery is Broken"
              insight="Results are dominated by large retailers and ads. Participants couldn't distinguish small businesses from chains."
              quote="I scrolled past so many ads… I don't even know which ones were local."
              icon={<Search />}
            />
            <FindingCard
              number="02"
              title="Trust Issues"
              insight="Inaccurate store hours, broken websites, and old photos drive customers back to big retailers."
              quote="If a store can't keep its hours updated, how can I trust them with my order?"
              icon={<Eye />}
            />
             <FindingCard
              number="03"
              title="Connection Over Transaction"
              insight="Participants valued meeting owners and feeling part of a community. They wanted shopping to feel human."
              quote="I like knowing the person behind the counter actually cares about what they sell."
              icon={<Heart />}
            />
          </div>
        </section>

        {/* 5. PERSONAS */}
        <section className="mb-24">
          <SectionLabel icon={<Users className="w-4 h-4" />} label="Personas" />
          <div className="grid md:grid-cols-2 gap-10">
            <PersonaCard
              name="Olivia"
              archetype="The Online Shopper"
              age="Early 20s"
              description="A student who shops online for convenience but avoids big corporations when possible."
              frustrations={["Can't filter out large retailers", "Worries about fake reviews"]}
              desires={["Deals from local stores", "Trustworthy reviews"]}
            />
            <PersonaCard
              name="Mark"
              archetype="The Mixed-Mode Shopper"
              age="Mid 30s"
              description="A designer who enjoys in-person browsing but defaults to online shopping for speed."
              frustrations={["Small businesses drowned out online", "Limited free time"]}
              desires={["Shops that share his values", "Knowledgeable staff"]}
            />
          </div>
        </section>

        {/* 6. DECISION FACTORS (THE CHART) */}
        <section className="mb-24">
          <SectionLabel icon={<BarChart3 className="w-4 h-4" />} label="Decision Factors" />
          <div className="space-y-6">
            {[
              { factor: "Convenience & Location", level: 95 },
              { factor: "Information Accuracy", level: 90 },
              { factor: "Reviews & Recommendations", level: 88 },
              { factor: "Price", level: 85 },
              { factor: "Product Quality", level: 82 },
            ].map((item) => (
              <div key={item.factor}>
                <div className="flex justify-between mb-2 font-syne text-[10px] tracking-widest text-alligator-gold uppercase">
                  <span>{item.factor}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full bg-facilier-purple/20 h-1.5 overflow-hidden">
                  <div className="h-full bg-voodoo-green shadow-[0_0_10px_var(--voodoo-green)]" style={{ width: `${item.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. PRIORITY MATRIX */}
        <section className="mb-24">
          <SectionLabel icon={<Target className="w-4 h-4" />} label="Feature Priority Matrix" />
          <div className="overflow-x-auto border border-facilier-purple/30">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-facilier-purple/10 text-[10px] font-orbitron text-alligator-gold uppercase tracking-[0.2em]">
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-center">Priority</th>
                  <th className="p-4 text-center">Feasibility</th>
                </tr>
              </thead>
              <tbody className="text-xs text-bone/60 font-inter">
                {[
                  { feature: "Clear pricing display", p: "High", f: "Easy" },
                  { feature: "Current store hours", p: "High", f: "Easy" },
                  { feature: "Verified reviews system", p: "High", f: "Medium" },
                  { feature: "Product availability lookup", p: "High", f: "Hard" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-facilier-purple/20">
                    <td className="p-4 text-bone">{row.feature}</td>
                    <td className="p-4 text-center"><PriorityBadge level={row.p} /></td>
                    <td className="p-4 text-center italic opacity-50">{row.f}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. IMPLICATIONS */}
        <section className="mb-24">
          <SectionLabel icon={<ShieldCheck className="w-4 h-4" />} label="Design Implications" />
          <div className="grid gap-6">
            <ImplicationCard number="I" title="Search Accuracy" description="Prioritizing local stores in search would simplify community shopping." />
            <ImplicationCard number="II" title="Transparency" description="Verified reviews create essential trust between consumers and small businesses." />
          </div>
        </section>

        {/* 9. MY ROLE (EDITORIAL CARD) */}
        <section className="p-12 border-2 border-alligator-gold bg-bone text-deep-shadow rotate-[-1deg] relative">
           <div className="absolute -top-4 -right-4 bg-blood-red text-bone font-orbitron text-[10px] px-3 py-1 rotate-[3deg] shadow-lg">INTERNAL_ONLY</div>
           <h3 className="font-gothic text-4xl mb-6">The Researcher's Role</h3>
           <p className="font-inter text-sm leading-relaxed max-w-2xl">
             As part of a 4-person research team at <strong className="text-blood-red uppercase">DePaul University</strong>, I contributed to study design, participant recruitment, data collection, affinity diagramming, and the final persona synthesis.
           </p>
        </section>

        <footer className="mt-40 text-center">
          <Link to="/#research" className="text-voodoo-green font-orbitron tracking-widest text-xs hover:text-alligator-gold no-underline">
            END_OF_LOG_002 // RETURN_TO_BASE
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default LocalEcommerce;
