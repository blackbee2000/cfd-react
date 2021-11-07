import { useDispatch } from 'react-redux';
import '../../../../assets/custom.scss';
import useAuth from '../../../../hooks/useAuth';
import { useForm } from "../../../../hooks/useForm";
import authService from "../../../../services/authService";
import { updateInfoAction } from '../../../../store/action/authAction';

export default function Info(){
    
    let dispatch = useDispatch();
    const { user } = useAuth();

    let { register, form, handleSubmit, error } = useForm(user);
    const submit = async (form) => {
      const res = await authService.updateInfo(form);
      dispatch(updateInfoAction(form));
    }

    return(
        <form className="tab1" onSubmit={handleSubmit(submit)}>
            <label className={error.name && 'form_label'}>
                <p>Họ và tên<span>*</span></p>
                <div className="form_label-text">
                  <input className={error.name && 'input-error'} {...register('name', {required: true})} type="text" placeholder="Nguyễn Văn A" />
                  { error.name && <p className="error-text">{error.name}</p> }
                </div>
            </label>
            <label className={error.phone && 'form_label'}>
                <p>Số điện thoại<span>*</span></p>
                <div className="form_label-text">
                  <input className={error.phone && 'input-error'} {...register('phone', {patern: 'phone'})} type="text" placeholder="0329******" />
                  { error.phone && <p className="error-text">{error.phone}</p> }
                </div>
            </label>
            <label className={error.email && 'form_label'}>
                <p>Email<span>*</span></p>
                <div className="form_label-text">
                  <input className={error.email && 'input-error'} {...register('email', {patern: 'email'})} type="text" placeholder="linhthai20092000@gmail.com" />
                  { error.email && <p className="error-text">{error.email}</p> }
                </div>
            </label>
            <label className={error.url && 'form_label'}>
                <p>Facebook<span>*</span></p>
                <div className="form_label-text">
                    <input className={error.url && 'input-error'} {...register('url', {patern: 'url'})} type="text" placeholder="Facebook url" />
                    { error.url && <p className="error-text">{error.url}</p> }
                </div>
            </label>
            <label className={error.urltwo && 'form_label'}>
                <p>Skype<span>*</span></p>
                <div className="form_label-text">
                    <input className={error.urltwo && 'input-error'} {...register('urltwo', {patern: 'url'})} type="text" placeholder="Skype url" />
                    { error.urltwo && <p className="error-text">{error.urltwo}</p> }
                </div>
            </label>
            <button className="btn main rect" type="submit">LƯU LẠI</button>
        </form>
    )
}