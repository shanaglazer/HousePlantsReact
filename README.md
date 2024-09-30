# House Plants Explorer

This project is a React-based application that displays a grid of house plants, allows users to filter by category and search by Latin name or family, and provides detailed information for each plant. The data is retrieved from the [House Plants API](https://rapidapi.com/mnai01/api/house-plants2/).

## Features

1. **House Plants Grid**:
   - Displays a grid of all house plants with the following columns:
     - Latin Name
     - Family
     - Category

2. **Category Filter**:
   - A dropdown menu to filter the list of plants by category.

3. **Search Functionality**:
   - A search bar to filter the list of plants by either their Latin name or family based on user input.

4. **Plant Details Page**:
   - Each plant in the grid has a link/button that navigates to a page showing detailed information about the selected plant, including an image.

## Technologies Used

- **React**: For building the user interface and managing components.
- **TypeScript**: For static typing and improved development experience.
- **Bootstrap**: For responsive design and styling.
- **House Plants API**: To fetch data about house plants.
- **React Router**: For navigation between the grid and the plant detail pages.

## API

This project uses the House Plants API from RapidAPI. The data fetched includes information such as:

- Latin Name
- Family
- Category
- Image
- Detailed plant characteristics

You can find more information about the API [here](https://rapidapi.com/mnai01/api/house-plants2/).
