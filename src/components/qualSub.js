export default function toggly() {
  const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");
  tabs.forEach((tab) => {
    console.log(tab);
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.target);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("qualification__active");
      });
      target.classList.add("qualification__active");
      tab.forEach((tab) => {
        tab.classlist.remove("qualification__active");
      });
      tab.classList.add("qualification__active");
    });
  });
}
