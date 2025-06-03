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