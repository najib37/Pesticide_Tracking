import './PesticidePage.css';
import PestIcon from '../../assets/pest-icon.svg';
import { PestType } from '../../types/PestType';
import { fetchAllMarkers } from '../../services/Feilds/feild_marker_fetcher';
import useSWR from 'swr';
import { MarkerType } from '../../types/MarkerType';

export const PestcidePage = () => {
  const { data: markers, error, isLoading } = useSWR('marker', fetchAllMarkers)
  if (error) return (<>error</>);
  if (isLoading) return (<>loading</>);

  const PesticideCard = (props: { pest: PestType }) => {
    const { pest } = props;

    return (
      <div className='pesticide-card'>
        <img src={PestIcon} alt='pesticide' />
        <h1>{pest.name ?? "no name provided"}</h1>
        <p>{pest.desc ?? "no desc provided"}</p>
      </div>
    );
  }

  return (
    <div className='pesticide-container'>
      {markers.map((marker: MarkerType, index: number) => (
        <div key={index} className="icon-text-desc">
          <PesticideCard pest={marker} />
        </div>
      ))}
    </div>
  );
}
