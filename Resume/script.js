document.addEventListener("DOMContentLoaded", function () {
  // Your data for the employment timeline (replace with your actual data)
  const employmentData = [
    { year: 2023, position: "Backend Developer", company: "Singalal" },
    // Add more entries as needed
  ];

  const timeline = document.getElementById("timeline");

  // Create the interactive employment timeline
  employmentData.forEach((entry) => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `<span class="year">${entry.year}</span><p>${entry.position} at ${entry.company}</p>`;
    timeline.appendChild(eventDiv);
  });
});
