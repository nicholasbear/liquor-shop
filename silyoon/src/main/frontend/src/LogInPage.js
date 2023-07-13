import './LogInPage.css';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';

function LogInPage() {
    const movePage = useNavigate();

    function gosign(){
    	movePage('/signin');
    }
    const [userIdInput, setUserIdInput] = useState('')
    const [userPwInput, setUserPwInput] = useState('')
    const [isShowPwChecked, setShowPwChecked] = useState(false)
    const passwordRef = useRef(null)

    const handleIdInputChange = (event) => {
        setUserIdInput(event.target.value);
      };

      const handlePwInputChange = (event) => {
        setUserPwInput(event.target.value);
      };

    const handleShowPwChecked = async () => {
        const password = await passwordRef.current
        if (password === null) return

        await setShowPwChecked(!isShowPwChecked)
        if(!isShowPwChecked) {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    }

    return (
       
    <div className="login_container">
        <form>
        <div >
            <input className="input_row" type='text' name='userId' id='id' placeholder='아이디' 
                    value={userIdInput} onChange={handleIdInputChange}
                    />
            {
            userIdInput && <button>X</button>
            }
        </div>
        <div >
            <input className="input_row" type='password' name='userPw' id='password' placeholder='비밀번호'
                    maxLength={16}
                    value={userPwInput}
                    
                    ref={passwordRef}
                    onChange={handlePwInputChange}
                    />
            {
            userPwInput && <button>X</button>
            }
        </div>
        <div className="show_password_button">
            <label>
            <input type='checkbox' onChange={handleShowPwChecked} />
            <span className="show_password_title">비밀번호 보기</span>
            </label>
        </div>
        <div align="center" className="login_button">로그인</div>
        <div align="center" className="join_button" onClick={gosign}>
            회원가입
        </div>
        </form>
    </div>
    )
}

export default LogInPage;