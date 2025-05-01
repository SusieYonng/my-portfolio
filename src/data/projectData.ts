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

export const projects = [
  {
    title: "Game Top-up Platform",
    link: "https://www.KachiShop.com/",
    techStack: "Vue 2, Vuex, Axios, Vant, Nuxt.js, i18n",
    type: "Work Project",
    description: [
      "A cross-regional game top-up platform supporting wallet recharges and localized payments.",
      "The demo showcases modules I led, including the Wallet System and marketing features designed to enhance user engagement and retention.",
    ],
    cover: kHomePC,
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
    assets: [
      {
        type: "video",
        src: courseRegistrationVideo,
        orientation: "landscape",
      },
    ],
  },
];
