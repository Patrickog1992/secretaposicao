import React, { useState, useEffect } from 'react';
import { QuizLayout } from './components/QuizLayout';
import { Button } from './components/Button';
import { LoadingScreen } from './components/LoadingScreen';
import { SalesPage } from './components/SalesPage';
import { Check, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(0);
  const [multiSelection, setMultiSelection] = useState<string[]>([]);

  // Helper to scroll to top on step change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const nextStep = () => {
    setStep((prev) => prev + 1);
    setMultiSelection([]); // Reset selections for next step
  };

  const toggleSelection = (option: string) => {
    if (multiSelection.includes(option)) {
      setMultiSelection(multiSelection.filter((i) => i !== option));
    } else {
      setMultiSelection([...multiSelection, option]);
    }
  };

  // --- RENDER STEPS ---

  // Step 0: Intro
  if (step === 0) {
    return (
      <QuizLayout>
        <h1 className="text-2xl font-bold text-center mb-4 leading-tight">
          Surpreenda seu parceiro inovando com posições nunca vistas antes
        </h1>
        <img src="https://i.imgur.com/Fgw1OG5.jpeg" alt="Intro" className="w-full rounded-lg shadow-md mb-6" />
        <p className="mb-4 text-lg">
          😈 Essas 50 posições secretas vão fazer ele esquecer todas as outras mulheres e desejar apenas você
        </p>
        <p className="mb-4 text-lg">
          🔥 Ele vai implorar pela sua atenção e pensar em você 24h por dia
        </p>
        <p className="mb-6 text-lg">
          🤫 Você nunca mais vai ser ignorada, trocada ou se sentir insegura porque ele não te procura mais…
        </p>
        <Button onClick={nextStep}>Continuar</Button>
      </QuizLayout>
    );
  }

  // Step 1: Teacher
  if (step === 1) {
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-2">Conheça sua professora: Ana Julia</h2>
        <p className="text-center text-gray-600 mb-4 font-medium">Criadora do MANUAL DAS POSIÇÕES SECRETAS</p>
        <img src="https://i.imgur.com/zG4MT7C.jpeg" alt="Ana Julia" className="w-full rounded-lg shadow-md mb-6" />
        <p className="mb-4 text-center">
          Uma sexóloga que se tornou uma das profissionais mais reconhecidas e respeitadas do país.
        </p>
        <p className="mb-4 text-center font-semibold">
          Sexóloga e especialista em sexualidade feminina
        </p>
        <p className="mb-6 text-center">
          Já ajudou mais de 73 mil mulheres a dominarem a mente masculina se tornarem inesquecíveis na cama
        </p>
        <Button onClick={nextStep}>Continuar</Button>
      </QuizLayout>
    );
  }

  // Step 2: Relationship Status
  if (step === 2) {
    return (
      <QuizLayout>
        <p className="mb-6 text-lg text-center">
          Antes de liberar o seu acesso ao Manual das Posições Matadoras, preciso saber:
        </p>
        <h2 className="text-xl font-bold text-center mb-6">
          Em qual momento da sua vida amorosa você está nesse momento
        </h2>
        <div className="space-y-3">
          {['💍 Estou em um relacionamento', '💘 Estou vivendo um romance mas ainda não é oficial', '💃 Sou solteira e estou livre', '🤔 Minha situação é complicada…'].map((opt) => (
            <button key={opt} onClick={nextStep} className="w-full p-4 text-left border-2 border-pink-200 rounded-xl hover:bg-pink-50 hover:border-pink-500 transition-all font-medium">
              {opt}
            </button>
          ))}
        </div>
      </QuizLayout>
    );
  }

  // Step 3: Classification
  if (step === 3) {
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-6">
          Quando o assunto é sexo, como você se classifica?
        </h2>
        <div className="space-y-3">
          {[
            '🙈 Sou iniciante total, preciso aprender do zero',
            '😕 Dou pro gasto, mas fico insegura em algumas situações',
            '😏 Mando bem, mas falta variedade',
            '😈 Eu arraso, mas quero novas técnicas'
          ].map((opt) => (
            <button key={opt} onClick={nextStep} className="w-full p-4 text-left border-2 border-pink-200 rounded-xl hover:bg-pink-50 hover:border-pink-500 transition-all font-medium">
              {opt}
            </button>
          ))}
        </div>
      </QuizLayout>
    );
  }

  // Step 4: Difficulty
  if (step === 4) {
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-6">
          Qual sua maior dificuldade na hora do sexo?
        </h2>
        <div className="space-y-3">
          {[
            '😶 Não conseguir surpreender de verdade',
            '👀 Fico sem graça de testar novas técnicas e acabo indo no básico',
            '🥱 Cansar rápido e perder o ritmo',
            '🥹 Não saber variar as técnicas'
          ].map((opt) => (
            <button key={opt} onClick={nextStep} className="w-full p-4 text-left border-2 border-pink-200 rounded-xl hover:bg-pink-50 hover:border-pink-500 transition-all font-medium">
              {opt}
            </button>
          ))}
        </div>
      </QuizLayout>
    );
  }

  // Step 5: Outcome (Multi)
  if (step === 5) {
    const options = [
      '🔥 Ver ele gemendo e perdendo o controle',
      '💦 Fazer ele gozar muito e tremer de prazer',
      '😈 Sentir que ele nunca vai me esquecer',
      '🤲 Sentir que ele está totalmente nas minhas mãos',
      '👑 Ouvir dele que eu sou a melhor que ele já teve'
    ];
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-2">
          O que você quer que aconteça depois de aplicar as 50 POSIÇÕES SECRETAS?
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">Pode selecionar mais de uma opção</p>
        <div className="space-y-3 mb-6">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => toggleSelection(opt)}
              className={`w-full p-4 text-left border-2 rounded-xl transition-all font-medium flex items-center justify-between ${
                multiSelection.includes(opt) ? 'border-pink-600 bg-pink-50' : 'border-gray-200 hover:border-pink-300'
              }`}
            >
              <span>{opt}</span>
              {multiSelection.includes(opt) && <CheckCircle2 className="w-5 h-5 text-pink-600" />}
            </button>
          ))}
        </div>
        <Button onClick={nextStep}>Continuar</Button>
      </QuizLayout>
    );
  }

  // Step 6: Testimonials 1
  if (step === 6) {
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-6">
          Veja o relato de algumas alunas que já aplicaram a técnica das posições secretas…
        </h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="italic text-gray-700 mb-2">"Meu Deus, nunca imaginei que uma simples mudança de posição faria ele ficar tão obcecado. Ele me mandou flores hoje de manhã!"</p>
            <p className="font-bold text-pink-600 text-right">- Fernanda S.</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="italic text-gray-700 mb-2">"Achava que meu casamento tinha esfriado, mas depois do módulo 2, parece que estamos em lua de mel de novo."</p>
            <p className="font-bold text-pink-600 text-right">- Claudia M.</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <p className="italic text-gray-700 mb-2">"Simplesmente funciona. Eu era tímida, agora me sinto uma deusa na cama."</p>
            <p className="font-bold text-pink-600 text-right">- Renata L.</p>
          </div>
        </div>

        <Button onClick={nextStep}>Continuar</Button>
      </QuizLayout>
    );
  }

  // Step 7: Warning
  if (step === 7) {
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center text-red-600 mb-6 uppercase">
          SE VOCÊ NÃO FAZ ESSAS 50 POSIÇÕES, OUTRA FARÁ POR VOCÊ.
        </h2>
        <img src="https://quentesecarentes.com.br/wp-content/uploads/2019/10/banner29112016-009.jpg" alt="Warning" className="w-full rounded-lg shadow-md mb-6" />
        <p className="text-lg text-center font-bold mb-6">
          Enquanto você tenta ser a certinha… ele deseja Outra Mulher que sabe ser PUTA na hora CERTA
        </p>
        <Button onClick={nextStep}>Continuar</Button>
      </QuizLayout>
    );
  }

  // Step 8: Transformation
  if (step === 8) {
    return (
      <QuizLayout>
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Sua vida Sexual vai mudar da água pro vinho 🍷
        </h2>
        <div className="space-y-4 mb-8">
            <p>Você vai descobrir os pontos ocultos de prazer do seu corpo e conseguir chegar ao orgasmo em qualquer relação - mesmo que o homem seja ruim de cama…</p>
            <p>Vai eliminar suas inseguranças e se tornar uma mulher mais confiante, sensual e desejada na cama…</p>
            <p>Vai surpreender na cama e fazer ele esquecer de todas as mulheres que já passaram pela vida dele…</p>
            <p>Depois de aplicar essa técnica, se ele OUSAR a ir pra cama com outra mulher, vai perceber que elas não chegam aos seus pés…</p>
        </div>
        <Button onClick={nextStep}>Continuar</Button>
      </QuizLayout>
    );
  }

  // Step 9: Discovery List
  if (step === 9) {
    const items = [
      'Fazer qualquer homem gozar implorando o seu nome.',
      'Trazer de volta o tesão do seu parceiro (mesmo que ele esteja distante).',
      'Deixar homens desesperados por mais uma noite com você.',
      'Usar técnicas secretas que criam dependência sexual imediata.',
      'Virar aquela mulher que entra no quarto e faz todas as outras parecerem amadoras.',
      'Ser a única capaz de dar a ele a sensação de prazer total!'
    ];
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-6">
          Ao liberar acesso ao Manual das Posições você vai descobrir como:
        </h2>
        <div className="space-y-4 mb-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
        <Button onClick={nextStep}>Sim, quero isso!</Button>
      </QuizLayout>
    );
  }

  // Step 10: Frustration (Multi)
  if (step === 10) {
    const options = [
      'Me sinto insegura por que não consigo fazer ele gozar',
      'Tenho impressão que ele pensa em outra quando está comigo',
      'Ele parece distante, como se fosse só obrigação',
      'Nunca me sinto realmente inesquecível',
      'Ele nem me procura mais...'
    ];
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-2">
          Qual é a sua maior frustração na cama hoje?
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">Pode escolher mais de uma opção</p>
        <div className="space-y-3 mb-6">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => toggleSelection(opt)}
              className={`w-full p-4 text-left border-2 rounded-xl transition-all font-medium flex items-center justify-between ${
                multiSelection.includes(opt) ? 'border-pink-600 bg-pink-50' : 'border-gray-200 hover:border-pink-300'
              }`}
            >
              <span>{opt}</span>
              {multiSelection.includes(opt) && <CheckCircle2 className="w-5 h-5 text-pink-600" />}
            </button>
          ))}
        </div>
        <Button onClick={nextStep}>Continuar</Button>
      </QuizLayout>
    );
  }

  // Step 11: Last Time
  if (step === 11) {
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-6">
          Quando foi a última vez que você realmente sentiu um homem louco de tesão por você a ponto de perder o controle?
        </h2>
        <div className="space-y-3">
          {[
            'Há muito tempo…',
            'É tão difícil que sinto que não sou boa o suficiente',
            'Recentemente, mas acho que eu poderia ter sido melhor',
            'Nunca senti isso de verdade'
          ].map((opt) => (
            <button key={opt} onClick={nextStep} className="w-full p-4 text-left border-2 border-pink-200 rounded-xl hover:bg-pink-50 hover:border-pink-500 transition-all font-medium">
              {opt}
            </button>
          ))}
        </div>
      </QuizLayout>
    );
  }

  // Step 12: 3 Things
  if (step === 12) {
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-6">
          Essas 3 coisas vão acontecer logo na primeira vez que você colocar em prática alguma das posições do Manual...
        </h2>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-lg font-bold text-pink-600 mb-2">Ele Vai Pedir "Arrego"</h3>
            <p className="text-gray-700">Muitas alunas relatam que, na primeira vez, o homem fica tão excitado que não dura muito. Isso é normal. O nível de estímulo é tão alto que ele vai precisar de um tempo para se acostumar com essa nova mulher potente que você se tornou.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-pink-600 mb-2">O Efeito "Cachorrinho"</h3>
            <p className="text-gray-700">Prepare-se para ele ficar mais carinhoso, mandar mensagens do nada durante o dia e querer dormir abraçado. Isso não é mágica, é a liberação de Ocitocina que as técnicas causam no cérebro masculino.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-pink-600 mb-2">A Inversão de Poder</h3>
            <p className="text-gray-700">Você vai parar de se perguntar 'será que eu sou boa o suficiente?'. Ao ver ele revirando os olhos, perdendo a fala e ficando totalmente entregue nas suas mãos, sua autoconfiança vai explodir.</p>
          </div>
        </div>

        <Button onClick={nextStep}>Continuar</Button>
      </QuizLayout>
    );
  }

  // Step 13: Access Check
  if (step === 13) {
    return (
      <QuizLayout>
        <h2 className="text-xl font-bold text-center mb-8">
          Você quer ter acesso ao Manual das Posições SECRETAS?
        </h2>
        <div className="space-y-4">
          <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700">
            ✅ Sim, quero muito
          </Button>
          <button onClick={nextStep} className="w-full py-4 text-gray-500 font-medium hover:text-gray-700">
            🚫 Não sei...
          </button>
        </div>
      </QuizLayout>
    );
  }

  // Step 14: Loading
  if (step === 14) {
    return <LoadingScreen onComplete={nextStep} />;
  }

  // Step 15: Sales Page
  if (step === 15) {
    return <SalesPage />;
  }

  return null;
}
