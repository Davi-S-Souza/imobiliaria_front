function deletarFuncionario(id) {
    fetch(`http://localhost:8080/funcionarios/deletarFuncionario/${id}`)
        .then(response => response.json())
        .then(data => {
      
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
        });
}
