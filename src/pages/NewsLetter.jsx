import React, { useEffect, useState } from 'react'
import { signUpText, successText } from '../constants'
import { signUp, signUpMobile, success, listIcon } from '../assets'

const NewsLetter = () => {
    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("");

  return (
    <div className='font-roboto-reg text-base flex justify-center items-center h-screen bg-cu-c-grey'>
        {register ? <SuccessForm email={email} setRegister={setRegister} /> : <SignupForm email={email} setEmail={setEmail} setRegister={setRegister} />}
    </div>
  )
}
const SuccessForm = ({ email, setRegister }) => {
    const tmp = "john@gmail.com"
    return (
        <div className='flex justify-center flex-col text-cu-ds-grey py-6 px-10 bg-cu-white rounded-3xl h-72 w-72'>
            <img src={success} alt="list" className='w-8 h-8 mb-4' />
            <h1 className='font-roboto-bold text-3xl mb-2'>{ successText.title }</h1>
            <p className='text-xs'>
                { successText.subTitle.start }
                <span className='font-roboto-bold'>{ email }</span>
                { successText.subTitle.end }
            </p>
            <button 
                onClick={() => setRegister(false)} 
                className='font-roboto-bold w-full mt-4 px-3 py-2 text-sm rounded-lg text-cu-white bg-cu-ds-grey hover:bg-cu-tomato'
            >
                {successText.button}
            </button>
        </div>
    )
}
const SignupForm = ({ email, setEmail, setRegister }) => {
    const [valid, setValid] = useState(false);

    useEffect(() => {
        emailChecker(email);
        // console.log({
        //     email: email,
        //     valid: valid,
        // })
    }, [email])
    

    const emailChecker = (str) => {
        str.includes('@') && str.includes(".com") ? setValid(true) : setValid(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        valid ? setRegister(true) : null;
    }
    const list = signUpText.features.map((item, i) => (
        <div key={i} className='flex justify-start items-center mb-1'>
            <img src={listIcon} alt="list" className='w-4 h-4 mr-1' />
            <p className='text-xs'/* style={{fontSize: '12px'}} */>{item}</p>
        </div>
    ))
    const styles = {
        height: '400px',
        width: '680px'
    };
    const validClass = "border-cu-ds-grey";
    const invalidClass = "border-cu-tomato bg-cu-tomato bg-opacity-25 text-cu-tomato";
        return (
            <div className='flex items-center bg-cu-white rounded-3xl' style={styles}>
                <div className='flex justify-center items-center basis-full md:basis-3/5'>
                    <div className="flex flex-col justify-start w-4/5 text-cu-ds-grey text-xs">
                        <h1 className='font-roboto-bold text-3xl'>
                            {signUpText.title}
                        </h1>
                        <p className='my-2'>
                            {signUpText.subTitle}
                        </p>
                        {list}
                        <div className='mt-2'>
                            <form onSubmit={handleSubmit}>
                                <div className='py-1'>
                                    <div className="flex justify-between">
                                        <span className='font-roboto-bold text-black text-xs'>
                                            {signUpText.form}
                                        </span>
                                        {
                                            valid || email == "" ? 
                                                null 
                                            : 
                                                <span className='font-roboto-bold text-cu-tomato text-xs'>
                                                    {signUpText.error}
                                                </span>
                                        }
                                    </div>
                                    <input 
                                        type="text"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className={`w-full mt-2 px-3 py-2 rounded-lg border-1 ${valid || email == "" ? validClass : invalidClass}`}
                                    />
                                    <button type="submit" className='font-roboto-bold w-full px-3 py-2 rounded-lg mt-2 text-cu-white bg-cu-ds-grey hover:bg-cu-tomato'>{signUpText.button}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center basis-full md:basis-2/5 h-72'>
                    <img src={signUp} alt="signUp" className='w-full h-full' />
                </div>
            </div>
        )
}

export default NewsLetter