import { useState } from "react";
import { useHistory } from "react-router";
import '../../assets/custom.scss';
import './register.scss';

const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const emailPattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
const urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

export default function Register(){

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
        errObject.name = "*Vui lòng điền họ và tên";
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

      setError(errObject);
      if(Object.keys(errObject).length === 0){
        history.push("/");
      }
    }

    return(
        <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến front-end căn bản </h1>
              <div className="main-info">
                <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
              </div>
              <div className="form">
                <label>
                  <p>Họ và tên<span>*</span></p>
                  <input onChange={handleInputChange} value={form.name} name="name" type="text" placeholder="Họ và tên bạn" />
                  
                </label>
                { error.name && <p className="error-text">{error.name}</p> }
                <label>
                  <p>Số điện thoại<span>*</span></p>
                  <input onChange={handleInputChange} value={form.phone} name="phone" type="text" placeholder="Số điện thoại" />
                </label>
                { error.phone && <p className="error-text">{error.phone}</p> }
                <label>
                  <p>Email<span>*</span></p>
                  <input onChange={handleInputChange} value={form.email} name="email" type="text" placeholder="Email của bạn" />
                </label>
                { error.email && <p className="error-text">{error.email}</p> }
                <label>
                  <p>URL Facebook<span>*</span></p>
                  <input onChange={handleInputChange} value={form.url} name="url" type="text" placeholder="https://facebook.com" />
                </label>
                { error.url && <p className="error-text">{error.url}</p> }
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
                  <input onChange={handleInputChange} value={form.note} name="note" type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                </label>
                <div className="btn main rect" onClick={submit}>đăng ký</div>
              </div>
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