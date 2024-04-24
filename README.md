# News Monkey

News Monkey is a React app that utilizes the [News API](https://gnews.io/) to fetch and display top headlines from various news categories.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/amar-codingenthusiast/news-monkey3.git
2. Change directory:
   ```sh
   cd news-monkey3
3. Install dependencies:
   ```sh
   npm install
4. Run the app:
   ```sh
   npm run start
5. Open your browser and visit http://localhost:3000 to view the app.

## Features
 - View top headlines from various categories like Nation, World, Business, Sports, Entertainment, Health, Science, and Technology.
 - Search for specific news using the search bar.
 - Infinite Scrolls
 - Top loading bar
 - Function based components
 - Responsive design for all devices

## Built with
 - React.js
 - News API
 - Bootstrap

## Deployment
You can access the live version of News Monkey app [here](https://amar-codingenthusiast.github.io/news-monkey3)

## Important Note
 - The free tier of the GNews.io API only provides 10 articles per request, and navigating to other pages (2, 3, 4...) is not available. As a result, you will see the same 10 articles repeatedly in infinite scroll.
 - 100 requests only per day.

## Contributing
Contributions are welcome! Here's how you can contribute:

Fork the repository

Create your feature branch (`git checkout -b feature/YourFeature`)

Commit your changes (`git commit -m 'Add some feature'`)

Push to the branch (`git push origin feature/YourFeature`)

Create a new Pull Request

## License
This project is licensed under the terms of the MIT license. You can find the [LICENSE](LICENSE) file in the root directory of the project.
