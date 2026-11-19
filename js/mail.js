

const reviewForm = document.querySelector("#review-form");

if (reviewForm) {
  reviewForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = reviewForm.querySelector(
      'button[type="submit"]'
    );

    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
      const formData = new FormData(reviewForm);

      const reviewData = {
        name: formData.get("name"),
        email: formData.get("email"),
        rating: formData.get("rating"),
        review: formData.get("review"),
        website: formData.get("website") // Honeypot
      };

      const response = await fetch(
        "/.netlify/functions/send-review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(reviewData)
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || `Submission failed (${response.status}).`
        );
      }

      if (!result.success) {
        throw new Error("Review submission was unsuccessful.");
      }

      alert("Thank you! Your review was submitted successfully.");

      reviewForm.reset();

    } catch (error) {
      console.error("Review submission error:", error);

      alert(
        error.message || "We couldn't submit your review. Please try again."
      );

    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}
