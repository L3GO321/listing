import { ListItem } from "./components/ListItem/ListItem";

export const Listing = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((card) => (
        card.state !== 'removed' && <ListItem key={card.listing_id} item={card} />
      ))}
    </div>
  )
}