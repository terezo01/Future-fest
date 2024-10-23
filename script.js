function funcionarIa() {
    ia = document.getElementById('ia').value;
    dica = document.getElementById('dica');


    if(ia === '1'){
        dica.innerHTML = '<strong>Crie um orçamento:</strong> Comece listando todas as suas fontes de renda e todas as suas despesas fixas (como aluguel, contas e transporte) e variáveis (como alimentação e entretenimento). Isso ajudará você a ter uma visão clara de para onde seu dinheiro está indo.<br><strong>Corte gastos desnecessários:</strong> Após identificar suas despesas, veja quais são realmente essenciais. Considere eliminar ou reduzir gastos em áreas como refeições fora, assinaturas e compras impulsivas.<br><strong>Use a regra 50/30/20:</strong> Essa é uma estratégia de alocação do seu orçamento que pode ajudar a manter suas finanças em ordem. Destine 50% da sua renda para necessidades (moradia, alimentação), 30% para desejos (lazer, viagens) e 20% para poupança e pagamento de dívidas.'
    }
    else if(ia === '2'){
        dica.innerHTML = '<strong>Priorize as dívidas:</strong> Liste suas dívidas e comece a pagar primeiro aquelas com juros mais altos. Isso reduzirá o custo total ao longo do tempo.<br><strong>Negocie com credores:</strong> Entre em contato com seus credores e explique sua situação. Muitas vezes, eles podem oferecer planos de pagamento mais flexíveis ou taxas de juros reduzidas.<br><strong>Considere um empréstimo com juros menores:</strong> Se você tem várias dívidas com altos juros, pode ser vantajoso consolidá-las em um único empréstimo com uma taxa de juros mais baixa, facilitando o gerenciamento dos pagamentos.'
    }
    else if(ia === '3'){
        dica.innerHTML = '<strong>Estabeleça uma meta de poupança:</strong> Defina um valor específico que deseja economizar. Pode ser uma quantia fixa mensal ou um percentual da sua renda.<br><strong>Automatize a poupança:</strong> Configure transferências automáticas para uma conta de poupança assim que receber seu salário. Isso torna mais fácil evitar gastar o dinheiro que deveria ser poupado.<br><strong>Reavalie despesas:</strong> Identifique áreas em que você pode reduzir gastos temporariamente para aumentar sua capacidade de poupança, como optar por atividades gratuitas ou cozinhar em casa em vez de comer fora.'
    }
    else if(ia === '4'){
        dica.innerHTML = '<strong>Use a técnica Pomodoro:</strong> Essa técnica envolve trabalhar por 25 minutos seguidos e depois fazer uma pausa de 5 minutos. Isso pode ajudar a manter o foco e a produtividade.<br><strong>Divida tarefas grandes:</strong> Quando um projeto parece intimidante, divida-o em etapas menores e mais gerenciáveis. Assim, você pode se concentrar em concluir uma parte de cada vez.<br><strong>Estabeleça prazos:</strong> Defina prazos claros para cada tarefa. Isso cria um senso de urgência e ajuda a evitar a procrastinação.'
    }
    else if(ia === '5'){
        dica.innerHTML = '<strong>Crie um ambiente de trabalho adequado:</strong> Mantenha seu espaço de trabalho organizado e livre de distrações. Desligue notificações do celular e evite redes sociais durante o horário de trabalho.<br><strong>Use aplicativos de produtividade:</strong> Ferramentas como Trello, Todoist ou Notion podem ajudar a gerenciar tarefas e a manter o foco. Esses aplicativos permitem criar listas, definir prazos e acompanhar o progresso.<br><strong>Defina horários específicos para tarefas:</strong> Programe períodos dedicados a determinadas tarefas, evitando interrupções durante esses horários. Informe colegas sobre seu horário de foco para minimizar distrações.'
    }
    else if(ia === '6'){
        dica.innerHTML = '<strong>Escreva um plano:</strong> Antes de começar uma tarefa, escreva um esboço ou um plano que descreva os passos necessários. Isso ajuda a organizar seus pensamentos e a visualizar o que precisa ser feito.<br><strong>Pesquise:</strong> Se estiver se sentindo perdido, procure informações, tutoriais ou exemplos que possam orientar. Às vezes, uma pequena pesquisa pode oferecer a clareza necessária.<br><strong>Peça ajuda:</strong> Conversar com alguém que já passou pela mesma situação ou que tenha experiência na tarefa pode fornecer insights valiosos e motivação.'
    }
}