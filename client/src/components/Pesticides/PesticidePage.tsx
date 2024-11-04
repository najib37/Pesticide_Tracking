import './PesticidePage.css';
import PestIcon from '../../assets/pest-icon.svg';

export const PestcidePage = () => {

  const pesticideData = {
    "name": "Pesticide",
    "description": "This is a pesticide",
  }

  const PesticideCard =(props: { pest }) => { 
    const { pest } = props;

    return (
      <div className='pesticide-card'>
        <img src={PestIcon} alt='pesticide' />
        <h1>{pest.namae ?? "no name provided"}</h1>
        <p>{pest.desc ?? "no desc provided"}</p>
      </div>
      );
  }

  return (
    <div className='pesticide-container'>
      <PesticideCard pest={pesticideData} />
      <PesticideCard pest={pesticideData} />
      <PesticideCard pest={pesticideData} />
      <PesticideCard pest={pesticideData} />
      <PesticideCard pest={pesticideData} />
      <PesticideCard pest={pesticideData} />
      <PesticideCard pest={pesticideData} />
      <PesticideCard pest={pesticideData} />
      <PesticideCard pest={pesticideData} />
    </div>
  );
}
