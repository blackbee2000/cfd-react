import { useForm } from "../../hooks/useForm";
import Modal from "../Modal";
import '../../assets/custom.scss';
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import authService from "../../services/authService";
import { closeLoginAction, fetchLogin, loginSuccessAction } from "../../store/action/authAction";

export default function LoginModal(){

    const dispacth = useDispatch();
    const {user, openLogin} = useSelector(store => store.auth);

    let [requestError, setRequestError] = useState('');
    let {register, error, handleSubmit} = useForm();
    // let { login, open, togglePopupLogin } = useAuth();

    const submit= async (form) =>{
        // let res = await login(form);
        // if(res){
        //     setRequestError(res);
        // }
        // else{
        //     togglePopupLogin(false);
        // }

        // let res = await authService.login(form);
        // if(res.data){
        //     dispacth(loginSuccessAction(res.data))
        // }
        // else{
        //     setRequestError(res.error);
        // }

        dispacth(fetchLogin(form))
    }

    return <Modal>
            <div className="popup-form popup-login" style={{display: openLogin ? 'flex' : 'none'}}>
                <div className="wrap">
                    <form className="ct_login" style={{display: 'block'}} onSubmit={handleSubmit(submit)}>
                        <h2 className="title">Đăng nhập</h2>
                        {
                            requestError && <p className="error-text-login">{requestError}</p>
                        }
                        <div className="form-login-input">
                            <input className={error.username && 'input-error'} {...register('username', {patern: 'email'})} type="text" placeholder="Email của bạn" />
                            { error.username && <p className="error-text">{error.username}</p> }
                        </div>
                        <div className="form-login-input">
                            <input className={error.password && 'input-error'} {...register('password', {min: 6, max: 32})} type="password" placeholder="Mật khẩu" />
                            { error.password && <p className="error-text">{error.password}</p> }
                        </div>
                        <div className="remember" style={{marginTop: 10}}>
                            <label className="btn-remember">
                                <div>
                                <input type="checkbox" />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                        </div>
                        <button className="btn rect main btn-login" type="submit">đăng nhập</button>
                        <div className="text-register">
                            <strong>hoặc đăng nhập bằng</strong>
                        </div>
                        <div>
                            <div className="btn btn-icon rect white btn-google">
                                <img src="img/google.svg" alt="" />
                                Google
                            </div>
                        </div>
                        <div className="close" onClick={()=> dispacth(closeLoginAction())} style={{zIndex: 2000}}>
                            <img src="img/close-icon.png" alt="" />
                        </div>
                    </form>
                    {/* email form */}
                    {/* <div className="ct_email">
                        <h2 className="title">Đặt lại mật khẩu</h2>
                        <input type="text" placeholder="Email" />
                        <div className="btn rect main btn-next">Tiếp theo</div>
                        <div className="back" />
                        <div className="close">
                        <img src="img/close-icon.png" alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
    </Modal>
}