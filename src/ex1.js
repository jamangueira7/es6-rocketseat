class Usuario {
    constructor(email, senha, admin = false) {
        this.email = email;
        this.senha = senha;
        this.admin = admin;
    }
    
    isAdmin(){
        return this.admin ? true : false;
    }
}

class Admin extends Usuario {

    constructor(email, senha, admin = true) {
        super(email, senha, admin)
    }

    
}

console.log("-------------EX 1------------");
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

console.log("-------------EX 2.1------------");

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(item => item.idade);

console.log(idades) // true

console.log("-------------EX 2.2------------");

const filters = usuarios.filter(function(item){
    if(item.idade >=18 && item.empresa == "Rocketseat"){
        return true;
    }
    return false;
});

console.log(filters) // true

console.log("-------------EX 2.3------------");

const finds = usuarios.find(function(item){
    if(item.empresa == "Google"){
        return true;
    }
    return false;
});

console.log(finds);

console.log("-------------EX 2.4------------");

const two = usuarios.map(function(item){
    item.idade = item.idade * 2;
    return item;
}).filter(item => item.idade <= 50);

console.log(two);

console.log("-------------EX 3.1------------");

const arr = [1, 2, 3, 4, 5];
const ex31 = arr.map(item => item + 10);
console.log(ex31);

console.log("-------------EX 3.2------------");

const usuario = { nome: 'Diego', idade: 23 };
const ex32 = (usuario) => {
    return usuario.idade;
}
  
console.log(ex32(usuario));


console.log("-------------EX 3.3------------");

const nome = "Diego";
const idade = 23;

const ex33 = (nome = 'Diego', idade = 18) => {
    return { nome, idade };
}
  
console.log(ex33(nome, idade));
console.log(ex33(nome));

console.log("-------------EX 3.4------------");

const ex34 = () => {
    return new Promise(function(resolve, reject) {
        return resolve();
    });
}
   
  
console.log(ex34());

console.log("-------------EX 4.1------------");

const empresa = {
    nome1: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome1, endereco: { cidade, estado } } = empresa ;

console.log(nome1); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

console.log("-------------EX 4.2------------");

function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
   
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

console.log("-------------EX 5.1------------");

const arr3 = [1, 2, 3, 4, 5, 6];
const [ x, ...y ] = arr3 ;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...valores) {
    return valores.reduce((total, next) => total + next );
}
console.log(soma(1,2,3,4,5,6,7));

console.log("-------------EX 5.2------------");

const usuario52 = {
    nome52: 'Diego',
    idade52: 23,
    endereco52: {
        cidade52: 'Rio do Sul',
        uf52: 'SC',
        pais52: 'Brasil',
    }
};

const {nome52, idade52, endereco52: {cidade52, uf52, pais52 }} = usuario52;
const usuario52_2 = {
    nome: 'Gabriel',
    idade52,
    endereco52: {
        cidade: cidade52,
        uf: uf52,
        pais: pais52,
    }
};

const usuario52_3 = {
    nome52,
    idade52,
    endereco52: {
        cidade: 'Lontras',
        uf: uf52,
        pais: pais52,
    }
};

console.log(usuario52_2);
console.log(usuario52_3);
   
console.log("-------------EX 6------------");

const usuario6 = 'Diego';
const idade6 = 23;
console.log(`O usuário ${usuario6} possui ${idade6} anos`);

console.log("-------------EX 7------------");

const nome7 = 'Diego';
const idade7 = 23;

const usuario7 = {
    nome7,
    idade7,
    cidade7: 'Rio do Sul',
};

console.log(usuario7);