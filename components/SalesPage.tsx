import React from 'react';
import { Check, Star } from 'lucide-react';

interface FeatureBlockProps {
  title: string;
  text: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, text }) => (
  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
    <div className="flex items-start gap-4">
      <div className="mt-1 bg-pink-100 p-2 rounded-full shrink-0">
        <Check className="w-5 h-5 text-pink-600" />
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  </div>
);

interface TestimonialCardProps {
  name: string;
  time: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, time, text }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-sm text-gray-900">{name}</p>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
    <p className="text-gray-600 text-sm italic">"{text}"</p>
  </div>
);

interface BonusCardProps {
  num: string;
  title: string;
  value: string;
  desc: string;
}

const BonusCard: React.FC<BonusCardProps> = ({ num, title, value, desc }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-4">
    <div className="text-4xl font-black text-gray-200 leading-none shrink-0 select-none">
      #{num}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-xs font-bold text-green-600 mb-2 uppercase">Valor: {value} (GRÁTIS)</p>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const SalesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="bg-pink-600 text-white p-4 text-center font-bold text-lg sticky top-0 z-50 shadow-md">
        SEU MANUAL COM AS 50 POSIÇÕES SECRETAS ESTÁ PRONTO !
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        
        {/* Phone Mockup Representation */}
        <div className="flex justify-center mb-8">
            <div className="relative w-64 h-[500px] border-[8px] border-gray-900 rounded-[3rem] bg-gray-100 shadow-2xl overflow-hidden ring-4 ring-gray-300">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 w-32 bg-gray-900 mx-auto rounded-b-xl z-20"></div>
                {/* Screen Content */}
                <div className="w-full h-full bg-white overflow-y-auto no-scrollbar relative">
                    <div className="bg-pink-600 h-48 w-full absolute top-0 rounded-b-[3rem] z-0"></div>
                    <div className="relative z-10 pt-16 px-4 pb-4 text-center">
                        <div className="w-24 h-24 bg-white rounded-2xl shadow-lg mx-auto mb-4 flex items-center justify-center text-4xl overflow-hidden">
                             <img src="https://i.imgur.com/zG4MT7C.jpeg" alt="Cover" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">Manual das Posições</h3>
                        <p className="text-xs text-gray-500 mb-6">50 Técnicas Secretas</p>
                        
                        {/* Fake Positions Grid */}
                        <div className="grid grid-cols-2 gap-2 text-left">
                            <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                                <div className="h-16 bg-gray-200 rounded mb-2 animate-pulse"></div>
                                <div className="h-2 w-16 bg-pink-200 rounded"></div>
                            </div>
                            <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                                <div className="h-16 bg-gray-200 rounded mb-2 animate-pulse"></div>
                                <div className="h-2 w-16 bg-pink-200 rounded"></div>
                            </div>
                             <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                                <div className="h-16 bg-gray-200 rounded mb-2 animate-pulse"></div>
                                <div className="h-2 w-16 bg-pink-200 rounded"></div>
                            </div>
                             <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                                <div className="h-16 bg-gray-200 rounded mb-2 animate-pulse"></div>
                                <div className="h-2 w-16 bg-pink-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Breakdown */}
        <h2 className="text-2xl font-bold text-center mb-6">Dentro desse manual, você terá acesso a:</h2>
        
        <div className="space-y-6 mb-8">
            <FeatureBlock title="As 50 Posições Matadoras" text="Posições secretas que ativam prazer físico intenso e criam apego emocional, deixando ele completamente viciado em você" />
            <FeatureBlock title="Frases que Alteram a Química Cerebral e fazem ele ter 10x mais prazer" text="O que dizer antes, durante e depois de cada posição para potencializar o desejo e fazer ele pensar em você o tempo todo" />
            <FeatureBlock title="Aulas Práticas comigo, Vanessa de Oliveira" text="Demonstrações reais de como executar cada posição, mesmo sendo iniciante" />
            <FeatureBlock title="Técnicas de Dominação Silenciosa" text="Como assumir o controle na cama sem parecer forçada, criando uma experiência inesquecível que ele vai querer repetir" />
        </div>

        <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-center mb-8">
            <p className="font-bold text-green-800">Tudo 100% em vídeo e com conteúdo direto ao ponto, tão claro que qualquer mulher consegue aplicar na mesma noite.</p>
        </div>

        <div className="text-center mb-8">
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Somente 4 Vagas Restantes</p>
            <h2 className="text-2xl font-black mb-4">GARANTA SUA VAGA HOJE E RECEBA VÁRIOS BÔNUS TOTALMENTE ESPECIAIS QUE VAI TE TORNAR UMA PROFISSIONAL NA CAMA</h2>
        </div>

        {/* Testimonials */}
        <h3 className="text-xl font-bold text-center mb-6">Veja o que falam algumas de nossas clientes</h3>
        <div className="space-y-4 mb-10">
            <TestimonialCard name="Larissa M." time="há 2 horas" text="Menina, chocada! Fiz a posição do trono ontem e meu marido ficou doido kkkk amei!" />
            <TestimonialCard name="Michele S." time="há 5 horas" text="Gente, comprem! O manual é direto ao ponto, sem enrolação. Meu namorado nem acredita na minha mudança rsrs" />
            <TestimonialCard name="Fernanda P." time="há 1 dia" text="Eu achava que era bobagem, mas salvou meu casamento. A gente tava super frio, agora é fogo todo dia 🔥" />
            <TestimonialCard name="Bianca R." time="há 2 dias" text="Amei demais! Super explicadinho e as dicas de frases funcionam mesmo. Me sentindo poderosa!" />
        </div>

        {/* Bonuses */}
        <div className="bg-gray-50 p-6 rounded-2xl mb-10 border border-gray-100">
            <h3 className="text-xl font-black text-center mb-6 text-pink-600">🎁 BÔNUS EXCLUSIVOS DO MANUAL DAS POSIÇÕES SECRETAS</h3>
            
            <div className="space-y-6">
                <BonusCard num="1" title="Frases que Criam Desejo Imediato" value="R$47,00" desc="O que dizer antes, durante e depois do momento íntimo para ativar desejo, conexão emocional e fazer ele pensar em você mesmo quando estiver longe." />
                <BonusCard num="2" title="Linguagem Corporal Feminina Irresistível" value="R$67,00" desc="Gestos, posturas e movimentos simples que aumentam sua presença, confiança e poder de atração sem precisar falar nada." />
                <BonusCard num="3" title="Técnicas de Dominação Silenciosa" value="R$97,00" desc="Como conduzir a experiência de forma natural, feminina e elegante, criando uma sensação de intensidade e exclusividade que ele vai querer repetir." />
                <BonusCard num="4" title="O Guia da Mulher Inesquecível" value="R$57,00" desc="Os comportamentos e atitudes que fazem um homem associar você a prazer, conforto e admiração — evitando que ele perca o interesse com o tempo." />
                <BonusCard num="5" title="Como Reacender o Desejo em Relacionamentos Mornos" value="R$77,00" desc="Estratégias práticas para quebrar a rotina, recuperar a tensão e fazer ele voltar a te olhar com o mesmo desejo do início." />
                <BonusCard num="6" title="Perfumes e Gatilhos Sensoriais" value="R$37,00" desc="Como usar aromas, ambientes e estímulos sutis para criar associações emocionais profundas e aumentar a atração." />
                <BonusCard num="7" title="Grupo VIP de Alunas" value="R$97,00" desc="Acesso a um grupo fechado com dicas extras, conteúdos complementares e suporte para acelerar seus resultados." />
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-500 font-bold mb-1">💎 VALOR TOTAL DOS BÔNUS:</p>
                <p className="text-2xl font-black text-gray-400 line-through">R$479,00</p>
                <div className="my-4 p-4 bg-green-100 rounded-lg">
                    <p className="font-bold text-green-800">Mas hoje, você vai receber TODOS esses bônus TOTALMENTE GRÁTIS</p>
                    <p className="text-green-700 text-sm mt-1">ao garantir seu acesso ao MANUAL DAS POSIÇÕES SECRETAS.</p>
                </div>
                <p className="font-medium">Nenhum custo adicional. Nenhuma pegadinha.</p>
                <p className="font-medium">É só entrar agora e aproveitar. 😈🔥</p>
            </div>
        </div>

        {/* Pricing */}
        <div className="bg-white border-4 border-pink-500 rounded-2xl p-6 mb-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">OFERTA LIMITADA</div>
            <p className="text-center font-bold text-gray-500 mb-2">CONDIÇÃO ESPECIAL LIBERADA SOMENTE NESSA PÁGINA</p>
            <h3 className="text-center text-xl font-bold mb-4">TENHA ACESSO AO MANUAL + 7 BÔNUS INÉDITOS POR APENAS:</h3>
            
            <div className="text-center mb-6">
                <p className="text-5xl font-black text-green-600 tracking-tighter">R$ 37,00</p>
                <p className="text-gray-500 font-medium">Pagamento Único</p>
            </div>

            <p className="text-center text-sm mb-6 text-gray-600">
                Você está recebendo <span className="text-green-600 font-bold">R$442,00 de desconto</span> pra ter acesso ao conteúdo mais poderoso pra transformar sua vida sexual e dominar o poder de deixar qualquer homem aos seus pés
            </p>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-extrabold py-4 px-4 rounded-xl text-xl shadow-lg transform transition hover:scale-105 active:scale-100 flex flex-col items-center justify-center animate-bounce">
                <span>QUERO O MEU ACESSO AO MANUAL</span>
                <span className="text-xs font-normal opacity-90 mt-1">(teste hoje mesmo)</span>
            </button>
        </div>

        {/* Urgency */}
        <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-10 text-center">
            <h3 className="text-red-600 font-black text-xl mb-2">Atenção</h3>
            <p className="font-bold mb-4">SE VOCÊ NÃO FIZER ISSO AINDA HOJE, OUTRA VAI FAZER EM SEU LUGAR! 💔</p>
            <p className="mb-4">Enquanto você tenta ser a certinha… ele deseja Outra Mulher que sabe ser PUTA na hora CERTA. 😈</p>
            <p className="text-sm text-gray-700">Se você deseja salvar seu relacionamento e fazer ele te olhar com o mesmo desejo de quando se conheceram, você precisa muito desse manual…</p>
            <br />
            <p className="text-sm text-gray-700">Seu homem nunca mais vai sentir desejo por nenhuma outra mulher além de você.... Você será para ele a Rainha das Rainhas...</p>
             <br />
            <p className="text-sm text-gray-700">E se você é solteira, com essas posições você vai deixar os homens comendo na sua mão,</p>
             <br />
            <p className="text-sm text-gray-700">Eles não vão parar de te procurar, dizendo que precisam te ver de novo…</p>
             <br />
            <p className="text-sm text-gray-700">
            </p>
        </div>

        <footer className="text-center text-gray-400 text-xs pb-4">
            <p>© 2024 Manual das Posições. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};