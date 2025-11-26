import { JSX } from 'react';
import React, { useState } from 'react';



function SendReviewItem(): JSX.Element {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const [message, setMessage] = useState('');  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    setMessage(event.target.value);  
};  
  return (
  <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((starValue) => (
          <React.Fragment key={starValue}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={starValue}
              id={`${starValue}-stars`}
              type="radio"
              checked={rating === starValue}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${starValue}-stars`}
              className="reviews__rating-label form__rating-label"
              title={[
                "terribly",
                "badly", 
                "not bad",
                "good",
                "perfect"
              ][starValue - 1]}
            >
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <input
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={message}
        onChange={handleChange}
      />
      
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={message.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export {SendReviewItem};