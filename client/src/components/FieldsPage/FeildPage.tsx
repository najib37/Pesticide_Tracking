import './FeildPage.css';
import FeildIcon from '../../assets/feild-icon.svg';

export const FeildPage = () => {

  const feildData = {
    "name": "Field",
    "description": "This is a feild",
  }

  const FeildCard =(props: { pest }) => { 
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
