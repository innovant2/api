import {  Fragment , useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; 
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useRouter } from 'next/router';
//import { cookie } from "express/lib/response";
import cookie from 'js-cookie'









function login() {
    
    const [loginForm, setloginForm] = useState({
        email: "",
        password: "",
    });
    
    const router = useRouter()
    
    const onChangeForm =e =>{
        setloginForm({...loginForm,[e.target.name]:e.target.value});
        console.log(loginForm);
    };
    const onFormSubmit = async(e) =>{
        
        e.preventDefault();  
        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = axios.post("http://localhost:8000/auth/login",
        loginForm,
        config
        );
        
        localStorage.setItem("access_token", (await res).data.token);
        console.log(res.data);
        if (localStorage.getItem("access_token")){
            router.push('/');
        }; 
        alert('success login');
        } catch (err) {
            alert((await err.response).data ? (await err.response).data.message : err.response);
            
        }
        
        
        
      };
      
      
      
    return(
        <Fragment>
            
            <div 
            className="flex flex-col justify-center items-center gap-8 bg-gray">
            <div className="flex flex-col">
            <div className="-mb-24 ml-96 pl-40 mt-12 relative text-beige "><FontAwesomeIcon  icon={faCheckCircle}  ></FontAwesomeIcon></div>
            <div className="flex items-center justify-center mt-20 ">
                <div className="border border-header rounded-l-lg p-6 bg-white ">
                    <div className="text-2xl"><FontAwesomeIcon  icon={faUserPlus}  ></FontAwesomeIcon></div>
                    <div className="py-4">
                        <div className="text-headfoot text-base font-bold ">Resgister</div>
                        <div className="font-light text-headfoot ">Browse and find what you need.</div>
                    </div>
                </div>
                <div className="border-y border-r rounded-r-lg p-6 bg-white border-header ">
                    <div className="text-2xl"><FontAwesomeIcon icon={faDoorOpen}/></div>
                    <div className="py-4">
                        <div className="text-headfoot text-base font-bold">Sign in</div>
                        <div className="font-light text-headfoot ">Already have account, then welcome back.</div>
                    </div>
                </div>
            </div>
            </div>
            <form 
            onSubmit={(e) =>onFormSubmit(e)}
            className="flex flex-col gap-7 justify-center items-center">
            <div>
            <input 
                onChange={(e)=> onChangeForm(e)}
                style={{width:"600px"}}
                className="shadow  border rounded-lg text:headfoot border-header placeholder:text-headfoot items-center py-4 px-6 w-96  leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="email"
                id="email"
                type="email"
                required 
                placeholder="Email*"
              />
            </div>
            <div>
            <input 
                onChange={(e)=> onChangeForm(e)}
                style={{width:"600px"}}
                className="shadow  border rounded-lg   border-header items-center py-4 px-6 w-96 text:headfoot placeholder:text-headfoot leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="password"
                id="password"
                type="password"
                required
                placeholder="password*"
              />
            </div>
            <div>
                <button 
                type="submit" 
                className=" bg-headfoot border-header text-white px-12 py-3 rounded-lg mb-11 font-normal hover:bg-black">
                Submit
                </button>
            </div>
            </form>
            </div>
        </Fragment>
    );
}
export default login;
