const facebook = {
    appId: process.env.FACEBOOK,
    cookie: true,
    xfbml: true,
    version: 'v2.11',
    scope: 'email'
};

export const facebookConfig = facebook;

const google = {
    client_id: process.env.GOOGLE,
    scope: "https://www.googleapis.com/auth/plus.login"
};

export const googleConfig = google;