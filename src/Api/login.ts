import http from './http'


const login = ()=>{
    return http({
        url:'/user/login',
    })
}


export default login