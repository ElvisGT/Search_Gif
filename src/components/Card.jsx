import useApi from '../hooks/useApi';

export const Card = () => {
  const {linkImg,alt} = useApi();
  return (
    <div>
        <img src={linkImg} alt={alt} />
    </div>
  )
}
