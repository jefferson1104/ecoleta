// Importar a dependencia de sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utilizando o objeto do banco de dados para nossas operacoes
db.serialize( () => {
    
    // criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTERGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,            
            address TEXT,
            adress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT

        );
    `)

    // inserir dados na tabela
    const query = `
        INSERT INTO places (
            image, 
            name, 
            adress, 
            address2, 
            state, 
            city, 
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    
    const values = [
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Nº 260 ",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    // consultar os dados da tabela


    // deletar um dado da tabela

})

















