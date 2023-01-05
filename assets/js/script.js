function criaCalculadora() {
    return {
        display: document.querySelector('.display'),


        inicia() {
            this.clickButton();
            this.enter();
        },

        clickButton() {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.display.value = '';
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-igual')) {
                    this.realizaConta()
                }
            });
        },

        enter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },


        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            // NÃO USE EVAL PARA QUALQUER COISA
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = conta;

            } catch (e) {
                alert('Conta inválida')
                return;
            }
        }

    };

}

const calculadora = criaCalculadora()
calculadora.inicia();