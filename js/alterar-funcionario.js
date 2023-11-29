
    function alterarDadosNaAPI() {
        const creci = document.getElementById('creci').value;
        const nome = document.getElementById('nome').value;
        const endereco = document.getElementById('endereco').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const senha = document.getElementById('senha').value;






        fetch(`http://localhost:8080/funcionarios/alterarFuncionario/${funcionarioId}`)
            .then(response => response.json())
            .then(data => {
               
                        const funcionario = data;
  
                        const divCreci = document.createElement('div');
                        divCreci.textContent = ` ${funcionario.creci}`;
                        divCreci.setAttribute('class', 'creci')
                        caixa.appendChild(divCreci);

                        const divNome = document.createElement('div');
                        divNome.textContent = `${funcionario.nome}`;
                        divNome.setAttribute('class', 'nome')
                        caixa.appendChild(divNome);
                       
                        const divEndereco = document.createElement('div');
                        divEndereco.textContent = ` ${funcionario.endereco}`;
                        divEndereco.setAttribute('class', 'endereco')
                        caixa.appendChild(divEndereco);

                        const divEmail = document.createElement('div');
                        divEmail.textContent = ` ${funcionario.email}`;
                        divEmail.setAttribute('class', 'email')
                        caixa.appendChild(divEmail);

                        const divTelefone = document.createElement('div');
                        divTelefone.textContent = ` ${funcionario.telefone}`;
                        divTelefone.setAttribute('class', 'telefone')
                        caixa.appendChild(divTelefone);
                    
  
                   
                
            })
            .catch(error => {
                console.error('Erro ao buscar dados da API:', error);
            });
    }
  
  ;
  