
import { ReviewsItem } from "../reviews-item/reviews-item";
import { SendReviewItem } from "../send-review-component/send-review-component";

type ReviewsListProps = {
    reviewsAmount: number;
}

function ReviewsList({reviewsAmount}: ReviewsListProps){
    return(<section className="offer__reviews reviews">
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span></h2>
          <ul className="reviews__list">
            <ReviewsItem/>
          </ul>
            <SendReviewItem />
        </section>);
}
export {ReviewsList};