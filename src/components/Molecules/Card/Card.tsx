import './Card.css';

export interface CardProps {
  /** Card title */
  title: string;
  /** URL of the image shown at the top of the card */
  imageSrc: string;
  /** Accessible description of the image */
  imageAlt: string;
  /** Price, already formatted for display (e.g. "$79.00") */
  price: string;
}

/** Product-style card showing an image, a title, and a price */
export const Card = ({ title, imageSrc, imageAlt, price }: CardProps) => {
  return (
    <div className="ds-card">
      <img className="ds-card__image" src={imageSrc} alt={imageAlt} />
      <div className="ds-card__body">
        <h3 className="ds-card__title">{title}</h3>
        <span className="ds-card__price">{price}</span>
      </div>
    </div>
  );
};
