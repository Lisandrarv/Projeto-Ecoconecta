
    // Ao enviar o cadastro

    const formCadastro = document.querySelector('#cadastro form');
    formCadastro.addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = formCadastro.querySelector('input[type="text"]').value;
      localStorage.setItem('nomeUsuario', nome);
      alert('Cadastro realizado com sucesso, ${nome}!');
      document.getElementByld('consulta').scrollIntoView({ behavior:'smooth' });
    });

    // Preenche saudação com nome salvo

    window.addEventListener('DOMContentLoaded', () => {
        const nome = localStorage.getItem('nomeUsuario');
        if (nome) {
            document.querySelector('#inicio h2').innerHTML = `<i class = "fas fa-recycle"></i>
                Bem-Vindo, $ {nome}!`;
        }
    });

    // Agendamento de coleta
    
    const formAgendamento = document.querySelector('#agendamento form');
    formAgendamento.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;
        const material = document.getElementById('material').value;

        const agendamento = { data, horario, material };
        localStorage.setItem('agendamento', JSON.stringify(agendamento));
        alert('Coleta agendada com sucesso!');
        document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' });
});

    // Mostrar feedback dinâmico
    window.addEventListener('DOMContentLoaded', () => {
    const agendamento = JSON.parse(localStorage.getItem('agendamento'));
        if (agendamento) {
            const feedback = document.querySelector('.feedback-dados');
            feedback.innerHTML = `
               <p><i class="fas fa-weight"></i>3 kg de CO₂ evitados na coleta de ${agendamento.material}</p>
               <><p><i class="fas fa-medal"></i> +10 pontos no ranking de recicladores</p>
               <p><i class="fas fa-calendar-check"></i> Coleta agendada para ${agendamento.data} às ${agendamento.horario}</p></> 
            `;
        }
                    
});