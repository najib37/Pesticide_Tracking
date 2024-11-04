import "./HomePage.css";

import FastIcon from "../../assets/icons/fast.svg";
import InstantIcon from "../../assets/icons/instant.svg";
import IntuitiveIcon from "../../assets/icons/intuitive.svg";
import CustomIcon from "../../assets/icons/custom.svg";


type IconDescType = { // TODO: move to a separate file Types.ts
  icon: string,
  name: string,
  desc: string
}


export const HomePage = () => {

  const assetsDesMap: IconDescType[] = [
    {
      icon: FastIcon,
      name: "Fast",
      desc: "Save hours on data entry with our quick-capture system. Designed for speed and efficiency, so you can focus on what matters most - your crops."
    },
    {
      icon: InstantIcon,
      name: "Instant",
      desc: "Access your application data instantly from anywhere. Make informed decisions with real-time analytics and immediate safety compliance updates."
    },
    {
      icon: IntuitiveIcon,
      name: "Intuitive",
      desc: "Work smarter with an interface that feels natural from day one. Simple, clear, and designed around real farmer needs and workflows."
    },
    {
      icon: CustomIcon,
      name: "Custom",
      desc: "Build the perfect system for your operation. Customize everything from field boundaries to application schedules to match your unique requirements."
    },
  ]


  const IconTextDesc = (props: { iconDes: IconDescType }) => {
    const { icon, name, desc } = props.iconDes;
    return (
      <>
        <div className="icon-title-pair">
          <img src={icon} alt="icon" />
          <h1>{name}</h1>
        </div>
        <p>{desc}</p>
      </>
    );
  }

  return (
    <>
      <div className="home-container">

        <div className="home-info-card">
          <h1 className="info-card-title">Responsible Farming, Sustainable Future</h1>
          <h2 className="info-card-subtitle">Streamline your pesticide management with real-time tracking,
            compliance  monitoring, and intelligent reporting</h2>
          <button className="info-card-button">Get Started</button>
        </div>

        <div className="home-details-card">
          <div className="details-card-info-box">
            <h1 >Advanced pesticide tracking for modern agriculture</h1>
            <h2 >Transform your pest management with real-time tracking, automated compliance alerts, and detailed analytics - all in one intuitive platform designed for modern farmers.</h2>
            <p >Number one <span id="decorated-text">Pesticide Tracking</span> website in Morocco</p>
          </div>
          <div className="home-details-icons-box">
            {assetsDesMap.map((iconDes, index) => (
              <div key={index} className="icon-text-desc">
                <IconTextDesc iconDes={iconDes} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
