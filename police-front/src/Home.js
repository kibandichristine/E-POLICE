import SignIn from "./components/forms/login";
import React,{useState } from "react";
import Register from "./components/forms/Register";
import DashboardContent from "./components/views/Dashboard/Dashboard";
import invalidCredentialsPopUp from "./components/views/popusp/invalidCred";
import Deposits from "./components/views/Dashboard/Deposits";

import Suspects from "./components/views/Dashboard/Suspects";
import Cases from "./components/views/Dashboard/Cases";

function loginCheck(props){
    return(
        console.log("checking the login page ..")
    )
}
// import invalidCredentialsPopUp from "./components/views/popusp/invalidCred";

export default function Home() {


    // const loginCheck = () => {
    //   // do stuff
    //   setisloggedIn("True")
    //   return (console.log(isloggedIn));


    // }
    const [isloggedIn, setIsloggedIn] = useState(false);
    const [registaration, setRegistration] = useState(false)
    const [casesPage, setCasesPage] = useState("false")
    const [msg, setMsg] = useState("empty")
    let page = "undefined"
    // let msg = "sent..."

    function handleMessages(info){
        setRegistration(true)

    }

    const switchToLoginPage = (event) => {
        setRegistration(false)
    }

    const handleLogOut = () => {
        setIsloggedIn(false)
        console.log("logging out ...")
    }
    

    const handlepagChange1 = (event) => {
        // event.preventDefault();

        setCasesPage("true")
        console.log("welcome..")
    }
    // login check uses dummy data for verification ..
    const loginCheck = (credentials) =>{
        // extarct the data from the form 
        const username = credentials['username']
        const password = credentials['password']
        if(username == "test" && password == "1234"){
            // login success swith load the dashboard 
            setIsloggedIn(true)
            
        }else{
            <invalidCredentialsPopUp />
            console.log("invalid credentials")
        }
        // console.log(username)
    }
    const SubPage = <Suspects/>
    if(casesPage == "true"){
        SubPage = <Cases />
        // await()
    }
  


    if(isloggedIn){
        
      
        page = <DashboardContent onLogOut={handleLogOut} onPageChange={handlepagChange1} />
    }else{
        if(registaration){
            page = <Register onSwitch={switchToLoginPage} />
        }else{
            page = <SignIn onLogin={loginCheck}  onChange={handleMessages}/>
        }
    }
  
    return (
      
        <div className="tab-content" id="newForm-wrapper">
          
           {/* <Register /> */}
           {/* <DashboardContent /> */}
           {page}
           {casesPage}
        </div>
      
    ); 

}
