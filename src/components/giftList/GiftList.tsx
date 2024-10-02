import CardGift from "../ui/cardGift/CardGift";
import { useAppSelector } from "../../hooks/redux";

const GiftList= () => {
   const gift = useAppSelector(state => state.giftReduce.gift)

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2vh",
      }}
    >
      {gift.map((el, i) => (
        <CardGift key={i} gift={el} />
      ))}
    </div>
  );
};

export default GiftList;
