import { Router } from 'express';
import { getProductReviews, createProductReview } from '../controllers/review.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createReviewSchema, reviewProductIdParamSchema } from '../schemas/review.schema.js';

const router = Router({ mergeParams: true });

router.get('/', validate(reviewProductIdParamSchema, 'params'), getProductReviews);
router.post('/', validate(reviewProductIdParamSchema, 'params'), validate(createReviewSchema, 'body'), createProductReview);

export default router;