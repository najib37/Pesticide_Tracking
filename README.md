# Pesticide Usage Tracker

## Overview
This project is a React web application designed to track pesticide usage on fields using a map interface. Users can create markers for each location on the map, and the data is stored in the backend using Django. The application also includes pages to view all tracked fields and the pesticides being used.

## Features
- **Map Interface**: Track pesticide usage by creating markers on a map.
- **Field Tracking**: View a list of all fields being tracked.
- **Pesticide Tracking**: View a list of all pesticides being used.
- **Data Fetching**: Efficient data querying using `useSWR`.
- **Forms**: User-friendly forms created with `react-hook-form`.
- **Routing**: Custom routing system (note: this is a bad practice and should be replaced with a standard routing library in the future).

## Technologies Used
- **Frontend**: React
  - **Map**: Leaflet
  - **Forms**: react-hook-form
  - **Data Fetching**: useSWR
- **Backend**: Django
- **Routing**: Custom routing system

## Installation

### Prerequisites
- Node.js
- Python
- Django

### Frontend Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>/frontend
   docker compose up
   ```


## Usage
1. Open your browser and navigate to `http://localhost:8080` for the frontend.
2. Use the map interface to create markers for each field.
3. View the list of all tracked fields and pesticides from the respective pages.

## Notes
- The custom routing system used in this project is a temporary solution due to time constraints. It is recommended to replace it with a standard routing library like `react-router` in future iterations.

## More About Technologies
- [React](https://reactjs.org/)
- [Leaflet](https://leafletjs.com/)
- [react-hook-form](https://react-hook-form.com/)
- [useSWR](https://swr.vercel.app/)
- [Django](https://www.djangoproject.com/)
