import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Battery, Zap, Gauge, ShieldCheck, Leaf, ArrowDown, HelpCircle, Scale } from 'lucide-react';

const bikeImage = 'https://i.ibb.co/zLsvHQ0/IMG-20260718-213736.jpg';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-600/30">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <Zap className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold tracking-tighter">VOLTX</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <button onClick={() => scrollTo('especificacoes')} className="hover:text-white transition-colors cursor-pointer">Especificações</button>
            <button onClick={() => scrollTo('tecnologia')} className="hover:text-white transition-colors cursor-pointer">Tecnologia</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-white transition-colors cursor-pointer">FAQ</button>
          </div>
          <div className="w-24"></div> {/* Placeholder para alinhar o centro */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-xs font-semibold uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Off-Road de Alta Performance
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              A evolução off-road <br className="hidden md:block" />
              chegou ao seu ápice.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Conheça a <strong className="text-white">Rain Storm R600</strong>. 6000W de potência pura, 68 kg de peso e um design forjado para dominar pistas, fazendas e as trilhas mais extremas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => scrollTo('especificacoes')} className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-black rounded-full font-bold text-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                Ver Ficha Técnica <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Imagem do Produto */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-[1100px] mx-auto mt-20 relative px-6"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] bg-white rounded-3xl border border-neutral-800 overflow-hidden relative flex items-center justify-center group shadow-2xl shadow-blue-900/20">
             <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-1000" style={{ backgroundImage: `url(${bikeImage})` }}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
             <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 drop-shadow-xl">R600</h2>
          </div>
        </motion.div>
      </section>

      {/* Core Specs */}
      <section id="especificacoes" className="py-24 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Números que impressionam.</h2>
            <p className="text-neutral-400 text-lg">A relação perfeita entre potência bruta e leveza extrema.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpecCard 
              icon={<Gauge className="w-8 h-8 text-blue-500" />}
              title="Velocidade Máxima"
              value="100"
              unit="km/h"
              description="Motor de 6000W entregando 40 Nm de torque instantâneo para acelerações explosivas."
            />
            <SpecCard 
              icon={<Zap className="w-8 h-8 text-blue-500" />}
              title="Autonomia Estimada"
              value="50 a 70"
              unit="km"
              description="Bateria de Lítio 72V 30Ah balanceada para garantir longas jornadas nas trilhas."
            />
            <SpecCard 
              icon={<Scale className="w-8 h-8 text-blue-500" />}
              title="Peso Líquido"
              value="68"
              unit="kg"
              description="Chassi em alumínio reforçado, garantindo agilidade total. Suporta carga máxima de 150 kg."
            />
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section id="tecnologia" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="bg-neutral-950 rounded-3xl border border-neutral-800 p-8 flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <ShieldCheck className="w-12 h-12 text-neutral-500 mb-6" />
               <div>
                 <h3 className="text-2xl font-bold mb-2">Estrutura & Ciclística</h3>
                 <p className="text-neutral-400">
                   Montada em um quadro de alumínio reforçado para máxima durabilidade no off-road. Equipada com suspensão hidráulica de longo curso e pneus CST 70/100-19 de alta tração.
                 </p>
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Foco total na experiência de pilotagem.</h2>
            <p className="text-neutral-400 text-lg">
              Sem excessos e sem firulas. A Rain Storm R600 é uma ferramenta de performance construída para resistir aos terrenos mais severos.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Display digital LCD slim anti-reflexo, funcional e integrado discretamente ao guidão.",
                "Modos de pilotagem simples e diretos: Eco e Sport.",
                "Dimensões ágeis: 1810mm (C) x 770mm (L) x 1040mm (A).",
                "Focada 100% no desempenho em terra, lama e pistas acidentadas."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-600/20 p-1 rounded text-blue-500 flex-shrink-0">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <span className="text-neutral-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ / Legal Section */}
      <section id="faq" className="py-24 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Dúvidas Frequentes & Uso</h2>
            <p className="text-neutral-400 text-lg">Informações técnicas e exigências legais da Rain Storm R600.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqCard 
              question="Qual é o peso suportado?" 
              answer="Apesar de seu baixo peso líquido de apenas 68 kg (graças ao chassi de alumínio), a motocicleta suporta uma carga máxima de até 150 kg com estabilidade."
            />
            <FaqCard 
              question="Como é o painel de instrumentos?" 
              answer="Para evitar distrações e quebras no off-road, a R600 adota um Display LCD Slim Anti-Reflexo, embutido no guidão de forma limpa, mostrando apenas o essencial: velocidade, modo e bateria."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <Zap className="w-5 h-5 text-neutral-500" />
            <span className="text-lg font-bold tracking-tighter text-neutral-500">VOLTX</span>
          </div>
          <div className="text-neutral-600 text-sm">
            © 2026 VoltX. Especificações oficiais do modelo Rain Storm R600 (Off-Road).
          </div>
        </div>
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-neutral-600 text-sm">
          feito por lozin
        </div>
      </footer>
    </div>
  );
}

function SpecCard({ icon, title, value, unit, description }: { icon: React.ReactNode, title: string, value: string, unit: string, description: string }) {
  return (
    <div className="bg-black border border-neutral-800 rounded-3xl p-8 hover:border-neutral-700 transition-colors">
      <div className="mb-6">{icon}</div>
      <h3 className="text-neutral-400 font-medium mb-2">{title}</h3>
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-5xl font-black tracking-tighter text-white">{value}</span>
        <span className="text-xl font-bold text-blue-600">{unit}</span>
      </div>
      <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function FaqCard({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="bg-black border border-neutral-800/50 rounded-2xl p-6">
      <div className="flex items-start gap-3 mb-3">
        <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <h4 className="text-lg font-bold text-white leading-tight">{question}</h4>
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed ml-8">{answer}</p>
    </div>
  );
}

