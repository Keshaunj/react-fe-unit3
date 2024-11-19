# 📞 Spam Caller Detector

## 🚀 Project Overview
The **Spam Caller Detector** is an application designed to help users identify and report spam calls. The app allows users to search for phone numbers, categorize them, and contribute to a community-driven database for better spam detection. The goal is to provide users with a simple, effective tool for identifying spam numbers without requiring complex features like user authentication or native app permissions.

## 🌟 Features

- **Search Phone Numbers:** Users can search for a phone number to see if it is marked as spam.
- **Categorize Numbers:** Users can label phone numbers as "Spam," "Robo-call," "Valid," or "Uncertain."
- **Database Update:** Users can add new entries to the app’s database if the API search does not provide sufficient information.

## 📋 MVP User Stories (Revised Scope)

1. **Basic Phone Number Search:**
   - As a user, I want to search for a phone number using the external API to check if it is labeled as spam or valid.
   - The search results should display details such as:
     - Spam status (Spam, Clear, Unknown, etc.)
     - Phone number details (e.g., carrier, location, line type)

2. **Categorize Phone Numbers:**
   - As a user, I want to label a phone number with a category (e.g., "Spam," "Robo-call," "Valid," or "Uncertain").
   - This allows users to contribute their knowledge to the app's database.

3. **Database Update:**
   - As a user, I want to add a new phone number entry to the app’s database when the API search does not have sufficient information.
   - The entry should include the phone number and the selected category.

## 💡 Stretch Goals

1. **Local Database Search:**
   - As a user, I want the app to search the local database first before making an API call. This reduces external API requests and speeds up search results.

2. **Report Count Display:**
   - As a user, I want to see how many times a phone number has been reported as spam. This gives more context on the likelihood of it being a spam caller.

## 🛠️ Tech Stack

- **Front-end:** React with Vite

- **API Integration:** Num Lookup API for phone number details
- **Deployment:** Netlify(Front-end), 

## 📐 ERD (Entity Relationship Diagram)

**Note:** The ERD has been created and can be viewed [here](https://imgur.com/a/pF8hYp7).

## 🖥️ Wireframes
(https://i.imgur.com/FCIoNSu.png)
**Note:** A Board view of a the website layout.

## 🌐 Deployment

- **Front-end:** Deployed on Netlify
- 

## 🔧 Installation

To run this project locally, follow these steps:

1. **Clone the Repositories:**
   ```bash
   git clone https://github.com/Keshaunj/React-Project-Unit3.git
