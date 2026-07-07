const categories = {
  animal: "동물",
  fashion: "패션",
  food: "푸드",
  study: "공부",
  music: "음악",
  travel: "여행",
  fitness: "운동",
  interior: "인테리어"
};

const defaultScores = Object.fromEntries(Object.keys(categories).map((key) => [key, 0]));

const posts = [
  ["고양이 일상", "animal", "느긋하게 하루를 보내는 고양이의 작은 순간", "images/animal-01-cat-daily.jpg"],
  ["강아지 산책", "animal", "공원에서 만난 반려견 산책 기록", "images/animal-01-dog-walk.jpg"],
  ["햄스터 집", "animal", "작은 집을 포근하게 꾸민 햄스터 공간", "images/animal-03-hamster-cage.jpg"],
  ["공부 책상", "study", "집중하기 좋게 정리한 책상 셋업", "images/study-01-study-desk.jpg"],
  ["스터디 플래너", "study", "오늘의 목표를 나누어 기록하는 플래너", "images/study-02-study-planner.jpg"],
  ["태블릿 필기", "study", "중요한 개념을 보기 좋게 정리한 디지털 노트", "images/study-03-tablet-notes.jpg"],
  ["헤드폰 추천", "music", "공부와 이동 시간에 쓰기 좋은 사운드", "images/music-01-headphones.jpg"],
  ["콘서트 조명", "music", "무대의 빛과 분위기를 오래 남긴 기록", "images/music-02-concert-lights.jpg"],
  ["새벽 플레이리스트", "music", "밤과 새벽 사이에 어울리는 음악 감성", "images/music-03-playlist-mood.jpg"],
  ["디저트 카페", "food", "달콤한 케이크와 음료가 있는 카페 기록", "images/food-01-dessert-cafe.jpg"],
  ["편의점 간식", "food", "가볍게 고르는 오늘의 간식 조합", "images/food-02-convenience-snack.jpg"],
  ["매운 면 요리", "food", "얼얼하고 진한 맛이 당기는 날의 음식", "images/food-03-spicy-noodles.jpg"],
  ["데일리룩", "fashion", "오늘 분위기에 맞춘 편안한 착장", "images/fashion-01-outfit.jpg"],
  ["봄 코디", "fashion", "밝은 계절감으로 완성한 봄 스타일", "images/fashion-02-spring-fashion.jpg"],
  ["가방 언박싱", "fashion", "수납과 포인트를 함께 잡는 가방 기록", "images/fashion-03-bag-unboxing.jpg"],
  ["제주 여행", "travel", "자연과 바람 사이를 걷는 여행 기록", "images/travel-01-jeju-travel.jpg"],
  ["바다 여행", "travel", "파도 소리를 담은 푸른 주말 기록", "images/travel-02-beach-travel.jpg"],
  ["공항 브이로그", "travel", "출발 전 설렘이 담긴 공항의 시간", "images/travel-03-airport-vlog.jpg"],
  ["러닝 기록", "fitness", "오늘의 걸음과 페이스를 남기는 운동 루틴", "images/fitness-01-running.jpg"],
  ["헬스장 루틴", "fitness", "차근차근 쌓아가는 운동 기록", "images/fitness-02-gym-routine.jpg"],
  ["홈트 챌린지", "fitness", "방 안에서 시작하는 짧은 운동 습관", "images/fitness-03-home-workout.jpg"],
  ["방 꾸미기", "interior", "취향이 드러나는 포근한 침실 공간", "images/interior-01-bedroom-decor.jpg"],
  ["무드등", "interior", "조명 하나로 달라지는 방의 분위기", "images/interior-02-mood-lamp.jpg"],
  ["책상 셋업", "interior", "집중과 취향을 함께 담은 데스크 구성", "images/interior-03-desk-setup.jpg"]
].map(([title, category, caption, image], index) => ({
  id: index + 1,
  title,
  category,
  caption,
  image,
  imageStyle: category
}));

const keywordRules = {
  animal: ["고양이", "강아지", "햄스터", "반려", "동물", "산책"],
  fashion: ["코디", "패션", "가방", "니트", "셔츠", "착장"],
  food: ["카페", "디저트", "라떼", "맛집", "도시락", "케이크"],
  study: ["공부", "시험", "필기", "플래너", "책상", "노트"],
  music: ["노래", "음악", "플레이리스트", "콘서트", "이어폰"],
  travel: ["여행", "제주", "부산", "공항", "바다"],
  fitness: ["운동", "홈트", "요가", "러닝", "헬스"],
  interior: ["방", "인테리어", "조명", "침대", "수납", "책상"]
};

const concernRules = [
  {
    label: "불안",
    words: ["불안", "걱정", "초조", "무서", "긴장", "떨려"],
    reply: "그런 마음 들면 진짜 힘들지. 지금 바로 해결하지 않아도 괜찮아. 우선 뭐가 제일 걱정되는지 하나씩 말해줘."
  },
  {
    label: "피로",
    words: ["힘들", "피곤", "지쳤", "번아웃", "쉬고", "무기력"],
    reply: "많이 지쳐 보인다. 계속 버티기만 하면 마음이 더 무거워질 수 있어. 오늘은 아주 작은 것 하나만 해도 충분해."
  },
  {
    label: "관계",
    words: ["친구", "관계", "싸웠", "서운", "외로", "혼자"],
    reply: "관계 고민은 작은 말 하나도 크게 남아서 더 복잡하게 느껴질 수 있어. 있었던 일을 천천히 말해줘도 돼."
  },
  {
    label: "진로",
    words: ["진로", "미래", "성적", "대학", "꿈", "입시"],
    reply: "미래가 막막하게 느껴질 때가 있지. 지금 답을 완벽히 정하지 않아도 돼. 어떤 선택지가 제일 마음에 걸리는지 같이 정리해보자."
  }
];

const quickMessages = [
  "요즘 고양이랑 강아지 영상을 자주 봐",
  "시험 기간이라 공부 플래너가 필요해",
  "감성 플레이리스트 자주 들어",
  "디저트 카페 찾아보는 중이야",
  "요즘 좀 불안하고 걱정이 많아",
  "친구 관계 때문에 조금 서운해",
  "진로가 막막해서 고민이야",
  "그냥 너무 지친 느낌이 들어"
];

const ads = {
  animal: {
    brand: "PoriPet",
    productType: "반려동물 케어",
    postCopy: "우리 집 작은 친구를 위한 하루 루틴",
    reelsCopy: "산책과 휴식 사이에 필요한 케어",
    hashtags: "#반려동물 #고양이 #강아지",
    strategy: "돌봄과 애정을 연결해 보호 욕구와 안정감을 자극합니다.",
    desire: "애정, 보호, 안정감"
  },
  fashion: {
    brand: "DailyFit",
    productType: "스타일 추천",
    postCopy: "오늘의 분위기를 완성하는 한 벌",
    reelsCopy: "나답게 보이는 가장 쉬운 방법",
    hashtags: "#데일리룩 #코디 #패션",
    strategy: "옷을 단순한 상품이 아니라 자기표현의 수단으로 보여줍니다.",
    desire: "자기표현, 인정 욕구, 이미지 관리"
  },
  food: {
    brand: "BiteNow",
    productType: "푸드 딜리버리",
    postCopy: "지금 당기는 맛, 문 앞까지",
    reelsCopy: "참을 필요 없이 지금 바로",
    hashtags: "#디저트 #카페 #배달",
    strategy: "즉각적인 만족과 보상을 강조해 클릭 욕구를 높입니다.",
    desire: "즉각적 만족, 편리함"
  },
  study: {
    brand: "FocusNote",
    productType: "학습 플래너",
    postCopy: "오늘의 집중을 내일의 실력으로",
    reelsCopy: "시험 기간, 집중은 도구에서 시작된다",
    hashtags: "#공부루틴 #플래너 #집중",
    strategy: "현재의 노력을 미래의 성장과 연결합니다.",
    desire: "성취, 성장, 불안 해소"
  },
  music: {
    brand: "MoodWave",
    productType: "음악 큐레이션",
    postCopy: "내 기분에 맞춰 흐르는 음악",
    reelsCopy: "오늘 감정에 맞는 플레이리스트",
    hashtags: "#플레이리스트 #감성 #음악추천",
    strategy: "감정과 취향을 읽어주는 듯한 문구로 공감을 유도합니다.",
    desire: "감정 공감, 위로, 취향 표현"
  },
  travel: {
    brand: "TripOn",
    productType: "여행 예약",
    postCopy: "평범한 하루에서 잠시 떠나는 시간",
    reelsCopy: "복잡한 일상에서 잠깐 벗어나기",
    hashtags: "#여행 #바다 #주말",
    strategy: "일상의 피로를 여행의 해방감과 보상으로 연결합니다.",
    desire: "탈출, 휴식, 보상"
  },
  fitness: {
    brand: "MoveUp",
    productType: "운동 루틴",
    postCopy: "오늘의 한 걸음이 변화를 만든다",
    reelsCopy: "운동을 미루던 나에게 필요한 시작",
    hashtags: "#운동루틴 #홈트 #러닝",
    strategy: "작은 실천을 미래의 신체 변화와 연결합니다.",
    desire: "자기관리, 변화, 건강"
  },
  interior: {
    brand: "Roomly",
    productType: "공간 스타일링",
    postCopy: "내 취향이 머무는 공간",
    reelsCopy: "조명 하나로 방의 분위기가 달라진다",
    hashtags: "#방꾸미기 #무드등 #인테리어",
    strategy: "공간을 취향과 정체성의 표현으로 제시합니다.",
    desire: "취향 표현, 감성, 안정감"
  }
};

const fallbackAd = {
  brand: "AdMirror Basic",
  productType: "문맥 기반 기본 광고",
  postCopy: "아직 관심사를 분석 중입니다",
  reelsCopy: "게시물을 보거나 DM에서 관심사를 말해보세요",
  hashtags: "#가상광고 #문맥기반 #AdMirror",
  strategy: "아직 누적된 활동이 없어 중립적인 문구를 보여줍니다.",
  desire: "정보 탐색, 비교 관찰"
};

const iconMap = {
  lip: "◒",
  perfume: "♧",
  pouch: "▣",
  shirt: "◇",
  bag: "◈",
  knit: "▤",
  cake: "◐",
  drink: "♢",
  lunch: "◧",
  note: "▥",
  desk: "▦",
  memo: "▨",
  music: "♪",
  ticket: "▱",
  earbud: "♬",
  island: "△",
  wave: "≈",
  plane: "✦",
  dumbbell: "═",
  mat: "▭",
  shoe: "◁",
  lamp: "◌",
  bed: "▰",
  box: "□"
};

const storageKey = "adMirrorState";
const state = loadState();
let selectedPost = null;

const feedGrid = document.querySelector("#feedGrid");
const feedStatus = document.querySelector("#feedStatus");
const feedScrollbar = document.querySelector("#feedScrollbar");
const feedScrollThumb = document.querySelector("#feedScrollThumb");
const postModal = document.querySelector("#postModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalCaption = document.querySelector("#modalCaption");
const modalCategory = document.querySelector("#modalCategory");
const chatWindow = document.querySelector("#chatWindow");
const dmForm = document.querySelector("#dmForm");
const dmInput = document.querySelector("#dmInput");
const quickActions = document.querySelector("#quickActions");
const adContent = document.querySelector("#adContent");
const personalToggle = document.querySelector("#personalToggle");

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) {
    return { scores: { ...defaultScores }, logs: [], messages: [] };
  }

  try {
    const parsed = JSON.parse(saved);
    return {
      scores: { ...defaultScores, ...parsed.scores },
      logs: parsed.logs || [],
      messages: parsed.messages || []
    };
  } catch {
    return { scores: { ...defaultScores }, logs: [], messages: [] };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function addScore(category, amount, logText) {
  state.scores[category] += amount;
  state.logs.unshift(logText);
  state.logs = state.logs.slice(0, 30);
  saveState();
  renderAds();
  updateFeedStatus();
}

function getTopCategory() {
  const entries = Object.entries(state.scores);
  const top = entries.reduce((best, current) => (current[1] > best[1] ? current : best), entries[0]);
  return top[1] > 0 ? top[0] : null;
}

function renderFeed() {
  feedGrid.innerHTML = posts.map((post) => `
    <button class="post-tile ${post.imageStyle}" type="button" data-id="${post.id}" aria-label="${post.title}">
      <img class="post-image" src="${post.image}" alt="">
    </button>
  `).join("");
  updateFeedStatus();
  requestAnimationFrame(updateFeedScrollbar);
}

function updateFeedStatus() {
  const topCategory = getTopCategory();
  feedStatus.textContent = topCategory
    ? `현재 관심사: ${categories[topCategory]} ${state.scores[topCategory]}p`
    : "관심 아이템을 골라보세요";
}

function openPost(post) {
  selectedPost = post;
  addScore(post.category, 2, `${categories[post.category]} 게시물 클릭: ${post.category} +2`);
  modalImage.className = `modal-image ${post.imageStyle}`;
  modalImage.innerHTML = `<img src="${post.image}" alt="">`;
  modalTitle.textContent = post.title;
  modalCaption.textContent = post.caption;
  modalCategory.textContent = categories[post.category];
  postModal.classList.add("open");
  postModal.setAttribute("aria-hidden", "false");
}

function closePost() {
  postModal.classList.remove("open");
  postModal.setAttribute("aria-hidden", "true");
}

function renderQuickActions() {
  quickActions.innerHTML = quickMessages.map((message) => `
    <button type="button" data-message="${message}">${message}</button>
  `).join("");
}

function addMessage(role, text) {
  state.messages.push({ role, text });
  state.messages = state.messages.slice(-18);
  saveState();
  renderMessages();
}

function renderMessages() {
  const initial = state.messages.length ? "" : `
    <div class="bubble friend">안녕. 관심 있는 것뿐 아니라 요즘 고민도 편하게 말해줘. 네 말 속 표현이 어떻게 해석되는지 같이 볼게.</div>
  `;
  chatWindow.innerHTML = initial + state.messages.map((message) => `
    <div class="bubble ${message.role}">${message.text}</div>
  `).join("");
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function analyzeMessage(text) {
  const detected = [];
  const concerns = [];

  concernRules.forEach((rule) => {
    const foundWords = rule.words.filter((word) => text.includes(word));
    if (foundWords.length) {
      concerns.push({ ...rule, words: foundWords });
    }
  });

  Object.entries(keywordRules).forEach(([category, words]) => {
    const foundWords = words.filter((word) => text.includes(word));
    if (foundWords.length) {
      detected.push({ category, words: foundWords });
      foundWords.forEach((word) => {
        addScore(category, 5, `DM 키워드 '${word}' 감지: ${category} +5`);
      });
    }
  });

  if (concerns.length) {
    const concern = concerns[0];
    const interestText = detected.length
      ? ` 그리고 ${detected.map((item) => categories[item.category]).join(", ")} 쪽 관심 표현도 함께 보여.`
      : "";
    return `${concern.reply}${interestText}`;
  }

  if (!detected.length) {
    return "아직 뚜렷한 관심사나 고민 키워드는 잘 안 보여. 괜찮아, 그냥 지금 떠오르는 말을 더 편하게 적어줘.";
  }

  const labels = detected.map((item) => categories[item.category]).join(", ");
  return `${labels} 쪽 관심사가 보여. 광고 화면에서 문구와 전략이 어떻게 바뀌는지 확인해봐.`;
}

function handleDmSubmit(text) {
  const cleanText = text.trim();
  if (!cleanText) return;

  addMessage("user", cleanText);
  const reply = analyzeMessage(cleanText);
  window.setTimeout(() => addMessage("friend", reply), 240);
  dmInput.value = "";
}

function renderAds() {
  const personalized = personalToggle.checked;
  const topCategory = personalized ? getTopCategory() : null;
  const selectedAd = topCategory ? ads[topCategory] : fallbackAd;
  const selectedClass = topCategory || "default-ad";
  const highestText = topCategory ? `${categories[topCategory]} (${state.scores[topCategory]}점)` : "분석 중";
  const reason = personalized && topCategory
    ? `사용자는 ${categories[topCategory]} 카테고리에 가장 높은 반응을 보였습니다. 게시물 클릭, 좋아요, 저장, DM 키워드 감지 기록이 누적되어 ${selectedAd.brand}의 ${selectedAd.productType} 광고가 선택되었습니다.`
    : personalized
      ? "아직 관심사를 분석 중입니다. 탐색 피드에서 아이템을 누르거나 DM에서 관심사를 말해보세요."
      : "개인화 광고가 꺼져 있어 현재 콘텐츠 맥락 또는 기본 광고를 기준으로 광고가 표시됩니다.";

  adContent.innerHTML = `
    <div class="ad-summary">
      <p>현재 가장 높은 관심사: <strong>${highestText}</strong></p>
    </div>

    <article class="ad-card">
      <div class="ad-visual ${selectedClass}">
        <div class="ad-visual-content">
          <span class="sponsored">Sponsored</span>
          <h3>${selectedAd.brand}</h3>
          <p>${selectedAd.productType}</p>
        </div>
      </div>
      <div class="ad-copy">
        <h3>${selectedAd.postCopy}</h3>
        <p>${selectedAd.hashtags}</p>
      </div>
    </article>

    <article class="ad-card reels-card">
      <div class="ad-visual ${selectedClass}">
        <div class="ad-visual-content">
          <span class="sponsored">광고</span>
          <h3>${selectedAd.reelsCopy}</h3>
          <p>${selectedAd.brand}</p>
        </div>
      </div>
      <div class="ad-copy">
        <p>${selectedAd.hashtags}</p>
      </div>
    </article>

    <section class="info-box">
      <h3>왜 이 광고가 나왔나?</h3>
      <p>${reason}</p>
    </section>

    <section class="info-box">
      <h3>광고 언어 전략</h3>
      <p>${selectedAd.strategy}</p>
      <p><strong>자극하는 욕망과 가치:</strong> ${selectedAd.desire}</p>
    </section>

    <section class="info-box">
      <h3>사용자 관심사 점수</h3>
      <div class="bars">${renderBars()}</div>
    </section>

    <section class="log-box">
      <h3>분석 로그</h3>
      ${renderLogs()}
    </section>

    <section class="research-box">
      <h3>탐구 설명</h3>
      <p>이 시뮬레이터는 실제 개인정보를 수집하지 않고, 가상의 SNS 활동만을 바탕으로 맞춤형 광고가 만들어지는 과정을 단순화해 보여줍니다.</p>
      <p>탐구 질문: SNS에서 사용자의 게시물 선택과 DM 표현에 따라 광고 문구는 어떤 방식으로 달라지며, 각 광고는 어떤 욕망과 가치를 자극하는가?</p>
    </section>
  `;
}

function renderBars() {
  const maxScore = Math.max(1, ...Object.values(state.scores).map((score) => Math.max(score, 0)));
  return Object.entries(categories).map(([key, label]) => {
    const score = state.scores[key];
    const width = Math.max(0, score) / maxScore * 100;
    return `
      <div class="bar-row">
        <span>${label}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
        <strong>${score}</strong>
      </div>
    `;
  }).join("");
}

function renderLogs() {
  if (!state.logs.length) {
    return `<p class="empty-text">아직 기록된 활동이 없습니다.</p>`;
  }

  return `<ul>${state.logs.slice(0, 5).map((log) => `<li>${log}</li>`).join("")}</ul>`;
}

function resetActivity() {
  state.scores = { ...defaultScores };
  state.logs = [];
  state.messages = [];
  saveState();
  renderMessages();
  renderAds();
  updateFeedStatus();
}

function getFeedScrollMetrics() {
  const arrowSpace = 48;
  const trackHeight = Math.max(1, feedScrollbar.clientHeight - arrowSpace);
  const maxScroll = Math.max(0, feedGrid.scrollHeight - feedGrid.clientHeight);
  const ratio = feedGrid.clientHeight / Math.max(feedGrid.scrollHeight, 1);
  const thumbHeight = maxScroll ? Math.max(42, Math.round(trackHeight * ratio)) : trackHeight;
  const maxThumbTop = Math.max(0, trackHeight - thumbHeight);

  return { arrowSpace, trackHeight, maxScroll, thumbHeight, maxThumbTop };
}

function updateFeedScrollbar() {
  const { arrowSpace, maxScroll, thumbHeight, maxThumbTop } = getFeedScrollMetrics();
  const scrollRatio = maxScroll ? feedGrid.scrollTop / maxScroll : 0;
  const top = Math.round(arrowSpace / 2 + scrollRatio * maxThumbTop);

  feedScrollThumb.style.height = `${thumbHeight}px`;
  feedScrollThumb.style.transform = `translate(-50%, ${top}px)`;
  feedScrollbar.classList.toggle("is-disabled", maxScroll === 0);
}

function scrollFeedByPage(direction) {
  feedGrid.scrollBy({
    top: direction * Math.max(120, feedGrid.clientHeight * 0.72),
    behavior: "smooth"
  });
}

function setupFeedScrollbar() {
  let dragging = false;
  let dragStartY = 0;
  let dragStartScrollTop = 0;

  feedGrid.addEventListener("scroll", updateFeedScrollbar);
  window.addEventListener("resize", updateFeedScrollbar);

  feedScrollbar.addEventListener("click", (event) => {
    if (event.target === feedScrollThumb) return;
    const rect = feedScrollbar.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    scrollFeedByPage(event.clientY > midpoint ? 1 : -1);
  });

  feedScrollThumb.addEventListener("pointerdown", (event) => {
    const { maxScroll } = getFeedScrollMetrics();
    if (!maxScroll) return;

    dragging = true;
    dragStartY = event.clientY;
    dragStartScrollTop = feedGrid.scrollTop;
    feedScrollThumb.setPointerCapture(event.pointerId);
    feedScrollThumb.classList.add("is-dragging");
    event.preventDefault();
  });

  feedScrollThumb.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    const { maxScroll, maxThumbTop } = getFeedScrollMetrics();
    const deltaY = event.clientY - dragStartY;
    feedGrid.scrollTop = dragStartScrollTop + (deltaY / Math.max(1, maxThumbTop)) * maxScroll;
  });

  feedScrollThumb.addEventListener("pointerup", (event) => {
    dragging = false;
    feedScrollThumb.releasePointerCapture(event.pointerId);
    feedScrollThumb.classList.remove("is-dragging");
  });

  feedScrollThumb.addEventListener("pointercancel", () => {
    dragging = false;
    feedScrollThumb.classList.remove("is-dragging");
  });
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.target}`).classList.add("active");
    document.body.classList.toggle("feed-screen", button.dataset.target === "feedPanel");
    renderAds();
  });
});

feedGrid.addEventListener("click", (event) => {
  const tile = event.target.closest(".post-tile");
  if (!tile) return;
  const post = posts.find((item) => item.id === Number(tile.dataset.id));
  openPost(post);
});

document.querySelector("#modalClose").addEventListener("click", closePost);
postModal.addEventListener("click", (event) => {
  if (event.target === postModal) closePost();
});

document.querySelector("#likeBtn").addEventListener("click", () => {
  if (selectedPost) addScore(selectedPost.category, 3, `${categories[selectedPost.category]} 게시물 좋아요: ${selectedPost.category} +3`);
});

document.querySelector("#saveBtn").addEventListener("click", () => {
  if (selectedPost) addScore(selectedPost.category, 4, `${categories[selectedPost.category]} 게시물 저장: ${selectedPost.category} +4`);
});

document.querySelector("#hideBtn").addEventListener("click", () => {
  if (selectedPost) addScore(selectedPost.category, -2, `${categories[selectedPost.category]} 게시물 관심 없음: ${selectedPost.category} -2`);
});

dmForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleDmSubmit(dmInput.value);
});

quickActions.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button) handleDmSubmit(button.dataset.message);
});

personalToggle.addEventListener("change", renderAds);
document.querySelector("#resetBtn").addEventListener("click", resetActivity);

renderFeed();
setupFeedScrollbar();
renderQuickActions();
renderMessages();
renderAds();
document.body.classList.add("feed-screen");
