import { Fragment } from "react";
import classes from '../styles/HomePage.module.css';
import {useEffect} from 'react'
import { useRouter } from 'next/router';




function HomePage() {
    
    const router = useRouter();
    useEffect(() => {
        
        if (!localStorage.getItem('access_token')) {
          router.push('/login') 
        }
      }, [2])
    

    return(
        <Fragment>
            <div className=" bg-gray h-screen text-center ">
                <div className="flex flex-col ">
                    <div className=" pt-52 ">
                    <div className={classes.square}>
                        <div className={classes.half1}></div>
                        <div className={classes.half2}></div>
                    </div>
                    <div className="mt-96 font-sans text-5xl text-black ">The Logo Above is Made in Pure CSS</div>
                </div>
                </div>
            </div>
            
        </Fragment>
    )
}
export default HomePage;
