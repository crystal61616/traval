document.addEventListener('DOMContentLoaded', function() {
  // 이미지 슬라이드
  let currentIndex = 0;
  const images = document.querySelectorAll('.slider-wrapper img');
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const totalImages = images.length;

  function moveSlide() {
      currentIndex = (currentIndex + 1) % totalImages; // 슬라이드 순환
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // 3초마다 이미지 이동
  setInterval(moveSlide, 3000);

  // 게시글 추가 기능
  const postForm = document.getElementById('postForm');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');
  const postsContainer = document.getElementById('posts');

  // 게시글 추가 함수
  function addPost(title, content) {
      const postCard = document.createElement('div');
      postCard.classList.add('post-card');

      postCard.innerHTML = `
          <h3>${title}</h3>
          <p>${content}</p>
          <a href="#">자세히 보기</a>
      `;

      postsContainer.appendChild(postCard);
  }

  // 폼 제출 이벤트 리스너
  postForm.addEventListener('submit', function(event) {
      event.preventDefault(); // 폼의 기본 동작(페이지 새로고침) 방지

      const title = titleInput.value;
      const content = contentInput.value;

      // 제목과 내용이 비어있지 않으면 게시글 추가
      if (title && content) {
          addPost(title, content);

          // 폼 초기화
          titleInput.value = '';
          contentInput.value = '';
      } else {
          alert('제목과 내용을 모두 입력해주세요.');
      }
  });
});
