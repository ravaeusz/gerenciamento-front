import axios from 'axios';

export async function postLogin(email, senha) {
    const response = await axios.post('http://localhost:3030/login', {email, senha});
    return response.data;   
}
export async function postRegister(nome, email, senha){
    const response = await axios.post('http://localhost:3030/register',{nome, email, senha});
    return response.data
}
export async function getAlunos(token){
    const response = await axios.get('http://localhost:3030/alunos',{
        headers:  { 'Authorization': `Bearer ${token}` }
    })
    return response.data;
}
export async function deleteAluno(id, token){
    const response = await axios.delete(`http://localhost:3030/alunos/${id}`,{
        headers:  { 'Authorization': `Bearer ${token}` }
    })
    return response.data
}
export async function createAluno(nome, sobrenome, peso, telefone, token){
            const response = await axios.post(`http://localhost:3030/alunos`,{
            nome, sobrenome, peso, telefone},
            {
            headers:  { 'Authorization': `Bearer ${token}` }
            })
            return response.data
}
export async function updateAluno(id, nome, sobrenome, peso, telefone, token){
                const response = await axios.put(`http://localhost:3030/alunos/${id}`,{
            nome, sobrenome, peso, telefone},
            {
            headers:  { 'Authorization': `Bearer ${token}` }
            })
            return response.data
}
export async function getById(id, token){
        const response = await axios.get(`http://localhost:3030/alunos/${id}`,{
        headers:  { 'Authorization': `Bearer ${token}` }
    })
    return response.data;
}


