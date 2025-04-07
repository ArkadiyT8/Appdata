// Yo, let's fetch some data and make it pop!
document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/data") // Hit the backend API
      .then((res) => res.json())
      .then((data) => {
        const ctx = document.getElementById("dataChart").getContext("2d");
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: data.labels,
            datasets: [
              {
                label: "Sample Data",
                data: data.values,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      })
      .catch((err) => console.error("Oops, something went wrong:", err));
  });