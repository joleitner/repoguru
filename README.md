# RepoGuru

## Description

RepoGuru a simple web application that allows you to search for GitHub repositories.
It was developed using React (Next.js) and TypeScript. For styling, I used Material UI.
I have also created stories with Storybook to showcase the components in isolation.

> The application is deployed on Vercel and can be accessed here: https://repoguru.vercel.app.

## Getting Started

To simplify the setup process, I decided to use Docker. If you don't have Docker installed, you can follow the instructions [here](https://docs.docker.com/get-docker/).

To run the application locally, clone the repository and navigate to the root directory and run the following command:

```bash
docker-compose up
```

This will build the Docker image and start the application.

- Once the application is running, you can access it at http://localhost:3000.
- The storybook is available at http://localhost:6006.

## Testing

To run the tests, you can run the following command:

```bash
docker-compose run app npm run test
```

## Future improvments

- [ ] Add pagination to the search results (only up to 100 results at the moment)
- [ ] Add sorting to the repository search results
- [ ] Adding a tab to search repositories globally
- [ ] Write more tests
- [ ] Add CI/CD pipeline to run tests automatically before deploying
- [ ] Adding accounts to save favorite repositories
- [ ] Enable repo search for GitLab and other Git providers
- [ ] ...

Developing is a continuous process and there are always things that can be improved.. 😅
