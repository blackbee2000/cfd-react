export default function Team(){

    var list1 = [
      {
        id: '1',
        name: 'Trần Nghĩa',
        title: 'Founder &amp; Creative Front-End Developer',
      },
      {
        id: '2',
        name: 'Đặng Thuyền Vương',
        title: 'Co-Founder &amp; Fullstack Developer',
      },
      {
        id: '3',
        name: 'Đặng Thuyền Quân',
        title: 'Co-Founder &amp; Backend Developer',
      },
      {
        id: '4',
        name: 'Nguyễn Đức Huy',
        title: 'Co-Founder &amp; Front-End Developer',
      },
    ];

    var list2 = [
      {
        id: '1',
        name: 'Phạm Thành Trung',
        title: 'CFD1-Offline'
      },
      {
        id: '2',
        name: 'Ngô Thành Long',
        title: 'CFD1-Offline'
      },
      {
        id: '3',
        name: 'Huỳnh Tiến Tài',
        title: 'CFD1-Offline'
      },
      {
        id: '4',
        name: 'Diệp Anh Thy',
        title: 'CFD1-Offline'
      },
      {
        id: '5',
        name: 'Trần Anh Tuấn',
        title: 'CFD1-Offline'
      },
    ]

    return(
        <main className="team" id="main">
        <section>
          <div className="container">
            <div className="top">
              <h2 className="main-title">cfd team</h2>
              <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                elementum
                sem non luctus
              </p>
            </div>
            <div className="list row">
              {
                list1.map(o =>(
                  <div className="item col-md-6 col-sm-6">
                    <div className="wrap">
                      <div className="cover">
                        <img src="img/thumb-member.jpg" alt="" />
                      </div>
                      <div className="info">
                        <div className="name">
                          {o.name}
                        </div>
                        <p className="title">{o.title}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
              {
                list2.map(o => (
                  <div className="item col-md-3 col-sm-4 col-xs-6">
                    <div className="wrap">
                      <div className="cover">
                        <span className="text">H</span>
                        <img src="img/thumb-member.jpg" alt="" />
                      </div>
                      <div className="info">
                        <div className="name">
                          {o.name}
                        </div>
                        <p className="title">{o.title}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </main>
    )
}