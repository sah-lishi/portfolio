export const projects = [
  {
    id: 1,
    number: "01",
    title: "Blog API Service",
    description:
      "Production-ready blog backend with secure JWT cookie-based authentication and refresh token rotation. Implements owner-based authorization, ensuring users can only manage their own content, along with advanced authentication features like password reset flow and protected routes. Supports blog CRUD operations with image uploads via Cloudinary, along with pagination, search, sorting, and optimized queries using MongoDB aggregation pipelines. Includes global and route-level rate limiting, structured error handling, and complete Swagger/OpenAPI documentation. Deployed on Render with MongoDB Atlas, focusing on security, performance, and scalable backend architecture.",
    tags: ["Node.js", "Express", "MongoDB", "JWT Cookies", "Refresh Tokens", "Cloudinary", "Rate Limiting", "Swagger"],
    liveUrl: "https://blog-app-71ay.onrender.com/api/docs",
    githubUrl: "https://github.com/sah-lishi/blog-app",
    highlight: "JWT Cookie Auth + Owner Access + Rate Limiting",
  },
  {
    id: 2,
    number: "02",
    title: "Smart Travel API",
    description:
      "REST API that aggregates travel-related data for a given city by integrating multiple external services. Fetches weather, air quality index, top news headlines, and popular places using APIs like OpenWeatherMap, GNews, and Geoapify, and returns a combined response. Includes basic in-memory caching to reduce external API calls and a metrics endpoint to track request count, external API usage, failures, and response time. Implements rate limiting and provides Swagger/OpenAPI documentation for testing and understanding endpoints. Deployed on Render.",
    tags: ["Node.js", "Express", "Axios", "API Integration", "Caching", "Rate Limiting", "Metrics"],
    liveUrl: "https://smart-travel-api.onrender.com/api/v1/docs/",
    githubUrl: "https://github.com/sah-lishi/smart-travel-api",
    highlight: "API Integrations + Metrics + Caching",
  },
  {
    id: 3,
    number: "03",
    title: "Financial Management API",
    description:
      "Production-ready financial management API with secure JWT cookie-based authentication and refresh token rotation. Implements role-based access control (Admin, Analyst, Viewer) along with owner-based authorization for secure data handling. Includes advanced financial analytics APIs such as summary insights, category breakdown, recent activity, and monthly trends using MongoDB aggregation pipelines. Features pagination, filtering, and optimized data retrieval using $facet, along with complete Swagger/OpenAPI documentation. Deployed on Render with MongoDB Atlas, following scalable architecture and clean backend practices.",
    tags: ["Node.js", "Express", "MongoDB", "JWT Auth", "Refresh Tokens", "RBAC", "Aggregation", "Analytics APIs", "Swagger"],
    liveUrl: "https://financial-management-system-o7e8.onrender.com/api/v1/docs",
    githubUrl: "https://github.com/sah-lishi/financial-management-system",
    highlight: "JWT Auth + RBAC + Analytics APIs",
  },
];