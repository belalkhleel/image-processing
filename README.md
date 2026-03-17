# Image Processing API

## Project Overview

This project is a Node.js + Express application written in TypeScript that allows users to resize images via an API endpoint.  

Key features:

- TypeScript for type safety
- Express.js for routing
- Sharp for image processing
- Jasmine for testing
- ESLint & Prettier for code quality and formatting

---


## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-folder>
````

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Start the server:

```bash
npm start
```

Server runs on: `http://localhost:3000`

---

## ⚡ Available Scripts

| Script           | Command                                   | Description                     |
| ---------------- | ----------------------------------------- | ------------------------------- |
| `npm start`      | `node dist/index.js`                      | Starts the server               |
| `npm run build`  | `tsc`                                     | Compiles TypeScript             |
| `npm test`       | `jasmine`                                 | Runs Jasmine tests              |
| `npm run lint`   | `eslint . --ext .ts`                      | Runs ESLint                     |
| `npm run format` | `prettier --write '**/*.{ts,js,json,md}'` | Formats all files with Prettier |

---

## 🌐 API Endpoint

### Base URL

```
http://localhost:3000/api/images
```

### GET /api/images

**Description:** Resizes an image and returns it.

**Query Parameters:**

| Parameter | Type   | Required | Description                                                               |
| --------- | ------ | -------- | ------------------------------------------------------------------------- |
| filename  | string | Yes      | Name of the image file (without extension). Must exist in `images/full/`. |
| width     | number | Yes      | Width in pixels (positive integer).                                       |
| height    | number | Yes      | Height in pixels (positive integer).                                      |

---

### 🔹 Available Images

| Filename (without extension) |
| ---------------------------- |
| encenadaport                 |
| fjord                        |
| icelandwaterfall             |
| palmtunnel                   |
| santamonica                  |

**Example:**

```http
GET /api/images?filename=encenadaport&width=200&height=200
```

---

### 🔹 Success Response

**Status Code:** 200 OK
**Content:** Returns resized JPEG image.

**Example:**
Resized image saved as: `images/thumb/encenadaport-200x200.jpg`

---

### 🔹 Error Responses

| Status Code | Condition                                         | Message                                      |
| ----------- | ------------------------------------------------- | -------------------------------------------- |
| 400         | Missing `filename`                                | `Missing filename parameter`                 |
| 400         | Missing `width` or `height`                       | `Missing width or height parameters`         |
| 400         | Invalid width/height (non-number, zero, negative) | `Width and height must be positive integers` |
| 404         | Image not found                                   | `Image not found`                            |
| 500         | Internal error                                    | `Internal Server Error`                      |

---

### Notes

* Resized images are cached in `images/thumb/`. If a requested size already exists, the server returns the cached file.
* All images are `.jpg`.
* Original images must be placed in `images/full/`.
* Resized images naming convention: `<filename>-<width>x<height>.jpg`.

---

## 🧪 Testing

* Jasmine is used for API and utility function tests.
* Run tests:

```bash
npm run test
```

**Tested Scenarios:**

* Missing query parameters (filename, width, height)
* Invalid width/height values
* Non-existent images
* Successful resize of valid images

---

## 📌 Conclusion

This project demonstrates:

* TypeScript + Node.js + Express integration
* Proper API validation and error handling
* Image processing with caching
* Full test coverage with Jasmine
* Code quality maintained with ESLint and Prettier

> All endpoints, scripts, and functionality are verified to work correctly.

```
