import api from './config/api';

export default function validate(){
    return(new Promise(async (resolve, reject) => {
        if(localStorage.getItem('tokenMegaBank')){
            const verifyUser = await api.get('/verificateToken', {
                headers: {token: localStorage.getItem('tokenMegaBank')}
            });

            resolve(verifyUser.data);
        }else{
            reject(false);
        }
    }))
}