

document.addEventListener('DOMContentLoaded', () => {
  const lista = document.getElementById('lista');

 



  function buscarDadosNaAPI() {
      fetch('http://localhost:8080/empresa/listarFuncionariosEmpresa/12343')
          .then(response => response.json())
          .then(data => {
             
                  var tamanho = 5;
                  if(data.length<5){
                      tamanho = data.length
                  }
                  
                  for (let j = 1; j <= tamanho; j++) {
                    const ulFuncionario = document.createElement('ul');
                      const funcionario = data[j];

                      const liCreci = document.createElement('li');
                      liCreci.textContent = `Creci: ${funcionario.creci}`;
                      liCreci.setAttribute('class', 'creci')
                      ulFuncionario.appendChild(liCreci);

                      const liNome = document.createElement('li');
                      liNome.textContent = `Nome: ${funcionario.nome}`;
                      liNome.setAttribute('class', 'nome')
                      ulFuncionario.appendChild(liNome);

                      const liDetalhar = document.createElement('li');
                      const aDetalhar = document.createElement('a');
                      aDetalhar.textContent = 'Detalhar';
                      aDetalhar.addEventListener("click", function(){
                        window.location.href = `http://127.0.0.1:5500/html/detalhar-funcionario.html?id=${funcionario.creci}`;
                      })
                      liDetalhar.appendChild(aDetalhar);
                      ulFuncionario.appendChild(liDetalhar);

                      const liAlterar = document.createElement('li');
                      const aAlterar = document.createElement('a');
                      aAlterar.textContent = 'Alterar';
                      aAlterar.addEventListener("click", function(){
                        window.location.href = `http://127.0.0.1:5500/html/alterar-funcionario.html?id=${funcionario.creci}`;
                      })
                      aAlterar.setAttribute('id', funcionario.creci)
                      liAlterar.appendChild(aAlterar);
                      ulFuncionario.appendChild(liAlterar);

                      const imgExcluir = document.createElement('img');
                      imgExcluir.src = "../img/excluir.png";
                      imgExcluir.addEventListener("click", function() {
          
          const funcionarioId = funcionario.creci;

          fetch(`/funcionarios/deletarFuncionario/${funcionarioId}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
                  
              }
              
          })
          .then(response => {
              if (response.ok) {
                
                  console.log('Funcionário deletado com sucesso!');
              } else {
                 
                  console.error('Erro ao deletar funcionário');
              }
          })
          .catch(error => {
              console.error('Erro:', error);
          });
                    });
                    imgExcluir.setAttribute('class', 'excluir')
                      ulFuncionario.appendChild(imgExcluir);
                      lista.appendChild(ulFuncionario);
                  }

                 
              
          })
          .catch(error => {
              console.error('Erro ao buscar dados da API:', error);
          });
  }

  buscarDadosNaAPI();
});
