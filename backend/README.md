# User API Documentation

## Endpoints

### 1. Get User Profile from Username

Retrieve a user's profile based on their username.

- **URL**: `/api/user/getUserProfileFromUsername`
- **Method**: `GET`
- **Parameters**:
  - `username` (string): The username of the user whose profile you want to retrieve.
- **Response**:
  - If successful:
    - Status code: 200
    - Body: JSON object containing the user profile
  - If user not found:
    - Status code: 404
    - Body: Error message ("User Profile not found")

### 2. Get User Profile from UserID

Retrieve a user's profile based on their user ID.

- **URL**: `/api/user/getUserProfileFromUserID`
- **Method**: `GET`
- **Parameters**:
  - `userID` (string): The unique user ID of the user whose profile you want to retrieve.
- **Response**:
  - If successful:
    - Status code: 200
    - Body: JSON object containing the user profile
  - If user not found:
    - Status code: 404
    - Body: Error message ("User Profile not found")

### 3. Update User Profile

Allows users to update their profile information.

- **URL**: `/api/user/updateUserProfile`
- **Method**: `PATCH`
- **Request Body**:
  - JSON object with fields to update (e.g., name, bio, etc.)
- **Response**:
  - If successful:
    - Status code: 200
    - Body: Updated user profile
  - If error:
    - Status code: 500
    - Body: Error message

### 4. Update User Profile Icon

Handles updating the user's profile icon (avatar/photo).

- **URL**: `/api/user/updateUserProfileIcon`
- **Method**: `PATCH`
- **Request Body**:
  - `photo` (file): The user's new profile photo (uploaded using `multer`)
  - `userID` (string): The unique user ID
- **Response**:
  - If successful:
    - Status code: 200
    - Body: Updated user profile with the new icon
  - If error:
    - Status code: 500
    - Body: Error message

### 5. Sign Up New User

Handles user registration (sign-up).

- **URL**: `/api/user/signUpNewUser`
- **Method**: `POST`
- **Request Body**:
  - JSON object with user registration data (e.g., username, password, etc.)
- **Response**:
  - If successful:
    - Status code: 200
    - Body: Success message or user token
  - If error:
    - Status code: 500
    - Body: Error message

### 6. Sign In User

Handles user login (sign-in).

- **URL**: `/api/user/signInUser`
- **Method**: `POST`
- **Request Body**:
  - JSON object with user login data (e.g., username, password, etc.)
- **Response**:
  - If successful:
    - Status code: 200
    - Body: Success message or user token
  - If error:
    - Status code: 500
    - Body: Error message

### 7. Search User

Allows searching for users based on specific criteria.

- **URL**: `/api/user/searchUser`
- **Method**: `GET`
- **Parameters**:
  - Query parameters for search criteria (e.g., name, location, etc.)
- **Response**:
  - If successful:
    - Status code: 200
    - Body: List of matching user profiles
  - If no results:
    - Status code: 200
    - Body: Empty array

