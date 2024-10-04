//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNoczJjNlkweGpRT2lKTGQ0WDVSRjJ2VDdwbVZDS1RSQVhVdG5TMnlFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2hiUXdaWVlCcW9YVnBPazg0QTVxd3dGeEtPVUhxZUJGYkcrdk1Ucmd6TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTWQ4NjEwSWxNY3A2ZVk1NEVPUGR3cjdyRnV3TmpTclNsK2NTQ2hIa21jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrbGlvV3FTMmJHbUUvYzdzNmI3aTRTWDh3cGtzT2gyeTBVRWlwSEJtcTJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGMHhzaldaeDUzTHQ3R1RBVXg0WW1KeUltUDMxdTh5MzV1aGY1b1JpRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZBbkRmaGR1SWFIT1V3MHMrbEN4K290NS9SQzU4cUV6NlltK05mOEtjekE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBJRWI4WFBEaVo2eUl6ZEtSVEpWNFFTWkYzUnM3WkpIZi9OOVdZWERHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL01aMmpLWVZJM29FL25wSG14c2wyaysyZ0ZhUkdXM1ZXZTMrY2hzeXJ4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN5L0dDQWJEUjhTWitvS2FhYTFtc0FoMGJFd0NSeG15ditTT1U4b2JSc0ZkbThVSHRPTVozblR2M3RScDRjcFZNVThGcno2d2NaWUp2VCtRVTJUbEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJ0bjlVVGJDaS80RW0wWDdjU3hXOE81SUVPMUM2aU1wQ244bUJVSGxpUURvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQcHJFZGZjOFJCdUVidkpxOXZ2VEp3IiwicGhvbmVJZCI6IjZmMzFhNWI4LTU2NjItNGFlOC05MjZkLTk4YzkzMjc4YTA2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5RUlxUFFGcDVicEk5ZFBTaEk1NTFURDFHeWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialF6UnJHSmxlbUUxSGRzcFVoMjN2RkVpaFAwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkozN1dCMVdIIiwibWUiOnsiaWQiOiIyNTQxMTIxOTIxMTk6NjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qgs2GzLrwnZCAzYbMuvCdkJLNhsy68J2QhM2GzLrwnZCYzYbMuvCdkJHNhsy68J2Qh82GzLrwnZCOzYbMuvCdkIPNhsy68J2QhM2GzLrwnZCSzYbMuiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFdQMVpzQkVKYmMvYmNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUmZMWHVkb05xZDd3VFpFT1VzMWhGbTBRWnR4dTRabU00RlJsTTQzcFBncz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNFNXQWdCWVd5alo5T2t2L00xelB0ejhNbEk1RWpxMzVGMkFvRnpnbHFpUXNRWFJaL08vTTE4Wms4R2tad1lJR1VWWlllelBKM0E2ZjFvbFFvdzFXQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlhBL3BUTFYzVUNiOG82SWhSdCtRWWplRVpNYUZDbnJ3dFVRQVMwVmdUYWFnNTBvbnR4Mkh1WlI1dWJFcjlEdzJ1ZGpqcndVN3QxVGZPUGJCZys2WkN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyMTkyMTE5OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVYeTE3bmFEYW5lOEUyUkRsTE5ZUlp0RUdiY2J1R1pqT0JVWlRPTjZUNEwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgwMTU5MDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWFlIn0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`ꪶ༺֎ᚏ༈࿉𝐂̆̈𝐀̆̈𝐒̆̈𝐄̆̈𝐘̆̈𝐑̆̈𝐇̆̈𝐎̆̈𝐃̆̈𝐄̆̈𝐒̆̈⧉ᚙ֎⸙༻™`",
  author: process.env.PACK_AUTHER || "ꪶ༺֎ᚏ༈࿉𝐂̆̈𝐀̆̈𝐒̆̈𝐄̆̈𝐘̆̈𝐑̆̈𝐇̆̈𝐎̆̈𝐃̆̈𝐄̆̈𝐒̆̈⧉ᚙ֎⸙༻",
  packname: process.env.PACK_NAME || "ꪶ༺֎ᚏ༈࿉𝐂̆̈𝐀̆̈𝐒̆̈𝐄̆̈𝐘̆̈𝐑̆̈𝐇̆̈𝐎̆̈𝐃̆̈𝐄̆̈𝐒̆̈⧉ᚙ֎⸙༻",
  botname: process.env.BOT_NAME || "ꪶ༺֎ᚏ༈࿉𝐂̆̈𝐀̆̈𝐒̆̈𝐄̆̈𝐘̆̈𝐑̆̈𝐇̆̈𝐎̆̈𝐃̆̈𝐄̆̈𝐒̆̈⧉ᚙ֎⸙༻",
  ownername: process.env.OWNER_NAME || "ꪶ༺֎ᚏ༈࿉𝐂̆̈𝐀̆̈𝐒̆̈𝐄̆̈𝐘̆̈𝐑̆̈𝐇̆̈𝐎̆̈𝐃̆̈𝐄̆̈𝐒̆̈⧉ᚙ֎⸙༻",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
