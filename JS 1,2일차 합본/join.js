const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userId = event.target.id.value;
  let userPw1 = event.target.pw1.value;
  let userPw2 = event.target.pw2.value;
  let userName = event.target.name.value;
  let userPhone = event.target.phone.value;
  let userPosition = event.target.position.value;
  let userGender = event.target.gender.value;
  let userEmail = event.target.email.value;
  let userIntro = event.target.intro.value;

  if (userId.length < 6) {
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요");
    return;
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  // 가입이 잘 되었다! 환영
  document.body.innerHTML = `
    <div id="welcome">
      <h2>${userName}님, 가입을 환영합니다!</h2>
      <p><strong>아이디:</strong> ${userId}</p>
      <p><strong>이메일:</strong> ${userEmail || "입력 안함"}</p>
      <p><strong>전화번호:</strong> ${userPhone || "입력 안함"}</p>
      <p><strong>희망 직무:</strong> ${userPosition}</p>
      <p><strong>성별:</strong> ${userGender === "male" ? "남자" : "여자"}</p>
      <p><strong>자기소개:</strong></p>
      <div style="white-space: pre-line; border: 1px solid #ccc; padding: 10px; border-radius: 5px;">${
        userIntro || "없음"
      }</div>
    </div>
  `;
});
