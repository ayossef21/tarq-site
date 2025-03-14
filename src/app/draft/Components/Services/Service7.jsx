import Link from 'next/link';
import data from '@/app/Data/sercicePage.json';
import Image from 'next/image';

const Service7 = () => {
    return (
        <div className="servcie2 sp bg1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <h2>More More Project</h2>
              </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row">

          {data.slice(0,3).map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="">
                <div className="servcie2-box servcie2-box-2">
                  <div className="icon">
                  <Image src={item.icon} alt="img" width={24} height={24}   />
                  </div>
                  <Link href={item.btnLink} className="arrow"><i className="bi bi-arrow-right"></i></Link>
                  <div className="heading1">
                  <h4><Link href={item.btnLink}>{item.title}</Link></h4>
                    <div className="space16"></div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            ))}

          </div>

          <div className="space40"></div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <Link className="theme-btn1" href="/service">View All Services <span><i className="bi bi-arrow-right"></i></span></Link>
            </div>
          </div>

        </div>
      </div>
    );
};

export default Service7;