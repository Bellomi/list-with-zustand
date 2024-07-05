import { useEffect } from "react";
import Container from "./components/Container";
import { Footer } from "./components/Footer";
import HashtagList from "./components/HashtagList";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

export function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems,
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />

      <Container />

      <HashtagList />
    </div>
  );
}
