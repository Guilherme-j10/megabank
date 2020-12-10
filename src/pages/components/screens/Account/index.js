import React, { useEffect, useRef, useState } from 'react';

import * as Style from './style';

import api from '../../../../config/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AccountScreen(){

    const [nameFileTemp, setNameFileTemp] = useState();
    
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Cargo, setCargo] = useState('');
    const [Pathname, setPathname] = useState('');

    useEffect(() => {
        loadDadosUser();
    }, []);

    function loadDadosUser(){
        (async() => {
            const userData = await api.get('/getFuldata', {
                headers: {
                    token: localStorage.getItem('tokenMegaBank')
                }
            });
            
            setNome(userData.data.nome)
            setEmail(userData.data.email)
            setSenha(userData.data.senha)
            setCargo(userData.data.cargo)
            setPathname(userData.data.pathname)
        })();
    }

    function previewImg(e){
        e.preventDefault();

        let preview = document.getElementById('img');
        preview.src = URL.createObjectURL(e.target.files[0]);
    }

    function sendData(e){
        e.preventDefault();

        const file = e.target.file.files[0];

        if(file == null){
            SendDados({
                nome: e.target.nome.value,
                email: e.target.email.value,
                senha: e.target.senha.value,
                cargo: e.target.cargo.value,
            }, 'data');
        }else{
            const data = new FormData();
            data.append('profileimg', e.target.file.files[0]);

            SendDados(data, 'file');
            SendDados({
                nome: e.target.nome.value,
                email: e.target.email.value,
                senha: e.target.senha.value,
                cargo: e.target.cargo.value,
            }, 'data');
        }

        async function SendDados(Dados, Type){
            const enviaDados = await api.post('/updateDados', Dados, {
                headers: {
                    token: localStorage.getItem('tokenMegaBank')
                }
            });

            console.log(enviaDados.data);

            if(Type == 'data'){
                if(enviaDados.data == true){
                    (()=>{
                        toast.info("Dados atualizados", {position: "bottom-right"})
                    })()
                }else{
                    (()=>{
                        toast.error("Desculpe, tente novamente mais tarde", {position: "bottom-center"})
                    })()
                }
            }
        };
    }

    return(
        <Style.Main>
            <form onSubmit={(e) => {sendData(e)}} className="firstSpace">
                <div className="sideProfileImg">
                    <img className="ProfileImg" src={Pathname} id="img" />
                    <div className="dadosForm" encType="multipart/form-data">
                        <label for="file">Selecionar Imagem</label>
                        <input type="file" onChange={(e) => {previewImg(e)}} id="file" name="profile" />
                    </div>
                </div>
                <div className="Global">
                    <h1>Editar minha conta</h1>
                    <div className="inputs">
                        <div className="sideFlat">
                            <i class="fas fa-user"></i>
                            <input type="text" name="nome" value={Nome} onChange={(e)=>{setNome(e.target.value)}} placeholder="Digite seu nome completo"/>
                        </div>
                        <div className="sideFlat">
                            <i class="fas fa-user"></i>
                            <input type="email" name="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Digite seu e-mail"/>
                        </div>
                        <div className="sideFlat">
                            <i class="fas fa-user"></i>
                            <input type="password" name="senha" value={Senha} onChange={(e)=>{setSenha(e.target.value)}} placeholder="Digite sua senha"/>
                        </div>
                        <div className="sideFlat">
                            <i class="fas fa-user"></i>
                            <input type="text" name="cargo" value={Cargo} onChange={(e)=>{setCargo(e.target.value)}} placeholder="Qual é o seu cargo ?"/>
                        </div>
                    </div>
                    <input type="submit" value="ATUALIZAR DADOS" />
                    <ToastContainer />
                </div>
            </form>
        </Style.Main>
    );
}