// api.ts
import axios from 'axios';

const API_URL = 'http://192.168.0.102:5000/api'; // Замените на ваш URL, если нужно

// Функция для создания пользователя
export const createOrUpdateUser = async (userData: {
    userId: string;
    VKId: string;
    firstName: string;
    lastName: string;
    age?: number;
    city?: string;
    profilePhoto?: string;
    profileDescription?: string;
    friendsList?: string[];
    myReviews?: string[];
    subscriptionStatus?: boolean;
}): Promise<any> => {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
};

// Функция для поиска пользователей
export const searchUsers = async (findUserNameString: string): Promise<any> => {
    const response = await axios.get(`${API_URL}/users/search`, {
        params: { findUserNameString },
    });
    return response.data;
};

// Функция для создания отзыва
export const createReview = async (reviewData: {
    id: string;
    content: string;
    rating: number;
    datePosted: string;
    category: string;
    name: string;
    imageUrl?: string;
    userId: string;
    recipientUserId: string;
}): Promise<any> => {
    const response = await axios.post(`${API_URL}/reviews`, reviewData);
    return response.data;
};

// Функция для получения отзывов по VK ID
export const getReviewsByVKId = async (vkid: string): Promise<any> => {
    const response = await axios.get(`${API_URL}/reviews/lenta`, {
        params: { vkid },
    });
    return response.data;
};

// Функция для обновления отзыва
export const updateReview = async (updateData: {
    id: string;
    like: boolean;
    num: number;
}): Promise<any> => {
    const response = await axios.patch(`${API_URL}/reviews/update`, updateData);
    return response.data;
};

// Функция для получения отзывов по профилю
export const getReviewsByProfile = async (vkid: string): Promise<any> => {
    const response = await axios.get(`${API_URL}/reviews/profiles`, {
        params: { vkid },
    });
    return response.data;
};
