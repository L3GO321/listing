

export const ListItem = ({ item }) => {

  const cutTitle = (title) => title.length > 50 ? title.substr(0, 50) + '...' : title;

  const getCurrencySymbol = (symbol) => {
    switch (symbol) {
      case 'USD':
        symbol = '$';
        break;
      case 'EUR':
        symbol = '€';
        break;
      default:
        symbol += ' ';
    }

    return symbol
  }

  const getQuantityClass = (quantity) => {
    let classN = 'item-quantity '
    if (quantity > 20) {
      classN += 'level-high'
    } else {
      if (quantity <= 10) {
        classN += 'level-low'
      } else classN += 'level-medium'
    }

    return classN
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.listing_id} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{cutTitle(item.title)}</p>
        <p className="item-price">{getCurrencySymbol(item.currency_code)}{item.price}</p>
        <p className={getQuantityClass(item.quantity)}>{item.quantity} left</p>
      </div>
    </div>
  )
}