// Importar a dependencia de sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//exportando o objeto DB
module.exports = db

/*
// utilizando o objeto do banco de dados para nossas operacoes
db.serialize( () => {
 
    // criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,            
            address TEXT,
            addresstwo TEXT,
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
            address, 
            addresstwo, 
            state, 
            city, 
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://images.unsplash.com/photo-1514792368985-f80e9d482a02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
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
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros")
        console.log(rows)
    })


    // deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
        if(err) {
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")
    })
})
*/

















