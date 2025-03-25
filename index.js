import {retornarAlunos, retornarAlunosID, retornarAlunosNome, retornarAlunosCurso} from "./services/retornaAlunos_servico.js";

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.listen(9000, async () => {
    let data = new Date();
    console.log("Servidor node inicializado na porta 9000 em " +data);
});

app.get('/alunos', async (req, res) => {
    let alunos;

    const nome = req.query.nome;
    const curso = req.query.curso;

    if(typeof nome === 'undefined' && typeof curso === 'undefined') {
        alunos = await retornarAlunos();
    } else if (typeof nome !== 'undefined') {
        alunos = await retornarAlunosNome(nome);
    } else if (typeof curso !== 'undefined') {
        alunos = await retornarAlunosCurso(curso);
    }
    
    if (alunos.length > 0) {
        res.json(alunos);
    } else {
        res.status(404).json({mensagem: "Nenhum aluno encontrado"});
    }
    
});

app.get('/alunos/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const alunos = await retornarAlunosID(id);

    if (alunos.length > 0) {
        res.json(alunos);
    } else {
        res.status(404).json({mensagem: "Nenhum aluno encontrado"});
    }
    
});

