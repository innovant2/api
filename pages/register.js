import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; 
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import axios from 'axios'

function register() {
    const [RegisterForm, setRegisterForm] = useState({
        email : "",
        password :"",
        firstname:"",
        lastname:"",
        confirmpassword :"",
    });
    
    const onChangeForm =e =>{
        setRegisterForm({...RegisterForm,[e.target.name]:e.target.value});
        console.log(RegisterForm);    
    };
    const onFormSubmit = async (e) =>{
        e.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        
        try {
            if (RegisterForm.password === RegisterForm.confirmpassword){
                const res = axios.post("http://localhost:8000/auth/register",
                RegisterForm,
                config
                );
                alert('success register');
                console.log(res.data);
            } else {
                alert('password dont match')
                console.log("password dont match");
            };  
        } catch (err) {
            alert((await err.response).data ? (await err.response).data.message : err.response);
        }
    };
    return(
        <Fragment>
            
            <div className="flex flex-col justify-center items-center gap-8 bg-gray">
            <div className="flex flex-col ">
            <div className=" -mb-24 ml-6 mt-12 relative text-beige"><FontAwesomeIcon  icon={faCheckCircle}  ></FontAwesomeIcon></div>
            <div className="flex items-center justify-center mt-20 ">
                <div  className="border border-header rounded-l-lg p-6 bg-white">
                    <div className="text-2xl"><FontAwesomeIcon  icon={faUserPlus}  ></FontAwesomeIcon></div>
                    <div className="py-4">
                    <Link href="/register" ><a className=" text-headfoot text-base font-bold">Register</a></Link>
                    <div className="font-light text-headfoot">Browse and find what you need.</div>
                    </div>
                </div>
                <div className="border-y border-header border-r rounded-r-lg p-6 bg-white">
                    <div className="text-2xl"><FontAwesomeIcon icon={faDoorOpen}/></div>
                    <div className="py-4">
                        <Link href="/login" ><a className=" text-headfoot text-base font-bold">Sign in</a></Link>
                        <div className="font-light text-headfoot">Already have account, then welcome back.</div>
                    </div>
                </div>
            </div>
            </div>
            <form 
            onSubmit={(e) =>onFormSubmit(e)}
            className="flex flex-col gap-7 justify-center items-center">
            <div className="flex justify-center item-center gap-4 ">
                <div>
                <input 
                onChange={(e)=> onChangeForm(e)}
                style={{width:"294px"}}
                className="shadow border-header  border rounded-lg text:headfoot placeholder:text-headfoot items-center py-4 px-6 w-96  leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="firstname"
                id="firstname"
                type="text"
                required
                
                placeholder="First Name*"
              />
                </div>
                <div>
                <input 
                onChange={(e)=> onChangeForm(e)}
                style={{width:"294px"}}
                className="shadow border-header  border rounded-lg text:headfoot placeholder:text-headfoot items-center py-4 px-6 w-96  leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="lastname"
                id="lastname"
                type="text"
                required
                
                placeholder="Last Name*"
              />
                </div>
            </div>
            <div>
            <input 
                onChange={(e)=> onChangeForm(e)}
                style={{width:"600px"}}
                className="shadow border-header border rounded-lg text:headfoot placeholder:text-headfoot items-center py-4 px-6 w-96  leading-tight focus:outline-none focus:shadow-outline bg-white"
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
                className="shadow border-header border rounded-lg text:headfoot placeholder:text-headfoot items-center py-4 px-6 w-96  leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="password"
                id="password"
                type="password"
                required
                
                placeholder="Password*"
              />
            </div>
            <div>
            <input 
                onChange={(e)=> onChangeForm(e)}
                style={{width:"600px"}}
                className="shadow border-header border rounded-lg text:headfoot placeholder:text-headfoot items-center py-4 px-6 w-96  leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="confirmpassword"
                id="confirmpassword"
                type="password"
                required
                placeholder="Repeat Password*"
              />
            </div>
            <div>
                <button type="submit" className=" bg-headfoot text-white px-10 py-2 rounded-lg mb-11 hover:bg-black">Submit</button>
            </div>
            </form>
            </div>
        </Fragment>
    )
}
export default register;
