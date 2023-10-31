"use client";

import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Searchbar from "../../components/Searchbar";
import { GitUser, Repository } from "../../types";
import { getUser, getUserRepos, searchUserRepos } from "../../githubApi";
import RepoList from "../../components/RepoList";
import GitUserProfile from "../../components/GitUserProfile";

/**
 * Returns a list of all available languages in the given repositories
 * Used to populate the language filter
 *
 * @param repos
 * @returns all available languages in repos
 */
function getLanguageOptions(repos: Repository[]): string[] {
  // Initialize an empty set to store unique languages
  const uniqueLanguages = new Set<string>();
  // Iterate through the repositories and add languages
  for (const repo of repos) {
    const language = repo.language;
    if (language) {
      uniqueLanguages.add(language);
    }
  }
  // Convert the set to an array and sort it
  const languageOptions = Array.from(uniqueLanguages).sort();
  return languageOptions;
}

/**
 * User page to show Git user profile and his repositories
 * Shows a searchbar to filter repositories by name and language
 *
 * @param params params.name -> username from URL
 */
export default function UserPage({ params }: { params: { name: string } }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<GitUser | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userRepos, setUserRepos] = useState<Repository[]>([]); // List of all user repositories -> to not refetch when emptying search term
  const [repos, setRepos] = useState<Repository[]>([]); // List of repositories to display (list can be filtered)
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [foundCount, setFoundCount] = useState(0);
  const [language, setLanguage] = useState<string | null>(null); // language filter
  const [languageOptions, setLanguageOptions] = useState<string[]>([]); // language filter options

  const handleSearch = () => {
    // if search term is empty and no language filter, display all repos
    if (searchTerm === "" && !language) {
      setRepos(userRepos);
      setFoundCount(0); // reset found count
    } else {
      setLoadingRepos(true);
      setFoundCount(0);
      searchUserRepos(params.name, searchTerm, language).then(
        (filteredRepos) => {
          setLoadingRepos(false);
          setRepos(filteredRepos);
          setFoundCount(filteredRepos.length);
        }
      );
    }
  };

  // fetch user and user repos on page load
  useEffect(() => {
    setLoadingUser(true);
    getUser(params.name).then((user) => {
      setLoadingUser(false);
      setUser(user);
      if (user) {
        setLoadingRepos(true);
        getUserRepos(user.login).then((repos) => {
          setUserRepos(repos);
          setRepos(repos);
          setLoadingRepos(false);
        });
      }
    });
  }, []);

  // when language filter changes, trigger search
  useEffect(() => {
    handleSearch();
  }, [language]);
  // when user repos change, update language options
  useEffect(() => {
    setLanguageOptions(getLanguageOptions(userRepos));
  }, [userRepos]);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <GitUserProfile loading={loadingUser} user={user} />
      </Box>
      {(user || loadingUser) && (
        <Searchbar
          searchType="repository"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          languageOptions={languageOptions}
          setLanguage={setLanguage}
        />
      )}
      {/* change text for only one match */}
      {foundCount === 1 && (
        <Typography variant="body2" sx={{ mx: 3, mt: 2 }}>
          <b>{foundCount} </b> repository matching <b>{searchTerm}</b> was
          found.
        </Typography>
      )}
      {foundCount > 1 && (
        <Typography variant="body2" sx={{ mx: 3, mt: 2 }}>
          <b>{foundCount} </b> repositories matching <b>{searchTerm}</b> were
          found.
        </Typography>
      )}
      {(user || loadingUser) && (
        <RepoList loading={loadingRepos} repos={repos} />
      )}
    </Container>
  );
}
