import casualGamesCover from "@/assets/projects/casual-games/verticalAdLandscape.jpeg";
import casualGamesGif1 from "@/assets/projects/casual-games/download-guide__demo.gif";
import casualGamesGif2 from "@/assets/projects/casual-games/swipe-card__demo.gif";
import courseRegistrationCover from "@/assets/projects/course-registration-system/backend-api.png";
import courseRegistrationVideo from "@/assets/projects/course-registration-system/swagger-api-test.mp4";
import kHomePC from "@/assets/projects/KachiShop/K-Home__PC.png";
import kHomeMobile from "@/assets/projects/KachiShop/K-Home__m.png";
import kFissionPUBGM from "@/assets/projects/KachiShop/K-Fission_PUBGM.png";
import kFissionMLBB from "@/assets/projects/KachiShop/K-Fission_MLBB.png";
import kFissionGenshinPopup from "@/assets/projects/KachiShop/K-Fission_Genshin__popup.png";
import kFissionGenshin from "@/assets/projects/KachiShop/K-Fission_Genshin.png";
import kFissionGenshinPopup2 from "@/assets/projects/KachiShop/K-Fission_Genshin__popup2.jpg";
import kWalletRecharge from "@/assets/projects/KachiShop/K-Wallet_Recharge.png";
import kWalletSetPassword from "@/assets/projects/KachiShop/K-Wallet_SetPassword.png";
import kWalletPasswordSetSuccess from "@/assets/projects/KachiShop/K-Wallet_PasswordSetSuccess.png";
import kWalletResetPassword from "@/assets/projects/KachiShop/K-Wallet_ResetPassword.png";
import kWalletEmailVerification from "@/assets/projects/KachiShop/K-Wallet_EmailVerification.png";
import kWalletChangePassword from "@/assets/projects/KachiShop/K-Wallet_ChangePassword.png";
import Login from "@/assets/projects/chat-app/login.png";
import LoginError from "@/assets/projects/chat-app/login-error.png";
import Registering from "@/assets/projects/chat-app/registering.png";
import SearchFriend from "@/assets/projects/chat-app/search-friend.png";
import NoUserFound from "@/assets/projects/chat-app/no-user-found.png";
import UserFound from "@/assets/projects/chat-app/user-found.png";
import FriendRequestSent from "@/assets/projects/chat-app/friend-request-sent.png";
import FriendRequestReceived from "@/assets/projects/chat-app/friend-request-received.jpg";
import FriendProfile from "@/assets/projects/chat-app/friend-profile.png";
import ProfileUpdated from "@/assets/projects/chat-app/profile-updated.png";
import ProfileCheck from "@/assets/projects/chat-app/profile-check.png";
import UnreadBadge from "@/assets/projects/chat-app/unread-badge.jpg";
import NewMessageTip from "@/assets/projects/chat-app/new-message-tip.jpg";
import FriendAlreadyAdded from "@/assets/projects/chat-app/friend-already-added.png";
import OfflineNotice from "@/assets/projects/chat-app/offline-notice.png";

export const projects = [
  {
    title: "Game Top-up Platform",
    link: "https://www.KachiShop.com/",
    techStack: "Vue 2, Vuex, Axios, Vant, Nuxt.js, i18n",
    type: "Work Project",
    description: [
      "A cross-regional game top-up platform supporting wallet recharges and localized payments.",
      "The demo showcases modules I led, including the Wallet System (account management, multi-currency recharges, encrypted payments, historical order tracking), marketing features and a redesigned dark-mode Home page, all aimed at enhancing user engagement and retention.",
    ],
    cover: kHomePC,
    assetsPerRow: 3,
    assets: [
      { type: "image", src: kHomeMobile },
      { type: "image", src: kFissionPUBGM },
      { type: "image", src: kFissionMLBB },
      { type: "image", src: kFissionGenshinPopup },
      { type: "image", src: kFissionGenshin },
      { type: "image", src: kFissionGenshinPopup2 },
      { type: "image", src: kWalletRecharge },
      { type: "image", src: kWalletSetPassword },
      { type: "image", src: kWalletPasswordSetSuccess },
      { type: "image", src: kWalletResetPassword },
      { type: "image", src: kWalletEmailVerification },
      { type: "image", src: kWalletChangePassword },
    ],
  },
  {
    title: "Webview Game Listing and Downloading",
    techStack: "Vue 3, Pinia, Axios, Vant, Vite, i18n",
    type: "Work Project",
    description: [
      "In-App H5 page that showcases casual games in a short video format to drive user engagement and downloads.",
      "The demo showcases the product's core interactions, including download guidance, comment viewing, and a Tinder-like swipe card UI.",
    ],
    cover: casualGamesCover,
    assetsPerRow: undefined,
    assets: [
      { type: "image", src: casualGamesGif1 },
      { type: "image", src: casualGamesGif2 },
    ],
  },
  {
    title: "Course Registration System",
    link: "https://github.com/SusieYonng/course-registration-system",
    techStack: "Java, Spring Boot, MySQL",
    type: "Academic Project",
    description: [
      "Backend system supporting student and admin roles with features like course CRUD, registration, and secure login/logout.",
      "I configured MySQL integration using Spring Data JPA and developed core backend modules, including authentication with Spring Security (JWT). Built and documented RESTful APIs, showcased via Swagger for interactive testing.",
    ],
    cover: courseRegistrationCover,
    assetsPerRow: 1,
    assets: [
      {
        type: "video",
        src: courseRegistrationVideo,
        orientation: "landscape",
      },
    ],
  },
  {
    title: "React Chat App",
    link: "https://github.com/SusieYonng/ReactChatApp.git",
    techStack: "React, Vite, Node.js, Express",
    type: "Personal Project",
    description: [
      "A web-based messaging application with user profiles, friend management, and real-time communication, built using React, Vite, and Node.js (Express).",
      "Implemented session-based authentication, RESTful APIs with error handling, and enhanced UX with unread badges, local draft caching, and scroll-to-latest. Built CI/CD pipeline (GitHub Actions) with Dockerized deployment to AWS EC2 for automated releases.",
    ],
    cover: Login,
    assetsPerRow: 2,
    assets: [
      { type: "image", src: LoginError },
      { type: "image", src: Registering },
      { type: "image", src: SearchFriend },
      { type: "image", src: NoUserFound },
      { type: "image", src: UserFound },
      { type: "image", src: FriendRequestSent },
      { type: "image", src: FriendRequestReceived },
      { type: "image", src: FriendProfile },
      { type: "image", src: UnreadBadge },
      { type: "image", src: NewMessageTip },
      { type: "image", src: ProfileUpdated },
      { type: "image", src: ProfileCheck },
      { type: "image", src: FriendAlreadyAdded },
      { type: "image", src: OfflineNotice },
    ],
  },
];
