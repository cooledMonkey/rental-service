
import { ReviewsItem } from "../reviews-item/reviews-item";
import { SendReviewItem } from "../send-review-component/send-review-component";
import { useAppSelector } from "../../hooks";
import { getRewviewsByPlaceId } from "../../utils";

type ReviewsListProps = {
    offerId: string;
}

function ReviewsList({offerId}: ReviewsListProps){
  const reviewsList = useAppSelector((state) => state.reviews)
    return(<section className="offer__reviews reviews">
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{getRewviewsByPlaceId(offerId, reviewsList).length}</span></h2>
          <ul className="reviews__list">
            {reviewsList.length == 0 ? null :
            Array.from(getRewviewsByPlaceId(offerId, reviewsList), (review) => <ReviewsItem key={review.id} review={review} />)}
          </ul>
            <SendReviewItem offerId={offerId}/>
        </section>);
}
export {ReviewsList};