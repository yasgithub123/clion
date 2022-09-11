const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

let isVisible = false;

const togglePopup = () => {
  if (isVisible) {
    // document.getElementById("popup").style.display = "none";
    document.getElementById("popup").style.pointerEvents = "none";
    document.getElementById("popup").style.opacity = "0";
    isVisible = false;
  } else {
    document.getElementById("popup").style.pointerEvents = "auto";
    document.getElementById("popup").style.opacity = "1";
    isVisible = true;
  }
};





const BASE_DB_URL = "https://clion-data-default-rtdb.firebaseio.com";

const testSaveData = async () => {
  console.log("init data to db");
  await fetch(`${BASE_DB_URL}/cliondata.json`, {
    method: "PUT",
    body: JSON.stringify({
      name: "prores",
      name: "prores",
      name: "prores",
      name: "prores",
      name: "prores",
      last: true,
    }),
  });
  console.log("saved data to db successfully");
};

// testSaveData();

const saveFormData = async (event) => {
  event.preventDefault();

  const clionForm = document.getElementById("contact-form");

  const clionFormData = new FormData(clionForm);
  console.log(clionFormData);

  const dataToSend = {};

  for (const pair of clionFormData.entries()) {
    const [key, value] = pair;
    dataToSend[key] = value;
  }
  await fetch(`${BASE_DB_URL}/cliondata/${dataToSend["number"]}.json`, {
    method: "PUT",
    body: JSON.stringify(dataToSend),
  });

  window.location.href = `${window.location.origin}/thankyou.html`

  console.log("form saved successfully");
};












