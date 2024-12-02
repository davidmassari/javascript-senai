        let frase = "Aprender JavaScript é divertido!";
        console.log("Número de caracteres da frase:", frase.length);

        let fraseMaiuscula = "JavaScript é incrível";
        console.log("String em maiúsculas:", fraseMaiuscula.toUpperCase());

        let nome = "Ana Clara";
        let novoNome = nome.replace("Ana", "Maria");
        console.log("Nome com substituição:", novoNome);

        let fraseGosto = "Eu gosto de programar";
        console.log("A palavra 'gosto' está presente?", fraseGosto.includes("gosto"));

        let palavra = "computador";
        console.log("Substring entre 2 e 5:", palavra.substring(2, 5));

        let senha = "JavaScript123";
        if (senha.length >= 8) {
            console.log("Senha válida");
        } else {
            console.log("Senha inválida");
        }

        let texto = "Eu amo programar em JavaScript";
        if (texto.includes("JavaScript")) {
            console.log("Palavra encontrada");
        } else {
            console.log("Palavra não encontrada");
        }

        const senhaCorreta = "JavaScript123";