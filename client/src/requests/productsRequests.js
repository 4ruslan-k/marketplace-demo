import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import config from '../config';

export const getProductsRequest = () => {
  const {
    isLoading: isLoadingProducts,
    data,
    error: fetchProductsError,
    refetch: refetchProducts,
  } = useQuery('getProducts', () => axios(`${config.BASE_URL}/v1/products`));
  const products = data?.data?.products || [];
  return {
    isLoadingProducts,
    products,
    fetchProductsError,
    refetchProducts,
  };
};

export const addProductReviewRequest = ({ selectedProductId, onSuccess }) => {
  const {
    isLoading: isAddReviewLoading,
    error: addReviewError,
    mutate: addProductReview,
  } = useMutation(
    (values) => axios.post(`${config.BASE_URL}/v1/products/${selectedProductId}/reviews`, values),
    {
      onSuccess,
    }
  );
  return {
    isAddReviewLoading,
    addReviewError,
    addProductReview,
  };
};
