import data from '@/app/Data/home2/work2.json';
import SectionTitle from '@/shared/Components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';

const HowWork1 = () => {
    return (
        <div className="work2 pt100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading2">
                <SectionTitle
                        SubTitle="How It Works"
                        Title="Unlocking Success The Path To Seamless Solutions"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className={item.addClass}>
                <div className="work2-box" data-aos="zoom-in-up" data-aos-duration="700">
                  <div className="image image-anime">
                  <Image src={item.icon} alt="img" width={698} height={281}   />
                  </div>
                  <div className="space20"></div>
                  <div className="heading2">
                    <h4><Link href={item.btnLink}>{item.title}</Link></h4>
                    <div className="space10"></div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            </div>
          </div>
        </div>
    );
};

export default HowWork1;