// Get project ID from URL
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get("id");

  // Find the project by ID
  const service = services.find((p) => p.id == serviceId);

  if (service) {
    document.getElementById("service-title").innerText = service.title;
    document.getElementById("service-subtitle").innerText = service.subtitle;
    document.getElementById("service-description").innerText =
      service.description;
    document.getElementById("service-description2").innerText =
      service.description2;
    document.getElementById("service-description3").innerText =
      service.description3;

    document.getElementById("service-list1").innerText = service.list1;
    document.getElementById("service-list2").innerText = service.list2;
    document.getElementById("service-list3").innerText = service.list3;
    document.getElementById("service-list4").innerText = service.list4;

    var listItems = document.querySelectorAll("#services-list a");
    listItems.forEach(function (item) {
      if (item.innerText === service.title) {
        item.classList.add("active");
      }
    });

    document.getElementById("project-respondantimage").src =
      project.respondantimage;
    document.getElementById("project-testimonial").innerText =
      project.testimonial;
    document.getElementById("project-respondant").innerText =
      project.respondant;
    document.getElementById("project-role").innerText = project.role;

    // Add technologies
    const techList = document.getElementById("project-technologies");
    project.technologies.forEach((tech) => {
      const li = document.createElement("li");
      li.innerText = tech;
      techList.appendChild(li);
    });
    console.log(project);
  } else {
    document.body.innerHTML = "<h1>Protfolio not found</h1>";
  }
});
