import Link from "next/link";
import { Fragment } from "react";
import classes from '../styles/header.module.css'



function Header(){
    return (
        <Fragment>
            <div className=" flex gap-3 justify-end mt-3 mb-3 mr-8 bg-white">
                <Link href='/login' ><a className="text-sans text-sm text-header  hover:bg-gray   rounded px-2  ease-in-out duration-400">Sign in</a></Link>
                <Link href='/register' ><a className="text-sans text-sm text-header  hover:bg-gray   rounded px-2  ease-in-out duration-400  ">Register</a></Link>
            </div>
            <div className="flex w-full justify-between items-center bg-headfoot text-white">
                <div className="w-1/12 py-10 px-10">
                <div className={classes.square}>
                        <div className={classes.half1}></div>
                        <div className={classes.half2}></div>
                    </div>
                </div>
                <div className="flex w-10/12 gap-2 ">
                    <Link   href='/' ><a className="text-base bold hover:bg-black  rounded py-6 px-6   ease-in-out duration-500 font-semibold">Home</a></Link>
                    <div className=" text-base bold hover:bg-black  rounded py-6 px-6   ease-in-out duration-500 font-semibold">About us</div>
                    <div className=" text-base bold hover:bg-black  rounded py-6 px-6   ease-in-out duration-500 font-semibold">Contact us</div>
                </div>
                <div className="mr-10 px-2 py-1 rounded-full bg-white text-headfoot font-bold ">Ar</div>
            </div>
        </Fragment>
    )
}
export default Header;