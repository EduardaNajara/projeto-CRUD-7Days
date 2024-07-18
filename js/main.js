class Pessoa {
    constructor() {
        this.arrayPessoas = [];
    }

    salvar() {
      let pessoa = this.dados();

      if (this.validar(pessoa)) {
        alert('salvo')
      }
    }

    dados() {
        let pessoa = {}

        pessoa.nome = document.getElementById('name').value
        pessoa.data = document.getElementById('birth-date').value

        return pessoa;
    }

    validar(pessoa) {
        if (pessoa.nome == '' || pessoa.data == '') {
            alert('campo obrigatório')
            return false;
        }

        return true;
    }

    cancelar() {
    }
}

var pessoa = new Pessoa();