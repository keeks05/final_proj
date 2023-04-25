import CoinDetail from "../components/charView";

const DetailView = ({data}) => {
   return (
      <div>
         <CoinDetail data={data} />
      </div>
   );
};

export default DetailView;