import { useState } from "react"

export default function Register()
{
const[formData,setformDate]=useState({
    uname:"" , uemail:"" , upass:"", ucpass:""
})
  

   const  [errors,setErrors]=useState({});
   const  [successMsg,setSuccessMsg]=useState("");

   const handleChange=(e)=>{
    setformDate({...formData,[e.target.value]:e.target.value
    })
   }

   const validate=()=>{
    let newErrors={};
    if(!formData.uname) newErrors.uname="nsme is required";
    if(!formData.uemail) newErrors.uemail="email is required";
    if(!formData.upass) newErrors.upass="password is required";
    if(!formData.ucpass) newErrors.ucpass="confim password is required";
    if(formData.upass!==formData.ucpass) newErrors.ucpass="password and confirm pass word does not match";
     return newErrors;

   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    const validateErrors=validate();
    setErrors(validateErrors);
    if(Object.keys(validateErrors).length===0)
    {
        setSuccessMsg("register done successfully");
    }
    else {
        setSuccessMsg("Registration failed");
    }
   }

    return(
        <>
           <h1>
             Register Form
           </h1>
           <form action="" onChange={handleSubmit}>
             
             {successMsg && <h2><mark>{successMsg}</mark></h2>}

            <label htmlFor="">Enter  Name</label>
            <input type="text" name="uname" onChange={handleChange} />
            {errors.uname && <p><mark>{errors.uname}</mark></p>}
            <br /><br />
            <label htmlFor=""> Enter Email</label>
            <input type="text" name="uemail"onChange={handleChange} />
              {errors.uemail && <p><mark>{errors.uemail}</mark></p>}
            <br /><br />
            <label htmlFor="">Enter Password</label>
            <input type="text" name="upass" onChange={handleChange} />
              {errors.upass && <p><mark>{errors.upass}</mark></p>}
            <br /><br />
            <label htmlFor=""> Enter Confirm Password</label>
            <input type="text" name="ucpass" onChange={handleChange} />
              {errors.ucpass && <p><mark>{errors.ucpass}</mark></p>}
            <br /><br />
            <input  type="submit" value={"submit"}/>
            <input type="reset" value={"cancel"}/>
           </form>
        </>
    )
}