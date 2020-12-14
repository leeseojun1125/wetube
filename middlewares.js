import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    //로그인이 되어있을 시
    res.redirect(routes.home); //홈으로
  } else {
    next(); // 안되어있으면 다음단계로
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    //로그인 되어있을 시
    next(); // 그 다음 단계로
  } else {
    res.redirect(routes.home); // 안되면 홈으로
  }
};

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
