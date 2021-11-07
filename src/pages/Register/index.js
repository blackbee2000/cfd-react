import { useHistory, useParams } from "react-router";
import '../../assets/custom.scss';
import { useForm } from "../../hooks/useForm";
import courseService from "../../services/courseService";
import { useEffect, useState } from "react";

export default function Register(){

    let [detail, setDetail] = useState();
    let {slug} = useParams();
    let { register, form, handleSubmit, error } = useForm();
    let history = useHistory();

    useEffect(async () =>{
        let dataDetail = await courseService.detail(slug);
        setDetail(dataDetail);
    }, [slug]);

    const submit = async (form) => {
      await courseService.register(slug, form);
      history.push("/");
    }

    return(
        <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title"> {detail?.data.title} </h1>
              <div className="main-info">
                <div className="date"><strong>Khai giảng:</strong> {detail?.data.opening_time}</div>
                <div className="time"><strong>Thời lượng:</strong> 18 buổi </div>
                <div className="time"><strong>Học phí:</strong> {(detail?.data.money)?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
              </div>
              <form className="form" onSubmit={handleSubmit(submit)}>
                <label className={error.name && 'form_label'}>
                  <p>Họ và tên<span>*</span></p>
                  <div className="form_label-text">
                    <input className={error.name && 'input-error'} {...register('name', {required: true})} type="text" placeholder="Họ và tên bạn" />
                    { error.name && <p className="error-text">{error.name}</p> }
                  </div>
                </label>
                <label className={error.phone && 'form_label'}>
                  <p>Số điện thoại<span>*</span></p>
                  <div className="form_label-text">
                    <input className={error.phone && 'input-error'} {...register('phone', {patern: 'phone'})} type="text" placeholder="Số điện thoại" />
                    { error.phone && <p className="error-text">{error.phone}</p> }
                  </div>
                </label>
                <label className={error.email && 'form_label'}>
                  <p>Email<span>*</span></p>
                  <div className="form_label-text">
                    <input className={error.email && 'input-error'} {...register('email', {patern: 'email'})} type="text" placeholder="Email của bạn" />
                    { error.email && <p className="error-text">{error.email}</p> }
                  </div>
                </label>
                <label className={error.url && 'form_label'}>
                  <p>URL Facebook<span>*</span></p>
                  <div className="form_label-text">
                    <input className={error.url && 'input-error'} {...register('url', {patern: 'url'})} type="text" placeholder="https://facebook.com" />
                    { error.url && <p className="error-text">{error.url}</p> }
                  </div>
                </label>
                <label className="disable">
                  <p>Sử dụng COIN</p>
                  <div className="checkcontainer">
                    Hiện có <strong>300 COIN</strong>
                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                    {/* Cần ít nhất 200 COIN để giảm giá */}
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </div>
                </label>
                <label>
                  <p>Hình thức thanh toán</p>
                  <div className="select">
                    <div className="head">Chuyển khoản</div>
                    <div className="sub">
                      <a href="#">Chuyển khoản</a>
                      <a href="#">Thanh toán tiền mặt</a>
                    </div>
                  </div>
                </label>
                <label>
                  <p>Ý kiến cá nhân</p>
                  <input {...register('note')} type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                </label>
                <button className="btn main rect" type="submit" style={{marginTop: 30}}>đăng ký</button>
              </form>
            </div>
          </div>
        </section>
        {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
      </main>
    )
}