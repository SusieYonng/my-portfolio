export const experiences = [
  {
    title: "Full-Stack Software Engineer Co-op",
    company: "Fidelity Investments, Boston, MA",
    duration: "Jan 2026 – Jul 2026",
    summary:
      "Worked within the Advanced Strategies & Research Technology team, collaborating cross-functionally with Delivery Leaders, Data Scientists/Analysts, Data Engineers in an Agile standup environment. Engineered end-to-end data platform services, asynchronous microservices, and data pipelines to power enterprise data workflows.",
    responsibilities: [
      {
        title: "Microservices & Anomaly Detection (ADaaS)",
        detail:
          "Implemented and deployed an asynchronous RESTful microservice (FastAPI on AWS EC2) backed by a Snowflake transactional state-machine queue to evaluate time-series ML and statistical models (Prophet, AutoARIMA, Z-Score, Standard Deviation) for internal data metrics, authoring complex SQL queries to analyze 1.9K+ test request logs and performance metrics across sandbox databases.",
      },
      {
        title: "Real-time Event Streaming",
        detail:
          "Engineered an event-driven streaming ingestion pipeline with Apache Kafka to reliably buffer 10K–30K daily news articles from Factiva’s Pub/Sub API into AWS S3, implementing partition-aware processing and process-safe deduplication.",
      },
      // {
      //   title: "End-to-End Data Pipeline & Ingestion",
      //   detail:
      //     "Built web scrapers (Playwright/Selenium/API) routed securely through proxies, Apache Kafka Pub/Sub streaming systems, and automated Snowpipe ETL pipelines deployed via Jenkins to securely transfer external datasets into AWS S3 and Snowflake.",
      // },
      {
        title: "Automated Web Scraping & Ingestion",
        detail:
          "Developed hybrid Python web-scraping utilities combining Playwright/Selenium browser automation and RESTful API calls to collect business metrics, routing securely through corporate and Bright Data proxy networks.",
      },
      {
        title: "Enterprise ETL & Data Quality Governance",
        detail:
          "Orchestrated batch ETL pipelines using AutoSys, AWS S3, and Snowpipe via Jenkins CI/CD workflows, establishing automated GDQ monitoring and custom email alerting for data pipelines.",
      },
      {
        title: "Exploratory Data Analytics",
        detail:
          "Spearheaded an exploratory Tableau initiative on live hourly EIA grid feeds by engineering Snowflake SQL ETL pipelines to perform data cleaning and deduplication into synchronized transient tables, designing custom metrics (e.g., hourly load profiles, day/night ratios, weekend vs. weekday trends) to filter noise and evaluate energy usage patterns against public AI data center distribution.",
      },
    ],
  },
  {
    title: "Software Development Engineer",
    company: "Xiaomi, Beijing, China",
    duration: "Sep 2020 – Aug 2024",
    summary: "",
    responsibilities: [
      {
        title: "Cross-Functional Collaboration",
        detail:
          "Worked closely with cross-functional teams, including UI/UX designers, backend developers, and product managers, to deliver user-centered solutions aligned with business goals.",
      },
      {
        title: "Web Development",
        detail:
          "Developed responsive and interactive web and H5 pages using popular front-end frameworks such as Vue.js and React, ensuring cross-platform compatibility and a seamless user experience.",
      },
      {
        title: "Performance Optimization",
        detail:
          "Enhanced application performance by optimizing code, reducing load times, and implementing best practices for web performance, improving overall efficiency and user engagement.",
      },
      {
        title: "Debugging and Troubleshooting",
        detail:
          "Diagnosed and resolved issues across development and production, responding promptly to production incidents with real-time monitoring tools to ensure rapid resolution and minimize user impact.",
      },
      {
        title: "Data Tracking & Analytics",
        detail:
          "Integrated Firebase (Google Analytics) or Google Pub/Sub for user activity tracking, enabling data-driven insights for product optimization and decision-making.",
      },
      {
        title: "A/B Testing and Experimentation",
        detail:
          "Led A/B testing using platforms like Google Optimize or custom-built front-end tools, optimizing features through data-driven experimentation, and implementing gray release strategies for new features.",
      },
      {
        title: "Feature Iteration and Rapid Prototyping",
        detail:
          "Adapted quickly to evolving product requirements by delivering new features and updates under tight deadlines, iterating on feedback and improving product quality.",
      },
      {
        title: "Technical Documentation",
        detail:
          "Created comprehensive technical documentation to document troubleshooting processes, new feature implementations, and system integrations, supporting team knowledge-sharing and future project scalability.",
      },
    ],
  },
];
