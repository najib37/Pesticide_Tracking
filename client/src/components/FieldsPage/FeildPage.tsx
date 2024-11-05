import './FeildPage.css';
import FeildIcon from '../../assets/feild-icon.svg';
import { FeildType } from '../../types/PestType';

export const FeildPage = () => {

  const feildData : FeildType = {
    "name": "Field",
    "desc": "This is a feild",
  }

  const FeildCard =(props: { pest: FeildType }) => { 
    const { pest: feild } = props;

    return (
      <div className='feild-card'>
        <img src={FeildIcon} alt='feild' />
        <h1>{feild.name ?? "no name provided"}</h1>
        <p>{feild.desc ?? "no desc provided"}</p>
      </div>
      );
  }

  return (
    <div className='feild-container'>
      <FeildCard pest={feildData} />
      <FeildCard pest={feildData} />
      <FeildCard pest={feildData} />
      <FeildCard pest={feildData} />
      <FeildCard pest={feildData} />
      <FeildCard pest={feildData} />
      <FeildCard pest={feildData} />
      <FeildCard pest={feildData} />
      <FeildCard pest={feildData} />
    </div>
  );
}
