let btn = document.getElementById("button");
const form = document.getElementById("form");


form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Đang gửi...";

  const serviceID = "default_service";
  const templateID = "template_a67n6tc";


  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      btn.value = "Đăng ký";
      alert("Thành công!");
    },
    (err) => {
      btn.value = "Đăng ký";
      alert(JSON.stringify(err));
    }
  );
});
