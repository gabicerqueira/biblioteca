let biblioteca = [];


        function cadastro(nome, autor, ano) {
            var livro = {
                titulo: nome,
                autor: autor,
                ano: ano
            };
            biblioteca.push(livro)

        }

        function adicionar() {
            let nome = document.getElementById('nomeLivro').value;
            let autor = document.getElementById('autorLivro').value;
            let ano = document.getElementById('anoLivro').value;
            typeof
                cadastro(nome, autor, ano);

                let imgIndice = 0;
                const IMAGENS = ['image1.png', 'image2.png', 'image3.png', 'image4.png'];
                const prevButton = document.getElementById('anterior');
                const nextButton = document.getElementById('proximo');
        
                var IMG = document.getElementById('carrosselImagem');
        
                function carregar() {
                     IMG.src = IMAGENS[imgIndice];
                
                }
        
                prevButton.addEventListener('click', () => {
                    if (imgIndice > 0) {
                        --imgIndice
                        //imgIndice = imgIndice - 1;
                        carregar();
                    }
                });
        
                nextButton.addEventListener('click', () => {
                    var limite = (IMAGENS.length) - 1
                    if (imgIndice < limite) {
                        ++imgIndice
                        //imgIndice = imgIndice + 1;
                        carregar();
                    }
                })
                carregar();
        }

        function mostrarLivros() {
            let resultado = `${biblioteca[0].titulo}`;
            document.querySelector('#resultado').textContent = resultado

            let resultado2 = `${biblioteca[0].autor}`;
            document.querySelector('#resultado2').textContent = resultado2

            let resultado3 = `${biblioteca[0].ano}`;
            document.querySelector('#resultado3').textContent = resultado3

            let text = "";
            for (let i = 0; i < biblioteca.length; i++) {
                text += biblioteca[i].titulo + "<br>";
            }
            document.getElementById("resultado").innerHTML = text;

            let text2 = "";
            for (let i = 0; i < biblioteca.length; i++) {
                text2 += biblioteca[i].autor + "<br>";
            }
            document.getElementById("resultado2").innerHTML = text2;

            let text3 = "";
            for (let i = 0; i < biblioteca.length; i++) {
                text3 += biblioteca[i].ano + "<br>";
            }
            document.getElementById("resultado3").innerHTML = text3;


        }


        const cadastrarBtn = document.getElementById('adicionar'); //id do botao adicionar
        const livrosCadastrados = document.getElementById('numero'); //id do texto
        const mensagem = document.getElementById('mensagem');
        const contador = document.getElementById('numero');

        let contadorLivros = 0;

        cadastrarBtn.addEventListener('click', () => {
            contadorLivros++;
            contador.textContent = contadorLivros;

            if (contadorLivros === 1) {
                mensagem.style.display = 'none';
                livrosCadastrados.style.display = 'block';
            }
        });