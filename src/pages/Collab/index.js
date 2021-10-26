
import { useHistory } from "react-router";
import '../../assets/custom.scss';
import { useForm } from "../../hooks/useForm";

export default function Collab(){

    let { register, form, handleSubmit, error } = useForm();
    let history = useHistory();
    const submit = () => {
      history.push("/");
    }

    return(
        <main className="register-course" id="main">
        <section className="section-1 wrap container">
          {/* <div class="main-sub-title">liên hệ</div> */}
          <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
          <p className="top-des">
            Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>
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
              <p>Website</p>
              <div className="form_label-text">
                <input className={error.url && 'input-error'} {...register('url', {patern: 'url'})} type="text" placeholder="https://facebook.com" />
                { error.url && <p className="error-text">{error.url}</p> }
              </div>
            </label>
            <label className={error.title && 'form_label'}>
              <p>Tiêu đề<span>*</span></p>
              <div className="form_label-text">
                  <input className={error.title && 'input-error'} {...register('title', {required: true})} type="text" placeholder="Tiêu đề liên hệ" />
                  { error.title && <p className="error-text">{error.title}</p> }
                </div>
            </label>
            <label>
              <p>Nội dung<span>*</span></p>
              <textarea name="note" id cols={30} rows={10} defaultValue={""} />
            </label>
            <button className="btn main rect" type="submit" style={{marginTop: 30}}>đăng ký</button>
          </form>
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