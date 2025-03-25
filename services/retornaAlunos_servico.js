import pool from "./conexao.js";

async function executaQuery(conexao, query) {

    const resultado_query = await conexao.query(query);

    const resposta = resultado_query[0];

    return resposta;
}

export async function retornarAlunos() {

    const conexao = await pool.getConnection();
    const query = "SELECT id, nome, curso FROM itinerariopaulocesar";

    const alunos = executaQuery(conexao, query);

    conexao.release();

    return alunos;
}

export async function retornarAlunosID(id) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, nome, curso from itinerariopaulocesar where id = ' +id;

    const alunos = executaQuery(conexao, query);

    conexao.release();

    return alunos;
}

export async function retornarAlunosNome(nome) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, nome, curso from itinerariopaulocesar where nome = ' +nome;

    const alunos = executaQuery(conexao, query);

    conexao.release();

    return alunos;
}

export async function retornarAlunosCurso(curso) {
    const conexao = await pool.getConnection();
    const query = 'SELECT id, nome, curso from itinerariopaulocesar where curso = " '+curso+' " ';

    const alunos = executaQuery(conexao, query);

    conexao.release();

    return alunos;
}