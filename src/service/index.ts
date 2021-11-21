const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  "client_id",
  "clinet_key",
  "redirect_url"
);

const scopes = [
  "https://www.googleapis.com/auth/blogger",
  "https://www.googleapis.com/auth/calendar",
];

const authorizeUrl = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: "offline",

  // If you only need one scope you can pass it as a string
  scope: scopes,
});

export { authorizeUrl };
