import { Fragment } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import classes from '../styles/Footer.module.css'

function Footer(){
    return (
        <Fragment>
            <div className=" bg-headfoot h-80  text-white flex flex-col  text-center" >
                <div className="pt-40 pb-24" >
                <div className={classes.square}>
                        <div className={classes.half1}></div>
                        <div className={classes.half2}></div>
                    </div>
                </div>
                <div className="flex justify-center gap-2">
                    <div><FontAwesomeIcon icon={faCopyright}/></div>
                    <span>All Rights Reserved.</span>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;