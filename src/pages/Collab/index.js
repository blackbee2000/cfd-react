import { useState } from "react";
import { useHistory } from "react-router";
import '../../assets/custom.scss';
import './collab.scss';

const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const emailPattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
const urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

export default function Collab(){

    const [form, setForm] = useState({
      name: ''
    });
    const [error, setError] = useState({});
    const history = useHistory();
    
    const handleInputChange = (ev) => {
      let name = ev.currentTarget.name;
      let value = ev.currentTarget.value;
      setForm({
        ...form,
        [name]: value,
      })
    }

    const submit = () => {
      let errObject = {};
      if(!form.name){
        errObject.name = "*Vui lòng nhập họ và tên";
      }
      if(!phonePattern.test(form.phone)){
        errObject.phone = "*Vui lòng nhập đúng định dạng số điện thoại";
      }
      if(!emailPattern.test(form.email)){
        errObject.email = "*vui lòng nhập đúng định dạng email";
      }
      if(!urlPattern.test(form.url)){
        errObject.url = "*Vui lòng nhập đúng định dạng url";
      }
      if(!form.title){
        errObject.title = "*Vui lòng nhập tiêu đề";
      }
      if(!form.note){
        errObject.note = "*Vui lòng nhập nội dung";
      }

      setError(errObject);
      if(Object.keys(errObject).length === 0){
        history.push("/");
      }
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
          <div className="form">
            <label>
              <p>Họ và tên<span>*</span></p>
              <input onChange={handleInputChange} value={form.name} name="name" type="text" placeholder="Họ và tên bạn" />
            </label>
            { error.name && <p className="error-text">{error.name}</p> }
            <label>
              <p>Số điện thoại</p>
              <input onChange={handleInputChange} value={form.phone} name="phone" type="text" placeholder="Số điện thoại" />
            </label>
            { error.phone && <p className="error-text">{error.phone}</p> }
            <label>
              <p>Email<span>*</span></p>
              <input onChange={handleInputChange} value={form.email} name="email" type="text" placeholder="Email của bạn" />
            </label>
            { error.email && <p className="error-text">{error.email}</p> }
            <label>
              <p>Website</p>
              <input onChange={handleInputChange} value={form.url} name="url" type="text" placeholder="Đường dẫn website http://" />
            </label>
            { error.url && <p className="error-text">{error.url}</p> }
            <label>
              <p>Tiêu đề<span>*</span></p>
              <input onChange={handleInputChange} value={form.title} name="title" type="text" placeholder="Tiêu đề liên hệ" />
            </label>
            { error.title && <p className="error-text">{error.title}</p> }
            <label>
              <p>Nội dung<span>*</span></p>
              <textarea onChange={handleInputChange} value={form.note} name="note" id cols={30} rows={10} defaultValue={""} />
            </label>
            { error.note && <p className="error-text">{error.note}</p> }
            <div className="btn main rect" onClick={submit}>đăng ký</div>
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