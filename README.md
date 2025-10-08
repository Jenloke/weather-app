# 🌤️ Weather App Onboarding Project

Welcome to the team! 🎉

This simple Weather App is your first hands-on task to help you understand our team's workflow, code style, and project structure. You'll use an actual weather API, set up a service, and build a small UI to display weather data.

Each hire will work on their own fork of this repository. Once you're done, you'll deploy your version so others can view your work.

---

## 🎨 Design Flexibility & Key Feature

You are free to decide the overall design and user experience of your Weather App! Feel free to choose your own layout, colors, and UI elements to make the app your own.

**However, your app must include the following key features:**

- **Recent Searches:** Display a list of recently searched cities for quick access.
- **Weather Details:** Show additional weather details such as humidity, wind speed, or weather icons.
- **Unit Toggle:** Allow users to switch between Celsius and Fahrenheit.
- **Responsive Design:** Ensure the app looks good on both desktop and mobile devices.

Feel free to add more features if you like!

---

## 📋 Objectives

- Understand how we structure projects
- Learn how to use services for data fetching
- Practice using GitHub workflow (forks, branches, PRs, commits)
- Learn our basic coding standards and practices

---

## 🛠️ Prerequisites

- Node.js (version X.X.X or higher)
- Angular CLI
- Git
- VS Code

---

## 🚀 Getting Started

### 1. Fork the Repository

Go to the original repo: [https://github.com/marhano/weather-app](https://github.com/your-org/weather-onboarding-app)

Click the **Fork** button at the top right to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the App

```bash
npm start
```

> The app should now be running on `http://localhost:4200` (for Angular) or your framework's default port.

---

## 📁 Project Structure

```bash
src/
│
├── app/
│   ├── services/
│   │   └── weather.service.ts    # Example service to fetch weather
│   ├── components/
│   │   └── sample-card/         # Component to display weather
│   ├── models/
│   │   └── weather.model.ts      # Interface/type for weather data
│   ├── interfaces/
│   │   └── weather.interface.ts   # Interface for weather service
│   └── app.component.ts
```

---

## 🔐 API Setup

We use [OpenWeatherMap API](https://openweathermap.org/api).

### 1. Create an account and get your API key

Sign up and get your API key here: https://home.openweathermap.org/api_keys

### 2. Add your API key to environment file

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  weatherApiKey: 'YOUR_API_KEY_HERE',
  weatherBaseUrl: 'https://api.openweathermap.org/data/2.5/weather',
};
```

---

## 📦 Tasks

### ✅ Step 1: Review the weather service

- Look into `weather.ts` to see how we make HTTP requests
- Understand how services are injected into components

### ✅ Step 2: Create a new component

- Create a `weather-search` component where users can search by city
- Bind the input to the service call
- Display the result using the `weather-card` component

### ✅ Step 3: Push your work

1. Create a branch

```bash
git checkout -b feature/weather-search
```

2. Commit your changes

```bash
git commit -m "feat: add weather search component"
```

3. Push to your fork

```bash
git push origin feature/weather-search
```

You can optionally open a Pull Request to your fork’s `main` branch if you'd like feedback.

---

## 🌐 Deployment (Free)

After you're done, you can deploy your app for free these platform:

### 🟢 [Netlify](https://netlify.com)

1. Go to [https://netlify.com](https://netlify.com)
2. Connect your GitHub and import your repo
3. Set build command (`npm run build`) and publish directory (`dist` for Angular)
4. Deploy and share your link

### 🟣 [Central App Collection (GitHub Pages)](https://marhano.github.io/weather-app/)

We maintain a central collection of all deployed Weather Apps at [https://marhano.github.io/weather-app/](https://marhano.github.io/weather-app/).

**To add your app to this collection:**

1. Make sure your app is deployed and accessible via a public URL (e.g., Netlify, Vercel, or GitHub Pages).
2. Fork this repository (if you haven't already).
3. Get the latest branches from the main repo.

   ```bash
   git remote add upstream https://github.com/marhano/weather-app.git
   git fetch upstream
   ```
   
4. Create a branch base on the `gh-pages` branch of the main repo:
5. Open the `index.html` file in the root of the repo (on the `gh-pages` branch).
6. Add your app to the list! You can freely design how your preview will look.

   Place your entry below the last one in the list.

7. Commit and push your changes:
8. Open a Pull Request **to the `gh-pages` branch** of the main repository.

Once merged, your app will appear in the central collection at [https://marhano.github.io/weather-app/](https://marhano.github.io/weather-app/) for everyone to see!

---

### 🌟 Sample Deployed App

You can view a sample deployment of this project here: [Sample Weather App](https://effervescent-frangipane-8af6df.netlify.app/home)

---

## 🧪 Bonus Challenges

- Add error handling (e.g., invalid city)
- Display loading state while fetching data
- Add unit tests for the service

---

## 🧭 Next Steps

After you're done:

- Submit your deployed URL to your onboarding reviewer
- **Add your app to the [central collection](https://marhano.github.io/weather-app/) via a PR to the `gh-pages` branch (see above!)**
- Review a peer’s project and leave feedback
- Look forward to the next task 🎯

---

## 🤝 Support

If you're stuck or have any questions, feel free to:

- Message your assigned buddy
- Ask in the #onboarding channel

---

Welcome again! We’re excited to have you on board 🚀
