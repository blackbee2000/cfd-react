import { Link } from "react-router-dom";
export default function Banner(){
    return(
        <div className="banner jarallax">
        <div className="container">
          <div className="content">
            <h2 className="title">Thực Chiến</h2>
            <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
            <Link to="/course" className="btn main round">KHÓA HỌC</Link>
          </div>
        </div>
        <div className="jarallax-img">
          <img data-src="img/bg-cover.jpg" alt="" className="lazyload" />
          <div className="video-bg lazyload" data-src="video/CFD-video-bg2.mp4" />
        </div>
      </div>
    )
}