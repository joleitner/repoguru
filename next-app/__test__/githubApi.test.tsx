// import React from "react";
// import "@testing-library/jest-dom";

// import {
//   searchUsers,
//   searchRepositories,
//   getUser,
//   getUserRepositories,
// } from "@/githubApi";

// describe("GitHub API Functions", () => {
//   beforeEach(() => {
//     fetch.resetMock();

//   // Test for searchUsers function
//   test("searchUsers function", async () => {
//     const mockUsers = [{ login: "user1" }, { login: "user2" }];
//     const mockResponse = { items: mockUsers };

//     fetch.mockResolvedValueOnce({
//       json: jest.fn().mockResolvedValueOnce(mockResponse),
//     });

//     const users = await searchUsers("test");

//     expect(fetch).toHaveBeenCalledWith(
//       "https://api.github.com/search/users?q=test"
//     );
//     expect(users).toEqual(mockUsers);
//   });

//   // Test for searchRepositories function
//   test("searchRepositories function", async () => {
//     const mockRepositories = [{ name: "repo1" }, { name: "repo2" }];
//     const mockResponse = { items: mockRepositories };

//     fetch.mockResolvedValueOnce({
//       json: jest.fn().mockResolvedValueOnce(mockResponse),
//     });

//     const repositories = await searchRepositories("test");

//     expect(fetch).toHaveBeenCalledWith(
//       "https://api.github.com/search/repositories?q=test"
//     );
//     expect(repositories).toEqual(mockRepositories);
//   });

//   // Test for getUser function
//   test("getUser function", async () => {
//     const mockUser = { login: "testuser" };

//     fetch.mockResolvedValueOnce({
//       json: jest.fn().mockResolvedValueOnce(mockUser),
//     });

//     const user = await getUser("testuser");

//     expect(fetch).toHaveBeenCalledWith("https://api.github.com/users/testuser");
//     expect(user).toEqual(mockUser);
//   });

//   // Test for getUserRepositories function
//   test("getUserRepositories function", async () => {
//     const mockRepositories = [{ name: "repo1" }, { name: "repo2" }];

//     fetch.mockResolvedValueOnce({
//       json: jest.fn().mockResolvedValueOnce(mockRepositories),
//     });

//     const repositories = await getUserRepositories("testuser");

//     expect(fetch).toHaveBeenCalledWith(
//       "https://api.github.com/users/testuser/repos"
//     );
//     expect(repositories).toEqual(mockRepositories);
//   });
// });
