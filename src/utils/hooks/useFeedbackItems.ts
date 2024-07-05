import { useEffect, useState } from "react";
import { FeedbackItemType } from "../types/types";

export const useFeedbackItems = () => {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        );
        if (!response.ok) {
          throw new Error(); // This will trigger the catch block. Is for when the fetch worked, but the data has some problem.
        }
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Failed to fetch feedback items");
      }

      setIsLoading(false);
    };
    fetchFeedbackItems();
  }, []);

  return {
    feedbackItems,
    isLoading,
    errorMessage,
    setFeedbackItems,
  };
};
