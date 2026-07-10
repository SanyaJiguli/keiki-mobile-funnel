const ASSETS = {
  logo: "./assets/keiki-logo.svg",
  didi: "./assets/didi.png",
  readySchool: "./assets/family-ready-school.png",
  discipline: "./assets/family-discipline.png",
  parenting: "./assets/family-parenting.png",
  internetSafety: "./assets/family-internet-safety.png",
};

const state = {
  step: 0,
  ageBand: null,
  gender: null,
  childName: "",
  interests: [],
  setup: null,
  playStyle: null,
  familyTime: null,
  email: "",
  skillAnswers: {},
  skillScores: {
    language: 0,
    math: 0,
    logic: 0,
    cognitive: 0,
    social: 0,
  },
};

const skillQuestionBank = {
  "1-2": [
    { id: "words_q1_1_2", area: "language", label: "Words · Q1", text: "My child reacts to familiar words or their name" },
    { id: "gestures_q2_1_2", area: "language", label: "Gestures · Q2", text: "My child points, waves or shows what they want" },
    { id: "sounds_q3_1_2", area: "language", label: "Sounds · Q3", text: "My child imitates sounds or uses a few simple words" },
    { id: "objects_q4_1_2", area: "cognitive", label: "Objects · Q4", text: "My child matches, stacks or puts objects in and out" },
    { id: "play_q5_1_2", area: "social", label: "Play · Q5", text: "My child enjoys simple shared or pretend play" },
    { id: "routine_q6_1_2", area: "social", label: "Routine · Q6", text: "My child follows one simple cue in a familiar routine" },
    { id: "words_q7_1_2", area: "language", label: "Words · Q7", text: "My child points to a familiar picture, toy or body part when named" },
    { id: "thinking_q8_1_2", area: "cognitive", label: "Thinking · Q8", text: "My child looks for a toy that is partly hidden" },
    { id: "play_q9_1_2", area: "social", label: "Play · Q9", text: "My child brings a toy or book to share with me" },
    { id: "focus_q10_1_2", area: "logic", label: "Focus · Q10", text: "My child stays with one tiny activity for a few minutes" },
  ],
  "3-4": [
    { id: "language_q1", area: "language", label: "Language · Q1", text: "My child can tell what is happening in a picture" },
    { id: "language_q2", area: "language", label: "Language · Q2", text: "My child notices letters in books, signs or their name" },
    { id: "language_q3", area: "language", label: "Language · Q3", text: "My child can hear the first sound in a word" },
    { id: "math_q1", area: "math", label: "Math · Q1", text: "My child can count 3 small objects" },
    { id: "math_q2", area: "math", label: "Math · Q2", text: "My child can recognize basic shapes" },
    { id: "math_q3", area: "math", label: "Math · Q3", text: "My child can tell which group has more" },
    { id: "logic_q1", area: "logic", label: "Logic · Q1", text: "My child can follow a 2-step task" },
    { id: "logic_q2", area: "logic", label: "Logic · Q2", text: "My child can sort objects by color or shape" },
    { id: "logic_q3", area: "logic", label: "Logic · Q3", text: "My child can complete a simple puzzle with help" },
    { id: "cognitive_q1", area: "cognitive", label: "Cognitive · Q1", text: "My child can name basic colors" },
    { id: "cognitive_q2", area: "cognitive", label: "Cognitive · Q2", text: "My child can match objects by color or shape" },
    { id: "cognitive_q3", area: "cognitive", label: "Cognitive · Q3", text: "My child can group similar objects together" },
    { id: "social_q1", area: "social", label: "Social · Q1", text: "My child plays near or with other children" },
    {
      id: "play_style",
      area: "social",
      label: "Play style · Q2",
      text: "My child likes to learn...",
      answers: [
        ["with_others", "With others", 1],
        ["independently", "Independently", 1],
        ["mixed", "A mix of both", 1],
      ],
      writes: "playStyle",
    },
  ],
  "5-6": [
    { id: "reading_q1_5_6", area: "language", label: "Early reading · Q1", text: "My child recognizes many letters in their name, books or signs" },
    { id: "sounds_q2_5_6", area: "language", label: "Sounds · Q2", text: "My child can hear rhymes or the first sound in simple words" },
    { id: "story_q3_5_6", area: "language", label: "Story · Q3", text: "My child can retell what happened first, next and last" },
    { id: "writing_q4_5_6", area: "language", label: "Writing · Q4", text: "My child tries to write their name or copy simple letters" },
    { id: "math_q5_5_6", area: "math", label: "Math · Q5", text: "My child can count objects one by one up to 10" },
    { id: "math_q6_5_6", area: "math", label: "Math · Q6", text: "My child recognizes written numbers from 1 to 10" },
    { id: "math_q7_5_6", area: "math", label: "Math · Q7", text: "My child can compare more, fewer and same" },
    { id: "logic_q8_5_6", area: "logic", label: "Logic · Q8", text: "My child can finish a simple pattern or explain what comes next" },
    { id: "instructions_q9_5_6", area: "logic", label: "Instructions · Q9", text: "My child can follow a 3-step direction" },
    { id: "focus_q10_5_6", area: "logic", label: "Focus · Q10", text: "My child can stay with one short activity for about 10 minutes" },
    { id: "social_q11_5_6", area: "social", label: "Social · Q11", text: "My child can take turns in a simple game" },
    { id: "confidence_q12_5_6", area: "social", label: "Confidence · Q12", text: "My child keeps trying when a task is tricky" },
  ],
  "7+": [
    { id: "reading_q1_7", area: "language", label: "Reading · Q1", text: "My child reads short sentences" },
    { id: "stories_q2_7", area: "language", label: "Stories · Q2", text: "My child explains what happened in a story" },
    { id: "words_q3_7", area: "language", label: "Words · Q3", text: "My child can explain a new word in simple language" },
    { id: "math_q4_7", area: "math", label: "Math · Q4", text: "My child solves addition or subtraction within 20" },
    { id: "math_q5_7", area: "math", label: "Math · Q5", text: "My child compares numbers and chooses bigger or smaller" },
    { id: "logic_q6_7", area: "logic", label: "Logic · Q6", text: "My child solves puzzles independently" },
    { id: "focus_q7_7", area: "logic", label: "Focus · Q7", text: "My child follows 3-step instructions without repeating each step" },
    { id: "independence_q8_7", area: "social", label: "Independence · Q8", text: "My child starts a short task without constant help" },
    { id: "reading_q9_7", area: "social", label: "Reading · Q9", text: "My child reads for about 10 minutes with short breaks" },
    { id: "writing_q10_7", area: "language", label: "Writing · Q10", text: "My child writes a short answer or copies a sentence" },
    { id: "math_q11_7", area: "math", label: "Math · Q11", text: "My child solves a simple word problem with support" },
    { id: "confidence_q12_7", area: "logic", label: "Confidence · Q12", text: "My child checks an answer or tries another strategy" },
  ],
};

const ageBranchConfig = {
  "1-2": {
    title: "For 1-2, let’s read tiny development signals",
    copy: "At this age, we look for simple signals: familiar words, pointing, shared play, matching, and small routines.",
    support: "The goal is to choose soft parent-led activities, not to compare milestones.",
    labels: {
      language: "Early communication",
      cognitive: "Object play and thinking",
      social: "Shared play and routine",
      logic: "Tiny focus",
    },
    icons: { language: "💬", cognitive: "🧸", social: "🤝", logic: "✨" },
    summary: "Soft parent-led play that starts from tiny signals.",
    ageFit: "tiny guided moments",
    focusSteps: {
      language: "familiar words and naming games",
      cognitive: "matching and object play",
      social: "shared play and simple routines",
      logic: "tiny focus moments",
    },
    productCards: [
      ["Word games", "Familiar names, sounds and first words"],
      ["Shared-play cards", "Gentle tasks to do together"],
      ["Tiny routines", "Small moments that fit the day"],
    ],
  },
  "3-4": {
    title: "For 3-4, let’s check school-readiness basics",
    copy: "At this age, short playful tasks work better than long lessons. We’ll check early words, colors, counting, simple instructions, and play.",
    support: "If something is “not yet”, that’s okay. It only helps us choose where to begin.",
    labels: {
      language: "Listening and early words",
      math: "Numbers and shapes",
      logic: "Step-by-step thinking",
      cognitive: "Colors and stories",
      social: "Learning through play",
    },
    icons: { language: "📖", math: "🔢", logic: "🧩", cognitive: "🎨", social: "💬" },
    summary: "Short playful activities for your day.",
    ageFit: "short playful tasks",
    focusSteps: {
      language: "stories and first sounds",
      math: "counting and shapes",
      logic: "puzzles and simple steps",
      cognitive: "colors and picture tasks",
      social: "play routines and confidence",
    },
    productCards: [
      ["Reading games", "Picture stories, sounds and first words"],
      ["Fun worksheets", "Printable tasks matched to age"],
      ["Daily plan", "Small steps that fit family time"],
    ],
  },
  "5-6": {
    title: "For 5-6, let’s prepare for confident school start",
    copy: "At this age, kids are building school-readiness: stories, letter sounds, number sense, directions, and short tasks.",
    support: "We’ll choose the right first challenge, not grade your child or compare them with classmates.",
    labels: {
      language: "Reading and story skills",
      math: "Numbers to 10",
      logic: "School-ready skills",
      social: "Turns and confidence",
    },
    icons: { language: "📚", math: "🔢", logic: "🧭", social: "🌟" },
    summary: "A confident school-start plan with one clear first challenge.",
    ageFit: "school-ready practice",
    focusSteps: {
      language: "letters, sounds, and story order",
      math: "numbers to 10 and comparing",
      logic: "directions, patterns, and focus",
      social: "turn-taking and confidence",
    },
    productCards: [
      ["Letter games", "Sounds, stories and school-start skills"],
      ["Ready worksheets", "Short printable tasks for practice"],
      ["Daily challenge", "Clear wins without pressure"],
    ],
  },
  "7+": {
    title: "For 7+, let’s support independent learning",
    copy: "At this age, kids can handle more independent practice. We’ll check reading, stories, math, and puzzle confidence.",
    support: "The plan should feel like targeted practice, not a babyish path.",
    labels: {
      language: "Reading and writing",
      math: "Math practice",
      logic: "Focus and logic",
      social: "Independence",
    },
    icons: { language: "📘", math: "➕", logic: "🧠", social: "🚀" },
    summary: "Targeted practice that supports more independent learning.",
    ageFit: "clear skill steps",
    focusSteps: {
      language: "reading, stories, and written answers",
      math: "number practice and word problems",
      logic: "puzzles, strategies, and instructions",
      social: "independent practice rhythm",
    },
    productCards: [
      ["Reading practice", "Stories, sentences and vocabulary"],
      ["Math challenges", "Numbers, word problems and logic"],
      ["Independent steps", "Practice that feels age-appropriate"],
    ],
  },
};

const baseScreens = [
  { id: "start", render: renderStart },
  { id: "age", render: renderAge },
  { id: "gender", render: renderGender },
  { id: "interests", render: renderInterests },
  { id: "setup", render: renderSetup },
  { id: "time", render: renderTime },
  { id: "ageIntro", render: renderAgeIntro },
];

const familyOfferScreens = [
  { id: "family-ready-school", image: ASSETS.readySchool, alt: "Ready for school" },
  { id: "family-discipline", image: ASSETS.discipline, alt: "Discipline your child" },
  { id: "family-parenting", image: ASSETS.parenting, alt: "Parenting" },
  { id: "family-internet-safety", image: ASSETS.internetSafety, alt: "Internet safety" },
];

const loaderReviews = [
  {
    percent: 25,
    status: "Reviewing answers",
    avatar: "🧔",
    name: "Vadym_vad",
    title: "Studying letters by playing it is the best idea",
    body: "My son was very excited about learning letters. I am happy, because it very rarely happened when he opened for new knowledge. Thank you so much )",
  },
  {
    percent: 50,
    status: "Setting goals",
    avatar: "👩🏻",
    name: "Eve_26",
    title: "Best learning game ever",
    body: "At first I was reluctant about purchasing the game so I tried the free subscription. My daughter started learning more every day, and I would recommend it to any parent.",
  },
  {
    percent: 100,
    status: "Adjusting age difficulty",
    avatar: "👩🏽",
    name: "Serene_so",
    title: "Fantastic Learning Fun!",
    body: "My kids adore the engaging games and interactive lessons. It's educational and entertaining, making learning a joy with safe, age-appropriate content.",
  },
];

function screens() {
  const questions = currentQuestions().map((question) => ({
    id: `skill-${question.id}`,
    render: () => renderSkillQuestion(question),
  }));
  return [
    ...baseScreens,
    ...questions,
    { id: "name", render: renderName },
    { id: "plan", render: renderPlanBuilder },
    { id: "profile", render: renderProfile },
    ...familyOfferScreens.map((screen) => ({
      id: screen.id,
      render: () => renderFamilyOffer(screen),
    })),
    { id: "checkout-loader", render: renderCheckoutLoader },
    { id: "email", render: renderEmail },
    { id: "discount", render: renderDiscountScratch },
    { id: "paywall", render: renderPaywall },
  ];
}

function currentScreens() {
  return screens();
}

function currentQuestions() {
  return skillQuestionBank[state.ageBand] || skillQuestionBank["3-4"];
}

function currentAgeConfig() {
  return ageBranchConfig[state.ageBand] || ageBranchConfig["3-4"];
}

function currentScreen() {
  return currentScreens()[state.step];
}

function applyPreviewRoute() {
  const params = new URLSearchParams(window.location.search);
  const requestedScreen = params.get("screen");
  if (!requestedScreen) return;

  const previewAge = params.get("age");
  state.ageBand = skillQuestionBank[previewAge] ? previewAge : state.ageBand || "3-4";
  state.gender ||= "girl";
  state.childName ||= "Mia";
  if (state.interests.length === 0) state.interests = ["books", "games"];
  state.setup ||= "mixed";
  state.familyTime ||= "5-10";
  state.skillScores = {
    language: 1,
    math: 3,
    logic: 2,
    cognitive: 4,
    social: 3,
  };

  const screenIndex = currentScreens().findIndex((screen) => screen.id === requestedScreen);
  if (screenIndex >= 0) state.step = screenIndex;
}

function progressMeta() {
  const flow = currentScreens();
  const visibleIndex = Math.max(state.step, 1);
  const visibleTotal = flow.length - 1;
  return {
    count: `${visibleIndex}/${visibleTotal}`,
    percent: `${Math.round((visibleIndex / visibleTotal) * 100)}%`,
  };
}

function header({ back = true, progress = true } = {}) {
  const meta = progressMeta();
  return `
    <div class="funnel-header ${progress ? "has-progress" : ""}">
      <header class="topbar">
        ${back && state.step > 0 ? backButton() : "<span></span>"}
        <img class="logo" src="${ASSETS.logo}" alt="Keiki" />
        <span></span>
      </header>
      ${
        progress
          ? `<div class="progress-row">
              <div class="progress-track"><div class="progress-fill" style="--progress:${meta.percent}"></div></div>
              <div class="progress-count">${meta.count}</div>
            </div>`
          : ""
      }
    </div>
  `;
}

function backButton() {
  return `
    <button class="icon-button" type="button" data-action="back" aria-label="Back">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  `;
}

function hero(title, { center = false, body = "" } = {}) {
  return `
    <section class="hero ${center ? "center" : ""}">
      <img class="didi" src="${ASSETS.didi}" alt="" />
      <div class="bubble">${title}</div>
      ${body ? `<p class="support-copy">${body}</p>` : ""}
    </section>
  `;
}

function option({ label, value, selected, emoji = "", multi = false }) {
  return `
    <button class="option-button ${selected ? "selected" : ""}" type="button" data-option="${value}" data-multi="${multi}">
      ${emoji ? `<span class="emoji">${emoji}</span>` : ""}
      <span>${label}</span>
    </button>
  `;
}

function cta(label = "Continue", disabled = false) {
  return `<button class="primary-button" type="button" data-action="next" ${disabled ? "disabled" : ""}>${label}</button>`;
}

function legal() {
  return `
    <p class="legal">
      By pressing the "Age" button you confirm you agree to our
      <a href="#">Terms & Conditions</a>, <a href="#">Privacy Policy</a>,
      <a href="#">Subscription Terms</a> and <a href="#">Cookie Policy</a>.
    </p>
  `;
}

function renderStart() {
  return `
    <main class="phone-screen start-screen">
      ${header({ back: false, progress: false })}
      <section class="start-hero">
        <img class="didi start-didi" src="${ASSETS.didi}" alt="" />
        <h1>Let us build a plan that fits your child</h1>
        <p class="start-main-copy">
          A few quick choices will help us shape activities that feel right for your child:
          not too easy, not too hard, and doable for your day.
        </p>
      </section>
      <div class="option-list start-actions">
        <p class="start-compliance">Pass this quiz to personalize your subscription</p>
        ${cta("Continue")}
      </div>
    </main>
  `;
}

function renderAge() {
  const ages = ["1-2", "3-4", "5-6", "7+"];
  return `
    <main class="phone-screen age-screen">
      ${header()}
      ${hero("How old is your child?")}
      <div class="age-actions">
        <div class="option-list grid age-grid">
          ${ages.map((age) => option({ label: age, value: age, selected: state.ageBand === age })).join("")}
        </div>
        ${legal()}
      </div>
    </main>
  `;
}

function renderGender() {
  const items = [
    ["girl", "Girl", "👧"],
    ["boy", "Boy", "👦"],
  ];
  return `
    <main class="phone-screen">
      ${header()}
      ${hero("Choose the gender of your child")}
      <div class="option-list gender-grid">
        ${items.map(([value, label, emoji]) => option({ label, value, emoji, selected: state.gender === value })).join("")}
      </div>
    </main>
  `;
}

function renderInterests() {
  const items = [
    ["cartoons", "Cartoons", "🐙"],
    ["offline", "Offline activities", "📝"],
    ["books", "Reading books", "📘"],
    ["games", "Playing games", "🔷"],
  ];
  return `
    <main class="phone-screen">
      ${header()}
      ${hero("What type of activities does your child like the most?")}
      <div class="option-list">
        ${items
          .map(([value, label, emoji]) =>
            option({ label, value, emoji, multi: true, selected: state.interests.includes(value) }),
          )
          .join("")}
        ${cta("Continue", state.interests.length === 0)}
      </div>
    </main>
  `;
}

function renderSetup() {
  const items = [
    ["independent", "Independent activities"],
    ["together", "Activities we can do together"],
    ["mixed", "A mix of both"],
  ];
  return `
    <main class="phone-screen">
      ${header()}
      ${hero("What learning setup works best for your family?")}
      <div class="option-list">
        ${items.map(([value, label]) => option({ label, value, selected: state.setup === value })).join("")}
      </div>
    </main>
  `;
}

function renderAgeIntro() {
  return `
    <main class="phone-screen age-intro-screen">
      ${header()}
      <section class="age-intro-hero">
        <img class="didi age-intro-didi" src="${ASSETS.didi}" alt="" />
        <h1>${ageIntroTitle()}</h1>
        <p class="age-intro-copy">${ageIntroCopy()}</p>
        <p class="age-intro-note">${ageIntroSupportCopy()}</p>
      </section>
      <div class="option-list">
        ${cta("Continue")}
      </div>
    </main>
  `;
}

function ageIntroTitle() {
  return currentAgeConfig().title;
}

function ageIntroCopy() {
  return currentAgeConfig().copy;
}

function ageIntroSupportCopy() {
  return currentAgeConfig().support;
}

function renderTime() {
  const items = [
    ["5-10", "5-10 min"],
    ["10-20", "10-20 min"],
    ["20-30", "20-30 min"],
    ["45+", "45+ min"],
  ];
  return `
    <main class="phone-screen">
      ${header()}
      ${hero("How much learning time feels realistic for your day?")}
      <div class="option-list">
        ${items.map(([value, label]) => option({ label, value, selected: state.familyTime === value })).join("")}
      </div>
    </main>
  `;
}

function renderName() {
  return `
    <main class="phone-screen">
      ${header()}
      ${hero("What is your child's name?")}
      <div class="form-area">
        <label class="input-label" for="childName">Child's name</label>
        <input id="childName" class="text-input" type="text" value="${escapeHtml(state.childName)}" placeholder="Enter child's name" autocomplete="off" />
      </div>
      <div class="option-list">
        ${cta("Continue", state.childName.trim().length === 0)}
      </div>
    </main>
  `;
}

function renderPlanBuilder() {
  const profile = deriveProfile();
  return `
    <main class="phone-screen plan-screen">
      ${header({ back: false })}
      <section class="plan-stage" aria-live="polite">
        <img class="didi plan-didi" src="${ASSETS.didi}" alt="" />
        <div class="plan-ring" aria-hidden="true">
          <i></i><i></i><i></i><i></i>
        </div>
        <h1>Preparing ${profile.childName}'s plan</h1>
        <p>We are turning your answers into a simple first plan: where to start, what to practice, and how to keep it doable.</p>
        <div class="plan-match">
          <span>Plan match</span>
          <strong>${profile.planReadyLabel}</strong>
          <div><i></i></div>
        </div>
        <div class="plan-calc-list">
          ${profile.buildSteps
            .map(
              (step, index) => `
                <div style="--delay:${index + 1}">
                  <span></span>
                  <strong>${step.label}</strong>
                  <em>${step.value}</em>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>
    </main>
  `;
}

function renderSkillQuestion(question) {
  const selected = state.skillAnswers[question.id];
  const hasSectionImage = startsQuestionSection(question);
  const answers = question.answers || [
    ["not_yet", "Not yet", 0],
    ["maybe", "Maybe", 1],
    ["yes", "Yes", 2],
  ];
  return `
    <main class="phone-screen skill-screen">
      ${header()}
      <section class="skill-copy">
        <div class="theme-label">${questionCategoryLabel(question)}</div>
        <h1>${question.text}</h1>
      </section>
      ${hasSectionImage ? renderSkillIllustration(question) : ""}
      <div class="option-list answer-row">
        ${answers.map(([value, label, score]) => skillAnswerButton(question.id, value, label, score, selected)).join("")}
      </div>
    </main>
  `;
}

function renderSkillIllustration(question) {
  const area = question.area || "language";
  return `
    <div class="skill-illustration skill-illustration-${area}" aria-hidden="true">
      <span class="skill-glow"></span>
      <span class="skill-card skill-card-main"></span>
      <span class="skill-card skill-card-side"></span>
      <span class="skill-token skill-token-a"></span>
      <span class="skill-token skill-token-b"></span>
      <span class="skill-token skill-token-c"></span>
    </div>
  `;
}

function questionCategoryLabel(question) {
  if (question.label) {
    return question.label;
  }
  const questions = currentQuestions();
  const currentIndex = questions.findIndex((item) => item.id === question.id);
  const category = question.theme;
  const categoryIndex = questions
    .slice(0, currentIndex + 1)
    .filter((item) => item.theme === question.theme).length;
  return `${category} · Q${categoryIndex}`;
}

function startsQuestionSection(question) {
  const questions = currentQuestions();
  const currentIndex = questions.findIndex((item) => item.id === question.id);
  if (currentIndex <= 0) {
    return true;
  }
  const section = question.theme || question.area;
  const previous = questions[currentIndex - 1];
  const previousSection = previous.theme || previous.area;
  return section !== previousSection;
}

function skillAnswerButton(questionId, value, label, score, selected) {
  return `
    <button class="answer-button ${selected === value ? "selected" : ""}" type="button" data-skill-id="${questionId}" data-skill-value="${value}" data-skill-score="${score}">
      ${label}
    </button>
  `;
}

function renderProfile() {
  const profile = deriveProfile();
  return `
    <main class="phone-screen profile-screen">
      ${header()}
      <section class="learning-profile">
        <h1>${profile.childName}'s learning profile</h1>
        <div class="profile-hero-row">
          <div class="profile-avatar profile-avatar-${profile.genderLabel.toLowerCase()}" aria-hidden="true">
            <span class="avatar-spark avatar-spark-a"></span>
            <span class="avatar-spark avatar-spark-b"></span>
            <span class="avatar-spark avatar-spark-c"></span>
            <span class="avatar-head">
              <span class="avatar-hair"></span>
              <span class="avatar-bow"></span>
              <span class="avatar-eye avatar-eye-left"></span>
              <span class="avatar-eye avatar-eye-right"></span>
              <span class="avatar-cheek avatar-cheek-left"></span>
              <span class="avatar-cheek avatar-cheek-right"></span>
              <span class="avatar-smile"></span>
            </span>
            <span class="avatar-neck"></span>
            <span class="avatar-shirt"></span>
          </div>
          <div class="profile-facts">
            <div><span>Gender:</span><strong>${profile.genderLabel}</strong></div>
            <div><span>Age:</span><strong>${profile.ageLabel}</strong></div>
            <div><span>Activities:</span><strong>${profile.activityLabel}</strong></div>
          </div>
        </div>
        <div class="progress-panel reveal-card">
          <h2>Current progress level</h2>
          <p>Based on your answers</p>
          <div class="profile-level">
            <i style="--level:${profile.levelPercent}%"></i>
          </div>
          <div class="level-labels">
            <span>Just starting</span>
            <span>On track</span>
            <span>Ahead</span>
          </div>
          <div class="level-badge">Your child's level</div>
        </div>
        <div class="plan-summary reveal-card">
          <span>Focus area</span>
          <h2>${profile.focusIcon} ${profile.focusLabel}</h2>
          <p>${profile.summary}</p>
          <div class="summary-signals">
            ${profile.zones
              .slice(0, 2)
              .map(
                (zone) => `
                  <div class="zone-row">
                    <div class="zone-copy">
                      <span>${zone.label}</span>
                      <strong>${zone.status}</strong>
                    </div>
                    <div class="mini-scale"><i style="--zone:${zone.percent}%"></i></div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
      <div class="option-list">
        ${cta("Continue")}
      </div>
    </main>
  `;
}

function renderFamilyOffer(screen) {
  return `
    <main class="phone-screen family-offer-screen">
      ${header({ progress: false })}
      <section class="family-offer">
        <h1>Would this be useful<br />for your family?</h1>
        <img class="family-offer-card" src="${screen.image}" alt="${screen.alt}" />
      </section>
      <div class="family-choice-row" aria-label="Choose whether this is useful">
        <button class="family-choice reject" type="button" data-action="next" aria-label="No">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path d="M18 18 46 46M46 18 18 46" />
          </svg>
        </button>
        <button class="family-choice accept" type="button" data-action="next" aria-label="Yes">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path d="M16 34 27 45 49 20" />
          </svg>
        </button>
      </div>
    </main>
  `;
}

function renderCheckoutLoader() {
  const review = loaderReviews[0];
  return `
    <main class="phone-screen checkout-loader-screen">
      ${header({ back: false, progress: false })}
      <section class="checkout-loader" data-loader>
        <div class="review-loader-wrap" style="--progress:${review.percent}">
          <div class="review-loader-ring" aria-hidden="true">
            ${Array.from({ length: 36 }, (_, index) => `<i style="--tick:${index}"></i>`).join("")}
          </div>
          <strong data-loader-percent>${review.percent}%</strong>
        </div>
        <p data-loader-status>${review.status}</p>
        ${renderReviewCard(review)}
      </section>
    </main>
  `;
}

function renderReviewCard(review) {
  return `
    <article class="review-card" data-review-card>
      <div class="review-meta">
        <div class="review-stars" aria-label="5 stars">★★★★★</div>
        <div class="review-author"><span>${review.avatar}</span>${review.name}</div>
      </div>
      <h2>${review.title}</h2>
      <p>${review.body}</p>
    </article>
  `;
}

function renderEmail() {
  return `
    <main class="phone-screen email-screen">
      ${header({ progress: false })}
      <section class="email-entry">
        <h1>Enter email to get learning materials right now</h1>
        <input id="emailInput" class="text-input email-input" type="email" value="${escapeHtml(state.email)}" placeholder="Enter your email" autocomplete="email" />
        <label class="email-consent">
          <input type="checkbox" />
          <span>I would like to receive learning materials, promotions, discounts and special offers from Keiki via email</span>
        </label>
      </section>
      <div class="option-list email-actions">
        ${cta("Continue")}
        <p>By continuing you agree with the <a href="#">Terms & Conditions</a>, <a href="#">Privacy Policy</a>, <a href="#">Cookie Policy</a> and <a href="#">Subscription Terms</a></p>
      </div>
    </main>
  `;
}

function renderDiscountScratch() {
  return `
    <main class="phone-screen discount-screen">
      ${header({ back: false, progress: false })}
      <section class="discount-unlock">
        <h1>Scratch to unlock<br /><span>your</span> special gift</h1>
        <p>We’ve prepared a little surprise for your child learning journey</p>
        <div class="scratch-ticket" data-scratch-ticket>
          <div class="scratch-content">
            <div class="discount-lockup">
              <strong>15%</strong>
              <span>discount</span>
            </div>
            <em><span>for your child's</span><b>Learning Plan</b></em>
          </div>
          <canvas class="scratch-canvas" width="640" height="760" aria-label="Scratch discount card"></canvas>
          <div class="scratch-label">Scratch it off</div>
          <div class="scratch-hand" aria-hidden="true">☝</div>
          <div class="ticket-cut left"></div>
          <div class="ticket-cut right"></div>
          <div class="promo-code" data-promo>
            <span>Promo code</span>
            <strong>KEIKI_2026</strong>
          </div>
        </div>
      </section>
      <div class="option-list discount-cta">
        ${cta("Apply promo code", true)}
      </div>
    </main>
  `;
}

function renderPaywall() {
  const plan = deriveProfile();
  const ageConfig = currentAgeConfig();
  const childName = plan.childName === "Your child" ? "Your child" : plan.childName;
  const possessiveName = childName === "Your child" ? "Your child's" : `${childName}'s`;
  const routineFit =
    {
      "5-10": "5-7 min a day",
      "10-20": "10-15 min a day",
      "20-30": "20 min practice",
      "45+": "longer family sessions",
    }[state.familyTime] || "short daily practice";
  const ageFit = ageConfig.ageFit || "age-fit tasks";
  const focusStep = ageConfig.focusSteps?.[plan.focusArea] || "the next easy step";
  const fitSignals = [
    ["First step", focusStep],
    ["Age fit", ageFit],
  ];
  const productCards = ageConfig.productCards || [
    ["Reading games", "Picture stories, sounds and first words"],
    ["Fun worksheets", "Printable tasks matched to age"],
    ["Daily plan", "Small steps that fit family time"],
  ];
  const accessItems = [
    "7+ weeks learning plan with detailed list of activities",
    "Educational app with plenty of learning games",
    "Fun worksheets for key preschool skills",
    "Progress report for your child",
  ];
  const reviews = loaderReviews.slice(0, 3);

  return `
    <main class="paywall-screen">
      <div class="paywall-sticky">
        <header class="paywall-header">
          <img class="logo" src="${ASSETS.logo}" alt="Keiki" />
        </header>
        <div class="paywall-offer-strip">
          <span>15% with code</span>
          <strong>KEIKI_2026</strong>
          <button type="button">Get my plan</button>
        </div>
      </div>

      <section class="paywall-plan-hero">
        <h1>${possessiveName} plan is ready</h1>
        <p class="paywall-hero-sub">Built for ${plan.ageLabel} and ${routineFit}</p>

        <div class="plan-journey-card">
          <article>
            <span>Your answers</span>
            <img src="${ASSETS.didi}" alt="" />
            <strong>Starting point</strong>
            <small>from your quiz</small>
          </article>
          <div class="journey-bridge" aria-hidden="true">
            <i></i><i></i><i></i>
          </div>
          <article>
            <span>Your plan</span>
            <div class="plan-ready-badge">Ready</div>
            <strong>Daily mini wins</strong>
            <small>fits your day</small>
          </article>
          <div class="journey-signals">
            ${fitSignals
              .map(
                ([label, value]) => `
                  <div>
                    <span>${label}</span>
                    <strong>${value}</strong>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="promo-applied">
        <h2>Your promo code applied!</h2>
        <div>
          <span>KEIKI_2026</span>
          <strong>10:00</strong>
        </div>
      </section>
      <button class="paywall-green-button" type="button">Get my plan</button>

      <section class="story-carousel" aria-label="Plan preview">
        ${productCards.map(([title, body]) => `
          <div class="story-card">
            <span></span>
            <p>${title}</p>
            <small>${body}</small>
          </div>
        `).join("")}
      </section>

      <section class="paywall-panel benefits-panel">
        <h2>Learning that fits your child</h2>
        ${[
          ["No more feeling overwhelmed", `The plan starts from ${plan.focusLabel.toLowerCase()} and keeps every activity doable.`],
          ["Reduce tantrums and behavior issues", "Playful challenges help children learn in a calm way."],
          ["Stay motivated and engaged", "Short games, wins and rewards keep practice feeling light."],
          ["Have more time for yourself", "The routine is already planned, so you can start without guessing."],
          ["Feel good about screen time", "Every activity has a clear learning goal and age-fit difficulty."],
        ].map(([title, body], index) => `
          <div class="benefit-row">
            <i>${index + 1}</i>
            <p><strong>${title}</strong>${body}</p>
          </div>
        `).join("")}
      </section>

      <section class="savings-section">
        <h2>With our learning plan you save up to</h2>
        <div class="saving-card">
          <strong>$500 annually</strong>
          <p>on different educational materials for your child</p>
          <div class="saving-photo art"><span></span><span></span><span></span></div>
        </div>
        <div class="saving-card">
          <strong>50%</strong>
          <p>of the time usually spent looking for calm, age-fit activities</p>
          <div class="saving-photo family"><span></span><span></span></div>
        </div>
      </section>

      <section class="access-section">
        <h2>Keiki learning plan gives instant and unlimited access to</h2>
        <div class="device-stack"></div>
        <div class="access-list">
          ${accessItems.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </section>

      <section class="pricing-section">
        <h2>Your Personalized Plan is ready!</h2>
        <div class="promo-applied compact">
          <h2>Your promo code applied!</h2>
          <div><span>KEIKI_2026</span><strong>10:00</strong></div>
        </div>
        ${[
          ["1-WEEK TRIAL", "$6.93", "then $39.99 every 4 weeks", true],
          ["4-WEEK PLAN", "$19.99", "$39.99", false],
          ["12-WEEK PLAN", "$39.99", "$79.99", false],
        ].map(([name, price, sub, recommended]) => `
          <button class="price-card ${recommended ? "recommended" : ""}" type="button">
            ${recommended ? "<em>Recommended</em>" : ""}
            <span></span>
            <strong>${name}</strong>
            <p>${sub}</p>
            <b>${price}</b>
          </button>
        `).join("")}
        <button class="paywall-green-button" type="button">GET MY PLAN</button>
        <p class="secure-pay">Pay safe & secure</p>
      </section>

      <section class="paywall-reviews">
        ${reviews.map((review) => `
          <article>
            <div>★★★★★ <span>${review.avatar} ${review.name}</span></div>
            <h3>${review.title}</h3>
            <p>${review.body}</p>
          </article>
        `).join("")}
      </section>
    </main>
  `;
}

function selectOption(value, multi) {
  const screen = currentScreen().id;

  if (screen === "age") {
    state.ageBand = value;
    primeAgeScores();
    next();
    return;
  }

  if (screen === "gender") {
    state.gender = value;
    next();
    return;
  }

  if (screen === "interests") {
    if (multi) {
      state.interests = state.interests.includes(value)
        ? state.interests.filter((item) => item !== value)
        : [...state.interests, value];
    }
    render();
    return;
  }

  if (screen === "setup") {
    state.setup = value;
    next();
    return;
  }

  if (screen === "time") {
    state.familyTime = value;
    next();
  }
}

function primeAgeScores() {
  state.skillAnswers = {};
  state.skillScores = {
    language: 0,
    math: 0,
    logic: 0,
    cognitive: 0,
    social: 0,
  };
}

function selectSkill(questionId, value, score) {
  const question = currentQuestions().find((item) => item.id === questionId);
  if (!question) return;
  state.skillAnswers[questionId] = value;
  if (question.writes === "playStyle") state.playStyle = value;
  recalculateSkillScores();
  next();
}

function recalculateSkillScores() {
  state.skillScores = {
    language: 0,
    math: 0,
    logic: 0,
    cognitive: 0,
    social: 0,
  };
  currentQuestions().forEach((question) => {
    const value = state.skillAnswers[question.id];
    const score = scoreForAnswer(question, value);
    state.skillScores[question.area] += score;
  });
}

function scoreForAnswer(question, value) {
  if (!value) return 0;
  const customAnswer = question.answers?.find(([answerValue]) => answerValue === value);
  if (customAnswer) return Number(customAnswer[2]) || 0;
  if (value === "yes") return 2;
  if (value === "maybe") return 1;
  return 0;
}

function deriveProfile() {
  const ageConfig = currentAgeConfig();
  const activeAreas = [...new Set(currentQuestions().map((question) => question.area))];
  const entries = activeAreas.map((area) => [area, state.skillScores[area] || 0]);
  const sorted = [...entries].sort((a, b) => a[1] - b[1]);
  const focusArea = sorted[0]?.[0] || "language";
  const strongestArea = sorted[sorted.length - 1]?.[0] || "math";
  const total = entries.reduce((sum, item) => sum + item[1], 0);
  const max = currentQuestions().length * 2;
  const levelPercent = Math.max(12, Math.min(88, Math.round((total / Math.max(max, 1)) * 100)));
  const childName = state.childName.trim() || "Your child";
  const timeLabel = state.familyTime ? `${state.familyTime} min` : "short";

  const labels = ageConfig.labels;
  const icons = ageConfig.icons;

  const pathByFocus = {
    language: `Week 1: ${ageConfig.focusSteps?.language || "language games"}. Week 2: playful practice. Week 3: small wins. Week 4: confidence.`,
    math: `Week 1: ${ageConfig.focusSteps?.math || "number games"}. Week 2: playful practice. Week 3: small wins. Week 4: confidence.`,
    logic: `Week 1: ${ageConfig.focusSteps?.logic || "thinking games"}. Week 2: playful practice. Week 3: small wins. Week 4: confidence.`,
    cognitive: `Week 1: ${ageConfig.focusSteps?.cognitive || "matching games"}. Week 2: playful practice. Week 3: small wins. Week 4: confidence.`,
    social: `Week 1: ${ageConfig.focusSteps?.social || "shared play"}. Week 2: playful practice. Week 3: small wins. Week 4: confidence.`,
  };
  const questionCounts = currentQuestions().reduce((counts, question) => {
    counts[question.area] = (counts[question.area] || 0) + 1;
    return counts;
  }, {});
  const zones = Object.entries(labels)
    .filter(([area]) => activeAreas.includes(area))
    .map(([area, label]) => {
      const maxAreaScore = Math.max(1, (questionCounts[area] || 1) * 2);
      const percent = Math.max(10, Math.min(96, Math.round(((state.skillScores[area] || 0) / maxAreaScore) * 100)));
      return {
        area,
        label,
        percent,
        status: area === focusArea ? "Start here" : area === strongestArea ? "Feels familiar" : "Practice next",
      };
    })
    .sort((a, b) => (a.area === focusArea ? -1 : b.area === focusArea ? 1 : a.percent - b.percent))
    .slice(0, 3);

  return {
    childName,
    genderLabel: state.gender === "boy" ? "Boy" : state.gender === "girl" ? "Girl" : "Not selected",
    ageLabel: state.ageBand ? `${state.ageBand} years` : "Not selected",
    activityLabel: state.interests.length ? "Yes" : "Not selected",
    focusArea,
    strongestArea,
    focusIcon: icons[focusArea] || "✨",
    focusLabel: labels[focusArea] || "Learning focus",
    strongestLabel: labels[strongestArea] || "Strong start",
    levelPercent,
    summary: ageConfig.summary,
    path: pathByFocus[focusArea],
    planIntensity: state.familyTime === "5-10" ? "tiny daily steps" : "steady weekly practice",
    planReadyLabel: `${Math.max(68, levelPercent)}% plan match`,
    buildSteps: [
      { label: "Answers", value: "Checked" },
      { label: "Focus", value: labels[focusArea] || "Learning focus" },
      { label: "Practice", value: state.familyTime === "5-10" ? "5-10 min" : "Balanced" },
    ],
    zones,
  };
}

function next() {
  const flow = currentScreens();
  if (state.step < flow.length - 1) {
    state.step += 1;
    render();
  }
}

function goToScreen(screenId) {
  const index = currentScreens().findIndex((screen) => screen.id === screenId);
  if (index >= 0) {
    state.step = index;
    render();
  }
}

function back() {
  if (state.step > 0) {
    state.step -= 1;
    render();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = currentScreen().render();
  window.scrollTo(0, 0);
  app.scrollTop = 0;
  window.clearTimeout(window.keikiPlanTimer);
  window.clearTimeout(window.keikiLoaderTimer);
  window.clearInterval(window.keikiLoaderInterval);
  if (currentScreen().id === "plan") {
    window.keikiPlanTimer = window.setTimeout(() => {
      if (currentScreen().id === "plan") next();
    }, 3600);
  }
  if (currentScreen().id === "checkout-loader") {
    startCheckoutLoader(app);
  }
  if (currentScreen().id === "discount") {
    setupScratchCard(app);
  }
  app.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => selectOption(button.dataset.option, button.dataset.multi === "true"));
  });
  app.querySelectorAll("[data-skill-id]").forEach((button) => {
    button.addEventListener("click", () =>
      selectSkill(button.dataset.skillId, button.dataset.skillValue, Number(button.dataset.skillScore)),
    );
  });
  app.querySelectorAll("[data-action='next']").forEach((button) => {
    button.addEventListener("click", next);
  });
  app.querySelectorAll("[data-action='back']").forEach((button) => {
    button.addEventListener("click", back);
  });
  const nameInput = app.querySelector("#childName");
  if (nameInput) {
    nameInput.focus();
    nameInput.setSelectionRange(nameInput.value.length, nameInput.value.length);
    nameInput.addEventListener("input", (event) => {
      state.childName = event.target.value;
      const button = app.querySelector("[data-action='next']");
      if (button) button.disabled = state.childName.trim().length === 0;
    });
  }
  const emailInput = app.querySelector("#emailInput");
  if (emailInput) {
    const syncEmail = () => {
      state.email = emailInput.value;
    };
    emailInput.focus();
    emailInput.addEventListener("input", syncEmail);
    emailInput.addEventListener("change", syncEmail);
    window.setTimeout(syncEmail, 0);
  }
  window.keikiState = state;
  window.keikiProfile = deriveProfile();
}

function startCheckoutLoader(app) {
  let index = 0;
  const applyReview = () => {
    const review = loaderReviews[index];
    const loader = app.querySelector("[data-loader]");
    const percent = app.querySelector("[data-loader-percent]");
    const status = app.querySelector("[data-loader-status]");
    const card = app.querySelector("[data-review-card]");
    if (!loader || !percent || !status || !card) return;
    loader.style.setProperty("--progress", review.percent);
    percent.textContent = `${review.percent}%`;
    status.textContent = review.status;
    card.outerHTML = renderReviewCard(review);
  };
  applyReview();
  window.keikiLoaderInterval = window.setInterval(() => {
    index = Math.min(index + 1, loaderReviews.length - 1);
    applyReview();
    if (index === loaderReviews.length - 1) {
      window.clearInterval(window.keikiLoaderInterval);
    }
  }, 2200);
  window.keikiLoaderTimer = window.setTimeout(() => {
    if (currentScreen().id === "checkout-loader") next();
  }, 7000);
}

function setupScratchCard(app) {
  const canvas = app.querySelector(".scratch-canvas");
  const ticket = app.querySelector("[data-scratch-ticket]");
  const button = app.querySelector(".discount-cta .primary-button");
  if (!canvas || !ticket) return;
  const context = canvas.getContext("2d");
  const drawCover = () => {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#f6c24c");
    gradient.addColorStop(1, "#f3b432");
    context.globalCompositeOperation = "source-over";
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "rgba(255, 231, 166, 0.72)";
    context.lineWidth = 70;
    context.beginPath();
    context.moveTo(170, 250);
    context.lineTo(340, 145);
    context.lineTo(205, 355);
    context.lineTo(470, 295);
    context.lineTo(275, 490);
    context.lineTo(415, 452);
    context.stroke();
  };
  drawCover();
  let scratching = false;
  let revealed = false;
  const revealScratch = () => {
    if (revealed) return;
    revealed = true;
    ticket.classList.add("revealed");
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (button) {
      button.disabled = false;
      button.removeAttribute("disabled");
    }
  };
  if (button) {
    button.addEventListener("click", (event) => {
      if (!ticket.classList.contains("revealed")) return;
      event.stopImmediatePropagation();
      goToScreen("paywall");
    });
  }
  const scratchAt = (event) => {
    if (!scratching || revealed) return;
    const rect = canvas.getBoundingClientRect();
    const pointer = event.touches?.[0] || event;
    const x = ((pointer.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((pointer.clientY - rect.top) / rect.height) * canvas.height;
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 58, 0, Math.PI * 2);
    context.fill();
    if (calculateScratchProgress(context, canvas) > 0.38) {
      revealScratch();
    }
  };
  canvas.addEventListener("pointerdown", (event) => {
    scratching = true;
    canvas.setPointerCapture?.(event.pointerId);
    scratchAt(event);
  });
  canvas.addEventListener("pointermove", scratchAt);
  canvas.addEventListener("pointerup", () => {
    scratching = false;
  });
  canvas.addEventListener("pointercancel", () => {
    scratching = false;
  });
}

function calculateScratchProgress(context, canvas) {
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  let cleared = 0;
  for (let index = 3; index < pixels.length; index += 16) {
    if (pixels[index] === 0) cleared += 1;
  }
  return cleared / (pixels.length / 16);
}

function syncViewportMetrics() {
  const viewport = window.visualViewport;
  const height = Math.round(viewport?.height || window.innerHeight || document.documentElement.clientHeight);
  const width = Math.round(viewport?.width || window.innerWidth || document.documentElement.clientWidth);
  const root = document.documentElement;
  root.style.setProperty("--app-vh", `${height}px`);
  root.classList.toggle("compact-viewport", height <= 760 || width <= 390);
  root.classList.toggle("mini-viewport", height <= 680 || width <= 375);
}

applyPreviewRoute();
syncViewportMetrics();
window.visualViewport?.addEventListener("resize", syncViewportMetrics);
window.visualViewport?.addEventListener("scroll", syncViewportMetrics);
window.addEventListener("resize", syncViewportMetrics);
render();
