# 📸 delta-instagram-feed

A plug-and-play **Instagram Feed API** for Node.js & Express with **built-in caching**, **secure token handling**, and **zero frontend exposure**.

Fetch Instagram posts using the official **Instagram Graph API**, cache them automatically, and serve them safely to your frontend.

---

## ✨ Features

- ✅ Official Instagram Graph API
- 🔐 Secure server-side token usage
- ⚡ Built-in 3-hour caching (prevents rate limits)
- 🧩 Express-ready router
- 🎥 Supports Images, Videos & Carousel posts
- 🚫 No frontend token leakage
- 📦 ESM compatible (`import` syntax)

---

## 📦 Installation

```bash
npm i @it_dhruv/delta-instagram-feed
```

---

## ⚙️ Prerequisites

Before using this package, you must have:

- Instagram **Business / Creator** account
- Facebook App with **Instagram Graph API enabled**
- **Long-Lived Access Token** (valid for 60 days)

---

## 🔐 Environment Variables

Create a `.env` file in your backend project:

```env
INSTAGRAM_BASE_URL=https://graph.instagram.com
INSTAGRAM_ACCOUNT_ID=YOUR_INSTAGRAM_USER_ID
INSTAGRAM_ACCESS_TOKEN=YOUR_LONG_LIVED_ACCESS_TOKEN
```

### Important Notes

- ❌ Do NOT use short-lived tokens
- ❌ Do NOT wrap values in quotes
- ❌ Do NOT use Facebook Page ID
- ✅ Use Instagram **User ID** from `/me` endpoint

---

## 🚀 Usage (Express)

### Basic Setup

```js
import express from "express";
import dotenv from "dotenv";
import { instagramRoutes } from "@it_dhruv/delta-instagram-feed";

dotenv.config();

const app = express();

app.use("/api/instagram", instagramRoutes);

app.listen(2025, () => {
  console.log("Server running on port 2025");
});
```

---

## 🌐 API Endpoint

### GET `/api/instagram/feed`

Returns a list of Instagram posts.

#### Example Response

```json
[
  {
    "id": "17905934592164608",
    "media_type": "IMAGE",
    "media_url": "https://...",
    "permalink": "https://www.instagram.com/p/..."
  }
]
```

### Supported Media Types

- `IMAGE`
- `VIDEO`
- `CAROUSEL_ALBUM`

---

## ⚡ Caching Behavior

- Instagram API is called **once every 3 hours**
- Subsequent requests return cached data
- Improves performance & avoids rate limits

> Cache duration is currently fixed at **3 hours**

---

## ❌ Error Handling

If something goes wrong, the API responds with:

```json
{
  "message": "Unable to fetch Instagram feed"
}
```

### Common Causes

- Expired or invalid access token
- Wrong Instagram User ID
- Missing API permissions
- App not in Live / Tester mode

Check backend logs for detailed error output.

---

## 🔎 Debug Tip

To verify your token manually:

```
https://graph.instagram.com/me?access_token=YOUR_TOKEN
```

If this fails, regenerate your **long-lived token**.

---

## 🧠 Security Best Practices

- Tokens are **never exposed to frontend**
- Always fetch Instagram data from your backend
- Safe for production usage

---

## 📁 Package Structure (Internal)

```
instagram.routes.js     → Express routes
instagram.controller.js → Request handling
instagram.services.js   → Instagram API calls
instagram.util.js       → Cache logic
instagram.types.js      → Media constants
```

---

## 🛠️ Roadmap (Planned)

- 🔁 Auto token refresh
- 📄 Pagination support
- ⚙️ Configurable cache duration
- 🔐 Optional API key middleware
- 📘 TypeScript support

---

## 🧑‍💻 Author

**Dhruv Itwala**
MERN Stack Developer

📦 npm: `@it_dhruv/delta-instagram-feed`

---

## ⭐ Support

If this package helps you:

- ⭐ Star it on npm
- 🐛 Report issues
- 🚀 Suggest improvements

---
