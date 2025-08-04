const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userId = event.target.id.value;
  let userPw1 = event.target.pw1.value;
  let userPw2 = event.target.pw2.value;
  let userName = event.target.name.value;
  let userPhone = event.target.phone.value;
  let userGender = event.target.gender.value;
  const genderText = userGender === "male" ? "남자" : "여자";
  let userEmail = event.target.email.value;
  let userAddress = event.target.address.value;

  if (userId.length < 6) {
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요");
    return;
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (userName.trim() === "") {
    alert("이름을 입력해주세요.");
    return;
  }

  if (userPhone.trim() === "") {
    alert("전화번호를 입력해주세요.");
    return;
  }

  if (userEmail.trim() === "") {
    alert("이메일을 입력해주세요.");
    return;
  }

  // 가입 완료 페이지
  document.body.innerHTML = `
    <div id="welcome">
      <h2>${userName}님, 가입을 환영합니다!</h2>
      <p><strong>아이디:</strong> ${userId}</p>
      <p><strong>성별:</strong> ${genderText}</p>
      <p><strong>이메일:</strong> ${userEmail}</p>
      <p><strong>주소:</strong> ${userAddress || "입력 안함"}</p>
      <button type="button" class="btn btn-primary mt-3" onclick="location.href='admin.html'">
        메인페이지
      </button>
    </div>
  `;
});

// mm
// 다크모드
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("color-theme") || "light";
  document.documentElement.setAttribute("color-theme", savedTheme);
});

const toggleButton = document.querySelector(".dark-light-toggle");

toggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("color-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("color-theme", newTheme);
  localStorage.setItem("color-theme", newTheme);
});

const toggleBtn = document.querySelector(".dark-light-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // 상태 저장
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
